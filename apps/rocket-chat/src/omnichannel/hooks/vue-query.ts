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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1LivechatUsersTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/users/:type', keyArgs] as const
}

export function getApiV1LivechatUsersTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUsersTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.users[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUsersType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatUsersTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUsersTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUsersTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.users[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatUsersType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatUsersTypeMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatUsersTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/users/:type/:_id', keyArgs] as const
}

export function getApiV1LivechatUsersTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUsersTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.users[':type'][':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUsersTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatUsersTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUsersTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUsersTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.users[':type'][':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1LivechatUsersTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LivechatUsersTypeIdMutationOptions<
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

export function getApiV1LivechatAgentInfoRidTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
  >,
) {
  return ['api', '/api/v1/livechat/agent.info/:rid/:token', toValue(args)] as const
}

export function getApiV1LivechatAgentInfoRidTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAgentInfoRidTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['agent.info'][':rid'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAgentInfoRidToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
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
                    (typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']
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
                    (typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAgentInfoRidTokenQueryKey>
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
            ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAgentInfoRidTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAgentInfoRidTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['agent.info'][':rid'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAgentNextTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>
  >,
) {
  return ['api', '/api/v1/livechat/agent.next/:token', toValue(args)] as const
}

export function getApiV1LivechatAgentNextTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAgentNextTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['agent.next'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAgentNextToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAgentNextTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAgentNextTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAgentNextTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['agent.next'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatAgentsSaveInfo<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatAgentsSaveInfoMutationOptions<
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

export function usePostApiV1LivechatAgentStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatAgentStatusMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1OmnichannelContactQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.omnichannel.contact.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contact', keyArgs] as const
}

export function getApiV1OmnichannelContactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.omnichannel.contact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel.contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.omnichannel.contact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel.contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1OmnichannelContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1OmnichannelContactMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1OmnichannelContactSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contact.search', keyArgs] as const
}

export function getApiV1OmnichannelContactSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel['contact.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContactSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel['contact.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1OmnichannelContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1OmnichannelContactsMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1OmnichannelContactsUpdate<
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
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>,
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
  const mutationDefaults = getPostApiV1OmnichannelContactsUpdateMutationOptions<
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

export function usePostApiV1OmnichannelContactsConflicts<
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
                  ReturnType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>,
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
  const mutationDefaults = getPostApiV1OmnichannelContactsConflictsMutationOptions<
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

export function getApiV1OmnichannelContactsGetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contacts.get', keyArgs] as const
}

export function getApiV1OmnichannelContactsGetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactsGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContactsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactsGetQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactsGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel['contacts.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1OmnichannelContactsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contacts.search', keyArgs] as const
}

export function getApiV1OmnichannelContactsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContactsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel['contacts.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1OmnichannelContactsChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contacts.channels', keyArgs] as const
}

export function getApiV1OmnichannelContactsChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactsChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.channels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContactsChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactsChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactsChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel['contacts.channels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1OmnichannelContactsHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contacts.history', keyArgs] as const
}

export function getApiV1OmnichannelContactsHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContactsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactsHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel['contacts.history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1OmnichannelContactsCheckExistenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/omnichannel/contacts.checkExistence', keyArgs] as const
}

export function getApiV1OmnichannelContactsCheckExistenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OmnichannelContactsCheckExistenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.omnichannel['contacts.checkExistence'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OmnichannelContactsCheckExistence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OmnichannelContactsCheckExistenceQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OmnichannelContactsCheckExistenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OmnichannelContactsCheckExistenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.omnichannel['contacts.checkExistence'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1OmnichannelContactsBlock<
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
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>,
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
  const mutationDefaults = getPostApiV1OmnichannelContactsBlockMutationOptions<
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

export function usePostApiV1OmnichannelContactsUnblock<
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
                Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>,
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
  const mutationDefaults = getPostApiV1OmnichannelContactsUnblockMutationOptions<
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

export function getApiV1LivechatAnalyticsAgentOverviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/agent-overview', keyArgs] as const
}

export function getApiV1LivechatAnalyticsAgentOverviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsAgentOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics['agent-overview'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsAgentOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsAgentOverviewQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsAgentOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics['agent-overview'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsOverviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/overview', keyArgs] as const
}

export function getApiV1LivechatAnalyticsOverviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsOverviewQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.config.$get>>,
) {
  return ['api', '/api/v1/livechat/config', toValue(args)] as const
}

export function getApiV1LivechatConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatRoomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.rooms.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/rooms', keyArgs] as const
}

export function getApiV1LivechatRoomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.rooms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.rooms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatRooms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.rooms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatRoomsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.rooms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatRoomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.room.$get>>,
) {
  return ['api', '/api/v1/livechat/room', toValue(args)] as const
}

export function getApiV1LivechatRoomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.room.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatRoomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.room.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatRoom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.room.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatRoomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatRoomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.room.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatRoomClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatRoomCloseMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatRoomCloseByUser<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatRoomCloseByUserMutationOptions<
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

export function getApiV1LivechatRoomJoinQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/room.join', keyArgs] as const
}

export function getApiV1LivechatRoomJoinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatRoomJoinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['room.join'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatRoomJoin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatRoomJoinQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomJoinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatRoomJoinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['room.join'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatRoomSaveInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatRoomSaveInfoMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatRoomForward<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatRoomForwardMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatTransferHistoryRidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/transfer.history/:rid', keyArgs] as const
}

export function getApiV1LivechatTransferHistoryRidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatTransferHistoryRidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['transfer.history'][':rid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatTransferHistoryRid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatTransferHistoryRidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTransferHistoryRidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatTransferHistoryRidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['transfer.history'][':rid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatRoomSurvey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatRoomSurveyMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatRoomOnHold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatRoomOnHoldMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatUploadRid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatUploadRidMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatRoomRidPriority<
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
                  ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatRoomRidPriorityMutationOptions<
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

export function useDeleteApiV1LivechatRoomRidPriority<
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
                  ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LivechatRoomRidPriorityMutationOptions<
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

export function usePostApiV1LivechatRoomsRemoveAllClosedRooms<
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
                  ReturnType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatRoomsRemoveAllClosedRoomsMutationOptions<
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

export function usePostApiV1LivechatRoomsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatRoomsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatRoomResumeOnHold<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatRoomResumeOnHoldMutationOptions<
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

export function getApiV1LivechatRoomsFiltersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/rooms/filters', keyArgs] as const
}

export function getApiV1LivechatRoomsFiltersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatRoomsFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.rooms.filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatRoomsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatRoomsFiltersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRoomsFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatRoomsFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.rooms.filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatVisitorDepartmentTransfer<
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
                    (typeof client.api.v1.livechat.visitor)['department.transfer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatVisitorDepartmentTransferMutationOptions<
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

export function getApiV1LivechatDepartmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.department.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/department', keyArgs] as const
}

export function getApiV1LivechatDepartmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.department.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.department.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.department.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatDepartmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.department.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatDepartment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatDepartmentMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatDepartmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/department/:_id', keyArgs] as const
}

export function getApiV1LivechatDepartmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.department[':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatDepartmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.department[':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1LivechatDepartmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1LivechatDepartmentIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1LivechatDepartmentId<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LivechatDepartmentIdMutationOptions<
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

export function getApiV1LivechatDepartmentAutocompleteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/department.autocomplete', keyArgs] as const
}

export function getApiV1LivechatDepartmentAutocompleteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['department.autocomplete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartmentAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentAutocompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatDepartmentAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['department.autocomplete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatDepartmentIdAgentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/department/:_id/agents', keyArgs] as const
}

export function getApiV1LivechatDepartmentIdAgentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentIdAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.department[':_id'].agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartmentIdAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentIdAgentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentIdAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatDepartmentIdAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.department[':_id'].agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatDepartmentIdAgents<
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
                  ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatDepartmentIdAgentsMutationOptions<
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

export function getApiV1LivechatDepartmentListByIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/department.listByIds', keyArgs] as const
}

export function getApiV1LivechatDepartmentListByIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentListByIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['department.listByIds'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartmentListByIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentListByIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentListByIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatDepartmentListByIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['department.listByIds'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/departments/amount-of-chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['amount-of-chats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsAmountOfChats<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsAmountOfChatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['amount-of-chats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/departments/average-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['average-service-time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsAverageServiceTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['average-service-time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/analytics/departments/average-chat-duration-time',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['average-chat-duration-time'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsAverageChatDurationTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['average-chat-duration-time'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/departments/total-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['total-service-time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsTotalServiceTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['total-service-time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/departments/average-waiting-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['average-waiting-time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsAverageWaitingTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['average-waiting-time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/departments/total-transferred-chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['total-transferred-chats'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsTotalTransferredChats<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['total-transferred-chats'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/departments/total-abandoned-chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['total-abandoned-chats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsTotalAbandonedChats<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['total-abandoned-chats'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/analytics/departments/percentage-abandoned-chats',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.departments['percentage-abandoned-chats'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChats<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
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
                    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey>
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
              (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.departments['percentage-abandoned-chats'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatDepartmentsArchivedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/departments/archived', keyArgs] as const
}

export function getApiV1LivechatDepartmentsArchivedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentsArchivedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.departments.archived.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartmentsArchived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentsArchivedQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentsArchivedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatDepartmentsArchivedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.departments.archived.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatDepartmentIdArchive<
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
                  ReturnType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatDepartmentIdArchiveMutationOptions<
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

export function usePostApiV1LivechatDepartmentIdUnarchive<
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
                    (typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']
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
  const mutationDefaults = getPostApiV1LivechatDepartmentIdUnarchiveMutationOptions<
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

export function getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/department/isDepartmentCreationAvailable', keyArgs] as const
}

export function getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.department.isDepartmentCreationAvailable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatDepartmentIsDepartmentCreationAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
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
                    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
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
                    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey>
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
            ReturnType<typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatDepartmentIsDepartmentCreationAvailableQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.department.isDepartmentCreationAvailable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatCustomFieldsSave<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatCustomFieldsSaveMutationOptions<
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

export function usePostApiV1LivechatCustomField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatCustomFieldMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatCustomFields2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/custom-fields', keyArgs] as const
}

export function getApiV1LivechatCustomFields2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatCustomFields2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['custom-fields'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatCustomFields2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatCustomFields2QueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatCustomFields2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatCustomFields2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['custom-fields'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatCustomFieldsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/custom-fields/:_id', keyArgs] as const
}

export function getApiV1LivechatCustomFieldsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatCustomFieldsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['custom-fields'][':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatCustomFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>
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
                  ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatCustomFieldsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatCustomFieldsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatCustomFieldsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['custom-fields'][':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatCustomFieldsDelete<
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
                  ReturnType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatCustomFieldsDeleteMutationOptions<
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

export function usePostApiV1LivechatPageVisited<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatPageVisitedMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatTranscript<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatTranscriptMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatTranscriptRid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatTranscriptRidMutationOptions<
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

export function useDeleteApiV1LivechatTranscriptRid<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LivechatTranscriptRidMutationOptions<
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

export function usePostApiV1OmnichannelRidRequestTranscript<
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
                    (typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']
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
  const mutationDefaults = getPostApiV1OmnichannelRidRequestTranscriptMutationOptions<
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

export function getApiV1LivechatAgentsAgentIdDepartmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/agents/:agentId/departments', keyArgs] as const
}

export function getApiV1LivechatAgentsAgentIdDepartmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAgentsAgentIdDepartmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.agents[':agentId'].departments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAgentsAgentIdDepartments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
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
                    (typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']
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
                    (typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAgentsAgentIdDepartmentsQueryKey>
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
            ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAgentsAgentIdDepartmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAgentsAgentIdDepartmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.agents[':agentId'].departments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/agents/average-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.agents['average-service-time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsAgentsAverageServiceTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey>
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
              (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsAgentsAverageServiceTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.agents['average-service-time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/agents/total-service-time', keyArgs] as const
}

export function getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.agents['total-service-time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsAgentsTotalServiceTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']>
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
                    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
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
                    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey>
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
              (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsAgentsTotalServiceTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.agents['total-service-time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/analytics/agents/available-for-service-history',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.agents['available-for-service-history'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsAgentsAvailableForServiceHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
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
                    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
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
                    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey>
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
              (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.agents['available-for-service-history'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAppearanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.appearance.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/appearance', keyArgs] as const
}

export function getApiV1LivechatAppearanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.appearance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAppearanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.appearance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAppearance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.appearance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAppearanceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAppearanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAppearanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.appearance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatAppearance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatAppearanceMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatBusinessHoursQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/business-hours', keyArgs] as const
}

export function getApiV1LivechatBusinessHoursQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatBusinessHoursQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['business-hours'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatBusinessHours<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatBusinessHoursQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatBusinessHoursQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatBusinessHoursQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['business-hours'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatBusinessHourQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/business-hour', keyArgs] as const
}

export function getApiV1LivechatBusinessHourQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatBusinessHourQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['business-hour'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatBusinessHour<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatBusinessHourQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatBusinessHourQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatBusinessHourQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['business-hour'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatBusinessHoursRemove<
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
                  ReturnType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatBusinessHoursRemoveMutationOptions<
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

export function usePostApiV1LivechatBusinessHoursSave<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatBusinessHoursSaveMutationOptions<
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

export function getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/conversation-totalizers', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversation-totalizers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsConversationTotalizers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsConversationTotalizersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['conversation-totalizers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/agents-productivity-totalizers',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['agents-productivity-totalizers'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['agents-productivity-totalizers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/chats-totalizers', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['chats-totalizers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsChatsTotalizers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChatsTotalizersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['chats-totalizers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/productivity-totalizers', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['productivity-totalizers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsProductivityTotalizers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsProductivityTotalizersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['productivity-totalizers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/chats', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts.chats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsChartsChats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsChatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts.chats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/chats-per-agent', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts['chats-per-agent'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsChartsChatsPerAgent<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts['chats-per-agent'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/agents-status', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts['agents-status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsChartsAgentsStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts['agents-status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/charts/chats-per-department',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts['chats-per-department'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartment<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts['chats-per-department'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/timings', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards.charts.timings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsChartsTimings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey>
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
            ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsChartsTimingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts.timings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/livechat/analytics/dashboards/charts-data', keyArgs] as const
}

export function getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.livechat.analytics.dashboards['charts-data'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatLivechatAnalyticsDashboardsChartsData<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
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
                    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
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
                    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey>
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
              (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatLivechatAnalyticsDashboardsChartsDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.livechat.analytics.dashboards['charts-data'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatInquiriesListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/inquiries.list', keyArgs] as const
}

export function getApiV1LivechatInquiriesListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatInquiriesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['inquiries.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatInquiriesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatInquiriesListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatInquiriesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatInquiriesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['inquiries.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatInquiriesTake<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatInquiriesTakeMutationOptions<
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

export function getApiV1LivechatInquiriesQueuedForUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/inquiries.queuedForUser', keyArgs] as const
}

export function getApiV1LivechatInquiriesQueuedForUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatInquiriesQueuedForUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['inquiries.queuedForUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatInquiriesQueuedForUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatInquiriesQueuedForUserQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatInquiriesQueuedForUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatInquiriesQueuedForUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['inquiries.queuedForUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatInquiriesGetOneQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/inquiries.getOne', keyArgs] as const
}

export function getApiV1LivechatInquiriesGetOneQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatInquiriesGetOneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['inquiries.getOne'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatInquiriesGetOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatInquiriesGetOneQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatInquiriesGetOneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatInquiriesGetOneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['inquiries.getOne'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1LivechatInquirySetSLA<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1LivechatInquirySetSLAMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatInquiriesReturnAsInquiry<
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
                  ReturnType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatInquiriesReturnAsInquiryMutationOptions<
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

export function getApiV1LivechatIntegrationsSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/integrations.settings', keyArgs] as const
}

export function getApiV1LivechatIntegrationsSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatIntegrationsSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['integrations.settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatIntegrationsSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>
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
                  ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatIntegrationsSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatIntegrationsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatIntegrationsSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['integrations.settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatQueueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.queue.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/queue', keyArgs] as const
}

export function getApiV1LivechatQueueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.queue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.queue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatQueue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.queue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatQueueQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.queue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatSmsIncomingService<
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
                  ReturnType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatSmsIncomingServiceMutationOptions<
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

export function getApiV1LivechatConfigRoutingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.config.routing.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/config/routing', keyArgs] as const
}

export function getApiV1LivechatConfigRoutingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.config.routing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatConfigRoutingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.config.routing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatConfigRouting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.config.routing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatConfigRoutingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatConfigRoutingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatConfigRoutingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.config.routing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatTriggersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.triggers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/triggers', keyArgs] as const
}

export function getApiV1LivechatTriggersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.triggers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.triggers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.triggers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatTriggersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.livechat.triggers.$post>,
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
  const mutationDefaults = getPostApiV1LivechatTriggersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatTriggersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/triggers/:_id', keyArgs] as const
}

export function getApiV1LivechatTriggersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatTriggersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.triggers[':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatTriggersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatTriggersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTriggersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatTriggersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.triggers[':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1LivechatTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1LivechatTriggersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatTriggersExternalServiceTest<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatTriggersExternalServiceTestMutationOptions<
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

export function getApiV1LivechatMonitorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.monitors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/monitors', keyArgs] as const
}

export function getApiV1LivechatMonitorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.monitors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatMonitorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.monitors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatMonitors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.monitors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatMonitorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMonitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatMonitorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.monitors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatMonitorsUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/monitors/:username', keyArgs] as const
}

export function getApiV1LivechatMonitorsUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatMonitorsUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.monitors[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatMonitorsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatMonitorsUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMonitorsUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatMonitorsUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.monitors[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatMonitorsDelete<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatMonitorsDeleteMutationOptions<
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

export function usePostApiV1LivechatMonitorsCreate<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatMonitorsCreateMutationOptions<
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

export function getApiV1LivechatPrioritiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.priorities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/priorities', keyArgs] as const
}

export function getApiV1LivechatPrioritiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.priorities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatPrioritiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.priorities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatPriorities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.priorities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatPrioritiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatPrioritiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatPrioritiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.priorities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatPrioritiesPriorityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/priorities/:priorityId', keyArgs] as const
}

export function getApiV1LivechatPrioritiesPriorityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatPrioritiesPriorityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.priorities[':priorityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatPrioritiesPriorityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>
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
                  ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatPrioritiesPriorityIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatPrioritiesPriorityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatPrioritiesPriorityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.priorities[':priorityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1LivechatPrioritiesPriorityId<
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
                  ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>,
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
  const mutationDefaults = getPutApiV1LivechatPrioritiesPriorityIdMutationOptions<
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

export function getApiV1LivechatPrioritiesResetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/priorities.reset', keyArgs] as const
}

export function getApiV1LivechatPrioritiesResetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatPrioritiesResetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['priorities.reset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatPrioritiesReset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatPrioritiesResetQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatPrioritiesResetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatPrioritiesResetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['priorities.reset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatPrioritiesReset<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatPrioritiesResetMutationOptions<
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

export function getApiV1LivechatTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.tags.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/tags', keyArgs] as const
}

export function getApiV1LivechatTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatTagsTagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/tags/:tagId', keyArgs] as const
}

export function getApiV1LivechatTagsTagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatTagsTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.tags[':tagId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatTagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatTagsTagIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatTagsTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatTagsTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.tags[':tagId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatTagsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatTagsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatTagsSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatTagsSaveMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatUnitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.units.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/units', keyArgs] as const
}

export function getApiV1LivechatUnitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.units.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUnitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.units.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUnits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.units.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatUnitsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUnitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.units.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatUnits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.livechat.units.$post>,
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
  const mutationDefaults = getPostApiV1LivechatUnitsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatUnitsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/units/:id', keyArgs] as const
}

export function getApiV1LivechatUnitsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUnitsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.units[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUnitsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatUnitsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUnitsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.units[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatUnitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatUnitsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1LivechatUnitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1LivechatUnitsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatUnitsUnitIdMonitorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/units/:unitId/monitors', keyArgs] as const
}

export function getApiV1LivechatUnitsUnitIdMonitorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUnitsUnitIdMonitorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.units[':unitId'].monitors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUnitsUnitIdMonitors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatUnitsUnitIdMonitorsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsUnitIdMonitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUnitsUnitIdMonitorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.units[':unitId'].monitors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/units/:unitId/departments/available', keyArgs] as const
}

export function getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.units[':unitId'].departments.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUnitsUnitIdDepartmentsAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
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
                    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
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
                    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey>
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
              (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUnitsUnitIdDepartmentsAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.units[':unitId'].departments.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatUnitsUnitIdDepartmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/units/:unitId/departments', keyArgs] as const
}

export function getApiV1LivechatUnitsUnitIdDepartmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatUnitsUnitIdDepartmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.units[':unitId'].departments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatUnitsUnitIdDepartments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
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
                    (typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']
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
                    (typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsQueryKey>
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
            ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatUnitsUnitIdDepartmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatUnitsUnitIdDepartmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.units[':unitId'].departments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-status', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsConversationsByStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsConversationsByStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['conversations-by-status'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/conversations-by-department',
    keyArgs,
  ] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-department'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsConversationsByDepartment<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['conversations-by-department'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-tags', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsConversationsByTags<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsConversationsByTagsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['conversations-by-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-agent', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-agent'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsConversationsByAgent<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsConversationsByAgentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['conversations-by-agent'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-source', keyArgs] as const
}

export function getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.analytics.dashboards['conversations-by-source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatAnalyticsDashboardsConversationsBySource<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
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
                    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey>
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
              (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatAnalyticsDashboardsConversationsBySourceQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.analytics.dashboards['conversations-by-source'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatSlaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.sla.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/sla', keyArgs] as const
}

export function getApiV1LivechatSlaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.sla.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatSlaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.sla.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatSla<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.livechat.sla.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LivechatSlaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatSlaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatSlaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.sla.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatSla<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.livechat.sla.$post>,
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
  const mutationDefaults = getPostApiV1LivechatSlaMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatSlaSlaIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/sla/:slaId', keyArgs] as const
}

export function getApiV1LivechatSlaSlaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatSlaSlaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.sla[':slaId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatSlaSlaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatSlaSlaIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatSlaSlaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatSlaSlaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.sla[':slaId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1LivechatSlaSlaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1LivechatSlaSlaIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1LivechatSlaSlaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1LivechatSlaSlaIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatVisitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.visitor.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.livechat.visitor.$post>,
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
  const mutationDefaults = getPostApiV1LivechatVisitorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatVisitorTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>
  >,
) {
  return ['api', '/api/v1/livechat/visitor/:token', toValue(args)] as const
}

export function getApiV1LivechatVisitorTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatVisitorTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.visitor[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatVisitorToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatVisitorTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.visitor[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1LivechatVisitorToken<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LivechatVisitorTokenMutationOptions<
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

export function getApiV1LivechatVisitorsInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/visitors.info', keyArgs] as const
}

export function getApiV1LivechatVisitorsInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatVisitorsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['visitors.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatVisitorsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorsInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatVisitorsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['visitors.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatVisitorTokenRoomQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/visitor/:token/room', keyArgs] as const
}

export function getApiV1LivechatVisitorTokenRoomQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatVisitorTokenRoomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.visitor[':token'].room.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatVisitorTokenRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>
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
                  ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorTokenRoomQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorTokenRoomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatVisitorTokenRoomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.visitor[':token'].room.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatVisitorsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/visitors.search', keyArgs] as const
}

export function getApiV1LivechatVisitorsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatVisitorsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['visitors.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatVisitorsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatVisitorsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['visitors.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/visitors.pagesVisited/:roomId', keyArgs] as const
}

export function getApiV1LivechatVisitorsPagesVisitedRoomIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['visitors.pagesVisited'][':roomId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatVisitorsPagesVisitedRoomId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
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
                    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
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
                    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey>
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
            ReturnType<(typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatVisitorsPagesVisitedRoomIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['visitors.pagesVisited'][':roomId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/visitors.chatHistory/room/:roomId/visitor/:visitorId',
    keyArgs,
  ] as const
}

export function getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['visitors.chatHistory'].room[':roomId'].visitor[':visitorId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
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
                    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
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
                    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey>
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
              (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['visitors.chatHistory'].room[':roomId'].visitor[':visitorId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/livechat/visitors.searchChats/room/:roomId/visitor/:visitorId',
    keyArgs,
  ] as const
}

export function getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['visitors.searchChats'].room[':roomId'].visitor[':visitorId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
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
                    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
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
                    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey>
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
              (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['visitors.searchChats'].room[':roomId'].visitor[':visitorId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LivechatVisitorsAutocompleteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/visitors.autocomplete', keyArgs] as const
}

export function getApiV1LivechatVisitorsAutocompleteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatVisitorsAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['visitors.autocomplete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatVisitorsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>
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
                  ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatVisitorsAutocompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatVisitorsAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatVisitorsAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['visitors.autocomplete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatVisitorStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatVisitorStatusMutationOptions<
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

export function getApiV1CannedResponsesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/canned-responses', keyArgs] as const
}

export function getApiV1CannedResponsesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CannedResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['canned-responses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CannedResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CannedResponsesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CannedResponsesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CannedResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['canned-responses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1CannedResponses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CannedResponsesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CannedResponsesGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/canned-responses.get', keyArgs] as const
}

export function getApiV1CannedResponsesGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CannedResponsesGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['canned-responses.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CannedResponsesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CannedResponsesGetQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CannedResponsesGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CannedResponsesGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['canned-responses.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CannedResponsesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/canned-responses/:_id', keyArgs] as const
}

export function getApiV1CannedResponsesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CannedResponsesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['canned-responses'][':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CannedResponsesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CannedResponsesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CannedResponsesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CannedResponsesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['canned-responses'][':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1CannedResponsesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1CannedResponsesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.message.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.livechat.message.$post>,
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
  const mutationDefaults = getPostApiV1LivechatMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LivechatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.livechat.messages.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.livechat.messages.$post>,
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
  const mutationDefaults = getPostApiV1LivechatMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatMessageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>,
) {
  return ['api', '/api/v1/livechat/message/:_id', toValue(args)] as const
}

export function getApiV1LivechatMessageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat.message[':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat.message[':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1LivechatMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1LivechatMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1LivechatMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1LivechatMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LivechatMessagesHistoryRidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>
  >,
) {
  return ['api', '/api/v1/livechat/messages.history/:rid', toValue(args)] as const
}

export function getApiV1LivechatMessagesHistoryRidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatMessagesHistoryRidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat['messages.history'][':rid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatMessagesHistoryRid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatMessagesHistoryRidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatMessagesHistoryRidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatMessagesHistoryRidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat['messages.history'][':rid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1LivechatOfflineMessage<
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
                Awaited<ReturnType<(typeof client.api.v1.livechat)['offline.message']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']>,
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
  const mutationDefaults = getPostApiV1LivechatOfflineMessageMutationOptions<
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

export function getApiV1LivechatRidMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/livechat/:rid/messages', keyArgs] as const
}

export function getApiV1LivechatRidMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LivechatRidMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.livechat[':rid'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LivechatRidMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LivechatRidMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LivechatRidMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LivechatRidMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.livechat[':rid'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1OmnichannelIntegrations<
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
                Awaited<ReturnType<typeof client.api.v1.omnichannel.integrations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.omnichannel.integrations.$post>,
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
  const mutationDefaults = getPostApiV1OmnichannelIntegrationsMutationOptions<
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

export function usePostApiV1LivechatWebhookTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LivechatWebhookTestMutationOptions<TError, TOnMutateResult>(
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
