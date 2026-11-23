import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEmployeesKey() {
  return ['Employees'] as const
}

export function getLeaveApplicationsKey() {
  return ['LeaveApplications'] as const
}

export function getPayItemsKey() {
  return ['PayItems'] as const
}

export function getPayRunsKey() {
  return ['PayRuns'] as const
}

export function getPayrollCalendarsKey() {
  return ['PayrollCalendars'] as const
}

export function getPayslipKey() {
  return ['Payslip'] as const
}

export function getSettingsKey() {
  return ['Settings'] as const
}

export function getSuperfundProductsKey() {
  return ['SuperfundProducts'] as const
}

export function getSuperfundsKey() {
  return ['Superfunds'] as const
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

export function createEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Employees.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEmployeesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Employees.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createEmployeesEmployeeID<
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
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployeesEmployeeIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostEmployeesEmployeeIDMutationKey() {
  return ['Employees', '/Employees/:EmployeeID', 'POST'] as const
}

export function getPostEmployeesEmployeeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployeesEmployeeIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$post']>) {
      return parseResponse(client.Employees[':EmployeeID'].$post(args, options))
    },
  })
}

export function createPostEmployeesEmployeeID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Employees)[':EmployeeID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployeesEmployeeIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLeaveApplicationsQueryKey(
  args: InferRequestType<typeof client.LeaveApplications.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveApplications', '/LeaveApplications', keyArgs] as const
}

export function getLeaveApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LeaveApplications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveApplicationsQueryKey>
  >({
    queryKey: getLeaveApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LeaveApplications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLeaveApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LeaveApplications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLeaveApplicationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLeaveApplicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostLeaveApplicationsMutationKey() {
  return ['LeaveApplications', '/LeaveApplications', 'POST'] as const
}

export function getPostLeaveApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.LeaveApplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LeaveApplications.$post>) {
      return parseResponse(client.LeaveApplications.$post(args, options))
    },
  })
}

export function createPostLeaveApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LeaveApplications.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLeaveApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLeaveApplicationsV2QueryKey(
  args: InferRequestType<typeof client.LeaveApplications.v2.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveApplications', '/LeaveApplications/v2', keyArgs] as const
}

export function getLeaveApplicationsV2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LeaveApplications.v2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveApplicationsV2QueryKey>
  >({
    queryKey: getLeaveApplicationsV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LeaveApplications.v2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLeaveApplicationsV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LeaveApplications.v2.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLeaveApplicationsV2QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLeaveApplicationsV2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLeaveApplicationsLeaveApplicationIDQueryKey(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID', keyArgs] as const
}

export function getLeaveApplicationsLeaveApplicationIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveApplicationsLeaveApplicationIDQueryKey>
  >({
    queryKey: getLeaveApplicationsLeaveApplicationIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LeaveApplications[':LeaveApplicationID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLeaveApplicationsLeaveApplicationID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLeaveApplicationsLeaveApplicationIDQueryKey>
        >
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
      ...getLeaveApplicationsLeaveApplicationIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostLeaveApplicationsLeaveApplicationIDMutationKey() {
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID', 'POST'] as const
}

export function getPostLeaveApplicationsLeaveApplicationIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveApplicationsLeaveApplicationIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>,
    ) {
      return parseResponse(client.LeaveApplications[':LeaveApplicationID'].$post(args, options))
    },
  })
}

export function createPostLeaveApplicationsLeaveApplicationID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLeaveApplicationsLeaveApplicationIDMutationOptions<
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

export function getPostLeaveApplicationsLeaveApplicationIDApproveMutationKey() {
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID/approve', 'POST'] as const
}

export function getPostLeaveApplicationsLeaveApplicationIDApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveApplicationsLeaveApplicationIDApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.LeaveApplications[':LeaveApplicationID'].approve.$post(args, options),
      )
    },
  })
}

export function createPostLeaveApplicationsLeaveApplicationIDApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLeaveApplicationsLeaveApplicationIDApproveMutationOptions<
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

export function getPostLeaveApplicationsLeaveApplicationIDRejectMutationKey() {
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID/reject', 'POST'] as const
}

export function getPostLeaveApplicationsLeaveApplicationIDRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveApplicationsLeaveApplicationIDRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.LeaveApplications[':LeaveApplicationID'].reject.$post(args, options),
      )
    },
  })
}

export function createPostLeaveApplicationsLeaveApplicationIDReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLeaveApplicationsLeaveApplicationIDRejectMutationOptions<
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

export function getPayItemsQueryKey(args: InferRequestType<typeof client.PayItems.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PayItems', '/PayItems', keyArgs] as const
}

export function getPayItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PayItems.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayItemsQueryKey>
  >({
    queryKey: getPayItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayItems.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PayItems.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPayItemsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPayItemsMutationKey() {
  return ['PayItems', '/PayItems', 'POST'] as const
}

export function getPostPayItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$post>>>>>,
    TError,
    InferRequestType<typeof client.PayItems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PayItems.$post>) {
      return parseResponse(client.PayItems.$post(args, options))
    },
  })
}

export function createPostPayItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.PayItems.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPayrollCalendarsQueryKey(
  args: InferRequestType<typeof client.PayrollCalendars.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayrollCalendars', '/PayrollCalendars', keyArgs] as const
}

export function getPayrollCalendarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PayrollCalendars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPayrollCalendarsQueryKey>
  >({
    queryKey: getPayrollCalendarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayrollCalendars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayrollCalendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PayrollCalendars.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPayrollCalendarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayrollCalendarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPayrollCalendarsMutationKey() {
  return ['PayrollCalendars', '/PayrollCalendars', 'POST'] as const
}

export function getPostPayrollCalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PayrollCalendars.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayrollCalendarsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PayrollCalendars.$post>) {
      return parseResponse(client.PayrollCalendars.$post(args, options))
    },
  })
}

export function createPostPayrollCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PayrollCalendars.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayrollCalendarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPayrollCalendarsPayrollCalendarIDQueryKey(
  args: InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayrollCalendars', '/PayrollCalendars/:PayrollCalendarID', keyArgs] as const
}

export function getPayrollCalendarsPayrollCalendarIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayrollCalendarsPayrollCalendarIDQueryKey>
  >({
    queryKey: getPayrollCalendarsPayrollCalendarIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PayrollCalendars[':PayrollCalendarID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPayrollCalendarsPayrollCalendarID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPayrollCalendarsPayrollCalendarIDQueryKey>
        >
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
      ...getPayrollCalendarsPayrollCalendarIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPayRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PayRuns.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPayRunsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPayRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.PayRuns.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPayRunsPayRunID<
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPayRunsPayRunIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayRunsPayRunIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPayRunsPayRunIDMutationKey() {
  return ['PayRuns', '/PayRuns/:PayRunID', 'POST'] as const
}

export function getPostPayRunsPayRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.PayRuns)[':PayRunID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayRunsPayRunIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$post']>) {
      return parseResponse(client.PayRuns[':PayRunID'].$post(args, options))
    },
  })
}

export function createPostPayRunsPayRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.PayRuns)[':PayRunID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayRunsPayRunIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPayslipPayslipIDQueryKey(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payslip', '/Payslip/:PayslipID', keyArgs] as const
}

export function getPayslipPayslipIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayslipPayslipIDQueryKey>
  >({
    queryKey: getPayslipPayslipIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Payslip[':PayslipID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayslipPayslipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPayslipPayslipIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayslipPayslipIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPayslipPayslipIDMutationKey() {
  return ['Payslip', '/Payslip/:PayslipID', 'POST'] as const
}

export function getPostPayslipPayslipIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Payslip)[':PayslipID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayslipPayslipIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$post']>) {
      return parseResponse(client.Payslip[':PayslipID'].$post(args, options))
    },
  })
}

export function createPostPayslipPayslipID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Payslip)[':PayslipID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayslipPayslipIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Settings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSuperfundsQueryKey(args: InferRequestType<typeof client.Superfunds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Superfunds', '/Superfunds', keyArgs] as const
}

export function getSuperfundsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Superfunds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuperfundsQueryKey>
  >({
    queryKey: getSuperfundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Superfunds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuperfunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Superfunds.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSuperfundsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuperfundsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSuperfundsMutationKey() {
  return ['Superfunds', '/Superfunds', 'POST'] as const
}

export function getPostSuperfundsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$post>>>>>,
    TError,
    InferRequestType<typeof client.Superfunds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuperfundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Superfunds.$post>) {
      return parseResponse(client.Superfunds.$post(args, options))
    },
  })
}

export function createPostSuperfunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Superfunds.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSuperfundsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSuperfundsSuperFundIDQueryKey(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Superfunds', '/Superfunds/:SuperFundID', keyArgs] as const
}

export function getSuperfundsSuperFundIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuperfundsSuperFundIDQueryKey>
  >({
    queryKey: getSuperfundsSuperFundIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Superfunds[':SuperFundID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuperfundsSuperFundID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuperfundsSuperFundIDQueryKey>
        >
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
      ...getSuperfundsSuperFundIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSuperfundsSuperFundIDMutationKey() {
  return ['Superfunds', '/Superfunds/:SuperFundID', 'POST'] as const
}

export function getPostSuperfundsSuperFundIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSuperfundsSuperFundIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$post']>) {
      return parseResponse(client.Superfunds[':SuperFundID'].$post(args, options))
    },
  })
}

export function createPostSuperfundsSuperFundID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSuperfundsSuperFundIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSuperfundProductsQueryKey(
  args: InferRequestType<typeof client.SuperfundProducts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['SuperfundProducts', '/SuperfundProducts', keyArgs] as const
}

export function getSuperfundProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.SuperfundProducts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuperfundProductsQueryKey>
  >({
    queryKey: getSuperfundProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SuperfundProducts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuperfundProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.SuperfundProducts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuperfundProductsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuperfundProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTimesheets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Timesheets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTimesheetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimesheetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTimesheets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Timesheets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimesheetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTimesheetsTimesheetID<
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
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getTimesheetsTimesheetIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTimesheetsTimesheetIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$post']>) {
      return parseResponse(client.Timesheets[':TimesheetID'].$post(args, options))
    },
  })
}

export function createPostTimesheetsTimesheetID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimesheetsTimesheetIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
