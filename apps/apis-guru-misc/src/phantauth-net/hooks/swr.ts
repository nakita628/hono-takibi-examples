import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostClientKey() {
  return ['client', '/client', 'POST'] as const
}

export function usePostClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.client.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.client.$post> }) =>
        parseResponse(client.client.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientClientIdKey(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
) {
  return ['client', '/client/:client_id', args] as const
}

export function useGetClientClientId<TError = unknown>(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClientClientIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientClientId<TError = unknown>(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClientClientIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.client)[':client_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientClientIdTokenKindKey(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
) {
  return ['client', '/client/:client_id/token/:kind', args] as const
}

export function useGetClientClientIdTokenKind<TError = unknown>(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
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
        ? getGetClientClientIdTokenKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.client[':client_id'].token[':kind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientClientIdTokenKind<TError = unknown>(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
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
        ? getGetClientClientIdTokenKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client)[':client_id']['token'][':kind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.client[':client_id'].token[':kind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainDomainnameKey(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
) {
  return ['domain', '/domain/:domainname', args] as const
}

export function useGetDomainDomainname<TError = unknown>(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
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
        ? getGetDomainDomainnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domain[':domainname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainDomainname<TError = unknown>(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
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
        ? getGetDomainDomainnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domain)[':domainname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domain[':domainname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFleetFleetnameKey(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
) {
  return ['fleet', '/fleet/:fleetname', args] as const
}

export function useGetFleetFleetname<TError = unknown>(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFleetFleetnameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fleet[':fleetname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFleetFleetname<TError = unknown>(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFleetFleetnameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fleet)[':fleetname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fleet[':fleetname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTeamnameKey(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
) {
  return ['team', '/team/:teamname', args] as const
}

export function useGetTeamTeamname<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamTeamnameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':teamname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTeamname<TError = unknown>(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamTeamnameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team[':teamname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTenantTenantnameKey(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
) {
  return ['tenant', '/tenant/:tenantname', args] as const
}

export function useGetTenantTenantname<TError = unknown>(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
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
        ? getGetTenantTenantnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenant[':tenantname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantTenantname<TError = unknown>(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
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
        ? getGetTenantTenantnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tenant)[':tenantname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenant[':tenantname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserKey() {
  return ['user', '/user', 'POST'] as const
}

export function usePostUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$post> }) =>
        parseResponse(client.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUsernameKey(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
) {
  return ['user', '/user/:username', args] as const
}

export function useGetUserUsername<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUsernameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUsername<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUsernameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUsernameTokenKindKey(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
) {
  return ['user', '/user/:username/token/:kind', args] as const
}

export function useGetUserUsernameTokenKind<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
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
        ? getGetUserUsernameTokenKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':username'].token[':kind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUsernameTokenKind<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
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
        ? getGetUserUsernameTokenKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':username']['token'][':kind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':username'].token[':kind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
