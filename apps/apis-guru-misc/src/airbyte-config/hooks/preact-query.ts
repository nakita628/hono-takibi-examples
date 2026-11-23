import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AttemptSaveStatsMutationKey() {
  return ['v1', '/v1/attempt/save_stats', 'POST'] as const
}

export function getPostV1AttemptSaveStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_stats.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.save_stats.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptSaveStatsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.save_stats.$post>) {
      return parseResponse(client.v1.attempt.save_stats.$post(args, options))
    },
  })
}

export function usePostV1AttemptSaveStats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_stats.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.save_stats.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AttemptSaveStatsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AttemptSaveSyncConfigMutationKey() {
  return ['v1', '/v1/attempt/save_sync_config', 'POST'] as const
}

export function getPostV1AttemptSaveSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_sync_config.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.save_sync_config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptSaveSyncConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.save_sync_config.$post>) {
      return parseResponse(client.v1.attempt.save_sync_config.$post(args, options))
    },
  })
}

export function usePostV1AttemptSaveSyncConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.attempt.save_sync_config.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.save_sync_config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AttemptSaveSyncConfigMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AttemptSetWorkflowInAttemptMutationKey() {
  return ['v1', '/v1/attempt/set_workflow_in_attempt', 'POST'] as const
}

export function getPostV1AttemptSetWorkflowInAttemptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.attempt.set_workflow_in_attempt.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.set_workflow_in_attempt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptSetWorkflowInAttemptMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.attempt.set_workflow_in_attempt.$post>,
    ) {
      return parseResponse(client.v1.attempt.set_workflow_in_attempt.$post(args, options))
    },
  })
}

export function usePostV1AttemptSetWorkflowInAttempt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.attempt.set_workflow_in_attempt.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.set_workflow_in_attempt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AttemptSetWorkflowInAttemptMutationOptions<
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

export function getPostV1ConnectionsCreateMutationKey() {
  return ['v1', '/v1/connections/create', 'POST'] as const
}

export function getPostV1ConnectionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.create.$post>) {
      return parseResponse(client.v1.connections.create.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsDeleteMutationKey() {
  return ['v1', '/v1/connections/delete', 'POST'] as const
}

export function getPostV1ConnectionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.connections.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.delete.$post>) {
      return parseResponse(client.v1.connections.delete.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.connections.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsGetMutationKey() {
  return ['v1', '/v1/connections/get', 'POST'] as const
}

export function getPostV1ConnectionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.get.$post>) {
      return parseResponse(client.v1.connections.get.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsListMutationKey() {
  return ['v1', '/v1/connections/list', 'POST'] as const
}

export function getPostV1ConnectionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.list.$post>) {
      return parseResponse(client.v1.connections.list.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsListAllMutationKey() {
  return ['v1', '/v1/connections/list_all', 'POST'] as const
}

export function getPostV1ConnectionsListAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.list_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsListAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.list_all.$post>) {
      return parseResponse(client.v1.connections.list_all.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsListAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_all.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.list_all.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsListAllMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsResetMutationKey() {
  return ['v1', '/v1/connections/reset', 'POST'] as const
}

export function getPostV1ConnectionsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.reset.$post>) {
      return parseResponse(client.v1.connections.reset.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsSearchMutationKey() {
  return ['v1', '/v1/connections/search', 'POST'] as const
}

export function getPostV1ConnectionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.search.$post>) {
      return parseResponse(client.v1.connections.search.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsSyncMutationKey() {
  return ['v1', '/v1/connections/sync', 'POST'] as const
}

export function getPostV1ConnectionsSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.sync.$post>) {
      return parseResponse(client.v1.connections.sync.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsSyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ConnectionsUpdateMutationKey() {
  return ['v1', '/v1/connections/update', 'POST'] as const
}

export function getPostV1ConnectionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.update.$post>) {
      return parseResponse(client.v1.connections.update.$post(args, options))
    },
  })
}

export function usePostV1ConnectionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConnectionsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationDefinitionSpecificationsGetMutationKey() {
  return ['v1', '/v1/destination_definition_specifications/get', 'POST'] as const
}

export function getPostV1DestinationDefinitionSpecificationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionSpecificationsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
    ) {
      return parseResponse(client.v1.destination_definition_specifications.get.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionSpecificationsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definition_specifications.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionSpecificationsGetMutationOptions<
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

export function getPostV1DestinationDefinitionsCreateCustomMutationKey() {
  return ['v1', '/v1/destination_definitions/create_custom', 'POST'] as const
}

export function getPostV1DestinationDefinitionsCreateCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsCreateCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.create_custom.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsCreateCustom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.create_custom.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsCreateCustomMutationOptions<
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

export function getPostV1DestinationDefinitionsDeleteMutationKey() {
  return ['v1', '/v1/destination_definitions/delete', 'POST'] as const
}

export function getPostV1DestinationDefinitionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.delete.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.destination_definitions.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsDeleteMutationOptions<
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

export function getPostV1DestinationDefinitionsGetMutationKey() {
  return ['v1', '/v1/destination_definitions/get', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destination_definitions.get.$post>) {
      return parseResponse(client.v1.destination_definitions.get.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsGetMutationOptions<
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

export function getPostV1DestinationDefinitionsGetForWorkspaceMutationKey() {
  return ['v1', '/v1/destination_definitions/get_for_workspace', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGetForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGetForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.get_for_workspace.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsGetForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsGetForWorkspaceMutationOptions<
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

export function getPostV1DestinationDefinitionsGrantDefinitionMutationKey() {
  return ['v1', '/v1/destination_definitions/grant_definition', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGrantDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGrantDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.grant_definition.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsGrantDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.grant_definition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsGrantDefinitionMutationOptions<
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

export function getPostV1DestinationDefinitionsListMutationKey() {
  return ['v1', '/v1/destination_definitions/list', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.destination_definitions.list.$post(undefined, options))
    },
  })
}

export function usePostV1DestinationDefinitionsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsListMutationOptions<
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

export function getPostV1DestinationDefinitionsListForWorkspaceMutationKey() {
  return ['v1', '/v1/destination_definitions/list_for_workspace', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
    ) {
      return parseResponse(
        client.v1.destination_definitions.list_for_workspace.$post(args, options),
      )
    },
  })
}

export function usePostV1DestinationDefinitionsListForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsListForWorkspaceMutationOptions<
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

export function getPostV1DestinationDefinitionsListLatestMutationKey() {
  return ['v1', '/v1/destination_definitions/list_latest', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListLatestMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.destination_definitions.list_latest.$post(undefined, options))
    },
  })
}

export function usePostV1DestinationDefinitionsListLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list_latest.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsListLatestMutationOptions<
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

export function getPostV1DestinationDefinitionsListPrivateMutationKey() {
  return ['v1', '/v1/destination_definitions/list_private', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListPrivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.list_private.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsListPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list_private.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsListPrivateMutationOptions<
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

export function getPostV1DestinationDefinitionsRevokeDefinitionMutationKey() {
  return ['v1', '/v1/destination_definitions/revoke_definition', 'POST'] as const
}

export function getPostV1DestinationDefinitionsRevokeDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsRevokeDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.revoke_definition.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsRevokeDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.destination_definitions.revoke_definition.$post>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsRevokeDefinitionMutationOptions<
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

export function getPostV1DestinationDefinitionsUpdateMutationKey() {
  return ['v1', '/v1/destination_definitions/update', 'POST'] as const
}

export function getPostV1DestinationDefinitionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.update.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.update.$post(args, options))
    },
  })
}

export function usePostV1DestinationDefinitionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationDefinitionsUpdateMutationOptions<
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

export function getPostV1DestinationOauthsCompleteOauthMutationKey() {
  return ['v1', '/v1/destination_oauths/complete_oauth', 'POST'] as const
}

export function getPostV1DestinationOauthsCompleteOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationOauthsCompleteOauthMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
    ) {
      return parseResponse(client.v1.destination_oauths.complete_oauth.$post(args, options))
    },
  })
}

export function usePostV1DestinationOauthsCompleteOauth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_oauths.complete_oauth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationOauthsCompleteOauthMutationOptions<
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

export function getPostV1DestinationOauthsGetConsentUrlMutationKey() {
  return ['v1', '/v1/destination_oauths/get_consent_url', 'POST'] as const
}

export function getPostV1DestinationOauthsGetConsentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationOauthsGetConsentUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
    ) {
      return parseResponse(client.v1.destination_oauths.get_consent_url.$post(args, options))
    },
  })
}

export function usePostV1DestinationOauthsGetConsentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_oauths.get_consent_url.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationOauthsGetConsentUrlMutationOptions<
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

export function getPostV1DestinationOauthsOauthParamsCreateMutationKey() {
  return ['v1', '/v1/destination_oauths/oauth_params/create', 'POST'] as const
}

export function getPostV1DestinationOauthsOauthParamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationOauthsOauthParamsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
    ) {
      return parseResponse(client.v1.destination_oauths.oauth_params.create.$post(args, options))
    },
  })
}

export function usePostV1DestinationOauthsOauthParamsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_oauths.oauth_params.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationOauthsOauthParamsCreateMutationOptions<
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

export function getPostV1DestinationsCheckConnectionMutationKey() {
  return ['v1', '/v1/destinations/check_connection', 'POST'] as const
}

export function getPostV1DestinationsCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCheckConnectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.check_connection.$post>) {
      return parseResponse(client.v1.destinations.check_connection.$post(args, options))
    },
  })
}

export function usePostV1DestinationsCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.check_connection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsCheckConnectionMutationOptions<
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

export function getPostV1DestinationsCheckConnectionForUpdateMutationKey() {
  return ['v1', '/v1/destinations/check_connection_for_update', 'POST'] as const
}

export function getPostV1DestinationsCheckConnectionForUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCheckConnectionForUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
    ) {
      return parseResponse(client.v1.destinations.check_connection_for_update.$post(args, options))
    },
  })
}

export function usePostV1DestinationsCheckConnectionForUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.check_connection_for_update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsCheckConnectionForUpdateMutationOptions<
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

export function getPostV1DestinationsCloneMutationKey() {
  return ['v1', '/v1/destinations/clone', 'POST'] as const
}

export function getPostV1DestinationsCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.clone.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.clone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCloneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.clone.$post>) {
      return parseResponse(client.v1.destinations.clone.$post(args, options))
    },
  })
}

export function usePostV1DestinationsClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.clone.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.clone.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsCloneMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationsCreateMutationKey() {
  return ['v1', '/v1/destinations/create', 'POST'] as const
}

export function getPostV1DestinationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.create.$post>) {
      return parseResponse(client.v1.destinations.create.$post(args, options))
    },
  })
}

export function usePostV1DestinationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationsDeleteMutationKey() {
  return ['v1', '/v1/destinations/delete', 'POST'] as const
}

export function getPostV1DestinationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destinations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.delete.$post>) {
      return parseResponse(client.v1.destinations.delete.$post(args, options))
    },
  })
}

export function usePostV1DestinationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destinations.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationsGetMutationKey() {
  return ['v1', '/v1/destinations/get', 'POST'] as const
}

export function getPostV1DestinationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.get.$post>) {
      return parseResponse(client.v1.destinations.get.$post(args, options))
    },
  })
}

export function usePostV1DestinationsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationsListMutationKey() {
  return ['v1', '/v1/destinations/list', 'POST'] as const
}

export function getPostV1DestinationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.list.$post>) {
      return parseResponse(client.v1.destinations.list.$post(args, options))
    },
  })
}

export function usePostV1DestinationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationsSearchMutationKey() {
  return ['v1', '/v1/destinations/search', 'POST'] as const
}

export function getPostV1DestinationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.search.$post>) {
      return parseResponse(client.v1.destinations.search.$post(args, options))
    },
  })
}

export function usePostV1DestinationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DestinationsUpdateMutationKey() {
  return ['v1', '/v1/destinations/update', 'POST'] as const
}

export function getPostV1DestinationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.update.$post>) {
      return parseResponse(client.v1.destinations.update.$post(args, options))
    },
  })
}

export function usePostV1DestinationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DestinationsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getV1HealthQueryKey() {
  return ['v1', '/v1/health'] as const
}

export function getV1HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HealthQueryKey>
  >({
    queryKey: getV1HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1HealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1HealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1JobsCancelMutationKey() {
  return ['v1', '/v1/jobs/cancel', 'POST'] as const
}

export function getPostV1JobsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.cancel.$post>) {
      return parseResponse(client.v1.jobs.cancel.$post(args, options))
    },
  })
}

export function usePostV1JobsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1JobsGetMutationKey() {
  return ['v1', '/v1/jobs/get', 'POST'] as const
}

export function getPostV1JobsGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.jobs.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get.$post>) {
      return parseResponse(client.v1.jobs.get.$post(args, options))
    },
  })
}

export function usePostV1JobsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1JobsGetDebugInfoMutationKey() {
  return ['v1', '/v1/jobs/get_debug_info', 'POST'] as const
}

export function getPostV1JobsGetDebugInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_debug_info.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_debug_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetDebugInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_debug_info.$post>) {
      return parseResponse(client.v1.jobs.get_debug_info.$post(args, options))
    },
  })
}

export function usePostV1JobsGetDebugInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_debug_info.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_debug_info.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsGetDebugInfoMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1JobsGetLastReplicationJobMutationKey() {
  return ['v1', '/v1/jobs/get_last_replication_job', 'POST'] as const
}

export function getPostV1JobsGetLastReplicationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetLastReplicationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>) {
      return parseResponse(client.v1.jobs.get_last_replication_job.$post(args, options))
    },
  })
}

export function usePostV1JobsGetLastReplicationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsGetLastReplicationJobMutationOptions<
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

export function getPostV1JobsGetLightMutationKey() {
  return ['v1', '/v1/jobs/get_light', 'POST'] as const
}

export function getPostV1JobsGetLightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_light.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_light.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetLightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_light.$post>) {
      return parseResponse(client.v1.jobs.get_light.$post(args, options))
    },
  })
}

export function usePostV1JobsGetLight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_light.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_light.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsGetLightMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1JobsGetNormalizationStatusMutationKey() {
  return ['v1', '/v1/jobs/get_normalization_status', 'POST'] as const
}

export function getPostV1JobsGetNormalizationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_normalization_status.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_normalization_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetNormalizationStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_normalization_status.$post>) {
      return parseResponse(client.v1.jobs.get_normalization_status.$post(args, options))
    },
  })
}

export function usePostV1JobsGetNormalizationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.get_normalization_status.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_normalization_status.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsGetNormalizationStatusMutationOptions<
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

export function getPostV1JobsListMutationKey() {
  return ['v1', '/v1/jobs/list', 'POST'] as const
}

export function getPostV1JobsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.list.$post>) {
      return parseResponse(client.v1.jobs.list.$post(args, options))
    },
  })
}

export function usePostV1JobsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1LogsGetMutationKey() {
  return ['v1', '/v1/logs/get', 'POST'] as const
}

export function getPostV1LogsGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logs.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.logs.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LogsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.logs.get.$post>) {
      return parseResponse(client.v1.logs.get.$post(args, options))
    },
  })
}

export function usePostV1LogsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logs.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.logs.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1LogsGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1NotificationsTryMutationKey() {
  return ['v1', '/v1/notifications/try', 'POST'] as const
}

export function getPostV1NotificationsTryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.notifications.try.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsTryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notifications.try.$post>) {
      return parseResponse(client.v1.notifications.try.$post(args, options))
    },
  })
}

export function usePostV1NotificationsTry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.notifications.try.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1NotificationsTryMutationOptions<TError, TOnMutateResult>(
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

export function getV1OpenapiQueryKey() {
  return ['v1', '/v1/openapi'] as const
}

export function getV1OpenapiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OpenapiQueryKey>
  >({
    queryKey: getV1OpenapiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Openapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OpenapiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Openapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OpenapiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1OperationsCheckMutationKey() {
  return ['v1', '/v1/operations/check', 'POST'] as const
}

export function getPostV1OperationsCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.check.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.operations.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.check.$post>) {
      return parseResponse(client.v1.operations.check.$post(args, options))
    },
  })
}

export function usePostV1OperationsCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.check.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.check.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsCheckMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OperationsCreateMutationKey() {
  return ['v1', '/v1/operations/create', 'POST'] as const
}

export function getPostV1OperationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.operations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.create.$post>) {
      return parseResponse(client.v1.operations.create.$post(args, options))
    },
  })
}

export function usePostV1OperationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OperationsDeleteMutationKey() {
  return ['v1', '/v1/operations/delete', 'POST'] as const
}

export function getPostV1OperationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.operations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.delete.$post>) {
      return parseResponse(client.v1.operations.delete.$post(args, options))
    },
  })
}

export function usePostV1OperationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.operations.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OperationsGetMutationKey() {
  return ['v1', '/v1/operations/get', 'POST'] as const
}

export function getPostV1OperationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.operations.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.get.$post>) {
      return parseResponse(client.v1.operations.get.$post(args, options))
    },
  })
}

export function usePostV1OperationsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OperationsListMutationKey() {
  return ['v1', '/v1/operations/list', 'POST'] as const
}

export function getPostV1OperationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.operations.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.list.$post>) {
      return parseResponse(client.v1.operations.list.$post(args, options))
    },
  })
}

export function usePostV1OperationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OperationsUpdateMutationKey() {
  return ['v1', '/v1/operations/update', 'POST'] as const
}

export function getPostV1OperationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.operations.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.update.$post>) {
      return parseResponse(client.v1.operations.update.$post(args, options))
    },
  })
}

export function usePostV1OperationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OperationsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SchedulerDestinationsCheckConnectionMutationKey() {
  return ['v1', '/v1/scheduler/destinations/check_connection', 'POST'] as const
}

export function getPostV1SchedulerDestinationsCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulerDestinationsCheckConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
    ) {
      return parseResponse(client.v1.scheduler.destinations.check_connection.$post(args, options))
    },
  })
}

export function usePostV1SchedulerDestinationsCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scheduler.destinations.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SchedulerDestinationsCheckConnectionMutationOptions<
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

export function getPostV1SchedulerSourcesCheckConnectionMutationKey() {
  return ['v1', '/v1/scheduler/sources/check_connection', 'POST'] as const
}

export function getPostV1SchedulerSourcesCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.check_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulerSourcesCheckConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
    ) {
      return parseResponse(client.v1.scheduler.sources.check_connection.$post(args, options))
    },
  })
}

export function usePostV1SchedulerSourcesCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scheduler.sources.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SchedulerSourcesCheckConnectionMutationOptions<
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

export function getPostV1SchedulerSourcesDiscoverSchemaMutationKey() {
  return ['v1', '/v1/scheduler/sources/discover_schema', 'POST'] as const
}

export function getPostV1SchedulerSourcesDiscoverSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.discover_schema.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulerSourcesDiscoverSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
    ) {
      return parseResponse(client.v1.scheduler.sources.discover_schema.$post(args, options))
    },
  })
}

export function usePostV1SchedulerSourcesDiscoverSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scheduler.sources.discover_schema.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SchedulerSourcesDiscoverSchemaMutationOptions<
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

export function getPostV1SourceDefinitionSpecificationsGetMutationKey() {
  return ['v1', '/v1/source_definition_specifications/get', 'POST'] as const
}

export function getPostV1SourceDefinitionSpecificationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionSpecificationsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
    ) {
      return parseResponse(client.v1.source_definition_specifications.get.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionSpecificationsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definition_specifications.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionSpecificationsGetMutationOptions<
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

export function getPostV1SourceDefinitionsCreateCustomMutationKey() {
  return ['v1', '/v1/source_definitions/create_custom', 'POST'] as const
}

export function getPostV1SourceDefinitionsCreateCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsCreateCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.create_custom.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsCreateCustom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.create_custom.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsCreateCustomMutationOptions<
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

export function getPostV1SourceDefinitionsDeleteMutationKey() {
  return ['v1', '/v1/source_definitions/delete', 'POST'] as const
}

export function getPostV1SourceDefinitionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.source_definitions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_definitions.delete.$post>) {
      return parseResponse(client.v1.source_definitions.delete.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.source_definitions.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.source_definitions.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourceDefinitionsGetMutationKey() {
  return ['v1', '/v1/source_definitions/get', 'POST'] as const
}

export function getPostV1SourceDefinitionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_definitions.get.$post>) {
      return parseResponse(client.v1.source_definitions.get.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourceDefinitionsGetForWorkspaceMutationKey() {
  return ['v1', '/v1/source_definitions/get_for_workspace', 'POST'] as const
}

export function getPostV1SourceDefinitionsGetForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGetForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.get_for_workspace.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsGetForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.get_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsGetForWorkspaceMutationOptions<
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

export function getPostV1SourceDefinitionsGrantDefinitionMutationKey() {
  return ['v1', '/v1/source_definitions/grant_definition', 'POST'] as const
}

export function getPostV1SourceDefinitionsGrantDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGrantDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.grant_definition.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsGrantDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.grant_definition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsGrantDefinitionMutationOptions<
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

export function getPostV1SourceDefinitionsListMutationKey() {
  return ['v1', '/v1/source_definitions/list', 'POST'] as const
}

export function getPostV1SourceDefinitionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.list.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.source_definitions.list.$post(undefined, options))
    },
  })
}

export function usePostV1SourceDefinitionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourceDefinitionsListForWorkspaceMutationKey() {
  return ['v1', '/v1/source_definitions/list_for_workspace', 'POST'] as const
}

export function getPostV1SourceDefinitionsListForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.list_for_workspace.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsListForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsListForWorkspaceMutationOptions<
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

export function getPostV1SourceDefinitionsListLatestMutationKey() {
  return ['v1', '/v1/source_definitions/list_latest', 'POST'] as const
}

export function getPostV1SourceDefinitionsListLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListLatestMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.source_definitions.list_latest.$post(undefined, options))
    },
  })
}

export function usePostV1SourceDefinitionsListLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list_latest.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsListLatestMutationOptions<
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

export function getPostV1SourceDefinitionsListPrivateMutationKey() {
  return ['v1', '/v1/source_definitions/list_private', 'POST'] as const
}

export function getPostV1SourceDefinitionsListPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListPrivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.list_private.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsListPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list_private.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsListPrivateMutationOptions<
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

export function getPostV1SourceDefinitionsRevokeDefinitionMutationKey() {
  return ['v1', '/v1/source_definitions/revoke_definition', 'POST'] as const
}

export function getPostV1SourceDefinitionsRevokeDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsRevokeDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.revoke_definition.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsRevokeDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.source_definitions.revoke_definition.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsRevokeDefinitionMutationOptions<
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

export function getPostV1SourceDefinitionsUpdateMutationKey() {
  return ['v1', '/v1/source_definitions/update', 'POST'] as const
}

export function getPostV1SourceDefinitionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_definitions.update.$post>) {
      return parseResponse(client.v1.source_definitions.update.$post(args, options))
    },
  })
}

export function usePostV1SourceDefinitionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceDefinitionsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourceOauthsCompleteOauthMutationKey() {
  return ['v1', '/v1/source_oauths/complete_oauth', 'POST'] as const
}

export function getPostV1SourceOauthsCompleteOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsCompleteOauthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>) {
      return parseResponse(client.v1.source_oauths.complete_oauth.$post(args, options))
    },
  })
}

export function usePostV1SourceOauthsCompleteOauth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.complete_oauth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceOauthsCompleteOauthMutationOptions<
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

export function getPostV1SourceOauthsGetConsentUrlMutationKey() {
  return ['v1', '/v1/source_oauths/get_consent_url', 'POST'] as const
}

export function getPostV1SourceOauthsGetConsentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsGetConsentUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>) {
      return parseResponse(client.v1.source_oauths.get_consent_url.$post(args, options))
    },
  })
}

export function usePostV1SourceOauthsGetConsentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.get_consent_url.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceOauthsGetConsentUrlMutationOptions<
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

export function getPostV1SourceOauthsOauthParamsCreateMutationKey() {
  return ['v1', '/v1/source_oauths/oauth_params/create', 'POST'] as const
}

export function getPostV1SourceOauthsOauthParamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsOauthParamsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
    ) {
      return parseResponse(client.v1.source_oauths.oauth_params.create.$post(args, options))
    },
  })
}

export function usePostV1SourceOauthsOauthParamsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.oauth_params.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourceOauthsOauthParamsCreateMutationOptions<
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

export function getPostV1SourcesCheckConnectionMutationKey() {
  return ['v1', '/v1/sources/check_connection', 'POST'] as const
}

export function getPostV1SourcesCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.check_connection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCheckConnectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.check_connection.$post>) {
      return parseResponse(client.v1.sources.check_connection.$post(args, options))
    },
  })
}

export function usePostV1SourcesCheckConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.check_connection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesCheckConnectionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesCheckConnectionForUpdateMutationKey() {
  return ['v1', '/v1/sources/check_connection_for_update', 'POST'] as const
}

export function getPostV1SourcesCheckConnectionForUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCheckConnectionForUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
    ) {
      return parseResponse(client.v1.sources.check_connection_for_update.$post(args, options))
    },
  })
}

export function usePostV1SourcesCheckConnectionForUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.check_connection_for_update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesCheckConnectionForUpdateMutationOptions<
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

export function getPostV1SourcesCloneMutationKey() {
  return ['v1', '/v1/sources/clone', 'POST'] as const
}

export function getPostV1SourcesCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.clone.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.clone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCloneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.clone.$post>) {
      return parseResponse(client.v1.sources.clone.$post(args, options))
    },
  })
}

export function usePostV1SourcesClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.clone.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.clone.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesCloneMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesCreateMutationKey() {
  return ['v1', '/v1/sources/create', 'POST'] as const
}

export function getPostV1SourcesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.create.$post>) {
      return parseResponse(client.v1.sources.create.$post(args, options))
    },
  })
}

export function usePostV1SourcesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesDeleteMutationKey() {
  return ['v1', '/v1/sources/delete', 'POST'] as const
}

export function getPostV1SourcesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.delete.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sources.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.delete.$post>) {
      return parseResponse(client.v1.sources.delete.$post(args, options))
    },
  })
}

export function usePostV1SourcesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sources.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesDiscoverSchemaMutationKey() {
  return ['v1', '/v1/sources/discover_schema', 'POST'] as const
}

export function getPostV1SourcesDiscoverSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.discover_schema.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.discover_schema.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesDiscoverSchemaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.discover_schema.$post>) {
      return parseResponse(client.v1.sources.discover_schema.$post(args, options))
    },
  })
}

export function usePostV1SourcesDiscoverSchema<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.discover_schema.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.discover_schema.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesDiscoverSchemaMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesGetMutationKey() {
  return ['v1', '/v1/sources/get', 'POST'] as const
}

export function getPostV1SourcesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.get.$post>) {
      return parseResponse(client.v1.sources.get.$post(args, options))
    },
  })
}

export function usePostV1SourcesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.sources.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesListMutationKey() {
  return ['v1', '/v1/sources/list', 'POST'] as const
}

export function getPostV1SourcesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.list.$post>) {
      return parseResponse(client.v1.sources.list.$post(args, options))
    },
  })
}

export function usePostV1SourcesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.sources.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesMostRecentSourceActorCatalogMutationKey() {
  return ['v1', '/v1/sources/most_recent_source_actor_catalog', 'POST'] as const
}

export function getPostV1SourcesMostRecentSourceActorCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesMostRecentSourceActorCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
    ) {
      return parseResponse(client.v1.sources.most_recent_source_actor_catalog.$post(args, options))
    },
  })
}

export function usePostV1SourcesMostRecentSourceActorCatalog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesMostRecentSourceActorCatalogMutationOptions<
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

export function getPostV1SourcesSearchMutationKey() {
  return ['v1', '/v1/sources/search', 'POST'] as const
}

export function getPostV1SourcesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.search.$post>) {
      return parseResponse(client.v1.sources.search.$post(args, options))
    },
  })
}

export function usePostV1SourcesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesUpdateMutationKey() {
  return ['v1', '/v1/sources/update', 'POST'] as const
}

export function getPostV1SourcesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.update.$post>) {
      return parseResponse(client.v1.sources.update.$post(args, options))
    },
  })
}

export function usePostV1SourcesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesWriteDiscoverCatalogResultMutationKey() {
  return ['v1', '/v1/sources/write_discover_catalog_result', 'POST'] as const
}

export function getPostV1SourcesWriteDiscoverCatalogResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.write_discover_catalog_result.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesWriteDiscoverCatalogResultMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
    ) {
      return parseResponse(client.v1.sources.write_discover_catalog_result.$post(args, options))
    },
  })
}

export function usePostV1SourcesWriteDiscoverCatalogResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.write_discover_catalog_result.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesWriteDiscoverCatalogResultMutationOptions<
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

export function getPostV1StateCreateOrUpdateMutationKey() {
  return ['v1', '/v1/state/create_or_update', 'POST'] as const
}

export function getPostV1StateCreateOrUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.create_or_update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.state.create_or_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StateCreateOrUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.state.create_or_update.$post>) {
      return parseResponse(client.v1.state.create_or_update.$post(args, options))
    },
  })
}

export function usePostV1StateCreateOrUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.create_or_update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.state.create_or_update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1StateCreateOrUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1StateGetMutationKey() {
  return ['v1', '/v1/state/get', 'POST'] as const
}

export function getPostV1StateGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.state.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StateGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.state.get.$post>) {
      return parseResponse(client.v1.state.get.$post(args, options))
    },
  })
}

export function usePostV1StateGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.state.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1StateGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1WebBackendCheckUpdatesMutationKey() {
  return ['v1', '/v1/web_backend/check_updates', 'POST'] as const
}

export function getPostV1WebBackendCheckUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.check_updates.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendCheckUpdatesMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.web_backend.check_updates.$post(undefined, options))
    },
  })
}

export function usePostV1WebBackendCheckUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.check_updates.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendCheckUpdatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WebBackendConnectionsCreateMutationKey() {
  return ['v1', '/v1/web_backend/connections/create', 'POST'] as const
}

export function getPostV1WebBackendConnectionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
    ) {
      return parseResponse(client.v1.web_backend.connections.create.$post(args, options))
    },
  })
}

export function usePostV1WebBackendConnectionsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendConnectionsCreateMutationOptions<
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

export function getPostV1WebBackendConnectionsGetMutationKey() {
  return ['v1', '/v1/web_backend/connections/get', 'POST'] as const
}

export function getPostV1WebBackendConnectionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.connections.get.$post>) {
      return parseResponse(client.v1.web_backend.connections.get.$post(args, options))
    },
  })
}

export function usePostV1WebBackendConnectionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendConnectionsGetMutationOptions<
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

export function getPostV1WebBackendConnectionsListMutationKey() {
  return ['v1', '/v1/web_backend/connections/list', 'POST'] as const
}

export function getPostV1WebBackendConnectionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.connections.list.$post>) {
      return parseResponse(client.v1.web_backend.connections.list.$post(args, options))
    },
  })
}

export function usePostV1WebBackendConnectionsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendConnectionsListMutationOptions<
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

export function getPostV1WebBackendConnectionsUpdateMutationKey() {
  return ['v1', '/v1/web_backend/connections/update', 'POST'] as const
}

export function getPostV1WebBackendConnectionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
    ) {
      return parseResponse(client.v1.web_backend.connections.update.$post(args, options))
    },
  })
}

export function usePostV1WebBackendConnectionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendConnectionsUpdateMutationOptions<
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

export function getPostV1WebBackendGeographiesListMutationKey() {
  return ['v1', '/v1/web_backend/geographies/list', 'POST'] as const
}

export function getPostV1WebBackendGeographiesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.geographies.list.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendGeographiesListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.web_backend.geographies.list.$post(undefined, options))
    },
  })
}

export function usePostV1WebBackendGeographiesList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.geographies.list.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendGeographiesListMutationOptions<
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

export function getPostV1WebBackendStateGetTypeMutationKey() {
  return ['v1', '/v1/web_backend/state/get_type', 'POST'] as const
}

export function getPostV1WebBackendStateGetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.state.get_type.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.state.get_type.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendStateGetTypeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.state.get_type.$post>) {
      return parseResponse(client.v1.web_backend.state.get_type.$post(args, options))
    },
  })
}

export function usePostV1WebBackendStateGetType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.state.get_type.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.state.get_type.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendStateGetTypeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WebBackendWorkspaceStateMutationKey() {
  return ['v1', '/v1/web_backend/workspace/state', 'POST'] as const
}

export function getPostV1WebBackendWorkspaceStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.workspace.state.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.workspace.state.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendWorkspaceStateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.workspace.state.$post>) {
      return parseResponse(client.v1.web_backend.workspace.state.$post(args, options))
    },
  })
}

export function usePostV1WebBackendWorkspaceState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.workspace.state.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.workspace.state.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebBackendWorkspaceStateMutationOptions<
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

export function getPostV1WorkspacesCreateMutationKey() {
  return ['v1', '/v1/workspaces/create', 'POST'] as const
}

export function getPostV1WorkspacesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.create.$post>) {
      return parseResponse(client.v1.workspaces.create.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WorkspacesDeleteMutationKey() {
  return ['v1', '/v1/workspaces/delete', 'POST'] as const
}

export function getPostV1WorkspacesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.workspaces.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.delete.$post>) {
      return parseResponse(client.v1.workspaces.delete.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.workspaces.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WorkspacesGetMutationKey() {
  return ['v1', '/v1/workspaces/get', 'POST'] as const
}

export function getPostV1WorkspacesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.get.$post>) {
      return parseResponse(client.v1.workspaces.get.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WorkspacesGetByConnectionIdMutationKey() {
  return ['v1', '/v1/workspaces/get_by_connection_id', 'POST'] as const
}

export function getPostV1WorkspacesGetByConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetByConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
    ) {
      return parseResponse(client.v1.workspaces.get_by_connection_id.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesGetByConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesGetByConnectionIdMutationOptions<
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

export function getPostV1WorkspacesGetBySlugMutationKey() {
  return ['v1', '/v1/workspaces/get_by_slug', 'POST'] as const
}

export function getPostV1WorkspacesGetBySlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_by_slug.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetBySlugMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>) {
      return parseResponse(client.v1.workspaces.get_by_slug.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesGetBySlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_by_slug.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesGetBySlugMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WorkspacesListMutationKey() {
  return ['v1', '/v1/workspaces/list', 'POST'] as const
}

export function getPostV1WorkspacesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.workspaces.list.$post(undefined, options))
    },
  })
}

export function usePostV1WorkspacesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WorkspacesTagFeedbackStatusAsDoneMutationKey() {
  return ['v1', '/v1/workspaces/tag_feedback_status_as_done', 'POST'] as const
}

export function getPostV1WorkspacesTagFeedbackStatusAsDoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesTagFeedbackStatusAsDoneMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
    ) {
      return parseResponse(client.v1.workspaces.tag_feedback_status_as_done.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesTagFeedbackStatusAsDone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesTagFeedbackStatusAsDoneMutationOptions<
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

export function getPostV1WorkspacesUpdateMutationKey() {
  return ['v1', '/v1/workspaces/update', 'POST'] as const
}

export function getPostV1WorkspacesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.update.$post>) {
      return parseResponse(client.v1.workspaces.update.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WorkspacesUpdateNameMutationKey() {
  return ['v1', '/v1/workspaces/update_name', 'POST'] as const
}

export function getPostV1WorkspacesUpdateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update_name.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.update_name.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesUpdateNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.update_name.$post>) {
      return parseResponse(client.v1.workspaces.update_name.$post(args, options))
    },
  })
}

export function usePostV1WorkspacesUpdateName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update_name.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.update_name.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WorkspacesUpdateNameMutationOptions<TError, TOnMutateResult>(
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
