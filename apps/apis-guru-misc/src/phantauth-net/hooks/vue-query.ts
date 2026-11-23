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

export function getClientKey() {
  return ['client'] as const
}

export function getDomainKey() {
  return ['domain'] as const
}

export function getFleetKey() {
  return ['fleet'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getTenantKey() {
  return ['tenant'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getPostClientMutationKey() {
  return ['client', '/client', 'POST'] as const
}

export function getPostClientMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.$post>>>>>,
    TError,
    InferRequestType<typeof client.client.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.client.$post>) {
      return parseResponse(client.client.$post(args, options))
    },
  })
}

export function usePostClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.client.$post>,
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
  const mutationDefaults = getPostClientMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClientClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.client)[':client_id']['$get']>>,
) {
  return ['client', '/client/:client_id', toValue(args)] as const
}

export function getClientClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.client)[':client_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.client[':client_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.client)[':client_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientClientIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.client[':client_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientClientIdTokenKindQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>
  >,
) {
  return ['client', '/client/:client_id/token/:kind', toValue(args)] as const
}

export function getClientClientIdTokenKindQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientClientIdTokenKindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.client[':client_id'].token[':kind'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientClientIdTokenKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientClientIdTokenKindQueryKey>
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
          Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientClientIdTokenKindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientClientIdTokenKindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.client[':client_id'].token[':kind'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainDomainnameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domain)[':domainname']['$get']>>,
) {
  return ['domain', '/domain/:domainname', toValue(args)] as const
}

export function getDomainDomainnameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domain)[':domainname']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainDomainnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domain[':domainname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainDomainname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domain)[':domainname']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainDomainnameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainDomainnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainDomainnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domain[':domainname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFleetFleetnameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fleet)[':fleetname']['$get']>>,
) {
  return ['fleet', '/fleet/:fleetname', toValue(args)] as const
}

export function getFleetFleetnameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fleet)[':fleetname']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFleetFleetnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fleet[':fleetname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFleetFleetname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fleet)[':fleetname']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
            >
          >,
          ReturnType<typeof getFleetFleetnameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFleetFleetnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFleetFleetnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fleet[':fleetname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTeamnameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':teamname']['$get']>>,
) {
  return ['team', '/team/:teamname', toValue(args)] as const
}

export function getTeamTeamnameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':teamname']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTeamnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team[':teamname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamTeamname<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team)[':teamname']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamTeamnameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTeamnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team[':teamname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantTenantnameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tenant)[':tenantname']['$get']>>,
) {
  return ['tenant', '/tenant/:tenantname', toValue(args)] as const
}

export function getTenantTenantnameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tenant)[':tenantname']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantTenantnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tenant[':tenantname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenantTenantname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tenant)[':tenantname']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantTenantnameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantTenantnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantTenantnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tenant[':tenantname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserMutationKey() {
  return ['user', '/user', 'POST'] as const
}

export function getPostUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$post>) {
      return parseResponse(client.user.$post(args, options))
    },
  })
}

export function usePostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
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
  const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':username']['$get']>>,
) {
  return ['user', '/user/:username', toValue(args)] as const
}

export function getUserUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
            >
          >,
          ReturnType<typeof getUserUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUsernameTokenKindQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>
  >,
) {
  return ['user', '/user/:username/token/:kind', toValue(args)] as const
}

export function getUserUsernameTokenKindQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUsernameTokenKindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':username'].token[':kind'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUsernameTokenKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUsernameTokenKindQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameTokenKindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUsernameTokenKindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':username'].token[':kind'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
