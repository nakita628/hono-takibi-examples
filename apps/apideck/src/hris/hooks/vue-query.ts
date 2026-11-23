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

export function getHrisKey() {
  return ['hris'] as const
}

export function getHrisCompaniesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.companies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/companies', keyArgs] as const
}

export function getHrisCompaniesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.companies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.companies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
          >,
          ReturnType<typeof getHrisCompaniesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHrisCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hris.companies.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hris.companies.$post>,
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
  const mutationDefaults = getPostHrisCompaniesMutationOptions<TError, TOnMutateResult>(
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

export function getHrisCompaniesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.companies)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/companies/:id', keyArgs] as const
}

export function getHrisCompaniesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.companies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisCompaniesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.companies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisCompaniesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.companies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisCompaniesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.companies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisCompaniesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisCompaniesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.companies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteHrisCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHrisCompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchHrisCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchHrisCompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getHrisDepartmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.departments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/departments', keyArgs] as const
}

export function getHrisDepartmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.departments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisDepartmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.departments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisDepartments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.departments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>
            >
          >,
          ReturnType<typeof getHrisDepartmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisDepartmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisDepartmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.departments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHrisDepartments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hris.departments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hris.departments.$post>,
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
  const mutationDefaults = getPostHrisDepartmentsMutationOptions<TError, TOnMutateResult>(
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

export function getHrisDepartmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.departments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/departments/:id', keyArgs] as const
}

export function getHrisDepartmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.departments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisDepartmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.departments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisDepartmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.departments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisDepartmentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.departments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisDepartmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisDepartmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.departments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteHrisDepartmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHrisDepartmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchHrisDepartmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchHrisDepartmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getHrisEmployeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.employees.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/employees', keyArgs] as const
}

export function getHrisEmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.employees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.employees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
          >,
          ReturnType<typeof getHrisEmployeesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisEmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHrisEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hris.employees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hris.employees.$post>,
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
  const mutationDefaults = getPostHrisEmployeesMutationOptions<TError, TOnMutateResult>(
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

export function getHrisEmployeesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.employees)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/employees/:id', keyArgs] as const
}

export function getHrisEmployeesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.employees)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisEmployeesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.employees[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisEmployeesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.employees)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisEmployeesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisEmployeesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisEmployeesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.employees[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteHrisEmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHrisEmployeesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchHrisEmployeesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchHrisEmployeesIdMutationOptions<TError, TOnMutateResult>(
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

export function getHrisJobsEmployeesEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/jobs/employees/:employee_id', keyArgs] as const
}

export function getHrisJobsEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisJobsEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.jobs.employees[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisJobsEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisJobsEmployeesEmployeeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisJobsEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisJobsEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.jobs.employees[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/jobs/employees/:employee_id/jobs/:job_id', keyArgs] as const
}

export function getHrisJobsEmployeesEmployeeIdJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.jobs.employees[':employee_id'].jobs[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisJobsEmployeesEmployeeIdJobsJobId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisJobsEmployeesEmployeeIdJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.jobs.employees[':employee_id'].jobs[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHrisPayrollsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.payrolls.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/payrolls', keyArgs] as const
}

export function getHrisPayrollsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.payrolls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisPayrollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.payrolls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisPayrolls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hris.payrolls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
          >,
          ReturnType<typeof getHrisPayrollsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hris.payrolls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisPayrollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.payrolls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHrisPayrollsEmployeesEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/payrolls/employees/:employee_id', keyArgs] as const
}

export function getHrisPayrollsEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisPayrollsEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.payrolls.employees[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisPayrollsEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisPayrollsEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.payrolls.employees[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/payrolls/employees/:employee_id/payrolls/:payroll_id', keyArgs] as const
}

export function getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.payrolls.employees[':employee_id'].payrolls[':payroll_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisPayrollsEmployeesEmployeeIdPayrollsPayrollId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.payrolls.employees[':employee_id'].payrolls[':payroll_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getHrisPayrollsPayrollIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/payrolls/:payroll_id', keyArgs] as const
}

export function getHrisPayrollsPayrollIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisPayrollsPayrollIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.payrolls[':payroll_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisPayrollsPayrollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisPayrollsPayrollIdQueryKey>
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
          Awaited<ReturnType<(typeof client.hris.payrolls)[':payroll_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisPayrollsPayrollIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisPayrollsPayrollIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.payrolls[':payroll_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHrisSchedulesEmployeesEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/schedules/employees/:employee_id', keyArgs] as const
}

export function getHrisSchedulesEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisSchedulesEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris.schedules.employees[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisSchedulesEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>
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
                  ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHrisSchedulesEmployeesEmployeeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisSchedulesEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisSchedulesEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris.schedules.employees[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHrisTimeOffRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris)['time-off-requests']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/time-off-requests', keyArgs] as const
}

export function getHrisTimeOffRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris)['time-off-requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisTimeOffRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris['time-off-requests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisTimeOffRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hris)['time-off-requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisTimeOffRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hris)['time-off-requests']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisTimeOffRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisTimeOffRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris['time-off-requests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHrisTimeOffRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHrisTimeOffRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getHrisTimeOffRequestsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hris', '/hris/time-off-requests/:id', keyArgs] as const
}

export function getHrisTimeOffRequestsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHrisTimeOffRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hris['time-off-requests'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHrisTimeOffRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHrisTimeOffRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.hris)['time-off-requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHrisTimeOffRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHrisTimeOffRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hris['time-off-requests'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteHrisTimeOffRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHrisTimeOffRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchHrisTimeOffRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchHrisTimeOffRequestsIdMutationOptions<TError, TOnMutateResult>(
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
