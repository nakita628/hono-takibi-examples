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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1UsersMeQueryKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function getApiV1UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeQueryKey>
  >({
    queryKey: getApiV1UsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1CompaniesCompanyIdEmployeesQueryKey(
  args: InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>,
) {
  return ['api', '/api/v1/companies/:company_id/employees', args] as const
}

export function getApiV1CompaniesCompanyIdEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompaniesCompanyIdEmployeesQueryKey>
  >({
    queryKey: getApiV1CompaniesCompanyIdEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.companies[':company_id'].employees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CompaniesCompanyIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.companies)[':company_id']['employees']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CompaniesCompanyIdEmployeesQueryKey>
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
      ...getApiV1CompaniesCompanyIdEmployeesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesQueryKey(
  args: InferRequestType<typeof client.api.v1.employees.$get>,
) {
  return ['api', '/api/v1/employees', args] as const
}

export function getApiV1EmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesQueryKey>
  >({
    queryKey: getApiV1EmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Employees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.employees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1EmployeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1EmployeesMutationKey() {
  return ['api', '/api/v1/employees', 'POST'] as const
}

export function getPostApiV1EmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.employees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmployeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.employees.$post>) {
      return parseResponse(client.api.v1.employees.$post(args, options))
    },
  })
}

export function createPostApiV1Employees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.employees.$post>,
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
    const mutationDefaults = getPostApiV1EmployeesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1EmployeesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
) {
  return ['api', '/api/v1/employees/:id', args] as const
}

export function getApiV1EmployeesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesIdQueryKey>
  >({
    queryKey: getApiV1EmployeesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1EmployeesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1EmployeesIdMutationKey() {
  return ['api', '/api/v1/employees/:id', 'PUT'] as const
}

export function getPutApiV1EmployeesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.employees)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.employees)[':id']['$put']>) {
      return parseResponse(client.api.v1.employees[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1EmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.employees)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1EmployeesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1EmployeesIdMutationKey() {
  return ['api', '/api/v1/employees/:id', 'DELETE'] as const
}

export function getDeleteApiV1EmployeesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.employees)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EmployeesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.employees)[':id']['$delete']>) {
      return parseResponse(client.api.v1.employees[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1EmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.employees)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1EmployeesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdProfileRuleQueryKey(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>,
) {
  return ['api', '/api/v1/employees/:employee_id/profile_rule', args] as const
}

export function getApiV1EmployeesEmployeeIdProfileRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdProfileRuleQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdProfileRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].profile_rule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdProfileRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdProfileRuleQueryKey>
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
      ...getApiV1EmployeesEmployeeIdProfileRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdProfileRuleMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/profile_rule', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdProfileRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdProfileRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.employees[':employee_id'].profile_rule.$put(args, options))
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdProfileRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']>,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdProfileRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/health_insurance_rule', args] as const
}

export function getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].health_insurance_rule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdHealthInsuranceRule<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey>
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
      ...getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/health_insurance_rule', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].health_insurance_rule.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdHealthInsuranceRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/welfare_pension_insurance_rule', args] as const
}

export function getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey>
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
      ...getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/welfare_pension_insurance_rule', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdDependentRulesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/dependent_rules', args] as const
}

export function getApiV1EmployeesEmployeeIdDependentRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdDependentRulesQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdDependentRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].dependent_rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdDependentRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdDependentRulesQueryKey>
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
      ...getApiV1EmployeesEmployeeIdDependentRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/dependent_rules/bulk_update', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].dependent_rules.bulk_update.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateMutationOptions<
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

export function getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/bank_account_rule', args] as const
}

export function getApiV1EmployeesEmployeeIdBankAccountRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].bank_account_rule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdBankAccountRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey>
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
      ...getApiV1EmployeesEmployeeIdBankAccountRuleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdBankAccountRuleMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/bank_account_rule', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdBankAccountRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdBankAccountRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].bank_account_rule.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdBankAccountRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdBankAccountRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/basic_pay_rule', args] as const
}

export function getApiV1EmployeesEmployeeIdBasicPayRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].basic_pay_rule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdBasicPayRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey>
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
      ...getApiV1EmployeesEmployeeIdBasicPayRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdBasicPayRuleMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/basic_pay_rule', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdBasicPayRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdBasicPayRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].basic_pay_rule.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdBasicPayRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdBasicPayRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules', args] as const
}

export function getApiV1EmployeesEmployeeIdAllowanceRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].allowance_rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdAllowanceRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey>
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
      ...getApiV1EmployeesEmployeeIdAllowanceRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdAllowanceRulesMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdAllowanceRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdAllowanceRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].allowance_rules.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdAllowanceRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdAllowanceRulesMutationOptions<
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

export function getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules/:id', 'DELETE'] as const
}

export function getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].allowance_rules[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1EmployeesEmployeeIdAllowanceRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdMutationOptions<
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

export function getApiV1EmployeesEmployeeIdDeductionRulesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules', args] as const
}

export function getApiV1EmployeesEmployeeIdDeductionRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdDeductionRulesQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdDeductionRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].deduction_rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdDeductionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdDeductionRulesQueryKey>
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
      ...getApiV1EmployeesEmployeeIdDeductionRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdDeductionRulesMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdDeductionRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdDeductionRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].deduction_rules.$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdDeductionRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdDeductionRulesMutationOptions<
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

export function getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules/:id', 'DELETE'] as const
}

export function getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].deduction_rules[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1EmployeesEmployeeIdDeductionRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdMutationOptions<
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

export function getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/profile_custom_fields', args] as const
}

export function getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].profile_custom_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdProfileCustomFields<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey>
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
      ...getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', args] as const
}

export function getApiV1EmployeesEmployeeIdWorkRecordsDateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_records[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdWorkRecordsDate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey>
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
      ...getApiV1EmployeesEmployeeIdWorkRecordsDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdWorkRecordsDateMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdWorkRecordsDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdWorkRecordsDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_records[':date'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdWorkRecordsDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdWorkRecordsDateMutationOptions<
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

export function getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', 'DELETE'] as const
}

export function getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_records[':date'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1EmployeesEmployeeIdWorkRecordsDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateMutationOptions<
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

export function getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/work_record_summaries/:year/:month', args] as const
}

export function getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey>
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
      ...getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthMutationKey() {
  return [
    'api',
    '/api/v1/employees/:employee_id/work_record_summaries/:year/:month',
    'PUT',
  ] as const
}

export function getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthMutationOptions<
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

export function getApiV1EmployeesEmployeeIdTimeClocksQueryKey(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks', args] as const
}

export function getApiV1EmployeesEmployeeIdTimeClocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdTimeClocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].time_clocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdTimeClocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksQueryKey>
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
      ...getApiV1EmployeesEmployeeIdTimeClocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1EmployeesEmployeeIdTimeClocksMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/time_clocks', 'POST'] as const
}

export function getPostApiV1EmployeesEmployeeIdTimeClocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmployeesEmployeeIdTimeClocksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.employees[':employee_id'].time_clocks.$post(args, options))
    },
  })
}

export function createPostApiV1EmployeesEmployeeIdTimeClocks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']>,
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
    const mutationDefaults = getPostApiV1EmployeesEmployeeIdTimeClocksMutationOptions<
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

export function getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks/:id', args] as const
}

export function getApiV1EmployeesEmployeeIdTimeClocksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].time_clocks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdTimeClocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey>
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
      ...getApiV1EmployeesEmployeeIdTimeClocksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks/available_types', args] as const
}

export function getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].time_clocks.available_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdTimeClocksAvailableTypes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey>
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
      ...getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/special_holidays', args] as const
}

export function getApiV1EmployeesEmployeeIdSpecialHolidaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].special_holidays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdSpecialHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey>
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
      ...getApiV1EmployeesEmployeeIdSpecialHolidaysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey(
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

export function getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey>
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
      ...getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthMutationKey() {
  return [
    'api',
    '/api/v1/employees/:employee_id/attendance_tag_summaries/:year/:month',
    'PUT',
  ] as const
}

export function getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthMutationOptions<
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

export function getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags', args] as const
}

export function getApiV1EmployeesEmployeeIdAttendanceTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdAttendanceTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey>
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
      ...getApiV1EmployeesEmployeeIdAttendanceTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags/:date', args] as const
}

export function getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tags[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdAttendanceTagsDate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey>
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
      ...getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1EmployeesEmployeeIdAttendanceTagsDateMutationKey() {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags/:date', 'PUT'] as const
}

export function getPutApiV1EmployeesEmployeeIdAttendanceTagsDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EmployeesEmployeeIdAttendanceTagsDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tags[':date'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1EmployeesEmployeeIdAttendanceTagsDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
        >,
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
    const mutationDefaults = getPutApiV1EmployeesEmployeeIdAttendanceTagsDateMutationOptions<
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

export function getApiV1SalariesEmployeePayrollStatementsQueryKey(
  args: InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
) {
  return ['api', '/api/v1/salaries/employee_payroll_statements', args] as const
}

export function getApiV1SalariesEmployeePayrollStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsQueryKey>
  >({
    queryKey: getApiV1SalariesEmployeePayrollStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.salaries.employee_payroll_statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SalariesEmployeePayrollStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsQueryKey>
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
      ...getApiV1SalariesEmployeePayrollStatementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
) {
  return ['api', '/api/v1/salaries/employee_payroll_statements/:employee_id', args] as const
}

export function getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey>
  >({
    queryKey: getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.salaries.employee_payroll_statements[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SalariesEmployeePayrollStatementsEmployeeId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey>
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
      ...getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkMutationKey() {
  return ['api', '/api/v1/salaries/employee_payroll_statements/:employee_id/remark', 'PUT'] as const
}

export function getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.salaries.employee_payroll_statements[':employee_id'].remark.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemark<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkMutationOptions<
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

export function getApiV1BonusesEmployeePayrollStatementsQueryKey(
  args: InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
) {
  return ['api', '/api/v1/bonuses/employee_payroll_statements', args] as const
}

export function getApiV1BonusesEmployeePayrollStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsQueryKey>
  >({
    queryKey: getApiV1BonusesEmployeePayrollStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.bonuses.employee_payroll_statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BonusesEmployeePayrollStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsQueryKey>
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
      ...getApiV1BonusesEmployeePayrollStatementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
) {
  return ['api', '/api/v1/bonuses/employee_payroll_statements/:employee_id', args] as const
}

export function getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey>
  >({
    queryKey: getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.bonuses.employee_payroll_statements[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BonusesEmployeePayrollStatementsEmployeeId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey>
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
      ...getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeeGroupMembershipsQueryKey(
  args: InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
) {
  return ['api', '/api/v1/employee_group_memberships', args] as const
}

export function getApiV1EmployeeGroupMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeeGroupMembershipsQueryKey>
  >({
    queryKey: getApiV1EmployeeGroupMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employee_group_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeeGroupMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeeGroupMembershipsQueryKey>
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
      ...getApiV1EmployeeGroupMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/group_memberships', args] as const
}

export function getApiV1EmployeesEmployeeIdGroupMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey>
  >({
    queryKey: getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].group_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EmployeesEmployeeIdGroupMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey>
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
      ...getApiV1EmployeesEmployeeIdGroupMembershipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1GroupsQueryKey(args: InferRequestType<typeof client.api.v1.groups.$get>) {
  return ['api', '/api/v1/groups', args] as const
}

export function getApiV1GroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsQueryKey>
  >({
    queryKey: getApiV1GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Groups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1GroupsMutationKey() {
  return ['api', '/api/v1/groups', 'POST'] as const
}

export function getPostApiV1GroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.groups.$post>) {
      return parseResponse(client.api.v1.groups.$post(args, options))
    },
  })
}

export function createPostApiV1Groups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.groups.$post>,
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
    const mutationDefaults = getPostApiV1GroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1GroupsIdMutationKey() {
  return ['api', '/api/v1/groups/:id', 'PUT'] as const
}

export function getPutApiV1GroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.groups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1GroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.groups)[':id']['$put']>) {
      return parseResponse(client.api.v1.groups[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1GroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.groups)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1GroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1GroupsIdMutationKey() {
  return ['api', '/api/v1/groups/:id', 'DELETE'] as const
}

export function getDeleteApiV1GroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1GroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.groups)[':id']['$delete']>) {
      return parseResponse(client.api.v1.groups[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1GroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.groups)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1GroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AllowancesQueryKey(
  args: InferRequestType<typeof client.api.v1.allowances.$get>,
) {
  return ['api', '/api/v1/allowances', args] as const
}

export function getApiV1AllowancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.allowances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllowancesQueryKey>
  >({
    queryKey: getApiV1AllowancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.allowances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Allowances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.allowances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AllowancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AllowancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AllowancesMutationKey() {
  return ['api', '/api/v1/allowances', 'POST'] as const
}

export function getPostApiV1AllowancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.allowances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AllowancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.allowances.$post>) {
      return parseResponse(client.api.v1.allowances.$post(args, options))
    },
  })
}

export function createPostApiV1Allowances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.allowances.$post>,
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
    const mutationDefaults = getPostApiV1AllowancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AllowancesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
) {
  return ['api', '/api/v1/allowances/:id', args] as const
}

export function getApiV1AllowancesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllowancesIdQueryKey>
  >({
    queryKey: getApiV1AllowancesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.allowances[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AllowancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AllowancesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AllowancesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DeductionsQueryKey(
  args: InferRequestType<typeof client.api.v1.deductions.$get>,
) {
  return ['api', '/api/v1/deductions', args] as const
}

export function getApiV1DeductionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.deductions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DeductionsQueryKey>
  >({
    queryKey: getApiV1DeductionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.deductions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Deductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.deductions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DeductionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DeductionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1DeductionsMutationKey() {
  return ['api', '/api/v1/deductions', 'POST'] as const
}

export function getPostApiV1DeductionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.deductions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DeductionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.deductions.$post>) {
      return parseResponse(client.api.v1.deductions.$post(args, options))
    },
  })
}

export function createPostApiV1Deductions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.deductions.$post>,
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
    const mutationDefaults = getPostApiV1DeductionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DeductionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
) {
  return ['api', '/api/v1/deductions/:id', args] as const
}

export function getApiV1DeductionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DeductionsIdQueryKey>
  >({
    queryKey: getApiV1DeductionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.deductions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DeductionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DeductionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DeductionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1PositionsQueryKey(
  args: InferRequestType<typeof client.api.v1.positions.$get>,
) {
  return ['api', '/api/v1/positions', args] as const
}

export function getApiV1PositionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.positions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PositionsQueryKey>
  >({
    queryKey: getApiV1PositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.positions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Positions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.positions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PositionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1PositionsMutationKey() {
  return ['api', '/api/v1/positions', 'POST'] as const
}

export function getPostApiV1PositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.positions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PositionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.positions.$post>) {
      return parseResponse(client.api.v1.positions.$post(args, options))
    },
  })
}

export function createPostApiV1Positions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.positions.$post>,
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
    const mutationDefaults = getPostApiV1PositionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1PositionsIdMutationKey() {
  return ['api', '/api/v1/positions/:id', 'PUT'] as const
}

export function getPutApiV1PositionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.positions)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.positions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PositionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.positions)[':id']['$put']>) {
      return parseResponse(client.api.v1.positions[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1PositionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.positions)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.positions)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1PositionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1PositionsIdMutationKey() {
  return ['api', '/api/v1/positions/:id', 'DELETE'] as const
}

export function getDeleteApiV1PositionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.positions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.positions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PositionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.positions)[':id']['$delete']>) {
      return parseResponse(client.api.v1.positions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1PositionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.positions)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.positions)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1PositionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ApprovalRequestsMonthlyAttendancesQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
) {
  return ['api', '/api/v1/approval_requests/monthly_attendances', args] as const
}

export function getApiV1ApprovalRequestsMonthlyAttendancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsMonthlyAttendancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsMonthlyAttendances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesQueryKey>
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
      ...getApiV1ApprovalRequestsMonthlyAttendancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ApprovalRequestsMonthlyAttendancesMutationKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsMonthlyAttendancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsMonthlyAttendancesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>,
    ) {
      return parseResponse(client.api.v1.approval_requests.monthly_attendances.$post(args, options))
    },
  })
}

export function createPostApiV1ApprovalRequestsMonthlyAttendances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsMonthlyAttendancesMutationOptions<
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

export function getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
) {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', args] as const
}

export function getApiV1ApprovalRequestsMonthlyAttendancesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsMonthlyAttendancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey>
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
      ...getApiV1ApprovalRequestsMonthlyAttendancesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ApprovalRequestsMonthlyAttendancesIdMutationKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', 'PUT'] as const
}

export function getPutApiV1ApprovalRequestsMonthlyAttendancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApprovalRequestsMonthlyAttendancesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances[':id'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1ApprovalRequestsMonthlyAttendancesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']
        >,
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
    const mutationDefaults = getPutApiV1ApprovalRequestsMonthlyAttendancesIdMutationOptions<
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

export function getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdMutationKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', 'DELETE'] as const
}

export function getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ApprovalRequestsMonthlyAttendancesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdMutationOptions<
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

export function getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsMutationKey() {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id/actions', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances[':id'].actions.$post(args, options),
      )
    },
  })
}

export function createPostApiV1ApprovalRequestsMonthlyAttendancesIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
        >,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsWorkTimesQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
) {
  return ['api', '/api/v1/approval_requests/work_times', args] as const
}

export function getApiV1ApprovalRequestsWorkTimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsWorkTimesQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsWorkTimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.work_times.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsWorkTimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsWorkTimesQueryKey>
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
      ...getApiV1ApprovalRequestsWorkTimesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ApprovalRequestsWorkTimesMutationKey() {
  return ['api', '/api/v1/approval_requests/work_times', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsWorkTimesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.approval_requests.work_times.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsWorkTimesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$post>,
    ) {
      return parseResponse(client.api.v1.approval_requests.work_times.$post(args, options))
    },
  })
}

export function createPostApiV1ApprovalRequestsWorkTimes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.approval_requests.work_times.$post>,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsWorkTimesMutationOptions<
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

export function getApiV1ApprovalRequestsWorkTimesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/work_times/:id', args] as const
}

export function getApiV1ApprovalRequestsWorkTimesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsWorkTimesIdQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsWorkTimesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.work_times[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsWorkTimesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsWorkTimesIdQueryKey>
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
      ...getApiV1ApprovalRequestsWorkTimesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ApprovalRequestsWorkTimesIdMutationKey() {
  return ['api', '/api/v1/approval_requests/work_times/:id', 'PUT'] as const
}

export function getPutApiV1ApprovalRequestsWorkTimesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApprovalRequestsWorkTimesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.approval_requests.work_times[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ApprovalRequestsWorkTimesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ApprovalRequestsWorkTimesIdMutationOptions<
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

export function getDeleteApiV1ApprovalRequestsWorkTimesIdMutationKey() {
  return ['api', '/api/v1/approval_requests/work_times/:id', 'DELETE'] as const
}

export function getDeleteApiV1ApprovalRequestsWorkTimesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApprovalRequestsWorkTimesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.approval_requests.work_times[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ApprovalRequestsWorkTimesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ApprovalRequestsWorkTimesIdMutationOptions<
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

export function getPostApiV1ApprovalRequestsWorkTimesIdActionsMutationKey() {
  return ['api', '/api/v1/approval_requests/work_times/:id/actions', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsWorkTimesIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsWorkTimesIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.work_times[':id'].actions.$post(args, options),
      )
    },
  })
}

export function createPostApiV1ApprovalRequestsWorkTimesIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']
        >,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsWorkTimesIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsPaidHolidaysQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
) {
  return ['api', '/api/v1/approval_requests/paid_holidays', args] as const
}

export function getApiV1ApprovalRequestsPaidHolidaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsPaidHolidaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.paid_holidays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsPaidHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysQueryKey>
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
      ...getApiV1ApprovalRequestsPaidHolidaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ApprovalRequestsPaidHolidaysMutationKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsPaidHolidaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsPaidHolidaysMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post>,
    ) {
      return parseResponse(client.api.v1.approval_requests.paid_holidays.$post(args, options))
    },
  })
}

export function createPostApiV1ApprovalRequestsPaidHolidays<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post>,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsPaidHolidaysMutationOptions<
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

export function getApiV1ApprovalRequestsPaidHolidaysIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', args] as const
}

export function getApiV1ApprovalRequestsPaidHolidaysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysIdQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsPaidHolidaysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.paid_holidays[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsPaidHolidaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysIdQueryKey>
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
      ...getApiV1ApprovalRequestsPaidHolidaysIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ApprovalRequestsPaidHolidaysIdMutationKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', 'PUT'] as const
}

export function getPutApiV1ApprovalRequestsPaidHolidaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApprovalRequestsPaidHolidaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.approval_requests.paid_holidays[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ApprovalRequestsPaidHolidaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ApprovalRequestsPaidHolidaysIdMutationOptions<
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

export function getDeleteApiV1ApprovalRequestsPaidHolidaysIdMutationKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', 'DELETE'] as const
}

export function getDeleteApiV1ApprovalRequestsPaidHolidaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApprovalRequestsPaidHolidaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.paid_holidays[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ApprovalRequestsPaidHolidaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ApprovalRequestsPaidHolidaysIdMutationOptions<
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

export function getPostApiV1ApprovalRequestsPaidHolidaysIdActionsMutationKey() {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id/actions', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsPaidHolidaysIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsPaidHolidaysIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.paid_holidays[':id'].actions.$post(args, options),
      )
    },
  })
}

export function createPostApiV1ApprovalRequestsPaidHolidaysIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
        >,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsPaidHolidaysIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsSpecialHolidaysQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
) {
  return ['api', '/api/v1/approval_requests/special_holidays', args] as const
}

export function getApiV1ApprovalRequestsSpecialHolidaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsSpecialHolidaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsSpecialHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysQueryKey>
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
      ...getApiV1ApprovalRequestsSpecialHolidaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ApprovalRequestsSpecialHolidaysMutationKey() {
  return ['api', '/api/v1/approval_requests/special_holidays', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsSpecialHolidaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsSpecialHolidaysMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post>,
    ) {
      return parseResponse(client.api.v1.approval_requests.special_holidays.$post(args, options))
    },
  })
}

export function createPostApiV1ApprovalRequestsSpecialHolidays<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post>,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsSpecialHolidaysMutationOptions<
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

export function getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', args] as const
}

export function getApiV1ApprovalRequestsSpecialHolidaysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsSpecialHolidaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey>
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
      ...getApiV1ApprovalRequestsSpecialHolidaysIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ApprovalRequestsSpecialHolidaysIdMutationKey() {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', 'PUT'] as const
}

export function getPutApiV1ApprovalRequestsSpecialHolidaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApprovalRequestsSpecialHolidaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays[':id'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1ApprovalRequestsSpecialHolidaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ApprovalRequestsSpecialHolidaysIdMutationOptions<
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

export function getDeleteApiV1ApprovalRequestsSpecialHolidaysIdMutationKey() {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', 'DELETE'] as const
}

export function getDeleteApiV1ApprovalRequestsSpecialHolidaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApprovalRequestsSpecialHolidaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ApprovalRequestsSpecialHolidaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiV1ApprovalRequestsSpecialHolidaysIdMutationOptions<
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

export function getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsMutationKey() {
  return ['api', '/api/v1/approval_requests/special_holidays/:id/actions', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays[':id'].actions.$post(args, options),
      )
    },
  })
}

export function createPostApiV1ApprovalRequestsSpecialHolidaysIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
        >,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsOvertimeWorksQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
) {
  return ['api', '/api/v1/approval_requests/overtime_works', args] as const
}

export function getApiV1ApprovalRequestsOvertimeWorksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsOvertimeWorksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsOvertimeWorks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksQueryKey>
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
      ...getApiV1ApprovalRequestsOvertimeWorksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ApprovalRequestsOvertimeWorksMutationKey() {
  return ['api', '/api/v1/approval_requests/overtime_works', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsOvertimeWorksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsOvertimeWorksMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post>,
    ) {
      return parseResponse(client.api.v1.approval_requests.overtime_works.$post(args, options))
    },
  })
}

export function createPostApiV1ApprovalRequestsOvertimeWorks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post>,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsOvertimeWorksMutationOptions<
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

export function getApiV1ApprovalRequestsOvertimeWorksIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', args] as const
}

export function getApiV1ApprovalRequestsOvertimeWorksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksIdQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsOvertimeWorksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsOvertimeWorksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksIdQueryKey>
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
      ...getApiV1ApprovalRequestsOvertimeWorksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ApprovalRequestsOvertimeWorksIdMutationKey() {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', 'PUT'] as const
}

export function getPutApiV1ApprovalRequestsOvertimeWorksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApprovalRequestsOvertimeWorksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works[':id'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1ApprovalRequestsOvertimeWorksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ApprovalRequestsOvertimeWorksIdMutationOptions<
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

export function getDeleteApiV1ApprovalRequestsOvertimeWorksIdMutationKey() {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', 'DELETE'] as const
}

export function getDeleteApiV1ApprovalRequestsOvertimeWorksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApprovalRequestsOvertimeWorksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ApprovalRequestsOvertimeWorksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ApprovalRequestsOvertimeWorksIdMutationOptions<
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

export function getPostApiV1ApprovalRequestsOvertimeWorksIdActionsMutationKey() {
  return ['api', '/api/v1/approval_requests/overtime_works/:id/actions', 'POST'] as const
}

export function getPostApiV1ApprovalRequestsOvertimeWorksIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApprovalRequestsOvertimeWorksIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works[':id'].actions.$post(args, options),
      )
    },
  })
}

export function createPostApiV1ApprovalRequestsOvertimeWorksIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
        >,
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
    const mutationDefaults = getPostApiV1ApprovalRequestsOvertimeWorksIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
) {
  return ['api', '/api/v1/approval_requests/overtime_works/setting', args] as const
}

export function getApiV1ApprovalRequestsOvertimeWorksSettingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey>
  >({
    queryKey: getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works.setting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalRequestsOvertimeWorksSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey>
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
      ...getApiV1ApprovalRequestsOvertimeWorksSettingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ApprovalFlowRoutesQueryKey(
  args: InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
) {
  return ['api', '/api/v1/approval_flow_routes', args] as const
}

export function getApiV1ApprovalFlowRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalFlowRoutesQueryKey>
  >({
    queryKey: getApiV1ApprovalFlowRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_flow_routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalFlowRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalFlowRoutesQueryKey>
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
      ...getApiV1ApprovalFlowRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ApprovalFlowRoutesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
) {
  return ['api', '/api/v1/approval_flow_routes/:id', args] as const
}

export function getApiV1ApprovalFlowRoutesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalFlowRoutesIdQueryKey>
  >({
    queryKey: getApiV1ApprovalFlowRoutesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.approval_flow_routes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ApprovalFlowRoutesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ApprovalFlowRoutesIdQueryKey>
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
      ...getApiV1ApprovalFlowRoutesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1YearendAdjustmentsYearEmployeesQueryKey(
  args: InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>,
) {
  return ['api', '/api/v1/yearend_adjustments/:year/employees', args] as const
}

export function getApiV1YearendAdjustmentsYearEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesQueryKey>
  >({
    queryKey: getApiV1YearendAdjustmentsYearEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].employees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1YearendAdjustmentsYearEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesQueryKey>
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
      ...getApiV1YearendAdjustmentsYearEmployeesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
) {
  return ['api', '/api/v1/yearend_adjustments/:year/employees/:employee_id', args] as const
}

export function getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1YearendAdjustmentsYearEmployeesEmployeeId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey>
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
      ...getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/employees/:employee_id', 'PUT'] as const
}

export function getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearEmployeesEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
        >,
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
    const mutationDefaults = getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdMutationOptions<
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

export function getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/payroll_and_bonus/:employee_id', 'PUT'] as const
}

export function getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].payroll_and_bonus[':employee_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdMutationOptions<
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

export function getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/dependents/:employee_id', 'PUT'] as const
}

export function getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].dependents[':employee_id'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearDependentsEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
        >,
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
    const mutationDefaults = getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdMutationOptions<
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

export function getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/previous_jobs/:employee_id', 'PUT'] as const
}

export function getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].previous_jobs[':employee_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
        >,
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
    const mutationDefaults = getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationOptions<
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

export function getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/previous_jobs/:employee_id', 'DELETE'] as const
}

export function getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].previous_jobs[':employee_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationOptions<
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

export function getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/insurances/:employee_id', 'POST'] as const
}

export function getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1YearendAdjustmentsYearInsurancesEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
        >,
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
    const mutationDefaults = getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdMutationOptions<
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

export function getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/insurances/:employee_id/:id', 'PUT'] as const
}

export function getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'][':id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
        >,
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
    const mutationDefaults = getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationOptions<
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

export function getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/insurances/:employee_id/:id', 'DELETE'] as const
}

export function getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'][':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationOptions<
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

export function getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdMutationKey() {
  return [
    'api',
    '/api/v1/yearend_adjustments/:year/housing_loan_deductions/:employee_id',
    'PUT',
  ] as const
}

export function getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].housing_loan_deductions[':employee_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdMutationOptions<
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

export function getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id', 'POST'] as const
}

export function getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1YearendAdjustmentsYearHousingLoansEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
        >,
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
    const mutationDefaults =
      getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdMutationOptions<
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

export function getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationKey() {
  return ['api', '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id/:id', 'PUT'] as const
}

export function getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'][':id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
        >,
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
    const mutationDefaults =
      getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationOptions<
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

export function getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationKey() {
  return [
    'api',
    '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id/:id',
    'DELETE',
  ] as const
}

export function getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'][':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationOptions<
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
