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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3DeploymentsQueryKey() {
  return ['v3', '/v3/deployments'] as const
}

export function getV3DeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3DeploymentsQueryKey>
  >({
    queryKey: getV3DeploymentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.deployments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Deployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3DeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3DeploymentsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV3DeploymentsMutationKey() {
  return ['v3', '/v3/deployments', 'POST'] as const
}

export function getPostV3DeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3DeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.deployments.$post>) {
      return parseResponse(client.v3.deployments.$post(args, options))
    },
  })
}

export function createPostV3Deployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.deployments.$post>,
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
    const mutationDefaults = getPostV3DeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3DeploymentsIdQueryKey(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
) {
  return ['v3', '/v3/deployments/:id', args] as const
}

export function getV3DeploymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DeploymentsIdQueryKey>
  >({
    queryKey: getV3DeploymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.deployments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3DeploymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3DeploymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3DeploymentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV3DeploymentsIdMutationKey() {
  return ['v3', '/v3/deployments/:id', 'DELETE'] as const
}

export function getDeleteV3DeploymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.deployments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3DeploymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.deployments)[':id']['$delete']>) {
      return parseResponse(client.v3.deployments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV3DeploymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.deployments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV3DeploymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3HeartbeatsLogIdIdMutationKey() {
  return ['v3', '/v3/heartbeats/:logId/:id', 'POST'] as const
}

export function getPostV3HeartbeatsLogIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3HeartbeatsLogIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>,
    ) {
      return parseResponse(client.v3.heartbeats[':logId'][':id'].$post(args, options))
    },
  })
}

export function createPostV3HeartbeatsLogIdId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>,
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
    const mutationDefaults = getPostV3HeartbeatsLogIdIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3LogsQueryKey() {
  return ['v3', '/v3/logs'] as const
}

export function getV3LogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3LogsQueryKey>
  >({
    queryKey: getV3LogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV3LogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3LogsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV3LogsMutationKey() {
  return ['v3', '/v3/logs', 'POST'] as const
}

export function getPostV3LogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.logs.$post>) {
      return parseResponse(client.v3.logs.$post(args, options))
    },
  })
}

export function createPostV3Logs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$post>>>>>,
        TError,
        InferRequestType<typeof client.v3.logs.$post>,
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
    const mutationDefaults = getPostV3LogsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3LogsIdQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':id']['$get']>,
) {
  return ['v3', '/v3/logs/:id', args] as const
}

export function getV3LogsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v3.logs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsIdQueryKey>
  >({
    queryKey: getV3LogsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3LogsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3LogsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3LogsIdDiagnoseQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
) {
  return ['v3', '/v3/logs/:id/_diagnose', args] as const
}

export function getV3LogsIdDiagnoseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsIdDiagnoseQueryKey>
  >({
    queryKey: getV3LogsIdDiagnoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':id']._diagnose.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3LogsIdDiagnose<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsIdDiagnoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3LogsIdDiagnoseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV3LogsIdDisableMutationKey() {
  return ['v3', '/v3/logs/:id/_disable', 'POST'] as const
}

export function getPostV3LogsIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':id']['_disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':id']['_disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogsIdDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.logs)[':id']['_disable']['$post']>) {
      return parseResponse(client.v3.logs[':id']._disable.$post(args, options))
    },
  })
}

export function createPostV3LogsIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':id']['_disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.logs)[':id']['_disable']['$post']>,
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
    const mutationDefaults = getPostV3LogsIdDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3LogsIdEnableMutationKey() {
  return ['v3', '/v3/logs/:id/_enable', 'POST'] as const
}

export function getPostV3LogsIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':id']['_enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':id']['_enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogsIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.logs)[':id']['_enable']['$post']>) {
      return parseResponse(client.v3.logs[':id']._enable.$post(args, options))
    },
  })
}

export function createPostV3LogsIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':id']['_enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.logs)[':id']['_enable']['$post']>,
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
    const mutationDefaults = getPostV3LogsIdEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3MessagesLogIdQueryKey(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
) {
  return ['v3', '/v3/messages/:logId', args] as const
}

export function getV3MessagesLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3MessagesLogIdQueryKey>
  >({
    queryKey: getV3MessagesLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.messages[':logId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3MessagesLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3MessagesLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3MessagesLogIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV3MessagesLogIdMutationKey() {
  return ['v3', '/v3/messages/:logId', 'POST'] as const
}

export function getPostV3MessagesLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MessagesLogIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.messages)[':logId']['$post']>) {
      return parseResponse(client.v3.messages[':logId'].$post(args, options))
    },
  })
}

export function createPostV3MessagesLogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId']['$post']>,
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
    const mutationDefaults = getPostV3MessagesLogIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3MessagesLogIdMutationKey() {
  return ['v3', '/v3/messages/:logId', 'DELETE'] as const
}

export function getDeleteV3MessagesLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3MessagesLogIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.messages)[':logId']['$delete']>) {
      return parseResponse(client.v3.messages[':logId'].$delete(args, options))
    },
  })
}

export function createDeleteV3MessagesLogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId']['$delete']>,
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
    const mutationDefaults = getDeleteV3MessagesLogIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3MessagesLogIdBulkMutationKey() {
  return ['v3', '/v3/messages/:logId/_bulk', 'POST'] as const
}

export function getPostV3MessagesLogIdBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MessagesLogIdBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>,
    ) {
      return parseResponse(client.v3.messages[':logId']._bulk.$post(args, options))
    },
  })
}

export function createPostV3MessagesLogIdBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>,
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
    const mutationDefaults = getPostV3MessagesLogIdBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3MessagesLogIdFixMutationKey() {
  return ['v3', '/v3/messages/:logId/_fix', 'POST'] as const
}

export function getPostV3MessagesLogIdFixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId']['_fix']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId']['_fix']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MessagesLogIdFixMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.messages)[':logId']['_fix']['$post']>,
    ) {
      return parseResponse(client.v3.messages[':logId']._fix.$post(args, options))
    },
  })
}

export function createPostV3MessagesLogIdFix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId']['_fix']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId']['_fix']['$post']>,
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
    const mutationDefaults = getPostV3MessagesLogIdFixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3MessagesLogIdIdQueryKey(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
) {
  return ['v3', '/v3/messages/:logId/:id', args] as const
}

export function getV3MessagesLogIdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3MessagesLogIdIdQueryKey>
  >({
    queryKey: getV3MessagesLogIdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.messages[':logId'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3MessagesLogIdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3MessagesLogIdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3MessagesLogIdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV3MessagesLogIdIdMutationKey() {
  return ['v3', '/v3/messages/:logId/:id', 'DELETE'] as const
}

export function getDeleteV3MessagesLogIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3MessagesLogIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$delete']>,
    ) {
      return parseResponse(client.v3.messages[':logId'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV3MessagesLogIdId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV3MessagesLogIdIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3MessagesLogIdIdFixMutationKey() {
  return ['v3', '/v3/messages/:logId/:id/_fix', 'POST'] as const
}

export function getPostV3MessagesLogIdIdFixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MessagesLogIdIdFixMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>,
    ) {
      return parseResponse(client.v3.messages[':logId'][':id']._fix.$post(args, options))
    },
  })
}

export function createPostV3MessagesLogIdIdFix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>,
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
    const mutationDefaults = getPostV3MessagesLogIdIdFixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3MessagesLogIdIdHideMutationKey() {
  return ['v3', '/v3/messages/:logId/:id/_hide', 'POST'] as const
}

export function getPostV3MessagesLogIdIdHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MessagesLogIdIdHideMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>,
    ) {
      return parseResponse(client.v3.messages[':logId'][':id']._hide.$post(args, options))
    },
  })
}

export function createPostV3MessagesLogIdIdHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>,
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
    const mutationDefaults = getPostV3MessagesLogIdIdHideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3SourcemapsLogIdMutationKey() {
  return ['v3', '/v3/sourcemaps/:logId', 'POST'] as const
}

export function getPostV3SourcemapsLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.sourcemaps)[':logId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.sourcemaps)[':logId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3SourcemapsLogIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.sourcemaps)[':logId']['$post']>) {
      return parseResponse(client.v3.sourcemaps[':logId'].$post(args, options))
    },
  })
}

export function createPostV3SourcemapsLogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.sourcemaps)[':logId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.sourcemaps)[':logId']['$post']>,
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
    const mutationDefaults = getPostV3SourcemapsLogIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3UptimechecksQueryKey() {
  return ['v3', '/v3/uptimechecks'] as const
}

export function getV3UptimechecksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3UptimechecksQueryKey>
  >({
    queryKey: getV3UptimechecksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.uptimechecks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Uptimechecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3UptimechecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3UptimechecksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
