import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getV1AgentSettingsThinkModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AgentSettingsThinkModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agent.settings.think.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentSettingsThinkModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AgentSettingsThinkModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent.settings.think.models.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentSettingsThinkModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AgentSettingsThinkModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agent.settings.think.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdAgentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/agents', toValue(args)] as const
}

export function getV1ProjectsProjectIdAgentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdAgentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProjectsProjectIdAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsProjectIdAgentsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsProjectIdAgentsAgentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/agents/:agent_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdAgentsAgentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdAgentsAgentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].agents[':agent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdAgentsAgentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdAgentsAgentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdAgentsAgentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].agents[':agent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProjectsProjectIdAgentsAgentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsProjectIdAgentsAgentIdMutationOptions<
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

export function useDeleteV1ProjectsProjectIdAgentsAgentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdAgentsAgentIdMutationOptions<
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

export function getV1ProjectsProjectIdAgentVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/agent-variables', toValue(args)] as const
}

export function getV1ProjectsProjectIdAgentVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdAgentVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdAgentVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdAgentVariablesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdAgentVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id']['agent-variables'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProjectsProjectIdAgentVariables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsProjectIdAgentVariablesMutationOptions<
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

export function getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project_id/agent-variables/:variable_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdAgentVariablesVariableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id']['agent-variables'][':variable_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdAgentVariablesVariableId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdAgentVariablesVariableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id']['agent-variables'][':variable_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ProjectsProjectIdAgentVariablesVariableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdAgentVariablesVariableIdMutationOptions<
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

export function usePatchV1ProjectsProjectIdAgentVariablesVariableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsProjectIdAgentVariablesVariableIdMutationOptions<
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

export function usePostV1Listen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listen.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.listen.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ListenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Speak<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speak.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.speak.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SpeakMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Read<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.read.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.read.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ReadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProjectsQueryKey() {
  return ['v1', '/v1/projects'] as const
}

export function getV1ProjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          ReturnType<typeof getV1ProjectsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>>,
) {
  return ['v1', '/v1/projects/:project_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV1ProjectsProjectIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdLeaveMutationOptions<
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

export function getV1ProjectsProjectIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/models', toValue(args)] as const
}

export function getV1ProjectsProjectIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdModelsModelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/models/:model_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].models[':model_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdModelsModelId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdModelsModelIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].models[':model_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
) {
  return ['v1', '/v1/models', toValue(args)] as const
}

export function getV1ModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.models.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
          >,
          ReturnType<typeof getV1ModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ModelsModelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model_id']['$get']>>,
) {
  return ['v1', '/v1/models/:model_id', toValue(args)] as const
}

export function getV1ModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.models[':model_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ModelsModelIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.models[':model_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/keys', toValue(args)] as const
}

export function getV1ProjectsProjectIdKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProjectsProjectIdKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsProjectIdKeysMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsProjectIdKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/keys/:key_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].keys[':key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdKeysKeyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].keys[':key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ProjectsProjectIdKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdKeysKeyIdMutationOptions<
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

export function getV1ProjectsProjectIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/members', toValue(args)] as const
}

export function getV1ProjectsProjectIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ProjectsProjectIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdMembersMemberIdMutationOptions<
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

export function getV1ProjectsProjectIdMembersMemberIdScopesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project_id/members/:member_id/scopes', toValue(args)] as const
}

export function getV1ProjectsProjectIdMembersMemberIdScopesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdMembersMemberIdScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].members[':member_id'].scopes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdMembersMemberIdScopes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdMembersMemberIdScopesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdMembersMemberIdScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].members[':member_id'].scopes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProjectsProjectIdMembersMemberIdScopes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsProjectIdMembersMemberIdScopesMutationOptions<
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

export function getV1ProjectsProjectIdInvitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/invites', toValue(args)] as const
}

export function getV1ProjectsProjectIdInvitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdInvitesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProjectsProjectIdInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsProjectIdInvitesMutationOptions<
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

export function useDeleteV1ProjectsProjectIdInvitesEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsProjectIdInvitesEmailMutationOptions<
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

export function getV1ProjectsProjectIdRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/requests', toValue(args)] as const
}

export function getV1ProjectsProjectIdRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdRequestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdRequestsRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/requests/:request_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdRequestsRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdRequestsRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].requests[':request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdRequestsRequestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdRequestsRequestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdRequestsRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].requests[':request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/usage', toValue(args)] as const
}

export function getV1ProjectsProjectIdUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdUsageQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdUsageFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/usage/fields', toValue(args)] as const
}

export function getV1ProjectsProjectIdUsageFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdUsageFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].usage.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdUsageFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdUsageFieldsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdUsageFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].usage.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdUsageBreakdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/usage/breakdown', toValue(args)] as const
}

export function getV1ProjectsProjectIdUsageBreakdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdUsageBreakdownQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].usage.breakdown.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdUsageBreakdown<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdUsageBreakdownQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdUsageBreakdownQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].usage.breakdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/balances', toValue(args)] as const
}

export function getV1ProjectsProjectIdBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['balances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdBalancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdBalancesBalanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/balances/:balance_id', toValue(args)] as const
}

export function getV1ProjectsProjectIdBalancesBalanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdBalancesBalanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].balances[':balance_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdBalancesBalanceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdBalancesBalanceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdBalancesBalanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].balances[':balance_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdBillingBreakdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/billing/breakdown', toValue(args)] as const
}

export function getV1ProjectsProjectIdBillingBreakdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdBillingBreakdownQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].billing.breakdown.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdBillingBreakdown<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdBillingBreakdownQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdBillingBreakdownQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].billing.breakdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdBillingFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/billing/fields', toValue(args)] as const
}

export function getV1ProjectsProjectIdBillingFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdBillingFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].billing.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdBillingFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':project_id']['billing']['fields']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':project_id']['billing']['fields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdBillingFieldsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdBillingFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].billing.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdPurchasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/purchases', toValue(args)] as const
}

export function getV1ProjectsProjectIdPurchasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdPurchasesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project_id/self-hosted/distribution/credentials',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProjectsProjectIdSelfHostedDistributionCredentials<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectIdSelfHostedDistributionCredentialsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProjectsProjectIdSelfHostedDistributionCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1ProjectsProjectIdSelfHostedDistributionCredentialsMutationOptions<
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

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project_id/self-hosted/distribution/credentials/:distribution_credentials_id',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
          ':distribution_credentials_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
            ':distribution_credentials_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdMutationOptions<
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

export function usePostV1AuthGrant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.grant.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.auth.grant.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AuthGrantMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2Speak<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.speak.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.speak.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SpeakMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
