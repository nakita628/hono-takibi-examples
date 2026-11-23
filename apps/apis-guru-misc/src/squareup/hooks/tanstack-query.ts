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

export function getMobileKey() {
  return ['mobile'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostMobileAuthorizationCodeMutationKey() {
  return ['mobile', '/mobile/authorization-code', 'POST'] as const
}

export function getPostMobileAuthorizationCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mobile)['authorization-code']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mobile)['authorization-code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMobileAuthorizationCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mobile)['authorization-code']['$post']>,
    ) {
      return parseResponse(client.mobile['authorization-code'].$post(args, options))
    },
  })
}

export function usePostMobileAuthorizationCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mobile)['authorization-code']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mobile)['authorization-code']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMobileAuthorizationCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth2ClientsClientIdAccessTokenRenewMutationKey() {
  return ['oauth2', '/oauth2/clients/:client_id/access-token/renew', 'POST'] as const
}

export function getPostOauth2ClientsClientIdAccessTokenRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2ClientsClientIdAccessTokenRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
      >,
    ) {
      return parseResponse(
        client.oauth2.clients[':client_id']['access-token'].renew.$post(args, options),
      )
    },
  })
}

export function usePostOauth2ClientsClientIdAccessTokenRenew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2ClientsClientIdAccessTokenRenewMutationOptions<
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

export function getPostOauth2RevokeMutationKey() {
  return ['oauth2', '/oauth2/revoke', 'POST'] as const
}

export function getPostOauth2RevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2RevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.revoke.$post>) {
      return parseResponse(client.oauth2.revoke.$post(args, options))
    },
  })
}

export function usePostOauth2Revoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2RevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth2TokenMutationKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function getPostOauth2TokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.token.$post>) {
      return parseResponse(client.oauth2.token.$post(args, options))
    },
  })
}

export function usePostOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1MeEmployeesQueryKey(
  args: InferRequestType<typeof client.v1.me.employees.$get>,
) {
  return ['v1', '/v1/me/employees', args] as const
}

export function getV1MeEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.me.employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeEmployeesQueryKey>
  >({
    queryKey: getV1MeEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.me.employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1MeEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.me.employees.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MeEmployeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MeEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.me.employees.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MeEmployeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1MeEmployeesMutationKey() {
  return ['v1', '/v1/me/employees', 'POST'] as const
}

export function getPostV1MeEmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.me.employees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MeEmployeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.me.employees.$post>) {
      return parseResponse(client.v1.me.employees.$post(args, options))
    },
  })
}

export function usePostV1MeEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.me.employees.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1MeEmployeesMutationOptions<TError, TOnMutateResult>(
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

export function getV1MeEmployeesEmployeeIdQueryKey(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
) {
  return ['v1', '/v1/me/employees/:employee_id', args] as const
}

export function getV1MeEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getV1MeEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.me.employees[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1MeEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeEmployeesEmployeeIdQueryKey>
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
      ...getV1MeEmployeesEmployeeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1MeEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeEmployeesEmployeeIdQueryKey>
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
      ...getV1MeEmployeesEmployeeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1MeEmployeesEmployeeIdMutationKey() {
  return ['v1', '/v1/me/employees/:employee_id', 'PUT'] as const
}

export function getPutV1MeEmployeesEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MeEmployeesEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$put']>,
    ) {
      return parseResponse(client.v1.me.employees[':employee_id'].$put(args, options))
    },
  })
}

export function usePutV1MeEmployeesEmployeeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1MeEmployeesEmployeeIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1MeRolesQueryKey(args: InferRequestType<typeof client.v1.me.roles.$get>) {
  return ['v1', '/v1/me/roles', args] as const
}

export function getV1MeRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.me.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MeRolesQueryKey>
  >({
    queryKey: getV1MeRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.me.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1MeRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.me.roles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MeRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MeRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.me.roles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MeRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1MeRolesMutationKey() {
  return ['v1', '/v1/me/roles', 'POST'] as const
}

export function getPostV1MeRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.me.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MeRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.me.roles.$post>) {
      return parseResponse(client.v1.me.roles.$post(args, options))
    },
  })
}

export function usePostV1MeRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.me.roles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1MeRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1MeRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
) {
  return ['v1', '/v1/me/roles/:role_id', args] as const
}

export function getV1MeRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeRolesRoleIdQueryKey>
  >({
    queryKey: getV1MeRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.me.roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1MeRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeRolesRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MeRolesRoleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MeRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeRolesRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MeRolesRoleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1MeRolesRoleIdMutationKey() {
  return ['v1', '/v1/me/roles/:role_id', 'PUT'] as const
}

export function getPutV1MeRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.me.roles)[':role_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MeRolesRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$put']>) {
      return parseResponse(client.v1.me.roles[':role_id'].$put(args, options))
    },
  })
}

export function usePutV1MeRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.me.roles)[':role_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1MeRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1LocationIdOrdersQueryKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
) {
  return ['v1', '/v1/:location_id/orders', args] as const
}

export function getV1LocationIdOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdOrdersQueryKey>
  >({
    queryKey: getV1LocationIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocationIdOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LocationIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocationIdOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LocationIdOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
) {
  return ['v1', '/v1/:location_id/orders/:order_id', args] as const
}

export function getV1LocationIdOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdOrdersOrderIdQueryKey>
  >({
    queryKey: getV1LocationIdOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].orders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdOrdersOrderIdQueryKey>
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
      ...getV1LocationIdOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1LocationIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdOrdersOrderIdQueryKey>
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
      ...getV1LocationIdOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1LocationIdOrdersOrderIdMutationKey() {
  return ['v1', '/v1/:location_id/orders/:order_id', 'PUT'] as const
}

export function getPutV1LocationIdOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1LocationIdOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>,
    ) {
      return parseResponse(client.v1[':location_id'].orders[':order_id'].$put(args, options))
    },
  })
}

export function usePutV1LocationIdOrdersOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1LocationIdOrdersOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1LocationIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
) {
  return ['v1', '/v1/:location_id/payments', args] as const
}

export function getV1LocationIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdPaymentsQueryKey>
  >({
    queryKey: getV1LocationIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocationIdPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LocationIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocationIdPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LocationIdPaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
) {
  return ['v1', '/v1/:location_id/payments/:payment_id', args] as const
}

export function getV1LocationIdPaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdPaymentsPaymentIdQueryKey>
  >({
    queryKey: getV1LocationIdPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].payments[':payment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdPaymentsPaymentIdQueryKey>
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
      ...getV1LocationIdPaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1LocationIdPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdPaymentsPaymentIdQueryKey>
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
      ...getV1LocationIdPaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1LocationIdRefundsQueryKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
) {
  return ['v1', '/v1/:location_id/refunds', args] as const
}

export function getV1LocationIdRefundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdRefundsQueryKey>
  >({
    queryKey: getV1LocationIdRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].refunds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdRefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocationIdRefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LocationIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdRefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocationIdRefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1LocationIdRefundsMutationKey() {
  return ['v1', '/v1/:location_id/refunds', 'POST'] as const
}

export function getPostV1LocationIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':location_id']['refunds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LocationIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$post']>,
    ) {
      return parseResponse(client.v1[':location_id'].refunds.$post(args, options))
    },
  })
}

export function usePostV1LocationIdRefunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':location_id']['refunds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1LocationIdRefundsMutationOptions<TError, TOnMutateResult>(
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

export function getV1LocationIdSettlementsQueryKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
) {
  return ['v1', '/v1/:location_id/settlements', args] as const
}

export function getV1LocationIdSettlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdSettlementsQueryKey>
  >({
    queryKey: getV1LocationIdSettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].settlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdSettlementsQueryKey>
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
      ...getV1LocationIdSettlementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1LocationIdSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdSettlementsQueryKey>
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
      ...getV1LocationIdSettlementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1LocationIdSettlementsSettlementIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
) {
  return ['v1', '/v1/:location_id/settlements/:settlement_id', args] as const
}

export function getV1LocationIdSettlementsSettlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdSettlementsSettlementIdQueryKey>
  >({
    queryKey: getV1LocationIdSettlementsSettlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location_id'].settlements[':settlement_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationIdSettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdSettlementsSettlementIdQueryKey>
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
      ...getV1LocationIdSettlementsSettlementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1LocationIdSettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationIdSettlementsSettlementIdQueryKey>
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
      ...getV1LocationIdSettlementsSettlementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ApplePayDomainsMutationKey() {
  return ['v2', '/v2/apple-pay/domains', 'POST'] as const
}

export function getPostV2ApplePayDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['apple-pay']['domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['apple-pay']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApplePayDomainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['apple-pay']['domains']['$post']>) {
      return parseResponse(client.v2['apple-pay'].domains.$post(args, options))
    },
  })
}

export function usePostV2ApplePayDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['apple-pay']['domains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['apple-pay']['domains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApplePayDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getV2BankAccountsQueryKey(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
) {
  return ['v2', '/v2/bank-accounts', args] as const
}

export function getV2BankAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BankAccountsQueryKey>
  >({
    queryKey: getV2BankAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['bank-accounts'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2BankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BankAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2BankAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2BankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BankAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2BankAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2BankAccountsByV1IdV1BankAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
) {
  return ['v2', '/v2/bank-accounts/by-v1-id/:v1_bank_account_id', args] as const
}

export function getV2BankAccountsByV1IdV1BankAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BankAccountsByV1IdV1BankAccountIdQueryKey>
  >({
    queryKey: getV2BankAccountsByV1IdV1BankAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['bank-accounts']['by-v1-id'][':v1_bank_account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BankAccountsByV1IdV1BankAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BankAccountsByV1IdV1BankAccountIdQueryKey>
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
      ...getV2BankAccountsByV1IdV1BankAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BankAccountsByV1IdV1BankAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BankAccountsByV1IdV1BankAccountIdQueryKey>
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
      ...getV2BankAccountsByV1IdV1BankAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BankAccountsBankAccountIdQueryKey(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
) {
  return ['v2', '/v2/bank-accounts/:bank_account_id', args] as const
}

export function getV2BankAccountsBankAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BankAccountsBankAccountIdQueryKey>
  >({
    queryKey: getV2BankAccountsBankAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['bank-accounts'][':bank_account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BankAccountsBankAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BankAccountsBankAccountIdQueryKey>
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
      ...getV2BankAccountsBankAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BankAccountsBankAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BankAccountsBankAccountIdQueryKey>
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
      ...getV2BankAccountsBankAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2BookingsMutationKey() {
  return ['v2', '/v2/bookings', 'POST'] as const
}

export function getPostV2BookingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.bookings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bookings.$post>) {
      return parseResponse(client.v2.bookings.$post(args, options))
    },
  })
}

export function usePostV2Bookings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.bookings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BookingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2BookingsAvailabilitySearchMutationKey() {
  return ['v2', '/v2/bookings/availability/search', 'POST'] as const
}

export function getPostV2BookingsAvailabilitySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bookings.availability.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bookings.availability.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsAvailabilitySearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bookings.availability.search.$post>) {
      return parseResponse(client.v2.bookings.availability.search.$post(args, options))
    },
  })
}

export function usePostV2BookingsAvailabilitySearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bookings.availability.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bookings.availability.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BookingsAvailabilitySearchMutationOptions<
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

export function getV2BookingsBusinessBookingProfileQueryKey() {
  return ['v2', '/v2/bookings/business-booking-profile'] as const
}

export function getV2BookingsBusinessBookingProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBusinessBookingProfileQueryKey>
  >({
    queryKey: getV2BookingsBusinessBookingProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings['business-booking-profile'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BookingsBusinessBookingProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBusinessBookingProfileQueryKey>
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
      ...getV2BookingsBusinessBookingProfileQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BookingsBusinessBookingProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBusinessBookingProfileQueryKey>
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
      ...getV2BookingsBusinessBookingProfileQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BookingsTeamMemberBookingProfilesQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
) {
  return ['v2', '/v2/bookings/team-member-booking-profiles', args] as const
}

export function getV2BookingsTeamMemberBookingProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsTeamMemberBookingProfilesQueryKey>
  >({
    queryKey: getV2BookingsTeamMemberBookingProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings['team-member-booking-profiles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BookingsTeamMemberBookingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsTeamMemberBookingProfilesQueryKey>
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
      ...getV2BookingsTeamMemberBookingProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BookingsTeamMemberBookingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsTeamMemberBookingProfilesQueryKey>
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
      ...getV2BookingsTeamMemberBookingProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
) {
  return ['v2', '/v2/bookings/team-member-booking-profiles/:team_member_id', args] as const
}

export function getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey>
  >({
    queryKey: getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings['team-member-booking-profiles'][':team_member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BookingsTeamMemberBookingProfilesTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey>
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
      ...getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BookingsTeamMemberBookingProfilesTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey>
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
      ...getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BookingsBookingIdQueryKey(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
) {
  return ['v2', '/v2/bookings/:booking_id', args] as const
}

export function getV2BookingsBookingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingIdQueryKey>
  >({
    queryKey: getV2BookingsBookingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bookings[':booking_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BookingsBookingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2BookingsBookingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2BookingsBookingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BookingsBookingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2BookingsBookingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2BookingsBookingIdMutationKey() {
  return ['v2', '/v2/bookings/:booking_id', 'PUT'] as const
}

export function getPutV2BookingsBookingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':booking_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2BookingsBookingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$put']>) {
      return parseResponse(client.v2.bookings[':booking_id'].$put(args, options))
    },
  })
}

export function usePutV2BookingsBookingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':booking_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2BookingsBookingIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2BookingsBookingIdCancelMutationKey() {
  return ['v2', '/v2/bookings/:booking_id/cancel', 'POST'] as const
}

export function getPostV2BookingsBookingIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BookingsBookingIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.v2.bookings[':booking_id'].cancel.$post(args, options))
    },
  })
}

export function usePostV2BookingsBookingIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BookingsBookingIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV2CardsQueryKey(args: InferRequestType<typeof client.v2.cards.$get>) {
  return ['v2', '/v2/cards', args] as const
}

export function getV2CardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CardsQueryKey>
  >({
    queryKey: getV2CardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.cards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2CardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.cards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2CardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2CardsMutationKey() {
  return ['v2', '/v2/cards', 'POST'] as const
}

export function getPostV2CardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.cards.$post>) {
      return parseResponse(client.v2.cards.$post(args, options))
    },
  })
}

export function usePostV2Cards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.cards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CardsCardIdQueryKey(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
) {
  return ['v2', '/v2/cards/:card_id', args] as const
}

export function getV2CardsCardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CardsCardIdQueryKey>
  >({
    queryKey: getV2CardsCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cards[':card_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2CardsCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CardsCardIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CardsCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CardsCardIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2CardsCardIdDisableMutationKey() {
  return ['v2', '/v2/cards/:card_id/disable', 'POST'] as const
}

export function getPostV2CardsCardIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.cards)[':card_id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CardsCardIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.cards)[':card_id']['disable']['$post']>,
    ) {
      return parseResponse(client.v2.cards[':card_id'].disable.$post(args, options))
    },
  })
}

export function usePostV2CardsCardIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.cards)[':card_id']['disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CardsCardIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getV2CashDrawersShiftsQueryKey(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
) {
  return ['v2', '/v2/cash-drawers/shifts', args] as const
}

export function getV2CashDrawersShiftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CashDrawersShiftsQueryKey>
  >({
    queryKey: getV2CashDrawersShiftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['cash-drawers'].shifts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CashDrawersShifts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CashDrawersShiftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CashDrawersShiftsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CashDrawersShifts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CashDrawersShiftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CashDrawersShiftsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CashDrawersShiftsShiftIdQueryKey(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
) {
  return ['v2', '/v2/cash-drawers/shifts/:shift_id', args] as const
}

export function getV2CashDrawersShiftsShiftIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CashDrawersShiftsShiftIdQueryKey>
  >({
    queryKey: getV2CashDrawersShiftsShiftIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['cash-drawers'].shifts[':shift_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CashDrawersShiftsShiftId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CashDrawersShiftsShiftIdQueryKey>
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
      ...getV2CashDrawersShiftsShiftIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CashDrawersShiftsShiftId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CashDrawersShiftsShiftIdQueryKey>
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
      ...getV2CashDrawersShiftsShiftIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CashDrawersShiftsShiftIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
) {
  return ['v2', '/v2/cash-drawers/shifts/:shift_id/events', args] as const
}

export function getV2CashDrawersShiftsShiftIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CashDrawersShiftsShiftIdEventsQueryKey>
  >({
    queryKey: getV2CashDrawersShiftsShiftIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['cash-drawers'].shifts[':shift_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CashDrawersShiftsShiftIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CashDrawersShiftsShiftIdEventsQueryKey>
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
      ...getV2CashDrawersShiftsShiftIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CashDrawersShiftsShiftIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CashDrawersShiftsShiftIdEventsQueryKey>
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
      ...getV2CashDrawersShiftsShiftIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2CatalogBatchDeleteMutationKey() {
  return ['v2', '/v2/catalog/batch-delete', 'POST'] as const
}

export function getPostV2CatalogBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['batch-delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog)['batch-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.catalog)['batch-delete']['$post']>) {
      return parseResponse(client.v2.catalog['batch-delete'].$post(args, options))
    },
  })
}

export function usePostV2CatalogBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog)['batch-delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog)['batch-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2CatalogBatchRetrieveMutationKey() {
  return ['v2', '/v2/catalog/batch-retrieve', 'POST'] as const
}

export function getPostV2CatalogBatchRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog)['batch-retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogBatchRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog)['batch-retrieve']['$post']>,
    ) {
      return parseResponse(client.v2.catalog['batch-retrieve'].$post(args, options))
    },
  })
}

export function usePostV2CatalogBatchRetrieve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog)['batch-retrieve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog)['batch-retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogBatchRetrieveMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2CatalogBatchUpsertMutationKey() {
  return ['v2', '/v2/catalog/batch-upsert', 'POST'] as const
}

export function getPostV2CatalogBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['batch-upsert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog)['batch-upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogBatchUpsertMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.catalog)['batch-upsert']['$post']>) {
      return parseResponse(client.v2.catalog['batch-upsert'].$post(args, options))
    },
  })
}

export function usePostV2CatalogBatchUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog)['batch-upsert']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog)['batch-upsert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogBatchUpsertMutationOptions<TError, TOnMutateResult>(
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

export function getV2CatalogInfoQueryKey() {
  return ['v2', '/v2/catalog/info'] as const
}

export function getV2CatalogInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogInfoQueryKey>
  >({
    queryKey: getV2CatalogInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.catalog.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2CatalogInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CatalogInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CatalogInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CatalogInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CatalogListQueryKey(
  args: InferRequestType<typeof client.v2.catalog.list.$get>,
) {
  return ['v2', '/v2/catalog/list', args] as const
}

export function getV2CatalogListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.catalog.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogListQueryKey>
  >({
    queryKey: getV2CatalogListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.catalog.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2CatalogList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.catalog.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CatalogListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CatalogList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.catalog.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CatalogListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2CatalogObjectMutationKey() {
  return ['v2', '/v2/catalog/object', 'POST'] as const
}

export function getPostV2CatalogObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.object.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.catalog.object.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.catalog.object.$post>) {
      return parseResponse(client.v2.catalog.object.$post(args, options))
    },
  })
}

export function usePostV2CatalogObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.object.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.catalog.object.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogObjectMutationOptions<TError, TOnMutateResult>(
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

export function getV2CatalogObjectObjectIdQueryKey(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
) {
  return ['v2', '/v2/catalog/object/:object_id', args] as const
}

export function getV2CatalogObjectObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogObjectObjectIdQueryKey>
  >({
    queryKey: getV2CatalogObjectObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.catalog.object[':object_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CatalogObjectObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogObjectObjectIdQueryKey>
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
      ...getV2CatalogObjectObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CatalogObjectObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogObjectObjectIdQueryKey>
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
      ...getV2CatalogObjectObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2CatalogObjectObjectIdMutationKey() {
  return ['v2', '/v2/catalog/object/:object_id', 'DELETE'] as const
}

export function getDeleteV2CatalogObjectObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CatalogObjectObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$delete']>,
    ) {
      return parseResponse(client.v2.catalog.object[':object_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CatalogObjectObjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CatalogObjectObjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2CatalogSearchMutationKey() {
  return ['v2', '/v2/catalog/search', 'POST'] as const
}

export function getPostV2CatalogSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.catalog.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.catalog.search.$post>) {
      return parseResponse(client.v2.catalog.search.$post(args, options))
    },
  })
}

export function usePostV2CatalogSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.catalog.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2CatalogSearchCatalogItemsMutationKey() {
  return ['v2', '/v2/catalog/search-catalog-items', 'POST'] as const
}

export function getPostV2CatalogSearchCatalogItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['search-catalog-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog)['search-catalog-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogSearchCatalogItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog)['search-catalog-items']['$post']>,
    ) {
      return parseResponse(client.v2.catalog['search-catalog-items'].$post(args, options))
    },
  })
}

export function usePostV2CatalogSearchCatalogItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog)['search-catalog-items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog)['search-catalog-items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogSearchCatalogItemsMutationOptions<
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

export function getPostV2CatalogUpdateItemModifierListsMutationKey() {
  return ['v2', '/v2/catalog/update-item-modifier-lists', 'POST'] as const
}

export function getPostV2CatalogUpdateItemModifierListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogUpdateItemModifierListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>,
    ) {
      return parseResponse(client.v2.catalog['update-item-modifier-lists'].$post(args, options))
    },
  })
}

export function usePostV2CatalogUpdateItemModifierLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogUpdateItemModifierListsMutationOptions<
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

export function getPostV2CatalogUpdateItemTaxesMutationKey() {
  return ['v2', '/v2/catalog/update-item-taxes', 'POST'] as const
}

export function getPostV2CatalogUpdateItemTaxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['update-item-taxes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog)['update-item-taxes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogUpdateItemTaxesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog)['update-item-taxes']['$post']>,
    ) {
      return parseResponse(client.v2.catalog['update-item-taxes'].$post(args, options))
    },
  })
}

export function usePostV2CatalogUpdateItemTaxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.catalog)['update-item-taxes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.catalog)['update-item-taxes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CatalogUpdateItemTaxesMutationOptions<TError, TOnMutateResult>(
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

export function getV2CustomersQueryKey(args: InferRequestType<typeof client.v2.customers.$get>) {
  return ['v2', '/v2/customers', args] as const
}

export function getV2CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CustomersQueryKey>
  >({
    queryKey: getV2CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2CustomersMutationKey() {
  return ['v2', '/v2/customers', 'POST'] as const
}

export function getPostV2CustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.customers.$post>) {
      return parseResponse(client.v2.customers.$post(args, options))
    },
  })
}

export function usePostV2Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.customers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CustomersGroupsQueryKey(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
) {
  return ['v2', '/v2/customers/groups', args] as const
}

export function getV2CustomersGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.customers.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersGroupsQueryKey>
  >({
    queryKey: getV2CustomersGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2CustomersGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CustomersGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CustomersGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CustomersGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2CustomersGroupsMutationKey() {
  return ['v2', '/v2/customers/groups', 'POST'] as const
}

export function getPostV2CustomersGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.customers.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.customers.groups.$post>) {
      return parseResponse(client.v2.customers.groups.$post(args, options))
    },
  })
}

export function usePostV2CustomersGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.customers.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getV2CustomersGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
) {
  return ['v2', '/v2/customers/groups/:group_id', args] as const
}

export function getV2CustomersGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersGroupsGroupIdQueryKey>
  >({
    queryKey: getV2CustomersGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersGroupsGroupIdQueryKey>
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
      ...getV2CustomersGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersGroupsGroupIdQueryKey>
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
      ...getV2CustomersGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2CustomersGroupsGroupIdMutationKey() {
  return ['v2', '/v2/customers/groups/:group_id', 'PUT'] as const
}

export function getPutV2CustomersGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomersGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$put']>,
    ) {
      return parseResponse(client.v2.customers.groups[':group_id'].$put(args, options))
    },
  })
}

export function usePutV2CustomersGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2CustomersGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2CustomersGroupsGroupIdMutationKey() {
  return ['v2', '/v2/customers/groups/:group_id', 'DELETE'] as const
}

export function getDeleteV2CustomersGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$delete']>,
    ) {
      return parseResponse(client.v2.customers.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CustomersGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomersGroupsGroupIdMutationOptions<
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

export function getPostV2CustomersSearchMutationKey() {
  return ['v2', '/v2/customers/search', 'POST'] as const
}

export function getPostV2CustomersSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.customers.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.customers.search.$post>) {
      return parseResponse(client.v2.customers.search.$post(args, options))
    },
  })
}

export function usePostV2CustomersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.customers.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2CustomersSegmentsQueryKey(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
) {
  return ['v2', '/v2/customers/segments', args] as const
}

export function getV2CustomersSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersSegmentsQueryKey>
  >({
    queryKey: getV2CustomersSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2CustomersSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CustomersSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CustomersSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CustomersSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CustomersSegmentsSegmentIdQueryKey(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
) {
  return ['v2', '/v2/customers/segments/:segment_id', args] as const
}

export function getV2CustomersSegmentsSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersSegmentsSegmentIdQueryKey>
  >({
    queryKey: getV2CustomersSegmentsSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.segments[':segment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersSegmentsSegmentIdQueryKey>
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
      ...getV2CustomersSegmentsSegmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersSegmentsSegmentIdQueryKey>
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
      ...getV2CustomersSegmentsSegmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
) {
  return ['v2', '/v2/customers/:customer_id', args] as const
}

export function getV2CustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
      ...getV2CustomersCustomerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
      ...getV2CustomersCustomerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2CustomersCustomerIdMutationKey() {
  return ['v2', '/v2/customers/:customer_id', 'PUT'] as const
}

export function getPutV2CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$put']>) {
      return parseResponse(client.v2.customers[':customer_id'].$put(args, options))
    },
  })
}

export function usePutV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customer_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2CustomersCustomerIdMutationKey() {
  return ['v2', '/v2/customers/:customer_id', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$delete']>,
    ) {
      return parseResponse(client.v2.customers[':customer_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customer_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2CustomersCustomerIdCardsMutationKey() {
  return ['v2', '/v2/customers/:customer_id/cards', 'POST'] as const
}

export function getPostV2CustomersCustomerIdCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>,
    ) {
      return parseResponse(client.v2.customers[':customer_id'].cards.$post(args, options))
    },
  })
}

export function usePostV2CustomersCustomerIdCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersCustomerIdCardsMutationOptions<
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

export function getDeleteV2CustomersCustomerIdCardsCardIdMutationKey() {
  return ['v2', '/v2/customers/:customer_id/cards/:card_id', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdCardsCardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customer_id'].cards[':card_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2CustomersCustomerIdCardsCardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomersCustomerIdCardsCardIdMutationOptions<
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

export function getPutV2CustomersCustomerIdGroupsGroupIdMutationKey() {
  return ['v2', '/v2/customers/:customer_id/groups/:group_id', 'PUT'] as const
}

export function getPutV2CustomersCustomerIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomersCustomerIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customer_id'].groups[':group_id'].$put(args, options),
      )
    },
  })
}

export function usePutV2CustomersCustomerIdGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2CustomersCustomerIdGroupsGroupIdMutationOptions<
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

export function getDeleteV2CustomersCustomerIdGroupsGroupIdMutationKey() {
  return ['v2', '/v2/customers/:customer_id/groups/:group_id', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customer_id'].groups[':group_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2CustomersCustomerIdGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomersCustomerIdGroupsGroupIdMutationOptions<
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

export function getV2DevicesCodesQueryKey(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
) {
  return ['v2', '/v2/devices/codes', args] as const
}

export function getV2DevicesCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.devices.codes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DevicesCodesQueryKey>
  >({
    queryKey: getV2DevicesCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.devices.codes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2DevicesCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DevicesCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2DevicesCodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2DevicesCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DevicesCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2DevicesCodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2DevicesCodesMutationKey() {
  return ['v2', '/v2/devices/codes', 'POST'] as const
}

export function getPostV2DevicesCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.devices.codes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DevicesCodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.devices.codes.$post>) {
      return parseResponse(client.v2.devices.codes.$post(args, options))
    },
  })
}

export function usePostV2DevicesCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.devices.codes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DevicesCodesMutationOptions<TError, TOnMutateResult>(
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

export function getV2DevicesCodesIdQueryKey(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
) {
  return ['v2', '/v2/devices/codes/:id', args] as const
}

export function getV2DevicesCodesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DevicesCodesIdQueryKey>
  >({
    queryKey: getV2DevicesCodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.devices.codes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DevicesCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DevicesCodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2DevicesCodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2DevicesCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DevicesCodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2DevicesCodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2DisputesQueryKey(args: InferRequestType<typeof client.v2.disputes.$get>) {
  return ['v2', '/v2/disputes', args] as const
}

export function getV2DisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DisputesQueryKey>
  >({
    queryKey: getV2DisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2DisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2DisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2DisputesDisputeIdQueryKey(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
) {
  return ['v2', '/v2/disputes/:dispute_id', args] as const
}

export function getV2DisputesDisputeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeIdQueryKey>
  >({
    queryKey: getV2DisputesDisputeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DisputesDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesDisputeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2DisputesDisputeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2DisputesDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesDisputeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2DisputesDisputeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2DisputesDisputeIdAcceptMutationKey() {
  return ['v2', '/v2/disputes/:dispute_id/accept', 'POST'] as const
}

export function getPostV2DisputesDisputeIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DisputesDisputeIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>,
    ) {
      return parseResponse(client.v2.disputes[':dispute_id'].accept.$post(args, options))
    },
  })
}

export function usePostV2DisputesDisputeIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DisputesDisputeIdAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getV2DisputesDisputeIdEvidenceQueryKey(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
) {
  return ['v2', '/v2/disputes/:dispute_id/evidence', args] as const
}

export function getV2DisputesDisputeIdEvidenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeIdEvidenceQueryKey>
  >({
    queryKey: getV2DisputesDisputeIdEvidenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].evidence.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DisputesDisputeIdEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesDisputeIdEvidenceQueryKey>
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
      ...getV2DisputesDisputeIdEvidenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DisputesDisputeIdEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesDisputeIdEvidenceQueryKey>
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
      ...getV2DisputesDisputeIdEvidenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2DisputesDisputeIdEvidenceTextMutationKey() {
  return ['v2', '/v2/disputes/:dispute_id/evidence-text', 'POST'] as const
}

export function getPostV2DisputesDisputeIdEvidenceTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DisputesDisputeIdEvidenceTextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>,
    ) {
      return parseResponse(client.v2.disputes[':dispute_id']['evidence-text'].$post(args, options))
    },
  })
}

export function usePostV2DisputesDisputeIdEvidenceText<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DisputesDisputeIdEvidenceTextMutationOptions<
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

export function getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
) {
  return ['v2', '/v2/disputes/:dispute_id/evidence/:evidence_id', args] as const
}

export function getV2DisputesDisputeIdEvidenceEvidenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey>
  >({
    queryKey: getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DisputesDisputeIdEvidenceEvidenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey>
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
      ...getV2DisputesDisputeIdEvidenceEvidenceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DisputesDisputeIdEvidenceEvidenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey>
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
      ...getV2DisputesDisputeIdEvidenceEvidenceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2DisputesDisputeIdEvidenceEvidenceIdMutationKey() {
  return ['v2', '/v2/disputes/:dispute_id/evidence/:evidence_id', 'DELETE'] as const
}

export function getDeleteV2DisputesDisputeIdEvidenceEvidenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DisputesDisputeIdEvidenceEvidenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2DisputesDisputeIdEvidenceEvidenceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2DisputesDisputeIdEvidenceEvidenceIdMutationOptions<
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

export function getPostV2DisputesDisputeIdSubmitEvidenceMutationKey() {
  return ['v2', '/v2/disputes/:dispute_id/submit-evidence', 'POST'] as const
}

export function getPostV2DisputesDisputeIdSubmitEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DisputesDisputeIdSubmitEvidenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.disputes[':dispute_id']['submit-evidence'].$post(args, options),
      )
    },
  })
}

export function usePostV2DisputesDisputeIdSubmitEvidence<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DisputesDisputeIdSubmitEvidenceMutationOptions<
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

export function getV2EmployeesQueryKey(args: InferRequestType<typeof client.v2.employees.$get>) {
  return ['v2', '/v2/employees', args] as const
}

export function getV2EmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2EmployeesQueryKey>
  >({
    queryKey: getV2EmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Employees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.employees.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmployeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Employees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.employees.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmployeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2EmployeesIdQueryKey(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
) {
  return ['v2', '/v2/employees/:id', args] as const
}

export function getV2EmployeesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmployeesIdQueryKey>
  >({
    queryKey: getV2EmployeesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.employees[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2EmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmployeesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmployeesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmployeesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmployeesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2GiftCardsQueryKey(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
) {
  return ['v2', '/v2/gift-cards', args] as const
}

export function getV2GiftCardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GiftCardsQueryKey>
  >({
    queryKey: getV2GiftCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['gift-cards'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2GiftCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GiftCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2GiftCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2GiftCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GiftCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2GiftCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2GiftCardsMutationKey() {
  return ['v2', '/v2/gift-cards', 'POST'] as const
}

export function getPostV2GiftCardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['gift-cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GiftCardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['gift-cards']['$post']>) {
      return parseResponse(client.v2['gift-cards'].$post(args, options))
    },
  })
}

export function usePostV2GiftCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['gift-cards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GiftCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2GiftCardsActivitiesQueryKey(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
) {
  return ['v2', '/v2/gift-cards/activities', args] as const
}

export function getV2GiftCardsActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GiftCardsActivitiesQueryKey>
  >({
    queryKey: getV2GiftCardsActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['gift-cards'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2GiftCardsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GiftCardsActivitiesQueryKey>
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
      ...getV2GiftCardsActivitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2GiftCardsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GiftCardsActivitiesQueryKey>
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
      ...getV2GiftCardsActivitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2GiftCardsActivitiesMutationKey() {
  return ['v2', '/v2/gift-cards/activities', 'POST'] as const
}

export function getPostV2GiftCardsActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['gift-cards']['activities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GiftCardsActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$post']>,
    ) {
      return parseResponse(client.v2['gift-cards'].activities.$post(args, options))
    },
  })
}

export function usePostV2GiftCardsActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['gift-cards']['activities']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GiftCardsActivitiesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2GiftCardsFromGanMutationKey() {
  return ['v2', '/v2/gift-cards/from-gan', 'POST'] as const
}

export function getPostV2GiftCardsFromGanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['from-gan']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['gift-cards']['from-gan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GiftCardsFromGanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['gift-cards']['from-gan']['$post']>,
    ) {
      return parseResponse(client.v2['gift-cards']['from-gan'].$post(args, options))
    },
  })
}

export function usePostV2GiftCardsFromGan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards']['from-gan']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['gift-cards']['from-gan']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GiftCardsFromGanMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2GiftCardsFromNonceMutationKey() {
  return ['v2', '/v2/gift-cards/from-nonce', 'POST'] as const
}

export function getPostV2GiftCardsFromNonceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GiftCardsFromNonceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>,
    ) {
      return parseResponse(client.v2['gift-cards']['from-nonce'].$post(args, options))
    },
  })
}

export function usePostV2GiftCardsFromNonce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GiftCardsFromNonceMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2GiftCardsGiftCardIdLinkCustomerMutationKey() {
  return ['v2', '/v2/gift-cards/:gift_card_id/link-customer', 'POST'] as const
}

export function getPostV2GiftCardsGiftCardIdLinkCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GiftCardsGiftCardIdLinkCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['gift-cards'][':gift_card_id']['link-customer'].$post(args, options),
      )
    },
  })
}

export function usePostV2GiftCardsGiftCardIdLinkCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GiftCardsGiftCardIdLinkCustomerMutationOptions<
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

export function getPostV2GiftCardsGiftCardIdUnlinkCustomerMutationKey() {
  return ['v2', '/v2/gift-cards/:gift_card_id/unlink-customer', 'POST'] as const
}

export function getPostV2GiftCardsGiftCardIdUnlinkCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GiftCardsGiftCardIdUnlinkCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['gift-cards'][':gift_card_id']['unlink-customer'].$post(args, options),
      )
    },
  })
}

export function usePostV2GiftCardsGiftCardIdUnlinkCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GiftCardsGiftCardIdUnlinkCustomerMutationOptions<
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

export function getV2GiftCardsIdQueryKey(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
) {
  return ['v2', '/v2/gift-cards/:id', args] as const
}

export function getV2GiftCardsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GiftCardsIdQueryKey>
  >({
    queryKey: getV2GiftCardsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['gift-cards'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2GiftCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GiftCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2GiftCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2GiftCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GiftCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2GiftCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2InventoryAdjustmentAdjustmentIdQueryKey(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
) {
  return ['v2', '/v2/inventory/adjustment/:adjustment_id', args] as const
}

export function getV2InventoryAdjustmentAdjustmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryAdjustmentAdjustmentIdQueryKey>
  >({
    queryKey: getV2InventoryAdjustmentAdjustmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory.adjustment[':adjustment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryAdjustmentAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryAdjustmentAdjustmentIdQueryKey>
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
      ...getV2InventoryAdjustmentAdjustmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryAdjustmentAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryAdjustmentAdjustmentIdQueryKey>
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
      ...getV2InventoryAdjustmentAdjustmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InventoryAdjustmentsAdjustmentIdQueryKey(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
) {
  return ['v2', '/v2/inventory/adjustments/:adjustment_id', args] as const
}

export function getV2InventoryAdjustmentsAdjustmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryAdjustmentsAdjustmentIdQueryKey>
  >({
    queryKey: getV2InventoryAdjustmentsAdjustmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory.adjustments[':adjustment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryAdjustmentsAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryAdjustmentsAdjustmentIdQueryKey>
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
      ...getV2InventoryAdjustmentsAdjustmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryAdjustmentsAdjustmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryAdjustmentsAdjustmentIdQueryKey>
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
      ...getV2InventoryAdjustmentsAdjustmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2InventoryBatchChangeMutationKey() {
  return ['v2', '/v2/inventory/batch-change', 'POST'] as const
}

export function getPostV2InventoryBatchChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)['batch-change']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventory)['batch-change']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventoryBatchChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventory)['batch-change']['$post']>,
    ) {
      return parseResponse(client.v2.inventory['batch-change'].$post(args, options))
    },
  })
}

export function usePostV2InventoryBatchChange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory)['batch-change']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventory)['batch-change']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventoryBatchChangeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2InventoryBatchRetrieveChangesMutationKey() {
  return ['v2', '/v2/inventory/batch-retrieve-changes', 'POST'] as const
}

export function getPostV2InventoryBatchRetrieveChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventoryBatchRetrieveChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>,
    ) {
      return parseResponse(client.v2.inventory['batch-retrieve-changes'].$post(args, options))
    },
  })
}

export function usePostV2InventoryBatchRetrieveChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventoryBatchRetrieveChangesMutationOptions<
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

export function getPostV2InventoryBatchRetrieveCountsMutationKey() {
  return ['v2', '/v2/inventory/batch-retrieve-counts', 'POST'] as const
}

export function getPostV2InventoryBatchRetrieveCountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventoryBatchRetrieveCountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>,
    ) {
      return parseResponse(client.v2.inventory['batch-retrieve-counts'].$post(args, options))
    },
  })
}

export function usePostV2InventoryBatchRetrieveCounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventoryBatchRetrieveCountsMutationOptions<
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

export function getPostV2InventoryChangesBatchCreateMutationKey() {
  return ['v2', '/v2/inventory/changes/batch-create', 'POST'] as const
}

export function getPostV2InventoryChangesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.changes)['batch-create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventory.changes)['batch-create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventoryChangesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventory.changes)['batch-create']['$post']>,
    ) {
      return parseResponse(client.v2.inventory.changes['batch-create'].$post(args, options))
    },
  })
}

export function usePostV2InventoryChangesBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.changes)['batch-create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventory.changes)['batch-create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventoryChangesBatchCreateMutationOptions<
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

export function getPostV2InventoryChangesBatchRetrieveMutationKey() {
  return ['v2', '/v2/inventory/changes/batch-retrieve', 'POST'] as const
}

export function getPostV2InventoryChangesBatchRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventoryChangesBatchRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>,
    ) {
      return parseResponse(client.v2.inventory.changes['batch-retrieve'].$post(args, options))
    },
  })
}

export function usePostV2InventoryChangesBatchRetrieve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventoryChangesBatchRetrieveMutationOptions<
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

export function getPostV2InventoryCountsBatchRetrieveMutationKey() {
  return ['v2', '/v2/inventory/counts/batch-retrieve', 'POST'] as const
}

export function getPostV2InventoryCountsBatchRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventoryCountsBatchRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>,
    ) {
      return parseResponse(client.v2.inventory.counts['batch-retrieve'].$post(args, options))
    },
  })
}

export function usePostV2InventoryCountsBatchRetrieve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventoryCountsBatchRetrieveMutationOptions<
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

export function getV2InventoryPhysicalCountPhysicalCountIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
) {
  return ['v2', '/v2/inventory/physical-count/:physical_count_id', args] as const
}

export function getV2InventoryPhysicalCountPhysicalCountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryPhysicalCountPhysicalCountIdQueryKey>
  >({
    queryKey: getV2InventoryPhysicalCountPhysicalCountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory['physical-count'][':physical_count_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryPhysicalCountPhysicalCountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryPhysicalCountPhysicalCountIdQueryKey>
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
      ...getV2InventoryPhysicalCountPhysicalCountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryPhysicalCountPhysicalCountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryPhysicalCountPhysicalCountIdQueryKey>
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
      ...getV2InventoryPhysicalCountPhysicalCountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InventoryPhysicalCountsPhysicalCountIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
) {
  return ['v2', '/v2/inventory/physical-counts/:physical_count_id', args] as const
}

export function getV2InventoryPhysicalCountsPhysicalCountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryPhysicalCountsPhysicalCountIdQueryKey>
  >({
    queryKey: getV2InventoryPhysicalCountsPhysicalCountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory['physical-counts'][':physical_count_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryPhysicalCountsPhysicalCountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryPhysicalCountsPhysicalCountIdQueryKey>
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
      ...getV2InventoryPhysicalCountsPhysicalCountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryPhysicalCountsPhysicalCountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryPhysicalCountsPhysicalCountIdQueryKey>
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
      ...getV2InventoryPhysicalCountsPhysicalCountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InventoryTransfersTransferIdQueryKey(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
) {
  return ['v2', '/v2/inventory/transfers/:transfer_id', args] as const
}

export function getV2InventoryTransfersTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryTransfersTransferIdQueryKey>
  >({
    queryKey: getV2InventoryTransfersTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory.transfers[':transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryTransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryTransfersTransferIdQueryKey>
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
      ...getV2InventoryTransfersTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryTransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryTransfersTransferIdQueryKey>
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
      ...getV2InventoryTransfersTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InventoryCatalogObjectIdQueryKey(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
) {
  return ['v2', '/v2/inventory/:catalog_object_id', args] as const
}

export function getV2InventoryCatalogObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryCatalogObjectIdQueryKey>
  >({
    queryKey: getV2InventoryCatalogObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory[':catalog_object_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryCatalogObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryCatalogObjectIdQueryKey>
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
      ...getV2InventoryCatalogObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryCatalogObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryCatalogObjectIdQueryKey>
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
      ...getV2InventoryCatalogObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InventoryCatalogObjectIdChangesQueryKey(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
) {
  return ['v2', '/v2/inventory/:catalog_object_id/changes', args] as const
}

export function getV2InventoryCatalogObjectIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryCatalogObjectIdChangesQueryKey>
  >({
    queryKey: getV2InventoryCatalogObjectIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventory[':catalog_object_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InventoryCatalogObjectIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryCatalogObjectIdChangesQueryKey>
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
      ...getV2InventoryCatalogObjectIdChangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2InventoryCatalogObjectIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventoryCatalogObjectIdChangesQueryKey>
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
      ...getV2InventoryCatalogObjectIdChangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InvoicesQueryKey(args: InferRequestType<typeof client.v2.invoices.$get>) {
  return ['v2', '/v2/invoices', args] as const
}

export function getV2InvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2InvoicesQueryKey>
  >({
    queryKey: getV2InvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2InvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2InvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2InvoicesMutationKey() {
  return ['v2', '/v2/invoices', 'POST'] as const
}

export function getPostV2InvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.invoices.$post>) {
      return parseResponse(client.v2.invoices.$post(args, options))
    },
  })
}

export function usePostV2Invoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.invoices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2InvoicesSearchMutationKey() {
  return ['v2', '/v2/invoices/search', 'POST'] as const
}

export function getPostV2InvoicesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.invoices.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.invoices.search.$post>) {
      return parseResponse(client.v2.invoices.search.$post(args, options))
    },
  })
}

export function usePostV2InvoicesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.invoices.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InvoicesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2InvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
) {
  return ['v2', '/v2/invoices/:invoice_id', args] as const
}

export function getV2InvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
  >({
    queryKey: getV2InvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoices[':invoice_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2InvoicesInvoiceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2InvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2InvoicesInvoiceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2InvoicesInvoiceIdMutationKey() {
  return ['v2', '/v2/invoices/:invoice_id', 'PUT'] as const
}

export function getPutV2InvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2InvoicesInvoiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$put']>) {
      return parseResponse(client.v2.invoices[':invoice_id'].$put(args, options))
    },
  })
}

export function usePutV2InvoicesInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2InvoicesInvoiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2InvoicesInvoiceIdMutationKey() {
  return ['v2', '/v2/invoices/:invoice_id', 'DELETE'] as const
}

export function getDeleteV2InvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2InvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$delete']>,
    ) {
      return parseResponse(client.v2.invoices[':invoice_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2InvoicesInvoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2InvoicesInvoiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2InvoicesInvoiceIdCancelMutationKey() {
  return ['v2', '/v2/invoices/:invoice_id/cancel', 'POST'] as const
}

export function getPostV2InvoicesInvoiceIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicesInvoiceIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.v2.invoices[':invoice_id'].cancel.$post(args, options))
    },
  })
}

export function usePostV2InvoicesInvoiceIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InvoicesInvoiceIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2InvoicesInvoiceIdPublishMutationKey() {
  return ['v2', '/v2/invoices/:invoice_id/publish', 'POST'] as const
}

export function getPostV2InvoicesInvoiceIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicesInvoiceIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>,
    ) {
      return parseResponse(client.v2.invoices[':invoice_id'].publish.$post(args, options))
    },
  })
}

export function usePostV2InvoicesInvoiceIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InvoicesInvoiceIdPublishMutationOptions<
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

export function getV2LaborBreakTypesQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
) {
  return ['v2', '/v2/labor/break-types', args] as const
}

export function getV2LaborBreakTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborBreakTypesQueryKey>
  >({
    queryKey: getV2LaborBreakTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['break-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborBreakTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborBreakTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LaborBreakTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LaborBreakTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborBreakTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LaborBreakTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2LaborBreakTypesMutationKey() {
  return ['v2', '/v2/labor/break-types', 'POST'] as const
}

export function getPostV2LaborBreakTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.labor)['break-types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LaborBreakTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.labor)['break-types']['$post']>) {
      return parseResponse(client.v2.labor['break-types'].$post(args, options))
    },
  })
}

export function usePostV2LaborBreakTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.labor)['break-types']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LaborBreakTypesMutationOptions<TError, TOnMutateResult>(
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

export function getV2LaborBreakTypesIdQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
) {
  return ['v2', '/v2/labor/break-types/:id', args] as const
}

export function getV2LaborBreakTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborBreakTypesIdQueryKey>
  >({
    queryKey: getV2LaborBreakTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['break-types'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborBreakTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborBreakTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LaborBreakTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LaborBreakTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborBreakTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LaborBreakTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2LaborBreakTypesIdMutationKey() {
  return ['v2', '/v2/labor/break-types/:id', 'PUT'] as const
}

export function getPutV2LaborBreakTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LaborBreakTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$put']>,
    ) {
      return parseResponse(client.v2.labor['break-types'][':id'].$put(args, options))
    },
  })
}

export function usePutV2LaborBreakTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2LaborBreakTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2LaborBreakTypesIdMutationKey() {
  return ['v2', '/v2/labor/break-types/:id', 'DELETE'] as const
}

export function getDeleteV2LaborBreakTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LaborBreakTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$delete']>,
    ) {
      return parseResponse(client.v2.labor['break-types'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2LaborBreakTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LaborBreakTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2LaborEmployeeWagesQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
) {
  return ['v2', '/v2/labor/employee-wages', args] as const
}

export function getV2LaborEmployeeWagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborEmployeeWagesQueryKey>
  >({
    queryKey: getV2LaborEmployeeWagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['employee-wages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborEmployeeWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborEmployeeWagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LaborEmployeeWagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LaborEmployeeWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborEmployeeWagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LaborEmployeeWagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LaborEmployeeWagesIdQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
) {
  return ['v2', '/v2/labor/employee-wages/:id', args] as const
}

export function getV2LaborEmployeeWagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborEmployeeWagesIdQueryKey>
  >({
    queryKey: getV2LaborEmployeeWagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['employee-wages'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborEmployeeWagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborEmployeeWagesIdQueryKey>
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
      ...getV2LaborEmployeeWagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LaborEmployeeWagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborEmployeeWagesIdQueryKey>
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
      ...getV2LaborEmployeeWagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2LaborShiftsMutationKey() {
  return ['v2', '/v2/labor/shifts', 'POST'] as const
}

export function getPostV2LaborShiftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.labor.shifts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LaborShiftsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.labor.shifts.$post>) {
      return parseResponse(client.v2.labor.shifts.$post(args, options))
    },
  })
}

export function usePostV2LaborShifts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.labor.shifts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LaborShiftsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LaborShiftsSearchMutationKey() {
  return ['v2', '/v2/labor/shifts/search', 'POST'] as const
}

export function getPostV2LaborShiftsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.labor.shifts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LaborShiftsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.labor.shifts.search.$post>) {
      return parseResponse(client.v2.labor.shifts.search.$post(args, options))
    },
  })
}

export function usePostV2LaborShiftsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.labor.shifts.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LaborShiftsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2LaborShiftsIdQueryKey(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
) {
  return ['v2', '/v2/labor/shifts/:id', args] as const
}

export function getV2LaborShiftsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborShiftsIdQueryKey>
  >({
    queryKey: getV2LaborShiftsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor.shifts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborShiftsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborShiftsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LaborShiftsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LaborShiftsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborShiftsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LaborShiftsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2LaborShiftsIdMutationKey() {
  return ['v2', '/v2/labor/shifts/:id', 'PUT'] as const
}

export function getPutV2LaborShiftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.labor.shifts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LaborShiftsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$put']>) {
      return parseResponse(client.v2.labor.shifts[':id'].$put(args, options))
    },
  })
}

export function usePutV2LaborShiftsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.labor.shifts)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2LaborShiftsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2LaborShiftsIdMutationKey() {
  return ['v2', '/v2/labor/shifts/:id', 'DELETE'] as const
}

export function getDeleteV2LaborShiftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.labor.shifts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LaborShiftsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$delete']>) {
      return parseResponse(client.v2.labor.shifts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2LaborShiftsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.labor.shifts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LaborShiftsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2LaborTeamMemberWagesQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
) {
  return ['v2', '/v2/labor/team-member-wages', args] as const
}

export function getV2LaborTeamMemberWagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborTeamMemberWagesQueryKey>
  >({
    queryKey: getV2LaborTeamMemberWagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['team-member-wages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborTeamMemberWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborTeamMemberWagesQueryKey>
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
      ...getV2LaborTeamMemberWagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LaborTeamMemberWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborTeamMemberWagesQueryKey>
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
      ...getV2LaborTeamMemberWagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LaborTeamMemberWagesIdQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
) {
  return ['v2', '/v2/labor/team-member-wages/:id', args] as const
}

export function getV2LaborTeamMemberWagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborTeamMemberWagesIdQueryKey>
  >({
    queryKey: getV2LaborTeamMemberWagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['team-member-wages'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborTeamMemberWagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborTeamMemberWagesIdQueryKey>
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
      ...getV2LaborTeamMemberWagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LaborTeamMemberWagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborTeamMemberWagesIdQueryKey>
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
      ...getV2LaborTeamMemberWagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LaborWorkweekConfigsQueryKey(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
) {
  return ['v2', '/v2/labor/workweek-configs', args] as const
}

export function getV2LaborWorkweekConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborWorkweekConfigsQueryKey>
  >({
    queryKey: getV2LaborWorkweekConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.labor['workweek-configs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LaborWorkweekConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborWorkweekConfigsQueryKey>
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
      ...getV2LaborWorkweekConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LaborWorkweekConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LaborWorkweekConfigsQueryKey>
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
      ...getV2LaborWorkweekConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2LaborWorkweekConfigsIdMutationKey() {
  return ['v2', '/v2/labor/workweek-configs/:id', 'PUT'] as const
}

export function getPutV2LaborWorkweekConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LaborWorkweekConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>,
    ) {
      return parseResponse(client.v2.labor['workweek-configs'][':id'].$put(args, options))
    },
  })
}

export function usePutV2LaborWorkweekConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2LaborWorkweekConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2LocationsQueryKey() {
  return ['v2', '/v2/locations'] as const
}

export function getV2LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LocationsQueryKey>
  >({
    queryKey: getV2LocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LocationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LocationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2LocationsMutationKey() {
  return ['v2', '/v2/locations', 'POST'] as const
}

export function getPostV2LocationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.locations.$post>) {
      return parseResponse(client.v2.locations.$post(args, options))
    },
  })
}

export function usePostV2Locations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.locations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LocationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2LocationsLocationIdQueryKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id', args] as const
}

export function getV2LocationsLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdQueryKey>
  >({
    queryKey: getV2LocationsLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations[':location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdQueryKey>
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
      ...getV2LocationsLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdQueryKey>
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
      ...getV2LocationsLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2LocationsLocationIdMutationKey() {
  return ['v2', '/v2/locations/:location_id', 'PUT'] as const
}

export function getPutV2LocationsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.locations)[':location_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LocationsLocationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.locations)[':location_id']['$put']>) {
      return parseResponse(client.v2.locations[':location_id'].$put(args, options))
    },
  })
}

export function usePutV2LocationsLocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.locations)[':location_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2LocationsLocationIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LocationsLocationIdCheckoutsMutationKey() {
  return ['v2', '/v2/locations/:location_id/checkouts', 'POST'] as const
}

export function getPostV2LocationsLocationIdCheckoutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LocationsLocationIdCheckoutsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>,
    ) {
      return parseResponse(client.v2.locations[':location_id'].checkouts.$post(args, options))
    },
  })
}

export function usePostV2LocationsLocationIdCheckouts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LocationsLocationIdCheckoutsMutationOptions<
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

export function getV2LocationsLocationIdRefundsQueryKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id/refunds', args] as const
}

export function getV2LocationsLocationIdRefundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdRefundsQueryKey>
  >({
    queryKey: getV2LocationsLocationIdRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations[':location_id'].refunds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsLocationIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdRefundsQueryKey>
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
      ...getV2LocationsLocationIdRefundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsLocationIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdRefundsQueryKey>
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
      ...getV2LocationsLocationIdRefundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LocationsLocationIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id/transactions', args] as const
}

export function getV2LocationsLocationIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdTransactionsQueryKey>
  >({
    queryKey: getV2LocationsLocationIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsLocationIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdTransactionsQueryKey>
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
      ...getV2LocationsLocationIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsLocationIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdTransactionsQueryKey>
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
      ...getV2LocationsLocationIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2LocationsLocationIdTransactionsMutationKey() {
  return ['v2', '/v2/locations/:location_id/transactions', 'POST'] as const
}

export function getPostV2LocationsLocationIdTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LocationsLocationIdTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>,
    ) {
      return parseResponse(client.v2.locations[':location_id'].transactions.$post(args, options))
    },
  })
}

export function usePostV2LocationsLocationIdTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LocationsLocationIdTransactionsMutationOptions<
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

export function getV2LocationsLocationIdTransactionsTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
) {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id', args] as const
}

export function getV2LocationsLocationIdTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdTransactionsTransactionIdQueryKey>
  >({
    queryKey: getV2LocationsLocationIdTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions[':transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsLocationIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdTransactionsTransactionIdQueryKey>
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
      ...getV2LocationsLocationIdTransactionsTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsLocationIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdTransactionsTransactionIdQueryKey>
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
      ...getV2LocationsLocationIdTransactionsTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdCaptureMutationKey() {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id/capture', 'POST'] as const
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2LocationsLocationIdTransactionsTransactionIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions[':transaction_id'].capture.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2LocationsLocationIdTransactionsTransactionIdCapture<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV2LocationsLocationIdTransactionsTransactionIdCaptureMutationOptions<
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

export function getPostV2LocationsLocationIdTransactionsTransactionIdRefundMutationKey() {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id/refund', 'POST'] as const
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2LocationsLocationIdTransactionsTransactionIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions[':transaction_id'].refund.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2LocationsLocationIdTransactionsTransactionIdRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV2LocationsLocationIdTransactionsTransactionIdRefundMutationOptions<
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

export function getPostV2LocationsLocationIdTransactionsTransactionIdVoidMutationKey() {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id/void', 'POST'] as const
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2LocationsLocationIdTransactionsTransactionIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions[':transaction_id'].void.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2LocationsLocationIdTransactionsTransactionIdVoid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LocationsLocationIdTransactionsTransactionIdVoidMutationOptions<
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

export function getPostV2LoyaltyAccountsMutationKey() {
  return ['v2', '/v2/loyalty/accounts', 'POST'] as const
}

export function getPostV2LoyaltyAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.loyalty.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.loyalty.accounts.$post>) {
      return parseResponse(client.v2.loyalty.accounts.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.loyalty.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LoyaltyAccountsSearchMutationKey() {
  return ['v2', '/v2/loyalty/accounts/search', 'POST'] as const
}

export function getPostV2LoyaltyAccountsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.accounts.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.loyalty.accounts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyAccountsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.loyalty.accounts.search.$post>) {
      return parseResponse(client.v2.loyalty.accounts.search.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyAccountsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.loyalty.accounts.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.loyalty.accounts.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyAccountsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2LoyaltyAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
) {
  return ['v2', '/v2/loyalty/accounts/:account_id', args] as const
}

export function getV2LoyaltyAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyAccountsAccountIdQueryKey>
  >({
    queryKey: getV2LoyaltyAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.loyalty.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LoyaltyAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyAccountsAccountIdQueryKey>
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
      ...getV2LoyaltyAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LoyaltyAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyAccountsAccountIdQueryKey>
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
      ...getV2LoyaltyAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2LoyaltyAccountsAccountIdAccumulateMutationKey() {
  return ['v2', '/v2/loyalty/accounts/:account_id/accumulate', 'POST'] as const
}

export function getPostV2LoyaltyAccountsAccountIdAccumulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyAccountsAccountIdAccumulateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.loyalty.accounts[':account_id'].accumulate.$post(args, options),
      )
    },
  })
}

export function usePostV2LoyaltyAccountsAccountIdAccumulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyAccountsAccountIdAccumulateMutationOptions<
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

export function getPostV2LoyaltyAccountsAccountIdAdjustMutationKey() {
  return ['v2', '/v2/loyalty/accounts/:account_id/adjust', 'POST'] as const
}

export function getPostV2LoyaltyAccountsAccountIdAdjustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyAccountsAccountIdAdjustMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>,
    ) {
      return parseResponse(client.v2.loyalty.accounts[':account_id'].adjust.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyAccountsAccountIdAdjust<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyAccountsAccountIdAdjustMutationOptions<
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

export function getPostV2LoyaltyEventsSearchMutationKey() {
  return ['v2', '/v2/loyalty/events/search', 'POST'] as const
}

export function getPostV2LoyaltyEventsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.events.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.loyalty.events.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyEventsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.loyalty.events.search.$post>) {
      return parseResponse(client.v2.loyalty.events.search.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyEventsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.events.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.loyalty.events.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyEventsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2LoyaltyProgramsQueryKey() {
  return ['v2', '/v2/loyalty/programs'] as const
}

export function getV2LoyaltyProgramsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyProgramsQueryKey>
  >({
    queryKey: getV2LoyaltyProgramsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.loyalty.programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LoyaltyPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LoyaltyProgramsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LoyaltyPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LoyaltyProgramsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LoyaltyProgramsProgramIdQueryKey(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
) {
  return ['v2', '/v2/loyalty/programs/:program_id', args] as const
}

export function getV2LoyaltyProgramsProgramIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyProgramsProgramIdQueryKey>
  >({
    queryKey: getV2LoyaltyProgramsProgramIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.loyalty.programs[':program_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LoyaltyProgramsProgramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyProgramsProgramIdQueryKey>
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
      ...getV2LoyaltyProgramsProgramIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LoyaltyProgramsProgramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyProgramsProgramIdQueryKey>
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
      ...getV2LoyaltyProgramsProgramIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2LoyaltyProgramsProgramIdCalculateMutationKey() {
  return ['v2', '/v2/loyalty/programs/:program_id/calculate', 'POST'] as const
}

export function getPostV2LoyaltyProgramsProgramIdCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyProgramsProgramIdCalculateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']
      >,
    ) {
      return parseResponse(client.v2.loyalty.programs[':program_id'].calculate.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyProgramsProgramIdCalculate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyProgramsProgramIdCalculateMutationOptions<
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

export function getPostV2LoyaltyRewardsMutationKey() {
  return ['v2', '/v2/loyalty/rewards', 'POST'] as const
}

export function getPostV2LoyaltyRewardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.rewards.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.loyalty.rewards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyRewardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.loyalty.rewards.$post>) {
      return parseResponse(client.v2.loyalty.rewards.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyRewards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.rewards.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.loyalty.rewards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyRewardsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LoyaltyRewardsSearchMutationKey() {
  return ['v2', '/v2/loyalty/rewards/search', 'POST'] as const
}

export function getPostV2LoyaltyRewardsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.rewards.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.loyalty.rewards.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyRewardsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.loyalty.rewards.search.$post>) {
      return parseResponse(client.v2.loyalty.rewards.search.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyRewardsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.rewards.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.loyalty.rewards.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyRewardsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2LoyaltyRewardsRewardIdQueryKey(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
) {
  return ['v2', '/v2/loyalty/rewards/:reward_id', args] as const
}

export function getV2LoyaltyRewardsRewardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyRewardsRewardIdQueryKey>
  >({
    queryKey: getV2LoyaltyRewardsRewardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.loyalty.rewards[':reward_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LoyaltyRewardsRewardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyRewardsRewardIdQueryKey>
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
      ...getV2LoyaltyRewardsRewardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LoyaltyRewardsRewardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoyaltyRewardsRewardIdQueryKey>
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
      ...getV2LoyaltyRewardsRewardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2LoyaltyRewardsRewardIdMutationKey() {
  return ['v2', '/v2/loyalty/rewards/:reward_id', 'DELETE'] as const
}

export function getDeleteV2LoyaltyRewardsRewardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoyaltyRewardsRewardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>,
    ) {
      return parseResponse(client.v2.loyalty.rewards[':reward_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2LoyaltyRewardsRewardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LoyaltyRewardsRewardIdMutationOptions<
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

export function getPostV2LoyaltyRewardsRewardIdRedeemMutationKey() {
  return ['v2', '/v2/loyalty/rewards/:reward_id/redeem', 'POST'] as const
}

export function getPostV2LoyaltyRewardsRewardIdRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoyaltyRewardsRewardIdRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>,
    ) {
      return parseResponse(client.v2.loyalty.rewards[':reward_id'].redeem.$post(args, options))
    },
  })
}

export function usePostV2LoyaltyRewardsRewardIdRedeem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoyaltyRewardsRewardIdRedeemMutationOptions<
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

export function getV2MerchantsQueryKey(args: InferRequestType<typeof client.v2.merchants.$get>) {
  return ['v2', '/v2/merchants', args] as const
}

export function getV2MerchantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.merchants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2MerchantsQueryKey>
  >({
    queryKey: getV2MerchantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.merchants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Merchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.merchants.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2MerchantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Merchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.merchants.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2MerchantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2MerchantsMerchantIdQueryKey(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
) {
  return ['v2', '/v2/merchants/:merchant_id', args] as const
}

export function getV2MerchantsMerchantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MerchantsMerchantIdQueryKey>
  >({
    queryKey: getV2MerchantsMerchantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.merchants[':merchant_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2MerchantsMerchantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MerchantsMerchantIdQueryKey>
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
      ...getV2MerchantsMerchantIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2MerchantsMerchantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MerchantsMerchantIdQueryKey>
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
      ...getV2MerchantsMerchantIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2OrdersMutationKey() {
  return ['v2', '/v2/orders', 'POST'] as const
}

export function getPostV2OrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.orders.$post>) {
      return parseResponse(client.v2.orders.$post(args, options))
    },
  })
}

export function usePostV2Orders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2OrdersBatchRetrieveMutationKey() {
  return ['v2', '/v2/orders/batch-retrieve', 'POST'] as const
}

export function getPostV2OrdersBatchRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.orders)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.orders)['batch-retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OrdersBatchRetrieveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.orders)['batch-retrieve']['$post']>) {
      return parseResponse(client.v2.orders['batch-retrieve'].$post(args, options))
    },
  })
}

export function usePostV2OrdersBatchRetrieve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.orders)['batch-retrieve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.orders)['batch-retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OrdersBatchRetrieveMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2OrdersCalculateMutationKey() {
  return ['v2', '/v2/orders/calculate', 'POST'] as const
}

export function getPostV2OrdersCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.calculate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.orders.calculate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OrdersCalculateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.orders.calculate.$post>) {
      return parseResponse(client.v2.orders.calculate.$post(args, options))
    },
  })
}

export function usePostV2OrdersCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.calculate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.orders.calculate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OrdersCalculateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2OrdersSearchMutationKey() {
  return ['v2', '/v2/orders/search', 'POST'] as const
}

export function getPostV2OrdersSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.orders.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OrdersSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.orders.search.$post>) {
      return parseResponse(client.v2.orders.search.$post(args, options))
    },
  })
}

export function usePostV2OrdersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.orders.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OrdersSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2OrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
) {
  return ['v2', '/v2/orders/:order_id', args] as const
}

export function getV2OrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrdersOrderIdQueryKey>
  >({
    queryKey: getV2OrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.orders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2OrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2OrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2OrdersOrderIdMutationKey() {
  return ['v2', '/v2/orders/:order_id', 'PUT'] as const
}

export function getPutV2OrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.orders)[':order_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2OrdersOrderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.orders)[':order_id']['$put']>) {
      return parseResponse(client.v2.orders[':order_id'].$put(args, options))
    },
  })
}

export function usePutV2OrdersOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.orders)[':order_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2OrdersOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2OrdersOrderIdPayMutationKey() {
  return ['v2', '/v2/orders/:order_id/pay', 'POST'] as const
}

export function getPostV2OrdersOrderIdPayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['pay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.orders)[':order_id']['pay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OrdersOrderIdPayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.orders)[':order_id']['pay']['$post']>,
    ) {
      return parseResponse(client.v2.orders[':order_id'].pay.$post(args, options))
    },
  })
}

export function usePostV2OrdersOrderIdPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['pay']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.orders)[':order_id']['pay']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OrdersOrderIdPayMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentsQueryKey(args: InferRequestType<typeof client.v2.payments.$get>) {
  return ['v2', '/v2/payments', args] as const
}

export function getV2PaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsQueryKey>
  >({
    queryKey: getV2PaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2PaymentsMutationKey() {
  return ['v2', '/v2/payments', 'POST'] as const
}

export function getPostV2PaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.payments.$post>) {
      return parseResponse(client.v2.payments.$post(args, options))
    },
  })
}

export function usePostV2Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.payments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2PaymentsCancelMutationKey() {
  return ['v2', '/v2/payments/cancel', 'POST'] as const
}

export function getPostV2PaymentsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.payments.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.payments.cancel.$post>) {
      return parseResponse(client.v2.payments.cancel.$post(args, options))
    },
  })
}

export function usePostV2PaymentsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.cancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.payments.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
) {
  return ['v2', '/v2/payments/:payment_id', args] as const
}

export function getV2PaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':payment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2PaymentsPaymentIdMutationKey() {
  return ['v2', '/v2/payments/:payment_id', 'PUT'] as const
}

export function getPutV2PaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':payment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2PaymentsPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$put']>) {
      return parseResponse(client.v2.payments[':payment_id'].$put(args, options))
    },
  })
}

export function usePutV2PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':payment_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2PaymentsPaymentIdCancelMutationKey() {
  return ['v2', '/v2/payments/:payment_id/cancel', 'POST'] as const
}

export function getPostV2PaymentsPaymentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsPaymentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.v2.payments[':payment_id'].cancel.$post(args, options))
    },
  })
}

export function usePostV2PaymentsPaymentIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsPaymentIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2PaymentsPaymentIdCompleteMutationKey() {
  return ['v2', '/v2/payments/:payment_id/complete', 'POST'] as const
}

export function getPostV2PaymentsPaymentIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsPaymentIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>,
    ) {
      return parseResponse(client.v2.payments[':payment_id'].complete.$post(args, options))
    },
  })
}

export function usePostV2PaymentsPaymentIdComplete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsPaymentIdCompleteMutationOptions<
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

export function getV2RefundsQueryKey(args: InferRequestType<typeof client.v2.refunds.$get>) {
  return ['v2', '/v2/refunds', args] as const
}

export function getV2RefundsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.refunds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RefundsQueryKey>
  >({
    queryKey: getV2RefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.refunds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2RefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2RefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2RefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2RefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2RefundsMutationKey() {
  return ['v2', '/v2/refunds', 'POST'] as const
}

export function getPostV2RefundsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.refunds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RefundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.refunds.$post>) {
      return parseResponse(client.v2.refunds.$post(args, options))
    },
  })
}

export function usePostV2Refunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.refunds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2RefundsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2RefundsRefundIdQueryKey(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
) {
  return ['v2', '/v2/refunds/:refund_id', args] as const
}

export function getV2RefundsRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RefundsRefundIdQueryKey>
  >({
    queryKey: getV2RefundsRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.refunds[':refund_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2RefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RefundsRefundIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2RefundsRefundIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2RefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RefundsRefundIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2RefundsRefundIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SitesQueryKey() {
  return ['v2', '/v2/sites'] as const
}

export function getV2SitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SitesQueryKey>
  >({
    queryKey: getV2SitesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Sites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2SitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SitesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Sites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2SitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SitesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SitesSiteIdSnippetQueryKey(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
) {
  return ['v2', '/v2/sites/:site_id/snippet', args] as const
}

export function getV2SitesSiteIdSnippetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SitesSiteIdSnippetQueryKey>
  >({
    queryKey: getV2SitesSiteIdSnippetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sites[':site_id'].snippet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SitesSiteIdSnippet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SitesSiteIdSnippetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SitesSiteIdSnippetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2SitesSiteIdSnippet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SitesSiteIdSnippetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SitesSiteIdSnippetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2SitesSiteIdSnippetMutationKey() {
  return ['v2', '/v2/sites/:site_id/snippet', 'POST'] as const
}

export function getPostV2SitesSiteIdSnippetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SitesSiteIdSnippetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>,
    ) {
      return parseResponse(client.v2.sites[':site_id'].snippet.$post(args, options))
    },
  })
}

export function usePostV2SitesSiteIdSnippet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SitesSiteIdSnippetMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2SitesSiteIdSnippetMutationKey() {
  return ['v2', '/v2/sites/:site_id/snippet', 'DELETE'] as const
}

export function getDeleteV2SitesSiteIdSnippetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SitesSiteIdSnippetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>,
    ) {
      return parseResponse(client.v2.sites[':site_id'].snippet.$delete(args, options))
    },
  })
}

export function useDeleteV2SitesSiteIdSnippet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2SitesSiteIdSnippetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SubscriptionsMutationKey() {
  return ['v2', '/v2/subscriptions', 'POST'] as const
}

export function getPostV2SubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.subscriptions.$post>) {
      return parseResponse(client.v2.subscriptions.$post(args, options))
    },
  })
}

export function usePostV2Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SubscriptionsSearchMutationKey() {
  return ['v2', '/v2/subscriptions/search', 'POST'] as const
}

export function getPostV2SubscriptionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.subscriptions.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscriptionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.subscriptions.search.$post>) {
      return parseResponse(client.v2.subscriptions.search.$post(args, options))
    },
  })
}

export function usePostV2SubscriptionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.subscriptions.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SubscriptionsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2SubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
) {
  return ['v2', '/v2/subscriptions/:subscription_id', args] as const
}

export function getV2SubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getV2SubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscriptions[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscriptionsSubscriptionIdQueryKey>
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
      ...getV2SubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscriptionsSubscriptionIdQueryKey>
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
      ...getV2SubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2SubscriptionsSubscriptionIdMutationKey() {
  return ['v2', '/v2/subscriptions/:subscription_id', 'PUT'] as const
}

export function getPutV2SubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2SubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>,
    ) {
      return parseResponse(client.v2.subscriptions[':subscription_id'].$put(args, options))
    },
  })
}

export function usePutV2SubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2SubscriptionsSubscriptionIdMutationOptions<
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

export function getPostV2SubscriptionsSubscriptionIdCancelMutationKey() {
  return ['v2', '/v2/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function getPostV2SubscriptionsSubscriptionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscriptionsSubscriptionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.v2.subscriptions[':subscription_id'].cancel.$post(args, options))
    },
  })
}

export function usePostV2SubscriptionsSubscriptionIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SubscriptionsSubscriptionIdCancelMutationOptions<
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

export function getV2SubscriptionsSubscriptionIdEventsQueryKey(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
) {
  return ['v2', '/v2/subscriptions/:subscription_id/events', args] as const
}

export function getV2SubscriptionsSubscriptionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscriptionsSubscriptionIdEventsQueryKey>
  >({
    queryKey: getV2SubscriptionsSubscriptionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscriptions[':subscription_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscriptionsSubscriptionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscriptionsSubscriptionIdEventsQueryKey>
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
      ...getV2SubscriptionsSubscriptionIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscriptionsSubscriptionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscriptionsSubscriptionIdEventsQueryKey>
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
      ...getV2SubscriptionsSubscriptionIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2SubscriptionsSubscriptionIdResumeMutationKey() {
  return ['v2', '/v2/subscriptions/:subscription_id/resume', 'POST'] as const
}

export function getPostV2SubscriptionsSubscriptionIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscriptionsSubscriptionIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']
      >,
    ) {
      return parseResponse(client.v2.subscriptions[':subscription_id'].resume.$post(args, options))
    },
  })
}

export function usePostV2SubscriptionsSubscriptionIdResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SubscriptionsSubscriptionIdResumeMutationOptions<
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

export function getPostV2TeamMembersMutationKey() {
  return ['v2', '/v2/team-members', 'POST'] as const
}

export function getPostV2TeamMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['team-members']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['team-members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TeamMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['team-members']['$post']>) {
      return parseResponse(client.v2['team-members'].$post(args, options))
    },
  })
}

export function usePostV2TeamMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['team-members']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['team-members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TeamMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TeamMembersBulkCreateMutationKey() {
  return ['v2', '/v2/team-members/bulk-create', 'POST'] as const
}

export function getPostV2TeamMembersBulkCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members']['bulk-create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['team-members']['bulk-create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TeamMembersBulkCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['team-members']['bulk-create']['$post']>,
    ) {
      return parseResponse(client.v2['team-members']['bulk-create'].$post(args, options))
    },
  })
}

export function usePostV2TeamMembersBulkCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['team-members']['bulk-create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['team-members']['bulk-create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TeamMembersBulkCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TeamMembersBulkUpdateMutationKey() {
  return ['v2', '/v2/team-members/bulk-update', 'POST'] as const
}

export function getPostV2TeamMembersBulkUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members']['bulk-update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['team-members']['bulk-update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TeamMembersBulkUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['team-members']['bulk-update']['$post']>,
    ) {
      return parseResponse(client.v2['team-members']['bulk-update'].$post(args, options))
    },
  })
}

export function usePostV2TeamMembersBulkUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['team-members']['bulk-update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['team-members']['bulk-update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TeamMembersBulkUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TeamMembersSearchMutationKey() {
  return ['v2', '/v2/team-members/search', 'POST'] as const
}

export function getPostV2TeamMembersSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['team-members']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TeamMembersSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['team-members']['search']['$post']>,
    ) {
      return parseResponse(client.v2['team-members'].search.$post(args, options))
    },
  })
}

export function usePostV2TeamMembersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['team-members']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['team-members']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TeamMembersSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2TeamMembersTeamMemberIdQueryKey(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
) {
  return ['v2', '/v2/team-members/:team_member_id', args] as const
}

export function getV2TeamMembersTeamMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamMembersTeamMemberIdQueryKey>
  >({
    queryKey: getV2TeamMembersTeamMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['team-members'][':team_member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TeamMembersTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamMembersTeamMemberIdQueryKey>
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
      ...getV2TeamMembersTeamMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TeamMembersTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamMembersTeamMemberIdQueryKey>
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
      ...getV2TeamMembersTeamMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2TeamMembersTeamMemberIdMutationKey() {
  return ['v2', '/v2/team-members/:team_member_id', 'PUT'] as const
}

export function getPutV2TeamMembersTeamMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2TeamMembersTeamMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$put']>,
    ) {
      return parseResponse(client.v2['team-members'][':team_member_id'].$put(args, options))
    },
  })
}

export function usePutV2TeamMembersTeamMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2TeamMembersTeamMemberIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2TeamMembersTeamMemberIdWageSettingQueryKey(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
) {
  return ['v2', '/v2/team-members/:team_member_id/wage-setting', args] as const
}

export function getV2TeamMembersTeamMemberIdWageSettingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamMembersTeamMemberIdWageSettingQueryKey>
  >({
    queryKey: getV2TeamMembersTeamMemberIdWageSettingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['team-members'][':team_member_id']['wage-setting'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TeamMembersTeamMemberIdWageSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamMembersTeamMemberIdWageSettingQueryKey>
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
      ...getV2TeamMembersTeamMemberIdWageSettingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TeamMembersTeamMemberIdWageSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamMembersTeamMemberIdWageSettingQueryKey>
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
      ...getV2TeamMembersTeamMemberIdWageSettingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2TeamMembersTeamMemberIdWageSettingMutationKey() {
  return ['v2', '/v2/team-members/:team_member_id/wage-setting', 'PUT'] as const
}

export function getPutV2TeamMembersTeamMemberIdWageSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2TeamMembersTeamMemberIdWageSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']
      >,
    ) {
      return parseResponse(
        client.v2['team-members'][':team_member_id']['wage-setting'].$put(args, options),
      )
    },
  })
}

export function usePutV2TeamMembersTeamMemberIdWageSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2TeamMembersTeamMemberIdWageSettingMutationOptions<
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

export function getPostV2TerminalsCheckoutsMutationKey() {
  return ['v2', '/v2/terminals/checkouts', 'POST'] as const
}

export function getPostV2TerminalsCheckoutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.checkouts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.terminals.checkouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsCheckoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.terminals.checkouts.$post>) {
      return parseResponse(client.v2.terminals.checkouts.$post(args, options))
    },
  })
}

export function usePostV2TerminalsCheckouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.checkouts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.terminals.checkouts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsCheckoutsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TerminalsCheckoutsSearchMutationKey() {
  return ['v2', '/v2/terminals/checkouts/search', 'POST'] as const
}

export function getPostV2TerminalsCheckoutsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.checkouts.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.terminals.checkouts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsCheckoutsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.terminals.checkouts.search.$post>) {
      return parseResponse(client.v2.terminals.checkouts.search.$post(args, options))
    },
  })
}

export function usePostV2TerminalsCheckoutsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.terminals.checkouts.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.terminals.checkouts.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsCheckoutsSearchMutationOptions<
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

export function getV2TerminalsCheckoutsCheckoutIdQueryKey(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
) {
  return ['v2', '/v2/terminals/checkouts/:checkout_id', args] as const
}

export function getV2TerminalsCheckoutsCheckoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsCheckoutsCheckoutIdQueryKey>
  >({
    queryKey: getV2TerminalsCheckoutsCheckoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.terminals.checkouts[':checkout_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TerminalsCheckoutsCheckoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsCheckoutsCheckoutIdQueryKey>
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
      ...getV2TerminalsCheckoutsCheckoutIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TerminalsCheckoutsCheckoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsCheckoutsCheckoutIdQueryKey>
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
      ...getV2TerminalsCheckoutsCheckoutIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2TerminalsCheckoutsCheckoutIdCancelMutationKey() {
  return ['v2', '/v2/terminals/checkouts/:checkout_id/cancel', 'POST'] as const
}

export function getPostV2TerminalsCheckoutsCheckoutIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsCheckoutsCheckoutIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.terminals.checkouts[':checkout_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV2TerminalsCheckoutsCheckoutIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsCheckoutsCheckoutIdCancelMutationOptions<
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

export function getPostV2TerminalsRefundsMutationKey() {
  return ['v2', '/v2/terminals/refunds', 'POST'] as const
}

export function getPostV2TerminalsRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.refunds.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.terminals.refunds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsRefundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.terminals.refunds.$post>) {
      return parseResponse(client.v2.terminals.refunds.$post(args, options))
    },
  })
}

export function usePostV2TerminalsRefunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.refunds.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.terminals.refunds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsRefundsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TerminalsRefundsSearchMutationKey() {
  return ['v2', '/v2/terminals/refunds/search', 'POST'] as const
}

export function getPostV2TerminalsRefundsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.refunds.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.terminals.refunds.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsRefundsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.terminals.refunds.search.$post>) {
      return parseResponse(client.v2.terminals.refunds.search.$post(args, options))
    },
  })
}

export function usePostV2TerminalsRefundsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.terminals.refunds.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.terminals.refunds.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsRefundsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV2TerminalsRefundsTerminalRefundIdQueryKey(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
) {
  return ['v2', '/v2/terminals/refunds/:terminal_refund_id', args] as const
}

export function getV2TerminalsRefundsTerminalRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsRefundsTerminalRefundIdQueryKey>
  >({
    queryKey: getV2TerminalsRefundsTerminalRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.terminals.refunds[':terminal_refund_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TerminalsRefundsTerminalRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsRefundsTerminalRefundIdQueryKey>
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
      ...getV2TerminalsRefundsTerminalRefundIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TerminalsRefundsTerminalRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsRefundsTerminalRefundIdQueryKey>
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
      ...getV2TerminalsRefundsTerminalRefundIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2TerminalsRefundsTerminalRefundIdCancelMutationKey() {
  return ['v2', '/v2/terminals/refunds/:terminal_refund_id/cancel', 'POST'] as const
}

export function getPostV2TerminalsRefundsTerminalRefundIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsRefundsTerminalRefundIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.terminals.refunds[':terminal_refund_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV2TerminalsRefundsTerminalRefundIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsRefundsTerminalRefundIdCancelMutationOptions<
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
