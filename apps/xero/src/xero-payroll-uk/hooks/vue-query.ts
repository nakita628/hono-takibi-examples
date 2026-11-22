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

export function getBenefitsKey() {
  return ['Benefits'] as const
}

export function getDeductionsKey() {
  return ['Deductions'] as const
}

export function getEarningsOrdersKey() {
  return ['EarningsOrders'] as const
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

export function getPayslipsKey() {
  return ['Payslips'] as const
}

export function getReimbursementsKey() {
  return ['Reimbursements'] as const
}

export function getSettingsKey() {
  return ['Settings'] as const
}

export function getStatutoryLeavesKey() {
  return ['StatutoryLeaves'] as const
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

export function getEmployeesEmployeeIDUkopeningbalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/ukopeningbalances', keyArgs] as const
}

export function getEmployeesEmployeeIDUkopeningbalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDUkopeningbalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].ukopeningbalances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDUkopeningbalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDUkopeningbalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDUkopeningbalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDUkopeningbalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].ukopeningbalances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEmployeesEmployeeIDUkopeningbalancesMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/ukopeningbalances', 'PUT'] as const
}

export function getPutEmployeesEmployeeIDUkopeningbalancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployeesEmployeeIDUkopeningbalancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].ukopeningbalances.$put(args, options))
    },
  })
}

export function usePutEmployeesEmployeeIDUkopeningbalances<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>,
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
  const mutationDefaults = getPutEmployeesEmployeeIDUkopeningbalancesMutationOptions<
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

export function getPostEmployeesEmployeeIDUkopeningbalancesMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/ukopeningbalances', 'POST'] as const
}

export function getPostEmployeesEmployeeIDUkopeningbalancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDUkopeningbalancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']
      >,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].ukopeningbalances.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDUkopeningbalances<
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>,
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
  const mutationDefaults = getPostEmployeesEmployeeIDUkopeningbalancesMutationOptions<
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

export function getEmployeesEmployeeIDLeaveLeaveIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/Leave/:LeaveID', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveLeaveIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDLeaveLeaveIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].Leave[':LeaveID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDLeaveLeaveID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>
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
                  ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDLeaveLeaveIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDLeaveLeaveIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDLeaveLeaveIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].Leave[':LeaveID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Employees', '/Employees/:EmployeeID/StatutoryLeaveBalance', keyArgs] as const
}

export function getEmployeesEmployeeIDStatutoryLeaveBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Employees[':EmployeeID'].StatutoryLeaveBalance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmployeesEmployeeIDStatutoryLeaveBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>
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
                    (typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']
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
                    (typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey>
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
            ReturnType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Employees[':EmployeeID'].StatutoryLeaveBalance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatutoryLeavesSummaryEmployeeIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['StatutoryLeaves', '/StatutoryLeaves/Summary/:EmployeeID', keyArgs] as const
}

export function getStatutoryLeavesSummaryEmployeeIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatutoryLeavesSummaryEmployeeIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StatutoryLeaves.Summary[':EmployeeID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatutoryLeavesSummaryEmployeeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatutoryLeavesSummaryEmployeeIDQueryKey>
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
          Awaited<ReturnType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatutoryLeavesSummaryEmployeeIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatutoryLeavesSummaryEmployeeIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StatutoryLeaves.Summary[':EmployeeID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStatutoryLeavesSickMutationKey() {
  return ['StatutoryLeaves', '/StatutoryLeaves/Sick', 'POST'] as const
}

export function getPostStatutoryLeavesSickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryLeaves.Sick.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.StatutoryLeaves.Sick.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatutoryLeavesSickMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StatutoryLeaves.Sick.$post>) {
      return parseResponse(client.StatutoryLeaves.Sick.$post(args, options))
    },
  })
}

export function usePostStatutoryLeavesSick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryLeaves.Sick.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.StatutoryLeaves.Sick.$post>,
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
  const mutationDefaults = getPostStatutoryLeavesSickMutationOptions<TError, TOnMutateResult>(
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

export function getStatutoryLeavesSickStatutorySickLeaveIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['StatutoryLeaves', '/StatutoryLeaves/Sick/:StatutorySickLeaveID', keyArgs] as const
}

export function getStatutoryLeavesSickStatutorySickLeaveIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatutoryLeavesSickStatutorySickLeaveIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StatutoryLeaves.Sick[':StatutorySickLeaveID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatutoryLeavesSickStatutorySickLeaveID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>
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
                  ReturnType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStatutoryLeavesSickStatutorySickLeaveIDQueryKey>
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
          Awaited<ReturnType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatutoryLeavesSickStatutorySickLeaveIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatutoryLeavesSickStatutorySickLeaveIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StatutoryLeaves.Sick[':StatutorySickLeaveID'].$get(toValue(args), {
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
  return ['Employees', '/Employees/:EmployeeID/PayTemplates/earnings', 'POST'] as const
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
              (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDPayTemplatesEarningsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings']['$post']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.earnings.$post(args, options),
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings']['$post']
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
    '/Employees/:EmployeeID/PayTemplates/earnings/:PayTemplateEarningID',
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
              (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$put']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.earnings[':PayTemplateEarningID'].$put(
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$put']
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
    '/Employees/:EmployeeID/PayTemplates/earnings/:PayTemplateEarningID',
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
              (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.earnings[':PayTemplateEarningID'].$delete(
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
                    (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$delete']
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

export function getPostEmployeesEmployeeIDPaytemplateearningsMutationKey() {
  return ['Employees', '/Employees/:EmployeeID/paytemplateearnings', 'POST'] as const
}

export function getPostEmployeesEmployeeIDPaytemplateearningsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDPaytemplateearningsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']
      >,
    ) {
      return parseResponse(client.Employees[':EmployeeID'].paytemplateearnings.$post(args, options))
    },
  })
}

export function usePostEmployeesEmployeeIDPaytemplateearnings<
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
                    (typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']
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
  const mutationDefaults = getPostEmployeesEmployeeIDPaytemplateearningsMutationOptions<
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

export function getBenefitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Benefits.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Benefits', '/Benefits', keyArgs] as const
}

export function getBenefitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Benefits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenefitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Benefits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBenefits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Benefits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>
          >,
          ReturnType<typeof getBenefitsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBenefitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenefitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Benefits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBenefitsMutationKey() {
  return ['Benefits', '/Benefits', 'POST'] as const
}

export function getPostBenefitsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$post>>>>>,
    TError,
    InferRequestType<typeof client.Benefits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBenefitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Benefits.$post>) {
      return parseResponse(client.Benefits.$post(args, options))
    },
  })
}

export function usePostBenefits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Benefits.$post>,
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
  const mutationDefaults = getPostBenefitsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBenefitsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Benefits)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Benefits', '/Benefits/:id', keyArgs] as const
}

export function getBenefitsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Benefits)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenefitsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Benefits[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenefitsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Benefits)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBenefitsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenefitsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenefitsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Benefits[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getEarningsOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarningsOrders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['EarningsOrders', '/EarningsOrders', keyArgs] as const
}

export function getEarningsOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarningsOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.EarningsOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarningsOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.EarningsOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
          >,
          ReturnType<typeof getEarningsOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.EarningsOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarningsOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['EarningsOrders', '/EarningsOrders/:id', keyArgs] as const
}

export function getEarningsOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.EarningsOrders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarningsOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEarningsOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.EarningsOrders[':id'].$get(toValue(args), {
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

export function getPayRunCalendarsPayRunCalendarIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayRunCalendars', '/PayRunCalendars/:PayRunCalendarID', keyArgs] as const
}

export function getPayRunCalendarsPayRunCalendarIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayRunCalendarsPayRunCalendarIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayRunCalendars[':PayRunCalendarID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayRunCalendarsPayRunCalendarID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayRunCalendarsPayRunCalendarIDQueryKey>
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
          Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayRunCalendarsPayRunCalendarIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayRunCalendarsPayRunCalendarIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayRunCalendars[':PayRunCalendarID'].$get(toValue(args), {
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

export function getPayslipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Payslips.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Payslips', '/Payslips', keyArgs] as const
}

export function getPayslipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Payslips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayslipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Payslips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayslips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Payslips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>
          >,
          ReturnType<typeof getPayslipsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayslipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayslipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Payslips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPayslipsPayslipIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Payslips', '/Payslips/:PayslipID', keyArgs] as const
}

export function getPayslipsPayslipIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayslipsPayslipIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Payslips[':PayslipID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayslipsPayslipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayslipsPayslipIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayslipsPayslipIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayslipsPayslipIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Payslips[':PayslipID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.trackingCategories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Settings', '/Settings/trackingCategories', keyArgs] as const
}

export function getSettingsTrackingCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.trackingCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsTrackingCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Settings.trackingCategories.$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Settings.trackingCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>>
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
          client.Settings.trackingCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
