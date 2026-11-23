import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPutEmployeesEmployeeIDKey() {
  return ['Employees', '/Employees/:EmployeeID', 'PUT'] as const
}

export function usePutEmployeesEmployeeID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployeesEmployeeIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['$put']> },
      ) => parseResponse(client.Employees[':EmployeeID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDEmploymentKey() {
  return ['Employees', '/Employees/:EmployeeID/Employment', 'POST'] as const
}

export function usePostEmployeesEmployeeIDEmployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDEmploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>
        },
      ) => parseResponse(client.Employees[':EmployeeID'].Employment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDTaxKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Tax', keyArgs] as const
}

export function useGetEmployeesEmployeeIDTax<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
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
        ? getGetEmployeesEmployeeIDTaxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees[':EmployeeID'].Tax.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDTax<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
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
        ? getGetEmployeesEmployeeIDTaxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees[':EmployeeID'].Tax.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDTaxKey() {
  return ['Employees', '/Employees/:EmployeeID/Tax', 'POST'] as const
}

export function usePostEmployeesEmployeeIDTax<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDTaxKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']> },
      ) => parseResponse(client.Employees[':EmployeeID'].Tax.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDOpeningBalancesKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/OpeningBalances', keyArgs] as const
}

export function useGetEmployeesEmployeeIDOpeningBalances<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
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
        ? getGetEmployeesEmployeeIDOpeningBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].OpeningBalances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDOpeningBalances<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
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
        ? getGetEmployeesEmployeeIDOpeningBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].OpeningBalances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDOpeningBalancesKey() {
  return ['Employees', '/Employees/:EmployeeID/OpeningBalances', 'POST'] as const
}

export function usePostEmployeesEmployeeIDOpeningBalances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDOpeningBalancesKey()
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
            (typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']
          >
        },
      ) => parseResponse(client.Employees[':EmployeeID'].OpeningBalances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDLeaveKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Leave', keyArgs] as const
}

export function useGetEmployeesEmployeeIDLeave<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeaveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees[':EmployeeID'].Leave.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDLeave<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeaveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employees[':EmployeeID'].Leave.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDLeaveKey() {
  return ['Employees', '/Employees/:EmployeeID/Leave', 'POST'] as const
}

export function usePostEmployeesEmployeeIDLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']> },
      ) => parseResponse(client.Employees[':EmployeeID'].Leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEmployeesEmployeeIDLeaveLeaveIDKey() {
  return ['Employees', '/Employees/:EmployeeID/Leave/:LeaveID', 'PUT'] as const
}

export function usePutEmployeesEmployeeIDLeaveLeaveID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployeesEmployeeIDLeaveLeaveIDKey()
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
            (typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']
          >
        },
      ) =>
        parseResponse(client.Employees[':EmployeeID'].Leave[':LeaveID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployeesEmployeeIDLeaveLeaveIDKey() {
  return ['Employees', '/Employees/:EmployeeID/Leave/:LeaveID', 'DELETE'] as const
}

export function useDeleteEmployeesEmployeeIDLeaveLeaveID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployeesEmployeeIDLeaveLeaveIDKey()
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
            (typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].Leave[':LeaveID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDLeaveBalancesKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/LeaveBalances', keyArgs] as const
}

export function useGetEmployeesEmployeeIDLeaveBalances<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeaveBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].LeaveBalances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDLeaveBalances<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeaveBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].LeaveBalances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDLeavePeriodsKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/LeavePeriods', keyArgs] as const
}

export function useGetEmployeesEmployeeIDLeavePeriods<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeavePeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].LeavePeriods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDLeavePeriods<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeavePeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].LeavePeriods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDLeaveSetupKey() {
  return ['Employees', '/Employees/:EmployeeID/LeaveSetup', 'POST'] as const
}

export function usePostEmployeesEmployeeIDLeaveSetup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDLeaveSetupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>
        },
      ) => parseResponse(client.Employees[':EmployeeID'].LeaveSetup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDLeaveTypesKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/LeaveTypes', keyArgs] as const
}

export function useGetEmployeesEmployeeIDLeaveTypes<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeaveTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].LeaveTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDLeaveTypes<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
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
        ? getGetEmployeesEmployeeIDLeaveTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].LeaveTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDLeaveTypesKey() {
  return ['Employees', '/Employees/:EmployeeID/LeaveTypes', 'POST'] as const
}

export function usePostEmployeesEmployeeIDLeaveTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDLeaveTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>
        },
      ) => parseResponse(client.Employees[':EmployeeID'].LeaveTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDPaymentMethodsKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/PaymentMethods', keyArgs] as const
}

export function useGetEmployeesEmployeeIDPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
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
        ? getGetEmployeesEmployeeIDPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].PaymentMethods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
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
        ? getGetEmployeesEmployeeIDPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].PaymentMethods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDPaymentMethodsKey() {
  return ['Employees', '/Employees/:EmployeeID/PaymentMethods', 'POST'] as const
}

export function usePostEmployeesEmployeeIDPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDPaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>
        },
      ) => parseResponse(client.Employees[':EmployeeID'].PaymentMethods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDPayTemplatesKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/PayTemplates', keyArgs] as const
}

export function useGetEmployeesEmployeeIDPayTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
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
        ? getGetEmployeesEmployeeIDPayTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].PayTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDPayTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
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
        ? getGetEmployeesEmployeeIDPayTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].PayTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDPayTemplatesEarningsKey() {
  return ['Employees', '/Employees/:EmployeeID/PayTemplates/Earnings', 'POST'] as const
}

export function usePostEmployeesEmployeeIDPayTemplatesEarnings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDPayTemplatesEarningsKey()
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
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].PayTemplates.Earnings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDKey() {
  return [
    'Employees',
    '/Employees/:EmployeeID/PayTemplates/Earnings/:PayTemplateEarningID',
    'PUT',
  ] as const
}

export function usePutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDKey()
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
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].PayTemplates.Earnings[':PayTemplateEarningID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDKey() {
  return [
    'Employees',
    '/Employees/:EmployeeID/PayTemplates/Earnings/:PayTemplateEarningID',
    'DELETE',
  ] as const
}

export function useDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDKey()
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
            (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].PayTemplates.Earnings[':PayTemplateEarningID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDPayTemplateEarningsKey() {
  return ['Employees', '/Employees/:EmployeeID/PayTemplateEarnings', 'POST'] as const
}

export function usePostEmployeesEmployeeIDPayTemplateEarnings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDPayTemplateEarningsKey()
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
            (typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].PayTemplateEarnings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeductionsKey(args: InferRequestType<typeof client.Deductions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Deductions', '/Deductions', keyArgs] as const
}

export function useGetDeductions<TError = unknown>(
  args: InferRequestType<typeof client.Deductions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeductionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Deductions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeductions<TError = unknown>(
  args: InferRequestType<typeof client.Deductions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeductionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Deductions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeductionsKey() {
  return ['Deductions', '/Deductions', 'POST'] as const
}

export function usePostDeductions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Deductions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Deductions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeductionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Deductions.$post> }) =>
        parseResponse(client.Deductions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeductionsDeductionIdKey(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Deductions', '/Deductions/:deductionId', keyArgs] as const
}

export function useGetDeductionsDeductionId<TError = unknown>(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
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
        ? getGetDeductionsDeductionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Deductions[':deductionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeductionsDeductionId<TError = unknown>(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
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
        ? getGetDeductionsDeductionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Deductions)[':deductionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Deductions[':deductionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatutoryDeductionsKey(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['StatutoryDeductions', '/StatutoryDeductions', keyArgs] as const
}

export function useGetStatutoryDeductions<TError = unknown>(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
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
        ? getGetStatutoryDeductionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StatutoryDeductions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatutoryDeductions<TError = unknown>(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
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
        ? getGetStatutoryDeductionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StatutoryDeductions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StatutoryDeductions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatutoryDeductionsIdKey(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['StatutoryDeductions', '/StatutoryDeductions/:id', keyArgs] as const
}

export function useGetStatutoryDeductionsId<TError = unknown>(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
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
        ? getGetStatutoryDeductionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StatutoryDeductions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatutoryDeductionsId<TError = unknown>(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
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
        ? getGetStatutoryDeductionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StatutoryDeductions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StatutoryDeductions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSuperannuationsKey(
  args: InferRequestType<typeof client.Superannuations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Superannuations', '/Superannuations', keyArgs] as const
}

export function useGetSuperannuations<TError = unknown>(
  args: InferRequestType<typeof client.Superannuations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
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
        ? getGetSuperannuationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Superannuations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuperannuations<TError = unknown>(
  args: InferRequestType<typeof client.Superannuations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
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
        ? getGetSuperannuationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Superannuations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuperannuationsKey() {
  return ['Superannuations', '/Superannuations', 'POST'] as const
}

export function usePostSuperannuations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Superannuations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.Superannuations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuperannuationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Superannuations.$post> }) =>
        parseResponse(client.Superannuations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuperannuationsSuperannuationIDKey(
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Superannuations', '/Superannuations/:SuperannuationID', keyArgs] as const
}

export function useGetSuperannuationsSuperannuationID<TError = unknown>(
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
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
        ? getGetSuperannuationsSuperannuationIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Superannuations[':SuperannuationID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuperannuationsSuperannuationID<TError = unknown>(
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
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
        ? getGetSuperannuationsSuperannuationIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Superannuations)[':SuperannuationID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Superannuations[':SuperannuationID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEarningsRatesKey(args: InferRequestType<typeof client.EarningsRates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['EarningsRates', '/EarningsRates', keyArgs] as const
}

export function useGetEarningsRates<TError = unknown>(
  args: InferRequestType<typeof client.EarningsRates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEarningsRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarningsRates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarningsRates<TError = unknown>(
  args: InferRequestType<typeof client.EarningsRates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEarningsRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarningsRates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEarningsRatesKey() {
  return ['EarningsRates', '/EarningsRates', 'POST'] as const
}

export function usePostEarningsRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EarningsRates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.EarningsRates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEarningsRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.EarningsRates.$post> }) =>
        parseResponse(client.EarningsRates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEarningsRatesEarningsRateIDKey(
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['EarningsRates', '/EarningsRates/:EarningsRateID', keyArgs] as const
}

export function useGetEarningsRatesEarningsRateID<TError = unknown>(
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
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
        ? getGetEarningsRatesEarningsRateIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarningsRates[':EarningsRateID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarningsRatesEarningsRateID<TError = unknown>(
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
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
        ? getGetEarningsRatesEarningsRateIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.EarningsRates[':EarningsRateID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaveTypesKey(args: InferRequestType<typeof client.LeaveTypes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['LeaveTypes', '/LeaveTypes', keyArgs] as const
}

export function useGetLeaveTypes<TError = unknown>(
  args: InferRequestType<typeof client.LeaveTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLeaveTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaveTypes<TError = unknown>(
  args: InferRequestType<typeof client.LeaveTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLeaveTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLeaveTypesKey() {
  return ['LeaveTypes', '/LeaveTypes', 'POST'] as const
}

export function usePostLeaveTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LeaveTypes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.LeaveTypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LeaveTypes.$post> }) =>
        parseResponse(client.LeaveTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLeaveTypesLeaveTypeIDKey(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['LeaveTypes', '/LeaveTypes/:LeaveTypeID', keyArgs] as const
}

export function useGetLeaveTypesLeaveTypeID<TError = unknown>(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
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
        ? getGetLeaveTypesLeaveTypeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveTypes[':LeaveTypeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaveTypesLeaveTypeID<TError = unknown>(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
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
        ? getGetLeaveTypesLeaveTypeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LeaveTypes[':LeaveTypeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReimbursementsKey(args: InferRequestType<typeof client.Reimbursements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Reimbursements', '/Reimbursements', keyArgs] as const
}

export function useGetReimbursements<TError = unknown>(
  args: InferRequestType<typeof client.Reimbursements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReimbursementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reimbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReimbursements<TError = unknown>(
  args: InferRequestType<typeof client.Reimbursements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReimbursementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reimbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReimbursementsKey() {
  return ['Reimbursements', '/Reimbursements', 'POST'] as const
}

export function usePostReimbursements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reimbursements.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.Reimbursements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReimbursementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Reimbursements.$post> }) =>
        parseResponse(client.Reimbursements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReimbursementsReimbursementIDKey(
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reimbursements', '/Reimbursements/:ReimbursementID', keyArgs] as const
}

export function useGetReimbursementsReimbursementID<TError = unknown>(
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
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
        ? getGetReimbursementsReimbursementIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Reimbursements[':ReimbursementID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReimbursementsReimbursementID<TError = unknown>(
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
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
        ? getGetReimbursementsReimbursementIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Reimbursements[':ReimbursementID'].$get(args, clientOptions)),
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

export function getDeleteTimesheetsTimesheetIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID', 'DELETE'] as const
}

export function useDeleteTimesheetsTimesheetID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTimesheetsTimesheetIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']> },
      ) => parseResponse(client.Timesheets[':TimesheetID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDLinesKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines', 'POST'] as const
}

export function usePostTimesheetsTimesheetIDLines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDLinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']> },
      ) => parseResponse(client.Timesheets[':TimesheetID'].Lines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDApproveKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Approve', 'POST'] as const
}

export function usePostTimesheetsTimesheetIDApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>
        },
      ) => parseResponse(client.Timesheets[':TimesheetID'].Approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDRevertToDraftKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/RevertToDraft', 'POST'] as const
}

export function usePostTimesheetsTimesheetIDRevertToDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDRevertToDraftKey()
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
            (typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']
          >
        },
      ) => parseResponse(client.Timesheets[':TimesheetID'].RevertToDraft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTimesheetsTimesheetIDLinesTimesheetLineIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'PUT'] as const
}

export function usePutTimesheetsTimesheetIDLinesTimesheetLineID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTimesheetsTimesheetIDLinesTimesheetLineIDKey()
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
            (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'DELETE'] as const
}

export function useDeleteTimesheetsTimesheetIDLinesTimesheetLineID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDKey()
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
            (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPayRunCalendarsKey(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRunCalendars', '/PayRunCalendars', keyArgs] as const
}

export function useGetPayRunCalendars<TError = unknown>(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
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
        ? getGetPayRunCalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PayRunCalendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayRunCalendars<TError = unknown>(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
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
        ? getGetPayRunCalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PayRunCalendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayRunCalendarsKey() {
  return ['PayRunCalendars', '/PayRunCalendars', 'POST'] as const
}

export function usePostPayRunCalendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PayRunCalendars.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PayRunCalendars.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayRunCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PayRunCalendars.$post> }) =>
        parseResponse(client.PayRunCalendars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayRunCalendarsPayrollCalendarIDKey(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PayRunCalendars', '/PayRunCalendars/:PayrollCalendarID', keyArgs] as const
}

export function useGetPayRunCalendarsPayrollCalendarID<TError = unknown>(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
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
        ? getGetPayRunCalendarsPayrollCalendarIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PayRunCalendars[':PayrollCalendarID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayRunCalendarsPayrollCalendarID<TError = unknown>(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
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
        ? getGetPayRunCalendarsPayrollCalendarIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PayRunCalendars[':PayrollCalendarID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDSalaryAndWagesKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages', keyArgs] as const
}

export function useGetEmployeesEmployeeIDSalaryAndWages<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
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
        ? getGetEmployeesEmployeeIDSalaryAndWagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].SalaryAndWages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDSalaryAndWages<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
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
        ? getGetEmployeesEmployeeIDSalaryAndWagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employees[':EmployeeID'].SalaryAndWages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDSalaryAndWagesKey() {
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages', 'POST'] as const
}

export function usePostEmployeesEmployeeIDSalaryAndWages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDSalaryAndWagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>
        },
      ) => parseResponse(client.Employees[':EmployeeID'].SalaryAndWages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', keyArgs] as const
}

export function useGetEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey(args)
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
                (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
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
          client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey(args)
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
                (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
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
          client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey() {
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', 'PUT'] as const
}

export function usePutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey()
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
            (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey() {
  return ['Employees', '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID', 'DELETE'] as const
}

export function useDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDKey()
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
            (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
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

export function getGetPaySlipsKey(args: InferRequestType<typeof client.PaySlips.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PaySlips', '/PaySlips', keyArgs] as const
}

export function useGetPaySlips<TError = unknown>(
  args: InferRequestType<typeof client.PaySlips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaySlipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.PaySlips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPaySlips<TError = unknown>(
  args: InferRequestType<typeof client.PaySlips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaySlipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaySlips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.PaySlips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPaySlipsPaySlipIDKey(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PaySlips', '/PaySlips/:PaySlipID', keyArgs] as const
}

export function useGetPaySlipsPaySlipID<TError = unknown>(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
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
        ? getGetPaySlipsPaySlipIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PaySlips[':PaySlipID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaySlipsPaySlipID<TError = unknown>(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
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
        ? getGetPaySlipsPaySlipIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PaySlips[':PaySlipID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaySlipsPaySlipIDKey() {
  return ['PaySlips', '/PaySlips/:PaySlipID', 'PUT'] as const
}

export function usePutPaySlipsPaySlipID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.PaySlips)[':PaySlipID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaySlipsPaySlipIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$put']> },
      ) => parseResponse(client.PaySlips[':PaySlipID'].$put(arg, clientOptions)),
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

export function getGetSettingsTrackingCategoriesKey(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Settings', '/Settings/TrackingCategories', keyArgs] as const
}

export function useGetSettingsTrackingCategories<TError = unknown>(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
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
        ? getGetSettingsTrackingCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Settings.TrackingCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsTrackingCategories<TError = unknown>(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
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
        ? getGetSettingsTrackingCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Settings.TrackingCategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Settings.TrackingCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDWorkingPatternsKey(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employees', '/Employees/:EmployeeID/Working-Patterns', keyArgs] as const
}

export function useGetEmployeesEmployeeIDWorkingPatterns<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
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
        ? getGetEmployeesEmployeeIDWorkingPatternsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employees[':EmployeeID']['Working-Patterns'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDWorkingPatterns<TError = unknown>(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
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
        ? getGetEmployeesEmployeeIDWorkingPatternsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employees[':EmployeeID']['Working-Patterns'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmployeesEmployeeIDWorkingPatternsKey() {
  return ['Employees', '/Employees/:EmployeeID/Working-Patterns', 'POST'] as const
}

export function usePostEmployeesEmployeeIDWorkingPatterns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployeesEmployeeIDWorkingPatternsKey()
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
            (typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID']['Working-Patterns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDKey(
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

export function useGetEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDKey(args)
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
                (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
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
          client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDKey(args)
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
                (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
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
          client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDKey() {
  return [
    'Employees',
    '/Employees/:EmployeeID/Working-Patterns/:EmployeeWorkingPatternID',
    'DELETE',
  ] as const
}

export function useDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDKey()
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
            (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
