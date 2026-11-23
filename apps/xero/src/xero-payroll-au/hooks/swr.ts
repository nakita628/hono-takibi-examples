import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetEmployeesKey(args: InferRequestType<typeof client.Employees.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees', keyArgs] as const
}

export function useGetEmployees<TError = unknown>(
  args: InferRequestType<typeof client.Employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployees<TError = unknown>(
  args: InferRequestType<typeof client.Employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesKey() {
  return ['Employees', '/Employees', 'POST'] as const
}

export function usePostEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employees.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Employees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Employees.$post> }) =>
        parseResponse(client.Employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID', keyArgs] as const
}

export function useGetEmployeesEmployeeID<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
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
        ? getGetEmployeesEmployeeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees[':EmployeeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeID<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
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
        ? getGetEmployeesEmployeeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees[':EmployeeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDKey() {
  return ['Employees', '/Employees/:EmployeeID', 'POST'] as const
}

export function usePostEmployeesEmployeeID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['$post']> },
      ) => parseResponse(client.Employees[':EmployeeID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLeaveApplicationsKey(
  args: InferRequestType<typeof client.LeaveApplications.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveApplications', '/LeaveApplications', keyArgs] as const
}

export function useGetLeaveApplications<TError = unknown>(
  args: InferRequestType<typeof client.LeaveApplications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
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
        ? getGetLeaveApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveApplications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaveApplications<TError = unknown>(
  args: InferRequestType<typeof client.LeaveApplications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
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
        ? getGetLeaveApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveApplications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLeaveApplicationsKey() {
  return ['LeaveApplications', '/LeaveApplications', 'POST'] as const
}

export function usePostLeaveApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.LeaveApplications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LeaveApplications.$post> }) =>
        parseResponse(client.LeaveApplications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLeaveApplicationsV2Key(
  args: InferRequestType<typeof client.LeaveApplications.v2.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveApplications', '/LeaveApplications/v2', keyArgs] as const
}

export function useGetLeaveApplicationsV2<TError = unknown>(
  args: InferRequestType<typeof client.LeaveApplications.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
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
        ? getGetLeaveApplicationsV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveApplications.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaveApplicationsV2<TError = unknown>(
  args: InferRequestType<typeof client.LeaveApplications.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
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
        ? getGetLeaveApplicationsV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LeaveApplications.v2.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveApplications.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaveApplicationsLeaveApplicationIDKey(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID', keyArgs] as const
}

export function useGetLeaveApplicationsLeaveApplicationID<TError = unknown>(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
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
        ? getGetLeaveApplicationsLeaveApplicationIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LeaveApplications[':LeaveApplicationID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaveApplicationsLeaveApplicationID<TError = unknown>(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
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
        ? getGetLeaveApplicationsLeaveApplicationIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LeaveApplications[':LeaveApplicationID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLeaveApplicationsLeaveApplicationIDKey() {
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID', 'POST'] as const
}

export function usePostLeaveApplicationsLeaveApplicationID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveApplicationsLeaveApplicationIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>
        },
      ) => parseResponse(client.LeaveApplications[':LeaveApplicationID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLeaveApplicationsLeaveApplicationIDApproveKey() {
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID/approve', 'POST'] as const
}

export function usePostLeaveApplicationsLeaveApplicationIDApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveApplicationsLeaveApplicationIDApproveKey()
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
            (typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.LeaveApplications[':LeaveApplicationID'].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLeaveApplicationsLeaveApplicationIDRejectKey() {
  return ['LeaveApplications', '/LeaveApplications/:LeaveApplicationID/reject', 'POST'] as const
}

export function usePostLeaveApplicationsLeaveApplicationIDReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveApplicationsLeaveApplicationIDRejectKey()
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
            (typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.LeaveApplications[':LeaveApplicationID'].reject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPayItemsKey(args: InferRequestType<typeof client.PayItems.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PayItems', '/PayItems', keyArgs] as const
}

export function useGetPayItems<TError = unknown>(
  args: InferRequestType<typeof client.PayItems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.PayItems.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPayItems<TError = unknown>(
  args: InferRequestType<typeof client.PayItems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.PayItems.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPayItemsKey() {
  return ['PayItems', '/PayItems', 'POST'] as const
}

export function usePostPayItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayItems.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.PayItems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PayItems.$post> }) =>
        parseResponse(client.PayItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayrollCalendarsKey(
  args: InferRequestType<typeof client.PayrollCalendars.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayrollCalendars', '/PayrollCalendars', keyArgs] as const
}

export function useGetPayrollCalendars<TError = unknown>(
  args: InferRequestType<typeof client.PayrollCalendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
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
        ? getGetPayrollCalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PayrollCalendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayrollCalendars<TError = unknown>(
  args: InferRequestType<typeof client.PayrollCalendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
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
        ? getGetPayrollCalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PayrollCalendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayrollCalendarsKey() {
  return ['PayrollCalendars', '/PayrollCalendars', 'POST'] as const
}

export function usePostPayrollCalendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayrollCalendars.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PayrollCalendars.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayrollCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PayrollCalendars.$post> }) =>
        parseResponse(client.PayrollCalendars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayrollCalendarsPayrollCalendarIDKey(
  args: InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayrollCalendars', '/PayrollCalendars/:PayrollCalendarID', keyArgs] as const
}

export function useGetPayrollCalendarsPayrollCalendarID<TError = unknown>(
  args: InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
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
        ? getGetPayrollCalendarsPayrollCalendarIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PayrollCalendars[':PayrollCalendarID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayrollCalendarsPayrollCalendarID<TError = unknown>(
  args: InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
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
        ? getGetPayrollCalendarsPayrollCalendarIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PayrollCalendars[':PayrollCalendarID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPayRunsKey(args: InferRequestType<typeof client.PayRuns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PayRuns', '/PayRuns', keyArgs] as const
}

export function useGetPayRuns<TError = unknown>(
  args: InferRequestType<typeof client.PayRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.PayRuns.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPayRuns<TError = unknown>(
  args: InferRequestType<typeof client.PayRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.PayRuns.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPayRunsKey() {
  return ['PayRuns', '/PayRuns', 'POST'] as const
}

export function usePostPayRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRuns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.PayRuns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PayRuns.$post> }) =>
        parseResponse(client.PayRuns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayRunsPayRunIDKey(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRuns', '/PayRuns/:PayRunID', keyArgs] as const
}

export function useGetPayRunsPayRunID<TError = unknown>(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
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
        ? getGetPayRunsPayRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PayRuns[':PayRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayRunsPayRunID<TError = unknown>(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
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
        ? getGetPayRunsPayRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PayRuns[':PayRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayRunsPayRunIDKey() {
  return ['PayRuns', '/PayRuns/:PayRunID', 'POST'] as const
}

export function usePostPayRunsPayRunID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.PayRuns)[':PayRunID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.PayRuns)[':PayRunID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayRunsPayRunIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$post']> },
      ) => parseResponse(client.PayRuns[':PayRunID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayslipPayslipIDKey(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payslip', '/Payslip/:PayslipID', keyArgs] as const
}

export function useGetPayslipPayslipID<TError = unknown>(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
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
        ? getGetPayslipPayslipIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Payslip[':PayslipID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayslipPayslipID<TError = unknown>(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
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
        ? getGetPayslipPayslipIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Payslip[':PayslipID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayslipPayslipIDKey() {
  return ['Payslip', '/Payslip/:PayslipID', 'POST'] as const
}

export function usePostPayslipPayslipID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payslip)[':PayslipID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Payslip)[':PayslipID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayslipPayslipIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Payslip)[':PayslipID']['$post']> },
      ) => parseResponse(client.Payslip[':PayslipID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsKey(args: InferRequestType<typeof client.Settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings', keyArgs] as const
}

export function useGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSuperfundsKey(args: InferRequestType<typeof client.Superfunds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Superfunds', '/Superfunds', keyArgs] as const
}

export function useGetSuperfunds<TError = unknown>(
  args: InferRequestType<typeof client.Superfunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuperfundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Superfunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuperfunds<TError = unknown>(
  args: InferRequestType<typeof client.Superfunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuperfundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Superfunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuperfundsKey() {
  return ['Superfunds', '/Superfunds', 'POST'] as const
}

export function usePostSuperfunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superfunds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Superfunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuperfundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Superfunds.$post> }) =>
        parseResponse(client.Superfunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuperfundsSuperFundIDKey(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Superfunds', '/Superfunds/:SuperFundID', keyArgs] as const
}

export function useGetSuperfundsSuperFundID<TError = unknown>(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
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
        ? getGetSuperfundsSuperFundIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Superfunds[':SuperFundID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuperfundsSuperFundID<TError = unknown>(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
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
        ? getGetSuperfundsSuperFundIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Superfunds[':SuperFundID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuperfundsSuperFundIDKey() {
  return ['Superfunds', '/Superfunds/:SuperFundID', 'POST'] as const
}

export function usePostSuperfundsSuperFundID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Superfunds)[':SuperFundID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuperfundsSuperFundIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$post']> },
      ) => parseResponse(client.Superfunds[':SuperFundID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuperfundProductsKey(
  args: InferRequestType<typeof client.SuperfundProducts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['SuperfundProducts', '/SuperfundProducts', keyArgs] as const
}

export function useGetSuperfundProducts<TError = unknown>(
  args: InferRequestType<typeof client.SuperfundProducts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
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
        ? getGetSuperfundProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.SuperfundProducts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuperfundProducts<TError = unknown>(
  args: InferRequestType<typeof client.SuperfundProducts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
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
        ? getGetSuperfundProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SuperfundProducts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.SuperfundProducts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimesheetsKey(args: InferRequestType<typeof client.Timesheets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets', keyArgs] as const
}

export function useGetTimesheets<TError = unknown>(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimesheetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimesheets<TError = unknown>(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimesheetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTimesheetsKey() {
  return ['Timesheets', '/Timesheets', 'POST'] as const
}

export function usePostTimesheets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Timesheets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Timesheets.$post> }) =>
        parseResponse(client.Timesheets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimesheetsTimesheetIDKey(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets/:TimesheetID', keyArgs] as const
}

export function useGetTimesheetsTimesheetID<TError = unknown>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
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
        ? getGetTimesheetsTimesheetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets[':TimesheetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimesheetsTimesheetID<TError = unknown>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
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
        ? getGetTimesheetsTimesheetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets[':TimesheetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID', 'POST'] as const
}

export function usePostTimesheetsTimesheetID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$post']> },
      ) => parseResponse(client.Timesheets[':TimesheetID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
