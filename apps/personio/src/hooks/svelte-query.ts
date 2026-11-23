import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompanyKey() {
  return ['company'] as const
}

export function getCompanyEmployeesQueryKey(
  args: InferRequestType<typeof client.company.employees.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees', keyArgs] as const
}

export function getCompanyEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.company.employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesQueryKey>
  >({
    queryKey: getCompanyEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompanyEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.company.employees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanyEmployeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCompanyEmployeesMutationKey() {
  return ['company', '/company/employees', 'POST'] as const
}

export function getPostCompanyEmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.company.employees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanyEmployeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.company.employees.$post>) {
      return parseResponse(client.company.employees.$post(args, options))
    },
  })
}

export function createPostCompanyEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.company.employees.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanyEmployeesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompanyEmployeesEmployeeIdQueryKey(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/:employee_id', keyArgs] as const
}

export function getCompanyEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getCompanyEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyEmployeesEmployeeIdQueryKey>
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
      ...getCompanyEmployeesEmployeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchCompanyEmployeesEmployeeIdMutationKey() {
  return ['company', '/company/employees/:employee_id', 'PATCH'] as const
}

export function getPatchCompanyEmployeesEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompanyEmployeesEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']>,
    ) {
      return parseResponse(client.company.employees[':employee_id'].$patch(args, options))
    },
  })
}

export function createPatchCompanyEmployeesEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCompanyEmployeesEmployeeIdMutationOptions<
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

export function getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/:employee_id/absences/balance', keyArgs] as const
}

export function getCompanyEmployeesEmployeeIdAbsencesBalanceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey>
  >({
    queryKey: getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees[':employee_id'].absences.balance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyEmployeesEmployeeIdAbsencesBalance<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey>
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
      ...getCompanyEmployeesEmployeeIdAbsencesBalanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompanyEmployeesCustomAttributesQueryKey(
  args: InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/custom-attributes', keyArgs] as const
}

export function getCompanyEmployeesCustomAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesCustomAttributesQueryKey>
  >({
    queryKey: getCompanyEmployeesCustomAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees['custom-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyEmployeesCustomAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyEmployeesCustomAttributesQueryKey>
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
      ...getCompanyEmployeesCustomAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompanyEmployeesAttributesQueryKey(
  args: InferRequestType<typeof client.company.employees.attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/attributes', keyArgs] as const
}

export function getCompanyEmployeesAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.company.employees.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesAttributesQueryKey>
  >({
    queryKey: getCompanyEmployeesAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees.attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyEmployeesAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.company.employees.attributes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.company.employees.attributes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyEmployeesAttributesQueryKey>
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
      ...getCompanyEmployeesAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/employees/:employee_id/profile-picture/:width', keyArgs] as const
}

export function getCompanyEmployeesEmployeeIdProfilePictureWidthQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey>
  >({
    queryKey: getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees[':employee_id']['profile-picture'][':width'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyEmployeesEmployeeIdProfilePictureWidth<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey>
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
      ...getCompanyEmployeesEmployeeIdProfilePictureWidthQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompanyAttendancesQueryKey(
  args: InferRequestType<typeof client.company.attendances.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/attendances', keyArgs] as const
}

export function getCompanyAttendancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.company.attendances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyAttendancesQueryKey>
  >({
    queryKey: getCompanyAttendancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.attendances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompanyAttendances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.company.attendances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyAttendancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanyAttendancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCompanyAttendancesMutationKey() {
  return ['company', '/company/attendances', 'POST'] as const
}

export function getPostCompanyAttendancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.company.attendances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanyAttendancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.company.attendances.$post>) {
      return parseResponse(client.company.attendances.$post(args, options))
    },
  })
}

export function createPostCompanyAttendances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.company.attendances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanyAttendancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCompanyAttendancesIdMutationKey() {
  return ['company', '/company/attendances/:id', 'DELETE'] as const
}

export function getDeleteCompanyAttendancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.attendances)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company.attendances)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompanyAttendancesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.company.attendances)[':id']['$delete']>,
    ) {
      return parseResponse(client.company.attendances[':id'].$delete(args, options))
    },
  })
}

export function createDeleteCompanyAttendancesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company.attendances)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company.attendances)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCompanyAttendancesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchCompanyAttendancesIdMutationKey() {
  return ['company', '/company/attendances/:id', 'PATCH'] as const
}

export function getPatchCompanyAttendancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.attendances)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company.attendances)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompanyAttendancesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.company.attendances)[':id']['$patch']>) {
      return parseResponse(client.company.attendances[':id'].$patch(args, options))
    },
  })
}

export function createPatchCompanyAttendancesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company.attendances)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company.attendances)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCompanyAttendancesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompanyAttendancesProjectsQueryKey(
  args: InferRequestType<typeof client.company.attendances.projects.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/attendances/projects', keyArgs] as const
}

export function getCompanyAttendancesProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.company.attendances.projects.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyAttendancesProjectsQueryKey>
  >({
    queryKey: getCompanyAttendancesProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.attendances.projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyAttendancesProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.company.attendances.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.company.attendances.projects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyAttendancesProjectsQueryKey>
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
      ...getCompanyAttendancesProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCompanyAttendancesProjectsMutationKey() {
  return ['company', '/company/attendances/projects', 'POST'] as const
}

export function getPostCompanyAttendancesProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.company.attendances.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanyAttendancesProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.company.attendances.projects.$post>) {
      return parseResponse(client.company.attendances.projects.$post(args, options))
    },
  })
}

export function createPostCompanyAttendancesProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.company.attendances.projects.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.company.attendances.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanyAttendancesProjectsMutationOptions<
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

export function getDeleteCompanyAttendancesProjectsIdMutationKey() {
  return ['company', '/company/attendances/projects/:id', 'DELETE'] as const
}

export function getDeleteCompanyAttendancesProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompanyAttendancesProjectsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>,
    ) {
      return parseResponse(client.company.attendances.projects[':id'].$delete(args, options))
    },
  })
}

export function createDeleteCompanyAttendancesProjectsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCompanyAttendancesProjectsIdMutationOptions<
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

export function getPatchCompanyAttendancesProjectsIdMutationKey() {
  return ['company', '/company/attendances/projects/:id', 'PATCH'] as const
}

export function getPatchCompanyAttendancesProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompanyAttendancesProjectsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']>,
    ) {
      return parseResponse(client.company.attendances.projects[':id'].$patch(args, options))
    },
  })
}

export function createPatchCompanyAttendancesProjectsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCompanyAttendancesProjectsIdMutationOptions<
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

export function getCompanyTimeOffTypesQueryKey(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/time-off-types', keyArgs] as const
}

export function getCompanyTimeOffTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyTimeOffTypesQueryKey>
  >({
    queryKey: getCompanyTimeOffTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['time-off-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyTimeOffTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['time-off-types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyTimeOffTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanyTimeOffTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCompanyTimeOffsQueryKey(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/time-offs', keyArgs] as const
}

export function getCompanyTimeOffsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyTimeOffsQueryKey>
  >({
    queryKey: getCompanyTimeOffsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['time-offs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompanyTimeOffs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['time-offs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyTimeOffsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanyTimeOffsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCompanyTimeOffsMutationKey() {
  return ['company', '/company/time-offs', 'POST'] as const
}

export function getPostCompanyTimeOffsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.company)['time-offs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanyTimeOffsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.company)['time-offs']['$post']>) {
      return parseResponse(client.company['time-offs'].$post(args, options))
    },
  })
}

export function createPostCompanyTimeOffs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.company)['time-offs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanyTimeOffsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompanyTimeOffsIdQueryKey(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/time-offs/:id', keyArgs] as const
}

export function getCompanyTimeOffsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyTimeOffsIdQueryKey>
  >({
    queryKey: getCompanyTimeOffsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['time-offs'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyTimeOffsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyTimeOffsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanyTimeOffsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCompanyTimeOffsIdMutationKey() {
  return ['company', '/company/time-offs/:id', 'DELETE'] as const
}

export function getDeleteCompanyTimeOffsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company)['time-offs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompanyTimeOffsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.company)['time-offs'][':id']['$delete']>,
    ) {
      return parseResponse(client.company['time-offs'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteCompanyTimeOffsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company)['time-offs'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCompanyTimeOffsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompanyAbsencePeriodsQueryKey(
  args: InferRequestType<(typeof client.company)['absence-periods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/absence-periods', keyArgs] as const
}

export function getCompanyAbsencePeriodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['absence-periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyAbsencePeriodsQueryKey>
  >({
    queryKey: getCompanyAbsencePeriodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['absence-periods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyAbsencePeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['absence-periods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyAbsencePeriodsQueryKey>
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
      ...getCompanyAbsencePeriodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCompanyAbsencePeriodsMutationKey() {
  return ['company', '/company/absence-periods', 'POST'] as const
}

export function getPostCompanyAbsencePeriodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['absence-periods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company)['absence-periods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanyAbsencePeriodsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.company)['absence-periods']['$post']>) {
      return parseResponse(client.company['absence-periods'].$post(args, options))
    },
  })
}

export function createPostCompanyAbsencePeriods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['absence-periods']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company)['absence-periods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanyAbsencePeriodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCompanyAbsencePeriodsIdMutationKey() {
  return ['company', '/company/absence-periods/:id', 'DELETE'] as const
}

export function getDeleteCompanyAbsencePeriodsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['absence-periods'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.company)['absence-periods'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompanyAbsencePeriodsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.company)['absence-periods'][':id']['$delete']>,
    ) {
      return parseResponse(client.company['absence-periods'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteCompanyAbsencePeriodsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['absence-periods'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.company)['absence-periods'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCompanyAbsencePeriodsIdMutationOptions<
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

export function getCompanyDocumentCategoriesQueryKey(
  args: InferRequestType<(typeof client.company)['document-categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/document-categories', keyArgs] as const
}

export function getCompanyDocumentCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['document-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyDocumentCategoriesQueryKey>
  >({
    queryKey: getCompanyDocumentCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['document-categories'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyDocumentCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['document-categories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyDocumentCategoriesQueryKey>
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
      ...getCompanyDocumentCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCompanyDocumentsMutationKey() {
  return ['company', '/company/documents', 'POST'] as const
}

export function getPostCompanyDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.company.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanyDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.company.documents.$post>) {
      return parseResponse(client.company.documents.$post(args, options))
    },
  })
}

export function createPostCompanyDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.company.documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.company.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanyDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompanyCustomReportsReportsQueryKey(
  args: InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/custom-reports/reports', keyArgs] as const
}

export function getCompanyCustomReportsReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyCustomReportsReportsQueryKey>
  >({
    queryKey: getCompanyCustomReportsReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['custom-reports'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyCustomReportsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyCustomReportsReportsQueryKey>
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
      ...getCompanyCustomReportsReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompanyCustomReportsReportsReportIdQueryKey(
  args: InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/custom-reports/reports/:report_id', keyArgs] as const
}

export function getCompanyCustomReportsReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyCustomReportsReportsReportIdQueryKey>
  >({
    queryKey: getCompanyCustomReportsReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['custom-reports'].reports[':report_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyCustomReportsReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyCustomReportsReportsReportIdQueryKey>
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
      ...getCompanyCustomReportsReportsReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompanyCustomReportsColumnsQueryKey(
  args: InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['company', '/company/custom-reports/columns', keyArgs] as const
}

export function getCompanyCustomReportsColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyCustomReportsColumnsQueryKey>
  >({
    queryKey: getCompanyCustomReportsColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company['custom-reports'].columns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompanyCustomReportsColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompanyCustomReportsColumnsQueryKey>
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
      ...getCompanyCustomReportsColumnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
