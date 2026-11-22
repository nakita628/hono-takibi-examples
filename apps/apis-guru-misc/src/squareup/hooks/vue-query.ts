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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth2.revoke.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth2.token.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.me.employees.$get>>,
) {
  return ['v1', '/v1/me/employees', toValue(args)] as const
}

export function getV1MeEmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.me.employees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MeEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.me.employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MeEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.me.employees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>
            >
          >,
          ReturnType<typeof getV1MeEmployeesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeEmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MeEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.me.employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.me.employees.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>>,
) {
  return ['v1', '/v1/me/employees/:employee_id', toValue(args)] as const
}

export function getV1MeEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MeEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.me.employees[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MeEmployeesEmployeeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MeEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.me.employees[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1MeRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.me.roles.$get>>,
) {
  return ['v1', '/v1/me/roles', toValue(args)] as const
}

export function getV1MeRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.me.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MeRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.me.roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1MeRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.me.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
          >,
          ReturnType<typeof getV1MeRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MeRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MeRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.me.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.me.roles.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>>,
) {
  return ['v1', '/v1/me/roles/:role_id', toValue(args)] as const
}

export function getV1MeRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MeRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.me.roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MeRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MeRolesRoleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MeRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.me.roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>>,
) {
  return ['v1', '/v1/:location_id/orders', toValue(args)] as const
}

export function getV1LocationIdOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LocationIdOrdersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocationIdOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>
  >,
) {
  return ['v1', '/v1/:location_id/orders/:order_id', toValue(args)] as const
}

export function getV1LocationIdOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].orders[':order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>
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
                  ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1LocationIdOrdersOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].orders[':order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>>,
) {
  return ['v1', '/v1/:location_id/payments', toValue(args)] as const
}

export function getV1LocationIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LocationIdPaymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocationIdPaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
  >,
) {
  return ['v1', '/v1/:location_id/payments/:payment_id', toValue(args)] as const
}

export function getV1LocationIdPaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdPaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].payments[':payment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1LocationIdPaymentsPaymentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdPaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdPaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].payments[':payment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocationIdRefundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>>,
) {
  return ['v1', '/v1/:location_id/refunds', toValue(args)] as const
}

export function getV1LocationIdRefundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdRefundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].refunds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LocationIdRefundsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdRefundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdRefundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>
  >,
) {
  return ['v1', '/v1/:location_id/settlements', toValue(args)] as const
}

export function getV1LocationIdSettlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdSettlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].settlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LocationIdSettlementsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdSettlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdSettlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].settlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocationIdSettlementsSettlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
  >,
) {
  return ['v1', '/v1/:location_id/settlements/:settlement_id', toValue(args)] as const
}

export function getV1LocationIdSettlementsSettlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdSettlementsSettlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location_id'].settlements[':settlement_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
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
                    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
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
                    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1LocationIdSettlementsSettlementIdQueryKey>
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
            ReturnType<(typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdSettlementsSettlementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdSettlementsSettlementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location_id'].settlements[':settlement_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['bank-accounts']['$get']>>,
) {
  return ['v2', '/v2/bank-accounts', toValue(args)] as const
}

export function getV2BankAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['bank-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BankAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['bank-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['bank-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
            >
          >,
          ReturnType<typeof getV2BankAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BankAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BankAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['bank-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BankAccountsByV1IdV1BankAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']>
  >,
) {
  return ['v2', '/v2/bank-accounts/by-v1-id/:v1_bank_account_id', toValue(args)] as const
}

export function getV2BankAccountsByV1IdV1BankAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BankAccountsByV1IdV1BankAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['bank-accounts']['by-v1-id'][':v1_bank_account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']>
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
                    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
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
                    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BankAccountsByV1IdV1BankAccountIdQueryKey>
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
              (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BankAccountsByV1IdV1BankAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BankAccountsByV1IdV1BankAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['bank-accounts']['by-v1-id'][':v1_bank_account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BankAccountsBankAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>
  >,
) {
  return ['v2', '/v2/bank-accounts/:bank_account_id', toValue(args)] as const
}

export function getV2BankAccountsBankAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BankAccountsBankAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['bank-accounts'][':bank_account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BankAccountsBankAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BankAccountsBankAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BankAccountsBankAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['bank-accounts'][':bank_account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.bookings.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2BookingsBusinessBookingProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BookingsBusinessBookingProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bookings['business-booking-profile'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BookingsBusinessBookingProfileQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBusinessBookingProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BookingsBusinessBookingProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bookings['business-booking-profile'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BookingsTeamMemberBookingProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>
  >,
) {
  return ['v2', '/v2/bookings/team-member-booking-profiles', toValue(args)] as const
}

export function getV2BookingsTeamMemberBookingProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BookingsTeamMemberBookingProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bookings['team-member-booking-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BookingsTeamMemberBookingProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsTeamMemberBookingProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BookingsTeamMemberBookingProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bookings['team-member-booking-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
    >
  >,
) {
  return ['v2', '/v2/bookings/team-member-booking-profiles/:team_member_id', toValue(args)] as const
}

export function getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bookings['team-member-booking-profiles'][':team_member_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
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
                    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
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
                    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey>
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
              (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BookingsTeamMemberBookingProfilesTeamMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bookings['team-member-booking-profiles'][':team_member_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2BookingsBookingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>>,
) {
  return ['v2', '/v2/bookings/:booking_id', toValue(args)] as const
}

export function getV2BookingsBookingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BookingsBookingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bookings[':booking_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BookingsBookingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BookingsBookingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BookingsBookingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BookingsBookingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bookings[':booking_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2CardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cards.$get>>,
) {
  return ['v2', '/v2/cards', toValue(args)] as const
}

export function getV2CardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>
          >,
          ReturnType<typeof getV2CardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.cards.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>>,
) {
  return ['v2', '/v2/cards/:card_id', toValue(args)] as const
}

export function getV2CardsCardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CardsCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cards[':card_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CardsCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CardsCardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CardsCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CardsCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cards[':card_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>,
) {
  return ['v2', '/v2/cash-drawers/shifts', toValue(args)] as const
}

export function getV2CashDrawersShiftsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CashDrawersShiftsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['cash-drawers'].shifts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CashDrawersShiftsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CashDrawersShiftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CashDrawersShiftsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['cash-drawers'].shifts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CashDrawersShiftsShiftIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>
  >,
) {
  return ['v2', '/v2/cash-drawers/shifts/:shift_id', toValue(args)] as const
}

export function getV2CashDrawersShiftsShiftIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CashDrawersShiftsShiftIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['cash-drawers'].shifts[':shift_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>
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
                  ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2CashDrawersShiftsShiftIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CashDrawersShiftsShiftIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CashDrawersShiftsShiftIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['cash-drawers'].shifts[':shift_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CashDrawersShiftsShiftIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
  >,
) {
  return ['v2', '/v2/cash-drawers/shifts/:shift_id/events', toValue(args)] as const
}

export function getV2CashDrawersShiftsShiftIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CashDrawersShiftsShiftIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['cash-drawers'].shifts[':shift_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
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
                    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
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
                    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CashDrawersShiftsShiftIdEventsQueryKey>
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
            ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CashDrawersShiftsShiftIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CashDrawersShiftsShiftIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['cash-drawers'].shifts[':shift_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2CatalogInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2CatalogInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.catalog.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CatalogInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>
            >
          >,
          ReturnType<typeof getV2CatalogInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2CatalogInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.catalog.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CatalogListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.list.$get>>,
) {
  return ['v2', '/v2/catalog/list', toValue(args)] as const
}

export function getV2CatalogListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CatalogListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.catalog.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CatalogList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>
            >
          >,
          ReturnType<typeof getV2CatalogListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CatalogListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.catalog.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>>,
) {
  return ['v2', '/v2/catalog/object/:object_id', toValue(args)] as const
}

export function getV2CatalogObjectObjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CatalogObjectObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.catalog.object[':object_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CatalogObjectObjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogObjectObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CatalogObjectObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.catalog.object[':object_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2CustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.$get>>,
) {
  return ['v2', '/v2/customers', toValue(args)] as const
}

export function getV2CustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
          >,
          ReturnType<typeof getV2CustomersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.customers.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.groups.$get>>,
) {
  return ['v2', '/v2/customers/groups', toValue(args)] as const
}

export function getV2CustomersGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
            >
          >,
          ReturnType<typeof getV2CustomersGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>
  >,
) {
  return ['v2', '/v2/customers/groups/:group_id', toValue(args)] as const
}

export function getV2CustomersGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CustomersGroupsGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.segments.$get>>,
) {
  return ['v2', '/v2/customers/segments', toValue(args)] as const
}

export function getV2CustomersSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
            >
          >,
          ReturnType<typeof getV2CustomersSegmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersSegmentsSegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>
  >,
) {
  return ['v2', '/v2/customers/segments/:segment_id', toValue(args)] as const
}

export function getV2CustomersSegmentsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersSegmentsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.segments[':segment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CustomersSegmentsSegmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersSegmentsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersSegmentsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.segments[':segment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>>,
) {
  return ['v2', '/v2/customers/:customer_id', toValue(args)] as const
}

export function getV2CustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.devices.codes.$get>>,
) {
  return ['v2', '/v2/devices/codes', toValue(args)] as const
}

export function getV2DevicesCodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.devices.codes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DevicesCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.devices.codes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DevicesCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.devices.codes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>
            >
          >,
          ReturnType<typeof getV2DevicesCodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DevicesCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DevicesCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.devices.codes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>>,
) {
  return ['v2', '/v2/devices/codes/:id', toValue(args)] as const
}

export function getV2DevicesCodesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DevicesCodesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.devices.codes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DevicesCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DevicesCodesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DevicesCodesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DevicesCodesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.devices.codes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DisputesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disputes.$get>>,
) {
  return ['v2', '/v2/disputes', toValue(args)] as const
}

export function getV2DisputesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disputes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisputesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disputes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disputes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
          >,
          ReturnType<typeof getV2DisputesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisputesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disputes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DisputesDisputeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>>,
) {
  return ['v2', '/v2/disputes/:dispute_id', toValue(args)] as const
}

export function getV2DisputesDisputeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisputesDisputeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DisputesDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DisputesDisputeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisputesDisputeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disputes[':dispute_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>
  >,
) {
  return ['v2', '/v2/disputes/:dispute_id/evidence', toValue(args)] as const
}

export function getV2DisputesDisputeIdEvidenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisputesDisputeIdEvidenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].evidence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DisputesDisputeIdEvidenceQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeIdEvidenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisputesDisputeIdEvidenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disputes[':dispute_id'].evidence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']>
  >,
) {
  return ['v2', '/v2/disputes/:dispute_id/evidence/:evidence_id', toValue(args)] as const
}

export function getV2DisputesDisputeIdEvidenceEvidenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']>
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
                    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
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
                    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey>
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
              (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisputesDisputeIdEvidenceEvidenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2EmployeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.employees.$get>>,
) {
  return ['v2', '/v2/employees', toValue(args)] as const
}

export function getV2EmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.employees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.employees.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Employees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.employees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
          >,
          ReturnType<typeof getV2EmployeesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2EmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EmployeesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.employees)[':id']['$get']>>,
) {
  return ['v2', '/v2/employees/:id', toValue(args)] as const
}

export function getV2EmployeesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.employees)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EmployeesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.employees[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.employees)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2EmployeesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmployeesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EmployeesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.employees[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2GiftCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards']['$get']>>,
) {
  return ['v2', '/v2/gift-cards', toValue(args)] as const
}

export function getV2GiftCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GiftCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['gift-cards'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GiftCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
            >
          >,
          ReturnType<typeof getV2GiftCardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GiftCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GiftCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['gift-cards'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>>,
) {
  return ['v2', '/v2/gift-cards/activities', toValue(args)] as const
}

export function getV2GiftCardsActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GiftCardsActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['gift-cards'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2GiftCardsActivitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GiftCardsActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GiftCardsActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['gift-cards'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>>,
) {
  return ['v2', '/v2/gift-cards/:id', toValue(args)] as const
}

export function getV2GiftCardsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GiftCardsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['gift-cards'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GiftCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2GiftCardsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GiftCardsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GiftCardsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['gift-cards'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InventoryAdjustmentAdjustmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/adjustment/:adjustment_id', toValue(args)] as const
}

export function getV2InventoryAdjustmentAdjustmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryAdjustmentAdjustmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory.adjustment[':adjustment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>
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
                  ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2InventoryAdjustmentAdjustmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryAdjustmentAdjustmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryAdjustmentAdjustmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory.adjustment[':adjustment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InventoryAdjustmentsAdjustmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/adjustments/:adjustment_id', toValue(args)] as const
}

export function getV2InventoryAdjustmentsAdjustmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryAdjustmentsAdjustmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory.adjustments[':adjustment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2InventoryAdjustmentsAdjustmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryAdjustmentsAdjustmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryAdjustmentsAdjustmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory.adjustments[':adjustment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/physical-count/:physical_count_id', toValue(args)] as const
}

export function getV2InventoryPhysicalCountPhysicalCountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryPhysicalCountPhysicalCountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory['physical-count'][':physical_count_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
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
                    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
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
                    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2InventoryPhysicalCountPhysicalCountIdQueryKey>
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
            ReturnType<(typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryPhysicalCountPhysicalCountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryPhysicalCountPhysicalCountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory['physical-count'][':physical_count_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InventoryPhysicalCountsPhysicalCountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/physical-counts/:physical_count_id', toValue(args)] as const
}

export function getV2InventoryPhysicalCountsPhysicalCountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryPhysicalCountsPhysicalCountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory['physical-counts'][':physical_count_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']>
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
                    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
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
                    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2InventoryPhysicalCountsPhysicalCountIdQueryKey>
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
              (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryPhysicalCountsPhysicalCountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryPhysicalCountsPhysicalCountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory['physical-counts'][':physical_count_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InventoryTransfersTransferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/transfers/:transfer_id', toValue(args)] as const
}

export function getV2InventoryTransfersTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryTransfersTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory.transfers[':transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2InventoryTransfersTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryTransfersTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryTransfersTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory.transfers[':transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InventoryCatalogObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/:catalog_object_id', toValue(args)] as const
}

export function getV2InventoryCatalogObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryCatalogObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory[':catalog_object_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2InventoryCatalogObjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryCatalogObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryCatalogObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory[':catalog_object_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InventoryCatalogObjectIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
  >,
) {
  return ['v2', '/v2/inventory/:catalog_object_id/changes', toValue(args)] as const
}

export function getV2InventoryCatalogObjectIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventoryCatalogObjectIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventory[':catalog_object_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2InventoryCatalogObjectIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventoryCatalogObjectIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventoryCatalogObjectIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventory[':catalog_object_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.invoices.$get>>,
) {
  return ['v2', '/v2/invoices', toValue(args)] as const
}

export function getV2InvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.invoices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
          >,
          ReturnType<typeof getV2InvoicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2InvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.invoices.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>>,
) {
  return ['v2', '/v2/invoices/:invoice_id', toValue(args)] as const
}

export function getV2InvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.invoices[':invoice_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2InvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.invoices[':invoice_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['break-types']['$get']>>,
) {
  return ['v2', '/v2/labor/break-types', toValue(args)] as const
}

export function getV2LaborBreakTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['break-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborBreakTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['break-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LaborBreakTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['break-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborBreakTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborBreakTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborBreakTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['break-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>>,
) {
  return ['v2', '/v2/labor/break-types/:id', toValue(args)] as const
}

export function getV2LaborBreakTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborBreakTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['break-types'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborBreakTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborBreakTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborBreakTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['break-types'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>>,
) {
  return ['v2', '/v2/labor/employee-wages', toValue(args)] as const
}

export function getV2LaborEmployeeWagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborEmployeeWagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['employee-wages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LaborEmployeeWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborEmployeeWagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborEmployeeWagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborEmployeeWagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['employee-wages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LaborEmployeeWagesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>
  >,
) {
  return ['v2', '/v2/labor/employee-wages/:id', toValue(args)] as const
}

export function getV2LaborEmployeeWagesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborEmployeeWagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['employee-wages'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborEmployeeWagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborEmployeeWagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborEmployeeWagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['employee-wages'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.labor.shifts.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>>,
) {
  return ['v2', '/v2/labor/shifts/:id', toValue(args)] as const
}

export function getV2LaborShiftsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborShiftsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor.shifts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LaborShiftsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborShiftsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborShiftsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborShiftsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor.shifts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>>,
) {
  return ['v2', '/v2/labor/team-member-wages', toValue(args)] as const
}

export function getV2LaborTeamMemberWagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborTeamMemberWagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['team-member-wages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborTeamMemberWagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborTeamMemberWagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborTeamMemberWagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['team-member-wages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LaborTeamMemberWagesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>
  >,
) {
  return ['v2', '/v2/labor/team-member-wages/:id', toValue(args)] as const
}

export function getV2LaborTeamMemberWagesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborTeamMemberWagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['team-member-wages'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborTeamMemberWagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborTeamMemberWagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborTeamMemberWagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['team-member-wages'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LaborWorkweekConfigsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>>,
) {
  return ['v2', '/v2/labor/workweek-configs', toValue(args)] as const
}

export function getV2LaborWorkweekConfigsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LaborWorkweekConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.labor['workweek-configs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LaborWorkweekConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LaborWorkweekConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LaborWorkweekConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.labor['workweek-configs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2LocationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2LocationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          ReturnType<typeof getV2LocationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2LocationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.locations.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>>,
) {
  return ['v2', '/v2/locations/:location_id', toValue(args)] as const
}

export function getV2LocationsLocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations[':location_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LocationsLocationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations[':location_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>
  >,
) {
  return ['v2', '/v2/locations/:location_id/refunds', toValue(args)] as const
}

export function getV2LocationsLocationIdRefundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsLocationIdRefundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations[':location_id'].refunds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LocationsLocationIdRefundsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdRefundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsLocationIdRefundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations[':location_id'].refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsLocationIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
  >,
) {
  return ['v2', '/v2/locations/:location_id/transactions', toValue(args)] as const
}

export function getV2LocationsLocationIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsLocationIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2LocationsLocationIdTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsLocationIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations[':location_id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
    >
  >,
) {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id', toValue(args)] as const
}

export function getV2LocationsLocationIdTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsLocationIdTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations[':location_id'].transactions[':transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
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
                    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
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
                    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2LocationsLocationIdTransactionsTransactionIdQueryKey>
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
              (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsLocationIdTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations[':location_id'].transactions[':transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>
  >,
) {
  return ['v2', '/v2/loyalty/accounts/:account_id', toValue(args)] as const
}

export function getV2LoyaltyAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoyaltyAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.loyalty.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LoyaltyAccountsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoyaltyAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.loyalty.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.loyalty.events.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.loyalty.events.search.$post>,
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

export function getV2LoyaltyProgramsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2LoyaltyProgramsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.loyalty.programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LoyaltyPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>
            >
          >,
          ReturnType<typeof getV2LoyaltyProgramsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2LoyaltyProgramsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.loyalty.programs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LoyaltyProgramsProgramIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>
  >,
) {
  return ['v2', '/v2/loyalty/programs/:program_id', toValue(args)] as const
}

export function getV2LoyaltyProgramsProgramIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoyaltyProgramsProgramIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.loyalty.programs[':program_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LoyaltyProgramsProgramIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyProgramsProgramIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoyaltyProgramsProgramIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.loyalty.programs[':program_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.loyalty.rewards.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.loyalty.rewards.search.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>
  >,
) {
  return ['v2', '/v2/loyalty/rewards/:reward_id', toValue(args)] as const
}

export function getV2LoyaltyRewardsRewardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoyaltyRewardsRewardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.loyalty.rewards[':reward_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LoyaltyRewardsRewardIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoyaltyRewardsRewardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoyaltyRewardsRewardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.loyalty.rewards[':reward_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2MerchantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.merchants.$get>>,
) {
  return ['v2', '/v2/merchants', toValue(args)] as const
}

export function getV2MerchantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.merchants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MerchantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.merchants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Merchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.merchants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
          >,
          ReturnType<typeof getV2MerchantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2MerchantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MerchantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.merchants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MerchantsMerchantIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>>,
) {
  return ['v2', '/v2/merchants/:merchant_id', toValue(args)] as const
}

export function getV2MerchantsMerchantIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MerchantsMerchantIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.merchants[':merchant_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2MerchantsMerchantIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MerchantsMerchantIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MerchantsMerchantIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.merchants[':merchant_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.orders.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>>,
) {
  return ['v2', '/v2/orders/:order_id', toValue(args)] as const
}

export function getV2OrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.orders[':order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2OrdersOrderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.orders[':order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2PaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.payments.$get>>,
) {
  return ['v2', '/v2/payments', toValue(args)] as const
}

export function getV2PaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
          >,
          ReturnType<typeof getV2PaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.payments.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>>,
) {
  return ['v2', '/v2/payments/:payment_id', toValue(args)] as const
}

export function getV2PaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.payments[':payment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.payments[':payment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV2RefundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.refunds.$get>>,
) {
  return ['v2', '/v2/refunds', toValue(args)] as const
}

export function getV2RefundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.refunds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RefundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.refunds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.refunds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
          >,
          ReturnType<typeof getV2RefundsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RefundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RefundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.refunds.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>>,
) {
  return ['v2', '/v2/refunds/:refund_id', toValue(args)] as const
}

export function getV2RefundsRefundIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RefundsRefundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.refunds[':refund_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2RefundsRefundIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RefundsRefundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RefundsRefundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.refunds[':refund_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SitesQueryKey() {
  return ['v2', '/v2/sites'] as const
}

export function getV2SitesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2SitesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Sites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>
          >,
          ReturnType<typeof getV2SitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2SitesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sites.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SitesSiteIdSnippetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>,
) {
  return ['v2', '/v2/sites/:site_id/snippet', toValue(args)] as const
}

export function getV2SitesSiteIdSnippetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SitesSiteIdSnippetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sites[':site_id'].snippet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SitesSiteIdSnippetQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SitesSiteIdSnippetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SitesSiteIdSnippetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sites[':site_id'].snippet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>
  >,
) {
  return ['v2', '/v2/subscriptions/:subscription_id', toValue(args)] as const
}

export function getV2SubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.subscriptions[':subscription_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.subscriptions[':subscription_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
  >,
) {
  return ['v2', '/v2/subscriptions/:subscription_id/events', toValue(args)] as const
}

export function getV2SubscriptionsSubscriptionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SubscriptionsSubscriptionIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.subscriptions[':subscription_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2SubscriptionsSubscriptionIdEventsQueryKey>
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
            ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscriptionsSubscriptionIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SubscriptionsSubscriptionIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.subscriptions[':subscription_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>
  >,
) {
  return ['v2', '/v2/team-members/:team_member_id', toValue(args)] as const
}

export function getV2TeamMembersTeamMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamMembersTeamMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['team-members'][':team_member_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TeamMembersTeamMemberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamMembersTeamMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamMembersTeamMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['team-members'][':team_member_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']>
  >,
) {
  return ['v2', '/v2/team-members/:team_member_id/wage-setting', toValue(args)] as const
}

export function getV2TeamMembersTeamMemberIdWageSettingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamMembersTeamMemberIdWageSettingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['team-members'][':team_member_id']['wage-setting'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']>
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
                    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
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
                    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2TeamMembersTeamMemberIdWageSettingQueryKey>
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
              (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamMembersTeamMemberIdWageSettingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamMembersTeamMemberIdWageSettingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['team-members'][':team_member_id']['wage-setting'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>
  >,
) {
  return ['v2', '/v2/terminals/checkouts/:checkout_id', toValue(args)] as const
}

export function getV2TerminalsCheckoutsCheckoutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TerminalsCheckoutsCheckoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.terminals.checkouts[':checkout_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TerminalsCheckoutsCheckoutIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsCheckoutsCheckoutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TerminalsCheckoutsCheckoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.terminals.checkouts[':checkout_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>
  >,
) {
  return ['v2', '/v2/terminals/refunds/:terminal_refund_id', toValue(args)] as const
}

export function getV2TerminalsRefundsTerminalRefundIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TerminalsRefundsTerminalRefundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.terminals.refunds[':terminal_refund_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2TerminalsRefundsTerminalRefundIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsRefundsTerminalRefundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TerminalsRefundsTerminalRefundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.terminals.refunds[':terminal_refund_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
