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

export function usePostEmployeesEmployeeID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEmployeesEmployeeIDMutationOptions<TError, TOnMutateResult>(
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

export function getLeaveApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveApplications.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LeaveApplications', '/LeaveApplications', keyArgs] as const
}

export function getLeaveApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveApplications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaveApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LeaveApplications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaveApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveApplications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>
            >
          >,
          ReturnType<typeof getLeaveApplicationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaveApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LeaveApplications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLeaveApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LeaveApplications.$post>,
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
  const mutationDefaults = getPostLeaveApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getLeaveApplicationsV2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveApplications.v2.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LeaveApplications', '/LeaveApplications/v2', keyArgs] as const
}

export function getLeaveApplicationsV2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveApplications.v2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaveApplicationsV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LeaveApplications.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaveApplicationsV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LeaveApplications.v2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
            >
          >,
          ReturnType<typeof getLeaveApplicationsV2QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveApplicationsV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaveApplicationsV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LeaveApplications.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaveApplicationsLeaveApplicationIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID', keyArgs] as const
}

export function getLeaveApplicationsLeaveApplicationIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaveApplicationsLeaveApplicationIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LeaveApplications[':LeaveApplicationID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaveApplicationsLeaveApplicationID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLeaveApplicationsLeaveApplicationIDQueryKey>
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
          Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaveApplicationsLeaveApplicationIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaveApplicationsLeaveApplicationIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LeaveApplications[':LeaveApplicationID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLeaveApplicationsLeaveApplicationID<
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
                  ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>,
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
  const mutationDefaults = getPostLeaveApplicationsLeaveApplicationIDMutationOptions<
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

export function usePostLeaveApplicationsLeaveApplicationIDApprove<
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
  const mutationDefaults = getPostLeaveApplicationsLeaveApplicationIDApproveMutationOptions<
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

export function usePostLeaveApplicationsLeaveApplicationIDReject<
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
  const mutationDefaults = getPostLeaveApplicationsLeaveApplicationIDRejectMutationOptions<
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

export function getPayItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayItems.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayItems', '/PayItems', keyArgs] as const
}

export function getPayItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayItems.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayItems.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayItems.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>
          >,
          ReturnType<typeof getPayItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPayItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.PayItems.$post>,
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
  const mutationDefaults = getPostPayItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPayrollCalendarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayrollCalendars.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayrollCalendars', '/PayrollCalendars', keyArgs] as const
}

export function getPayrollCalendarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayrollCalendars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayrollCalendarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayrollCalendars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayrollCalendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PayrollCalendars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>
            >
          >,
          ReturnType<typeof getPayrollCalendarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPayrollCalendarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayrollCalendarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayrollCalendars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPayrollCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PayrollCalendars.$post>,
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
  const mutationDefaults = getPostPayrollCalendarsMutationOptions<TError, TOnMutateResult>(
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

export function getPayrollCalendarsPayrollCalendarIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PayrollCalendars', '/PayrollCalendars/:PayrollCalendarID', keyArgs] as const
}

export function getPayrollCalendarsPayrollCalendarIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayrollCalendarsPayrollCalendarIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PayrollCalendars[':PayrollCalendarID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayrollCalendarsPayrollCalendarID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayrollCalendarsPayrollCalendarIDQueryKey>
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
          Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayrollCalendarsPayrollCalendarIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayrollCalendarsPayrollCalendarIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PayrollCalendars[':PayrollCalendarID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function usePostPayRunsPayRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostPayRunsPayRunIDMutationOptions<TError, TOnMutateResult>(
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

export function getPayslipPayslipIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Payslip', '/Payslip/:PayslipID', keyArgs] as const
}

export function getPayslipPayslipIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayslipPayslipIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Payslip[':PayslipID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayslipPayslipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayslipPayslipIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayslipPayslipIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayslipPayslipIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Payslip[':PayslipID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPayslipPayslipID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostPayslipPayslipIDMutationOptions<TError, TOnMutateResult>(
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

export function getSuperfundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Superfunds.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Superfunds', '/Superfunds', keyArgs] as const
}

export function getSuperfundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Superfunds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuperfundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Superfunds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSuperfunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Superfunds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>
          >,
          ReturnType<typeof getSuperfundsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuperfundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuperfundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Superfunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSuperfunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Superfunds.$post>,
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
  const mutationDefaults = getPostSuperfundsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSuperfundsSuperFundIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Superfunds', '/Superfunds/:SuperFundID', keyArgs] as const
}

export function getSuperfundsSuperFundIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuperfundsSuperFundIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Superfunds[':SuperFundID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuperfundsSuperFundID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuperfundsSuperFundIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuperfundsSuperFundIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuperfundsSuperFundIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Superfunds[':SuperFundID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSuperfundsSuperFundID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSuperfundsSuperFundIDMutationOptions<TError, TOnMutateResult>(
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

export function getSuperfundProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.SuperfundProducts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['SuperfundProducts', '/SuperfundProducts', keyArgs] as const
}

export function getSuperfundProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.SuperfundProducts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuperfundProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SuperfundProducts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuperfundProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.SuperfundProducts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>
            >
          >,
          ReturnType<typeof getSuperfundProductsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuperfundProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuperfundProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SuperfundProducts.$get(toValue(args), {
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

export function usePostTimesheetsTimesheetID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTimesheetsTimesheetIDMutationOptions<TError, TOnMutateResult>(
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
