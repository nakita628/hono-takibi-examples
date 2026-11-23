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

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV1AgentSettingsThinkModelsKey() {
  return ['v1', '/v1/agent/settings/think/models'] as const
}

export function useGetV1AgentSettingsThinkModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentSettingsThinkModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agent.settings.think.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentSettingsThinkModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentSettingsThinkModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agent.settings.think.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdAgentsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/agents', args] as const
}

export function useGetV1ProjectsProjectIdAgents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
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
        ? getGetV1ProjectsProjectIdAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdAgents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
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
        ? getGetV1ProjectsProjectIdAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdAgentsKey() {
  return ['v1', '/v1/projects/:project_id/agents', 'POST'] as const
}

export function usePostV1ProjectsProjectIdAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$post']> },
      ) => parseResponse(client.v1.projects[':project_id'].agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdAgentsAgentIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', args] as const
}

export function useGetV1ProjectsProjectIdAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
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
        ? getGetV1ProjectsProjectIdAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id'].agents[':agent_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
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
        ? getGetV1ProjectsProjectIdAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id'].agents[':agent_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdAgentsAgentIdKey() {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdAgentsAgentIdKey()
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
            (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id'].agents[':agent_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdAgentsAgentIdKey() {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdAgentsAgentIdKey()
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
            (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id'].agents[':agent_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdAgentVariablesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/agent-variables', args] as const
}

export function useGetV1ProjectsProjectIdAgentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
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
        ? getGetV1ProjectsProjectIdAgentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id']['agent-variables'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdAgentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
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
        ? getGetV1ProjectsProjectIdAgentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id']['agent-variables'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdAgentVariablesKey() {
  return ['v1', '/v1/projects/:project_id/agent-variables', 'POST'] as const
}

export function usePostV1ProjectsProjectIdAgentVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdAgentVariablesKey()
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
            (typeof client.v1.projects)[':project_id']['agent-variables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id']['agent-variables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdAgentVariablesVariableIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', args] as const
}

export function useGetV1ProjectsProjectIdAgentVariablesVariableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
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
        ? getGetV1ProjectsProjectIdAgentVariablesVariableIdKey(args)
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
                (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
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
          client.v1.projects[':project_id']['agent-variables'][':variable_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdAgentVariablesVariableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
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
        ? getGetV1ProjectsProjectIdAgentVariablesVariableIdKey(args)
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
                (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
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
          client.v1.projects[':project_id']['agent-variables'][':variable_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdAgentVariablesVariableIdKey() {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdAgentVariablesVariableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdAgentVariablesVariableIdKey()
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
            (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id']['agent-variables'][':variable_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdAgentVariablesVariableIdKey() {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectIdAgentVariablesVariableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdAgentVariablesVariableIdKey()
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
            (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id']['agent-variables'][':variable_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ListenKey() {
  return ['v1', '/v1/listen', 'POST'] as const
}

export function usePostV1Listen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listen.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.listen.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ListenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.listen.$post> }) =>
        parseResponse(client.v1.listen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SpeakKey() {
  return ['v1', '/v1/speak', 'POST'] as const
}

export function usePostV1Speak<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speak.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.speak.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SpeakKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.speak.$post> }) =>
        parseResponse(client.v1.speak.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ReadKey() {
  return ['v1', '/v1/read', 'POST'] as const
}

export function usePostV1Read<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.read.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.read.$post> }) =>
        parseResponse(client.v1.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsKey() {
  return ['v1', '/v1/projects'] as const
}

export function useGetV1Projects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Projects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id', args] as const
}

export function useGetV1ProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
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
        ? getGetV1ProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
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
        ? getGetV1ProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdKey() {
  return ['v1', '/v1/projects/:project_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':project_id']['$delete']> },
      ) => parseResponse(client.v1.projects[':project_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdKey() {
  return ['v1', '/v1/projects/:project_id', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':project_id']['$patch']> },
      ) => parseResponse(client.v1.projects[':project_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdLeaveKey() {
  return ['v1', '/v1/projects/:project_id/leave', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>
        },
      ) => parseResponse(client.v1.projects[':project_id'].leave.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdModelsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/models', args] as const
}

export function useGetV1ProjectsProjectIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
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
        ? getGetV1ProjectsProjectIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
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
        ? getGetV1ProjectsProjectIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdModelsModelIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/models/:model_id', args] as const
}

export function useGetV1ProjectsProjectIdModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
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
        ? getGetV1ProjectsProjectIdModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id'].models[':model_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
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
        ? getGetV1ProjectsProjectIdModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id'].models[':model_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ModelsKey(args: InferRequestType<typeof client.v1.models.$get>) {
  return ['v1', '/v1/models', args] as const
}

export function useGetV1Models<TError = unknown>(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Models<TError = unknown>(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ModelsModelIdKey(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
) {
  return ['v1', '/v1/models/:model_id', args] as const
}

export function useGetV1ModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
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
        ? getGetV1ModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models[':model_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
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
        ? getGetV1ModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models[':model_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdKeysKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/keys', args] as const
}

export function useGetV1ProjectsProjectIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
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
        ? getGetV1ProjectsProjectIdKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
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
        ? getGetV1ProjectsProjectIdKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdKeysKey() {
  return ['v1', '/v1/projects/:project_id/keys', 'POST'] as const
}

export function usePostV1ProjectsProjectIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$post']> },
      ) => parseResponse(client.v1.projects[':project_id'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdKeysKeyIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/keys/:key_id', args] as const
}

export function useGetV1ProjectsProjectIdKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
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
        ? getGetV1ProjectsProjectIdKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
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
        ? getGetV1ProjectsProjectIdKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdKeysKeyIdKey() {
  return ['v1', '/v1/projects/:project_id/keys/:key_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdKeysKeyIdKey()
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
            (typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id'].keys[':key_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdMembersKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/members', args] as const
}

export function useGetV1ProjectsProjectIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
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
        ? getGetV1ProjectsProjectIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
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
        ? getGetV1ProjectsProjectIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdMembersMemberIdKey() {
  return ['v1', '/v1/projects/:project_id/members/:member_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdMembersMemberIdKey()
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
            (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id'].members[':member_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdMembersMemberIdScopesKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/members/:member_id/scopes', args] as const
}

export function useGetV1ProjectsProjectIdMembersMemberIdScopes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
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
        ? getGetV1ProjectsProjectIdMembersMemberIdScopesKey(args)
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
                (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
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
          client.v1.projects[':project_id'].members[':member_id'].scopes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdMembersMemberIdScopes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
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
        ? getGetV1ProjectsProjectIdMembersMemberIdScopesKey(args)
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
                (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
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
          client.v1.projects[':project_id'].members[':member_id'].scopes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdMembersMemberIdScopesKey() {
  return ['v1', '/v1/projects/:project_id/members/:member_id/scopes', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdMembersMemberIdScopes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdMembersMemberIdScopesKey()
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
            (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id'].members[':member_id'].scopes.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdInvitesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/invites', args] as const
}

export function useGetV1ProjectsProjectIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
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
        ? getGetV1ProjectsProjectIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
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
        ? getGetV1ProjectsProjectIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdInvitesKey() {
  return ['v1', '/v1/projects/:project_id/invites', 'POST'] as const
}

export function usePostV1ProjectsProjectIdInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$post']>
        },
      ) => parseResponse(client.v1.projects[':project_id'].invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdInvitesEmailKey() {
  return ['v1', '/v1/projects/:project_id/invites/:email', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdInvitesEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdInvitesEmailKey()
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
            (typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id'].invites[':email'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdRequestsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/requests', args] as const
}

export function useGetV1ProjectsProjectIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
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
        ? getGetV1ProjectsProjectIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
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
        ? getGetV1ProjectsProjectIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdRequestsRequestIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/requests/:request_id', args] as const
}

export function useGetV1ProjectsProjectIdRequestsRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
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
        ? getGetV1ProjectsProjectIdRequestsRequestIdKey(args)
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
                (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
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
          client.v1.projects[':project_id'].requests[':request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdRequestsRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
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
        ? getGetV1ProjectsProjectIdRequestsRequestIdKey(args)
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
                (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
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
          client.v1.projects[':project_id'].requests[':request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdUsageKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/usage', args] as const
}

export function useGetV1ProjectsProjectIdUsage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
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
        ? getGetV1ProjectsProjectIdUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdUsage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
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
        ? getGetV1ProjectsProjectIdUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdUsageFieldsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/usage/fields', args] as const
}

export function useGetV1ProjectsProjectIdUsageFields<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
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
        ? getGetV1ProjectsProjectIdUsageFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].usage.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdUsageFields<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
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
        ? getGetV1ProjectsProjectIdUsageFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].usage.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdUsageBreakdownKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/usage/breakdown', args] as const
}

export function useGetV1ProjectsProjectIdUsageBreakdown<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
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
        ? getGetV1ProjectsProjectIdUsageBreakdownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].usage.breakdown.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdUsageBreakdown<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
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
        ? getGetV1ProjectsProjectIdUsageBreakdownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].usage.breakdown.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdBalancesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/balances', args] as const
}

export function useGetV1ProjectsProjectIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
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
        ? getGetV1ProjectsProjectIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
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
        ? getGetV1ProjectsProjectIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdBalancesBalanceIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/balances/:balance_id', args] as const
}

export function useGetV1ProjectsProjectIdBalancesBalanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
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
        ? getGetV1ProjectsProjectIdBalancesBalanceIdKey(args)
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
                (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
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
          client.v1.projects[':project_id'].balances[':balance_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdBalancesBalanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
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
        ? getGetV1ProjectsProjectIdBalancesBalanceIdKey(args)
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
                (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
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
          client.v1.projects[':project_id'].balances[':balance_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdBillingBreakdownKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/billing/breakdown', args] as const
}

export function useGetV1ProjectsProjectIdBillingBreakdown<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
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
        ? getGetV1ProjectsProjectIdBillingBreakdownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id'].billing.breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdBillingBreakdown<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
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
        ? getGetV1ProjectsProjectIdBillingBreakdownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project_id'].billing.breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdBillingFieldsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/billing/fields', args] as const
}

export function useGetV1ProjectsProjectIdBillingFields<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
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
        ? getGetV1ProjectsProjectIdBillingFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].billing.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdBillingFields<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
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
        ? getGetV1ProjectsProjectIdBillingFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].billing.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdPurchasesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/purchases', args] as const
}

export function useGetV1ProjectsProjectIdPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
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
        ? getGetV1ProjectsProjectIdPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
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
        ? getGetV1ProjectsProjectIdPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_id'].purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdSelfHostedDistributionCredentialsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/self-hosted/distribution/credentials', args] as const
}

export function useGetV1ProjectsProjectIdSelfHostedDistributionCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
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
        ? getGetV1ProjectsProjectIdSelfHostedDistributionCredentialsKey(args)
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
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
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
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdSelfHostedDistributionCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
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
        ? getGetV1ProjectsProjectIdSelfHostedDistributionCredentialsKey(args)
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
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
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
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsKey() {
  return ['v1', '/v1/projects/:project_id/self-hosted/distribution/credentials', 'POST'] as const
}

export function usePostV1ProjectsProjectIdSelfHostedDistributionCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsKey()
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
            (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project_id/self-hosted/distribution/credentials/:distribution_credentials_id',
    args,
  ] as const
}

export function useGetV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
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
        ? getGetV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdKey(
            args,
          )
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
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
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
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
            ':distribution_credentials_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
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
        ? getGetV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdKey(
            args,
          )
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
                (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
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
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
            ':distribution_credentials_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdKey() {
  return [
    'v1',
    '/v1/projects/:project_id/self-hosted/distribution/credentials/:distribution_credentials_id',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdKey()
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
            (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
            ':distribution_credentials_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthGrantKey() {
  return ['v1', '/v1/auth/grant', 'POST'] as const
}

export function usePostV1AuthGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.grant.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.grant.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.auth.grant.$post> }) =>
        parseResponse(client.v1.auth.grant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SpeakKey() {
  return ['v2', '/v2/speak', 'POST'] as const
}

export function usePostV2Speak<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.speak.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.speak.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SpeakKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.speak.$post> }) =>
        parseResponse(client.v2.speak.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
