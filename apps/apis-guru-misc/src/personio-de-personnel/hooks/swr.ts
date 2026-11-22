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

export function getGetCompanyAttendancesKey(
  args: InferRequestType<typeof client.company.attendances.$get>,
) {
  return ['company', '/company/attendances', args] as const
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

export function getGetCompanyEmployeesKey() {
  return ['company', '/company/employees'] as const
}

export function useGetCompanyEmployees<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompanyEmployeesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanyEmployees<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompanyEmployeesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.employees.$get(undefined, clientOptions)),
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
  return ['company', '/company/employees/:employee_id', args] as const
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

export function getGetCompanyEmployeesEmployeeIdProfilePictureWidthKey(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
) {
  return ['company', '/company/employees/:employee_id/profile-picture/:width', args] as const
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

export function getGetCompanyTimeOffTypesKey(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
) {
  return ['company', '/company/time-off-types', args] as const
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
  return ['company', '/company/time-offs', args] as const
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
  return ['company', '/company/time-offs/:id', args] as const
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
