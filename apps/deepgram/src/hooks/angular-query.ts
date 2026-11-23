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

export function getV2Key() {
  return ['v2'] as const
}

export function getV1AgentSettingsThinkModelsQueryKey() {
  return ['v1', '/v1/agent/settings/think/models'] as const
}

export function getV1AgentSettingsThinkModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentSettingsThinkModelsQueryKey>
  >({
    queryKey: getV1AgentSettingsThinkModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agent.settings.think.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AgentSettingsThinkModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentSettingsThinkModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AgentSettingsThinkModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1ProjectsProjectIdAgentsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/agents', args] as const
}

export function getV1ProjectsProjectIdAgentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdAgentsQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].agents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdAgentsQueryKey>
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
      ...getV1ProjectsProjectIdAgentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectIdAgentsMutationKey() {
  return ['v1', '/v1/projects/:project_id/agents', 'POST'] as const
}

export function getPostV1ProjectsProjectIdAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':project_id'].agents.$post(args, options))
    },
  })
}

export function injectPostV1ProjectsProjectIdAgents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$post']>,
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
    const mutationDefaults = getPostV1ProjectsProjectIdAgentsMutationOptions<
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

export function getV1ProjectsProjectIdAgentsAgentIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', args] as const
}

export function getV1ProjectsProjectIdAgentsAgentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdAgentsAgentIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdAgentsAgentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].agents[':agent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdAgentsAgentIdQueryKey>
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
      ...getV1ProjectsProjectIdAgentsAgentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProjectsProjectIdAgentsAgentIdMutationKey() {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', 'PUT'] as const
}

export function getPutV1ProjectsProjectIdAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectIdAgentsAgentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id'].agents[':agent_id'].$put(args, options),
      )
    },
  })
}

export function injectPutV1ProjectsProjectIdAgentsAgentId<
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
                  (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']>,
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
    const mutationDefaults = getPutV1ProjectsProjectIdAgentsAgentIdMutationOptions<
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

export function getDeleteV1ProjectsProjectIdAgentsAgentIdMutationKey() {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdAgentsAgentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id'].agents[':agent_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectIdAgentsAgentId<
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
                  (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdAgentsAgentIdMutationOptions<
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

export function getV1ProjectsProjectIdAgentVariablesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/agent-variables', args] as const
}

export function getV1ProjectsProjectIdAgentVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdAgentVariablesQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdAgentVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdAgentVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdAgentVariablesQueryKey>
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
      ...getV1ProjectsProjectIdAgentVariablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectIdAgentVariablesMutationKey() {
  return ['v1', '/v1/projects/:project_id/agent-variables', 'POST'] as const
}

export function getPostV1ProjectsProjectIdAgentVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdAgentVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['agent-variables']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'].$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectIdAgentVariables<
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
                ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$post']>,
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
    const mutationDefaults = getPostV1ProjectsProjectIdAgentVariablesMutationOptions<
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

export function getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', args] as const
}

export function getV1ProjectsProjectIdAgentVariablesVariableIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'][':variable_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdAgentVariablesVariableId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey>
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
      ...getV1ProjectsProjectIdAgentVariablesVariableIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectIdAgentVariablesVariableIdMutationKey() {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdAgentVariablesVariableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdAgentVariablesVariableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'][':variable_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectIdAgentVariablesVariableId<
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
                  (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdAgentVariablesVariableIdMutationOptions<
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

export function getPatchV1ProjectsProjectIdAgentVariablesVariableIdMutationKey() {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectIdAgentVariablesVariableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectIdAgentVariablesVariableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'][':variable_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchV1ProjectsProjectIdAgentVariablesVariableId<
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
                  (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
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
    const mutationDefaults = getPatchV1ProjectsProjectIdAgentVariablesVariableIdMutationOptions<
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

export function getPostV1ListenMutationKey() {
  return ['v1', '/v1/listen', 'POST'] as const
}

export function getPostV1ListenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listen.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.listen.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ListenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.listen.$post>) {
      return parseResponse(client.v1.listen.$post(args, options))
    },
  })
}

export function injectPostV1Listen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listen.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.listen.$post>,
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
    const mutationDefaults = getPostV1ListenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SpeakMutationKey() {
  return ['v1', '/v1/speak', 'POST'] as const
}

export function getPostV1SpeakMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speak.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.speak.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SpeakMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.speak.$post>) {
      return parseResponse(client.v1.speak.$post(args, options))
    },
  })
}

export function injectPostV1Speak<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speak.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.speak.$post>,
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
    const mutationDefaults = getPostV1SpeakMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ReadMutationKey() {
  return ['v1', '/v1/read', 'POST'] as const
}

export function getPostV1ReadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.read.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.read.$post>) {
      return parseResponse(client.v1.read.$post(args, options))
    },
  })
}

export function injectPostV1Read<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.read.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.read.$post>,
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
    const mutationDefaults = getPostV1ReadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsQueryKey() {
  return ['v1', '/v1/projects'] as const
}

export function getV1ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >({
    queryKey: getV1ProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1ProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id', args] as const
}

export function getV1ProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectIdMutationKey() {
  return ['v1', '/v1/projects/:project_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_id']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':project_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1ProjectsProjectIdMutationKey() {
  return ['v1', '/v1/projects/:project_id', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':project_id']['$patch']>) {
      return parseResponse(client.v1.projects[':project_id'].$patch(args, options))
    },
  })
}

export function injectPatchV1ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['$patch']>,
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
    const mutationDefaults = getPatchV1ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectIdLeaveMutationKey() {
  return ['v1', '/v1/projects/:project_id/leave', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':project_id'].leave.$delete(args, options))
    },
  })
}

export function injectDeleteV1ProjectsProjectIdLeave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdLeaveMutationOptions<
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

export function getV1ProjectsProjectIdModelsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/models', args] as const
}

export function getV1ProjectsProjectIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdModelsQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdModelsQueryKey>
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
      ...getV1ProjectsProjectIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdModelsModelIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/models/:model_id', args] as const
}

export function getV1ProjectsProjectIdModelsModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdModelsModelIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].models[':model_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdModelsModelIdQueryKey>
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
      ...getV1ProjectsProjectIdModelsModelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ModelsQueryKey(args: InferRequestType<typeof client.v1.models.$get>) {
  return ['v1', '/v1/models', args] as const
}

export function getV1ModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >({
    queryKey: getV1ModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.models.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ModelsModelIdQueryKey(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
) {
  return ['v1', '/v1/models/:model_id', args] as const
}

export function getV1ModelsModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelsModelIdQueryKey>
  >({
    queryKey: getV1ModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models[':model_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsModelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsModelIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ProjectsProjectIdKeysQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/keys', args] as const
}

export function getV1ProjectsProjectIdKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdKeysQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdKeysQueryKey>
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
      ...getV1ProjectsProjectIdKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectIdKeysMutationKey() {
  return ['v1', '/v1/projects/:project_id/keys', 'POST'] as const
}

export function getPostV1ProjectsProjectIdKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':project_id'].keys.$post(args, options))
    },
  })
}

export function injectPostV1ProjectsProjectIdKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$post']>,
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
    const mutationDefaults = getPostV1ProjectsProjectIdKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/keys/:key_id', args] as const
}

export function getV1ProjectsProjectIdKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdKeysKeyIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].keys[':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdKeysKeyIdQueryKey>
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
      ...getV1ProjectsProjectIdKeysKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectIdKeysKeyIdMutationKey() {
  return ['v1', '/v1/projects/:project_id/keys/:key_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']
      >,
    ) {
      return parseResponse(client.v1.projects[':project_id'].keys[':key_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProjectsProjectIdKeysKeyId<
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
                ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdKeysKeyIdMutationOptions<
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

export function getV1ProjectsProjectIdMembersQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/members', args] as const
}

export function getV1ProjectsProjectIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdMembersQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdMembersQueryKey>
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
      ...getV1ProjectsProjectIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectIdMembersMemberIdMutationKey() {
  return ['v1', '/v1/projects/:project_id/members/:member_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id'].members[':member_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectIdMembersMemberId<
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
                  (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdMembersMemberIdMutationOptions<
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

export function getV1ProjectsProjectIdMembersMemberIdScopesQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/members/:member_id/scopes', args] as const
}

export function getV1ProjectsProjectIdMembersMemberIdScopesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdMembersMemberIdScopesQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdMembersMemberIdScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].members[':member_id'].scopes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdMembersMemberIdScopes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdMembersMemberIdScopesQueryKey>
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
      ...getV1ProjectsProjectIdMembersMemberIdScopesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProjectsProjectIdMembersMemberIdScopesMutationKey() {
  return ['v1', '/v1/projects/:project_id/members/:member_id/scopes', 'PUT'] as const
}

export function getPutV1ProjectsProjectIdMembersMemberIdScopesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectIdMembersMemberIdScopesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id'].members[':member_id'].scopes.$put(args, options),
      )
    },
  })
}

export function injectPutV1ProjectsProjectIdMembersMemberIdScopes<
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
                  (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
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
    const mutationDefaults = getPutV1ProjectsProjectIdMembersMemberIdScopesMutationOptions<
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

export function getV1ProjectsProjectIdInvitesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/invites', args] as const
}

export function getV1ProjectsProjectIdInvitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdInvitesQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].invites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdInvitesQueryKey>
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
      ...getV1ProjectsProjectIdInvitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectIdInvitesMutationKey() {
  return ['v1', '/v1/projects/:project_id/invites', 'POST'] as const
}

export function getPostV1ProjectsProjectIdInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':project_id'].invites.$post(args, options))
    },
  })
}

export function injectPostV1ProjectsProjectIdInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$post']>,
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
    const mutationDefaults = getPostV1ProjectsProjectIdInvitesMutationOptions<
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

export function getDeleteV1ProjectsProjectIdInvitesEmailMutationKey() {
  return ['v1', '/v1/projects/:project_id/invites/:email', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdInvitesEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdInvitesEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id'].invites[':email'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectIdInvitesEmail<
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
                  (typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']
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
    const mutationDefaults = getDeleteV1ProjectsProjectIdInvitesEmailMutationOptions<
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

export function getV1ProjectsProjectIdRequestsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/requests', args] as const
}

export function getV1ProjectsProjectIdRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdRequestsQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdRequestsQueryKey>
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
      ...getV1ProjectsProjectIdRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdRequestsRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/requests/:request_id', args] as const
}

export function getV1ProjectsProjectIdRequestsRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdRequestsRequestIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdRequestsRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].requests[':request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdRequestsRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdRequestsRequestIdQueryKey>
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
      ...getV1ProjectsProjectIdRequestsRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdUsageQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/usage', args] as const
}

export function getV1ProjectsProjectIdUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdUsageQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdUsageQueryKey>
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
      ...getV1ProjectsProjectIdUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdUsageFieldsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/usage/fields', args] as const
}

export function getV1ProjectsProjectIdUsageFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdUsageFieldsQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdUsageFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].usage.fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdUsageFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['usage']['fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdUsageFieldsQueryKey>
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
      ...getV1ProjectsProjectIdUsageFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdUsageBreakdownQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/usage/breakdown', args] as const
}

export function getV1ProjectsProjectIdUsageBreakdownQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdUsageBreakdownQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdUsageBreakdownQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].usage.breakdown.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdUsageBreakdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdUsageBreakdownQueryKey>
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
      ...getV1ProjectsProjectIdUsageBreakdownQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdBalancesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/balances', args] as const
}

export function getV1ProjectsProjectIdBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdBalancesQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdBalancesQueryKey>
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
      ...getV1ProjectsProjectIdBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdBalancesBalanceIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/balances/:balance_id', args] as const
}

export function getV1ProjectsProjectIdBalancesBalanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdBalancesBalanceIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdBalancesBalanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].balances[':balance_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdBalancesBalanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdBalancesBalanceIdQueryKey>
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
      ...getV1ProjectsProjectIdBalancesBalanceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdBillingBreakdownQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/billing/breakdown', args] as const
}

export function getV1ProjectsProjectIdBillingBreakdownQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdBillingBreakdownQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdBillingBreakdownQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].billing.breakdown.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdBillingBreakdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdBillingBreakdownQueryKey>
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
      ...getV1ProjectsProjectIdBillingBreakdownQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdBillingFieldsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/billing/fields', args] as const
}

export function getV1ProjectsProjectIdBillingFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdBillingFieldsQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdBillingFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].billing.fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdBillingFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdBillingFieldsQueryKey>
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
      ...getV1ProjectsProjectIdBillingFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdPurchasesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/purchases', args] as const
}

export function getV1ProjectsProjectIdPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdPurchasesQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].purchases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdPurchasesQueryKey>
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
      ...getV1ProjectsProjectIdPurchasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_id/self-hosted/distribution/credentials', args] as const
}

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdSelfHostedDistributionCredentials<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey>
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
      ...getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsMutationKey() {
  return ['v1', '/v1/projects/:project_id/self-hosted/distribution/credentials', 'POST'] as const
}

export function getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1ProjectsProjectIdSelfHostedDistributionCredentials<
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
                  (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
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
      getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsMutationOptions<
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

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey(
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

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey
    >
  >({
    queryKey:
      getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
          ':distribution_credentials_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey
        >
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
      ...getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdMutationKey() {
  return [
    'v1',
    '/v1/projects/:project_id/self-hosted/distribution/credentials/:distribution_credentials_id',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
          ':distribution_credentials_id'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
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
                  (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
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
      getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdMutationOptions<
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

export function getPostV1AuthGrantMutationKey() {
  return ['v1', '/v1/auth/grant', 'POST'] as const
}

export function getPostV1AuthGrantMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.grant.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.auth.grant.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthGrantMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.grant.$post>) {
      return parseResponse(client.v1.auth.grant.$post(args, options))
    },
  })
}

export function injectPostV1AuthGrant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.grant.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.auth.grant.$post>,
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
    const mutationDefaults = getPostV1AuthGrantMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2SpeakMutationKey() {
  return ['v2', '/v2/speak', 'POST'] as const
}

export function getPostV2SpeakMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.speak.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.speak.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SpeakMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.speak.$post>) {
      return parseResponse(client.v2.speak.$post(args, options))
    },
  })
}

export function injectPostV2Speak<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.speak.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.speak.$post>,
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
    const mutationDefaults = getPostV2SpeakMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
