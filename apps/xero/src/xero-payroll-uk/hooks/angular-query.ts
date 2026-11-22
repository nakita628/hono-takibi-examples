import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getEmployeesQueryKey(args: InferRequestType<typeof client.Employees.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees', keyArgs] as const
}

export function getEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmployeesQueryKey>
  >({
    queryKey: getEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Employees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Employees.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID', keyArgs] as const
}

export function getEmployeesEmployeeIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesEmployeeIDQueryKey>
  >({
    queryKey: getEmployeesEmployeeIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployeesEmployeeIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployeesEmployeeIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEmployeesEmployeeID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployeesEmployeeIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDEmployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDEmploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDTaxQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Tax', keyArgs] as const
}

export function getEmployeesEmployeeIDTaxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDTaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].Tax.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDTax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDTaxQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDUkopeningbalancesQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/ukopeningbalances', keyArgs] as const
}

export function getEmployeesEmployeeIDUkopeningbalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDUkopeningbalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].ukopeningbalances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDUkopeningbalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDUkopeningbalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDUkopeningbalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEmployeesEmployeeIDUkopeningbalances<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployeesEmployeeIDUkopeningbalancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDUkopeningbalances<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDUkopeningbalancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDLeaveQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Leave', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDLeaveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].Leave.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDLeave<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDLeaveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDLeave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDLeaveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDLeaveLeaveIDQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Leave/:LeaveID', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveLeaveIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDLeaveLeaveIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].Leave[':LeaveID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDLeaveLeaveID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDLeaveLeaveIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDLeaveLeaveIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEmployeesEmployeeIDLeaveLeaveID<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployeesEmployeeIDLeaveLeaveIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEmployeesEmployeeIDLeaveLeaveID<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployeesEmployeeIDLeaveLeaveIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDLeaveBalancesQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/LeaveBalances', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDLeaveBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].LeaveBalances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDLeaveBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDLeaveBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/StatutoryLeaveBalance', keyArgs] as const
}

export function getEmployeesEmployeeIDStatutoryLeaveBalanceQueryOptions<
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].StatutoryLeaveBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDStatutoryLeaveBalance<
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
  args: () => InferRequestType<
    (typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDStatutoryLeaveBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDStatutoryLeaveBalanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getStatutoryLeavesSummaryEmployeeIDQueryKey(
  args: InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['StatutoryLeaves', '/StatutoryLeaves/Summary/:EmployeeID', keyArgs] as const
}

export function getStatutoryLeavesSummaryEmployeeIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatutoryLeavesSummaryEmployeeIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StatutoryLeaves.Summary[':EmployeeID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStatutoryLeavesSummaryEmployeeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatutoryLeavesSummaryEmployeeIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostStatutoryLeavesSick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryLeaves.Sick.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.StatutoryLeaves.Sick.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStatutoryLeavesSickMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getStatutoryLeavesSickStatutorySickLeaveIDQueryKey(
  args: InferRequestType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['StatutoryLeaves', '/StatutoryLeaves/Sick/:StatutorySickLeaveID', keyArgs] as const
}

export function getStatutoryLeavesSickStatutorySickLeaveIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatutoryLeavesSickStatutorySickLeaveIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StatutoryLeaves.Sick[':StatutorySickLeaveID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStatutoryLeavesSickStatutorySickLeaveID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getStatutoryLeavesSickStatutorySickLeaveIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatutoryLeavesSickStatutorySickLeaveIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDLeavePeriodsQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/LeavePeriods', keyArgs] as const
}

export function getEmployeesEmployeeIDLeavePeriodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDLeavePeriodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].LeavePeriods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDLeavePeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDLeavePeriodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDLeaveTypesQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/LeaveTypes', keyArgs] as const
}

export function getEmployeesEmployeeIDLeaveTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDLeaveTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].LeaveTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDLeaveTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDLeaveTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDLeaveTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDLeaveTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/PaymentMethods', keyArgs] as const
}

export function getEmployeesEmployeeIDPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].PaymentMethods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDPaymentMethods<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDPaymentMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDPayTemplatesQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/PayTemplates', keyArgs] as const
}

export function getEmployeesEmployeeIDPayTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDPayTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].PayTemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDPayTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDPayTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDPayTemplatesEarnings<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDPayTemplatesEarningsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDPaytemplateearnings<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDPaytemplateearningsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBenefitsQueryKey(args: InferRequestType<typeof client.Benefits.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Benefits', '/Benefits', keyArgs] as const
}

export function getBenefitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Benefits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBenefitsQueryKey>
  >({
    queryKey: getBenefitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Benefits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBenefits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Benefits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBenefitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBenefitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBenefits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Benefits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Benefits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBenefitsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBenefitsIdQueryKey(
  args: InferRequestType<(typeof client.Benefits)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Benefits', '/Benefits/:id', keyArgs] as const
}

export function getBenefitsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Benefits)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenefitsIdQueryKey>
  >({
    queryKey: getBenefitsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Benefits[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBenefitsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Benefits)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Benefits)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBenefitsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBenefitsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeductionsQueryKey(args: InferRequestType<typeof client.Deductions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Deductions', '/Deductions', keyArgs] as const
}

export function getDeductionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Deductions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeductionsQueryKey>
  >({
    queryKey: getDeductionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Deductions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Deductions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeductionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeductionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDeductions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Deductions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeductionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeductionsDeductionIdQueryKey(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Deductions', '/Deductions/:deductionId', keyArgs] as const
}

export function getDeductionsDeductionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeductionsDeductionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Deductions[':deductionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDeductionsDeductionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeductionsDeductionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEarningsOrdersQueryKey(
  args: InferRequestType<typeof client.EarningsOrders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['EarningsOrders', '/EarningsOrders', keyArgs] as const
}

export function getEarningsOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.EarningsOrders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsOrdersQueryKey>
  >({
    queryKey: getEarningsOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.EarningsOrders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarningsOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.EarningsOrders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsOrders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEarningsOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEarningsOrdersIdQueryKey(
  args: InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['EarningsOrders', '/EarningsOrders/:id', keyArgs] as const
}

export function getEarningsOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsOrdersIdQueryKey>
  >({
    queryKey: getEarningsOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.EarningsOrders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarningsOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.EarningsOrders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarningsOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEarningsRatesQueryKey(args: InferRequestType<typeof client.EarningsRates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['EarningsRates', '/EarningsRates', keyArgs] as const
}

export function getEarningsRatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.EarningsRates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsRatesQueryKey>
  >({
    queryKey: getEarningsRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.EarningsRates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarningsRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.EarningsRates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEarningsRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsRatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEarningsRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.EarningsRates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEarningsRatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEarningsRatesEarningsRateIDQueryKey(
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['EarningsRates', '/EarningsRates/:EarningsRateID', keyArgs] as const
}

export function getEarningsRatesEarningsRateIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEarningsRatesEarningsRateIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.EarningsRates[':EarningsRateID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEarningsRatesEarningsRateID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEarningsRatesEarningsRateIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLeaveTypesQueryKey(args: InferRequestType<typeof client.LeaveTypes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['LeaveTypes', '/LeaveTypes', keyArgs] as const
}

export function getLeaveTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LeaveTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeaveTypesQueryKey>
  >({
    queryKey: getLeaveTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LeaveTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLeaveTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LeaveTypes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLeaveTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLeaveTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLeaveTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.LeaveTypes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLeaveTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLeaveTypesLeaveTypeIDQueryKey(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveTypes', '/LeaveTypes/:LeaveTypeID', keyArgs] as const
}

export function getLeaveTypesLeaveTypeIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLeaveTypesLeaveTypeIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LeaveTypes[':LeaveTypeID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLeaveTypesLeaveTypeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaveTypesLeaveTypeIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReimbursementsQueryKey(
  args: InferRequestType<typeof client.Reimbursements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reimbursements', '/Reimbursements', keyArgs] as const
}

export function getReimbursementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Reimbursements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReimbursementsQueryKey>
  >({
    queryKey: getReimbursementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reimbursements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReimbursements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reimbursements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReimbursementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReimbursementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostReimbursements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Reimbursements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReimbursementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReimbursementsReimbursementIDQueryKey(
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reimbursements', '/Reimbursements/:ReimbursementID', keyArgs] as const
}

export function getReimbursementsReimbursementIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getReimbursementsReimbursementIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reimbursements[':ReimbursementID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReimbursementsReimbursementID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReimbursementsReimbursementIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTimesheetsQueryKey(args: InferRequestType<typeof client.Timesheets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets', keyArgs] as const
}

export function getTimesheetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Timesheets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimesheetsQueryKey>
  >({
    queryKey: getTimesheetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Timesheets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimesheets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Timesheets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimesheetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTimesheets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Timesheets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimesheetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTimesheetsTimesheetIDQueryKey(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets/:TimesheetID', keyArgs] as const
}

export function getTimesheetsTimesheetIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTimesheetsTimesheetIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTimesheetsTimesheetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTimesheetsTimesheetIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteTimesheetsTimesheetID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTimesheetsTimesheetIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTimesheetsTimesheetIDLines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimesheetsTimesheetIDLinesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTimesheetsTimesheetIDApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimesheetsTimesheetIDApproveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTimesheetsTimesheetIDRevertToDraft<
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
                ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimesheetsTimesheetIDRevertToDraftMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutTimesheetsTimesheetIDLinesTimesheetLineID<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTimesheetsTimesheetIDLinesTimesheetLineID<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPayRunCalendarsQueryKey(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRunCalendars', '/PayRunCalendars', keyArgs] as const
}

export function getPayRunCalendarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PayRunCalendars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPayRunCalendarsQueryKey>
  >({
    queryKey: getPayRunCalendarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayRunCalendars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPayRunCalendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PayRunCalendars.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPayRunCalendarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayRunCalendarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPayRunCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.PayRunCalendars.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayRunCalendarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPayRunCalendarsPayRunCalendarIDQueryKey(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRunCalendars', '/PayRunCalendars/:PayRunCalendarID', keyArgs] as const
}

export function getPayRunCalendarsPayRunCalendarIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPayRunCalendarsPayRunCalendarIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayRunCalendars[':PayRunCalendarID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPayRunCalendarsPayRunCalendarID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPayRunCalendarsPayRunCalendarIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDSalaryAndWagesQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages', keyArgs] as const
}

export function getEmployeesEmployeeIDSalaryAndWagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDSalaryAndWagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].SalaryAndWages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDSalaryAndWages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDSalaryAndWagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEmployeesEmployeeIDSalaryAndWages<
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
                ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDSalaryAndWagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', keyArgs] as const
}

export function getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
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
  args: () => InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPayRunsQueryKey(args: InferRequestType<typeof client.PayRuns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PayRuns', '/PayRuns', keyArgs] as const
}

export function getPayRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PayRuns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayRunsQueryKey>
  >({
    queryKey: getPayRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayRuns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPayRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PayRuns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPayRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPayRunsPayRunIDQueryKey(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRuns', '/PayRuns/:PayRunID', keyArgs] as const
}

export function getPayRunsPayRunIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayRunsPayRunIDQueryKey>
  >({
    queryKey: getPayRunsPayRunIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayRuns[':PayRunID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPayRunsPayRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPayRunsPayRunIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayRunsPayRunIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPayslipsQueryKey(args: InferRequestType<typeof client.Payslips.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Payslips', '/Payslips', keyArgs] as const
}

export function getPayslipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Payslips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayslipsQueryKey>
  >({
    queryKey: getPayslipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Payslips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPayslips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Payslips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payslips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPayslipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayslipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPayslipsPayslipIDQueryKey(
  args: InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payslips', '/Payslips/:PayslipID', keyArgs] as const
}

export function getPayslipsPayslipIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayslipsPayslipIDQueryKey>
  >({
    queryKey: getPayslipsPayslipIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Payslips[':PayslipID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPayslipsPayslipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Payslips)[':PayslipID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPayslipsPayslipIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayslipsPayslipIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsQueryKey(args: InferRequestType<typeof client.Settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings', keyArgs] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsTrackingCategoriesQueryKey(
  args: InferRequestType<typeof client.Settings.trackingCategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings/trackingCategories', keyArgs] as const
}

export function getSettingsTrackingCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Settings.trackingCategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTrackingCategoriesQueryKey>
  >({
    queryKey: getSettingsTrackingCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Settings.trackingCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Settings.trackingCategories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Settings.trackingCategories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTrackingCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsTrackingCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
