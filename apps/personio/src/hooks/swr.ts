import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompanyKey() {
  return ['company'] as const
}

export function getGetCompanyEmployeesKey(
  args: InferRequestType<typeof client.company.employees.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees', keyArgs] as const
}

export function useGetCompanyEmployees<TError = unknown>(
  args: InferRequestType<typeof client.company.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
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
        ? getGetCompanyEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployees<TError = unknown>(
  args: InferRequestType<typeof client.company.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
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
        ? getGetCompanyEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanyEmployeesKey() {
  return ['company', '/company/employees', 'POST'] as const
}

export function usePostCompanyEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.company.employees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanyEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.company.employees.$post> }) =>
        parseResponse(client.company.employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyEmployeesEmployeeIdKey(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/:employee_id', keyArgs] as const
}

export function useGetCompanyEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
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
        ? getGetCompanyEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
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
        ? getGetCompanyEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCompanyEmployeesEmployeeIdKey() {
  return ['company', '/company/employees/:employee_id', 'PATCH'] as const
}

export function usePatchCompanyEmployeesEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompanyEmployeesEmployeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']> },
      ) => parseResponse(client.company.employees[':employee_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyEmployeesEmployeeIdAbsencesBalanceKey(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/:employee_id/absences/balance', keyArgs] as const
}

export function useGetCompanyEmployeesEmployeeIdAbsencesBalance<TError = unknown>(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
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
        ? getGetCompanyEmployeesEmployeeIdAbsencesBalanceKey(args)
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
                (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
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
          client.company.employees[':employee_id'].absences.balance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployeesEmployeeIdAbsencesBalance<TError = unknown>(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
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
        ? getGetCompanyEmployeesEmployeeIdAbsencesBalanceKey(args)
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
                (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
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
          client.company.employees[':employee_id'].absences.balance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyEmployeesCustomAttributesKey(
  args: InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/custom-attributes', keyArgs] as const
}

export function useGetCompanyEmployeesCustomAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
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
        ? getGetCompanyEmployeesCustomAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.company.employees['custom-attributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployeesCustomAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
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
        ? getGetCompanyEmployeesCustomAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.company.employees['custom-attributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyEmployeesAttributesKey(
  args: InferRequestType<typeof client.company.employees.attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/attributes', keyArgs] as const
}

export function useGetCompanyEmployeesAttributes<TError = unknown>(
  args: InferRequestType<typeof client.company.employees.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
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
        ? getGetCompanyEmployeesAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployeesAttributes<TError = unknown>(
  args: InferRequestType<typeof client.company.employees.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
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
        ? getGetCompanyEmployeesAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyEmployeesEmployeeIdProfilePictureWidthKey(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/:employee_id/profile-picture/:width', keyArgs] as const
}

export function useGetCompanyEmployeesEmployeeIdProfilePictureWidth<TError = unknown>(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
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
        ? getGetCompanyEmployeesEmployeeIdProfilePictureWidthKey(args)
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
                (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
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
          client.company.employees[':employee_id']['profile-picture'][':width'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployeesEmployeeIdProfilePictureWidth<TError = unknown>(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
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
        ? getGetCompanyEmployeesEmployeeIdProfilePictureWidthKey(args)
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
                (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
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
          client.company.employees[':employee_id']['profile-picture'][':width'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyAttendancesKey(
  args: InferRequestType<typeof client.company.attendances.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/attendances', keyArgs] as const
}

export function useGetCompanyAttendances<TError = unknown>(
  args: InferRequestType<typeof client.company.attendances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
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
        ? getGetCompanyAttendancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.attendances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyAttendances<TError = unknown>(
  args: InferRequestType<typeof client.company.attendances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
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
        ? getGetCompanyAttendancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.attendances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanyAttendancesKey() {
  return ['company', '/company/attendances', 'POST'] as const
}

export function usePostCompanyAttendances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.company.attendances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanyAttendancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.company.attendances.$post> }) =>
        parseResponse(client.company.attendances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCompanyAttendancesIdKey() {
  return ['company', '/company/attendances/:id', 'DELETE'] as const
}

export function useDeleteCompanyAttendancesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.attendances)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company.attendances)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompanyAttendancesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.company.attendances)[':id']['$delete']> },
      ) => parseResponse(client.company.attendances[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCompanyAttendancesIdKey() {
  return ['company', '/company/attendances/:id', 'PATCH'] as const
}

export function usePatchCompanyAttendancesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.attendances)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company.attendances)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompanyAttendancesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.company.attendances)[':id']['$patch']> },
      ) => parseResponse(client.company.attendances[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyAttendancesProjectsKey(
  args: InferRequestType<typeof client.company.attendances.projects.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/attendances/projects', keyArgs] as const
}

export function useGetCompanyAttendancesProjects<TError = unknown>(
  args: InferRequestType<typeof client.company.attendances.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
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
        ? getGetCompanyAttendancesProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.attendances.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyAttendancesProjects<TError = unknown>(
  args: InferRequestType<typeof client.company.attendances.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
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
        ? getGetCompanyAttendancesProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.attendances.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanyAttendancesProjectsKey() {
  return ['company', '/company/attendances/projects', 'POST'] as const
}

export function usePostCompanyAttendancesProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.company.attendances.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanyAttendancesProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.company.attendances.projects.$post> },
      ) => parseResponse(client.company.attendances.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCompanyAttendancesProjectsIdKey() {
  return ['company', '/company/attendances/projects/:id', 'DELETE'] as const
}

export function useDeleteCompanyAttendancesProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompanyAttendancesProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>
        },
      ) => parseResponse(client.company.attendances.projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCompanyAttendancesProjectsIdKey() {
  return ['company', '/company/attendances/projects/:id', 'PATCH'] as const
}

export function usePatchCompanyAttendancesProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompanyAttendancesProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']> },
      ) => parseResponse(client.company.attendances.projects[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyTimeOffTypesKey(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/time-off-types', keyArgs] as const
}

export function useGetCompanyTimeOffTypes<TError = unknown>(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
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
        ? getGetCompanyTimeOffTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['time-off-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyTimeOffTypes<TError = unknown>(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
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
        ? getGetCompanyTimeOffTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['time-off-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyTimeOffsKey(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/time-offs', keyArgs] as const
}

export function useGetCompanyTimeOffs<TError = unknown>(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
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
        ? getGetCompanyTimeOffsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['time-offs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyTimeOffs<TError = unknown>(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
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
        ? getGetCompanyTimeOffsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['time-offs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanyTimeOffsKey() {
  return ['company', '/company/time-offs', 'POST'] as const
}

export function usePostCompanyTimeOffs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company)['time-offs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanyTimeOffsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.company)['time-offs']['$post']> },
      ) => parseResponse(client.company['time-offs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyTimeOffsIdKey(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/time-offs/:id', keyArgs] as const
}

export function useGetCompanyTimeOffsId<TError = unknown>(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
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
        ? getGetCompanyTimeOffsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['time-offs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyTimeOffsId<TError = unknown>(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
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
        ? getGetCompanyTimeOffsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['time-offs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCompanyTimeOffsIdKey() {
  return ['company', '/company/time-offs/:id', 'DELETE'] as const
}

export function useDeleteCompanyTimeOffsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company)['time-offs'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompanyTimeOffsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.company)['time-offs'][':id']['$delete']> },
      ) => parseResponse(client.company['time-offs'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyAbsencePeriodsKey(
  args: InferRequestType<(typeof client.company)['absence-periods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/absence-periods', keyArgs] as const
}

export function useGetCompanyAbsencePeriods<TError = unknown>(
  args: InferRequestType<(typeof client.company)['absence-periods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
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
        ? getGetCompanyAbsencePeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['absence-periods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyAbsencePeriods<TError = unknown>(
  args: InferRequestType<(typeof client.company)['absence-periods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
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
        ? getGetCompanyAbsencePeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['absence-periods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanyAbsencePeriodsKey() {
  return ['company', '/company/absence-periods', 'POST'] as const
}

export function usePostCompanyAbsencePeriods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['absence-periods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company)['absence-periods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanyAbsencePeriodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.company)['absence-periods']['$post']> },
      ) => parseResponse(client.company['absence-periods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCompanyAbsencePeriodsIdKey() {
  return ['company', '/company/absence-periods/:id', 'DELETE'] as const
}

export function useDeleteCompanyAbsencePeriodsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['absence-periods'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.company)['absence-periods'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompanyAbsencePeriodsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.company)['absence-periods'][':id']['$delete']> },
      ) => parseResponse(client.company['absence-periods'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyDocumentCategoriesKey(
  args: InferRequestType<(typeof client.company)['document-categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/document-categories', keyArgs] as const
}

export function useGetCompanyDocumentCategories<TError = unknown>(
  args: InferRequestType<(typeof client.company)['document-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
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
        ? getGetCompanyDocumentCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['document-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyDocumentCategories<TError = unknown>(
  args: InferRequestType<(typeof client.company)['document-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
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
        ? getGetCompanyDocumentCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['document-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanyDocumentsKey() {
  return ['company', '/company/documents', 'POST'] as const
}

export function usePostCompanyDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.documents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.company.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanyDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.company.documents.$post> }) =>
        parseResponse(client.company.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyCustomReportsReportsKey(
  args: InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/custom-reports/reports', keyArgs] as const
}

export function useGetCompanyCustomReportsReports<TError = unknown>(
  args: InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
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
        ? getGetCompanyCustomReportsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['custom-reports'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyCustomReportsReports<TError = unknown>(
  args: InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
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
        ? getGetCompanyCustomReportsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['custom-reports'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyCustomReportsReportsReportIdKey(
  args: InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/custom-reports/reports/:report_id', keyArgs] as const
}

export function useGetCompanyCustomReportsReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
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
        ? getGetCompanyCustomReportsReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.company['custom-reports'].reports[':report_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyCustomReportsReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
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
        ? getGetCompanyCustomReportsReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.company['custom-reports'].reports[':report_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompanyCustomReportsColumnsKey(
  args: InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/custom-reports/columns', keyArgs] as const
}

export function useGetCompanyCustomReportsColumns<TError = unknown>(
  args: InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
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
        ? getGetCompanyCustomReportsColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['custom-reports'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyCustomReportsColumns<TError = unknown>(
  args: InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
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
        ? getGetCompanyCustomReportsColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company['custom-reports'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
