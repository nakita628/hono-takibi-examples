import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.$post>>>>>,
        TError,
        InferRequestType<typeof client.client.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
) {
  return ['client', '/client/:client_id', args] as const
}

export function getClientClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientClientIdQueryKey>
  >({
    queryKey: getClientClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.client[':client_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientClientIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientClientIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClientClientIdTokenKindQueryKey(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
) {
  return ['client', '/client/:client_id/token/:kind', args] as const
}

export function getClientClientIdTokenKindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getClientClientIdTokenKindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.client[':client_id'].token[':kind'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getClientClientIdTokenKindQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getClientClientIdTokenKindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClientClientIdTokenKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getClientClientIdTokenKindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDomainDomainnameQueryKey(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
) {
  return ['domain', '/domain/:domainname', args] as const
}

export function getDomainDomainnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainDomainnameQueryKey>
  >({
    queryKey: getDomainDomainnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domain[':domainname'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainDomainname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainDomainnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainDomainnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainDomainname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainDomainnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainDomainnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFleetFleetnameQueryKey(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
) {
  return ['fleet', '/fleet/:fleetname', args] as const
}

export function getFleetFleetnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFleetFleetnameQueryKey>
  >({
    queryKey: getFleetFleetnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fleet[':fleetname'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFleetFleetname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFleetFleetnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFleetFleetnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFleetFleetname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFleetFleetnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFleetFleetnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTeamnameQueryKey(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
) {
  return ['team', '/team/:teamname', args] as const
}

export function getTeamTeamnameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTeamnameQueryKey>
  >({
    queryKey: getTeamTeamnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team[':teamname'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamTeamname<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTeamnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTeamname<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTeamnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTeamnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTenantTenantnameQueryKey(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
) {
  return ['tenant', '/tenant/:tenantname', args] as const
}

export function getTenantTenantnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantTenantnameQueryKey>
  >({
    queryKey: getTenantTenantnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tenant[':tenantname'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTenantTenantname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantTenantnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTenantTenantnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTenantTenantname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantTenantnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTenantTenantnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
        TError,
        InferRequestType<typeof client.user.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
) {
  return ['user', '/user/:username', args] as const
}

export function getUserUsernameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameQueryKey>
  >({
    queryKey: getUserUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUserUsernameTokenKindQueryKey(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
) {
  return ['user', '/user/:username/token/:kind', args] as const
}

export function getUserUsernameTokenKindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUsernameTokenKindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':username'].token[':kind'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUserUsernameTokenKindQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserUsernameTokenKindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserUsernameTokenKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserUsernameTokenKindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
