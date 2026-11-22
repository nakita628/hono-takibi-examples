import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV1UsersMeKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function useGetApiV1UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CompaniesCompanyIdEmployeesKey(
  args: InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>,
) {
  return ['api', '/api/v1/companies/:company_id/employees', args] as const
}

export function useGetApiV1CompaniesCompanyIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
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
        ? getGetApiV1CompaniesCompanyIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.companies[':company_id'].employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompaniesCompanyIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
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
        ? getGetApiV1CompaniesCompanyIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.companies[':company_id'].employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesKey(
  args: InferRequestType<typeof client.api.v1.employees.$get>,
) {
  return ['api', '/api/v1/employees', args] as const
}

export function useGetApiV1Employees<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Employees<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EmployeesKey() {
  return ['api', '/api/v1/employees', 'POST'] as const
}

export function usePostApiV1Employees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.employees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.employees.$post> }) =>
        parseResponse(client.api.v1.employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesIdKey(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
) {
  return ['api', '/api/v1/employees/:id', args] as const
}

export function useGetApiV1EmployeesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
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
        ? getGetApiV1EmployeesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.employees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
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
        ? getGetApiV1EmployeesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.employees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesIdKey() {
  return ['api', '/api/v1/employees/:id', 'PUT'] as const
}

export function usePutApiV1EmployeesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.employees)[':id']['$put']> },
      ) => parseResponse(client.api.v1.employees[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EmployeesIdKey() {
  return ['api', '/api/v1/employees/:id', 'DELETE'] as const
}

export function useDeleteApiV1EmployeesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EmployeesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.employees)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.employees[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdProfileRuleKey(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>,
) {
  return ['api', '/api/v1/employees/:employee_id/profile_rule', args] as const
}

export function useGetApiV1EmployeesEmployeeIdProfileRule<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
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
        ? getGetApiV1EmployeesEmployeeIdProfileRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.employees[':employee_id'].profile_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdProfileRule<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
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
        ? getGetApiV1EmployeesEmployeeIdProfileRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.employees[':employee_id'].profile_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdProfileRuleKey() {
  return ['api', '/api/v1/employees/:employee_id/profile_rule', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdProfileRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdProfileRuleKey()
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
            (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].profile_rule.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdHealthInsuranceRuleKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/health_insurance_rule', args] as const
}

export function useGetApiV1EmployeesEmployeeIdHealthInsuranceRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdHealthInsuranceRuleKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
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
          client.api.v1.employees[':employee_id'].health_insurance_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdHealthInsuranceRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdHealthInsuranceRuleKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
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
          client.api.v1.employees[':employee_id'].health_insurance_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleKey() {
  return ['api', '/api/v1/employees/:employee_id/health_insurance_rule', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdHealthInsuranceRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleKey()
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
            (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].health_insurance_rule.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/welfare_pension_insurance_rule', args] as const
}

export function useGetApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
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
          client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
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
          client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleKey() {
  return ['api', '/api/v1/employees/:employee_id/welfare_pension_insurance_rule', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleKey()
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
            (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdDependentRulesKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/dependent_rules', args] as const
}

export function useGetApiV1EmployeesEmployeeIdDependentRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdDependentRulesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
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
          client.api.v1.employees[':employee_id'].dependent_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdDependentRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdDependentRulesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
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
          client.api.v1.employees[':employee_id'].dependent_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateKey() {
  return ['api', '/api/v1/employees/:employee_id/dependent_rules/bulk_update', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdDependentRulesBulkUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateKey()
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
            (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].dependent_rules.bulk_update.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdBankAccountRuleKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/bank_account_rule', args] as const
}

export function useGetApiV1EmployeesEmployeeIdBankAccountRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdBankAccountRuleKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
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
          client.api.v1.employees[':employee_id'].bank_account_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdBankAccountRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdBankAccountRuleKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
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
          client.api.v1.employees[':employee_id'].bank_account_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdBankAccountRuleKey() {
  return ['api', '/api/v1/employees/:employee_id/bank_account_rule', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdBankAccountRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdBankAccountRuleKey()
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
            (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].bank_account_rule.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdBasicPayRuleKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/basic_pay_rule', args] as const
}

export function useGetApiV1EmployeesEmployeeIdBasicPayRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
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
        ? getGetApiV1EmployeesEmployeeIdBasicPayRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.employees[':employee_id'].basic_pay_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdBasicPayRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
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
        ? getGetApiV1EmployeesEmployeeIdBasicPayRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.employees[':employee_id'].basic_pay_rule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdBasicPayRuleKey() {
  return ['api', '/api/v1/employees/:employee_id/basic_pay_rule', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdBasicPayRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdBasicPayRuleKey()
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
            (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].basic_pay_rule.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdAllowanceRulesKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules', args] as const
}

export function useGetApiV1EmployeesEmployeeIdAllowanceRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAllowanceRulesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
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
          client.api.v1.employees[':employee_id'].allowance_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdAllowanceRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAllowanceRulesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
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
          client.api.v1.employees[':employee_id'].allowance_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdAllowanceRulesKey() {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdAllowanceRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdAllowanceRulesKey()
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
            (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].allowance_rules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdKey() {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules/:id', 'DELETE'] as const
}

export function useDeleteApiV1EmployeesEmployeeIdAllowanceRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdKey()
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
            (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].allowance_rules[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdDeductionRulesKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules', args] as const
}

export function useGetApiV1EmployeesEmployeeIdDeductionRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdDeductionRulesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
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
          client.api.v1.employees[':employee_id'].deduction_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdDeductionRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdDeductionRulesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
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
          client.api.v1.employees[':employee_id'].deduction_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdDeductionRulesKey() {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdDeductionRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdDeductionRulesKey()
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
            (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].deduction_rules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdKey() {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules/:id', 'DELETE'] as const
}

export function useDeleteApiV1EmployeesEmployeeIdDeductionRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdKey()
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
            (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].deduction_rules[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdProfileCustomFieldsKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/profile_custom_fields', args] as const
}

export function useGetApiV1EmployeesEmployeeIdProfileCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdProfileCustomFieldsKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
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
          client.api.v1.employees[':employee_id'].profile_custom_fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdProfileCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdProfileCustomFieldsKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
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
          client.api.v1.employees[':employee_id'].profile_custom_fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdWorkRecordsDateKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', args] as const
}

export function useGetApiV1EmployeesEmployeeIdWorkRecordsDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdWorkRecordsDateKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
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
          client.api.v1.employees[':employee_id'].work_records[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdWorkRecordsDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdWorkRecordsDateKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
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
          client.api.v1.employees[':employee_id'].work_records[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdWorkRecordsDateKey() {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdWorkRecordsDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdWorkRecordsDateKey()
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
            (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].work_records[':date'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateKey() {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', 'DELETE'] as const
}

export function useDeleteApiV1EmployeesEmployeeIdWorkRecordsDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateKey()
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
            (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].work_records[':date'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/work_record_summaries/:year/:month', args] as const
}

export function useGetApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
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
          client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
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
          client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthKey() {
  return [
    'api',
    '/api/v1/employees/:employee_id/work_record_summaries/:year/:month',
    'PUT',
  ] as const
}

export function usePutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthKey()
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
            (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdTimeClocksKey(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks', args] as const
}

export function useGetApiV1EmployeesEmployeeIdTimeClocks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
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
        ? getGetApiV1EmployeesEmployeeIdTimeClocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.employees[':employee_id'].time_clocks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdTimeClocks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
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
        ? getGetApiV1EmployeesEmployeeIdTimeClocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.employees[':employee_id'].time_clocks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EmployeesEmployeeIdTimeClocksKey() {
  return ['api', '/api/v1/employees/:employee_id/time_clocks', 'POST'] as const
}

export function usePostApiV1EmployeesEmployeeIdTimeClocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EmployeesEmployeeIdTimeClocksKey()
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
            (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].time_clocks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdTimeClocksIdKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks/:id', args] as const
}

export function useGetApiV1EmployeesEmployeeIdTimeClocksId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdTimeClocksIdKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
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
          client.api.v1.employees[':employee_id'].time_clocks[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdTimeClocksId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdTimeClocksIdKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
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
          client.api.v1.employees[':employee_id'].time_clocks[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdTimeClocksAvailableTypesKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks/available_types', args] as const
}

export function useGetApiV1EmployeesEmployeeIdTimeClocksAvailableTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdTimeClocksAvailableTypesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
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
          client.api.v1.employees[':employee_id'].time_clocks.available_types.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdTimeClocksAvailableTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdTimeClocksAvailableTypesKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
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
          client.api.v1.employees[':employee_id'].time_clocks.available_types.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdSpecialHolidaysKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/special_holidays', args] as const
}

export function useGetApiV1EmployeesEmployeeIdSpecialHolidays<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdSpecialHolidaysKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
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
          client.api.v1.employees[':employee_id'].special_holidays.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdSpecialHolidays<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdSpecialHolidaysKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
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
          client.api.v1.employees[':employee_id'].special_holidays.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/employees/:employee_id/attendance_tag_summaries/:year/:month',
    args,
  ] as const
}

export function useGetApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
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
          client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
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
          client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthKey() {
  return [
    'api',
    '/api/v1/employees/:employee_id/attendance_tag_summaries/:year/:month',
    'PUT',
  ] as const
}

export function usePutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthKey()
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
            (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdAttendanceTagsKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags', args] as const
}

export function useGetApiV1EmployeesEmployeeIdAttendanceTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAttendanceTagsKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
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
          client.api.v1.employees[':employee_id'].attendance_tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdAttendanceTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAttendanceTagsKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
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
          client.api.v1.employees[':employee_id'].attendance_tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdAttendanceTagsDateKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags/:date', args] as const
}

export function useGetApiV1EmployeesEmployeeIdAttendanceTagsDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAttendanceTagsDateKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
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
          client.api.v1.employees[':employee_id'].attendance_tags[':date'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdAttendanceTagsDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdAttendanceTagsDateKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
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
          client.api.v1.employees[':employee_id'].attendance_tags[':date'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EmployeesEmployeeIdAttendanceTagsDateKey() {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags/:date', 'PUT'] as const
}

export function usePutApiV1EmployeesEmployeeIdAttendanceTagsDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EmployeesEmployeeIdAttendanceTagsDateKey()
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
            (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.employees[':employee_id'].attendance_tags[':date'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SalariesEmployeePayrollStatementsKey(
  args: InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
) {
  return ['api', '/api/v1/salaries/employee_payroll_statements', args] as const
}

export function useGetApiV1SalariesEmployeePayrollStatements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
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
        ? getGetApiV1SalariesEmployeePayrollStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.salaries.employee_payroll_statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SalariesEmployeePayrollStatements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
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
        ? getGetApiV1SalariesEmployeePayrollStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.salaries.employee_payroll_statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SalariesEmployeePayrollStatementsEmployeeIdKey(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
) {
  return ['api', '/api/v1/salaries/employee_payroll_statements/:employee_id', args] as const
}

export function useGetApiV1SalariesEmployeePayrollStatementsEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
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
        ? getGetApiV1SalariesEmployeePayrollStatementsEmployeeIdKey(args)
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
                (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
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
          client.api.v1.salaries.employee_payroll_statements[':employee_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SalariesEmployeePayrollStatementsEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
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
        ? getGetApiV1SalariesEmployeePayrollStatementsEmployeeIdKey(args)
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
                (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
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
          client.api.v1.salaries.employee_payroll_statements[':employee_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkKey() {
  return ['api', '/api/v1/salaries/employee_payroll_statements/:employee_id/remark', 'PUT'] as const
}

export function usePutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemark<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkKey()
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
            (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.salaries.employee_payroll_statements[':employee_id'].remark.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BonusesEmployeePayrollStatementsKey(
  args: InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
) {
  return ['api', '/api/v1/bonuses/employee_payroll_statements', args] as const
}

export function useGetApiV1BonusesEmployeePayrollStatements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
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
        ? getGetApiV1BonusesEmployeePayrollStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bonuses.employee_payroll_statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BonusesEmployeePayrollStatements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
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
        ? getGetApiV1BonusesEmployeePayrollStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bonuses.employee_payroll_statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BonusesEmployeePayrollStatementsEmployeeIdKey(
  args: InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
) {
  return ['api', '/api/v1/bonuses/employee_payroll_statements/:employee_id', args] as const
}

export function useGetApiV1BonusesEmployeePayrollStatementsEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
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
        ? getGetApiV1BonusesEmployeePayrollStatementsEmployeeIdKey(args)
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
                (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
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
          client.api.v1.bonuses.employee_payroll_statements[':employee_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BonusesEmployeePayrollStatementsEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
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
        ? getGetApiV1BonusesEmployeePayrollStatementsEmployeeIdKey(args)
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
                (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
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
          client.api.v1.bonuses.employee_payroll_statements[':employee_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeeGroupMembershipsKey(
  args: InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
) {
  return ['api', '/api/v1/employee_group_memberships', args] as const
}

export function useGetApiV1EmployeeGroupMemberships<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
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
        ? getGetApiV1EmployeeGroupMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.employee_group_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeeGroupMemberships<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
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
        ? getGetApiV1EmployeeGroupMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.employee_group_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EmployeesEmployeeIdGroupMembershipsKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/group_memberships', args] as const
}

export function useGetApiV1EmployeesEmployeeIdGroupMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdGroupMembershipsKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
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
          client.api.v1.employees[':employee_id'].group_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EmployeesEmployeeIdGroupMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
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
        ? getGetApiV1EmployeesEmployeeIdGroupMembershipsKey(args)
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
                (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
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
          client.api.v1.employees[':employee_id'].group_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsKey(args: InferRequestType<typeof client.api.v1.groups.$get>) {
  return ['api', '/api/v1/groups', args] as const
}

export function useGetApiV1Groups<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1GroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Groups<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1GroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupsKey() {
  return ['api', '/api/v1/groups', 'POST'] as const
}

export function usePostApiV1Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.groups.$post> }) =>
        parseResponse(client.api.v1.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1GroupsIdKey() {
  return ['api', '/api/v1/groups/:id', 'PUT'] as const
}

export function usePutApiV1GroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.groups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1GroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.groups)[':id']['$put']> },
      ) => parseResponse(client.api.v1.groups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1GroupsIdKey() {
  return ['api', '/api/v1/groups/:id', 'DELETE'] as const
}

export function useDeleteApiV1GroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1GroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.groups)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AllowancesKey(
  args: InferRequestType<typeof client.api.v1.allowances.$get>,
) {
  return ['api', '/api/v1/allowances', args] as const
}

export function useGetApiV1Allowances<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.allowances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
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
        ? getGetApiV1AllowancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.allowances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Allowances<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.allowances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
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
        ? getGetApiV1AllowancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.allowances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AllowancesKey() {
  return ['api', '/api/v1/allowances', 'POST'] as const
}

export function usePostApiV1Allowances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.allowances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AllowancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.allowances.$post> }) =>
        parseResponse(client.api.v1.allowances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AllowancesIdKey(
  args: InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
) {
  return ['api', '/api/v1/allowances/:id', args] as const
}

export function useGetApiV1AllowancesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
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
        ? getGetApiV1AllowancesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.allowances[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AllowancesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
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
        ? getGetApiV1AllowancesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.allowances[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DeductionsKey(
  args: InferRequestType<typeof client.api.v1.deductions.$get>,
) {
  return ['api', '/api/v1/deductions', args] as const
}

export function useGetApiV1Deductions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.deductions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
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
        ? getGetApiV1DeductionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.deductions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Deductions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.deductions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
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
        ? getGetApiV1DeductionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.deductions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DeductionsKey() {
  return ['api', '/api/v1/deductions', 'POST'] as const
}

export function usePostApiV1Deductions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.deductions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DeductionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.deductions.$post> }) =>
        parseResponse(client.api.v1.deductions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1DeductionsIdKey(
  args: InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
) {
  return ['api', '/api/v1/deductions/:id', args] as const
}

export function useGetApiV1DeductionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
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
        ? getGetApiV1DeductionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.deductions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DeductionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
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
        ? getGetApiV1DeductionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.deductions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PositionsKey(
  args: InferRequestType<typeof client.api.v1.positions.$get>,
) {
  return ['api', '/api/v1/positions', args] as const
}

export function useGetApiV1Positions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PositionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Positions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PositionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PositionsKey() {
  return ['api', '/api/v1/positions', 'POST'] as const
}

export function usePostApiV1Positions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.positions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PositionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.positions.$post> }) =>
        parseResponse(client.api.v1.positions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1PositionsIdKey() {
  return ['api', '/api/v1/positions/:id', 'PUT'] as const
}

export function usePutApiV1PositionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.positions)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.positions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PositionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.positions)[':id']['$put']> },
      ) => parseResponse(client.api.v1.positions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PositionsIdKey() {
  return ['api', '/api/v1/positions/:id', 'DELETE'] as const
}

export function useDeleteApiV1PositionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.positions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.positions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PositionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.positions)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.positions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsMonthlyAttendancesKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
) {
  return ['api', '/api/v1/approval_requests/monthly_attendances', args] as const
}

export function useGetApiV1ApprovalRequestsMonthlyAttendances<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
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
        ? getGetApiV1ApprovalRequestsMonthlyAttendancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.monthly_attendances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsMonthlyAttendances<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
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
        ? getGetApiV1ApprovalRequestsMonthlyAttendancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.monthly_attendances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsMonthlyAttendancesKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsMonthlyAttendances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsMonthlyAttendancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.monthly_attendances.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsMonthlyAttendancesIdKey(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
) {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', args] as const
}

export function useGetApiV1ApprovalRequestsMonthlyAttendancesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
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
        ? getGetApiV1ApprovalRequestsMonthlyAttendancesIdKey(args)
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
                (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
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
          client.api.v1.approval_requests.monthly_attendances[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsMonthlyAttendancesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
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
        ? getGetApiV1ApprovalRequestsMonthlyAttendancesIdKey(args)
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
                (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
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
          client.api.v1.approval_requests.monthly_attendances[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ApprovalRequestsMonthlyAttendancesIdKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', 'PUT'] as const
}

export function usePutApiV1ApprovalRequestsMonthlyAttendancesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ApprovalRequestsMonthlyAttendancesIdKey()
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
            (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.monthly_attendances[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', 'DELETE'] as const
}

export function useDeleteApiV1ApprovalRequestsMonthlyAttendancesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdKey()
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
            (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.monthly_attendances[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id/actions', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsMonthlyAttendancesIdActions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsKey()
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
            (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.monthly_attendances[':id'].actions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsWorkTimesKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
) {
  return ['api', '/api/v1/approval_requests/work_times', args] as const
}

export function useGetApiV1ApprovalRequestsWorkTimes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
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
        ? getGetApiV1ApprovalRequestsWorkTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.work_times.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsWorkTimes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
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
        ? getGetApiV1ApprovalRequestsWorkTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.work_times.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsWorkTimesKey() {
  return ['api', '/api/v1/approval_requests/work_times', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsWorkTimes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.approval_requests.work_times.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsWorkTimesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.approval_requests.work_times.$post> },
      ) => parseResponse(client.api.v1.approval_requests.work_times.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsWorkTimesIdKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/work_times/:id', args] as const
}

export function useGetApiV1ApprovalRequestsWorkTimesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
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
        ? getGetApiV1ApprovalRequestsWorkTimesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.work_times[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsWorkTimesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
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
        ? getGetApiV1ApprovalRequestsWorkTimesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.work_times[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ApprovalRequestsWorkTimesIdKey() {
  return ['api', '/api/v1/approval_requests/work_times/:id', 'PUT'] as const
}

export function usePutApiV1ApprovalRequestsWorkTimesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ApprovalRequestsWorkTimesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>
        },
      ) =>
        parseResponse(client.api.v1.approval_requests.work_times[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ApprovalRequestsWorkTimesIdKey() {
  return ['api', '/api/v1/approval_requests/work_times/:id', 'DELETE'] as const
}

export function useDeleteApiV1ApprovalRequestsWorkTimesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ApprovalRequestsWorkTimesIdKey()
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
            (typeof client.api.v1.approval_requests.work_times)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.work_times[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsWorkTimesIdActionsKey() {
  return ['api', '/api/v1/approval_requests/work_times/:id/actions', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsWorkTimesIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsWorkTimesIdActionsKey()
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
            (typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.work_times[':id'].actions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsPaidHolidaysKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
) {
  return ['api', '/api/v1/approval_requests/paid_holidays', args] as const
}

export function useGetApiV1ApprovalRequestsPaidHolidays<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
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
        ? getGetApiV1ApprovalRequestsPaidHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.paid_holidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsPaidHolidays<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
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
        ? getGetApiV1ApprovalRequestsPaidHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.paid_holidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsPaidHolidaysKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsPaidHolidays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsPaidHolidaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post> },
      ) => parseResponse(client.api.v1.approval_requests.paid_holidays.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsPaidHolidaysIdKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', args] as const
}

export function useGetApiV1ApprovalRequestsPaidHolidaysId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
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
        ? getGetApiV1ApprovalRequestsPaidHolidaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.paid_holidays[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsPaidHolidaysId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
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
        ? getGetApiV1ApprovalRequestsPaidHolidaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.paid_holidays[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ApprovalRequestsPaidHolidaysIdKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', 'PUT'] as const
}

export function usePutApiV1ApprovalRequestsPaidHolidaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ApprovalRequestsPaidHolidaysIdKey()
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
            (typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.paid_holidays[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ApprovalRequestsPaidHolidaysIdKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', 'DELETE'] as const
}

export function useDeleteApiV1ApprovalRequestsPaidHolidaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ApprovalRequestsPaidHolidaysIdKey()
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
            (typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.paid_holidays[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsPaidHolidaysIdActionsKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id/actions', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsPaidHolidaysIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsPaidHolidaysIdActionsKey()
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
            (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.paid_holidays[':id'].actions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsSpecialHolidaysKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
) {
  return ['api', '/api/v1/approval_requests/special_holidays', args] as const
}

export function useGetApiV1ApprovalRequestsSpecialHolidays<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
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
        ? getGetApiV1ApprovalRequestsSpecialHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.special_holidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsSpecialHolidays<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
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
        ? getGetApiV1ApprovalRequestsSpecialHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.special_holidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsSpecialHolidaysKey() {
  return ['api', '/api/v1/approval_requests/special_holidays', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsSpecialHolidays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsSpecialHolidaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post> },
      ) =>
        parseResponse(client.api.v1.approval_requests.special_holidays.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsSpecialHolidaysIdKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', args] as const
}

export function useGetApiV1ApprovalRequestsSpecialHolidaysId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
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
        ? getGetApiV1ApprovalRequestsSpecialHolidaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.special_holidays[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsSpecialHolidaysId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
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
        ? getGetApiV1ApprovalRequestsSpecialHolidaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.special_holidays[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ApprovalRequestsSpecialHolidaysIdKey() {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', 'PUT'] as const
}

export function usePutApiV1ApprovalRequestsSpecialHolidaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ApprovalRequestsSpecialHolidaysIdKey()
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
            (typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.special_holidays[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ApprovalRequestsSpecialHolidaysIdKey() {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', 'DELETE'] as const
}

export function useDeleteApiV1ApprovalRequestsSpecialHolidaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ApprovalRequestsSpecialHolidaysIdKey()
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
            (typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.special_holidays[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsKey() {
  return ['api', '/api/v1/approval_requests/special_holidays/:id/actions', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsSpecialHolidaysIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsKey()
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
            (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.special_holidays[':id'].actions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsOvertimeWorksKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
) {
  return ['api', '/api/v1/approval_requests/overtime_works', args] as const
}

export function useGetApiV1ApprovalRequestsOvertimeWorks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
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
        ? getGetApiV1ApprovalRequestsOvertimeWorksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.overtime_works.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsOvertimeWorks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
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
        ? getGetApiV1ApprovalRequestsOvertimeWorksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_requests.overtime_works.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsOvertimeWorksKey() {
  return ['api', '/api/v1/approval_requests/overtime_works', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsOvertimeWorks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsOvertimeWorksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post> },
      ) => parseResponse(client.api.v1.approval_requests.overtime_works.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsOvertimeWorksIdKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', args] as const
}

export function useGetApiV1ApprovalRequestsOvertimeWorksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
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
        ? getGetApiV1ApprovalRequestsOvertimeWorksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsOvertimeWorksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
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
        ? getGetApiV1ApprovalRequestsOvertimeWorksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ApprovalRequestsOvertimeWorksIdKey() {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', 'PUT'] as const
}

export function usePutApiV1ApprovalRequestsOvertimeWorksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ApprovalRequestsOvertimeWorksIdKey()
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
            (typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ApprovalRequestsOvertimeWorksIdKey() {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', 'DELETE'] as const
}

export function useDeleteApiV1ApprovalRequestsOvertimeWorksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ApprovalRequestsOvertimeWorksIdKey()
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
            (typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ApprovalRequestsOvertimeWorksIdActionsKey() {
  return ['api', '/api/v1/approval_requests/overtime_works/:id/actions', 'POST'] as const
}

export function usePostApiV1ApprovalRequestsOvertimeWorksIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ApprovalRequestsOvertimeWorksIdActionsKey()
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
            (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works[':id'].actions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ApprovalRequestsOvertimeWorksSettingKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
) {
  return ['api', '/api/v1/approval_requests/overtime_works/setting', args] as const
}

export function useGetApiV1ApprovalRequestsOvertimeWorksSetting<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
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
        ? getGetApiV1ApprovalRequestsOvertimeWorksSettingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works.setting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalRequestsOvertimeWorksSetting<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
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
        ? getGetApiV1ApprovalRequestsOvertimeWorksSettingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.approval_requests.overtime_works.setting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ApprovalFlowRoutesKey(
  args: InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
) {
  return ['api', '/api/v1/approval_flow_routes', args] as const
}

export function useGetApiV1ApprovalFlowRoutes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
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
        ? getGetApiV1ApprovalFlowRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.approval_flow_routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalFlowRoutes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
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
        ? getGetApiV1ApprovalFlowRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.approval_flow_routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ApprovalFlowRoutesIdKey(
  args: InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_flow_routes/:id', args] as const
}

export function useGetApiV1ApprovalFlowRoutesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
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
        ? getGetApiV1ApprovalFlowRoutesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_flow_routes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ApprovalFlowRoutesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
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
        ? getGetApiV1ApprovalFlowRoutesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.approval_flow_routes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1YearendAdjustmentsYearEmployeesKey(
  args: InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>,
) {
  return ['api', '/api/v1/yearend_adjustments/:year/employees', args] as const
}

export function useGetApiV1YearendAdjustmentsYearEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
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
        ? getGetApiV1YearendAdjustmentsYearEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].employees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1YearendAdjustmentsYearEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
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
        ? getGetApiV1YearendAdjustmentsYearEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].employees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1YearendAdjustmentsYearEmployeesEmployeeIdKey(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
) {
  return ['api', '/api/v1/yearend_adjustments/:year/employees/:employee_id', args] as const
}

export function useGetApiV1YearendAdjustmentsYearEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
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
        ? getGetApiV1YearendAdjustmentsYearEmployeesEmployeeIdKey(args)
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
                (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
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
          client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1YearendAdjustmentsYearEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
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
        ? getGetApiV1YearendAdjustmentsYearEmployeesEmployeeIdKey(args)
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
                (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
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
          client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/employees/:employee_id', 'PUT'] as const
}

export function usePutApiV1YearendAdjustmentsYearEmployeesEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/payroll_and_bonus/:employee_id', 'PUT'] as const
}

export function usePutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].payroll_and_bonus[':employee_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/dependents/:employee_id', 'PUT'] as const
}

export function usePutApiV1YearendAdjustmentsYearDependentsEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].dependents[':employee_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/previous_jobs/:employee_id', 'PUT'] as const
}

export function usePutApiV1YearendAdjustmentsYearPreviousJobsEmployeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].previous_jobs[':employee_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/previous_jobs/:employee_id', 'DELETE'] as const
}

export function useDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].previous_jobs[':employee_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/insurances/:employee_id', 'POST'] as const
}

export function usePostApiV1YearendAdjustmentsYearInsurancesEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/insurances/:employee_id/:id', 'PUT'] as const
}

export function usePutApiV1YearendAdjustmentsYearInsurancesEmployeeIdId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'][':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/insurances/:employee_id/:id', 'DELETE'] as const
}

export function useDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'][':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdKey() {
  return [
    'api',
    '/api/v1/yearend_adjustments/:year/housing_loan_deductions/:employee_id',
    'PUT',
  ] as const
}

export function usePutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].housing_loan_deductions[':employee_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id', 'POST'] as const
}

export function usePostApiV1YearendAdjustmentsYearHousingLoansEmployeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id/:id', 'PUT'] as const
}

export function usePutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'][':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdKey() {
  return [
    'api',
    '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdKey()
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
            (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'][':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
