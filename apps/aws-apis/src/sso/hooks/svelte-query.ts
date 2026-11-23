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

export function getAssignmentKey() {
  return ['assignment'] as const
}

export function getFederationKey() {
  return ['federation'] as const
}

export function getLogoutXAmzSsoBearerTokenKey() {
  return ['logout#x-amz-sso_bearer_token'] as const
}

export function getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey(
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

export function getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey>
  >({
    queryKey: getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.federation['credentials#role_name&account_id&x-amz-sso_bearer_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFederationCredentialsRoleNameAccountIdXAmzSsoBearerToken<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey>
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
      ...getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['assignment', '/assignment/roles#x-amz-sso_bearer_token&account_id', keyArgs] as const
}

export function getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey>
  >({
    queryKey: getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assignment['roles#x-amz-sso_bearer_token&account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssignmentRolesXAmzSsoBearerTokenAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey>
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
      ...getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAssignmentAccountsXAmzSsoBearerTokenQueryKey(
  args: InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assignment', '/assignment/accounts#x-amz-sso_bearer_token', keyArgs] as const
}

export function getAssignmentAccountsXAmzSsoBearerTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssignmentAccountsXAmzSsoBearerTokenQueryKey>
  >({
    queryKey: getAssignmentAccountsXAmzSsoBearerTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assignment['accounts#x-amz-sso_bearer_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssignmentAccountsXAmzSsoBearerToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssignmentAccountsXAmzSsoBearerTokenQueryKey>
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
      ...getAssignmentAccountsXAmzSsoBearerTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostLogoutXAmzSsoBearerTokenMutationKey() {
  return ['logout#x-amz-sso_bearer_token', '/logout#x-amz-sso_bearer_token', 'POST'] as const
}

export function getPostLogoutXAmzSsoBearerTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLogoutXAmzSsoBearerTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>,
    ) {
      return parseResponse(client['logout#x-amz-sso_bearer_token'].$post(args, options))
    },
  })
}

export function createPostLogoutXAmzSsoBearerToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['logout#x-amz-sso_bearer_token']['$post']>,
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
    const mutationDefaults = getPostLogoutXAmzSsoBearerTokenMutationOptions<
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
