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

export function getApiV1LivechatUsersTypeQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/users/:type', keyArgs] as const
}

export function getApiV1LivechatUsersTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUsersTypeQueryKey>
  >({
    queryKey: getApiV1LivechatUsersTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.users[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatUsersType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUsersTypeQueryKey>
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
      ...getApiV1LivechatUsersTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatUsersTypeMutationKey() {
  return ['api', '/api/v1/livechat/users/:type', 'POST'] as const
}

export function getPostApiV1LivechatUsersTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatUsersTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat.users[':type'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatUsersType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatUsersTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatUsersTypeIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/users/:type/:_id', keyArgs] as const
}

export function getApiV1LivechatUsersTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUsersTypeIdQueryKey>
  >({
    queryKey: getApiV1LivechatUsersTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.users[':type'][':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatUsersTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUsersTypeIdQueryKey>
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
      ...getApiV1LivechatUsersTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1LivechatUsersTypeIdMutationKey() {
  return ['api', '/api/v1/livechat/users/:type/:_id', 'DELETE'] as const
}

export function getDeleteApiV1LivechatUsersTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatUsersTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.users[':type'][':_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatUsersTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatUsersTypeIdMutationOptions<
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

export function getApiV1LivechatAgentInfoRidTokenQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>,
) {
  return ['api', '/api/v1/livechat/agent.info/:rid/:token', args] as const
}

export function getApiV1LivechatAgentInfoRidTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAgentInfoRidTokenQueryKey>
  >({
    queryKey: getApiV1LivechatAgentInfoRidTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['agent.info'][':rid'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAgentInfoRidToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAgentInfoRidTokenQueryKey>
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
      ...getApiV1LivechatAgentInfoRidTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAgentNextTokenQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
) {
  return ['api', '/api/v1/livechat/agent.next/:token', args] as const
}

export function getApiV1LivechatAgentNextTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAgentNextTokenQueryKey>
  >({
    queryKey: getApiV1LivechatAgentNextTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['agent.next'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAgentNextToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAgentNextTokenQueryKey>
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
      ...getApiV1LivechatAgentNextTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatAgentsSaveInfoMutationKey() {
  return ['api', '/api/v1/livechat/agents.saveInfo', 'POST'] as const
}

export function getPostApiV1LivechatAgentsSaveInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatAgentsSaveInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['agents.saveInfo'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatAgentsSaveInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatAgentsSaveInfoMutationOptions<
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

export function getPostApiV1LivechatAgentStatusMutationKey() {
  return ['api', '/api/v1/livechat/agent.status', 'POST'] as const
}

export function getPostApiV1LivechatAgentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['agent.status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatAgentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['agent.status']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['agent.status'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatAgentStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['agent.status']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatAgentStatusMutationOptions<
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

export function getApiV1OmnichannelContactQueryKey(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contact', keyArgs] as const
}

export function getApiV1OmnichannelContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel.contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactQueryKey>
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
      ...getApiV1OmnichannelContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1OmnichannelContactMutationKey() {
  return ['api', '/api/v1/omnichannel/contact', 'POST'] as const
}

export function getPostApiV1OmnichannelContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.omnichannel.contact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.omnichannel.contact.$post>) {
      return parseResponse(client.api.v1.omnichannel.contact.$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.omnichannel.contact.$post>,
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
    const mutationDefaults = getPostApiV1OmnichannelContactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1OmnichannelContactSearchQueryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contact.search', keyArgs] as const
}

export function getApiV1OmnichannelContactSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactSearchQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel['contact.search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContactSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactSearchQueryKey>
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
      ...getApiV1OmnichannelContactSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1OmnichannelContactsMutationKey() {
  return ['api', '/api/v1/omnichannel/contacts', 'POST'] as const
}

export function getPostApiV1OmnichannelContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contacts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.omnichannel.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.omnichannel.contacts.$post>) {
      return parseResponse(client.api.v1.omnichannel.contacts.$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.omnichannel.contacts.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.omnichannel.contacts.$post>,
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
    const mutationDefaults = getPostApiV1OmnichannelContactsMutationOptions<
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

export function getPostApiV1OmnichannelContactsUpdateMutationKey() {
  return ['api', '/api/v1/omnichannel/contacts.update', 'POST'] as const
}

export function getPostApiV1OmnichannelContactsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelContactsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>,
    ) {
      return parseResponse(client.api.v1.omnichannel['contacts.update'].$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelContactsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>,
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
    const mutationDefaults = getPostApiV1OmnichannelContactsUpdateMutationOptions<
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

export function getPostApiV1OmnichannelContactsConflictsMutationKey() {
  return ['api', '/api/v1/omnichannel/contacts.conflicts', 'POST'] as const
}

export function getPostApiV1OmnichannelContactsConflictsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelContactsConflictsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>,
    ) {
      return parseResponse(client.api.v1.omnichannel['contacts.conflicts'].$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelContactsConflicts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>,
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
    const mutationDefaults = getPostApiV1OmnichannelContactsConflictsMutationOptions<
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

export function getApiV1OmnichannelContactsGetQueryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.get', keyArgs] as const
}

export function getApiV1OmnichannelContactsGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsGetQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactsGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContactsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactsGetQueryKey>
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
      ...getApiV1OmnichannelContactsGetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1OmnichannelContactsSearchQueryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.search', keyArgs] as const
}

export function getApiV1OmnichannelContactsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsSearchQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContactsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactsSearchQueryKey>
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
      ...getApiV1OmnichannelContactsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1OmnichannelContactsChannelsQueryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.channels', keyArgs] as const
}

export function getApiV1OmnichannelContactsChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsChannelsQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactsChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.channels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContactsChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactsChannelsQueryKey>
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
      ...getApiV1OmnichannelContactsChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1OmnichannelContactsHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.history', keyArgs] as const
}

export function getApiV1OmnichannelContactsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsHistoryQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContactsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactsHistoryQueryKey>
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
      ...getApiV1OmnichannelContactsHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1OmnichannelContactsCheckExistenceQueryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.checkExistence', keyArgs] as const
}

export function getApiV1OmnichannelContactsCheckExistenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsCheckExistenceQueryKey>
  >({
    queryKey: getApiV1OmnichannelContactsCheckExistenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.checkExistence'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OmnichannelContactsCheckExistence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OmnichannelContactsCheckExistenceQueryKey>
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
      ...getApiV1OmnichannelContactsCheckExistenceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1OmnichannelContactsBlockMutationKey() {
  return ['api', '/api/v1/omnichannel/contacts.block', 'POST'] as const
}

export function getPostApiV1OmnichannelContactsBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelContactsBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>,
    ) {
      return parseResponse(client.api.v1.omnichannel['contacts.block'].$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelContactsBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>,
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
    const mutationDefaults = getPostApiV1OmnichannelContactsBlockMutationOptions<
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

export function getPostApiV1OmnichannelContactsUnblockMutationKey() {
  return ['api', '/api/v1/omnichannel/contacts.unblock', 'POST'] as const
}

export function getPostApiV1OmnichannelContactsUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelContactsUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>,
    ) {
      return parseResponse(client.api.v1.omnichannel['contacts.unblock'].$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelContactsUnblock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>,
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
    const mutationDefaults = getPostApiV1OmnichannelContactsUnblockMutationOptions<
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

export function getApiV1LivechatAnalyticsAgentOverviewQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/agent-overview', keyArgs] as const
}

export function getApiV1LivechatAnalyticsAgentOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentOverviewQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsAgentOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics['agent-overview'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsAgentOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsAgentOverviewQueryKey>
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
      ...getApiV1LivechatAnalyticsAgentOverviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsOverviewQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/overview', keyArgs] as const
}

export function getApiV1LivechatAnalyticsOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsOverviewQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsOverviewQueryKey>
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
      ...getApiV1LivechatAnalyticsOverviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatConfigQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.config.$get>,
) {
  return ['api', '/api/v1/livechat/config', args] as const
}

export function getApiV1LivechatConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.config.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatConfigQueryKey>
  >({
    queryKey: getApiV1LivechatConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LivechatRoomsQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/rooms', keyArgs] as const
}

export function getApiV1LivechatRoomsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomsQueryKey>
  >({
    queryKey: getApiV1LivechatRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.rooms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LivechatRooms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatRoomsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatRoomsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LivechatRoomQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.room.$get>,
) {
  return ['api', '/api/v1/livechat/room', args] as const
}

export function getApiV1LivechatRoomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.livechat.room.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomQueryKey>
  >({
    queryKey: getApiV1LivechatRoomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.room.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LivechatRoom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.room.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatRoomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatRoomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1LivechatRoomCloseMutationKey() {
  return ['api', '/api/v1/livechat/room.close', 'POST'] as const
}

export function getPostApiV1LivechatRoomCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.close']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.close'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.close']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.close']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatRoomCloseByUserMutationKey() {
  return ['api', '/api/v1/livechat/room.closeByUser', 'POST'] as const
}

export function getPostApiV1LivechatRoomCloseByUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomCloseByUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.closeByUser'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomCloseByUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomCloseByUserMutationOptions<
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

export function getApiV1LivechatRoomJoinQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/room.join', keyArgs] as const
}

export function getApiV1LivechatRoomJoinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomJoinQueryKey>
  >({
    queryKey: getApiV1LivechatRoomJoinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['room.join'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatRoomJoin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatRoomJoinQueryKey>
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
      ...getApiV1LivechatRoomJoinQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatRoomSaveInfoMutationKey() {
  return ['api', '/api/v1/livechat/room.saveInfo', 'POST'] as const
}

export function getPostApiV1LivechatRoomSaveInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomSaveInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.saveInfo'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomSaveInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomSaveInfoMutationOptions<
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

export function getPostApiV1LivechatRoomForwardMutationKey() {
  return ['api', '/api/v1/livechat/room.forward', 'POST'] as const
}

export function getPostApiV1LivechatRoomForwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.forward']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.forward']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomForwardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.forward']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.forward'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomForward<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.forward']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.forward']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomForwardMutationOptions<
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

export function getApiV1LivechatTransferHistoryRidQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/transfer.history/:rid', keyArgs] as const
}

export function getApiV1LivechatTransferHistoryRidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTransferHistoryRidQueryKey>
  >({
    queryKey: getApiV1LivechatTransferHistoryRidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['transfer.history'][':rid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatTransferHistoryRid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatTransferHistoryRidQueryKey>
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
      ...getApiV1LivechatTransferHistoryRidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatRoomSurveyMutationKey() {
  return ['api', '/api/v1/livechat/room.survey', 'POST'] as const
}

export function getPostApiV1LivechatRoomSurveyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.survey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.survey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomSurveyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.survey']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.survey'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomSurvey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.survey']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.survey']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomSurveyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatRoomOnHoldMutationKey() {
  return ['api', '/api/v1/livechat/room.onHold', 'POST'] as const
}

export function getPostApiV1LivechatRoomOnHoldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.onHold']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.onHold']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomOnHoldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.onHold']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.onHold'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomOnHold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.onHold']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.onHold']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomOnHoldMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatUploadRidMutationKey() {
  return ['api', '/api/v1/livechat/upload/:rid', 'POST'] as const
}

export function getPostApiV1LivechatUploadRidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatUploadRidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat.upload[':rid'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatUploadRid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatUploadRidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatRoomRidPriorityMutationKey() {
  return ['api', '/api/v1/livechat/room/:rid/priority', 'POST'] as const
}

export function getPostApiV1LivechatRoomRidPriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomRidPriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat.room[':rid'].priority.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomRidPriority<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomRidPriorityMutationOptions<
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

export function getDeleteApiV1LivechatRoomRidPriorityMutationKey() {
  return ['api', '/api/v1/livechat/room/:rid/priority', 'DELETE'] as const
}

export function getDeleteApiV1LivechatRoomRidPriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatRoomRidPriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.room[':rid'].priority.$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatRoomRidPriority<
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
                ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatRoomRidPriorityMutationOptions<
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

export function getPostApiV1LivechatRoomsRemoveAllClosedRoomsMutationKey() {
  return ['api', '/api/v1/livechat/rooms.removeAllClosedRooms', 'POST'] as const
}

export function getPostApiV1LivechatRoomsRemoveAllClosedRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomsRemoveAllClosedRoomsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.livechat['rooms.removeAllClosedRooms'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1LivechatRoomsRemoveAllClosedRooms<
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
                ReturnType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomsRemoveAllClosedRoomsMutationOptions<
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

export function getPostApiV1LivechatRoomsDeleteMutationKey() {
  return ['api', '/api/v1/livechat/rooms.delete', 'POST'] as const
}

export function getPostApiV1LivechatRoomsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['rooms.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomsDeleteMutationOptions<
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

export function getPostApiV1LivechatRoomResumeOnHoldMutationKey() {
  return ['api', '/api/v1/livechat/room.resumeOnHold', 'POST'] as const
}

export function getPostApiV1LivechatRoomResumeOnHoldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatRoomResumeOnHoldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['room.resumeOnHold'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatRoomResumeOnHold<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatRoomResumeOnHoldMutationOptions<
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

export function getApiV1LivechatRoomsFiltersQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/rooms/filters', keyArgs] as const
}

export function getApiV1LivechatRoomsFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomsFiltersQueryKey>
  >({
    queryKey: getApiV1LivechatRoomsFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.rooms.filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatRoomsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatRoomsFiltersQueryKey>
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
      ...getApiV1LivechatRoomsFiltersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatVisitorDepartmentTransferMutationKey() {
  return ['api', '/api/v1/livechat/visitor/department.transfer', 'POST'] as const
}

export function getPostApiV1LivechatVisitorDepartmentTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatVisitorDepartmentTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.livechat.visitor)['department.transfer']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.livechat.visitor['department.transfer'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1LivechatVisitorDepartmentTransfer<
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
                ReturnType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatVisitorDepartmentTransferMutationOptions<
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

export function getApiV1LivechatDepartmentQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.department.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department', keyArgs] as const
}

export function getApiV1LivechatDepartmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.department.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.department.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.department.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentQueryKey>
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
      ...getApiV1LivechatDepartmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatDepartmentMutationKey() {
  return ['api', '/api/v1/livechat/department', 'POST'] as const
}

export function getPostApiV1LivechatDepartmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.department.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatDepartmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.department.$post>) {
      return parseResponse(client.api.v1.livechat.department.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatDepartment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.department.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.department.$post>,
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
    const mutationDefaults = getPostApiV1LivechatDepartmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatDepartmentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department/:_id', keyArgs] as const
}

export function getApiV1LivechatDepartmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentIdQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.department[':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentIdQueryKey>
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
      ...getApiV1LivechatDepartmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1LivechatDepartmentIdMutationKey() {
  return ['api', '/api/v1/livechat/department/:_id', 'PUT'] as const
}

export function getPutApiV1LivechatDepartmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LivechatDepartmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$put']>,
    ) {
      return parseResponse(client.api.v1.livechat.department[':_id'].$put(args, options))
    },
  })
}

export function createPutApiV1LivechatDepartmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$put']>,
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
    const mutationDefaults = getPutApiV1LivechatDepartmentIdMutationOptions<
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

export function getDeleteApiV1LivechatDepartmentIdMutationKey() {
  return ['api', '/api/v1/livechat/department/:_id', 'DELETE'] as const
}

export function getDeleteApiV1LivechatDepartmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatDepartmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.department[':_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatDepartmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatDepartmentIdMutationOptions<
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

export function getApiV1LivechatDepartmentAutocompleteQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department.autocomplete', keyArgs] as const
}

export function getApiV1LivechatDepartmentAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentAutocompleteQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['department.autocomplete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartmentAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentAutocompleteQueryKey>
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
      ...getApiV1LivechatDepartmentAutocompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatDepartmentIdAgentsQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department/:_id/agents', keyArgs] as const
}

export function getApiV1LivechatDepartmentIdAgentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentIdAgentsQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentIdAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.department[':_id'].agents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartmentIdAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.department)[':_id']['agents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentIdAgentsQueryKey>
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
      ...getApiV1LivechatDepartmentIdAgentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatDepartmentIdAgentsMutationKey() {
  return ['api', '/api/v1/livechat/department/:_id/agents', 'POST'] as const
}

export function getPostApiV1LivechatDepartmentIdAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatDepartmentIdAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat.department[':_id'].agents.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatDepartmentIdAgents<
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
                ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatDepartmentIdAgentsMutationOptions<
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

export function getApiV1LivechatDepartmentListByIdsQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department.listByIds', keyArgs] as const
}

export function getApiV1LivechatDepartmentListByIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentListByIdsQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentListByIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['department.listByIds'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartmentListByIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentListByIdsQueryKey>
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
      ...getApiV1LivechatDepartmentListByIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/amount-of-chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['amount-of-chats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsAmountOfChats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/average-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['average-service-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsAverageServiceTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/departments/average-chat-duration-time',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['average-chat-duration-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsAverageChatDurationTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/total-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['total-service-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsTotalServiceTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/average-waiting-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['average-waiting-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsAverageWaitingTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/total-transferred-chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['total-transferred-chats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsTotalTransferredChats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/total-abandoned-chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['total-abandoned-chats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsTotalAbandonedChats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/departments/percentage-abandoned-chats',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['percentage-abandoned-chats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey>
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
      ...getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatDepartmentsArchivedQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/departments/archived', keyArgs] as const
}

export function getApiV1LivechatDepartmentsArchivedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentsArchivedQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentsArchivedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.departments.archived.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartmentsArchived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentsArchivedQueryKey>
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
      ...getApiV1LivechatDepartmentsArchivedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatDepartmentIdArchiveMutationKey() {
  return ['api', '/api/v1/livechat/department/:_id/archive', 'POST'] as const
}

export function getPostApiV1LivechatDepartmentIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatDepartmentIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.livechat.department)[':_id']['archive']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.livechat.department[':_id'].archive.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatDepartmentIdArchive<
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
                ReturnType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatDepartmentIdArchiveMutationOptions<
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

export function getPostApiV1LivechatDepartmentIdUnarchiveMutationKey() {
  return ['api', '/api/v1/livechat/department/:_id/unarchive', 'POST'] as const
}

export function getPostApiV1LivechatDepartmentIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatDepartmentIdUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.livechat.department[':_id'].unarchive.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatDepartmentIdUnarchive<
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
                ReturnType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatDepartmentIdUnarchiveMutationOptions<
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

export function getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey(
  args: InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department/isDepartmentCreationAvailable', keyArgs] as const
}

export function getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey>
  >({
    queryKey: getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.department.isDepartmentCreationAvailable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatDepartmentIsDepartmentCreationAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey>
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
      ...getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatCustomFieldsSaveMutationKey() {
  return ['api', '/api/v1/livechat/custom-fields.save', 'POST'] as const
}

export function getPostApiV1LivechatCustomFieldsSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatCustomFieldsSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['custom-fields.save'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatCustomFieldsSave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatCustomFieldsSaveMutationOptions<
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

export function getPostApiV1LivechatCustomFieldMutationKey() {
  return ['api', '/api/v1/livechat/custom.field', 'POST'] as const
}

export function getPostApiV1LivechatCustomFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom.field']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['custom.field']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatCustomFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['custom.field']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['custom.field'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatCustomField<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['custom.field']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['custom.field']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatCustomFieldMutationOptions<
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

export function getPostApiV1LivechatCustomFieldsMutationKey() {
  return ['api', '/api/v1/livechat/custom.fields', 'POST'] as const
}

export function getPostApiV1LivechatCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom.fields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['custom.fields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['custom.fields']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['custom.fields'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatCustomFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['custom.fields']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['custom.fields']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatCustomFieldsMutationOptions<
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

export function getApiV1LivechatCustomFields2QueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/custom-fields', keyArgs] as const
}

export function getApiV1LivechatCustomFields2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatCustomFields2QueryKey>
  >({
    queryKey: getApiV1LivechatCustomFields2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['custom-fields'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatCustomFields2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatCustomFields2QueryKey>
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
      ...getApiV1LivechatCustomFields2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatCustomFieldsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/custom-fields/:_id', keyArgs] as const
}

export function getApiV1LivechatCustomFieldsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatCustomFieldsIdQueryKey>
  >({
    queryKey: getApiV1LivechatCustomFieldsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['custom-fields'][':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatCustomFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatCustomFieldsIdQueryKey>
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
      ...getApiV1LivechatCustomFieldsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatCustomFieldsDeleteMutationKey() {
  return ['api', '/api/v1/livechat/custom-fields.delete', 'POST'] as const
}

export function getPostApiV1LivechatCustomFieldsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatCustomFieldsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['custom-fields.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatCustomFieldsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatCustomFieldsDeleteMutationOptions<
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

export function getPostApiV1LivechatPageVisitedMutationKey() {
  return ['api', '/api/v1/livechat/page.visited', 'POST'] as const
}

export function getPostApiV1LivechatPageVisitedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['page.visited']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['page.visited']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatPageVisitedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['page.visited']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['page.visited'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatPageVisited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['page.visited']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['page.visited']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatPageVisitedMutationOptions<
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

export function getPostApiV1LivechatTranscriptMutationKey() {
  return ['api', '/api/v1/livechat/transcript', 'POST'] as const
}

export function getPostApiV1LivechatTranscriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.transcript.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.transcript.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatTranscriptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.transcript.$post>) {
      return parseResponse(client.api.v1.livechat.transcript.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatTranscript<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.transcript.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.transcript.$post>,
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
    const mutationDefaults = getPostApiV1LivechatTranscriptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatTranscriptRidMutationKey() {
  return ['api', '/api/v1/livechat/transcript/:rid', 'POST'] as const
}

export function getPostApiV1LivechatTranscriptRidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatTranscriptRidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat.transcript[':rid'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatTranscriptRid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatTranscriptRidMutationOptions<
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

export function getDeleteApiV1LivechatTranscriptRidMutationKey() {
  return ['api', '/api/v1/livechat/transcript/:rid', 'DELETE'] as const
}

export function getDeleteApiV1LivechatTranscriptRidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatTranscriptRidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.transcript[':rid'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatTranscriptRid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatTranscriptRidMutationOptions<
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

export function getPostApiV1OmnichannelRidRequestTranscriptMutationKey() {
  return ['api', '/api/v1/omnichannel/:rid/request-transcript', 'POST'] as const
}

export function getPostApiV1OmnichannelRidRequestTranscriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelRidRequestTranscriptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.omnichannel[':rid']['request-transcript'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1OmnichannelRidRequestTranscript<
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
                  (typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']>,
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
    const mutationDefaults = getPostApiV1OmnichannelRidRequestTranscriptMutationOptions<
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

export function getApiV1LivechatAgentsAgentIdDepartmentsQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/agents/:agentId/departments', keyArgs] as const
}

export function getApiV1LivechatAgentsAgentIdDepartmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAgentsAgentIdDepartmentsQueryKey>
  >({
    queryKey: getApiV1LivechatAgentsAgentIdDepartmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.agents[':agentId'].departments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAgentsAgentIdDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAgentsAgentIdDepartmentsQueryKey>
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
      ...getApiV1LivechatAgentsAgentIdDepartmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/agents/average-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.agents['average-service-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsAgentsAverageServiceTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey>
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
      ...getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/agents/total-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.agents['total-service-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsAgentsTotalServiceTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey>
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
      ...getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/agents/available-for-service-history',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.agents['available-for-service-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsAgentsAvailableForServiceHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey>
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
      ...getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAppearanceQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/appearance', keyArgs] as const
}

export function getApiV1LivechatAppearanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAppearanceQueryKey>
  >({
    queryKey: getApiV1LivechatAppearanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.appearance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAppearance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAppearanceQueryKey>
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
      ...getApiV1LivechatAppearanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatAppearanceMutationKey() {
  return ['api', '/api/v1/livechat/appearance', 'POST'] as const
}

export function getPostApiV1LivechatAppearanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.appearance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatAppearanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.appearance.$post>) {
      return parseResponse(client.api.v1.livechat.appearance.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatAppearance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.appearance.$post>,
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
    const mutationDefaults = getPostApiV1LivechatAppearanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatBusinessHoursQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/business-hours', keyArgs] as const
}

export function getApiV1LivechatBusinessHoursQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatBusinessHoursQueryKey>
  >({
    queryKey: getApiV1LivechatBusinessHoursQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['business-hours'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatBusinessHours<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatBusinessHoursQueryKey>
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
      ...getApiV1LivechatBusinessHoursQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatBusinessHourQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/business-hour', keyArgs] as const
}

export function getApiV1LivechatBusinessHourQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatBusinessHourQueryKey>
  >({
    queryKey: getApiV1LivechatBusinessHourQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['business-hour'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatBusinessHour<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatBusinessHourQueryKey>
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
      ...getApiV1LivechatBusinessHourQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatBusinessHoursRemoveMutationKey() {
  return ['api', '/api/v1/livechat/business-hours.remove', 'POST'] as const
}

export function getPostApiV1LivechatBusinessHoursRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatBusinessHoursRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['business-hours.remove'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatBusinessHoursRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatBusinessHoursRemoveMutationOptions<
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

export function getPostApiV1LivechatBusinessHoursSaveMutationKey() {
  return ['api', '/api/v1/livechat/business-hours.save', 'POST'] as const
}

export function getPostApiV1LivechatBusinessHoursSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatBusinessHoursSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['business-hours.save'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatBusinessHoursSave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatBusinessHoursSaveMutationOptions<
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

export function getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversation-totalizers', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversation-totalizers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsConversationTotalizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/agents-productivity-totalizers',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['agents-productivity-totalizers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/chats-totalizers', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['chats-totalizers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsChatsTotalizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/productivity-totalizers', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['productivity-totalizers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsProductivityTotalizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts.chats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsChartsChats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsChartsChatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/chats-per-agent', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts['chats-per-agent'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsChartsChatsPerAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/agents-status', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts['agents-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsChartsAgentsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/charts/chats-per-department',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts['chats-per-department'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/timings', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts.timings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsChartsTimings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/livechat/analytics/dashboards/charts-data', keyArgs] as const
}

export function getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey>
  >({
    queryKey: getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.livechat.analytics.dashboards['charts-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatLivechatAnalyticsDashboardsChartsData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey>
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
      ...getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatInquiriesListQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/inquiries.list', keyArgs] as const
}

export function getApiV1LivechatInquiriesListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatInquiriesListQueryKey>
  >({
    queryKey: getApiV1LivechatInquiriesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['inquiries.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatInquiriesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatInquiriesListQueryKey>
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
      ...getApiV1LivechatInquiriesListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatInquiriesTakeMutationKey() {
  return ['api', '/api/v1/livechat/inquiries.take', 'POST'] as const
}

export function getPostApiV1LivechatInquiriesTakeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatInquiriesTakeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['inquiries.take'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatInquiriesTake<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatInquiriesTakeMutationOptions<
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

export function getApiV1LivechatInquiriesQueuedForUserQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/inquiries.queuedForUser', keyArgs] as const
}

export function getApiV1LivechatInquiriesQueuedForUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatInquiriesQueuedForUserQueryKey>
  >({
    queryKey: getApiV1LivechatInquiriesQueuedForUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['inquiries.queuedForUser'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatInquiriesQueuedForUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatInquiriesQueuedForUserQueryKey>
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
      ...getApiV1LivechatInquiriesQueuedForUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatInquiriesGetOneQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/inquiries.getOne', keyArgs] as const
}

export function getApiV1LivechatInquiriesGetOneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatInquiriesGetOneQueryKey>
  >({
    queryKey: getApiV1LivechatInquiriesGetOneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['inquiries.getOne'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatInquiriesGetOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatInquiriesGetOneQueryKey>
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
      ...getApiV1LivechatInquiriesGetOneQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1LivechatInquirySetSLAMutationKey() {
  return ['api', '/api/v1/livechat/inquiry.setSLA', 'PUT'] as const
}

export function getPutApiV1LivechatInquirySetSLAMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LivechatInquirySetSLAMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>,
    ) {
      return parseResponse(client.api.v1.livechat['inquiry.setSLA'].$put(args, options))
    },
  })
}

export function createPutApiV1LivechatInquirySetSLA<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>,
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
    const mutationDefaults = getPutApiV1LivechatInquirySetSLAMutationOptions<
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

export function getPostApiV1LivechatInquiriesReturnAsInquiryMutationKey() {
  return ['api', '/api/v1/livechat/inquiries.returnAsInquiry', 'POST'] as const
}

export function getPostApiV1LivechatInquiriesReturnAsInquiryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatInquiriesReturnAsInquiryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['inquiries.returnAsInquiry'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatInquiriesReturnAsInquiry<
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
                ReturnType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatInquiriesReturnAsInquiryMutationOptions<
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

export function getApiV1LivechatIntegrationsSettingsQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/integrations.settings', keyArgs] as const
}

export function getApiV1LivechatIntegrationsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatIntegrationsSettingsQueryKey>
  >({
    queryKey: getApiV1LivechatIntegrationsSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['integrations.settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatIntegrationsSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatIntegrationsSettingsQueryKey>
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
      ...getApiV1LivechatIntegrationsSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatQueueQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.queue.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/queue', keyArgs] as const
}

export function getApiV1LivechatQueueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.queue.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatQueueQueryKey>
  >({
    queryKey: getApiV1LivechatQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.queue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LivechatQueue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.queue.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatQueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatQueueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1LivechatSmsIncomingServiceMutationKey() {
  return ['api', '/api/v1/livechat/sms-incoming/:service', 'POST'] as const
}

export function getPostApiV1LivechatSmsIncomingServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatSmsIncomingServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['sms-incoming'][':service'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatSmsIncomingService<
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
                ReturnType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatSmsIncomingServiceMutationOptions<
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

export function getApiV1LivechatConfigRoutingQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/config/routing', keyArgs] as const
}

export function getApiV1LivechatConfigRoutingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatConfigRoutingQueryKey>
  >({
    queryKey: getApiV1LivechatConfigRoutingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.config.routing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatConfigRouting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatConfigRoutingQueryKey>
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
      ...getApiV1LivechatConfigRoutingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatTriggersQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/triggers', keyArgs] as const
}

export function getApiV1LivechatTriggersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTriggersQueryKey>
  >({
    queryKey: getApiV1LivechatTriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.triggers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatTriggersQueryKey>
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
      ...getApiV1LivechatTriggersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatTriggersMutationKey() {
  return ['api', '/api/v1/livechat/triggers', 'POST'] as const
}

export function getPostApiV1LivechatTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.triggers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatTriggersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.triggers.$post>) {
      return parseResponse(client.api.v1.livechat.triggers.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.triggers.$post>,
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
    const mutationDefaults = getPostApiV1LivechatTriggersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatTriggersIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/triggers/:_id', keyArgs] as const
}

export function getApiV1LivechatTriggersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTriggersIdQueryKey>
  >({
    queryKey: getApiV1LivechatTriggersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.triggers[':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatTriggersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatTriggersIdQueryKey>
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
      ...getApiV1LivechatTriggersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1LivechatTriggersIdMutationKey() {
  return ['api', '/api/v1/livechat/triggers/:_id', 'DELETE'] as const
}

export function getDeleteApiV1LivechatTriggersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatTriggersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.triggers[':_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatTriggersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatTriggersIdMutationOptions<
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

export function getPostApiV1LivechatTriggersExternalServiceTestMutationKey() {
  return ['api', '/api/v1/livechat/triggers/external-service/test', 'POST'] as const
}

export function getPostApiV1LivechatTriggersExternalServiceTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatTriggersExternalServiceTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.livechat.triggers['external-service'].test.$post(args, options),
      )
    },
  })
}

export function createPostApiV1LivechatTriggersExternalServiceTest<
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
                  (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
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
    const mutationDefaults = getPostApiV1LivechatTriggersExternalServiceTestMutationOptions<
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

export function getApiV1LivechatMonitorsQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/monitors', keyArgs] as const
}

export function getApiV1LivechatMonitorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMonitorsQueryKey>
  >({
    queryKey: getApiV1LivechatMonitorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.monitors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatMonitors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatMonitorsQueryKey>
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
      ...getApiV1LivechatMonitorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatMonitorsUsernameQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/monitors/:username', keyArgs] as const
}

export function getApiV1LivechatMonitorsUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMonitorsUsernameQueryKey>
  >({
    queryKey: getApiV1LivechatMonitorsUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.monitors[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatMonitorsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatMonitorsUsernameQueryKey>
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
      ...getApiV1LivechatMonitorsUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatMonitorsDeleteMutationKey() {
  return ['api', '/api/v1/livechat/monitors.delete', 'POST'] as const
}

export function getPostApiV1LivechatMonitorsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatMonitorsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['monitors.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatMonitorsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatMonitorsDeleteMutationOptions<
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

export function getPostApiV1LivechatMonitorsCreateMutationKey() {
  return ['api', '/api/v1/livechat/monitors.create', 'POST'] as const
}

export function getPostApiV1LivechatMonitorsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatMonitorsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['monitors.create'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatMonitorsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatMonitorsCreateMutationOptions<
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

export function getApiV1LivechatPrioritiesQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/priorities', keyArgs] as const
}

export function getApiV1LivechatPrioritiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatPrioritiesQueryKey>
  >({
    queryKey: getApiV1LivechatPrioritiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.priorities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatPriorities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatPrioritiesQueryKey>
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
      ...getApiV1LivechatPrioritiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatPrioritiesPriorityIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/priorities/:priorityId', keyArgs] as const
}

export function getApiV1LivechatPrioritiesPriorityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatPrioritiesPriorityIdQueryKey>
  >({
    queryKey: getApiV1LivechatPrioritiesPriorityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.priorities[':priorityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatPrioritiesPriorityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatPrioritiesPriorityIdQueryKey>
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
      ...getApiV1LivechatPrioritiesPriorityIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1LivechatPrioritiesPriorityIdMutationKey() {
  return ['api', '/api/v1/livechat/priorities/:priorityId', 'PUT'] as const
}

export function getPutApiV1LivechatPrioritiesPriorityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LivechatPrioritiesPriorityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>,
    ) {
      return parseResponse(client.api.v1.livechat.priorities[':priorityId'].$put(args, options))
    },
  })
}

export function createPutApiV1LivechatPrioritiesPriorityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>,
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
    const mutationDefaults = getPutApiV1LivechatPrioritiesPriorityIdMutationOptions<
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

export function getApiV1LivechatPrioritiesResetQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/priorities.reset', keyArgs] as const
}

export function getApiV1LivechatPrioritiesResetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatPrioritiesResetQueryKey>
  >({
    queryKey: getApiV1LivechatPrioritiesResetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['priorities.reset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatPrioritiesReset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatPrioritiesResetQueryKey>
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
      ...getApiV1LivechatPrioritiesResetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatPrioritiesResetMutationKey() {
  return ['api', '/api/v1/livechat/priorities.reset', 'POST'] as const
}

export function getPostApiV1LivechatPrioritiesResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatPrioritiesResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['priorities.reset'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatPrioritiesReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatPrioritiesResetMutationOptions<
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

export function getApiV1LivechatTagsQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/tags', keyArgs] as const
}

export function getApiV1LivechatTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.livechat.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTagsQueryKey>
  >({
    queryKey: getApiV1LivechatTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LivechatTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LivechatTagsTagIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/tags/:tagId', keyArgs] as const
}

export function getApiV1LivechatTagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTagsTagIdQueryKey>
  >({
    queryKey: getApiV1LivechatTagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.tags[':tagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatTagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatTagsTagIdQueryKey>
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
      ...getApiV1LivechatTagsTagIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatTagsDeleteMutationKey() {
  return ['api', '/api/v1/livechat/tags.delete', 'POST'] as const
}

export function getPostApiV1LivechatTagsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['tags.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['tags.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatTagsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['tags.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['tags.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatTagsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['tags.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['tags.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatTagsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatTagsSaveMutationKey() {
  return ['api', '/api/v1/livechat/tags.save', 'POST'] as const
}

export function getPostApiV1LivechatTagsSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['tags.save']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['tags.save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatTagsSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['tags.save']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['tags.save'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatTagsSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['tags.save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['tags.save']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatTagsSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatUnitsQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.units.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units', keyArgs] as const
}

export function getApiV1LivechatUnitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.livechat.units.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsQueryKey>
  >({
    queryKey: getApiV1LivechatUnitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.units.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LivechatUnits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.units.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUnitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatUnitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1LivechatUnitsMutationKey() {
  return ['api', '/api/v1/livechat/units', 'POST'] as const
}

export function getPostApiV1LivechatUnitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.units.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatUnitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.units.$post>) {
      return parseResponse(client.api.v1.livechat.units.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatUnits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.units.$post>,
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
    const mutationDefaults = getPostApiV1LivechatUnitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatUnitsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:id', keyArgs] as const
}

export function getApiV1LivechatUnitsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsIdQueryKey>
  >({
    queryKey: getApiV1LivechatUnitsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.units[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatUnitsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUnitsIdQueryKey>
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
      ...getApiV1LivechatUnitsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatUnitsIdMutationKey() {
  return ['api', '/api/v1/livechat/units/:id', 'POST'] as const
}

export function getPostApiV1LivechatUnitsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatUnitsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat.units[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatUnitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatUnitsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1LivechatUnitsIdMutationKey() {
  return ['api', '/api/v1/livechat/units/:id', 'DELETE'] as const
}

export function getDeleteApiV1LivechatUnitsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatUnitsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.units[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatUnitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatUnitsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatUnitsUnitIdMonitorsQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:unitId/monitors', keyArgs] as const
}

export function getApiV1LivechatUnitsUnitIdMonitorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsUnitIdMonitorsQueryKey>
  >({
    queryKey: getApiV1LivechatUnitsUnitIdMonitorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.units[':unitId'].monitors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatUnitsUnitIdMonitors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUnitsUnitIdMonitorsQueryKey>
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
      ...getApiV1LivechatUnitsUnitIdMonitorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:unitId/departments/available', keyArgs] as const
}

export function getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey>
  >({
    queryKey: getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.units[':unitId'].departments.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatUnitsUnitIdDepartmentsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey>
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
      ...getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatUnitsUnitIdDepartmentsQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:unitId/departments', keyArgs] as const
}

export function getApiV1LivechatUnitsUnitIdDepartmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsQueryKey>
  >({
    queryKey: getApiV1LivechatUnitsUnitIdDepartmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.units[':unitId'].departments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatUnitsUnitIdDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsQueryKey>
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
      ...getApiV1LivechatUnitsUnitIdDepartmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-status', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsConversationsByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/conversations-by-department',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-department'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsConversationsByDepartment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-tags', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsConversationsByTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-agent', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-agent'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsConversationsByAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-source', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey>
  >({
    queryKey: getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatAnalyticsDashboardsConversationsBySource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey>
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
      ...getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatSlaQueryKey(
  args: InferRequestType<typeof client.api.v1.livechat.sla.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/sla', keyArgs] as const
}

export function getApiV1LivechatSlaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.livechat.sla.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatSlaQueryKey>
  >({
    queryKey: getApiV1LivechatSlaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.sla.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LivechatSla<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.livechat.sla.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatSlaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LivechatSlaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1LivechatSlaMutationKey() {
  return ['api', '/api/v1/livechat/sla', 'POST'] as const
}

export function getPostApiV1LivechatSlaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.sla.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatSlaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.sla.$post>) {
      return parseResponse(client.api.v1.livechat.sla.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatSla<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.sla.$post>,
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
    const mutationDefaults = getPostApiV1LivechatSlaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatSlaSlaIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/sla/:slaId', keyArgs] as const
}

export function getApiV1LivechatSlaSlaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatSlaSlaIdQueryKey>
  >({
    queryKey: getApiV1LivechatSlaSlaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.sla[':slaId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatSlaSlaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatSlaSlaIdQueryKey>
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
      ...getApiV1LivechatSlaSlaIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1LivechatSlaSlaIdMutationKey() {
  return ['api', '/api/v1/livechat/sla/:slaId', 'PUT'] as const
}

export function getPutApiV1LivechatSlaSlaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LivechatSlaSlaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>,
    ) {
      return parseResponse(client.api.v1.livechat.sla[':slaId'].$put(args, options))
    },
  })
}

export function createPutApiV1LivechatSlaSlaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>,
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
    const mutationDefaults = getPutApiV1LivechatSlaSlaIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1LivechatSlaSlaIdMutationKey() {
  return ['api', '/api/v1/livechat/sla/:slaId', 'DELETE'] as const
}

export function getDeleteApiV1LivechatSlaSlaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatSlaSlaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.sla[':slaId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatSlaSlaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatSlaSlaIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatVisitorMutationKey() {
  return ['api', '/api/v1/livechat/visitor', 'POST'] as const
}

export function getPostApiV1LivechatVisitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.visitor.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.visitor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatVisitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.visitor.$post>) {
      return parseResponse(client.api.v1.livechat.visitor.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatVisitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.visitor.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.visitor.$post>,
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
    const mutationDefaults = getPostApiV1LivechatVisitorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorTokenQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
) {
  return ['api', '/api/v1/livechat/visitor/:token', args] as const
}

export function getApiV1LivechatVisitorTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorTokenQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.visitor[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatVisitorToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorTokenQueryKey>
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
      ...getApiV1LivechatVisitorTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1LivechatVisitorTokenMutationKey() {
  return ['api', '/api/v1/livechat/visitor/:token', 'DELETE'] as const
}

export function getDeleteApiV1LivechatVisitorTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatVisitorTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.visitor[':token'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatVisitorToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatVisitorTokenMutationOptions<
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

export function getApiV1LivechatVisitorsInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.info', keyArgs] as const
}

export function getApiV1LivechatVisitorsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsInfoQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['visitors.info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatVisitorsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorsInfoQueryKey>
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
      ...getApiV1LivechatVisitorsInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorTokenRoomQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitor/:token/room', keyArgs] as const
}

export function getApiV1LivechatVisitorTokenRoomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorTokenRoomQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorTokenRoomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.visitor[':token'].room.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatVisitorTokenRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorTokenRoomQueryKey>
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
      ...getApiV1LivechatVisitorTokenRoomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorsSearchQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.search', keyArgs] as const
}

export function getApiV1LivechatVisitorsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsSearchQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['visitors.search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatVisitorsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorsSearchQueryKey>
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
      ...getApiV1LivechatVisitorsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.pagesVisited/:roomId', keyArgs] as const
}

export function getApiV1LivechatVisitorsPagesVisitedRoomIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['visitors.pagesVisited'][':roomId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatVisitorsPagesVisitedRoomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey>
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
      ...getApiV1LivechatVisitorsPagesVisitedRoomIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/visitors.chatHistory/room/:roomId/visitor/:visitorId',
    keyArgs,
  ] as const
}

export function getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['visitors.chatHistory'].room[':roomId'].visitor[':visitorId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey>
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
      ...getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/visitors.searchChats/room/:roomId/visitor/:visitorId',
    keyArgs,
  ] as const
}

export function getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['visitors.searchChats'].room[':roomId'].visitor[':visitorId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey>
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
      ...getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1LivechatVisitorsAutocompleteQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.autocomplete', keyArgs] as const
}

export function getApiV1LivechatVisitorsAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsAutocompleteQueryKey>
  >({
    queryKey: getApiV1LivechatVisitorsAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['visitors.autocomplete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatVisitorsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatVisitorsAutocompleteQueryKey>
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
      ...getApiV1LivechatVisitorsAutocompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatVisitorStatusMutationKey() {
  return ['api', '/api/v1/livechat/visitor.status', 'POST'] as const
}

export function getPostApiV1LivechatVisitorStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitor.status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['visitor.status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatVisitorStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['visitor.status']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['visitor.status'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatVisitorStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['visitor.status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['visitor.status']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatVisitorStatusMutationOptions<
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

export function getApiV1CannedResponsesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/canned-responses', keyArgs] as const
}

export function getApiV1CannedResponsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CannedResponsesQueryKey>
  >({
    queryKey: getApiV1CannedResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['canned-responses'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CannedResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CannedResponsesQueryKey>
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
      ...getApiV1CannedResponsesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1CannedResponsesMutationKey() {
  return ['api', '/api/v1/canned-responses', 'POST'] as const
}

export function getPostApiV1CannedResponsesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['canned-responses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CannedResponsesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['canned-responses']['$post']>) {
      return parseResponse(client.api.v1['canned-responses'].$post(args, options))
    },
  })
}

export function createPostApiV1CannedResponses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['canned-responses']['$post']>,
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
    const mutationDefaults = getPostApiV1CannedResponsesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CannedResponsesGetQueryKey(
  args: InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/canned-responses.get', keyArgs] as const
}

export function getApiV1CannedResponsesGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CannedResponsesGetQueryKey>
  >({
    queryKey: getApiV1CannedResponsesGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['canned-responses.get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CannedResponsesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CannedResponsesGetQueryKey>
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
      ...getApiV1CannedResponsesGetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CannedResponsesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/canned-responses/:_id', keyArgs] as const
}

export function getApiV1CannedResponsesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CannedResponsesIdQueryKey>
  >({
    queryKey: getApiV1CannedResponsesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['canned-responses'][':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CannedResponsesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CannedResponsesIdQueryKey>
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
      ...getApiV1CannedResponsesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1CannedResponsesIdMutationKey() {
  return ['api', '/api/v1/canned-responses/:_id', 'DELETE'] as const
}

export function getDeleteApiV1CannedResponsesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CannedResponsesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1['canned-responses'][':_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1CannedResponsesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1CannedResponsesIdMutationOptions<
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

export function getPostApiV1LivechatMessageMutationKey() {
  return ['api', '/api/v1/livechat/message', 'POST'] as const
}

export function getPostApiV1LivechatMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.message.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.message.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.message.$post>) {
      return parseResponse(client.api.v1.livechat.message.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.message.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.message.$post>,
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
    const mutationDefaults = getPostApiV1LivechatMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LivechatMessagesMutationKey() {
  return ['api', '/api/v1/livechat/messages', 'POST'] as const
}

export function getPostApiV1LivechatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.messages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.livechat.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.livechat.messages.$post>) {
      return parseResponse(client.api.v1.livechat.messages.$post(args, options))
    },
  })
}

export function createPostApiV1LivechatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.messages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.livechat.messages.$post>,
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
    const mutationDefaults = getPostApiV1LivechatMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1LivechatMessageIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
) {
  return ['api', '/api/v1/livechat/message/:_id', args] as const
}

export function getApiV1LivechatMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMessageIdQueryKey>
  >({
    queryKey: getApiV1LivechatMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat.message[':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatMessageIdQueryKey>
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
      ...getApiV1LivechatMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1LivechatMessageIdMutationKey() {
  return ['api', '/api/v1/livechat/message/:_id', 'PUT'] as const
}

export function getPutApiV1LivechatMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LivechatMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$put']>,
    ) {
      return parseResponse(client.api.v1.livechat.message[':_id'].$put(args, options))
    },
  })
}

export function createPutApiV1LivechatMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$put']>,
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
    const mutationDefaults = getPutApiV1LivechatMessageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1LivechatMessageIdMutationKey() {
  return ['api', '/api/v1/livechat/message/:_id', 'DELETE'] as const
}

export function getDeleteApiV1LivechatMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LivechatMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.livechat.message[':_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1LivechatMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1LivechatMessageIdMutationOptions<
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

export function getApiV1LivechatMessagesHistoryRidQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
) {
  return ['api', '/api/v1/livechat/messages.history/:rid', args] as const
}

export function getApiV1LivechatMessagesHistoryRidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMessagesHistoryRidQueryKey>
  >({
    queryKey: getApiV1LivechatMessagesHistoryRidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat['messages.history'][':rid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatMessagesHistoryRid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatMessagesHistoryRidQueryKey>
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
      ...getApiV1LivechatMessagesHistoryRidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1LivechatOfflineMessageMutationKey() {
  return ['api', '/api/v1/livechat/offline.message', 'POST'] as const
}

export function getPostApiV1LivechatOfflineMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['offline.message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatOfflineMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['offline.message'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatOfflineMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['offline.message']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatOfflineMessageMutationOptions<
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

export function getApiV1LivechatRidMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/:rid/messages', keyArgs] as const
}

export function getApiV1LivechatRidMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRidMessagesQueryKey>
  >({
    queryKey: getApiV1LivechatRidMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.livechat[':rid'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LivechatRidMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LivechatRidMessagesQueryKey>
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
      ...getApiV1LivechatRidMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1OmnichannelIntegrationsMutationKey() {
  return ['api', '/api/v1/omnichannel/integrations', 'POST'] as const
}

export function getPostApiV1OmnichannelIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.omnichannel.integrations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.omnichannel.integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OmnichannelIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.omnichannel.integrations.$post>) {
      return parseResponse(client.api.v1.omnichannel.integrations.$post(args, options))
    },
  })
}

export function createPostApiV1OmnichannelIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.omnichannel.integrations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.omnichannel.integrations.$post>,
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
    const mutationDefaults = getPostApiV1OmnichannelIntegrationsMutationOptions<
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

export function getPostApiV1LivechatWebhookTestMutationKey() {
  return ['api', '/api/v1/livechat/webhook.test', 'POST'] as const
}

export function getPostApiV1LivechatWebhookTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['webhook.test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.livechat)['webhook.test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LivechatWebhookTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.livechat)['webhook.test']['$post']>,
    ) {
      return parseResponse(client.api.v1.livechat['webhook.test'].$post(args, options))
    },
  })
}

export function createPostApiV1LivechatWebhookTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.livechat)['webhook.test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.livechat)['webhook.test']['$post']>,
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
    const mutationDefaults = getPostApiV1LivechatWebhookTestMutationOptions<
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
