import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostMobileAuthorizationCodeKey() {
  return ['mobile', '/mobile/authorization-code', 'POST'] as const
}

export function usePostMobileAuthorizationCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mobile)['authorization-code']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mobile)['authorization-code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMobileAuthorizationCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mobile)['authorization-code']['$post']> },
      ) => parseResponse(client.mobile['authorization-code'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2ClientsClientIdAccessTokenRenewKey() {
  return ['oauth2', '/oauth2/clients/:client_id/access-token/renew', 'POST'] as const
}

export function usePostOauth2ClientsClientIdAccessTokenRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2ClientsClientIdAccessTokenRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
          >
        },
      ) =>
        parseResponse(
          client.oauth2.clients[':client_id']['access-token'].renew.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2RevokeKey() {
  return ['oauth2', '/oauth2/revoke', 'POST'] as const
}

export function usePostOauth2Revoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2RevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.revoke.$post> }) =>
        parseResponse(client.oauth2.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2TokenKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function usePostOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.token.$post> }) =>
        parseResponse(client.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MeEmployeesKey(args: InferRequestType<typeof client.v1.me.employees.$get>) {
  return ['v1', '/v1/me/employees', args] as const
}

export function useGetV1MeEmployees<TError = unknown>(
  args: InferRequestType<typeof client.v1.me.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MeEmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MeEmployees<TError = unknown>(
  args: InferRequestType<typeof client.v1.me.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MeEmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MeEmployeesKey() {
  return ['v1', '/v1/me/employees', 'POST'] as const
}

export function usePostV1MeEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.employees.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.me.employees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MeEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.me.employees.$post> }) =>
        parseResponse(client.v1.me.employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MeEmployeesEmployeeIdKey(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
) {
  return ['v1', '/v1/me/employees/:employee_id', args] as const
}

export function useGetV1MeEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
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
        ? getGetV1MeEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MeEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
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
        ? getGetV1MeEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MeEmployeesEmployeeIdKey() {
  return ['v1', '/v1/me/employees/:employee_id', 'PUT'] as const
}

export function usePutV1MeEmployeesEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.me.employees)[':employee_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MeEmployeesEmployeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$put']> },
      ) => parseResponse(client.v1.me.employees[':employee_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MeRolesKey(args: InferRequestType<typeof client.v1.me.roles.$get>) {
  return ['v1', '/v1/me/roles', args] as const
}

export function useGetV1MeRoles<TError = unknown>(
  args: InferRequestType<typeof client.v1.me.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MeRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MeRoles<TError = unknown>(
  args: InferRequestType<typeof client.v1.me.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MeRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MeRolesKey() {
  return ['v1', '/v1/me/roles', 'POST'] as const
}

export function usePostV1MeRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.roles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.me.roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MeRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.me.roles.$post> }) =>
        parseResponse(client.v1.me.roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MeRolesRoleIdKey(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
) {
  return ['v1', '/v1/me/roles/:role_id', args] as const
}

export function useGetV1MeRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
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
        ? getGetV1MeRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MeRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
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
        ? getGetV1MeRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MeRolesRoleIdKey() {
  return ['v1', '/v1/me/roles/:role_id', 'PUT'] as const
}

export function usePutV1MeRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.me.roles)[':role_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.me.roles)[':role_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MeRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$put']> },
      ) => parseResponse(client.v1.me.roles[':role_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LocationIdOrdersKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
) {
  return ['v1', '/v1/:location_id/orders', args] as const
}

export function useGetV1LocationIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
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
        ? getGetV1LocationIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
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
        ? getGetV1LocationIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LocationIdOrdersOrderIdKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
) {
  return ['v1', '/v1/:location_id/orders/:order_id', args] as const
}

export function useGetV1LocationIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
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
        ? getGetV1LocationIdOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':location_id'].orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
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
        ? getGetV1LocationIdOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':location_id'].orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1LocationIdOrdersOrderIdKey() {
  return ['v1', '/v1/:location_id/orders/:order_id', 'PUT'] as const
}

export function usePutV1LocationIdOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LocationIdOrdersOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>
        },
      ) => parseResponse(client.v1[':location_id'].orders[':order_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LocationIdPaymentsKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
) {
  return ['v1', '/v1/:location_id/payments', args] as const
}

export function useGetV1LocationIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
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
        ? getGetV1LocationIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
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
        ? getGetV1LocationIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LocationIdPaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
) {
  return ['v1', '/v1/:location_id/payments/:payment_id', args] as const
}

export function useGetV1LocationIdPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
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
        ? getGetV1LocationIdPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':location_id'].payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
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
        ? getGetV1LocationIdPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':location_id'].payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LocationIdRefundsKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
) {
  return ['v1', '/v1/:location_id/refunds', args] as const
}

export function useGetV1LocationIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
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
        ? getGetV1LocationIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
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
        ? getGetV1LocationIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LocationIdRefundsKey() {
  return ['v1', '/v1/:location_id/refunds', 'POST'] as const
}

export function usePostV1LocationIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location_id']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':location_id']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LocationIdRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$post']> },
      ) => parseResponse(client.v1[':location_id'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LocationIdSettlementsKey(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
) {
  return ['v1', '/v1/:location_id/settlements', args] as const
}

export function useGetV1LocationIdSettlements<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
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
        ? getGetV1LocationIdSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdSettlements<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
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
        ? getGetV1LocationIdSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':location_id']['settlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':location_id'].settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LocationIdSettlementsSettlementIdKey(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
) {
  return ['v1', '/v1/:location_id/settlements/:settlement_id', args] as const
}

export function useGetV1LocationIdSettlementsSettlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1LocationIdSettlementsSettlementIdKey(args)
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
                (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
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
          client.v1[':location_id'].settlements[':settlement_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationIdSettlementsSettlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1LocationIdSettlementsSettlementIdKey(args)
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
                (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
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
          client.v1[':location_id'].settlements[':settlement_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApplePayDomainsKey() {
  return ['v2', '/v2/apple-pay/domains', 'POST'] as const
}

export function usePostV2ApplePayDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['apple-pay']['domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['apple-pay']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApplePayDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['apple-pay']['domains']['$post']> },
      ) => parseResponse(client.v2['apple-pay'].domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BankAccountsKey(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
) {
  return ['v2', '/v2/bank-accounts', args] as const
}

export function useGetV2BankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2BankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['bank-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2BankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['bank-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['bank-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BankAccountsByV1IdV1BankAccountIdKey(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
) {
  return ['v2', '/v2/bank-accounts/by-v1-id/:v1_bank_account_id', args] as const
}

export function useGetV2BankAccountsByV1IdV1BankAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BankAccountsByV1IdV1BankAccountIdKey(args)
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
                (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
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
          client.v2['bank-accounts']['by-v1-id'][':v1_bank_account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BankAccountsByV1IdV1BankAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BankAccountsByV1IdV1BankAccountIdKey(args)
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
                (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
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
          client.v2['bank-accounts']['by-v1-id'][':v1_bank_account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BankAccountsBankAccountIdKey(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
) {
  return ['v2', '/v2/bank-accounts/:bank_account_id', args] as const
}

export function useGetV2BankAccountsBankAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
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
        ? getGetV2BankAccountsBankAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['bank-accounts'][':bank_account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BankAccountsBankAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
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
        ? getGetV2BankAccountsBankAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['bank-accounts'][':bank_account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BookingsKey() {
  return ['v2', '/v2/bookings', 'POST'] as const
}

export function usePostV2Bookings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bookings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.bookings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.bookings.$post> }) =>
        parseResponse(client.v2.bookings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsAvailabilitySearchKey() {
  return ['v2', '/v2/bookings/availability/search', 'POST'] as const
}

export function usePostV2BookingsAvailabilitySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bookings.availability.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bookings.availability.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsAvailabilitySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bookings.availability.search.$post> },
      ) => parseResponse(client.v2.bookings.availability.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BookingsBusinessBookingProfileKey() {
  return ['v2', '/v2/bookings/business-booking-profile'] as const
}

export function useGetV2BookingsBusinessBookingProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BookingsBusinessBookingProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bookings['business-booking-profile'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBusinessBookingProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BookingsBusinessBookingProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['business-booking-profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bookings['business-booking-profile'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsTeamMemberBookingProfilesKey(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
) {
  return ['v2', '/v2/bookings/team-member-booking-profiles', args] as const
}

export function useGetV2BookingsTeamMemberBookingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
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
        ? getGetV2BookingsTeamMemberBookingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings['team-member-booking-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsTeamMemberBookingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
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
        ? getGetV2BookingsTeamMemberBookingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bookings['team-member-booking-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsTeamMemberBookingProfilesTeamMemberIdKey(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
) {
  return ['v2', '/v2/bookings/team-member-booking-profiles/:team_member_id', args] as const
}

export function useGetV2BookingsTeamMemberBookingProfilesTeamMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BookingsTeamMemberBookingProfilesTeamMemberIdKey(args)
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
                (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
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
          client.v2.bookings['team-member-booking-profiles'][':team_member_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsTeamMemberBookingProfilesTeamMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2BookingsTeamMemberBookingProfilesTeamMemberIdKey(args)
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
                (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
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
          client.v2.bookings['team-member-booking-profiles'][':team_member_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BookingsBookingIdKey(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
) {
  return ['v2', '/v2/bookings/:booking_id', args] as const
}

export function useGetV2BookingsBookingId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
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
        ? getGetV2BookingsBookingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bookings[':booking_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BookingsBookingId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
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
        ? getGetV2BookingsBookingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bookings[':booking_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2BookingsBookingIdKey() {
  return ['v2', '/v2/bookings/:booking_id', 'PUT'] as const
}

export function usePutV2BookingsBookingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':booking_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2BookingsBookingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$put']> },
      ) => parseResponse(client.v2.bookings[':booking_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BookingsBookingIdCancelKey() {
  return ['v2', '/v2/bookings/:booking_id/cancel', 'POST'] as const
}

export function usePostV2BookingsBookingIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BookingsBookingIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']> },
      ) => parseResponse(client.v2.bookings[':booking_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CardsKey(args: InferRequestType<typeof client.v2.cards.$get>) {
  return ['v2', '/v2/cards', args] as const
}

export function useGetV2Cards<TError = unknown>(
  args: InferRequestType<typeof client.v2.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Cards<TError = unknown>(
  args: InferRequestType<typeof client.v2.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2CardsKey() {
  return ['v2', '/v2/cards', 'POST'] as const
}

export function usePostV2Cards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.cards.$post> }) =>
        parseResponse(client.v2.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CardsCardIdKey(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
) {
  return ['v2', '/v2/cards/:card_id', args] as const
}

export function useGetV2CardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2CardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2CardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CardsCardIdDisableKey() {
  return ['v2', '/v2/cards/:card_id/disable', 'POST'] as const
}

export function usePostV2CardsCardIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.cards)[':card_id']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.cards)[':card_id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CardsCardIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.cards)[':card_id']['disable']['$post']> },
      ) => parseResponse(client.v2.cards[':card_id'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CashDrawersShiftsKey(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
) {
  return ['v2', '/v2/cash-drawers/shifts', args] as const
}

export function useGetV2CashDrawersShifts<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
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
        ? getGetV2CashDrawersShiftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['cash-drawers'].shifts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CashDrawersShifts<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
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
        ? getGetV2CashDrawersShiftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['cash-drawers'].shifts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CashDrawersShiftsShiftIdKey(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
) {
  return ['v2', '/v2/cash-drawers/shifts/:shift_id', args] as const
}

export function useGetV2CashDrawersShiftsShiftId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
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
        ? getGetV2CashDrawersShiftsShiftIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['cash-drawers'].shifts[':shift_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CashDrawersShiftsShiftId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
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
        ? getGetV2CashDrawersShiftsShiftIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['cash-drawers'].shifts[':shift_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CashDrawersShiftsShiftIdEventsKey(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
) {
  return ['v2', '/v2/cash-drawers/shifts/:shift_id/events', args] as const
}

export function useGetV2CashDrawersShiftsShiftIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CashDrawersShiftsShiftIdEventsKey(args)
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
                (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
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
          client.v2['cash-drawers'].shifts[':shift_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CashDrawersShiftsShiftIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CashDrawersShiftsShiftIdEventsKey(args)
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
                (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
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
          client.v2['cash-drawers'].shifts[':shift_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CatalogBatchDeleteKey() {
  return ['v2', '/v2/catalog/batch-delete', 'POST'] as const
}

export function usePostV2CatalogBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['batch-delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog)['batch-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.catalog)['batch-delete']['$post']> },
      ) => parseResponse(client.v2.catalog['batch-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogBatchRetrieveKey() {
  return ['v2', '/v2/catalog/batch-retrieve', 'POST'] as const
}

export function usePostV2CatalogBatchRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog)['batch-retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogBatchRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.catalog)['batch-retrieve']['$post']> },
      ) => parseResponse(client.v2.catalog['batch-retrieve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogBatchUpsertKey() {
  return ['v2', '/v2/catalog/batch-upsert', 'POST'] as const
}

export function usePostV2CatalogBatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['batch-upsert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog)['batch-upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogBatchUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.catalog)['batch-upsert']['$post']> },
      ) => parseResponse(client.v2.catalog['batch-upsert'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CatalogInfoKey() {
  return ['v2', '/v2/catalog/info'] as const
}

export function useGetV2CatalogInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CatalogInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CatalogInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CatalogInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CatalogListKey(args: InferRequestType<typeof client.v2.catalog.list.$get>) {
  return ['v2', '/v2/catalog/list', args] as const
}

export function useGetV2CatalogList<TError = unknown>(
  args: InferRequestType<typeof client.v2.catalog.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CatalogListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CatalogList<TError = unknown>(
  args: InferRequestType<typeof client.v2.catalog.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CatalogListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CatalogObjectKey() {
  return ['v2', '/v2/catalog/object', 'POST'] as const
}

export function usePostV2CatalogObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.object.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.catalog.object.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.catalog.object.$post> }) =>
        parseResponse(client.v2.catalog.object.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CatalogObjectObjectIdKey(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
) {
  return ['v2', '/v2/catalog/object/:object_id', args] as const
}

export function useGetV2CatalogObjectObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
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
        ? getGetV2CatalogObjectObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.object[':object_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CatalogObjectObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
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
        ? getGetV2CatalogObjectObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.object[':object_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CatalogObjectObjectIdKey() {
  return ['v2', '/v2/catalog/object/:object_id', 'DELETE'] as const
}

export function useDeleteV2CatalogObjectObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog.object)[':object_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CatalogObjectObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$delete']> },
      ) => parseResponse(client.v2.catalog.object[':object_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogSearchKey() {
  return ['v2', '/v2/catalog/search', 'POST'] as const
}

export function usePostV2CatalogSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.catalog.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.catalog.search.$post> }) =>
        parseResponse(client.v2.catalog.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogSearchCatalogItemsKey() {
  return ['v2', '/v2/catalog/search-catalog-items', 'POST'] as const
}

export function usePostV2CatalogSearchCatalogItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['search-catalog-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog)['search-catalog-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogSearchCatalogItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.catalog)['search-catalog-items']['$post']> },
      ) => parseResponse(client.v2.catalog['search-catalog-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogUpdateItemModifierListsKey() {
  return ['v2', '/v2/catalog/update-item-modifier-lists', 'POST'] as const
}

export function usePostV2CatalogUpdateItemModifierLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogUpdateItemModifierListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>
        },
      ) => parseResponse(client.v2.catalog['update-item-modifier-lists'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogUpdateItemTaxesKey() {
  return ['v2', '/v2/catalog/update-item-taxes', 'POST'] as const
}

export function usePostV2CatalogUpdateItemTaxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog)['update-item-taxes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog)['update-item-taxes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogUpdateItemTaxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.catalog)['update-item-taxes']['$post']> },
      ) => parseResponse(client.v2.catalog['update-item-taxes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersKey(args: InferRequestType<typeof client.v2.customers.$get>) {
  return ['v2', '/v2/customers', args] as const
}

export function useGetV2Customers<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Customers<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersKey() {
  return ['v2', '/v2/customers', 'POST'] as const
}

export function usePostV2Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.customers.$post> }) =>
        parseResponse(client.v2.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersGroupsKey(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
) {
  return ['v2', '/v2/customers/groups', args] as const
}

export function useGetV2CustomersGroups<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
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
        ? getGetV2CustomersGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersGroups<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
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
        ? getGetV2CustomersGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersGroupsKey() {
  return ['v2', '/v2/customers/groups', 'POST'] as const
}

export function usePostV2CustomersGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.customers.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.customers.groups.$post> }) =>
        parseResponse(client.v2.customers.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersGroupsGroupIdKey(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
) {
  return ['v2', '/v2/customers/groups/:group_id', args] as const
}

export function useGetV2CustomersGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
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
        ? getGetV2CustomersGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
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
        ? getGetV2CustomersGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2CustomersGroupsGroupIdKey() {
  return ['v2', '/v2/customers/groups/:group_id', 'PUT'] as const
}

export function usePutV2CustomersGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomersGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$put']> },
      ) => parseResponse(client.v2.customers.groups[':group_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomersGroupsGroupIdKey() {
  return ['v2', '/v2/customers/groups/:group_id', 'DELETE'] as const
}

export function useDeleteV2CustomersGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.groups)[':group_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.v2.customers.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomersSearchKey() {
  return ['v2', '/v2/customers/search', 'POST'] as const
}

export function usePostV2CustomersSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.customers.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.customers.search.$post> }) =>
        parseResponse(client.v2.customers.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersSegmentsKey(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
) {
  return ['v2', '/v2/customers/segments', args] as const
}

export function useGetV2CustomersSegments<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
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
        ? getGetV2CustomersSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersSegments<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
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
        ? getGetV2CustomersSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.segments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersSegmentsSegmentIdKey(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
) {
  return ['v2', '/v2/customers/segments/:segment_id', args] as const
}

export function useGetV2CustomersSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
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
        ? getGetV2CustomersSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
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
        ? getGetV2CustomersSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.segments)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdKey(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
) {
  return ['v2', '/v2/customers/:customer_id', args] as const
}

export function useGetV2CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
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
        ? getGetV2CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
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
        ? getGetV2CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2CustomersCustomerIdKey() {
  return ['v2', '/v2/customers/:customer_id', 'PUT'] as const
}

export function usePutV2CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.customers)[':customer_id']['$put']> },
      ) => parseResponse(client.v2.customers[':customer_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdKey() {
  return ['v2', '/v2/customers/:customer_id', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.customers)[':customer_id']['$delete']> },
      ) => parseResponse(client.v2.customers[':customer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdCardsKey() {
  return ['v2', '/v2/customers/:customer_id/cards', 'POST'] as const
}

export function usePostV2CustomersCustomerIdCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>
        },
      ) => parseResponse(client.v2.customers[':customer_id'].cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdCardsCardIdKey() {
  return ['v2', '/v2/customers/:customer_id/cards/:card_id', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerIdCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdCardsCardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customer_id'].cards[':card_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2CustomersCustomerIdGroupsGroupIdKey() {
  return ['v2', '/v2/customers/:customer_id/groups/:group_id', 'PUT'] as const
}

export function usePutV2CustomersCustomerIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomersCustomerIdGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customer_id'].groups[':group_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdGroupsGroupIdKey() {
  return ['v2', '/v2/customers/:customer_id/groups/:group_id', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customer_id'].groups[':group_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DevicesCodesKey(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
) {
  return ['v2', '/v2/devices/codes', args] as const
}

export function useGetV2DevicesCodes<TError = unknown>(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DevicesCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.devices.codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DevicesCodes<TError = unknown>(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DevicesCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.devices.codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DevicesCodesKey() {
  return ['v2', '/v2/devices/codes', 'POST'] as const
}

export function usePostV2DevicesCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.devices.codes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.devices.codes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DevicesCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.devices.codes.$post> }) =>
        parseResponse(client.v2.devices.codes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DevicesCodesIdKey(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
) {
  return ['v2', '/v2/devices/codes/:id', args] as const
}

export function useGetV2DevicesCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
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
        ? getGetV2DevicesCodesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.devices.codes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DevicesCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
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
        ? getGetV2DevicesCodesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.devices.codes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.devices.codes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DisputesKey(args: InferRequestType<typeof client.v2.disputes.$get>) {
  return ['v2', '/v2/disputes', args] as const
}

export function useGetV2Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DisputesDisputeIdKey(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
) {
  return ['v2', '/v2/disputes/:dispute_id', args] as const
}

export function useGetV2DisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
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
        ? getGetV2DisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
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
        ? getGetV2DisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DisputesDisputeIdAcceptKey() {
  return ['v2', '/v2/disputes/:dispute_id/accept', 'POST'] as const
}

export function usePostV2DisputesDisputeIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DisputesDisputeIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']> },
      ) => parseResponse(client.v2.disputes[':dispute_id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DisputesDisputeIdEvidenceKey(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
) {
  return ['v2', '/v2/disputes/:dispute_id/evidence', args] as const
}

export function useGetV2DisputesDisputeIdEvidence<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
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
        ? getGetV2DisputesDisputeIdEvidenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.disputes[':dispute_id'].evidence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DisputesDisputeIdEvidence<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
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
        ? getGetV2DisputesDisputeIdEvidenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.disputes[':dispute_id'].evidence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DisputesDisputeIdEvidenceTextKey() {
  return ['v2', '/v2/disputes/:dispute_id/evidence-text', 'POST'] as const
}

export function usePostV2DisputesDisputeIdEvidenceText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DisputesDisputeIdEvidenceTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.disputes[':dispute_id']['evidence-text'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DisputesDisputeIdEvidenceEvidenceIdKey(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
) {
  return ['v2', '/v2/disputes/:dispute_id/evidence/:evidence_id', args] as const
}

export function useGetV2DisputesDisputeIdEvidenceEvidenceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2DisputesDisputeIdEvidenceEvidenceIdKey(args)
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
                (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
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
          client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DisputesDisputeIdEvidenceEvidenceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2DisputesDisputeIdEvidenceEvidenceIdKey(args)
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
                (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
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
          client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DisputesDisputeIdEvidenceEvidenceIdKey() {
  return ['v2', '/v2/disputes/:dispute_id/evidence/:evidence_id', 'DELETE'] as const
}

export function useDeleteV2DisputesDisputeIdEvidenceEvidenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DisputesDisputeIdEvidenceEvidenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2DisputesDisputeIdSubmitEvidenceKey() {
  return ['v2', '/v2/disputes/:dispute_id/submit-evidence', 'POST'] as const
}

export function usePostV2DisputesDisputeIdSubmitEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DisputesDisputeIdSubmitEvidenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.disputes[':dispute_id']['submit-evidence'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmployeesKey(args: InferRequestType<typeof client.v2.employees.$get>) {
  return ['v2', '/v2/employees', args] as const
}

export function useGetV2Employees<TError = unknown>(
  args: InferRequestType<typeof client.v2.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Employees<TError = unknown>(
  args: InferRequestType<typeof client.v2.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmployeesIdKey(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
) {
  return ['v2', '/v2/employees/:id', args] as const
}

export function useGetV2EmployeesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EmployeesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.employees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmployeesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EmployeesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.employees)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.employees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2GiftCardsKey(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
) {
  return ['v2', '/v2/gift-cards', args] as const
}

export function useGetV2GiftCards<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2GiftCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['gift-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GiftCards<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2GiftCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['gift-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2GiftCardsKey() {
  return ['v2', '/v2/gift-cards', 'POST'] as const
}

export function usePostV2GiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['gift-cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['gift-cards']['$post']> },
      ) => parseResponse(client.v2['gift-cards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2GiftCardsActivitiesKey(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
) {
  return ['v2', '/v2/gift-cards/activities', args] as const
}

export function useGetV2GiftCardsActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
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
        ? getGetV2GiftCardsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['gift-cards'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GiftCardsActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
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
        ? getGetV2GiftCardsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['gift-cards'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2GiftCardsActivitiesKey() {
  return ['v2', '/v2/gift-cards/activities', 'POST'] as const
}

export function usePostV2GiftCardsActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['activities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['gift-cards']['activities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GiftCardsActivitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$post']> },
      ) => parseResponse(client.v2['gift-cards'].activities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2GiftCardsFromGanKey() {
  return ['v2', '/v2/gift-cards/from-gan', 'POST'] as const
}

export function usePostV2GiftCardsFromGan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['from-gan']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['gift-cards']['from-gan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GiftCardsFromGanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['gift-cards']['from-gan']['$post']> },
      ) => parseResponse(client.v2['gift-cards']['from-gan'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2GiftCardsFromNonceKey() {
  return ['v2', '/v2/gift-cards/from-nonce', 'POST'] as const
}

export function usePostV2GiftCardsFromNonce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GiftCardsFromNonceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['gift-cards']['from-nonce']['$post']> },
      ) => parseResponse(client.v2['gift-cards']['from-nonce'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2GiftCardsGiftCardIdLinkCustomerKey() {
  return ['v2', '/v2/gift-cards/:gift_card_id/link-customer', 'POST'] as const
}

export function usePostV2GiftCardsGiftCardIdLinkCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GiftCardsGiftCardIdLinkCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['gift-cards'][':gift_card_id']['link-customer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2GiftCardsGiftCardIdUnlinkCustomerKey() {
  return ['v2', '/v2/gift-cards/:gift_card_id/unlink-customer', 'POST'] as const
}

export function usePostV2GiftCardsGiftCardIdUnlinkCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GiftCardsGiftCardIdUnlinkCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['gift-cards'][':gift_card_id']['unlink-customer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2GiftCardsIdKey(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
) {
  return ['v2', '/v2/gift-cards/:id', args] as const
}

export function useGetV2GiftCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2GiftCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['gift-cards'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GiftCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2GiftCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['gift-cards'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['gift-cards'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InventoryAdjustmentAdjustmentIdKey(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
) {
  return ['v2', '/v2/inventory/adjustment/:adjustment_id', args] as const
}

export function useGetV2InventoryAdjustmentAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
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
        ? getGetV2InventoryAdjustmentAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory.adjustment[':adjustment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryAdjustmentAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
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
        ? getGetV2InventoryAdjustmentAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory.adjustment[':adjustment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InventoryAdjustmentsAdjustmentIdKey(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
) {
  return ['v2', '/v2/inventory/adjustments/:adjustment_id', args] as const
}

export function useGetV2InventoryAdjustmentsAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
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
        ? getGetV2InventoryAdjustmentsAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory.adjustments[':adjustment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryAdjustmentsAdjustmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
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
        ? getGetV2InventoryAdjustmentsAdjustmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory.adjustments[':adjustment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2InventoryBatchChangeKey() {
  return ['v2', '/v2/inventory/batch-change', 'POST'] as const
}

export function usePostV2InventoryBatchChange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)['batch-change']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventory)['batch-change']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventoryBatchChangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.inventory)['batch-change']['$post']> },
      ) => parseResponse(client.v2.inventory['batch-change'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventoryBatchRetrieveChangesKey() {
  return ['v2', '/v2/inventory/batch-retrieve-changes', 'POST'] as const
}

export function usePostV2InventoryBatchRetrieveChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventoryBatchRetrieveChangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>
        },
      ) => parseResponse(client.v2.inventory['batch-retrieve-changes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventoryBatchRetrieveCountsKey() {
  return ['v2', '/v2/inventory/batch-retrieve-counts', 'POST'] as const
}

export function usePostV2InventoryBatchRetrieveCounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventoryBatchRetrieveCountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>
        },
      ) => parseResponse(client.v2.inventory['batch-retrieve-counts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventoryChangesBatchCreateKey() {
  return ['v2', '/v2/inventory/changes/batch-create', 'POST'] as const
}

export function usePostV2InventoryChangesBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.changes)['batch-create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventory.changes)['batch-create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventoryChangesBatchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.inventory.changes)['batch-create']['$post']> },
      ) => parseResponse(client.v2.inventory.changes['batch-create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventoryChangesBatchRetrieveKey() {
  return ['v2', '/v2/inventory/changes/batch-retrieve', 'POST'] as const
}

export function usePostV2InventoryChangesBatchRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventoryChangesBatchRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>
        },
      ) => parseResponse(client.v2.inventory.changes['batch-retrieve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventoryCountsBatchRetrieveKey() {
  return ['v2', '/v2/inventory/counts/batch-retrieve', 'POST'] as const
}

export function usePostV2InventoryCountsBatchRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventoryCountsBatchRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>
        },
      ) => parseResponse(client.v2.inventory.counts['batch-retrieve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InventoryPhysicalCountPhysicalCountIdKey(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
) {
  return ['v2', '/v2/inventory/physical-count/:physical_count_id', args] as const
}

export function useGetV2InventoryPhysicalCountPhysicalCountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventoryPhysicalCountPhysicalCountIdKey(args)
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
                (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
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
          client.v2.inventory['physical-count'][':physical_count_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryPhysicalCountPhysicalCountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventoryPhysicalCountPhysicalCountIdKey(args)
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
                (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
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
          client.v2.inventory['physical-count'][':physical_count_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2InventoryPhysicalCountsPhysicalCountIdKey(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
) {
  return ['v2', '/v2/inventory/physical-counts/:physical_count_id', args] as const
}

export function useGetV2InventoryPhysicalCountsPhysicalCountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventoryPhysicalCountsPhysicalCountIdKey(args)
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
                (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
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
          client.v2.inventory['physical-counts'][':physical_count_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryPhysicalCountsPhysicalCountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventoryPhysicalCountsPhysicalCountIdKey(args)
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
                (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
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
          client.v2.inventory['physical-counts'][':physical_count_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2InventoryTransfersTransferIdKey(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
) {
  return ['v2', '/v2/inventory/transfers/:transfer_id', args] as const
}

export function useGetV2InventoryTransfersTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
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
        ? getGetV2InventoryTransfersTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory.transfers[':transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryTransfersTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
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
        ? getGetV2InventoryTransfersTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory.transfers[':transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InventoryCatalogObjectIdKey(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
) {
  return ['v2', '/v2/inventory/:catalog_object_id', args] as const
}

export function useGetV2InventoryCatalogObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
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
        ? getGetV2InventoryCatalogObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory[':catalog_object_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryCatalogObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
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
        ? getGetV2InventoryCatalogObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory[':catalog_object_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InventoryCatalogObjectIdChangesKey(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
) {
  return ['v2', '/v2/inventory/:catalog_object_id/changes', args] as const
}

export function useGetV2InventoryCatalogObjectIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
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
        ? getGetV2InventoryCatalogObjectIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory[':catalog_object_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventoryCatalogObjectIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
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
        ? getGetV2InventoryCatalogObjectIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventory[':catalog_object_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InvoicesKey(args: InferRequestType<typeof client.v2.invoices.$get>) {
  return ['v2', '/v2/invoices', args] as const
}

export function useGetV2Invoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Invoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2InvoicesKey() {
  return ['v2', '/v2/invoices', 'POST'] as const
}

export function usePostV2Invoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.invoices.$post> }) =>
        parseResponse(client.v2.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicesSearchKey() {
  return ['v2', '/v2/invoices/search', 'POST'] as const
}

export function usePostV2InvoicesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.invoices.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.invoices.search.$post> }) =>
        parseResponse(client.v2.invoices.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
) {
  return ['v2', '/v2/invoices/:invoice_id', args] as const
}

export function useGetV2InvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
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
        ? getGetV2InvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices[':invoice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
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
        ? getGetV2InvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices[':invoice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2InvoicesInvoiceIdKey() {
  return ['v2', '/v2/invoices/:invoice_id', 'PUT'] as const
}

export function usePutV2InvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2InvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$put']> },
      ) => parseResponse(client.v2.invoices[':invoice_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2InvoicesInvoiceIdKey() {
  return ['v2', '/v2/invoices/:invoice_id', 'DELETE'] as const
}

export function useDeleteV2InvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2InvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$delete']> },
      ) => parseResponse(client.v2.invoices[':invoice_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicesInvoiceIdCancelKey() {
  return ['v2', '/v2/invoices/:invoice_id/cancel', 'POST'] as const
}

export function usePostV2InvoicesInvoiceIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicesInvoiceIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']> },
      ) => parseResponse(client.v2.invoices[':invoice_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicesInvoiceIdPublishKey() {
  return ['v2', '/v2/invoices/:invoice_id/publish', 'POST'] as const
}

export function usePostV2InvoicesInvoiceIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicesInvoiceIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>
        },
      ) => parseResponse(client.v2.invoices[':invoice_id'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LaborBreakTypesKey(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
) {
  return ['v2', '/v2/labor/break-types', args] as const
}

export function useGetV2LaborBreakTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
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
        ? getGetV2LaborBreakTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['break-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborBreakTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
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
        ? getGetV2LaborBreakTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['break-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LaborBreakTypesKey() {
  return ['v2', '/v2/labor/break-types', 'POST'] as const
}

export function usePostV2LaborBreakTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor)['break-types']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.labor)['break-types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LaborBreakTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.labor)['break-types']['$post']> },
      ) => parseResponse(client.v2.labor['break-types'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LaborBreakTypesIdKey(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
) {
  return ['v2', '/v2/labor/break-types/:id', args] as const
}

export function useGetV2LaborBreakTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
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
        ? getGetV2LaborBreakTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['break-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborBreakTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
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
        ? getGetV2LaborBreakTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['break-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LaborBreakTypesIdKey() {
  return ['v2', '/v2/labor/break-types/:id', 'PUT'] as const
}

export function usePutV2LaborBreakTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LaborBreakTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$put']> },
      ) => parseResponse(client.v2.labor['break-types'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LaborBreakTypesIdKey() {
  return ['v2', '/v2/labor/break-types/:id', 'DELETE'] as const
}

export function useDeleteV2LaborBreakTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['break-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LaborBreakTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$delete']> },
      ) => parseResponse(client.v2.labor['break-types'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LaborEmployeeWagesKey(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
) {
  return ['v2', '/v2/labor/employee-wages', args] as const
}

export function useGetV2LaborEmployeeWages<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
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
        ? getGetV2LaborEmployeeWagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['employee-wages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborEmployeeWages<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
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
        ? getGetV2LaborEmployeeWagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['employee-wages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LaborEmployeeWagesIdKey(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
) {
  return ['v2', '/v2/labor/employee-wages/:id', args] as const
}

export function useGetV2LaborEmployeeWagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
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
        ? getGetV2LaborEmployeeWagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['employee-wages'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborEmployeeWagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
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
        ? getGetV2LaborEmployeeWagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['employee-wages'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LaborShiftsKey() {
  return ['v2', '/v2/labor/shifts', 'POST'] as const
}

export function usePostV2LaborShifts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.labor.shifts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LaborShiftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.labor.shifts.$post> }) =>
        parseResponse(client.v2.labor.shifts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LaborShiftsSearchKey() {
  return ['v2', '/v2/labor/shifts/search', 'POST'] as const
}

export function usePostV2LaborShiftsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.labor.shifts.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.labor.shifts.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LaborShiftsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.labor.shifts.search.$post> },
      ) => parseResponse(client.v2.labor.shifts.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LaborShiftsIdKey(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
) {
  return ['v2', '/v2/labor/shifts/:id', args] as const
}

export function useGetV2LaborShiftsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
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
        ? getGetV2LaborShiftsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor.shifts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborShiftsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
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
        ? getGetV2LaborShiftsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor.shifts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LaborShiftsIdKey() {
  return ['v2', '/v2/labor/shifts/:id', 'PUT'] as const
}

export function usePutV2LaborShiftsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.labor.shifts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LaborShiftsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$put']> },
      ) => parseResponse(client.v2.labor.shifts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LaborShiftsIdKey() {
  return ['v2', '/v2/labor/shifts/:id', 'DELETE'] as const
}

export function useDeleteV2LaborShiftsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.labor.shifts)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.labor.shifts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LaborShiftsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$delete']> },
      ) => parseResponse(client.v2.labor.shifts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LaborTeamMemberWagesKey(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
) {
  return ['v2', '/v2/labor/team-member-wages', args] as const
}

export function useGetV2LaborTeamMemberWages<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
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
        ? getGetV2LaborTeamMemberWagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['team-member-wages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborTeamMemberWages<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
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
        ? getGetV2LaborTeamMemberWagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['team-member-wages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LaborTeamMemberWagesIdKey(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
) {
  return ['v2', '/v2/labor/team-member-wages/:id', args] as const
}

export function useGetV2LaborTeamMemberWagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
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
        ? getGetV2LaborTeamMemberWagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.labor['team-member-wages'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborTeamMemberWagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
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
        ? getGetV2LaborTeamMemberWagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.labor['team-member-wages'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LaborWorkweekConfigsKey(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
) {
  return ['v2', '/v2/labor/workweek-configs', args] as const
}

export function useGetV2LaborWorkweekConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
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
        ? getGetV2LaborWorkweekConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['workweek-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LaborWorkweekConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
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
        ? getGetV2LaborWorkweekConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.labor['workweek-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LaborWorkweekConfigsIdKey() {
  return ['v2', '/v2/labor/workweek-configs/:id', 'PUT'] as const
}

export function usePutV2LaborWorkweekConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LaborWorkweekConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']> },
      ) => parseResponse(client.v2.labor['workweek-configs'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LocationsKey() {
  return ['v2', '/v2/locations'] as const
}

export function useGetV2Locations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Locations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LocationsKey() {
  return ['v2', '/v2/locations', 'POST'] as const
}

export function usePostV2Locations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.locations.$post> }) =>
        parseResponse(client.v2.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LocationsLocationIdKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id', args] as const
}

export function useGetV2LocationsLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
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
        ? getGetV2LocationsLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.locations[':location_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LocationsLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
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
        ? getGetV2LocationsLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.locations[':location_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LocationsLocationIdKey() {
  return ['v2', '/v2/locations/:location_id', 'PUT'] as const
}

export function usePutV2LocationsLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.locations)[':location_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LocationsLocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.locations)[':location_id']['$put']> },
      ) => parseResponse(client.v2.locations[':location_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LocationsLocationIdCheckoutsKey() {
  return ['v2', '/v2/locations/:location_id/checkouts', 'POST'] as const
}

export function usePostV2LocationsLocationIdCheckouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LocationsLocationIdCheckoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>
        },
      ) => parseResponse(client.v2.locations[':location_id'].checkouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LocationsLocationIdRefundsKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id/refunds', args] as const
}

export function useGetV2LocationsLocationIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
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
        ? getGetV2LocationsLocationIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.locations[':location_id'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LocationsLocationIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
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
        ? getGetV2LocationsLocationIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.locations[':location_id'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LocationsLocationIdTransactionsKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id/transactions', args] as const
}

export function useGetV2LocationsLocationIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
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
        ? getGetV2LocationsLocationIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.locations[':location_id'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LocationsLocationIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
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
        ? getGetV2LocationsLocationIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.locations[':location_id'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LocationsLocationIdTransactionsKey() {
  return ['v2', '/v2/locations/:location_id/transactions', 'POST'] as const
}

export function usePostV2LocationsLocationIdTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LocationsLocationIdTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.locations)[':location_id']['transactions']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.locations[':location_id'].transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LocationsLocationIdTransactionsTransactionIdKey(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
) {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id', args] as const
}

export function useGetV2LocationsLocationIdTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2LocationsLocationIdTransactionsTransactionIdKey(args)
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
                (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
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
          client.v2.locations[':location_id'].transactions[':transaction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LocationsLocationIdTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2LocationsLocationIdTransactionsTransactionIdKey(args)
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
                (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
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
          client.v2.locations[':location_id'].transactions[':transaction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdCaptureKey() {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id/capture', 'POST'] as const
}

export function usePostV2LocationsLocationIdTransactionsTransactionIdCapture<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LocationsLocationIdTransactionsTransactionIdCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.locations[':location_id'].transactions[':transaction_id'].capture.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdRefundKey() {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id/refund', 'POST'] as const
}

export function usePostV2LocationsLocationIdTransactionsTransactionIdRefund<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LocationsLocationIdTransactionsTransactionIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.locations[':location_id'].transactions[':transaction_id'].refund.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2LocationsLocationIdTransactionsTransactionIdVoidKey() {
  return ['v2', '/v2/locations/:location_id/transactions/:transaction_id/void', 'POST'] as const
}

export function usePostV2LocationsLocationIdTransactionsTransactionIdVoid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LocationsLocationIdTransactionsTransactionIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.locations[':location_id'].transactions[':transaction_id'].void.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyAccountsKey() {
  return ['v2', '/v2/loyalty/accounts', 'POST'] as const
}

export function usePostV2LoyaltyAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.loyalty.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.loyalty.accounts.$post> }) =>
        parseResponse(client.v2.loyalty.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyAccountsSearchKey() {
  return ['v2', '/v2/loyalty/accounts/search', 'POST'] as const
}

export function usePostV2LoyaltyAccountsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.accounts.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.loyalty.accounts.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyAccountsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.loyalty.accounts.search.$post> },
      ) => parseResponse(client.v2.loyalty.accounts.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LoyaltyAccountsAccountIdKey(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
) {
  return ['v2', '/v2/loyalty/accounts/:account_id', args] as const
}

export function useGetV2LoyaltyAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
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
        ? getGetV2LoyaltyAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.loyalty.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoyaltyAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
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
        ? getGetV2LoyaltyAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.loyalty.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LoyaltyAccountsAccountIdAccumulateKey() {
  return ['v2', '/v2/loyalty/accounts/:account_id/accumulate', 'POST'] as const
}

export function usePostV2LoyaltyAccountsAccountIdAccumulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyAccountsAccountIdAccumulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.loyalty.accounts[':account_id'].accumulate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyAccountsAccountIdAdjustKey() {
  return ['v2', '/v2/loyalty/accounts/:account_id/adjust', 'POST'] as const
}

export function usePostV2LoyaltyAccountsAccountIdAdjust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyAccountsAccountIdAdjustKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.loyalty.accounts[':account_id'].adjust.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyEventsSearchKey() {
  return ['v2', '/v2/loyalty/events/search', 'POST'] as const
}

export function usePostV2LoyaltyEventsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.events.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.loyalty.events.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyEventsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.loyalty.events.search.$post> },
      ) => parseResponse(client.v2.loyalty.events.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LoyaltyProgramsKey() {
  return ['v2', '/v2/loyalty/programs'] as const
}

export function useGetV2LoyaltyPrograms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LoyaltyProgramsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.loyalty.programs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoyaltyPrograms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LoyaltyProgramsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.programs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.loyalty.programs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LoyaltyProgramsProgramIdKey(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
) {
  return ['v2', '/v2/loyalty/programs/:program_id', args] as const
}

export function useGetV2LoyaltyProgramsProgramId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
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
        ? getGetV2LoyaltyProgramsProgramIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.loyalty.programs[':program_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoyaltyProgramsProgramId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
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
        ? getGetV2LoyaltyProgramsProgramIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.loyalty.programs[':program_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LoyaltyProgramsProgramIdCalculateKey() {
  return ['v2', '/v2/loyalty/programs/:program_id/calculate', 'POST'] as const
}

export function usePostV2LoyaltyProgramsProgramIdCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyProgramsProgramIdCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.loyalty.programs[':program_id'].calculate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyRewardsKey() {
  return ['v2', '/v2/loyalty/rewards', 'POST'] as const
}

export function usePostV2LoyaltyRewards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.rewards.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.loyalty.rewards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyRewardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.loyalty.rewards.$post> }) =>
        parseResponse(client.v2.loyalty.rewards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyRewardsSearchKey() {
  return ['v2', '/v2/loyalty/rewards/search', 'POST'] as const
}

export function usePostV2LoyaltyRewardsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.loyalty.rewards.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.loyalty.rewards.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyRewardsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.loyalty.rewards.search.$post> },
      ) => parseResponse(client.v2.loyalty.rewards.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LoyaltyRewardsRewardIdKey(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
) {
  return ['v2', '/v2/loyalty/rewards/:reward_id', args] as const
}

export function useGetV2LoyaltyRewardsRewardId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
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
        ? getGetV2LoyaltyRewardsRewardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.loyalty.rewards[':reward_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoyaltyRewardsRewardId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
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
        ? getGetV2LoyaltyRewardsRewardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.loyalty.rewards[':reward_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2LoyaltyRewardsRewardIdKey() {
  return ['v2', '/v2/loyalty/rewards/:reward_id', 'DELETE'] as const
}

export function useDeleteV2LoyaltyRewardsRewardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LoyaltyRewardsRewardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']> },
      ) => parseResponse(client.v2.loyalty.rewards[':reward_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoyaltyRewardsRewardIdRedeemKey() {
  return ['v2', '/v2/loyalty/rewards/:reward_id/redeem', 'POST'] as const
}

export function usePostV2LoyaltyRewardsRewardIdRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoyaltyRewardsRewardIdRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>
        },
      ) => parseResponse(client.v2.loyalty.rewards[':reward_id'].redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2MerchantsKey(args: InferRequestType<typeof client.v2.merchants.$get>) {
  return ['v2', '/v2/merchants', args] as const
}

export function useGetV2Merchants<TError = unknown>(
  args: InferRequestType<typeof client.v2.merchants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MerchantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Merchants<TError = unknown>(
  args: InferRequestType<typeof client.v2.merchants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MerchantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.merchants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.merchants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MerchantsMerchantIdKey(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
) {
  return ['v2', '/v2/merchants/:merchant_id', args] as const
}

export function useGetV2MerchantsMerchantId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
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
        ? getGetV2MerchantsMerchantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.merchants[':merchant_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MerchantsMerchantId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
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
        ? getGetV2MerchantsMerchantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.merchants)[':merchant_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.merchants[':merchant_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OrdersKey() {
  return ['v2', '/v2/orders', 'POST'] as const
}

export function usePostV2Orders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.orders.$post> }) =>
        parseResponse(client.v2.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OrdersBatchRetrieveKey() {
  return ['v2', '/v2/orders/batch-retrieve', 'POST'] as const
}

export function usePostV2OrdersBatchRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.orders)['batch-retrieve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.orders)['batch-retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OrdersBatchRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.orders)['batch-retrieve']['$post']> },
      ) => parseResponse(client.v2.orders['batch-retrieve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OrdersCalculateKey() {
  return ['v2', '/v2/orders/calculate', 'POST'] as const
}

export function usePostV2OrdersCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.calculate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.orders.calculate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OrdersCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.orders.calculate.$post> }) =>
        parseResponse(client.v2.orders.calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OrdersSearchKey() {
  return ['v2', '/v2/orders/search', 'POST'] as const
}

export function usePostV2OrdersSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.orders.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OrdersSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.orders.search.$post> }) =>
        parseResponse(client.v2.orders.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OrdersOrderIdKey(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
) {
  return ['v2', '/v2/orders/:order_id', args] as const
}

export function useGetV2OrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
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
        ? getGetV2OrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
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
        ? getGetV2OrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2OrdersOrderIdKey() {
  return ['v2', '/v2/orders/:order_id', 'PUT'] as const
}

export function usePutV2OrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.orders)[':order_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2OrdersOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.orders)[':order_id']['$put']> },
      ) => parseResponse(client.v2.orders[':order_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OrdersOrderIdPayKey() {
  return ['v2', '/v2/orders/:order_id/pay', 'POST'] as const
}

export function usePostV2OrdersOrderIdPay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['pay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.orders)[':order_id']['pay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OrdersOrderIdPayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.orders)[':order_id']['pay']['$post']> },
      ) => parseResponse(client.v2.orders[':order_id'].pay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsKey(args: InferRequestType<typeof client.v2.payments.$get>) {
  return ['v2', '/v2/payments', args] as const
}

export function useGetV2Payments<TError = unknown>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Payments<TError = unknown>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsKey() {
  return ['v2', '/v2/payments', 'POST'] as const
}

export function usePostV2Payments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.payments.$post> }) =>
        parseResponse(client.v2.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsCancelKey() {
  return ['v2', '/v2/payments/cancel', 'POST'] as const
}

export function usePostV2PaymentsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.payments.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.payments.cancel.$post> }) =>
        parseResponse(client.v2.payments.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
) {
  return ['v2', '/v2/payments/:payment_id', args] as const
}

export function useGetV2PaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
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
        ? getGetV2PaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
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
        ? getGetV2PaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2PaymentsPaymentIdKey() {
  return ['v2', '/v2/payments/:payment_id', 'PUT'] as const
}

export function usePutV2PaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':payment_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2PaymentsPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.payments)[':payment_id']['$put']> },
      ) => parseResponse(client.v2.payments[':payment_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsPaymentIdCancelKey() {
  return ['v2', '/v2/payments/:payment_id/cancel', 'POST'] as const
}

export function usePostV2PaymentsPaymentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsPaymentIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']> },
      ) => parseResponse(client.v2.payments[':payment_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsPaymentIdCompleteKey() {
  return ['v2', '/v2/payments/:payment_id/complete', 'POST'] as const
}

export function usePostV2PaymentsPaymentIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsPaymentIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>
        },
      ) => parseResponse(client.v2.payments[':payment_id'].complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2RefundsKey(args: InferRequestType<typeof client.v2.refunds.$get>) {
  return ['v2', '/v2/refunds', args] as const
}

export function useGetV2Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2RefundsKey() {
  return ['v2', '/v2/refunds', 'POST'] as const
}

export function usePostV2Refunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.refunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.refunds.$post> }) =>
        parseResponse(client.v2.refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2RefundsRefundIdKey(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
) {
  return ['v2', '/v2/refunds/:refund_id', args] as const
}

export function useGetV2RefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
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
        ? getGetV2RefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.refunds[':refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
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
        ? getGetV2RefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.refunds)[':refund_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.refunds[':refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SitesKey() {
  return ['v2', '/v2/sites'] as const
}

export function useGetV2Sites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Sites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sites.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SitesSiteIdSnippetKey(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
) {
  return ['v2', '/v2/sites/:site_id/snippet', args] as const
}

export function useGetV2SitesSiteIdSnippet<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
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
        ? getGetV2SitesSiteIdSnippetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sites[':site_id'].snippet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SitesSiteIdSnippet<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
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
        ? getGetV2SitesSiteIdSnippetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sites[':site_id'].snippet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SitesSiteIdSnippetKey() {
  return ['v2', '/v2/sites/:site_id/snippet', 'POST'] as const
}

export function usePostV2SitesSiteIdSnippet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SitesSiteIdSnippetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$post']> },
      ) => parseResponse(client.v2.sites[':site_id'].snippet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2SitesSiteIdSnippetKey() {
  return ['v2', '/v2/sites/:site_id/snippet', 'DELETE'] as const
}

export function useDeleteV2SitesSiteIdSnippet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SitesSiteIdSnippetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']> },
      ) => parseResponse(client.v2.sites[':site_id'].snippet.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscriptionsKey() {
  return ['v2', '/v2/subscriptions', 'POST'] as const
}

export function usePostV2Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.subscriptions.$post> }) =>
        parseResponse(client.v2.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscriptionsSearchKey() {
  return ['v2', '/v2/subscriptions/search', 'POST'] as const
}

export function usePostV2SubscriptionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.subscriptions.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscriptionsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.subscriptions.search.$post> },
      ) => parseResponse(client.v2.subscriptions.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
) {
  return ['v2', '/v2/subscriptions/:subscription_id', args] as const
}

export function useGetV2SubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
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
        ? getGetV2SubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.subscriptions[':subscription_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
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
        ? getGetV2SubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.subscriptions[':subscription_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2SubscriptionsSubscriptionIdKey() {
  return ['v2', '/v2/subscriptions/:subscription_id', 'PUT'] as const
}

export function usePutV2SubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2SubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$put']> },
      ) => parseResponse(client.v2.subscriptions[':subscription_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscriptionsSubscriptionIdCancelKey() {
  return ['v2', '/v2/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function usePostV2SubscriptionsSubscriptionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscriptionsSubscriptionIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.subscriptions[':subscription_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscriptionsSubscriptionIdEventsKey(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
) {
  return ['v2', '/v2/subscriptions/:subscription_id/events', args] as const
}

export function useGetV2SubscriptionsSubscriptionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
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
        ? getGetV2SubscriptionsSubscriptionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.subscriptions[':subscription_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscriptionsSubscriptionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
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
        ? getGetV2SubscriptionsSubscriptionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.subscriptions[':subscription_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SubscriptionsSubscriptionIdResumeKey() {
  return ['v2', '/v2/subscriptions/:subscription_id/resume', 'POST'] as const
}

export function usePostV2SubscriptionsSubscriptionIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscriptionsSubscriptionIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.subscriptions[':subscription_id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TeamMembersKey() {
  return ['v2', '/v2/team-members', 'POST'] as const
}

export function usePostV2TeamMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['team-members']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['team-members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TeamMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['team-members']['$post']> },
      ) => parseResponse(client.v2['team-members'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TeamMembersBulkCreateKey() {
  return ['v2', '/v2/team-members/bulk-create', 'POST'] as const
}

export function usePostV2TeamMembersBulkCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members']['bulk-create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['team-members']['bulk-create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TeamMembersBulkCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['team-members']['bulk-create']['$post']> },
      ) => parseResponse(client.v2['team-members']['bulk-create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TeamMembersBulkUpdateKey() {
  return ['v2', '/v2/team-members/bulk-update', 'POST'] as const
}

export function usePostV2TeamMembersBulkUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members']['bulk-update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['team-members']['bulk-update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TeamMembersBulkUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['team-members']['bulk-update']['$post']> },
      ) => parseResponse(client.v2['team-members']['bulk-update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TeamMembersSearchKey() {
  return ['v2', '/v2/team-members/search', 'POST'] as const
}

export function usePostV2TeamMembersSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['team-members']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TeamMembersSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['team-members']['search']['$post']> },
      ) => parseResponse(client.v2['team-members'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamMembersTeamMemberIdKey(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
) {
  return ['v2', '/v2/team-members/:team_member_id', args] as const
}

export function useGetV2TeamMembersTeamMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
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
        ? getGetV2TeamMembersTeamMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['team-members'][':team_member_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamMembersTeamMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
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
        ? getGetV2TeamMembersTeamMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['team-members'][':team_member_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2TeamMembersTeamMemberIdKey() {
  return ['v2', '/v2/team-members/:team_member_id', 'PUT'] as const
}

export function usePutV2TeamMembersTeamMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['team-members'][':team_member_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2TeamMembersTeamMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$put']> },
      ) => parseResponse(client.v2['team-members'][':team_member_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamMembersTeamMemberIdWageSettingKey(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
) {
  return ['v2', '/v2/team-members/:team_member_id/wage-setting', args] as const
}

export function useGetV2TeamMembersTeamMemberIdWageSetting<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2TeamMembersTeamMemberIdWageSettingKey(args)
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
                (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
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
          client.v2['team-members'][':team_member_id']['wage-setting'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamMembersTeamMemberIdWageSetting<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2TeamMembersTeamMemberIdWageSettingKey(args)
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
                (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
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
          client.v2['team-members'][':team_member_id']['wage-setting'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2TeamMembersTeamMemberIdWageSettingKey() {
  return ['v2', '/v2/team-members/:team_member_id/wage-setting', 'PUT'] as const
}

export function usePutV2TeamMembersTeamMemberIdWageSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2TeamMembersTeamMemberIdWageSettingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2['team-members'][':team_member_id']['wage-setting'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2TerminalsCheckoutsKey() {
  return ['v2', '/v2/terminals/checkouts', 'POST'] as const
}

export function usePostV2TerminalsCheckouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.checkouts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.terminals.checkouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsCheckoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.terminals.checkouts.$post> },
      ) => parseResponse(client.v2.terminals.checkouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TerminalsCheckoutsSearchKey() {
  return ['v2', '/v2/terminals/checkouts/search', 'POST'] as const
}

export function usePostV2TerminalsCheckoutsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.checkouts.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.terminals.checkouts.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsCheckoutsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.terminals.checkouts.search.$post> },
      ) => parseResponse(client.v2.terminals.checkouts.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TerminalsCheckoutsCheckoutIdKey(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
) {
  return ['v2', '/v2/terminals/checkouts/:checkout_id', args] as const
}

export function useGetV2TerminalsCheckoutsCheckoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
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
        ? getGetV2TerminalsCheckoutsCheckoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.terminals.checkouts[':checkout_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TerminalsCheckoutsCheckoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
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
        ? getGetV2TerminalsCheckoutsCheckoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.terminals.checkouts[':checkout_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TerminalsCheckoutsCheckoutIdCancelKey() {
  return ['v2', '/v2/terminals/checkouts/:checkout_id/cancel', 'POST'] as const
}

export function usePostV2TerminalsCheckoutsCheckoutIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsCheckoutsCheckoutIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.terminals.checkouts[':checkout_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2TerminalsRefundsKey() {
  return ['v2', '/v2/terminals/refunds', 'POST'] as const
}

export function usePostV2TerminalsRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.refunds.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.terminals.refunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.terminals.refunds.$post> },
      ) => parseResponse(client.v2.terminals.refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TerminalsRefundsSearchKey() {
  return ['v2', '/v2/terminals/refunds/search', 'POST'] as const
}

export function usePostV2TerminalsRefundsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.refunds.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.terminals.refunds.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsRefundsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.terminals.refunds.search.$post> },
      ) => parseResponse(client.v2.terminals.refunds.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TerminalsRefundsTerminalRefundIdKey(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
) {
  return ['v2', '/v2/terminals/refunds/:terminal_refund_id', args] as const
}

export function useGetV2TerminalsRefundsTerminalRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
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
        ? getGetV2TerminalsRefundsTerminalRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.terminals.refunds[':terminal_refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TerminalsRefundsTerminalRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
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
        ? getGetV2TerminalsRefundsTerminalRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.terminals.refunds[':terminal_refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TerminalsRefundsTerminalRefundIdCancelKey() {
  return ['v2', '/v2/terminals/refunds/:terminal_refund_id/cancel', 'POST'] as const
}

export function usePostV2TerminalsRefundsTerminalRefundIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsRefundsTerminalRefundIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.terminals.refunds[':terminal_refund_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
