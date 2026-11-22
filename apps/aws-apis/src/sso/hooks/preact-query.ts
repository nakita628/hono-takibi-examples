import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useFederationCredentialsRoleNameAccountIdXAmzSsoBearerToken<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFederationCredentialsRoleNameAccountIdXAmzSsoBearerToken<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAssignmentRolesXAmzSsoBearerTokenAccountId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssignmentRolesXAmzSsoBearerTokenAccountId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAssignmentAccountsXAmzSsoBearerToken<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAssignmentAccountsXAmzSsoBearerTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssignmentAccountsXAmzSsoBearerToken<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAssignmentAccountsXAmzSsoBearerTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostLogoutXAmzSsoBearerToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogoutXAmzSsoBearerTokenMutationOptions<TError, TOnMutateResult>(
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
