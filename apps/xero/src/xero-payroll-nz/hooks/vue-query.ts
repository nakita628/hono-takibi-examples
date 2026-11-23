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

export function getDeductionsKey() {
  return ['Deductions'] as const
}

export function getEarningsRatesKey() {
  return ['EarningsRates'] as const
}

export function getEmployeesKey() {
  return ['Employees'] as const
}

export function getLeaveTypesKey() {
  return ['LeaveTypes'] as const
}

export function getPayRunCalendarsKey() {
  return ['PayRunCalendars'] as const
}

export function getPayRunsKey() {
  return ['PayRuns'] as const
}

export function getPaySlipsKey() {
  return ['PaySlips'] as const
}

export function getReimbursementsKey() {
  return ['Reimbursements'] as const
}

export function getSettingsKey() {
  return ['Settings'] as const
}

export function getStatutoryDeductionsKey() {
  return ['StatutoryDeductions'] as const
}

export function getSuperannuationsKey() {
  return ['Superannuations'] as const
}

export function getTimesheetsKey() {
  return ['Timesheets'] as const
}

export function getEmployeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Employees.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees', keyArgs] as const
}

export function getEmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Employees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Employees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
          >,
          ReturnType<typeof getEmployeesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesMutationKey() {
  return ['Employees', '/Employees', 'POST'] as const
}

export function getPostEmployeesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$post>>>>>,
    TError,
    InferRequestType<typeof client.Employees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Employees.$post>) {
      return parseResponse(client.Employees.$post(args, options))
    },
  })
}

export function usePostEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Employees.$post>,
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
  const mutationDefaults = getPostEmployeesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmployeesEmployeeIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID', keyArgs] as const
}

export function getEmployeesEmployeeIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEmployeesEmployeeIDMutationKey() {
  return ['Employees', '/Employees/:EmployeeID', 'PUT'] as const
}

export function getPutEmployeesEmployeeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployeesEmployeeIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$put']>) {
      return parseResponse(client.Employees[':EmployeeID'].$put(args, options))
    },
  })
}

export function usePutEmployeesEmployeeID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['$put']>,
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
  const mutationDefaults = getPutEmployeesEmployeeIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmployeesEmployeeIDEmploymentMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/Employment', 'POST'] as const
}

export function getPostEmployeesEmployeeIDEmploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDEmploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].Employment.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDEmployment<
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
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDEmploymentMutationOptions<
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

export function getEmployeesEmployeeIDTaxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/Tax', keyArgs] as const
}

export function getEmployeesEmployeeIDTaxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDTaxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].Tax.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDTax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDTaxQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDTaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDTaxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].Tax.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDTaxMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/Tax', 'POST'] as const
}

export function getPostEmployeesEmployeeIDTaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDTaxMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].Tax.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDTax<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDTaxMutationOptions<TError, TOnMutateResult>(
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

export function getEmployeesEmployeeIDOpeningBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/OpeningBalances', keyArgs] as const
}

export function getEmployeesEmployeeIDOpeningBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDOpeningBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].OpeningBalances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDOpeningBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDOpeningBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDOpeningBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDOpeningBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].OpeningBalances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDOpeningBalancesMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/OpeningBalances', 'POST'] as const
}

export function getPostEmployeesEmployeeIDOpeningBalancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDOpeningBalancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].OpeningBalances.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDOpeningBalances<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDOpeningBalancesMutationOptions<
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

export function getEmployeesEmployeeIDLeaveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/Leave', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDLeaveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].Leave.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDLeave<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDLeaveQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDLeaveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDLeaveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].Leave.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDLeaveMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/Leave', 'POST'] as const
}

export function getPostEmployeesEmployeeIDLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].Leave.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPutEmployeesEmployeeIDLeaveLeaveIDMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/Leave/:LeaveID', 'PUT'] as const
}

export function getPutEmployeesEmployeeIDLeaveLeaveIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployeesEmployeeIDLeaveLeaveIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].Leave[':LeaveID'].$put(args, options))
    },
  })
}

export function usePutEmployeesEmployeeIDLeaveLeaveID<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>,
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
  const mutationDefaults = getPutEmployeesEmployeeIDLeaveLeaveIDMutationOptions<
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

export function getDeleteEmployeesEmployeeIDLeaveLeaveIDMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/Leave/:LeaveID', 'DELETE'] as const
}

export function getDeleteEmployeesEmployeeIDLeaveLeaveIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployeesEmployeeIDLeaveLeaveIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']
      >,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].Leave[':LeaveID'].$delete(args, options))
    },
  })
}

export function useDeleteEmployeesEmployeeIDLeaveLeaveID<
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
                    (typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']
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
  const mutationDefaults = getDeleteEmployeesEmployeeIDLeaveLeaveIDMutationOptions<
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

export function getEmployeesEmployeeIDLeaveBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/LeaveBalances', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDLeaveBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].LeaveBalances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDLeaveBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDLeaveBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDLeaveBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDLeaveBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].LeaveBalances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmployeesEmployeeIDLeavePeriodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/LeavePeriods', keyArgs] as const
}

export function getEmployeesEmployeeIDLeavePeriodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDLeavePeriodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].LeavePeriods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDLeavePeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDLeavePeriodsQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDLeavePeriodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDLeavePeriodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].LeavePeriods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDLeaveSetupMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/LeaveSetup', 'POST'] as const
}

export function getPostEmployeesEmployeeIDLeaveSetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDLeaveSetupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].LeaveSetup.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDLeaveSetup<
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
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDLeaveSetupMutationOptions<
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

export function getEmployeesEmployeeIDLeaveTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/LeaveTypes', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDLeaveTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].LeaveTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDLeaveTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDLeaveTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDLeaveTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDLeaveTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].LeaveTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDLeaveTypesMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/LeaveTypes', 'POST'] as const
}

export function getPostEmployeesEmployeeIDLeaveTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDLeaveTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].LeaveTypes.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDLeaveTypes<
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
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDLeaveTypesMutationOptions<
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

export function getEmployeesEmployeeIDPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/PaymentMethods', keyArgs] as const
}

export function getEmployeesEmployeeIDPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].PaymentMethods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDPaymentMethodsQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].PaymentMethods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDPaymentMethodsMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/PaymentMethods', 'POST'] as const
}

export function getPostEmployeesEmployeeIDPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDPaymentMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].PaymentMethods.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDPaymentMethods<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDPaymentMethodsMutationOptions<
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

export function getEmployeesEmployeeIDPayTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/PayTemplates', keyArgs] as const
}

export function getEmployeesEmployeeIDPayTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDPayTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDPayTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDPayTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDPayTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDPayTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].PayTemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDPayTemplatesEarningsMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/PayTemplates/Earnings', 'POST'] as const
}

export function getPostEmployeesEmployeeIDPayTemplatesEarningsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDPayTemplatesEarningsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.Earnings.$post(args, options),
      )
    },
  })
}

export function usePostEmployeesEmployeeIDPayTemplatesEarnings<
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']
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
  const mutationDefaults = getPostEmployeesEmployeeIDPayTemplatesEarningsMutationOptions<
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

export function getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationKey() {
  return [
    'Employees',
    '/Employees/:EmployeeID/PayTemplates/Earnings/:PayTemplateEarningID',
    'PUT',
  ] as const
}

export function getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.Earnings[':PayTemplateEarningID'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID<
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
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
    getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationOptions<
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

export function getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationKey() {
  return [
    'Employees',
    '/Employees/:EmployeeID/PayTemplates/Earnings/:PayTemplateEarningID',
    'DELETE',
  ] as const
}

export function getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.Earnings[':PayTemplateEarningID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID<
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
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
    getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationOptions<
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

export function getPostEmployeesEmployeeIDPayTemplateEarningsMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/PayTemplateEarnings', 'POST'] as const
}

export function getPostEmployeesEmployeeIDPayTemplateEarningsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDPayTemplateEarningsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']
      >,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].PayTemplateEarnings.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDPayTemplateEarnings<
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']
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
  const mutationDefaults = getPostEmployeesEmployeeIDPayTemplateEarningsMutationOptions<
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

export function getDeductionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Deductions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Deductions', '/Deductions', keyArgs] as const
}

export function getDeductionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Deductions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeductionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Deductions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Deductions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
          >,
          ReturnType<typeof getDeductionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeductionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeductionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Deductions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeductionsMutationKey() {
  return ['Deductions', '/Deductions', 'POST'] as const
}

export function getPostDeductionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$post>>>>>,
    TError,
    InferRequestType<typeof client.Deductions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeductionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Deductions.$post>) {
      return parseResponse(client.Deductions.$post(args, options))
    },
  })
}

export function usePostDeductions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Deductions.$post>,
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
  const mutationDefaults = getPostDeductionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeductionsDeductionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Deductions', '/Deductions/:deductionId', keyArgs] as const
}

export function getDeductionsDeductionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeductionsDeductionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Deductions[':deductionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeductionsDeductionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeductionsDeductionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeductionsDeductionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeductionsDeductionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Deductions[':deductionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatutoryDeductionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StatutoryDeductions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['StatutoryDeductions', '/StatutoryDeductions', keyArgs] as const
}

export function getStatutoryDeductionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StatutoryDeductions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatutoryDeductionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StatutoryDeductions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatutoryDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StatutoryDeductions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
            >
          >,
          ReturnType<typeof getStatutoryDeductionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatutoryDeductionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatutoryDeductionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StatutoryDeductions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatutoryDeductionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['StatutoryDeductions', '/StatutoryDeductions/:id', keyArgs] as const
}

export function getStatutoryDeductionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatutoryDeductionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StatutoryDeductions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatutoryDeductionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatutoryDeductionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatutoryDeductionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatutoryDeductionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StatutoryDeductions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuperannuationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Superannuations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Superannuations', '/Superannuations', keyArgs] as const
}

export function getSuperannuationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Superannuations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuperannuationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Superannuations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuperannuations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Superannuations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>
            >
          >,
          ReturnType<typeof getSuperannuationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuperannuationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuperannuationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Superannuations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSuperannuationsMutationKey() {
  return ['Superannuations', '/Superannuations', 'POST'] as const
}

export function getPostSuperannuationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.Superannuations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuperannuationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Superannuations.$post>) {
      return parseResponse(client.Superannuations.$post(args, options))
    },
  })
}

export function usePostSuperannuations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.Superannuations.$post>,
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
  const mutationDefaults = getPostSuperannuationsMutationOptions<TError, TOnMutateResult>(
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

export function getSuperannuationsSuperannuationIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Superannuations', '/Superannuations/:SuperannuationID', keyArgs] as const
}

export function getSuperannuationsSuperannuationIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuperannuationsSuperannuationIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Superannuations[':SuperannuationID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuperannuationsSuperannuationID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuperannuationsSuperannuationIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuperannuationsSuperannuationIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuperannuationsSuperannuationIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Superannuations[':SuperannuationID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarningsRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarningsRates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['EarningsRates', '/EarningsRates', keyArgs] as const
}

export function getEarningsRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarningsRates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.EarningsRates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarningsRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarningsRates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
          >,
          ReturnType<typeof getEarningsRatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.EarningsRates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEarningsRatesMutationKey() {
  return ['EarningsRates', '/EarningsRates', 'POST'] as const
}

export function getPostEarningsRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.EarningsRates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEarningsRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.EarningsRates.$post>) {
      return parseResponse(client.EarningsRates.$post(args, options))
    },
  })
}

export function usePostEarningsRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.EarningsRates.$post>,
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
  const mutationDefaults = getPostEarningsRatesMutationOptions<TError, TOnMutateResult>(
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

export function getEarningsRatesEarningsRateIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['EarningsRates', '/EarningsRates/:EarningsRateID', keyArgs] as const
}

export function getEarningsRatesEarningsRateIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsRatesEarningsRateIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.EarningsRates[':EarningsRateID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarningsRatesEarningsRateID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEarningsRatesEarningsRateIDQueryKey>
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
          Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsRatesEarningsRateIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsRatesEarningsRateIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.EarningsRates[':EarningsRateID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaveTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveTypes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LeaveTypes', '/LeaveTypes', keyArgs] as const
}

export function getLeaveTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaveTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LeaveTypes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLeaveTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
          >,
          ReturnType<typeof getLeaveTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeaveTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaveTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LeaveTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLeaveTypesMutationKey() {
  return ['LeaveTypes', '/LeaveTypes', 'POST'] as const
}

export function getPostLeaveTypesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$post>>>>>,
    TError,
    InferRequestType<typeof client.LeaveTypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LeaveTypes.$post>) {
      return parseResponse(client.LeaveTypes.$post(args, options))
    },
  })
}

export function usePostLeaveTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.LeaveTypes.$post>,
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
  const mutationDefaults = getPostLeaveTypesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLeaveTypesLeaveTypeIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LeaveTypes', '/LeaveTypes/:LeaveTypeID', keyArgs] as const
}

export function getLeaveTypesLeaveTypeIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaveTypesLeaveTypeIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LeaveTypes[':LeaveTypeID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaveTypesLeaveTypeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaveTypesLeaveTypeIDQueryKey>
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
          Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveTypesLeaveTypeIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaveTypesLeaveTypeIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LeaveTypes[':LeaveTypeID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReimbursementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reimbursements.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reimbursements', '/Reimbursements', keyArgs] as const
}

export function getReimbursementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reimbursements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReimbursementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reimbursements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReimbursements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reimbursements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
          >,
          ReturnType<typeof getReimbursementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReimbursementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReimbursementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reimbursements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReimbursementsMutationKey() {
  return ['Reimbursements', '/Reimbursements', 'POST'] as const
}

export function getPostReimbursementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.Reimbursements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReimbursementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Reimbursements.$post>) {
      return parseResponse(client.Reimbursements.$post(args, options))
    },
  })
}

export function usePostReimbursements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.Reimbursements.$post>,
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
  const mutationDefaults = getPostReimbursementsMutationOptions<TError, TOnMutateResult>(
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

export function getReimbursementsReimbursementIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reimbursements', '/Reimbursements/:ReimbursementID', keyArgs] as const
}

export function getReimbursementsReimbursementIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReimbursementsReimbursementIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reimbursements[':ReimbursementID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReimbursementsReimbursementID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReimbursementsReimbursementIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReimbursementsReimbursementIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReimbursementsReimbursementIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reimbursements[':ReimbursementID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimesheetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Timesheets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Timesheets', '/Timesheets', keyArgs] as const
}

export function getTimesheetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Timesheets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimesheetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Timesheets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimesheets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Timesheets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
          >,
          ReturnType<typeof getTimesheetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimesheetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimesheetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Timesheets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTimesheetsMutationKey() {
  return ['Timesheets', '/Timesheets', 'POST'] as const
}

export function getPostTimesheetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>>,
    TError,
    InferRequestType<typeof client.Timesheets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Timesheets.$post>) {
      return parseResponse(client.Timesheets.$post(args, options))
    },
  })
}

export function usePostTimesheets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Timesheets.$post>,
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
  const mutationDefaults = getPostTimesheetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimesheetsTimesheetIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Timesheets', '/Timesheets/:TimesheetID', keyArgs] as const
}

export function getTimesheetsTimesheetIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimesheetsTimesheetIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimesheetsTimesheetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTimesheetsTimesheetIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimesheetsTimesheetIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimesheetsTimesheetIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Timesheets[':TimesheetID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTimesheetsTimesheetIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID', 'DELETE'] as const
}

export function getDeleteTimesheetsTimesheetIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimesheetsTimesheetIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].$delete(args, options))
    },
  })
}

export function useDeleteTimesheetsTimesheetID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
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
  const mutationDefaults = getDeleteTimesheetsTimesheetIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostTimesheetsTimesheetIDLinesMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDLinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDLinesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].Lines.$post(args, options))
    },
  })
}

export function usePostTimesheetsTimesheetIDLines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
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
  const mutationDefaults = getPostTimesheetsTimesheetIDLinesMutationOptions<
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

export function getPostTimesheetsTimesheetIDApproveMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Approve', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].Approve.$post(args, options))
    },
  })
}

export function usePostTimesheetsTimesheetIDApprove<
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
                Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
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
  const mutationDefaults = getPostTimesheetsTimesheetIDApproveMutationOptions<
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

export function getPostTimesheetsTimesheetIDRevertToDraftMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/RevertToDraft', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDRevertToDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDRevertToDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].RevertToDraft.$post(args, options))
    },
  })
}

export function usePostTimesheetsTimesheetIDRevertToDraft<
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
                  ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
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
  const mutationDefaults = getPostTimesheetsTimesheetIDRevertToDraftMutationOptions<
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

export function getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'PUT'] as const
}

export function getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
      >,
    ) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$put(args, options),
      )
    },
  })
}

export function usePutTimesheetsTimesheetIDLinesTimesheetLineID<
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
                    (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
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
  const mutationDefaults = getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
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

export function getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'DELETE'] as const
}

export function getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTimesheetsTimesheetIDLinesTimesheetLineID<
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
                    (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
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
  const mutationDefaults = getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
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

export function getPayRunCalendarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayRunCalendars.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayRunCalendars', '/PayRunCalendars', keyArgs] as const
}

export function getPayRunCalendarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayRunCalendars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayRunCalendarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayRunCalendars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayRunCalendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayRunCalendars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>
            >
          >,
          ReturnType<typeof getPayRunCalendarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPayRunCalendarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayRunCalendarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayRunCalendars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPayRunCalendarsMutationKey() {
  return ['PayRunCalendars', '/PayRunCalendars', 'POST'] as const
}

export function getPostPayRunCalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PayRunCalendars.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayRunCalendarsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PayRunCalendars.$post>) {
      return parseResponse(client.PayRunCalendars.$post(args, options))
    },
  })
}

export function usePostPayRunCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PayRunCalendars.$post>,
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
  const mutationDefaults = getPostPayRunCalendarsMutationOptions<TError, TOnMutateResult>(
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

export function getPayRunCalendarsPayrollCalendarIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayRunCalendars', '/PayRunCalendars/:PayrollCalendarID', keyArgs] as const
}

export function getPayRunCalendarsPayrollCalendarIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayRunCalendarsPayrollCalendarIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayRunCalendars[':PayrollCalendarID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayRunCalendarsPayrollCalendarID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayRunCalendarsPayrollCalendarIDQueryKey>
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
          Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayRunCalendarsPayrollCalendarIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayRunCalendarsPayrollCalendarIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayRunCalendars[':PayrollCalendarID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmployeesEmployeeIDSalaryAndWagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages', keyArgs] as const
}

export function getEmployeesEmployeeIDSalaryAndWagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDSalaryAndWagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].SalaryAndWages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDSalaryAndWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDSalaryAndWagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].SalaryAndWages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDSalaryAndWagesMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages', 'POST'] as const
}

export function getPostEmployeesEmployeeIDSalaryAndWagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDSalaryAndWagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].SalaryAndWages.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDSalaryAndWages<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDSalaryAndWagesMutationOptions<
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

export function getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', keyArgs] as const
}

export function getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
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
                    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
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
                    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey>
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
              (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', 'PUT'] as const
}

export function getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$put(args, options),
      )
    },
  })
}

export function usePutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
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
                    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
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
  const mutationDefaults = getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationOptions<
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

export function getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', 'DELETE'] as const
}

export function getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
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
                    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
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
    getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationOptions<
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

export function getPayRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayRuns.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayRuns', '/PayRuns', keyArgs] as const
}

export function getPayRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayRuns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayRuns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayRuns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
          >,
          ReturnType<typeof getPayRunsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPayRunsMutationKey() {
  return ['PayRuns', '/PayRuns', 'POST'] as const
}

export function getPostPayRunsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$post>>>>>,
    TError,
    InferRequestType<typeof client.PayRuns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PayRuns.$post>) {
      return parseResponse(client.PayRuns.$post(args, options))
    },
  })
}

export function usePostPayRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.PayRuns.$post>,
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
  const mutationDefaults = getPostPayRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPayRunsPayRunIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayRuns', '/PayRuns/:PayRunID', keyArgs] as const
}

export function getPayRunsPayRunIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayRunsPayRunIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayRuns[':PayRunID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayRunsPayRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayRunsPayRunIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayRunsPayRunIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayRunsPayRunIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayRuns[':PayRunID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaySlipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PaySlips.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PaySlips', '/PaySlips', keyArgs] as const
}

export function getPaySlipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PaySlips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaySlipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PaySlips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePaySlips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PaySlips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>
          >,
          ReturnType<typeof getPaySlipsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaySlipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaySlipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PaySlips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaySlipsPaySlipIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PaySlips', '/PaySlips/:PaySlipID', keyArgs] as const
}

export function getPaySlipsPaySlipIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaySlipsPaySlipIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PaySlips[':PaySlipID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaySlipsPaySlipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaySlipsPaySlipIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaySlipsPaySlipIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaySlipsPaySlipIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PaySlips[':PaySlipID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPaySlipsPaySlipIDMutationKey() {
  return ['PaySlips', '/PaySlips/:PaySlipID', 'PUT'] as const
}

export function getPutPaySlipsPaySlipIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaySlipsPaySlipIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$put']>) {
      return parseResponse(client.PaySlips[':PaySlipID'].$put(args, options))
    },
  })
}

export function usePutPaySlipsPaySlipID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$put']>,
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
  const mutationDefaults = getPutPaySlipsPaySlipIDMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Settings', '/Settings', keyArgs] as const
}

export function getSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Settings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
          >,
          ReturnType<typeof getSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsTrackingCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.TrackingCategories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Settings', '/Settings/TrackingCategories', keyArgs] as const
}

export function getSettingsTrackingCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.TrackingCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsTrackingCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Settings.TrackingCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.TrackingCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsTrackingCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTrackingCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsTrackingCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Settings.TrackingCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmployeesEmployeeIDWorkingPatternsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/Working-Patterns', keyArgs] as const
}

export function getEmployeesEmployeeIDWorkingPatternsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDWorkingPatternsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID']['Working-Patterns'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDWorkingPatterns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDWorkingPatternsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID']['Working-Patterns'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmployeesEmployeeIDWorkingPatternsMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/Working-Patterns', 'POST'] as const
}

export function getPostEmployeesEmployeeIDWorkingPatternsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDWorkingPatternsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID']['Working-Patterns'].$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDWorkingPatterns<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDWorkingPatternsMutationOptions<
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

export function getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'Employees',
    '/Employees/:EmployeeID/Working-Patterns/:EmployeeWorkingPatternID',
    keyArgs,
  ] as const
}

export function getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
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
                    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
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
                    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey>
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
              (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDMutationKey() {
  return [
    'Employees',
    '/Employees/:EmployeeID/Working-Patterns/:EmployeeWorkingPatternID',
    'DELETE',
  ] as const
}

export function getDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID<
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
                    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
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
    getDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDMutationOptions<
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
