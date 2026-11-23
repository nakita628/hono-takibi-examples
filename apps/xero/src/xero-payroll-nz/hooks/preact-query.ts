import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Employees.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmployeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Employees.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmployeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useEmployeesEmployeeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmployeesEmployeeIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmployeesEmployeeIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDTaxQueryKey>
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
      ...getEmployeesEmployeeIDTaxQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDTax<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDTaxQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/OpeningBalances', keyArgs] as const
}

export function getEmployeesEmployeeIDOpeningBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDOpeningBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID'].OpeningBalances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDOpeningBalancesQueryKey>
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
      ...getEmployeesEmployeeIDOpeningBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDOpeningBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDOpeningBalancesQueryKey>
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
      ...getEmployeesEmployeeIDOpeningBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDLeaveQueryKey>
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
      ...getEmployeesEmployeeIDLeaveQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDLeave<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDLeaveQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmployeesEmployeeIDLeaveBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDLeaveBalances<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDLeaveBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmployeesEmployeeIDLeavePeriodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDLeavePeriods<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDLeavePeriodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDLeaveTypesQueryKey>
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
      ...getEmployeesEmployeeIDLeaveTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDLeaveTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDLeaveTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDPaymentMethodsQueryKey>
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
      ...getEmployeesEmployeeIDPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDPaymentMethods<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmployeesEmployeeIDPayTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDPayTemplates<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDPayTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Deductions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeductionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Deductions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeductionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useDeductionsDeductionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeductionsDeductionIdQueryKey>
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
      ...getDeductionsDeductionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeductionsDeductionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeductionsDeductionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatutoryDeductionsQueryKey(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['StatutoryDeductions', '/StatutoryDeductions', keyArgs] as const
}

export function getStatutoryDeductionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.StatutoryDeductions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatutoryDeductionsQueryKey>
  >({
    queryKey: getStatutoryDeductionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StatutoryDeductions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatutoryDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatutoryDeductionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatutoryDeductionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatutoryDeductions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatutoryDeductionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatutoryDeductionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatutoryDeductionsIdQueryKey(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['StatutoryDeductions', '/StatutoryDeductions/:id', keyArgs] as const
}

export function getStatutoryDeductionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatutoryDeductionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StatutoryDeductions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatutoryDeductionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStatutoryDeductionsIdQueryKey>
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
      ...getStatutoryDeductionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatutoryDeductionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getStatutoryDeductionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSuperannuationsQueryKey(
  args: InferRequestType<typeof client.Superannuations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Superannuations', '/Superannuations', keyArgs] as const
}

export function getSuperannuationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Superannuations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuperannuationsQueryKey>
  >({
    queryKey: getSuperannuationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Superannuations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSuperannuations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Superannuations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSuperannuationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuperannuationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuperannuations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Superannuations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSuperannuationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuperannuationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Superannuations.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Superannuations', '/Superannuations/:SuperannuationID', keyArgs] as const
}

export function getSuperannuationsSuperannuationIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSuperannuationsSuperannuationIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Superannuations[':SuperannuationID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSuperannuationsSuperannuationIDQueryKey>
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
      ...getSuperannuationsSuperannuationIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuperannuationsSuperannuationID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSuperannuationsSuperannuationIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEarningsRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.EarningsRates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEarningsRatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEarningsRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.EarningsRates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEarningsRatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEarningsRatesEarningsRateIDQueryKey>
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
      ...getEarningsRatesEarningsRateIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEarningsRatesEarningsRateID<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEarningsRatesEarningsRateIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useLeaveTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LeaveTypes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLeaveTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeaveTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LeaveTypes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLeaveTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useLeaveTypesLeaveTypeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLeaveTypesLeaveTypeIDQueryKey>
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
      ...getLeaveTypesLeaveTypeIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaveTypesLeaveTypeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLeaveTypesLeaveTypeIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useReimbursements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reimbursements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReimbursementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReimbursements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reimbursements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReimbursementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getReimbursementsReimbursementIDQueryKey>
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
      ...getReimbursementsReimbursementIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReimbursementsReimbursementID<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReimbursementsReimbursementIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTimesheets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimesheetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimesheets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimesheetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useTimesheetsTimesheetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTimesheetsTimesheetIDQueryKey>
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
      ...getTimesheetsTimesheetIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimesheetsTimesheetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTimesheetsTimesheetIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function usePayRunCalendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPayRunCalendarsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePayRunCalendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPayRunCalendarsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRunCalendars', '/PayRunCalendars/:PayrollCalendarID', keyArgs] as const
}

export function getPayRunCalendarsPayrollCalendarIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPayRunCalendarsPayrollCalendarIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayRunCalendars[':PayrollCalendarID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPayRunCalendarsPayrollCalendarIDQueryKey>
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
      ...getPayRunCalendarsPayrollCalendarIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePayRunCalendarsPayrollCalendarID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPayRunCalendarsPayrollCalendarIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesQueryKey>
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
      ...getEmployeesEmployeeIDSalaryAndWagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDSalaryAndWages<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDSalaryAndWagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryKey>
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
      ...getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function usePayRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.PayRuns.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPayRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPayRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePayRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.PayRuns.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPayRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPayRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$post>>>>>,
        TError,
        InferRequestType<typeof client.PayRuns.$post>,
        TOnMutateResult
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

export function usePayRunsPayRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPayRunsPayRunIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePayRunsPayRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPayRunsPayRunIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPaySlipsQueryKey(args: InferRequestType<typeof client.PaySlips.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PaySlips', '/PaySlips', keyArgs] as const
}

export function getPaySlipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PaySlips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaySlipsQueryKey>
  >({
    queryKey: getPaySlipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PaySlips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePaySlips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.PaySlips.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaySlipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaySlipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaySlips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.PaySlips.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaySlipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaySlipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPaySlipsPaySlipIDQueryKey(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PaySlips', '/PaySlips/:PaySlipID', keyArgs] as const
}

export function getPaySlipsPaySlipIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaySlipsPaySlipIDQueryKey>
  >({
    queryKey: getPaySlipsPaySlipIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PaySlips[':PaySlipID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaySlipsPaySlipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaySlipsPaySlipIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaySlipsPaySlipIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaySlipsPaySlipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaySlipsPaySlipIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaySlipsPaySlipIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsTrackingCategoriesQueryKey(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings/TrackingCategories', keyArgs] as const
}

export function getSettingsTrackingCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTrackingCategoriesQueryKey>
  >({
    queryKey: getSettingsTrackingCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Settings.TrackingCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSettingsTrackingCategoriesQueryKey>
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
      ...getSettingsTrackingCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsTrackingCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEmployeesEmployeeIDWorkingPatternsQueryKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Working-Patterns', keyArgs] as const
}

export function getEmployeesEmployeeIDWorkingPatternsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDWorkingPatternsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID']['Working-Patterns'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsQueryKey>
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
      ...getEmployeesEmployeeIDWorkingPatternsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDWorkingPatterns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsQueryKey>
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
      ...getEmployeesEmployeeIDWorkingPatternsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employees',
    '/Employees/:EmployeeID/Working-Patterns/:EmployeeWorkingPatternID',
    keyArgs,
  ] as const
}

export function getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryKey>
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
      ...getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID<
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
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
