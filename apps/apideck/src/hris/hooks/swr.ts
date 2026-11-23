import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHrisKey() {
  return ['hris'] as const
}

export function getGetHrisCompaniesKey(args: InferRequestType<typeof client.hris.companies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/companies', keyArgs] as const
}

export function useGetHrisCompanies<TError = unknown>(
  args: InferRequestType<typeof client.hris.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHrisCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisCompanies<TError = unknown>(
  args: InferRequestType<typeof client.hris.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHrisCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHrisCompaniesKey() {
  return ['hris', '/hris/companies', 'POST'] as const
}

export function usePostHrisCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hris.companies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHrisCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hris.companies.$post> }) =>
        parseResponse(client.hris.companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisCompaniesIdKey(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/companies/:id', keyArgs] as const
}

export function useGetHrisCompaniesId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
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
        ? getGetHrisCompaniesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.companies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisCompaniesId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
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
        ? getGetHrisCompaniesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.companies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteHrisCompaniesIdKey() {
  return ['hris', '/hris/companies/:id', 'DELETE'] as const
}

export function useDeleteHrisCompaniesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris.companies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHrisCompaniesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris.companies)[':id']['$delete']> },
      ) => parseResponse(client.hris.companies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchHrisCompaniesIdKey() {
  return ['hris', '/hris/companies/:id', 'PATCH'] as const
}

export function usePatchHrisCompaniesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris.companies)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchHrisCompaniesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris.companies)[':id']['$patch']> },
      ) => parseResponse(client.hris.companies[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisDepartmentsKey(
  args: InferRequestType<typeof client.hris.departments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/departments', keyArgs] as const
}

export function useGetHrisDepartments<TError = unknown>(
  args: InferRequestType<typeof client.hris.departments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
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
        ? getGetHrisDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.departments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisDepartments<TError = unknown>(
  args: InferRequestType<typeof client.hris.departments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
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
        ? getGetHrisDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.departments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHrisDepartmentsKey() {
  return ['hris', '/hris/departments', 'POST'] as const
}

export function usePostHrisDepartments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hris.departments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHrisDepartmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hris.departments.$post> }) =>
        parseResponse(client.hris.departments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisDepartmentsIdKey(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/departments/:id', keyArgs] as const
}

export function useGetHrisDepartmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
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
        ? getGetHrisDepartmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.departments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisDepartmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
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
        ? getGetHrisDepartmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.departments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteHrisDepartmentsIdKey() {
  return ['hris', '/hris/departments/:id', 'DELETE'] as const
}

export function useDeleteHrisDepartmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris.departments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris.departments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHrisDepartmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris.departments)[':id']['$delete']> },
      ) => parseResponse(client.hris.departments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchHrisDepartmentsIdKey() {
  return ['hris', '/hris/departments/:id', 'PATCH'] as const
}

export function usePatchHrisDepartmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris.departments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchHrisDepartmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris.departments)[':id']['$patch']> },
      ) => parseResponse(client.hris.departments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisEmployeesKey(args: InferRequestType<typeof client.hris.employees.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/employees', keyArgs] as const
}

export function useGetHrisEmployees<TError = unknown>(
  args: InferRequestType<typeof client.hris.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHrisEmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisEmployees<TError = unknown>(
  args: InferRequestType<typeof client.hris.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHrisEmployeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHrisEmployeesKey() {
  return ['hris', '/hris/employees', 'POST'] as const
}

export function usePostHrisEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hris.employees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHrisEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hris.employees.$post> }) =>
        parseResponse(client.hris.employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisEmployeesIdKey(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/employees/:id', keyArgs] as const
}

export function useGetHrisEmployeesId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
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
        ? getGetHrisEmployeesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.employees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisEmployeesId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
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
        ? getGetHrisEmployeesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.employees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteHrisEmployeesIdKey() {
  return ['hris', '/hris/employees/:id', 'DELETE'] as const
}

export function useDeleteHrisEmployeesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris.employees)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHrisEmployeesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris.employees)[':id']['$delete']> },
      ) => parseResponse(client.hris.employees[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchHrisEmployeesIdKey() {
  return ['hris', '/hris/employees/:id', 'PATCH'] as const
}

export function usePatchHrisEmployeesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris.employees)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchHrisEmployeesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris.employees)[':id']['$patch']> },
      ) => parseResponse(client.hris.employees[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisJobsEmployeesEmployeeIdKey(
  args: InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/jobs/employees/:employee_id', keyArgs] as const
}

export function useGetHrisJobsEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
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
        ? getGetHrisJobsEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hris.jobs.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisJobsEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
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
        ? getGetHrisJobsEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hris.jobs.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHrisJobsEmployeesEmployeeIdJobsJobIdKey(
  args: InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/jobs/employees/:employee_id/jobs/:job_id', keyArgs] as const
}

export function useGetHrisJobsEmployeesEmployeeIdJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
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
        ? getGetHrisJobsEmployeesEmployeeIdJobsJobIdKey(args)
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
                (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
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
          client.hris.jobs.employees[':employee_id'].jobs[':job_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisJobsEmployeesEmployeeIdJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
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
        ? getGetHrisJobsEmployeesEmployeeIdJobsJobIdKey(args)
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
                (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
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
          client.hris.jobs.employees[':employee_id'].jobs[':job_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHrisPayrollsKey(args: InferRequestType<typeof client.hris.payrolls.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls', keyArgs] as const
}

export function useGetHrisPayrolls<TError = unknown>(
  args: InferRequestType<typeof client.hris.payrolls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHrisPayrollsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.payrolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisPayrolls<TError = unknown>(
  args: InferRequestType<typeof client.hris.payrolls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHrisPayrollsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.payrolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHrisPayrollsEmployeesEmployeeIdKey(
  args: InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls/employees/:employee_id', keyArgs] as const
}

export function useGetHrisPayrollsEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
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
        ? getGetHrisPayrollsEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hris.payrolls.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisPayrollsEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
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
        ? getGetHrisPayrollsEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hris.payrolls.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdKey(
  args: InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls/employees/:employee_id/payrolls/:payroll_id', keyArgs] as const
}

export function useGetHrisPayrollsEmployeesEmployeeIdPayrollsPayrollId<TError = unknown>(
  args: InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
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
        ? getGetHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdKey(args)
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
                (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
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
          client.hris.payrolls.employees[':employee_id'].payrolls[':payroll_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisPayrollsEmployeesEmployeeIdPayrollsPayrollId<TError = unknown>(
  args: InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
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
        ? getGetHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdKey(args)
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
                (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
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
          client.hris.payrolls.employees[':employee_id'].payrolls[':payroll_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHrisPayrollsPayrollIdKey(
  args: InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls/:payroll_id', keyArgs] as const
}

export function useGetHrisPayrollsPayrollId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
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
        ? getGetHrisPayrollsPayrollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.payrolls[':payroll_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisPayrollsPayrollId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
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
        ? getGetHrisPayrollsPayrollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris.payrolls[':payroll_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHrisSchedulesEmployeesEmployeeIdKey(
  args: InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/schedules/employees/:employee_id', keyArgs] as const
}

export function useGetHrisSchedulesEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
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
        ? getGetHrisSchedulesEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hris.schedules.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisSchedulesEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
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
        ? getGetHrisSchedulesEmployeesEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hris.schedules.employees[':employee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHrisTimeOffRequestsKey(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/time-off-requests', keyArgs] as const
}

export function useGetHrisTimeOffRequests<TError = unknown>(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
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
        ? getGetHrisTimeOffRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris['time-off-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisTimeOffRequests<TError = unknown>(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
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
        ? getGetHrisTimeOffRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris['time-off-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHrisTimeOffRequestsKey() {
  return ['hris', '/hris/time-off-requests', 'POST'] as const
}

export function usePostHrisTimeOffRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris)['time-off-requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHrisTimeOffRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hris)['time-off-requests']['$post']> },
      ) => parseResponse(client.hris['time-off-requests'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHrisTimeOffRequestsIdKey(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/time-off-requests/:id', keyArgs] as const
}

export function useGetHrisTimeOffRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
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
        ? getGetHrisTimeOffRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris['time-off-requests'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHrisTimeOffRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
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
        ? getGetHrisTimeOffRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hris['time-off-requests'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteHrisTimeOffRequestsIdKey() {
  return ['hris', '/hris/time-off-requests/:id', 'DELETE'] as const
}

export function useDeleteHrisTimeOffRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHrisTimeOffRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$delete']> },
      ) => parseResponse(client.hris['time-off-requests'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchHrisTimeOffRequestsIdKey() {
  return ['hris', '/hris/time-off-requests/:id', 'PATCH'] as const
}

export function usePatchHrisTimeOffRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchHrisTimeOffRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$patch']> },
      ) => parseResponse(client.hris['time-off-requests'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
