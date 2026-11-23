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

export function getCompanyKey() {
  return ['company'] as const
}

export function getCompanyAttendancesQueryKey(
  args: InferRequestType<typeof client.company.attendances.$get>,
) {
  return ['company', '/company/attendances', args] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCompanyAttendancesQueryKey>
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
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.company.attendances.$post>,
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
      ReturnType<
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
      ReturnType<
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

export function getCompanyEmployeesQueryKey() {
  return ['company', '/company/employees'] as const
}

export function getCompanyEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesQueryKey>
  >({
    queryKey: getCompanyEmployeesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.company.employees.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
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
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCompanyEmployeesQueryKey>
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
    return { ...getCompanyEmployeesQueryOptions<TData, TError>(clientOptions), ...query }
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
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.company.employees.$post>,
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
  return ['company', '/company/employees/:employee_id', args] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompanyEmployeesEmployeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
) {
  return ['company', '/company/employees/:employee_id/profile-picture/:width', args] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompanyEmployeesEmployeeIdProfilePictureWidthQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompanyTimeOffTypesQueryKey(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
) {
  return ['company', '/company/time-off-types', args] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getCompanyTimeOffTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCompanyTimeOffsQueryKey(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
) {
  return ['company', '/company/time-offs', args] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCompanyTimeOffsQueryKey>
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
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-offs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.company)['time-offs']['$post']>,
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
  return ['company', '/company/time-offs/:id', args] as const
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ReturnType<
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
