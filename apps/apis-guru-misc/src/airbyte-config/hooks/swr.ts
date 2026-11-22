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

export function getPostV1AttemptSaveStatsKey() {
  return ['v1', '/v1/attempt/save_stats', 'POST'] as const
}

export function usePostV1AttemptSaveStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_stats.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.save_stats.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptSaveStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.save_stats.$post> },
      ) => parseResponse(client.v1.attempt.save_stats.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptSaveSyncConfigKey() {
  return ['v1', '/v1/attempt/save_sync_config', 'POST'] as const
}

export function usePostV1AttemptSaveSyncConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_sync_config.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.save_sync_config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptSaveSyncConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.save_sync_config.$post> },
      ) => parseResponse(client.v1.attempt.save_sync_config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptSetWorkflowInAttemptKey() {
  return ['v1', '/v1/attempt/set_workflow_in_attempt', 'POST'] as const
}

export function usePostV1AttemptSetWorkflowInAttempt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.attempt.set_workflow_in_attempt.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.set_workflow_in_attempt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptSetWorkflowInAttemptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.set_workflow_in_attempt.$post> },
      ) => parseResponse(client.v1.attempt.set_workflow_in_attempt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsCreateKey() {
  return ['v1', '/v1/connections/create', 'POST'] as const
}

export function usePostV1ConnectionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.create.$post> },
      ) => parseResponse(client.v1.connections.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsDeleteKey() {
  return ['v1', '/v1/connections/delete', 'POST'] as const
}

export function usePostV1ConnectionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.delete.$post> },
      ) => parseResponse(client.v1.connections.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsGetKey() {
  return ['v1', '/v1/connections/get', 'POST'] as const
}

export function usePostV1ConnectionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.get.$post> }) =>
        parseResponse(client.v1.connections.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsListKey() {
  return ['v1', '/v1/connections/list', 'POST'] as const
}

export function usePostV1ConnectionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.list.$post> }) =>
        parseResponse(client.v1.connections.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsListAllKey() {
  return ['v1', '/v1/connections/list_all', 'POST'] as const
}

export function usePostV1ConnectionsListAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.list_all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsListAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.list_all.$post> },
      ) => parseResponse(client.v1.connections.list_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsResetKey() {
  return ['v1', '/v1/connections/reset', 'POST'] as const
}

export function usePostV1ConnectionsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.reset.$post> },
      ) => parseResponse(client.v1.connections.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsSearchKey() {
  return ['v1', '/v1/connections/search', 'POST'] as const
}

export function usePostV1ConnectionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.search.$post> },
      ) => parseResponse(client.v1.connections.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsSyncKey() {
  return ['v1', '/v1/connections/sync', 'POST'] as const
}

export function usePostV1ConnectionsSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.sync.$post> }) =>
        parseResponse(client.v1.connections.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsUpdateKey() {
  return ['v1', '/v1/connections/update', 'POST'] as const
}

export function usePostV1ConnectionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.update.$post> },
      ) => parseResponse(client.v1.connections.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionSpecificationsGetKey() {
  return ['v1', '/v1/destination_definition_specifications/get', 'POST'] as const
}

export function usePostV1DestinationDefinitionSpecificationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionSpecificationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definition_specifications.get.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsCreateCustomKey() {
  return ['v1', '/v1/destination_definitions/create_custom', 'POST'] as const
}

export function usePostV1DestinationDefinitionsCreateCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsCreateCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_definitions.create_custom.$post> },
      ) => parseResponse(client.v1.destination_definitions.create_custom.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsDeleteKey() {
  return ['v1', '/v1/destination_definitions/delete', 'POST'] as const
}

export function usePostV1DestinationDefinitionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destination_definitions.delete.$post> },
      ) => parseResponse(client.v1.destination_definitions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGetKey() {
  return ['v1', '/v1/destination_definitions/get', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destination_definitions.get.$post> },
      ) => parseResponse(client.v1.destination_definitions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGetForWorkspaceKey() {
  return ['v1', '/v1/destination_definitions/get_for_workspace', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGetForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGetForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.get_for_workspace.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGrantDefinitionKey() {
  return ['v1', '/v1/destination_definitions/grant_definition', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGrantDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGrantDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>
        },
      ) =>
        parseResponse(client.v1.destination_definitions.grant_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListKey() {
  return ['v1', '/v1/destination_definitions/list', 'POST'] as const
}

export function usePostV1DestinationDefinitionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.destination_definitions.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListForWorkspaceKey() {
  return ['v1', '/v1/destination_definitions/list_for_workspace', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.list_for_workspace.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListLatestKey() {
  return ['v1', '/v1/destination_definitions/list_latest', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.destination_definitions.list_latest.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListPrivateKey() {
  return ['v1', '/v1/destination_definitions/list_private', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.list_private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_definitions.list_private.$post> },
      ) => parseResponse(client.v1.destination_definitions.list_private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsRevokeDefinitionKey() {
  return ['v1', '/v1/destination_definitions/revoke_definition', 'POST'] as const
}

export function usePostV1DestinationDefinitionsRevokeDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsRevokeDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.revoke_definition.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsUpdateKey() {
  return ['v1', '/v1/destination_definitions/update', 'POST'] as const
}

export function usePostV1DestinationDefinitionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destination_definitions.update.$post> },
      ) => parseResponse(client.v1.destination_definitions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationOauthsCompleteOauthKey() {
  return ['v1', '/v1/destination_oauths/complete_oauth', 'POST'] as const
}

export function usePostV1DestinationOauthsCompleteOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationOauthsCompleteOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post> },
      ) => parseResponse(client.v1.destination_oauths.complete_oauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationOauthsGetConsentUrlKey() {
  return ['v1', '/v1/destination_oauths/get_consent_url', 'POST'] as const
}

export function usePostV1DestinationOauthsGetConsentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationOauthsGetConsentUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post> },
      ) => parseResponse(client.v1.destination_oauths.get_consent_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationOauthsOauthParamsCreateKey() {
  return ['v1', '/v1/destination_oauths/oauth_params/create', 'POST'] as const
}

export function usePostV1DestinationOauthsOauthParamsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationOauthsOauthParamsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post> },
      ) =>
        parseResponse(client.v1.destination_oauths.oauth_params.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCheckConnectionKey() {
  return ['v1', '/v1/destinations/check_connection', 'POST'] as const
}

export function usePostV1DestinationsCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.check_connection.$post> },
      ) => parseResponse(client.v1.destinations.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCheckConnectionForUpdateKey() {
  return ['v1', '/v1/destinations/check_connection_for_update', 'POST'] as const
}

export function usePostV1DestinationsCheckConnectionForUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCheckConnectionForUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>
        },
      ) =>
        parseResponse(client.v1.destinations.check_connection_for_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCloneKey() {
  return ['v1', '/v1/destinations/clone', 'POST'] as const
}

export function usePostV1DestinationsClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.clone.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.clone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.clone.$post> },
      ) => parseResponse(client.v1.destinations.clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCreateKey() {
  return ['v1', '/v1/destinations/create', 'POST'] as const
}

export function usePostV1DestinationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.create.$post> },
      ) => parseResponse(client.v1.destinations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsDeleteKey() {
  return ['v1', '/v1/destinations/delete', 'POST'] as const
}

export function usePostV1DestinationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.delete.$post> },
      ) => parseResponse(client.v1.destinations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsGetKey() {
  return ['v1', '/v1/destinations/get', 'POST'] as const
}

export function usePostV1DestinationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.destinations.get.$post> }) =>
        parseResponse(client.v1.destinations.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsListKey() {
  return ['v1', '/v1/destinations/list', 'POST'] as const
}

export function usePostV1DestinationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.list.$post> },
      ) => parseResponse(client.v1.destinations.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsSearchKey() {
  return ['v1', '/v1/destinations/search', 'POST'] as const
}

export function usePostV1DestinationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.search.$post> },
      ) => parseResponse(client.v1.destinations.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsUpdateKey() {
  return ['v1', '/v1/destinations/update', 'POST'] as const
}

export function usePostV1DestinationsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.update.$post> },
      ) => parseResponse(client.v1.destinations.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HealthKey() {
  return ['v1', '/v1/health'] as const
}

export function useGetV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1JobsCancelKey() {
  return ['v1', '/v1/jobs/cancel', 'POST'] as const
}

export function usePostV1JobsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.cancel.$post> }) =>
        parseResponse(client.v1.jobs.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetKey() {
  return ['v1', '/v1/jobs/get', 'POST'] as const
}

export function usePostV1JobsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.get.$post> }) =>
        parseResponse(client.v1.jobs.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetDebugInfoKey() {
  return ['v1', '/v1/jobs/get_debug_info', 'POST'] as const
}

export function usePostV1JobsGetDebugInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_debug_info.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_debug_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetDebugInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_debug_info.$post> },
      ) => parseResponse(client.v1.jobs.get_debug_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetLastReplicationJobKey() {
  return ['v1', '/v1/jobs/get_last_replication_job', 'POST'] as const
}

export function usePostV1JobsGetLastReplicationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetLastReplicationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post> },
      ) => parseResponse(client.v1.jobs.get_last_replication_job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetLightKey() {
  return ['v1', '/v1/jobs/get_light', 'POST'] as const
}

export function usePostV1JobsGetLight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_light.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_light.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetLightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_light.$post> }) =>
        parseResponse(client.v1.jobs.get_light.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetNormalizationStatusKey() {
  return ['v1', '/v1/jobs/get_normalization_status', 'POST'] as const
}

export function usePostV1JobsGetNormalizationStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_normalization_status.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_normalization_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetNormalizationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_normalization_status.$post> },
      ) => parseResponse(client.v1.jobs.get_normalization_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsListKey() {
  return ['v1', '/v1/jobs/list', 'POST'] as const
}

export function usePostV1JobsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.list.$post> }) =>
        parseResponse(client.v1.jobs.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1LogsGetKey() {
  return ['v1', '/v1/logs/get', 'POST'] as const
}

export function usePostV1LogsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logs.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.logs.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LogsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.logs.get.$post> }) =>
        parseResponse(client.v1.logs.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NotificationsTryKey() {
  return ['v1', '/v1/notifications/try', 'POST'] as const
}

export function usePostV1NotificationsTry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.notifications.try.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NotificationsTryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.notifications.try.$post> },
      ) => parseResponse(client.v1.notifications.try.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OpenapiKey() {
  return ['v1', '/v1/openapi'] as const
}

export function useGetV1Openapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Openapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OperationsCheckKey() {
  return ['v1', '/v1/operations/check', 'POST'] as const
}

export function usePostV1OperationsCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.check.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.operations.check.$post> }) =>
        parseResponse(client.v1.operations.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsCreateKey() {
  return ['v1', '/v1/operations/create', 'POST'] as const
}

export function usePostV1OperationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.operations.create.$post> },
      ) => parseResponse(client.v1.operations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsDeleteKey() {
  return ['v1', '/v1/operations/delete', 'POST'] as const
}

export function usePostV1OperationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.operations.delete.$post> },
      ) => parseResponse(client.v1.operations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsGetKey() {
  return ['v1', '/v1/operations/get', 'POST'] as const
}

export function usePostV1OperationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.operations.get.$post> }) =>
        parseResponse(client.v1.operations.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsListKey() {
  return ['v1', '/v1/operations/list', 'POST'] as const
}

export function usePostV1OperationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.operations.list.$post> }) =>
        parseResponse(client.v1.operations.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsUpdateKey() {
  return ['v1', '/v1/operations/update', 'POST'] as const
}

export function usePostV1OperationsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.operations.update.$post> },
      ) => parseResponse(client.v1.operations.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulerDestinationsCheckConnectionKey() {
  return ['v1', '/v1/scheduler/destinations/check_connection', 'POST'] as const
}

export function usePostV1SchedulerDestinationsCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulerDestinationsCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>
        },
      ) =>
        parseResponse(client.v1.scheduler.destinations.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulerSourcesCheckConnectionKey() {
  return ['v1', '/v1/scheduler/sources/check_connection', 'POST'] as const
}

export function usePostV1SchedulerSourcesCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.check_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulerSourcesCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post> },
      ) => parseResponse(client.v1.scheduler.sources.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulerSourcesDiscoverSchemaKey() {
  return ['v1', '/v1/scheduler/sources/discover_schema', 'POST'] as const
}

export function usePostV1SchedulerSourcesDiscoverSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.discover_schema.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulerSourcesDiscoverSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post> },
      ) => parseResponse(client.v1.scheduler.sources.discover_schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionSpecificationsGetKey() {
  return ['v1', '/v1/source_definition_specifications/get', 'POST'] as const
}

export function usePostV1SourceDefinitionSpecificationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definition_specifications.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionSpecificationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definition_specifications.get.$post> },
      ) => parseResponse(client.v1.source_definition_specifications.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsCreateCustomKey() {
  return ['v1', '/v1/source_definitions/create_custom', 'POST'] as const
}

export function usePostV1SourceDefinitionsCreateCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.create_custom.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsCreateCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.create_custom.$post> },
      ) => parseResponse(client.v1.source_definitions.create_custom.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsDeleteKey() {
  return ['v1', '/v1/source_definitions/delete', 'POST'] as const
}

export function usePostV1SourceDefinitionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.delete.$post> },
      ) => parseResponse(client.v1.source_definitions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGetKey() {
  return ['v1', '/v1/source_definitions/get', 'POST'] as const
}

export function usePostV1SourceDefinitionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.get.$post> },
      ) => parseResponse(client.v1.source_definitions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGetForWorkspaceKey() {
  return ['v1', '/v1/source_definitions/get_for_workspace', 'POST'] as const
}

export function usePostV1SourceDefinitionsGetForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGetForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post> },
      ) => parseResponse(client.v1.source_definitions.get_for_workspace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGrantDefinitionKey() {
  return ['v1', '/v1/source_definitions/grant_definition', 'POST'] as const
}

export function usePostV1SourceDefinitionsGrantDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGrantDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.grant_definition.$post> },
      ) => parseResponse(client.v1.source_definitions.grant_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListKey() {
  return ['v1', '/v1/source_definitions/list', 'POST'] as const
}

export function usePostV1SourceDefinitionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.list.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.source_definitions.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListForWorkspaceKey() {
  return ['v1', '/v1/source_definitions/list_for_workspace', 'POST'] as const
}

export function usePostV1SourceDefinitionsListForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post> },
      ) => parseResponse(client.v1.source_definitions.list_for_workspace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListLatestKey() {
  return ['v1', '/v1/source_definitions/list_latest', 'POST'] as const
}

export function usePostV1SourceDefinitionsListLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.source_definitions.list_latest.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListPrivateKey() {
  return ['v1', '/v1/source_definitions/list_private', 'POST'] as const
}

export function usePostV1SourceDefinitionsListPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.list_private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.list_private.$post> },
      ) => parseResponse(client.v1.source_definitions.list_private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsRevokeDefinitionKey() {
  return ['v1', '/v1/source_definitions/revoke_definition', 'POST'] as const
}

export function usePostV1SourceDefinitionsRevokeDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsRevokeDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post> },
      ) => parseResponse(client.v1.source_definitions.revoke_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsUpdateKey() {
  return ['v1', '/v1/source_definitions/update', 'POST'] as const
}

export function usePostV1SourceDefinitionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.update.$post> },
      ) => parseResponse(client.v1.source_definitions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsCompleteOauthKey() {
  return ['v1', '/v1/source_oauths/complete_oauth', 'POST'] as const
}

export function usePostV1SourceOauthsCompleteOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsCompleteOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post> },
      ) => parseResponse(client.v1.source_oauths.complete_oauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsGetConsentUrlKey() {
  return ['v1', '/v1/source_oauths/get_consent_url', 'POST'] as const
}

export function usePostV1SourceOauthsGetConsentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsGetConsentUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post> },
      ) => parseResponse(client.v1.source_oauths.get_consent_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsOauthParamsCreateKey() {
  return ['v1', '/v1/source_oauths/oauth_params/create', 'POST'] as const
}

export function usePostV1SourceOauthsOauthParamsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsOauthParamsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post> },
      ) => parseResponse(client.v1.source_oauths.oauth_params.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCheckConnectionKey() {
  return ['v1', '/v1/sources/check_connection', 'POST'] as const
}

export function usePostV1SourcesCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.check_connection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.check_connection.$post> },
      ) => parseResponse(client.v1.sources.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCheckConnectionForUpdateKey() {
  return ['v1', '/v1/sources/check_connection_for_update', 'POST'] as const
}

export function usePostV1SourcesCheckConnectionForUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCheckConnectionForUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.sources.check_connection_for_update.$post> },
      ) => parseResponse(client.v1.sources.check_connection_for_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCloneKey() {
  return ['v1', '/v1/sources/clone', 'POST'] as const
}

export function usePostV1SourcesClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.clone.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.clone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.clone.$post> }) =>
        parseResponse(client.v1.sources.clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCreateKey() {
  return ['v1', '/v1/sources/create', 'POST'] as const
}

export function usePostV1SourcesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.create.$post> }) =>
        parseResponse(client.v1.sources.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesDeleteKey() {
  return ['v1', '/v1/sources/delete', 'POST'] as const
}

export function usePostV1SourcesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.delete.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.delete.$post> }) =>
        parseResponse(client.v1.sources.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesDiscoverSchemaKey() {
  return ['v1', '/v1/sources/discover_schema', 'POST'] as const
}

export function usePostV1SourcesDiscoverSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.discover_schema.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.discover_schema.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesDiscoverSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.discover_schema.$post> },
      ) => parseResponse(client.v1.sources.discover_schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesGetKey() {
  return ['v1', '/v1/sources/get', 'POST'] as const
}

export function usePostV1SourcesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.get.$post> }) =>
        parseResponse(client.v1.sources.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesListKey() {
  return ['v1', '/v1/sources/list', 'POST'] as const
}

export function usePostV1SourcesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.list.$post> }) =>
        parseResponse(client.v1.sources.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesMostRecentSourceActorCatalogKey() {
  return ['v1', '/v1/sources/most_recent_source_actor_catalog', 'POST'] as const
}

export function usePostV1SourcesMostRecentSourceActorCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesMostRecentSourceActorCatalogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>
        },
      ) =>
        parseResponse(client.v1.sources.most_recent_source_actor_catalog.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesSearchKey() {
  return ['v1', '/v1/sources/search', 'POST'] as const
}

export function usePostV1SourcesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.search.$post> }) =>
        parseResponse(client.v1.sources.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesUpdateKey() {
  return ['v1', '/v1/sources/update', 'POST'] as const
}

export function usePostV1SourcesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.update.$post> }) =>
        parseResponse(client.v1.sources.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesWriteDiscoverCatalogResultKey() {
  return ['v1', '/v1/sources/write_discover_catalog_result', 'POST'] as const
}

export function usePostV1SourcesWriteDiscoverCatalogResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.write_discover_catalog_result.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesWriteDiscoverCatalogResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post> },
      ) => parseResponse(client.v1.sources.write_discover_catalog_result.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StateCreateOrUpdateKey() {
  return ['v1', '/v1/state/create_or_update', 'POST'] as const
}

export function usePostV1StateCreateOrUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.create_or_update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.state.create_or_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StateCreateOrUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.state.create_or_update.$post> },
      ) => parseResponse(client.v1.state.create_or_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StateGetKey() {
  return ['v1', '/v1/state/get', 'POST'] as const
}

export function usePostV1StateGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.state.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StateGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.state.get.$post> }) =>
        parseResponse(client.v1.state.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendCheckUpdatesKey() {
  return ['v1', '/v1/web_backend/check_updates', 'POST'] as const
}

export function usePostV1WebBackendCheckUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.check_updates.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendCheckUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.web_backend.check_updates.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsCreateKey() {
  return ['v1', '/v1/web_backend/connections/create', 'POST'] as const
}

export function usePostV1WebBackendConnectionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.create.$post> },
      ) => parseResponse(client.v1.web_backend.connections.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsGetKey() {
  return ['v1', '/v1/web_backend/connections/get', 'POST'] as const
}

export function usePostV1WebBackendConnectionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.get.$post> },
      ) => parseResponse(client.v1.web_backend.connections.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsListKey() {
  return ['v1', '/v1/web_backend/connections/list', 'POST'] as const
}

export function usePostV1WebBackendConnectionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.list.$post> },
      ) => parseResponse(client.v1.web_backend.connections.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsUpdateKey() {
  return ['v1', '/v1/web_backend/connections/update', 'POST'] as const
}

export function usePostV1WebBackendConnectionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.update.$post> },
      ) => parseResponse(client.v1.web_backend.connections.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendGeographiesListKey() {
  return ['v1', '/v1/web_backend/geographies/list', 'POST'] as const
}

export function usePostV1WebBackendGeographiesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.geographies.list.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendGeographiesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.web_backend.geographies.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendStateGetTypeKey() {
  return ['v1', '/v1/web_backend/state/get_type', 'POST'] as const
}

export function usePostV1WebBackendStateGetType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.state.get_type.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.state.get_type.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendStateGetTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.state.get_type.$post> },
      ) => parseResponse(client.v1.web_backend.state.get_type.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendWorkspaceStateKey() {
  return ['v1', '/v1/web_backend/workspace/state', 'POST'] as const
}

export function usePostV1WebBackendWorkspaceState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.workspace.state.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.workspace.state.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendWorkspaceStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.workspace.state.$post> },
      ) => parseResponse(client.v1.web_backend.workspace.state.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesCreateKey() {
  return ['v1', '/v1/workspaces/create', 'POST'] as const
}

export function usePostV1WorkspacesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.create.$post> },
      ) => parseResponse(client.v1.workspaces.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesDeleteKey() {
  return ['v1', '/v1/workspaces/delete', 'POST'] as const
}

export function usePostV1WorkspacesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.delete.$post> },
      ) => parseResponse(client.v1.workspaces.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetKey() {
  return ['v1', '/v1/workspaces/get', 'POST'] as const
}

export function usePostV1WorkspacesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get.$post> }) =>
        parseResponse(client.v1.workspaces.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetByConnectionIdKey() {
  return ['v1', '/v1/workspaces/get_by_connection_id', 'POST'] as const
}

export function usePostV1WorkspacesGetByConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetByConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post> },
      ) => parseResponse(client.v1.workspaces.get_by_connection_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetBySlugKey() {
  return ['v1', '/v1/workspaces/get_by_slug', 'POST'] as const
}

export function usePostV1WorkspacesGetBySlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_by_slug.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetBySlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get_by_slug.$post> },
      ) => parseResponse(client.v1.workspaces.get_by_slug.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesListKey() {
  return ['v1', '/v1/workspaces/list', 'POST'] as const
}

export function usePostV1WorkspacesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.workspaces.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesTagFeedbackStatusAsDoneKey() {
  return ['v1', '/v1/workspaces/tag_feedback_status_as_done', 'POST'] as const
}

export function usePostV1WorkspacesTagFeedbackStatusAsDone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesTagFeedbackStatusAsDoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post> },
      ) =>
        parseResponse(client.v1.workspaces.tag_feedback_status_as_done.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesUpdateKey() {
  return ['v1', '/v1/workspaces/update', 'POST'] as const
}

export function usePostV1WorkspacesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.update.$post> },
      ) => parseResponse(client.v1.workspaces.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesUpdateNameKey() {
  return ['v1', '/v1/workspaces/update_name', 'POST'] as const
}

export function usePostV1WorkspacesUpdateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update_name.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.update_name.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesUpdateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.update_name.$post> },
      ) => parseResponse(client.v1.workspaces.update_name.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
