import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssignmentKey() {
  return ['assignment'] as const
}

export function getFederationKey() {
  return ['federation'] as const
}

export function getLogoutXAmzSsoBearerTokenKey() {
  return ['logout#x-amz-sso_bearer_token'] as const
}

export function getGetFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenKey(
  args: InferRequestType<
    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'federation',
    '/federation/credentials#role_name&account_id&x-amz-sso_bearer_token',
    keyArgs,
  ] as const
}

export function useGetFederationCredentialsRoleNameAccountIdXAmzSsoBearerToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
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
        ? getGetFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenKey(args)
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
                (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
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
          client.federation['credentials#role_name&account_id&x-amz-sso_bearer_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFederationCredentialsRoleNameAccountIdXAmzSsoBearerToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
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
        ? getGetFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenKey(args)
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
                (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
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
          client.federation['credentials#role_name&account_id&x-amz-sso_bearer_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssignmentRolesXAmzSsoBearerTokenAccountIdKey(
  args: InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['assignment', '/assignment/roles#x-amz-sso_bearer_token&account_id', keyArgs] as const
}

export function useGetAssignmentRolesXAmzSsoBearerTokenAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
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
        ? getGetAssignmentRolesXAmzSsoBearerTokenAccountIdKey(args)
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
                (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
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
          client.assignment['roles#x-amz-sso_bearer_token&account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssignmentRolesXAmzSsoBearerTokenAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
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
        ? getGetAssignmentRolesXAmzSsoBearerTokenAccountIdKey(args)
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
                (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
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
          client.assignment['roles#x-amz-sso_bearer_token&account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssignmentAccountsXAmzSsoBearerTokenKey(
  args: InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assignment', '/assignment/accounts#x-amz-sso_bearer_token', keyArgs] as const
}

export function useGetAssignmentAccountsXAmzSsoBearerToken<TError = unknown>(
  args: InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
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
        ? getGetAssignmentAccountsXAmzSsoBearerTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assignment['accounts#x-amz-sso_bearer_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssignmentAccountsXAmzSsoBearerToken<TError = unknown>(
  args: InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
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
        ? getGetAssignmentAccountsXAmzSsoBearerTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assignment['accounts#x-amz-sso_bearer_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLogoutXAmzSsoBearerTokenKey() {
  return ['logout#x-amz-sso_bearer_token', '/logout#x-amz-sso_bearer_token', 'POST'] as const
}

export function usePostLogoutXAmzSsoBearerToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogoutXAmzSsoBearerTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']> },
      ) => parseResponse(client['logout#x-amz-sso_bearer_token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
