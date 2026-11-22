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

export function getApiKey() {
  return ['api'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInternalKey() {
  return ['internal'] as const
}

export function getTunnelauthKey() {
  return ['tunnelauth'] as const
}

export function getWarmupKey() {
  return ['warmup'] as const
}

export function getPostApiV1AgentTelemetryMutationKey() {
  return ['api', '/api/v1/AgentTelemetry', 'POST'] as const
}

export function getPostApiV1AgentTelemetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.AgentTelemetry.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.AgentTelemetry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AgentTelemetryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.AgentTelemetry.$post>) {
      return parseResponse(client.api.v1.AgentTelemetry.$post(args, options))
    },
  })
}

export function createPostApiV1AgentTelemetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.AgentTelemetry.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v1.AgentTelemetry.$post>,
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
    const mutationDefaults = getPostApiV1AgentTelemetryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1AgentTelemetryStandaloneMutationKey() {
  return ['api', '/api/v1/AgentTelemetry/standalone', 'POST'] as const
}

export function getPostApiV1AgentTelemetryStandaloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.AgentTelemetry.standalone.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.AgentTelemetry.standalone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AgentTelemetryStandaloneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.AgentTelemetry.standalone.$post>) {
      return parseResponse(client.api.v1.AgentTelemetry.standalone.$post(args, options))
    },
  })
}

export function createPostApiV1AgentTelemetryStandalone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.AgentTelemetry.standalone.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v1.AgentTelemetry.standalone.$post>,
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
    const mutationDefaults = getPostApiV1AgentTelemetryStandaloneMutationOptions<
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

export function getApiV1AgentsFamilyQueryKey(
  args: InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
) {
  return ['api', '/api/v1/Agents/:family', args] as const
}

export function getApiV1AgentsFamilyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AgentsFamilyQueryKey>
  >({
    queryKey: getApiV1AgentsFamilyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Agents[':family'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AgentsFamily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AgentsFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AgentsFamilyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1EnvironmentsQueryKey(
  args: InferRequestType<typeof client.api.v1.Environments.$get>,
) {
  return ['api', '/api/v1/Environments', args] as const
}

export function getApiV1EnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.Environments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EnvironmentsQueryKey>
  >({
    queryKey: getApiV1EnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Environments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Environments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1EnvironmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1EnvironmentsMutationKey() {
  return ['api', '/api/v1/Environments', 'POST'] as const
}

export function getPostApiV1EnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.Environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.Environments.$post>) {
      return parseResponse(client.api.v1.Environments.$post(args, options))
    },
  })
}

export function createPostApiV1Environments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.Environments.$post>,
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
    const mutationDefaults = getPostApiV1EnvironmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1EnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId', args] as const
}

export function getApiV1EnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getApiV1EnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EnvironmentsEnvironmentIdQueryKey>
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
      ...getApiV1EnvironmentsEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1EnvironmentsEnvironmentIdMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId', 'DELETE'] as const
}

export function getDeleteApiV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.Environments[':environmentId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1EnvironmentsEnvironmentId<
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
                  ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getPatchApiV1EnvironmentsEnvironmentIdMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId', 'PATCH'] as const
}

export function getPatchApiV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>,
    ) {
      return parseResponse(client.api.v1.Environments[':environmentId'].$patch(args, options))
    },
  })
}

export function createPatchApiV1EnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>,
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
    const mutationDefaults = getPatchApiV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getPostApiV1EnvironmentsEnvironmentIdCallbackMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/_callback', 'POST'] as const
}

export function getPostApiV1EnvironmentsEnvironmentIdCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsEnvironmentIdCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId']._callback.$post(args, options),
      )
    },
  })
}

export function createPostApiV1EnvironmentsEnvironmentIdCallback<
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
                  (typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']
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
    const mutationDefaults = getPostApiV1EnvironmentsEnvironmentIdCallbackMutationOptions<
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

export function getApiV1EnvironmentsEnvironmentIdArchiveQueryKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId/archive', args] as const
}

export function getApiV1EnvironmentsEnvironmentIdArchiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EnvironmentsEnvironmentIdArchiveQueryKey>
  >({
    queryKey: getApiV1EnvironmentsEnvironmentIdArchiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].archive.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EnvironmentsEnvironmentIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['archive']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EnvironmentsEnvironmentIdArchiveQueryKey>
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
      ...getApiV1EnvironmentsEnvironmentIdArchiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1EnvironmentsEnvironmentIdArchiveMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/archive', 'POST'] as const
}

export function getPostApiV1EnvironmentsEnvironmentIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsEnvironmentIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].archive.$post(args, options),
      )
    },
  })
}

export function createPostApiV1EnvironmentsEnvironmentIdArchive<
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
                  (typeof client.api.v1.Environments)[':environmentId']['archive']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$post']>,
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
    const mutationDefaults = getPostApiV1EnvironmentsEnvironmentIdArchiveMutationOptions<
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

export function getPostApiV1EnvironmentsEnvironmentIdExportMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/export', 'POST'] as const
}

export function getPostApiV1EnvironmentsEnvironmentIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsEnvironmentIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['export']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.Environments[':environmentId'].export.$post(args, options))
    },
  })
}

export function createPostApiV1EnvironmentsEnvironmentIdExport<
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
                ReturnType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>,
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
    const mutationDefaults = getPostApiV1EnvironmentsEnvironmentIdExportMutationOptions<
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

export function getPatchApiV1EnvironmentsEnvironmentIdFolderMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/folder', 'PATCH'] as const
}

export function getPatchApiV1EnvironmentsEnvironmentIdFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1EnvironmentsEnvironmentIdFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].folder.$patch(args, options),
      )
    },
  })
}

export function createPatchApiV1EnvironmentsEnvironmentIdFolder<
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
                  (typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']>,
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
    const mutationDefaults = getPatchApiV1EnvironmentsEnvironmentIdFolderMutationOptions<
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

export function getApiV1EnvironmentsEnvironmentIdHeartbeattokenQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
) {
  return ['api', '/api/v1/Environments/:environmentId/heartbeattoken', args] as const
}

export function getApiV1EnvironmentsEnvironmentIdHeartbeattokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EnvironmentsEnvironmentIdHeartbeattokenQueryKey>
  >({
    queryKey: getApiV1EnvironmentsEnvironmentIdHeartbeattokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].heartbeattoken.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EnvironmentsEnvironmentIdHeartbeattoken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EnvironmentsEnvironmentIdHeartbeattokenQueryKey>
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
      ...getApiV1EnvironmentsEnvironmentIdHeartbeattokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1EnvironmentsEnvironmentIdNotifyMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/notify', 'POST'] as const
}

export function getPostApiV1EnvironmentsEnvironmentIdNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsEnvironmentIdNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['notify']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.Environments[':environmentId'].notify.$post(args, options))
    },
  })
}

export function createPostApiV1EnvironmentsEnvironmentIdNotify<
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
                ReturnType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>,
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
    const mutationDefaults = getPostApiV1EnvironmentsEnvironmentIdNotifyMutationOptions<
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

export function getPutApiV1EnvironmentsEnvironmentIdPortsPortMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/ports/:port', 'PUT'] as const
}

export function getPutApiV1EnvironmentsEnvironmentIdPortsPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EnvironmentsEnvironmentIdPortsPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].ports[':port'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1EnvironmentsEnvironmentIdPortsPort<
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
                  (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
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
    const mutationDefaults = getPutApiV1EnvironmentsEnvironmentIdPortsPortMutationOptions<
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

export function getDeleteApiV1EnvironmentsEnvironmentIdPortsPortMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/ports/:port', 'DELETE'] as const
}

export function getDeleteApiV1EnvironmentsEnvironmentIdPortsPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EnvironmentsEnvironmentIdPortsPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].ports[':port'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1EnvironmentsEnvironmentIdPortsPort<
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
                  (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
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
    const mutationDefaults = getDeleteApiV1EnvironmentsEnvironmentIdPortsPortMutationOptions<
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

export function getPatchApiV1EnvironmentsEnvironmentIdRestoreMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/restore', 'PATCH'] as const
}

export function getPatchApiV1EnvironmentsEnvironmentIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1EnvironmentsEnvironmentIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].restore.$patch(args, options),
      )
    },
  })
}

export function createPatchApiV1EnvironmentsEnvironmentIdRestore<
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
                  (typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']
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
    const mutationDefaults = getPatchApiV1EnvironmentsEnvironmentIdRestoreMutationOptions<
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

export function getPutApiV1EnvironmentsEnvironmentIdSecretsMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/secrets', 'PUT'] as const
}

export function getPutApiV1EnvironmentsEnvironmentIdSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EnvironmentsEnvironmentIdSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.Environments[':environmentId'].secrets.$put(args, options))
    },
  })
}

export function createPutApiV1EnvironmentsEnvironmentIdSecrets<
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
                    (typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']>,
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
    const mutationDefaults = getPutApiV1EnvironmentsEnvironmentIdSecretsMutationOptions<
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

export function getPostApiV1EnvironmentsEnvironmentIdShutdownMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/shutdown', 'POST'] as const
}

export function getPostApiV1EnvironmentsEnvironmentIdShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsEnvironmentIdShutdownMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].shutdown.$post(args, options),
      )
    },
  })
}

export function createPostApiV1EnvironmentsEnvironmentIdShutdown<
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
                  (typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']
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
    const mutationDefaults = getPostApiV1EnvironmentsEnvironmentIdShutdownMutationOptions<
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

export function getPostApiV1EnvironmentsEnvironmentIdStartMutationKey() {
  return ['api', '/api/v1/Environments/:environmentId/start', 'POST'] as const
}

export function getPostApiV1EnvironmentsEnvironmentIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EnvironmentsEnvironmentIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Environments)[':environmentId']['start']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.Environments[':environmentId'].start.$post(args, options))
    },
  })
}

export function createPostApiV1EnvironmentsEnvironmentIdStart<
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
                ReturnType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>,
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
    const mutationDefaults = getPostApiV1EnvironmentsEnvironmentIdStartMutationOptions<
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

export function getApiV1EnvironmentsEnvironmentIdStateQueryKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId/state', args] as const
}

export function getApiV1EnvironmentsEnvironmentIdStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EnvironmentsEnvironmentIdStateQueryKey>
  >({
    queryKey: getApiV1EnvironmentsEnvironmentIdStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EnvironmentsEnvironmentIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['state']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EnvironmentsEnvironmentIdStateQueryKey>
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
      ...getApiV1EnvironmentsEnvironmentIdStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EnvironmentsEnvironmentIdUpdatesQueryKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId/updates', args] as const
}

export function getApiV1EnvironmentsEnvironmentIdUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EnvironmentsEnvironmentIdUpdatesQueryKey>
  >({
    queryKey: getApiV1EnvironmentsEnvironmentIdUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Environments[':environmentId'].updates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EnvironmentsEnvironmentIdUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['updates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EnvironmentsEnvironmentIdUpdatesQueryKey>
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
      ...getApiV1EnvironmentsEnvironmentIdUpdatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1GenevaActionsBillingResendMutationKey() {
  return ['api', '/api/v1/GenevaActions/Billing/resend', 'POST'] as const
}

export function getPostApiV1GenevaActionsBillingResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.Billing.resend.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.GenevaActions.Billing.resend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsBillingResendMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.GenevaActions.Billing.resend.$post>,
    ) {
      return parseResponse(client.api.v1.GenevaActions.Billing.resend.$post(args, options))
    },
  })
}

export function createPostApiV1GenevaActionsBillingResend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.GenevaActions.Billing.resend.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.GenevaActions.Billing.resend.$post>,
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
    const mutationDefaults = getPostApiV1GenevaActionsBillingResendMutationOptions<
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

export function getApiV1GenevaActionsBillingEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>,
) {
  return ['api', '/api/v1/GenevaActions/Billing/:environmentId', args] as const
}

export function getApiV1GenevaActionsBillingEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenevaActionsBillingEnvironmentIdQueryKey>
  >({
    queryKey: getApiV1GenevaActionsBillingEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.GenevaActions.Billing[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1GenevaActionsBillingEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GenevaActionsBillingEnvironmentIdQueryKey>
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
      ...getApiV1GenevaActionsBillingEnvironmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1GenevaActionsBillingEnvironmentIdStateChangesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
) {
  return ['api', '/api/v1/GenevaActions/Billing/:environmentId/state-changes', args] as const
}

export function getApiV1GenevaActionsBillingEnvironmentIdStateChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenevaActionsBillingEnvironmentIdStateChangesQueryKey>
  >({
    queryKey: getApiV1GenevaActionsBillingEnvironmentIdStateChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1GenevaActionsBillingEnvironmentIdStateChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GenevaActionsBillingEnvironmentIdStateChangesQueryKey>
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
      ...getApiV1GenevaActionsBillingEnvironmentIdStateChangesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1GenevaActionsBillingEnvironmentIdStateChangesMutationKey() {
  return ['api', '/api/v1/GenevaActions/Billing/:environmentId/state-changes', 'POST'] as const
}

export function getPostApiV1GenevaActionsBillingEnvironmentIdStateChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsBillingEnvironmentIdStateChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1GenevaActionsBillingEnvironmentIdStateChanges<
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
                  (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
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
      getPostApiV1GenevaActionsBillingEnvironmentIdStateChangesMutationOptions<
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

export function getPostApiV1GenevaActionsConfigurationTargetMutationKey() {
  return ['api', '/api/v1/GenevaActions/Configuration/:target', 'POST'] as const
}

export function getPostApiV1GenevaActionsConfigurationTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsConfigurationTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Configuration[':target'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1GenevaActionsConfigurationTarget<
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
                ReturnType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>,
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
    const mutationDefaults = getPostApiV1GenevaActionsConfigurationTargetMutationOptions<
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

export function getApiV1GenevaActionsConfigurationTargetKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
) {
  return ['api', '/api/v1/GenevaActions/Configuration/:target/:key', args] as const
}

export function getApiV1GenevaActionsConfigurationTargetKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenevaActionsConfigurationTargetKeyQueryKey>
  >({
    queryKey: getApiV1GenevaActionsConfigurationTargetKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.GenevaActions.Configuration[':target'][':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1GenevaActionsConfigurationTargetKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GenevaActionsConfigurationTargetKeyQueryKey>
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
      ...getApiV1GenevaActionsConfigurationTargetKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1GenevaActionsConfigurationTargetKeyMutationKey() {
  return ['api', '/api/v1/GenevaActions/Configuration/:target/:key', 'DELETE'] as const
}

export function getDeleteApiV1GenevaActionsConfigurationTargetKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1GenevaActionsConfigurationTargetKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Configuration[':target'][':key'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1GenevaActionsConfigurationTargetKey<
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
                  (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
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
    const mutationDefaults = getDeleteApiV1GenevaActionsConfigurationTargetKeyMutationOptions<
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

export function getApiV1GenevaActionsEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
) {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId', args] as const
}

export function getApiV1GenevaActionsEnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenevaActionsEnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getApiV1GenevaActionsEnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.GenevaActions.Environments[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1GenevaActionsEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GenevaActionsEnvironmentsEnvironmentIdQueryKey>
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
      ...getApiV1GenevaActionsEnvironmentsEnvironmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1GenevaActionsEnvironmentsEnvironmentIdMutationKey() {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId', 'DELETE'] as const
}

export function getDeleteApiV1GenevaActionsEnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1GenevaActionsEnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Environments[':environmentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1GenevaActionsEnvironmentsEnvironmentId<
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
                    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
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
    const mutationDefaults = getDeleteApiV1GenevaActionsEnvironmentsEnvironmentIdMutationOptions<
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

export function getPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveMutationKey() {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId/archive', 'PUT'] as const
}

export function getPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Environments[':environmentId'].archive.$put(args, options),
      )
    },
  })
}

export function createPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchive<
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
                  (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
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
      getPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveMutationOptions<
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

export function getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/GenevaActions/Environments/:environmentId/archived_storage_sas/:targetBlob',
    args,
  ] as const
}

export function getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobQueryKey
    >
  >({
    queryKey:
      getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.GenevaActions.Environments[':environmentId'].archived_storage_sas[
          ':targetBlob'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobQueryKey
        >
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
      ...getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownMutationKey() {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId/shutdown', 'PUT'] as const
}

export function getPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Environments[':environmentId'].shutdown.$put(args, options),
      )
    },
  })
}

export function createPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdown<
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
                  (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
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
      getPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownMutationOptions<
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

export function getPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsMutationKey() {
  return [
    'api',
    '/api/v1/GenevaActions/Environments/:environmentId/upload/running/vm/logs',
    'POST',
  ] as const
}

export function getPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Environments[':environmentId'].upload.running.vm.logs.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogs<
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
                  (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
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
      getPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsMutationOptions<
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

export function getPostApiV1GenevaActionsPoolsChangeResourceDeletionSettingMutationKey() {
  return ['api', '/api/v1/GenevaActions/Pools/change-resource-deletion-setting', 'POST'] as const
}

export function getPostApiV1GenevaActionsPoolsChangeResourceDeletionSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsPoolsChangeResourceDeletionSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Pools['change-resource-deletion-setting'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1GenevaActionsPoolsChangeResourceDeletionSetting<
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
                  (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
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
      getPostApiV1GenevaActionsPoolsChangeResourceDeletionSettingMutationOptions<
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

export function getPostApiV1GenevaActionsPoolsPoolCodeRotatePoolMutationKey() {
  return ['api', '/api/v1/GenevaActions/Pools/:poolCode/rotate-pool', 'POST'] as const
}

export function getPostApiV1GenevaActionsPoolsPoolCodeRotatePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsPoolsPoolCodeRotatePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Pools[':poolCode']['rotate-pool'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1GenevaActionsPoolsPoolCodeRotatePool<
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
                  (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
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
    const mutationDefaults = getPostApiV1GenevaActionsPoolsPoolCodeRotatePoolMutationOptions<
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

export function getPostApiV1GenevaActionsPoolsTargetMutationKey() {
  return ['api', '/api/v1/GenevaActions/Pools/:target', 'POST'] as const
}

export function getPostApiV1GenevaActionsPoolsTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsPoolsTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>,
    ) {
      return parseResponse(client.api.v1.GenevaActions.Pools[':target'].$post(args, options))
    },
  })
}

export function createPostApiV1GenevaActionsPoolsTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>,
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
    const mutationDefaults = getPostApiV1GenevaActionsPoolsTargetMutationOptions<
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

export function getPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsMutationKey() {
  return ['api', '/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings', 'POST'] as const
}

export function getPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post(args, options),
      )
    },
  })
}

export function createPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettings<
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
                  typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
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
      getPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsMutationOptions<
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

export function getPostApiV1GenevaActionsPrebuildsPoolsDeleteMutationKey() {
  return ['api', '/api/v1/GenevaActions/Prebuilds/pools/delete', 'POST'] as const
}

export function getPostApiV1GenevaActionsPrebuildsPoolsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsPrebuildsPoolsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>,
    ) {
      return parseResponse(client.api.v1.GenevaActions.Prebuilds.pools.delete.$post(args, options))
    },
  })
}

export function createPostApiV1GenevaActionsPrebuildsPoolsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>,
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
    const mutationDefaults = getPostApiV1GenevaActionsPrebuildsPoolsDeleteMutationOptions<
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

export function getPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesMutationKey() {
  return [
    'api',
    '/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties',
    'POST',
  ] as const
}

export function getPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Privacy['refresh-profile-telemetry-properties'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryProperties<
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
                  (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
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
      getPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesMutationOptions<
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

export function getPostApiV1GenevaActionsResourcesResourceIdUnderInvestigationMutationKey() {
  return ['api', '/api/v1/GenevaActions/Resources/:resourceId/under-investigation', 'POST'] as const
}

export function getPostApiV1GenevaActionsResourcesResourceIdUnderInvestigationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsResourcesResourceIdUnderInvestigationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.GenevaActions.Resources[':resourceId']['under-investigation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1GenevaActionsResourcesResourceIdUnderInvestigation<
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
                  (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
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
      getPostApiV1GenevaActionsResourcesResourceIdUnderInvestigationMutationOptions<
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

export function getPostApiV1GenevaActionsVnetPoolDefinitionsMutationKey() {
  return ['api', '/api/v1/GenevaActions/VnetPoolDefinitions', 'POST'] as const
}

export function getPostApiV1GenevaActionsVnetPoolDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GenevaActionsVnetPoolDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>,
    ) {
      return parseResponse(client.api.v1.GenevaActions.VnetPoolDefinitions.$post(args, options))
    },
  })
}

export function createPostApiV1GenevaActionsVnetPoolDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>,
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
    const mutationDefaults = getPostApiV1GenevaActionsVnetPoolDefinitionsMutationOptions<
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

export function getDeleteApiV1GenevaActionsVnetPoolDefinitionsMutationKey() {
  return ['api', '/api/v1/GenevaActions/VnetPoolDefinitions', 'DELETE'] as const
}

export function getDeleteApiV1GenevaActionsVnetPoolDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1GenevaActionsVnetPoolDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>,
    ) {
      return parseResponse(client.api.v1.GenevaActions.VnetPoolDefinitions.$delete(args, options))
    },
  })
}

export function createDeleteApiV1GenevaActionsVnetPoolDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>,
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
    const mutationDefaults = getDeleteApiV1GenevaActionsVnetPoolDefinitionsMutationOptions<
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

export function getPostApiV1HeartBeatMutationKey() {
  return ['api', '/api/v1/HeartBeat', 'POST'] as const
}

export function getPostApiV1HeartBeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.HeartBeat.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.HeartBeat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1HeartBeatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.HeartBeat.$post>) {
      return parseResponse(client.api.v1.HeartBeat.$post(args, options))
    },
  })
}

export function createPostApiV1HeartBeat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.HeartBeat.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v1.HeartBeat.$post>,
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
    const mutationDefaults = getPostApiV1HeartBeatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LocationsQueryKey() {
  return ['api', '/api/v1/Locations'] as const
}

export function getApiV1LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocationsQueryKey>
  >({
    queryKey: getApiV1LocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Locations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LocationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LocationsLocationQueryKey(
  args: InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
) {
  return ['api', '/api/v1/Locations/:location', args] as const
}

export function getApiV1LocationsLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocationsLocationQueryKey>
  >({
    queryKey: getApiV1LocationsLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Locations[':location'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LocationsLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LocationsLocationQueryKey>
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
      ...getApiV1LocationsLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1PrebuildsPoolsPoolIdInstancesMutationKey() {
  return ['api', '/api/v1/Prebuilds/pools/:poolId/instances', 'PUT'] as const
}

export function getPutApiV1PrebuildsPoolsPoolIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PrebuildsPoolsPoolIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.Prebuilds.pools[':poolId'].instances.$put(args, options))
    },
  })
}

export function createPutApiV1PrebuildsPoolsPoolIdInstances<
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
                ReturnType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>,
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
    const mutationDefaults = getPutApiV1PrebuildsPoolsPoolIdInstancesMutationOptions<
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

export function getPostApiV1PrebuildsPoolsPoolIdInstancesMutationKey() {
  return ['api', '/api/v1/Prebuilds/pools/:poolId/instances', 'POST'] as const
}

export function getPostApiV1PrebuildsPoolsPoolIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PrebuildsPoolsPoolIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.Prebuilds.pools[':poolId'].instances.$post(args, options))
    },
  })
}

export function createPostApiV1PrebuildsPoolsPoolIdInstances<
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
                ReturnType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>,
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
    const mutationDefaults = getPostApiV1PrebuildsPoolsPoolIdInstancesMutationOptions<
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

export function getApiV1PrebuildsTemplateEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
) {
  return ['api', '/api/v1/Prebuilds/template/:environmentId', args] as const
}

export function getApiV1PrebuildsTemplateEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PrebuildsTemplateEnvironmentIdQueryKey>
  >({
    queryKey: getApiV1PrebuildsTemplateEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Prebuilds.template[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PrebuildsTemplateEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PrebuildsTemplateEnvironmentIdQueryKey>
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
      ...getApiV1PrebuildsTemplateEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/Prebuilds/templates/repo/:repoId/branch/:branchName/hash/:prebuildHash/location/:location/skus',
    args,
  ] as const
}

export function getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusQueryKey
    >
  >({
    queryKey:
      getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Prebuilds.templates.repo[':repoId'].branch[':branchName'].hash[
          ':prebuildHash'
        ].location[':location'].skus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusQueryKey
        >
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
      ...getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1SasQueryKey() {
  return ['api', '/api/v1/Sas'] as const
}

export function getApiV1SasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1SasQueryKey>
  >({
    queryKey: getApiV1SasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Sas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Sas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SasQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SecretsQueryKey(args: InferRequestType<typeof client.api.v1.Secrets.$get>) {
  return ['api', '/api/v1/Secrets', args] as const
}

export function getApiV1SecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.Secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecretsQueryKey>
  >({
    queryKey: getApiV1SecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Secrets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SecretsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1SecretsMutationKey() {
  return ['api', '/api/v1/Secrets', 'POST'] as const
}

export function getPostApiV1SecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.Secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.Secrets.$post>) {
      return parseResponse(client.api.v1.Secrets.$post(args, options))
    },
  })
}

export function createPostApiV1Secrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.Secrets.$post>,
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
    const mutationDefaults = getPostApiV1SecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1SecretsSecretIdMutationKey() {
  return ['api', '/api/v1/Secrets/:secretId', 'PUT'] as const
}

export function getPutApiV1SecretsSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Secrets)[':secretId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecretsSecretIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$put']>) {
      return parseResponse(client.api.v1.Secrets[':secretId'].$put(args, options))
    },
  })
}

export function createPutApiV1SecretsSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Secrets)[':secretId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$put']>,
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
    const mutationDefaults = getPutApiV1SecretsSecretIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1SecretsSecretIdMutationKey() {
  return ['api', '/api/v1/Secrets/:secretId', 'DELETE'] as const
}

export function getDeleteApiV1SecretsSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecretsSecretIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.Secrets[':secretId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1SecretsSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1SecretsSecretIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1TenantTenantIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
) {
  return ['api', '/api/v1/Tenant/:tenantId', args] as const
}

export function getApiV1TenantTenantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TenantTenantIdQueryKey>
  >({
    queryKey: getApiV1TenantTenantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Tenant[':tenantId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TenantTenantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TenantTenantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TenantTenantIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1TenantTenantIdMutationKey() {
  return ['api', '/api/v1/Tenant/:tenantId', 'PUT'] as const
}

export function getPutApiV1TenantTenantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TenantTenantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>) {
      return parseResponse(client.api.v1.Tenant[':tenantId'].$put(args, options))
    },
  })
}

export function createPutApiV1TenantTenantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>,
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
    const mutationDefaults = getPutApiV1TenantTenantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1TenantTenantIdMutationKey() {
  return ['api', '/api/v1/Tenant/:tenantId', 'DELETE'] as const
}

export function getDeleteApiV1TenantTenantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TenantTenantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.Tenant[':tenantId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1TenantTenantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1TenantTenantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1TokensPlansPlanNameDeleteAllCodespacesMutationKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/deleteAllCodespaces', 'POST'] as const
}

export function getPostApiV1TokensPlansPlanNameDeleteAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TokensPlansPlanNameDeleteAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.plans[':planName'].deleteAllCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1TokensPlansPlanNameDeleteAllCodespaces<
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
                  (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
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
    const mutationDefaults = getPostApiV1TokensPlansPlanNameDeleteAllCodespacesMutationOptions<
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

export function getPostApiV1TokensPlansPlanNameReadAllCodespacesMutationKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/readAllCodespaces', 'POST'] as const
}

export function getPostApiV1TokensPlansPlanNameReadAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TokensPlansPlanNameReadAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.plans[':planName'].readAllCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1TokensPlansPlanNameReadAllCodespaces<
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
                  (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
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
    const mutationDefaults = getPostApiV1TokensPlansPlanNameReadAllCodespacesMutationOptions<
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

export function getPostApiV1TokensPlansPlanNameWriteCodespacesMutationKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/writeCodespaces', 'POST'] as const
}

export function getPostApiV1TokensPlansPlanNameWriteCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TokensPlansPlanNameWriteCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.plans[':planName'].writeCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1TokensPlansPlanNameWriteCodespaces<
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
                  (typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']
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
    const mutationDefaults = getPostApiV1TokensPlansPlanNameWriteCodespacesMutationOptions<
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

export function getPostApiV1TokensPlansPlanNameWriteDelegatesMutationKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/writeDelegates', 'POST'] as const
}

export function getPostApiV1TokensPlansPlanNameWriteDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TokensPlansPlanNameWriteDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.plans[':planName'].writeDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1TokensPlansPlanNameWriteDelegates<
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
                  (typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']
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
    const mutationDefaults = getPostApiV1TokensPlansPlanNameWriteDelegatesMutationOptions<
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

export function getPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName',
    'PUT',
  ] as const
}

export function getPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceName<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
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
      getPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/deleteAllCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].deleteAllCodespaces.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespaces<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/deleteAllEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].deleteAllEnvironments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironments<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/readAllCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].readAllCodespaces.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespaces<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/readAllEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].readAllEnvironments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironments<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].writeCodespaces.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespaces<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeDelegates',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].writeDelegates.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegates<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesMutationOptions<
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

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
          ':resourceGroup'
        ].providers[':providerNamespace'].plans[':resourceName'].writeEnvironments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironments<
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
                  (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
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
      getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsMutationOptions<
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

export function getApiV1TunnelEnvironmentIdPortInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
) {
  return ['api', '/api/v1/Tunnel/:environmentId/portInfo', args] as const
}

export function getApiV1TunnelEnvironmentIdPortInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TunnelEnvironmentIdPortInfoQueryKey>
  >({
    queryKey: getApiV1TunnelEnvironmentIdPortInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Tunnel[':environmentId'].portInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TunnelEnvironmentIdPortInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TunnelEnvironmentIdPortInfoQueryKey>
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
      ...getApiV1TunnelEnvironmentIdPortInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UserSubscriptionsMutationKey() {
  return ['api', '/api/v1/UserSubscriptions', 'POST'] as const
}

export function getPostApiV1UserSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.UserSubscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.UserSubscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UserSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.UserSubscriptions.$post>) {
      return parseResponse(client.api.v1.UserSubscriptions.$post(args, options))
    },
  })
}

export function createPostApiV1UserSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.UserSubscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.UserSubscriptions.$post>,
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
    const mutationDefaults = getPostApiV1UserSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UserSubscriptionsMutationKey() {
  return ['api', '/api/v1/UserSubscriptions', 'DELETE'] as const
}

export function getDeleteApiV1UserSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.UserSubscriptions.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.UserSubscriptions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UserSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.UserSubscriptions.$delete>) {
      return parseResponse(client.api.v1.UserSubscriptions.$delete(args, options))
    },
  })
}

export function createDeleteApiV1UserSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.UserSubscriptions.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.UserSubscriptions.$delete>,
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
    const mutationDefaults = getDeleteApiV1UserSubscriptionsMutationOptions<
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

export function getApiV1PoolsDefaultQueryKey(
  args: InferRequestType<typeof client.api.v1.pools.default.$get>,
) {
  return ['api', '/api/v1/pools/default', args] as const
}

export function getApiV1PoolsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.pools.default.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PoolsDefaultQueryKey>
  >({
    queryKey: getApiV1PoolsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.pools.default.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1PoolsDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.pools.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PoolsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PoolsDefaultQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/GitHub.Network/:resourceType/SubscriptionLifeCycleNotification',
    'PUT',
  ] as const
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].providers['GitHub.Network'][
          ':resourceType'
        ].SubscriptionLifeCycleNotification.$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotification<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
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
      getPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/GitHub.Network/:resourceType/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].providers['GitHub.Network'][
          ':resourceType'
        ].resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginMutationOptions<
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

export function getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification',
    'PUT',
  ] as const
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].providers[
          'Microsoft.Codespaces'
        ].plans.SubscriptionLifeCycleNotification.$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotification<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
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
      getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.Codespaces/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].providers[
          'Microsoft.Codespaces'
        ].plans.resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginMutationOptions<
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

export function getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification',
    'PUT',
  ] as const
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].providers[
          'Microsoft.VSOnline'
        ].plans.SubscriptionLifeCycleNotification.$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotification<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
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
      getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.VSOnline/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].providers[
          'Microsoft.VSOnline'
        ].plans.resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'].resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginMutationOptions<
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

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName',
    'PUT',
  ] as const
}

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
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
      getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationOptions<
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

export function getDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName',
    'DELETE',
  ] as const
}

export function getDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
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
      getDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationOptions<
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

export function getPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName',
    'PATCH',
  ] as const
}

export function getPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].$patch(args, options),
      )
    },
  })
}

export function createPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
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
      getPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceCreationCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourceCreationCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceCreationValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourceCreationValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceDeletionCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourceDeletionCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceDeletionValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourceDeletionValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourcePatchCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourcePatchCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourcePatchValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourcePatchValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'GitHub.Network'
        ][':resourceType'][':resourceName'].resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans.resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginMutationOptions<
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

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName',
    'PUT',
  ] as const
}

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceName<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
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
      getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteAllCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].deleteAllCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespaces<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteAllEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].deleteAllEnvironments.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironments<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readAllCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].readAllCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespaces<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readAllEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].readAllEnvironments.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironments<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readDelegates',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].readDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegates<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceCreationCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].resourceCreationCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceCreationValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].resourceCreationValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceDeletionValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].resourceDeletionValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourcePatchCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].resourcePatchCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourcePatchValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].resourcePatchValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].writeCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespaces<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeDelegates',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].writeDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegates<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].writeEnvironments.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironments<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans.resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginMutationOptions<
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

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName',
    'PUT',
  ] as const
}

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceName<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
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
      getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteAllCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].deleteAllCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespaces<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteAllEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].deleteAllEnvironments.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironments<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readAllCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].readAllCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespaces<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readAllEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].readAllEnvironments.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironments<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readDelegates',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].readDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegates<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceCreationCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].resourceCreationCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceCreationValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].resourceCreationValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceDeletionValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].resourceDeletionValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourcePatchCompleted',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].resourcePatchCompleted.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompleted<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourcePatchValidate',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].resourcePatchValidate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidate<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceReadBegin',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].resourceReadBegin.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBegin<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeCodespaces',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].writeCodespaces.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespaces<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeDelegates',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].writeDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegates<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeEnvironments',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].writeEnvironments.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironments<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteDelegates',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'][':resourceGroup'].providers[
          'Microsoft.Codespaces'
        ].plans[':resourceName'].deleteDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegates<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteDelegates',
    'POST',
  ] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'][':resourceGroup'].providers[
          'Microsoft.VSOnline'
        ].plans[':resourceName'].deleteDelegates.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegates<
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
                  (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
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
      getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesMutationOptions<
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

export function getApiV1TenantTenantIdPoolPoolNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>,
) {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', args] as const
}

export function getApiV1TenantTenantIdPoolPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TenantTenantIdPoolPoolNameQueryKey>
  >({
    queryKey: getApiV1TenantTenantIdPoolPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].Pool[':poolName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TenantTenantIdPoolPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TenantTenantIdPoolPoolNameQueryKey>
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
      ...getApiV1TenantTenantIdPoolPoolNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1TenantTenantIdPoolPoolNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', 'PUT'] as const
}

export function getPutApiV1TenantTenantIdPoolPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TenantTenantIdPoolPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.tenant[':tenantId'].Pool[':poolName'].$put(args, options))
    },
  })
}

export function createPutApiV1TenantTenantIdPoolPoolName<
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
                ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>,
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
    const mutationDefaults = getPutApiV1TenantTenantIdPoolPoolNameMutationOptions<
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

export function getDeleteApiV1TenantTenantIdPoolPoolNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', 'DELETE'] as const
}

export function getDeleteApiV1TenantTenantIdPoolPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TenantTenantIdPoolPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].Pool[':poolName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1TenantTenantIdPoolPoolName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']
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
    const mutationDefaults = getDeleteApiV1TenantTenantIdPoolPoolNameMutationOptions<
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

export function getPatchApiV1TenantTenantIdPoolPoolNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', 'PATCH'] as const
}

export function getPatchApiV1TenantTenantIdPoolPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1TenantTenantIdPoolPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].Pool[':poolName'].$patch(args, options),
      )
    },
  })
}

export function createPatchApiV1TenantTenantIdPoolPoolName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']>,
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
    const mutationDefaults = getPatchApiV1TenantTenantIdPoolPoolNameMutationOptions<
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

export function getApiV1TenantTenantIdPoolGroupPoolGroupNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
) {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', args] as const
}

export function getApiV1TenantTenantIdPoolGroupPoolGroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TenantTenantIdPoolGroupPoolGroupNameQueryKey>
  >({
    queryKey: getApiV1TenantTenantIdPoolGroupPoolGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TenantTenantIdPoolGroupPoolGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TenantTenantIdPoolGroupPoolGroupNameQueryKey>
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
      ...getApiV1TenantTenantIdPoolGroupPoolGroupNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1TenantTenantIdPoolGroupPoolGroupNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', 'PUT'] as const
}

export function getPutApiV1TenantTenantIdPoolGroupPoolGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TenantTenantIdPoolGroupPoolGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1TenantTenantIdPoolGroupPoolGroupName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
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
    const mutationDefaults = getPutApiV1TenantTenantIdPoolGroupPoolGroupNameMutationOptions<
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

export function getDeleteApiV1TenantTenantIdPoolGroupPoolGroupNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', 'DELETE'] as const
}

export function getDeleteApiV1TenantTenantIdPoolGroupPoolGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TenantTenantIdPoolGroupPoolGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1TenantTenantIdPoolGroupPoolGroupName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
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
    const mutationDefaults = getDeleteApiV1TenantTenantIdPoolGroupPoolGroupNameMutationOptions<
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

export function getPatchApiV1TenantTenantIdPoolGroupPoolGroupNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', 'PATCH'] as const
}

export function getPatchApiV1TenantTenantIdPoolGroupPoolGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1TenantTenantIdPoolGroupPoolGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$patch(args, options),
      )
    },
  })
}

export function createPatchApiV1TenantTenantIdPoolGroupPoolGroupName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
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
    const mutationDefaults = getPatchApiV1TenantTenantIdPoolGroupPoolGroupNameMutationOptions<
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

export function getApiV1TenantTenantIdPoolPoolNameVmQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
) {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm', args] as const
}

export function getApiV1TenantTenantIdPoolPoolNameVmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TenantTenantIdPoolPoolNameVmQueryKey>
  >({
    queryKey: getApiV1TenantTenantIdPoolPoolNameVmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TenantTenantIdPoolPoolNameVm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TenantTenantIdPoolPoolNameVmQueryKey>
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
      ...getApiV1TenantTenantIdPoolPoolNameVmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1TenantTenantIdPoolPoolNameVmVmNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
) {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName', args] as const
}

export function getApiV1TenantTenantIdPoolPoolNameVmVmNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TenantTenantIdPoolPoolNameVmVmNameQueryKey>
  >({
    queryKey: getApiV1TenantTenantIdPoolPoolNameVmVmNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TenantTenantIdPoolPoolNameVmVmName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TenantTenantIdPoolPoolNameVmVmNameQueryKey>
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
      ...getApiV1TenantTenantIdPoolPoolNameVmVmNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1TenantTenantIdPoolPoolNameVmVmNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName', 'PUT'] as const
}

export function getPutApiV1TenantTenantIdPoolPoolNameVmVmNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TenantTenantIdPoolPoolNameVmVmNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1TenantTenantIdPoolPoolNameVmVmName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
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
    const mutationDefaults = getPutApiV1TenantTenantIdPoolPoolNameVmVmNameMutationOptions<
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

export function getDeleteApiV1TenantTenantIdPoolPoolNameVmVmNameMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName', 'DELETE'] as const
}

export function getDeleteApiV1TenantTenantIdPoolPoolNameVmVmNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TenantTenantIdPoolPoolNameVmVmNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1TenantTenantIdPoolPoolNameVmVmName<
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
                  (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
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
    const mutationDefaults = getDeleteApiV1TenantTenantIdPoolPoolNameVmVmNameMutationOptions<
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

export function getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStartMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName/start', 'POST'] as const
}

export function getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].start.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1TenantTenantIdPoolPoolNameVmVmNameStart<
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
                  (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
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
    const mutationDefaults = getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStartMutationOptions<
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

export function getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStopMutationKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName/stop', 'POST'] as const
}

export function getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].stop.$post(args, options),
      )
    },
  })
}

export function createPostApiV1TenantTenantIdPoolPoolNameVmVmNameStop<
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
                  (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
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
    const mutationDefaults = getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStopMutationOptions<
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

export function getPostApiV2PrebuildsDeleteMutationKey() {
  return ['api', '/api/v2/prebuilds/delete', 'POST'] as const
}

export function getPostApiV2PrebuildsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.prebuilds.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.prebuilds.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PrebuildsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.prebuilds.delete.$post>) {
      return parseResponse(client.api.v2.prebuilds.delete.$post(args, options))
    },
  })
}

export function createPostApiV2PrebuildsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.prebuilds.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.prebuilds.delete.$post>,
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
    const mutationDefaults = getPostApiV2PrebuildsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameMutationKey() {
  return ['api', '/api/v2/prebuilds/repository/:repoId/branch/:branchName', 'DELETE'] as const
}

export function getDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.prebuilds.repository[':repoId'].branch[':branchName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchName<
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
                  (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
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
    const mutationDefaults = getDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameMutationOptions<
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

export function getPostApiV2PrebuildsTemplatesMutationKey() {
  return ['api', '/api/v2/prebuilds/templates', 'POST'] as const
}

export function getPostApiV2PrebuildsTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.prebuilds.templates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.prebuilds.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PrebuildsTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.prebuilds.templates.$post>) {
      return parseResponse(client.api.v2.prebuilds.templates.$post(args, options))
    },
  })
}

export function createPostApiV2PrebuildsTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.prebuilds.templates.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.prebuilds.templates.$post>,
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
    const mutationDefaults = getPostApiV2PrebuildsTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/prebuilds/templates/skus/repo/:repoId/branch/:branchName/hash/:prebuildHash/location/:location/devcontainerpath/:devContainerPath',
    args,
  ] as const
}

export function getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathQueryKey
    >
  >({
    queryKey:
      getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.prebuilds.templates.skus.repo[':repoId'].branch[':branchName'].hash[
          ':prebuildHash'
        ].location[':location'].devcontainerpath[':devContainerPath'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathQueryKey
        >
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
      ...getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2PrebuildsTemplatesUpdatemaxversionsMutationKey() {
  return ['api', '/api/v2/prebuilds/templates/updatemaxversions', 'POST'] as const
}

export function getPostApiV2PrebuildsTemplatesUpdatemaxversionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PrebuildsTemplatesUpdatemaxversionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>,
    ) {
      return parseResponse(client.api.v2.prebuilds.templates.updatemaxversions.$post(args, options))
    },
  })
}

export function createPostApiV2PrebuildsTemplatesUpdatemaxversions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>,
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
    const mutationDefaults = getPostApiV2PrebuildsTemplatesUpdatemaxversionsMutationOptions<
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

export function getPostApiV2PrebuildsTemplatesTemplateIdUpdatestatusMutationKey() {
  return ['api', '/api/v2/prebuilds/templates/:templateId/updatestatus', 'POST'] as const
}

export function getPostApiV2PrebuildsTemplatesTemplateIdUpdatestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PrebuildsTemplatesTemplateIdUpdatestatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.prebuilds.templates[':templateId'].updatestatus.$post(args, options),
      )
    },
  })
}

export function createPostApiV2PrebuildsTemplatesTemplateIdUpdatestatus<
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
                  (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
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
    const mutationDefaults = getPostApiV2PrebuildsTemplatesTemplateIdUpdatestatusMutationOptions<
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInternalNetmonCorrelationQueryKey(
  args: InferRequestType<typeof client.internal.Netmon.correlation.$get>,
) {
  return ['internal', '/internal/Netmon/correlation', args] as const
}

export function getInternalNetmonCorrelationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal.Netmon.correlation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalNetmonCorrelationQueryKey>
  >({
    queryKey: getInternalNetmonCorrelationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.Netmon.correlation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternalNetmonCorrelation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.internal.Netmon.correlation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalNetmonCorrelationQueryKey>
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
      ...getInternalNetmonCorrelationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTunnelauthQueryKey(args: InferRequestType<typeof client.tunnelauth.$get>) {
  return ['tunnelauth', '/tunnelauth', args] as const
}

export function getTunnelauthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tunnelauth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTunnelauthQueryKey>
  >({
    queryKey: getTunnelauthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tunnelauth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTunnelauth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tunnelauth.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTunnelauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTunnelauthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTunnelauthMutationKey() {
  return ['tunnelauth', '/tunnelauth', 'POST'] as const
}

export function getPostTunnelauthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$post>>>>>,
    TError,
    InferRequestType<typeof client.tunnelauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTunnelauthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tunnelauth.$post>) {
      return parseResponse(client.tunnelauth.$post(args, options))
    },
  })
}

export function createPostTunnelauth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tunnelauth.$post>,
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
    const mutationDefaults = getPostTunnelauthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWarmupQueryKey() {
  return ['warmup', '/warmup'] as const
}

export function getWarmupQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWarmupQueryKey>
  >({
    queryKey: getWarmupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.warmup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWarmup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWarmupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWarmupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
