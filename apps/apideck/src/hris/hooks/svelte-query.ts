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

export function getHrisKey() {
  return ['hris'] as const
}

export function getHrisCompaniesQueryKey(
  args: InferRequestType<typeof client.hris.companies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/companies', keyArgs] as const
}

export function getHrisCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hris.companies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisCompaniesQueryKey>
  >({
    queryKey: getHrisCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.companies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHrisCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hris.companies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHrisCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisCompaniesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHrisCompaniesMutationKey() {
  return ['hris', '/hris/companies', 'POST'] as const
}

export function getPostHrisCompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hris.companies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHrisCompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hris.companies.$post>) {
      return parseResponse(client.hris.companies.$post(args, options))
    },
  })
}

export function createPostHrisCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.hris.companies.$post>,
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
    const mutationDefaults = getPostHrisCompaniesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisCompaniesIdQueryKey(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/companies/:id', keyArgs] as const
}

export function getHrisCompaniesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisCompaniesIdQueryKey>
  >({
    queryKey: getHrisCompaniesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.companies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHrisCompaniesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisCompaniesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisCompaniesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteHrisCompaniesIdMutationKey() {
  return ['hris', '/hris/companies/:id', 'DELETE'] as const
}

export function getDeleteHrisCompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hris.companies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHrisCompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris.companies)[':id']['$delete']>) {
      return parseResponse(client.hris.companies[':id'].$delete(args, options))
    },
  })
}

export function createDeleteHrisCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.companies)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris.companies)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteHrisCompaniesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchHrisCompaniesIdMutationKey() {
  return ['hris', '/hris/companies/:id', 'PATCH'] as const
}

export function getPatchHrisCompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hris.companies)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchHrisCompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris.companies)[':id']['$patch']>) {
      return parseResponse(client.hris.companies[':id'].$patch(args, options))
    },
  })
}

export function createPatchHrisCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.companies)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris.companies)[':id']['$patch']>,
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
    const mutationDefaults = getPatchHrisCompaniesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisDepartmentsQueryKey(
  args: InferRequestType<typeof client.hris.departments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/departments', keyArgs] as const
}

export function getHrisDepartmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hris.departments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisDepartmentsQueryKey>
  >({
    queryKey: getHrisDepartmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.departments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHrisDepartments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hris.departments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHrisDepartmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisDepartmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHrisDepartmentsMutationKey() {
  return ['hris', '/hris/departments', 'POST'] as const
}

export function getPostHrisDepartmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hris.departments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHrisDepartmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hris.departments.$post>) {
      return parseResponse(client.hris.departments.$post(args, options))
    },
  })
}

export function createPostHrisDepartments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hris.departments.$post>,
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
    const mutationDefaults = getPostHrisDepartmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisDepartmentsIdQueryKey(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/departments/:id', keyArgs] as const
}

export function getHrisDepartmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisDepartmentsIdQueryKey>
  >({
    queryKey: getHrisDepartmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.departments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisDepartmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisDepartmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisDepartmentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteHrisDepartmentsIdMutationKey() {
  return ['hris', '/hris/departments/:id', 'DELETE'] as const
}

export function getDeleteHrisDepartmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris.departments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hris.departments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHrisDepartmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris.departments)[':id']['$delete']>) {
      return parseResponse(client.hris.departments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteHrisDepartmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.departments)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris.departments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteHrisDepartmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchHrisDepartmentsIdMutationKey() {
  return ['hris', '/hris/departments/:id', 'PATCH'] as const
}

export function getPatchHrisDepartmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hris.departments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchHrisDepartmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris.departments)[':id']['$patch']>) {
      return parseResponse(client.hris.departments[':id'].$patch(args, options))
    },
  })
}

export function createPatchHrisDepartmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.departments)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris.departments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchHrisDepartmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisEmployeesQueryKey(
  args: InferRequestType<typeof client.hris.employees.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/employees', keyArgs] as const
}

export function getHrisEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hris.employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisEmployeesQueryKey>
  >({
    queryKey: getHrisEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHrisEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hris.employees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHrisEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisEmployeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHrisEmployeesMutationKey() {
  return ['hris', '/hris/employees', 'POST'] as const
}

export function getPostHrisEmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hris.employees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHrisEmployeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hris.employees.$post>) {
      return parseResponse(client.hris.employees.$post(args, options))
    },
  })
}

export function createPostHrisEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.hris.employees.$post>,
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
    const mutationDefaults = getPostHrisEmployeesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisEmployeesIdQueryKey(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/employees/:id', keyArgs] as const
}

export function getHrisEmployeesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisEmployeesIdQueryKey>
  >({
    queryKey: getHrisEmployeesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.employees[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHrisEmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisEmployeesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisEmployeesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteHrisEmployeesIdMutationKey() {
  return ['hris', '/hris/employees/:id', 'DELETE'] as const
}

export function getDeleteHrisEmployeesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hris.employees)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHrisEmployeesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris.employees)[':id']['$delete']>) {
      return parseResponse(client.hris.employees[':id'].$delete(args, options))
    },
  })
}

export function createDeleteHrisEmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.employees)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris.employees)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteHrisEmployeesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchHrisEmployeesIdMutationKey() {
  return ['hris', '/hris/employees/:id', 'PATCH'] as const
}

export function getPatchHrisEmployeesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hris.employees)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchHrisEmployeesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris.employees)[':id']['$patch']>) {
      return parseResponse(client.hris.employees[':id'].$patch(args, options))
    },
  })
}

export function createPatchHrisEmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.employees)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris.employees)[':id']['$patch']>,
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
    const mutationDefaults = getPatchHrisEmployeesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisJobsEmployeesEmployeeIdQueryKey(
  args: InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/jobs/employees/:employee_id', keyArgs] as const
}

export function getHrisJobsEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisJobsEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getHrisJobsEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.jobs.employees[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisJobsEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisJobsEmployeesEmployeeIdQueryKey>
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
      ...getHrisJobsEmployeesEmployeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey(
  args: InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/jobs/employees/:employee_id/jobs/:job_id', keyArgs] as const
}

export function getHrisJobsEmployeesEmployeeIdJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey>
  >({
    queryKey: getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.jobs.employees[':employee_id'].jobs[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisJobsEmployeesEmployeeIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey>
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
      ...getHrisJobsEmployeesEmployeeIdJobsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHrisPayrollsQueryKey(args: InferRequestType<typeof client.hris.payrolls.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls', keyArgs] as const
}

export function getHrisPayrollsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hris.payrolls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsQueryKey>
  >({
    queryKey: getHrisPayrollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.payrolls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHrisPayrolls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hris.payrolls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHrisPayrollsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisPayrollsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHrisPayrollsEmployeesEmployeeIdQueryKey(
  args: InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls/employees/:employee_id', keyArgs] as const
}

export function getHrisPayrollsEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getHrisPayrollsEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.payrolls.employees[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisPayrollsEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdQueryKey>
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
      ...getHrisPayrollsEmployeesEmployeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey(
  args: InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls/employees/:employee_id/payrolls/:payroll_id', keyArgs] as const
}

export function getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey>
  >({
    queryKey: getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.payrolls.employees[':employee_id'].payrolls[':payroll_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisPayrollsEmployeesEmployeeIdPayrollsPayrollId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey>
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
      ...getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getHrisPayrollsPayrollIdQueryKey(
  args: InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/payrolls/:payroll_id', keyArgs] as const
}

export function getHrisPayrollsPayrollIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsPayrollIdQueryKey>
  >({
    queryKey: getHrisPayrollsPayrollIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.payrolls[':payroll_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisPayrollsPayrollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisPayrollsPayrollIdQueryKey>
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
      ...getHrisPayrollsPayrollIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHrisSchedulesEmployeesEmployeeIdQueryKey(
  args: InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/schedules/employees/:employee_id', keyArgs] as const
}

export function getHrisSchedulesEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisSchedulesEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getHrisSchedulesEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris.schedules.employees[':employee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisSchedulesEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisSchedulesEmployeesEmployeeIdQueryKey>
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
      ...getHrisSchedulesEmployeesEmployeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHrisTimeOffRequestsQueryKey(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/time-off-requests', keyArgs] as const
}

export function getHrisTimeOffRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisTimeOffRequestsQueryKey>
  >({
    queryKey: getHrisTimeOffRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris['time-off-requests'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisTimeOffRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisTimeOffRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHrisTimeOffRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHrisTimeOffRequestsMutationKey() {
  return ['hris', '/hris/time-off-requests', 'POST'] as const
}

export function getPostHrisTimeOffRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hris)['time-off-requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHrisTimeOffRequestsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hris)['time-off-requests']['$post']>) {
      return parseResponse(client.hris['time-off-requests'].$post(args, options))
    },
  })
}

export function createPostHrisTimeOffRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris)['time-off-requests']['$post']>,
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
    const mutationDefaults = getPostHrisTimeOffRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHrisTimeOffRequestsIdQueryKey(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hris', '/hris/time-off-requests/:id', keyArgs] as const
}

export function getHrisTimeOffRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisTimeOffRequestsIdQueryKey>
  >({
    queryKey: getHrisTimeOffRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hris['time-off-requests'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHrisTimeOffRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHrisTimeOffRequestsIdQueryKey>
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
      ...getHrisTimeOffRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteHrisTimeOffRequestsIdMutationKey() {
  return ['hris', '/hris/time-off-requests/:id', 'DELETE'] as const
}

export function getDeleteHrisTimeOffRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHrisTimeOffRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.hris['time-off-requests'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteHrisTimeOffRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteHrisTimeOffRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchHrisTimeOffRequestsIdMutationKey() {
  return ['hris', '/hris/time-off-requests/:id', 'PATCH'] as const
}

export function getPatchHrisTimeOffRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchHrisTimeOffRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$patch']>,
    ) {
      return parseResponse(client.hris['time-off-requests'][':id'].$patch(args, options))
    },
  })
}

export function createPatchHrisTimeOffRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$patch']>,
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
    const mutationDefaults = getPatchHrisTimeOffRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
