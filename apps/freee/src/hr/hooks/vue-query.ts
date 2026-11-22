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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1UsersMeQueryKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function getApiV1UsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1UsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          ReturnType<typeof getApiV1UsersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1UsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompaniesCompanyIdEmployeesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
  >,
) {
  return ['api', '/api/v1/companies/:company_id/employees', toValue(args)] as const
}

export function getApiV1CompaniesCompanyIdEmployeesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompaniesCompanyIdEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.companies[':company_id'].employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompaniesCompanyIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompaniesCompanyIdEmployeesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompaniesCompanyIdEmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompaniesCompanyIdEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.companies[':company_id'].employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.employees.$get>>,
) {
  return ['api', '/api/v1/employees', toValue(args)] as const
}

export function getApiV1EmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.employees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Employees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.employees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>
            >
          >,
          ReturnType<typeof getApiV1EmployeesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Employees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.employees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.employees.$post>,
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
  const mutationDefaults = getPostApiV1EmployeesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EmployeesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>>,
) {
  return ['api', '/api/v1/employees/:id', toValue(args)] as const
}

export function getApiV1EmployeesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1EmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1EmployeesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EmployeesEmployeeIdProfileRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/profile_rule', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdProfileRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdProfileRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].profile_rule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdProfileRule<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdProfileRuleQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdProfileRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdProfileRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].profile_rule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdProfileRule<
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
                    (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']
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
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdProfileRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
    >
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/health_insurance_rule', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].health_insurance_rule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdHealthInsuranceRule<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdHealthInsuranceRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].health_insurance_rule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdHealthInsuranceRule<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdHealthInsuranceRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/employees/:employee_id/welfare_pension_insurance_rule',
    toValue(args),
  ] as const
}

export function getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdDependentRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/dependent_rules', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdDependentRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdDependentRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].dependent_rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdDependentRules<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdDependentRulesQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdDependentRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdDependentRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].dependent_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdDependentRulesBulkUpdate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdDependentRulesBulkUpdateMutationOptions<
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

export function getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/bank_account_rule', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdBankAccountRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].bank_account_rule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdBankAccountRule<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdBankAccountRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].bank_account_rule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdBankAccountRule<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdBankAccountRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/basic_pay_rule', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdBasicPayRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].basic_pay_rule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdBasicPayRule<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdBasicPayRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].basic_pay_rule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdBasicPayRule<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdBasicPayRuleMutationOptions<
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

export function getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/allowance_rules', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdAllowanceRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].allowance_rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdAllowanceRules<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdAllowanceRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].allowance_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdAllowanceRules<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdAllowanceRulesMutationOptions<
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

export function useDeleteApiV1EmployeesEmployeeIdAllowanceRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1EmployeesEmployeeIdAllowanceRulesIdMutationOptions<
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

export function getApiV1EmployeesEmployeeIdDeductionRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/deduction_rules', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdDeductionRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdDeductionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].deduction_rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdDeductionRules<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdDeductionRulesQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdDeductionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdDeductionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].deduction_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdDeductionRules<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdDeductionRulesMutationOptions<
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

export function useDeleteApiV1EmployeesEmployeeIdDeductionRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1EmployeesEmployeeIdDeductionRulesIdMutationOptions<
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

export function getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
    >
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/profile_custom_fields', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].profile_custom_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdProfileCustomFields<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdProfileCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].profile_custom_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
    >
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/work_records/:date', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdWorkRecordsDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_records[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdWorkRecordsDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdWorkRecordsDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].work_records[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdWorkRecordsDate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdWorkRecordsDateMutationOptions<
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

export function useDeleteApiV1EmployeesEmployeeIdWorkRecordsDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1EmployeesEmployeeIdWorkRecordsDateMutationOptions<
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

export function getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/employees/:employee_id/work_record_summaries/:year/:month',
    toValue(args),
  ] as const
}

export function getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth<
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
    getPutApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthMutationOptions<
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

export function getApiV1EmployeesEmployeeIdTimeClocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdTimeClocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdTimeClocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].time_clocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdTimeClocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdTimeClocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].time_clocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1EmployeesEmployeeIdTimeClocks<
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']
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
  const mutationDefaults = getPostApiV1EmployeesEmployeeIdTimeClocksMutationOptions<
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

export function getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/time_clocks/:id', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdTimeClocksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].time_clocks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdTimeClocksId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdTimeClocksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].time_clocks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/employees/:employee_id/time_clocks/available_types',
    toValue(args),
  ] as const
}

export function getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].time_clocks.available_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdTimeClocksAvailableTypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].time_clocks.available_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/special_holidays', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdSpecialHolidaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].special_holidays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdSpecialHolidays<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdSpecialHolidaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].special_holidays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/employees/:employee_id/attendance_tag_summaries/:year/:month',
    toValue(args),
  ] as const
}

export function getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth<
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
    getPutApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthMutationOptions<
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

export function getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdAttendanceTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdAttendanceTags<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey>
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
            ReturnType<(typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdAttendanceTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].attendance_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
    >
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/attendance_tags/:date', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].attendance_tags[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdAttendanceTagsDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdAttendanceTagsDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].attendance_tags[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1EmployeesEmployeeIdAttendanceTagsDate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1EmployeesEmployeeIdAttendanceTagsDateMutationOptions<
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

export function getApiV1SalariesEmployeePayrollStatementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>
  >,
) {
  return ['api', '/api/v1/salaries/employee_payroll_statements', toValue(args)] as const
}

export function getApiV1SalariesEmployeePayrollStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SalariesEmployeePayrollStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.salaries.employee_payroll_statements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SalariesEmployeePayrollStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.salaries.employee_payroll_statements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SalariesEmployeePayrollStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.salaries.employee_payroll_statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/salaries/employee_payroll_statements/:employee_id',
    toValue(args),
  ] as const
}

export function getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.salaries.employee_payroll_statements[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SalariesEmployeePayrollStatementsEmployeeId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
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
                    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
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
                    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey>
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
              (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SalariesEmployeePayrollStatementsEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.salaries.employee_payroll_statements[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemark<
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
    getPutApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkMutationOptions<
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

export function getApiV1BonusesEmployeePayrollStatementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>
  >,
) {
  return ['api', '/api/v1/bonuses/employee_payroll_statements', toValue(args)] as const
}

export function getApiV1BonusesEmployeePayrollStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BonusesEmployeePayrollStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bonuses.employee_payroll_statements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BonusesEmployeePayrollStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BonusesEmployeePayrollStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bonuses.employee_payroll_statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/bonuses/employee_payroll_statements/:employee_id', toValue(args)] as const
}

export function getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bonuses.employee_payroll_statements[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BonusesEmployeePayrollStatementsEmployeeId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
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
                    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
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
                    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey>
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
              (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BonusesEmployeePayrollStatementsEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bonuses.employee_payroll_statements[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeeGroupMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.employee_group_memberships.$get>>,
) {
  return ['api', '/api/v1/employee_group_memberships', toValue(args)] as const
}

export function getApiV1EmployeeGroupMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.employee_group_memberships.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeeGroupMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employee_group_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeeGroupMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.employee_group_memberships.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeeGroupMembershipsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.employee_group_memberships.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeeGroupMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeeGroupMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employee_group_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']>
  >,
) {
  return ['api', '/api/v1/employees/:employee_id/group_memberships', toValue(args)] as const
}

export function getApiV1EmployeesEmployeeIdGroupMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.employees[':employee_id'].group_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmployeesEmployeeIdGroupMemberships<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']>
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
                    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
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
                    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey>
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
              (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmployeesEmployeeIdGroupMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.employees[':employee_id'].group_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.groups.$get>>,
) {
  return ['api', '/api/v1/groups', toValue(args)] as const
}

export function getApiV1GroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Groups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
          >,
          ReturnType<typeof getApiV1GroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Groups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.groups.$post>,
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
  const mutationDefaults = getPostApiV1GroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutApiV1GroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.groups)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.groups)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1GroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1GroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1GroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AllowancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.allowances.$get>>,
) {
  return ['api', '/api/v1/allowances', toValue(args)] as const
}

export function getApiV1AllowancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.allowances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AllowancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.allowances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Allowances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.allowances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AllowancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllowancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AllowancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.allowances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Allowances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allowances.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.allowances.$post>,
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
  const mutationDefaults = getPostApiV1AllowancesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AllowancesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>>,
) {
  return ['api', '/api/v1/allowances/:id', toValue(args)] as const
}

export function getApiV1AllowancesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AllowancesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.allowances[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AllowancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AllowancesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.allowances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllowancesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AllowancesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.allowances[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DeductionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.deductions.$get>>,
) {
  return ['api', '/api/v1/deductions', toValue(args)] as const
}

export function getApiV1DeductionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.deductions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DeductionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.deductions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Deductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.deductions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DeductionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DeductionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DeductionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.deductions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Deductions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.deductions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.deductions.$post>,
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
  const mutationDefaults = getPostApiV1DeductionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DeductionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>>,
) {
  return ['api', '/api/v1/deductions/:id', toValue(args)] as const
}

export function getApiV1DeductionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DeductionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.deductions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DeductionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DeductionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.deductions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DeductionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DeductionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.deductions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PositionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.positions.$get>>,
) {
  return ['api', '/api/v1/positions', toValue(args)] as const
}

export function getApiV1PositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.positions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Positions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.positions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PositionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Positions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.positions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.positions.$post>,
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
  const mutationDefaults = getPostApiV1PositionsMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1PositionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1PositionsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1PositionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1PositionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ApprovalRequestsMonthlyAttendancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>
  >,
) {
  return ['api', '/api/v1/approval_requests/monthly_attendances', toValue(args)] as const
}

export function getApiV1ApprovalRequestsMonthlyAttendancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsMonthlyAttendancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsMonthlyAttendances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsMonthlyAttendancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.monthly_attendances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ApprovalRequestsMonthlyAttendances<
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
                  ReturnType<typeof client.api.v1.approval_requests.monthly_attendances.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>,
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
  const mutationDefaults = getPostApiV1ApprovalRequestsMonthlyAttendancesMutationOptions<
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

export function getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/approval_requests/monthly_attendances/:id', toValue(args)] as const
}

export function getApiV1ApprovalRequestsMonthlyAttendancesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.monthly_attendances[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsMonthlyAttendancesId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
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
                    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
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
                    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey>
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
            ReturnType<(typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsMonthlyAttendancesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.monthly_attendances[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ApprovalRequestsMonthlyAttendancesId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ApprovalRequestsMonthlyAttendancesIdMutationOptions<
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

export function useDeleteApiV1ApprovalRequestsMonthlyAttendancesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ApprovalRequestsMonthlyAttendancesIdMutationOptions<
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

export function usePostApiV1ApprovalRequestsMonthlyAttendancesIdActions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApprovalRequestsMonthlyAttendancesIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsWorkTimesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>>,
) {
  return ['api', '/api/v1/approval_requests/work_times', toValue(args)] as const
}

export function getApiV1ApprovalRequestsWorkTimesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsWorkTimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.work_times.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsWorkTimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsWorkTimesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsWorkTimesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsWorkTimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.work_times.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ApprovalRequestsWorkTimes<
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
                Awaited<ReturnType<typeof client.api.v1.approval_requests.work_times.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.approval_requests.work_times.$post>,
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
  const mutationDefaults = getPostApiV1ApprovalRequestsWorkTimesMutationOptions<
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

export function getApiV1ApprovalRequestsWorkTimesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/approval_requests/work_times/:id', toValue(args)] as const
}

export function getApiV1ApprovalRequestsWorkTimesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsWorkTimesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.work_times[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsWorkTimesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsWorkTimesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsWorkTimesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsWorkTimesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.work_times[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ApprovalRequestsWorkTimesId<
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
                  ReturnType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ApprovalRequestsWorkTimesIdMutationOptions<
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

export function useDeleteApiV1ApprovalRequestsWorkTimesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.approval_requests.work_times)[':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ApprovalRequestsWorkTimesIdMutationOptions<
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

export function usePostApiV1ApprovalRequestsWorkTimesIdActions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApprovalRequestsWorkTimesIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsPaidHolidaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>
  >,
) {
  return ['api', '/api/v1/approval_requests/paid_holidays', toValue(args)] as const
}

export function getApiV1ApprovalRequestsPaidHolidaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsPaidHolidaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.paid_holidays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsPaidHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsPaidHolidaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.paid_holidays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ApprovalRequestsPaidHolidays<
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
                Awaited<ReturnType<typeof client.api.v1.approval_requests.paid_holidays.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post>,
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
  const mutationDefaults = getPostApiV1ApprovalRequestsPaidHolidaysMutationOptions<
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

export function getApiV1ApprovalRequestsPaidHolidaysIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/approval_requests/paid_holidays/:id', toValue(args)] as const
}

export function getApiV1ApprovalRequestsPaidHolidaysIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsPaidHolidaysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.paid_holidays[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsPaidHolidaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsPaidHolidaysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsPaidHolidaysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.paid_holidays[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ApprovalRequestsPaidHolidaysId<
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
                  ReturnType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ApprovalRequestsPaidHolidaysIdMutationOptions<
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

export function useDeleteApiV1ApprovalRequestsPaidHolidaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']
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
  const mutationDefaults = getDeleteApiV1ApprovalRequestsPaidHolidaysIdMutationOptions<
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

export function usePostApiV1ApprovalRequestsPaidHolidaysIdActions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApprovalRequestsPaidHolidaysIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsSpecialHolidaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>
  >,
) {
  return ['api', '/api/v1/approval_requests/special_holidays', toValue(args)] as const
}

export function getApiV1ApprovalRequestsSpecialHolidaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsSpecialHolidaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsSpecialHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsSpecialHolidaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.special_holidays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ApprovalRequestsSpecialHolidays<
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
                Awaited<ReturnType<typeof client.api.v1.approval_requests.special_holidays.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post>,
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
  const mutationDefaults = getPostApiV1ApprovalRequestsSpecialHolidaysMutationOptions<
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

export function getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/approval_requests/special_holidays/:id', toValue(args)] as const
}

export function getApiV1ApprovalRequestsSpecialHolidaysIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.special_holidays[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsSpecialHolidaysId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
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
                    (typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']
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
                    (typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey>
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
            ReturnType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsSpecialHolidaysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.special_holidays[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ApprovalRequestsSpecialHolidaysId<
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
                    (typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']
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
  const mutationDefaults = getPutApiV1ApprovalRequestsSpecialHolidaysIdMutationOptions<
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

export function useDeleteApiV1ApprovalRequestsSpecialHolidaysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ApprovalRequestsSpecialHolidaysIdMutationOptions<
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

export function usePostApiV1ApprovalRequestsSpecialHolidaysIdActions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApprovalRequestsSpecialHolidaysIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsOvertimeWorksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>
  >,
) {
  return ['api', '/api/v1/approval_requests/overtime_works', toValue(args)] as const
}

export function getApiV1ApprovalRequestsOvertimeWorksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsOvertimeWorksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsOvertimeWorks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsOvertimeWorksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.overtime_works.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ApprovalRequestsOvertimeWorks<
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
                Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post>,
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
  const mutationDefaults = getPostApiV1ApprovalRequestsOvertimeWorksMutationOptions<
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

export function getApiV1ApprovalRequestsOvertimeWorksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/approval_requests/overtime_works/:id', toValue(args)] as const
}

export function getApiV1ApprovalRequestsOvertimeWorksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsOvertimeWorksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsOvertimeWorksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksIdQueryKey>
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
            ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsOvertimeWorksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.overtime_works[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ApprovalRequestsOvertimeWorksId<
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
                  ReturnType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ApprovalRequestsOvertimeWorksIdMutationOptions<
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

export function useDeleteApiV1ApprovalRequestsOvertimeWorksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']
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
  const mutationDefaults = getDeleteApiV1ApprovalRequestsOvertimeWorksIdMutationOptions<
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

export function usePostApiV1ApprovalRequestsOvertimeWorksIdActions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApprovalRequestsOvertimeWorksIdActionsMutationOptions<
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

export function getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>
  >,
) {
  return ['api', '/api/v1/approval_requests/overtime_works/setting', toValue(args)] as const
}

export function getApiV1ApprovalRequestsOvertimeWorksSettingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_requests.overtime_works.setting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalRequestsOvertimeWorksSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalRequestsOvertimeWorksSettingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_requests.overtime_works.setting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ApprovalFlowRoutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.approval_flow_routes.$get>>,
) {
  return ['api', '/api/v1/approval_flow_routes', toValue(args)] as const
}

export function getApiV1ApprovalFlowRoutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.approval_flow_routes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalFlowRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_flow_routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalFlowRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.approval_flow_routes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalFlowRoutesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.approval_flow_routes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalFlowRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalFlowRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_flow_routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ApprovalFlowRoutesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/approval_flow_routes/:id', toValue(args)] as const
}

export function getApiV1ApprovalFlowRoutesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApprovalFlowRoutesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.approval_flow_routes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApprovalFlowRoutesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApprovalFlowRoutesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApprovalFlowRoutesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApprovalFlowRoutesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.approval_flow_routes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1YearendAdjustmentsYearEmployeesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
  >,
) {
  return ['api', '/api/v1/yearend_adjustments/:year/employees', toValue(args)] as const
}

export function getApiV1YearendAdjustmentsYearEmployeesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1YearendAdjustmentsYearEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1YearendAdjustmentsYearEmployees<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
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
                    (typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']
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
                    (typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesQueryKey>
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
            ReturnType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1YearendAdjustmentsYearEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.yearend_adjustments[':year'].employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/yearend_adjustments/:year/employees/:employee_id', toValue(args)] as const
}

export function getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1YearendAdjustmentsYearEmployeesEmployeeId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
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
                    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
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
                    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey>
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
              (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1YearendAdjustmentsYearEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1YearendAdjustmentsYearEmployeesEmployeeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1YearendAdjustmentsYearEmployeesEmployeeIdMutationOptions<
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

export function usePutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeId<
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
    getPutApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdMutationOptions<
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

export function usePutApiV1YearendAdjustmentsYearDependentsEmployeeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1YearendAdjustmentsYearDependentsEmployeeIdMutationOptions<
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

export function usePutApiV1YearendAdjustmentsYearPreviousJobsEmployeeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationOptions<
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

export function useDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdMutationOptions<
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

export function usePostApiV1YearendAdjustmentsYearInsurancesEmployeeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1YearendAdjustmentsYearInsurancesEmployeeIdMutationOptions<
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

export function usePutApiV1YearendAdjustmentsYearInsurancesEmployeeIdId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationOptions<
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

export function useDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdMutationOptions<
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

export function usePutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeId<
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
    getPutApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdMutationOptions<
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

export function usePostApiV1YearendAdjustmentsYearHousingLoansEmployeeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1YearendAdjustmentsYearHousingLoansEmployeeIdMutationOptions<
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

export function usePutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationOptions<
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

export function useDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdMutationOptions<
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
