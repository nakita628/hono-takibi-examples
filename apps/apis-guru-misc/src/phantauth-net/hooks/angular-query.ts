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

export function injectPostClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.$post>>>>>,
        TError,
        InferRequestType<typeof client.client.$post>,
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
    const mutationDefaults = getPostClientMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectClientClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClientClientIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectClientClientIdTokenKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClientClientIdTokenKindQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDomainDomainname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainDomainnameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFleetFleetname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFleetFleetnameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTeamTeamname<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamTeamnameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTenantTenantname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTenantTenantnameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
        TError,
        InferRequestType<typeof client.user.$post>,
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
    const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUserUsernameTokenKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUsernameTokenKindQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
