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

export function getCompanyAttendancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.attendances.$get>>,
) {
  return ['company', '/company/attendances', toValue(args)] as const
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

export function getCompanyEmployeesQueryKey() {
  return ['company', '/company/employees'] as const
}

export function getCompanyEmployeesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCompanyEmployeesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.employees.$get(undefined, {
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
      queryKey: getCompanyEmployeesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.company.employees.$get(undefined, {
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
  return ['company', '/company/employees/:employee_id', toValue(args)] as const
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

export function getCompanyEmployeesEmployeeIdProfilePictureWidthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
    >
  >,
) {
  return [
    'company',
    '/company/employees/:employee_id/profile-picture/:width',
    toValue(args),
  ] as const
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

export function getCompanyTimeOffTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.company)['time-off-types']['$get']>>,
) {
  return ['company', '/company/time-off-types', toValue(args)] as const
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
  return ['company', '/company/time-offs', toValue(args)] as const
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
  return ['company', '/company/time-offs/:id', toValue(args)] as const
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
