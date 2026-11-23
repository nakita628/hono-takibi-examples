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

export function getCompanyKey() {
  return ['company'] as const
}

export function getCompanyEmployeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.employees.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/employees', keyArgs] as const
}

export function getCompanyEmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.employees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.employees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>
            >
          >,
          ReturnType<typeof getCompanyEmployeesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompanyEmployees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.company.employees.$post>,
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
  const mutationDefaults = getPostCompanyEmployeesMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyEmployeesEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/employees/:employee_id', keyArgs] as const
}

export function getCompanyEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees[':employee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyEmployeesEmployeeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees[':employee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchCompanyEmployeesEmployeeId<
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
                Awaited<ReturnType<(typeof client.company.employees)[':employee_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']>,
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
  const mutationDefaults = getPatchCompanyEmployeesEmployeeIdMutationOptions<
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

export function getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/employees/:employee_id/absences/balance', keyArgs] as const
}

export function getCompanyEmployeesEmployeeIdAbsencesBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees[':employee_id'].absences.balance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyEmployeesEmployeeIdAbsencesBalance<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
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
                    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
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
                    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey>
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
              (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyEmployeesEmployeeIdAbsencesBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees[':employee_id'].absences.balance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyEmployeesCustomAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/employees/custom-attributes', keyArgs] as const
}

export function getCompanyEmployeesCustomAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyEmployeesCustomAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees['custom-attributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyEmployeesCustomAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyEmployeesCustomAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client.company.employees)['custom-attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesCustomAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyEmployeesCustomAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees['custom-attributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyEmployeesAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.employees.attributes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/employees/attributes', keyArgs] as const
}

export function getCompanyEmployeesAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.employees.attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyEmployeesAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees.attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyEmployeesAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.employees.attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.company.employees.attributes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.company.employees.attributes.$get>>
              >
            >
          >,
          ReturnType<typeof getCompanyEmployeesAttributesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.company.employees.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyEmployeesAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees.attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/employees/:employee_id/profile-picture/:width', keyArgs] as const
}

export function getCompanyEmployeesEmployeeIdProfilePictureWidthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees[':employee_id']['profile-picture'][':width'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyEmployeesEmployeeIdProfilePictureWidth<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
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
                    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
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
                    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey>
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
              (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees[':employee_id']['profile-picture'][':width'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyAttendancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/attendances', keyArgs] as const
}

export function getCompanyAttendancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyAttendancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.attendances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyAttendances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>
            >
          >,
          ReturnType<typeof getCompanyAttendancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyAttendancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyAttendancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.attendances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompanyAttendances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.company.attendances.$post>,
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
  const mutationDefaults = getPostCompanyAttendancesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCompanyAttendancesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompanyAttendancesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchCompanyAttendancesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompanyAttendancesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyAttendancesProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/attendances/projects', keyArgs] as const
}

export function getCompanyAttendancesProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyAttendancesProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.attendances.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyAttendancesProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.company.attendances.projects.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.company.attendances.projects.$get>>
              >
            >
          >,
          ReturnType<typeof getCompanyAttendancesProjectsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.company.attendances.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyAttendancesProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyAttendancesProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.attendances.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompanyAttendancesProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompanyAttendancesProjectsMutationOptions<
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

export function useDeleteCompanyAttendancesProjectsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.company.attendances.projects)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCompanyAttendancesProjectsIdMutationOptions<
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

export function usePatchCompanyAttendancesProjectsId<
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
                Awaited<ReturnType<(typeof client.company.attendances.projects)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCompanyAttendancesProjectsIdMutationOptions<
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

export function getCompanyTimeOffTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-off-types']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/time-off-types', keyArgs] as const
}

export function getCompanyTimeOffTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-off-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyTimeOffTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['time-off-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyTimeOffTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-off-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyTimeOffTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-off-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyTimeOffTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyTimeOffTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['time-off-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyTimeOffsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-offs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/time-offs', keyArgs] as const
}

export function getCompanyTimeOffsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-offs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyTimeOffsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['time-offs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyTimeOffs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-offs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyTimeOffsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyTimeOffsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyTimeOffsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['time-offs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompanyTimeOffs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCompanyTimeOffsMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyTimeOffsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/time-offs/:id', keyArgs] as const
}

export function getCompanyTimeOffsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyTimeOffsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['time-offs'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyTimeOffsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyTimeOffsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.company)['time-offs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyTimeOffsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyTimeOffsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['time-offs'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCompanyTimeOffsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompanyTimeOffsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyAbsencePeriodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['absence-periods']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/absence-periods', keyArgs] as const
}

export function getCompanyAbsencePeriodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['absence-periods']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyAbsencePeriodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['absence-periods'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyAbsencePeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['absence-periods']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyAbsencePeriodsQueryKey>
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
          Awaited<ReturnType<(typeof client.company)['absence-periods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyAbsencePeriodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyAbsencePeriodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['absence-periods'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompanyAbsencePeriods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompanyAbsencePeriodsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCompanyAbsencePeriodsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompanyAbsencePeriodsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyDocumentCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['document-categories']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/document-categories', keyArgs] as const
}

export function getCompanyDocumentCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['document-categories']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyDocumentCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['document-categories'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyDocumentCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['document-categories']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyDocumentCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.company)['document-categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyDocumentCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyDocumentCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['document-categories'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompanyDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.documents.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.company.documents.$post>,
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
  const mutationDefaults = getPostCompanyDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyCustomReportsReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/custom-reports/reports', keyArgs] as const
}

export function getCompanyCustomReportsReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyCustomReportsReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['custom-reports'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyCustomReportsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyCustomReportsReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.company)['custom-reports']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyCustomReportsReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyCustomReportsReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['custom-reports'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyCustomReportsReportsReportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/custom-reports/reports/:report_id', keyArgs] as const
}

export function getCompanyCustomReportsReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyCustomReportsReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['custom-reports'].reports[':report_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyCustomReportsReportsReportId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
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
                    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
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
                    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompanyCustomReportsReportsReportIdQueryKey>
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
            ReturnType<(typeof client.company)['custom-reports']['reports'][':report_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyCustomReportsReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyCustomReportsReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['custom-reports'].reports[':report_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanyCustomReportsColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['company', '/company/custom-reports/columns', keyArgs] as const
}

export function getCompanyCustomReportsColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyCustomReportsColumnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company['custom-reports'].columns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanyCustomReportsColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompanyCustomReportsColumnsQueryKey>
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
          Awaited<ReturnType<(typeof client.company)['custom-reports']['columns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompanyCustomReportsColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyCustomReportsColumnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company['custom-reports'].columns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
