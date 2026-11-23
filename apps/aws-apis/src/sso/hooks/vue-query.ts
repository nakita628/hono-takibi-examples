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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'federation',
    '/federation/credentials#role_name&account_id&x-amz-sso_bearer_token',
    keyArgs,
  ] as const
}

export function getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.federation['credentials#role_name&account_id&x-amz-sso_bearer_token'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
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
                    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
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
                    (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey>
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
              (typeof client.federation)['credentials#role_name&account_id&x-amz-sso_bearer_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.federation['credentials#role_name&account_id&x-amz-sso_bearer_token'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assignment', '/assignment/roles#x-amz-sso_bearer_token&account_id', keyArgs] as const
}

export function getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assignment['roles#x-amz-sso_bearer_token&account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']>
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
                    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
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
                    (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey>
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
              (typeof client.assignment)['roles#x-amz-sso_bearer_token&account_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssignmentRolesXAmzSsoBearerTokenAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assignment['roles#x-amz-sso_bearer_token&account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssignmentAccountsXAmzSsoBearerTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assignment', '/assignment/accounts#x-amz-sso_bearer_token', keyArgs] as const
}

export function getAssignmentAccountsXAmzSsoBearerTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssignmentAccountsXAmzSsoBearerTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assignment['accounts#x-amz-sso_bearer_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssignmentAccountsXAmzSsoBearerTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.assignment)['accounts#x-amz-sso_bearer_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssignmentAccountsXAmzSsoBearerTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssignmentAccountsXAmzSsoBearerTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assignment['accounts#x-amz-sso_bearer_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
