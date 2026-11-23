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

export function getSetupKey() {
  return ['setup'] as const
}

export function getSetupV1AppointmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.appointments.$get>>,
) {
  return ['setup', '/setup/v1/appointments', toValue(args)] as const
}

export function getSetupV1AppointmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.appointments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1AppointmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.appointments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Appointments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.appointments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1AppointmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1AppointmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1AppointmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.appointments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1AppointmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/appointments/:id', toValue(args)] as const
}

export function getSetupV1AppointmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1AppointmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.appointments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1AppointmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1AppointmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1AppointmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1AppointmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.appointments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1AppointmentsIdReassignResourceResourceIdMutationKey() {
  return ['setup', '/setup/v1/appointments/:id/reassign/resource/:resourceId', 'PUT'] as const
}

export function getPutSetupV1AppointmentsIdReassignResourceResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1AppointmentsIdReassignResourceResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.setup.v1.appointments[':id'].reassign.resource[':resourceId'].$put(args, options),
      )
    },
  })
}

export function usePutSetupV1AppointmentsIdReassignResourceResourceId<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
          >,
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
  const mutationDefaults = getPutSetupV1AppointmentsIdReassignResourceResourceIdMutationOptions<
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

export function getSetupV1BusinessusersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.businessusers.$get>>,
) {
  return ['setup', '/setup/v1/businessusers', toValue(args)] as const
}

export function getSetupV1BusinessusersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.businessusers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1BusinessusersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.businessusers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Businessusers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.businessusers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1BusinessusersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1BusinessusersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1BusinessusersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.businessusers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1BusinessusersMutationKey() {
  return ['setup', '/setup/v1/businessusers', 'POST'] as const
}

export function getPostSetupV1BusinessusersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.businessusers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1BusinessusersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.businessusers.$post>) {
      return parseResponse(client.setup.v1.businessusers.$post(args, options))
    },
  })
}

export function usePostSetupV1Businessusers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.businessusers.$post>,
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
  const mutationDefaults = getPostSetupV1BusinessusersMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1BusinessusersPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>>,
) {
  return ['setup', '/setup/v1/businessusers/permissions', toValue(args)] as const
}

export function getSetupV1BusinessusersPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1BusinessusersPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.businessusers.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1BusinessusersPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
              >
            >
          >,
          ReturnType<typeof getSetupV1BusinessusersPermissionsQueryKey>
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
          Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1BusinessusersPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1BusinessusersPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.businessusers.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1BusinessusersEmailCompaniesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
  >,
) {
  return ['setup', '/setup/v1/businessusers/:email/companies', toValue(args)] as const
}

export function getSetupV1BusinessusersEmailCompaniesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1BusinessusersEmailCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.businessusers[':email'].companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1BusinessusersEmailCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
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
                  ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1BusinessusersEmailCompaniesQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1BusinessusersEmailCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1BusinessusersEmailCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.businessusers[':email'].companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1BusinessusersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/businessusers/:id', toValue(args)] as const
}

export function getSetupV1BusinessusersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1BusinessusersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.businessusers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1BusinessusersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1BusinessusersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1BusinessusersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1BusinessusersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.businessusers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1BusinessusersIdMutationKey() {
  return ['setup', '/setup/v1/businessusers/:id', 'PUT'] as const
}

export function getPutSetupV1BusinessusersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1BusinessusersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.businessusers[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1BusinessusersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1BusinessusersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1BusinessusersIdMutationKey() {
  return ['setup', '/setup/v1/businessusers/:id', 'DELETE'] as const
}

export function getDeleteSetupV1BusinessusersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1BusinessusersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.businessusers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1BusinessusersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1BusinessusersIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CalendarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.calendars.$get>>,
) {
  return ['setup', '/setup/v1/calendars', toValue(args)] as const
}

export function getSetupV1CalendarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.calendars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CalendarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.calendars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Calendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.calendars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1CalendarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CalendarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.calendars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1CalendarsMutationKey() {
  return ['setup', '/setup/v1/calendars', 'POST'] as const
}

export function getPostSetupV1CalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setup.v1.calendars.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1CalendarsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.calendars.$post>) {
      return parseResponse(client.setup.v1.calendars.$post(args, options))
    },
  })
}

export function usePostSetupV1Calendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.calendars.$post>,
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
  const mutationDefaults = getPostSetupV1CalendarsMutationOptions<TError, TOnMutateResult>(
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

export function getPutSetupV1CalendarsBlockIdMutationKey() {
  return ['setup', '/setup/v1/calendars/block/:id', 'PUT'] as const
}

export function getPutSetupV1CalendarsBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars.block)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1CalendarsBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.calendars.block[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1CalendarsBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars.block)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1CalendarsBlockIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1CalendarsBlockIdMutationKey() {
  return ['setup', '/setup/v1/calendars/block/:id', 'DELETE'] as const
}

export function getDeleteSetupV1CalendarsBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1CalendarsBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.calendars.block[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1CalendarsBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1CalendarsBlockIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CalendarsBlocksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/calendars/blocks/:id', toValue(args)] as const
}

export function getSetupV1CalendarsBlocksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CalendarsBlocksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.calendars.blocks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CalendarsBlocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CalendarsBlocksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsBlocksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CalendarsBlocksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.calendars.blocks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CalendarsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/calendars/:id', toValue(args)] as const
}

export function getSetupV1CalendarsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CalendarsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.calendars[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CalendarsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CalendarsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CalendarsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.calendars[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1CalendarsIdMutationKey() {
  return ['setup', '/setup/v1/calendars/:id', 'PUT'] as const
}

export function getPutSetupV1CalendarsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1CalendarsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$put']>) {
      return parseResponse(client.setup.v1.calendars[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1CalendarsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.calendars)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1CalendarsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1CalendarsIdMutationKey() {
  return ['setup', '/setup/v1/calendars/:id', 'DELETE'] as const
}

export function getDeleteSetupV1CalendarsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1CalendarsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$delete']>) {
      return parseResponse(client.setup.v1.calendars[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1CalendarsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.calendars)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1CalendarsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSetupV1CalendarsIdBlockMutationKey() {
  return ['setup', '/setup/v1/calendars/:id/block', 'POST'] as const
}

export function getPostSetupV1CalendarsIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1CalendarsIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>,
    ) {
      return parseResponse(client.setup.v1.calendars[':id'].block.$post(args, options))
    },
  })
}

export function usePostSetupV1CalendarsIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>,
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
  const mutationDefaults = getPostSetupV1CalendarsIdBlockMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CalendarsIdBlocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>
  >,
) {
  return ['setup', '/setup/v1/calendars/:id/blocks', toValue(args)] as const
}

export function getSetupV1CalendarsIdBlocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CalendarsIdBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.calendars[':id'].blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CalendarsIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CalendarsIdBlocksQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsIdBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CalendarsIdBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.calendars[':id'].blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1CalendarsIdRecoverMutationKey() {
  return ['setup', '/setup/v1/calendars/:id/recover', 'PUT'] as const
}

export function getPutSetupV1CalendarsIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1CalendarsIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>,
    ) {
      return parseResponse(client.setup.v1.calendars[':id'].recover.$put(args, options))
    },
  })
}

export function usePutSetupV1CalendarsIdRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>,
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
  const mutationDefaults = getPutSetupV1CalendarsIdRecoverMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CalendarsIdServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>
  >,
) {
  return ['setup', '/setup/v1/calendars/:id/services', toValue(args)] as const
}

export function getSetupV1CalendarsIdServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CalendarsIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.calendars[':id'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CalendarsIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CalendarsIdServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CalendarsIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.calendars[':id'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CompaniesQueryKey() {
  return ['setup', '/setup/v1/companies'] as const
}

export function getSetupV1CompaniesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSetupV1CompaniesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Companies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1CompaniesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSetupV1CompaniesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1CompaniesMutationKey() {
  return ['setup', '/setup/v1/companies', 'PUT'] as const
}

export function getPutSetupV1CompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.setup.v1.companies.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1CompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.companies.$put>) {
      return parseResponse(client.setup.v1.companies.$put(args, options))
    },
  })
}

export function usePutSetupV1Companies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.companies.$put>,
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
  const mutationDefaults = getPutSetupV1CompaniesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSetupV1CompaniesMutationKey() {
  return ['setup', '/setup/v1/companies', 'POST'] as const
}

export function getPostSetupV1CompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setup.v1.companies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1CompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.companies.$post>) {
      return parseResponse(client.setup.v1.companies.$post(args, options))
    },
  })
}

export function usePostSetupV1Companies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.companies.$post>,
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
  const mutationDefaults = getPostSetupV1CompaniesMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CompaniesDomainsQueryKey() {
  return ['setup', '/setup/v1/companies/domains'] as const
}

export function getSetupV1CompaniesDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSetupV1CompaniesDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.domains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSetupV1CompaniesDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.domains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1CompaniesDomainsMutationKey() {
  return ['setup', '/setup/v1/companies/domains', 'POST'] as const
}

export function getPostSetupV1CompaniesDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.companies.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1CompaniesDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.companies.domains.$post>) {
      return parseResponse(client.setup.v1.companies.domains.$post(args, options))
    },
  })
}

export function usePostSetupV1CompaniesDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.domains.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.companies.domains.$post>,
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
  const mutationDefaults = getPostSetupV1CompaniesDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CompaniesDomainsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/companies/domains/:id', toValue(args)] as const
}

export function getSetupV1CompaniesDomainsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CompaniesDomainsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.domains[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesDomainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesDomainsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesDomainsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CompaniesDomainsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.domains[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1CompaniesDomainsIdMutationKey() {
  return ['setup', '/setup/v1/companies/domains/:id', 'PUT'] as const
}

export function getPutSetupV1CompaniesDomainsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1CompaniesDomainsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.companies.domains[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1CompaniesDomainsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1CompaniesDomainsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1CompaniesDomainsIdMutationKey() {
  return ['setup', '/setup/v1/companies/domains/:id', 'DELETE'] as const
}

export function getDeleteSetupV1CompaniesDomainsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1CompaniesDomainsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.companies.domains[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1CompaniesDomainsId<
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
                Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1CompaniesDomainsIdMutationOptions<
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

export function getSetupV1CompaniesEmailTemplatesQueryKey() {
  return ['setup', '/setup/v1/companies/email/templates'] as const
}

export function getSetupV1CompaniesEmailTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSetupV1CompaniesEmailTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.email.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesEmailTemplatesQueryKey>
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
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesEmailTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSetupV1CompaniesEmailTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.email.templates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CompaniesEmailTemplatesMasterQueryKey() {
  return ['setup', '/setup/v1/companies/email/templates/master'] as const
}

export function getSetupV1CompaniesEmailTemplatesMasterQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getSetupV1CompaniesEmailTemplatesMasterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.email.templates.master.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesEmailTemplatesMaster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesEmailTemplatesMasterQueryKey>
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
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesEmailTemplatesMasterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSetupV1CompaniesEmailTemplatesMasterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.email.templates.master.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1CompaniesEmailTemplatesMasterMutationKey() {
  return ['setup', '/setup/v1/companies/email/templates/master', 'POST'] as const
}

export function getPostSetupV1CompaniesEmailTemplatesMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.companies.email.templates.master.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1CompaniesEmailTemplatesMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.setup.v1.companies.email.templates.master.$post>,
    ) {
      return parseResponse(client.setup.v1.companies.email.templates.master.$post(args, options))
    },
  })
}

export function usePostSetupV1CompaniesEmailTemplatesMaster<
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
                Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.companies.email.templates.master.$post>,
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
  const mutationDefaults = getPostSetupV1CompaniesEmailTemplatesMasterMutationOptions<
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

export function getDeleteSetupV1CompaniesEmailTemplatesMasterMutationKey() {
  return ['setup', '/setup/v1/companies/email/templates/master', 'DELETE'] as const
}

export function getDeleteSetupV1CompaniesEmailTemplatesMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1CompaniesEmailTemplatesMasterMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.setup.v1.companies.email.templates.master.$delete(undefined, options),
      )
    },
  })
}

export function useDeleteSetupV1CompaniesEmailTemplatesMaster<
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
                Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$delete>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteSetupV1CompaniesEmailTemplatesMasterMutationOptions<
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

export function getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.email.templates)[':templateName']['$get']>
  >,
) {
  return ['setup', '/setup/v1/companies/email/templates/:templateName', toValue(args)] as const
}

export function getSetupV1CompaniesEmailTemplatesTemplateNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.email.templates)[':templateName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.email.templates[':templateName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesEmailTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.setup.v1.companies.email.templates)[':templateName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.email.templates)[':templateName']['$get']>
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
                    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
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
                    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey>
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
            ReturnType<(typeof client.setup.v1.companies.email.templates)[':templateName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.email.templates[':templateName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CompaniesRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.companies.regions.$get>>,
) {
  return ['setup', '/setup/v1/companies/regions', toValue(args)] as const
}

export function getSetupV1CompaniesRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.companies.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CompaniesRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.regions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.companies.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesRegionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CompaniesRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1CompaniesRegionsMutationKey() {
  return ['setup', '/setup/v1/companies/regions', 'POST'] as const
}

export function getPostSetupV1CompaniesRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.companies.regions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1CompaniesRegionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.companies.regions.$post>) {
      return parseResponse(client.setup.v1.companies.regions.$post(args, options))
    },
  })
}

export function usePostSetupV1CompaniesRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.companies.regions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.companies.regions.$post>,
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
  const mutationDefaults = getPostSetupV1CompaniesRegionsMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1CompaniesRegionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/companies/regions/:id', toValue(args)] as const
}

export function getSetupV1CompaniesRegionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CompaniesRegionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.regions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesRegionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesRegionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CompaniesRegionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.regions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1CompaniesRegionsIdMutationKey() {
  return ['setup', '/setup/v1/companies/regions/:id', 'PUT'] as const
}

export function getPutSetupV1CompaniesRegionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1CompaniesRegionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.companies.regions[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1CompaniesRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1CompaniesRegionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1CompaniesRegionsIdMutationKey() {
  return ['setup', '/setup/v1/companies/regions/:id', 'DELETE'] as const
}

export function getDeleteSetupV1CompaniesRegionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1CompaniesRegionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.companies.regions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1CompaniesRegionsId<
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
                Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1CompaniesRegionsIdMutationOptions<
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

export function getSetupV1CompaniesTimezonesDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>
  >,
) {
  return ['setup', '/setup/v1/companies/timezones/:date', toValue(args)] as const
}

export function getSetupV1CompaniesTimezonesDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CompaniesTimezonesDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.companies.timezones[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CompaniesTimezonesDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CompaniesTimezonesDateQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesTimezonesDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CompaniesTimezonesDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.companies.timezones[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.customers.$get>>,
) {
  return ['setup', '/setup/v1/customers', toValue(args)] as const
}

export function getSetupV1CustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1CustomersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CustomersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/customers/:id', toValue(args)] as const
}

export function getSetupV1CustomersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CustomersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1CustomersIdPrivacyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>
  >,
) {
  return ['setup', '/setup/v1/customers/:id/privacy', toValue(args)] as const
}

export function getSetupV1CustomersIdPrivacyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1CustomersIdPrivacyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.customers[':id'].privacy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1CustomersIdPrivacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1CustomersIdPrivacyQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CustomersIdPrivacyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1CustomersIdPrivacyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.customers[':id'].privacy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.locations.$get>>,
) {
  return ['setup', '/setup/v1/locations', toValue(args)] as const
}

export function getSetupV1LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1LocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1LocationsMutationKey() {
  return ['setup', '/setup/v1/locations', 'POST'] as const
}

export function getPostSetupV1LocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setup.v1.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.locations.$post>) {
      return parseResponse(client.setup.v1.locations.$post(args, options))
    },
  })
}

export function usePostSetupV1Locations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.locations.$post>,
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
  const mutationDefaults = getPostSetupV1LocationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSetupV1LocationsBulkMutationKey() {
  return ['setup', '/setup/v1/locations/bulk', 'POST'] as const
}

export function getPostSetupV1LocationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.locations.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.locations.bulk.$post>) {
      return parseResponse(client.setup.v1.locations.bulk.$post(args, options))
    },
  })
}

export function usePostSetupV1LocationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.locations.bulk.$post>,
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
  const mutationDefaults = getPostSetupV1LocationsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1LocationsServicesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/locations/services/:id', toValue(args)] as const
}

export function getSetupV1LocationsServicesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations.services[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsServicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations.services[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSetupV1LocationsServicesIdMutationKey() {
  return ['setup', '/setup/v1/locations/services/:id', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsServicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.locations.services[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1LocationsServicesId<
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
                Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1LocationsServicesIdMutationOptions<
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

export function getSetupV1LocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/locations/:id', toValue(args)] as const
}

export function getSetupV1LocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1LocationsIdMutationKey() {
  return ['setup', '/setup/v1/locations/:id', 'PUT'] as const
}

export function getPutSetupV1LocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1LocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$put']>) {
      return parseResponse(client.setup.v1.locations[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1LocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1LocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1LocationsIdMutationKey() {
  return ['setup', '/setup/v1/locations/:id', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$delete']>) {
      return parseResponse(client.setup.v1.locations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1LocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1LocationsIdAppointmentremindersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
  >,
) {
  return ['setup', '/setup/v1/locations/:id/appointmentreminders', toValue(args)] as const
}

export function getSetupV1LocationsIdAppointmentremindersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsIdAppointmentremindersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations[':id'].appointmentreminders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsIdAppointmentreminders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
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
                    (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']
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
                    (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsIdAppointmentremindersQueryKey>
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
            ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdAppointmentremindersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsIdAppointmentremindersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations[':id'].appointmentreminders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1LocationsIdAppointmentremindersMutationKey() {
  return ['setup', '/setup/v1/locations/:id/appointmentreminders', 'PUT'] as const
}

export function getPutSetupV1LocationsIdAppointmentremindersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1LocationsIdAppointmentremindersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].appointmentreminders.$put(args, options),
      )
    },
  })
}

export function usePutSetupV1LocationsIdAppointmentreminders<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']
          >,
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
  const mutationDefaults = getPutSetupV1LocationsIdAppointmentremindersMutationOptions<
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

export function getDeleteSetupV1LocationsIdDeleteallimagesMutationKey() {
  return ['setup', '/setup/v1/locations/:id/deleteallimages', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdDeleteallimagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdDeleteallimagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']
      >,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].deleteallimages.$delete(args, options))
    },
  })
}

export function useDeleteSetupV1LocationsIdDeleteallimages<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdDeleteallimagesMutationOptions<
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

export function getDeleteSetupV1LocationsIdDeleteimageMutationKey() {
  return ['setup', '/setup/v1/locations/:id/deleteimage', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdDeleteimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdDeleteimageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].deleteimage.$delete(args, options))
    },
  })
}

export function useDeleteSetupV1LocationsIdDeleteimage<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdDeleteimageMutationOptions<
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

export function getSetupV1LocationsIdEmailTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates', toValue(args)] as const
}

export function getSetupV1LocationsIdEmailTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsIdEmailTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsIdEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
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
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['$get']
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
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsIdEmailTemplatesQueryKey>
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
            ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdEmailTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsIdEmailTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations[':id'].email.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1LocationsIdEmailTemplatesMutationKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates', 'POST'] as const
}

export function getPostSetupV1LocationsIdEmailTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsIdEmailTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['email']['templates']['$post']
      >,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].email.templates.$post(args, options))
    },
  })
}

export function usePostSetupV1LocationsIdEmailTemplates<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['email']['templates']['$post']
          >,
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
  const mutationDefaults = getPostSetupV1LocationsIdEmailTemplatesMutationOptions<
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

export function getSetupV1LocationsIdEmailTemplatesMasterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
    >
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', toValue(args)] as const
}

export function getSetupV1LocationsIdEmailTemplatesMasterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsIdEmailTemplatesMasterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates.master.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsIdEmailTemplatesMaster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
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
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
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
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsIdEmailTemplatesMasterQueryKey>
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
              (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdEmailTemplatesMasterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsIdEmailTemplatesMasterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations[':id'].email.templates.master.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1LocationsIdEmailTemplatesMasterMutationKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', 'POST'] as const
}

export function getPostSetupV1LocationsIdEmailTemplatesMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsIdEmailTemplatesMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates.master.$post(args, options),
      )
    },
  })
}

export function usePostSetupV1LocationsIdEmailTemplatesMaster<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
          >,
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
  const mutationDefaults = getPostSetupV1LocationsIdEmailTemplatesMasterMutationOptions<
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

export function getDeleteSetupV1LocationsIdEmailTemplatesMasterMutationKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdEmailTemplatesMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdEmailTemplatesMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates.master.$delete(args, options),
      )
    },
  })
}

export function useDeleteSetupV1LocationsIdEmailTemplatesMaster<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
          >,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdEmailTemplatesMasterMutationOptions<
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

export function getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
    >
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates/:templateName', toValue(args)] as const
}

export function getSetupV1LocationsIdEmailTemplatesTemplateNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates[':templateName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsIdEmailTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
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
                    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
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
                    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey>
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
              (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations[':id'].email.templates[':templateName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameMutationKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates/:templateName', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates[':templateName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSetupV1LocationsIdEmailTemplatesTemplateName<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
          >,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameMutationOptions<
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

export function getPostSetupV1LocationsIdGoogleServiceAccountMutationKey() {
  return ['setup', '/setup/v1/locations/:id/google/service/account', 'POST'] as const
}

export function getPostSetupV1LocationsIdGoogleServiceAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsIdGoogleServiceAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].google.service.account.$post(args, options),
      )
    },
  })
}

export function usePostSetupV1LocationsIdGoogleServiceAccount<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
          >,
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
  const mutationDefaults = getPostSetupV1LocationsIdGoogleServiceAccountMutationOptions<
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

export function getDeleteSetupV1LocationsIdGoogleServiceAccountMutationKey() {
  return ['setup', '/setup/v1/locations/:id/google/service/account', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdGoogleServiceAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdGoogleServiceAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].google.service.account.$delete(args, options),
      )
    },
  })
}

export function useDeleteSetupV1LocationsIdGoogleServiceAccount<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
          >,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdGoogleServiceAccountMutationOptions<
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

export function getPutSetupV1LocationsIdHolidaysHolidayIdClosedMutationKey() {
  return ['setup', '/setup/v1/locations/:id/holidays/:holidayId/:closed', 'PUT'] as const
}

export function getPutSetupV1LocationsIdHolidaysHolidayIdClosedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1LocationsIdHolidaysHolidayIdClosedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].holidays[':holidayId'][':closed'].$put(args, options),
      )
    },
  })
}

export function usePutSetupV1LocationsIdHolidaysHolidayIdClosed<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
          >,
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
  const mutationDefaults = getPutSetupV1LocationsIdHolidaysHolidayIdClosedMutationOptions<
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

export function getPutSetupV1LocationsIdRecoverMutationKey() {
  return ['setup', '/setup/v1/locations/:id/recover', 'PUT'] as const
}

export function getPutSetupV1LocationsIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1LocationsIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].recover.$put(args, options))
    },
  })
}

export function usePutSetupV1LocationsIdRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>,
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
  const mutationDefaults = getPutSetupV1LocationsIdRecoverMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1LocationsIdServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>
  >,
) {
  return ['setup', '/setup/v1/locations/:id/services', toValue(args)] as const
}

export function getSetupV1LocationsIdServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1LocationsIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.locations[':id'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1LocationsIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1LocationsIdServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1LocationsIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.locations[':id'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1LocationsIdServicesMutationKey() {
  return ['setup', '/setup/v1/locations/:id/services', 'POST'] as const
}

export function getPostSetupV1LocationsIdServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsIdServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$post']>,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].services.$post(args, options))
    },
  })
}

export function usePostSetupV1LocationsIdServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$post']>,
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
  const mutationDefaults = getPostSetupV1LocationsIdServicesMutationOptions<
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

export function getDeleteSetupV1LocationsIdServicesMutationKey() {
  return ['setup', '/setup/v1/locations/:id/services', 'DELETE'] as const
}

export function getDeleteSetupV1LocationsIdServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1LocationsIdServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].services.$delete(args, options))
    },
  })
}

export function useDeleteSetupV1LocationsIdServices<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1LocationsIdServicesMutationOptions<
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

export function getPutSetupV1LocationsIdSettingsScopeSettingsScopeMutationKey() {
  return ['setup', '/setup/v1/locations/:id/settings/scope/:settingsScope', 'PUT'] as const
}

export function getPutSetupV1LocationsIdSettingsScopeSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1LocationsIdSettingsScopeSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
      >,
    ) {
      return parseResponse(
        client.setup.v1.locations[':id'].settings.scope[':settingsScope'].$put(args, options),
      )
    },
  })
}

export function usePutSetupV1LocationsIdSettingsScopeSettingsScope<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
          >,
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
  const mutationDefaults = getPutSetupV1LocationsIdSettingsScopeSettingsScopeMutationOptions<
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

export function getPostSetupV1LocationsIdUploadimageMutationKey() {
  return ['setup', '/setup/v1/locations/:id/uploadimage', 'POST'] as const
}

export function getPostSetupV1LocationsIdUploadimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1LocationsIdUploadimageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>,
    ) {
      return parseResponse(client.setup.v1.locations[':id'].uploadimage.$post(args, options))
    },
  })
}

export function usePostSetupV1LocationsIdUploadimage<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>,
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
  const mutationDefaults = getPostSetupV1LocationsIdUploadimageMutationOptions<
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

export function getSetupV1ResourcegroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.resourcegroups.$get>>,
) {
  return ['setup', '/setup/v1/resourcegroups', toValue(args)] as const
}

export function getSetupV1ResourcegroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.resourcegroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcegroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resourcegroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Resourcegroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.resourcegroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1ResourcegroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcegroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcegroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resourcegroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ResourcegroupsMutationKey() {
  return ['setup', '/setup/v1/resourcegroups', 'POST'] as const
}

export function getPostSetupV1ResourcegroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.resourcegroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcegroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.resourcegroups.$post>) {
      return parseResponse(client.setup.v1.resourcegroups.$post(args, options))
    },
  })
}

export function usePostSetupV1Resourcegroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.resourcegroups.$post>,
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
  const mutationDefaults = getPostSetupV1ResourcegroupsMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ResourcegroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/resourcegroups/:id', toValue(args)] as const
}

export function getSetupV1ResourcegroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcegroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resourcegroups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcegroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcegroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcegroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resourcegroups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ResourcegroupsIdMutationKey() {
  return ['setup', '/setup/v1/resourcegroups/:id', 'PUT'] as const
}

export function getPutSetupV1ResourcegroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcegroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resourcegroups[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcegroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcegroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ResourcegroupsIdMutationKey() {
  return ['setup', '/setup/v1/resourcegroups/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ResourcegroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ResourcegroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.resourcegroups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ResourcegroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ResourcegroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSetupV1ResourcegroupsIdRecoverMutationKey() {
  return ['setup', '/setup/v1/resourcegroups/:id/recover', 'PUT'] as const
}

export function getPutSetupV1ResourcegroupsIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcegroupsIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resourcegroups[':id'].recover.$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcegroupsIdRecover<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcegroupsIdRecoverMutationOptions<
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

export function getSetupV1ResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.resources.$get>>,
) {
  return ['setup', '/setup/v1/resources', toValue(args)] as const
}

export function getSetupV1ResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1ResourcesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ResourcesMutationKey() {
  return ['setup', '/setup/v1/resources', 'POST'] as const
}

export function getPostSetupV1ResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setup.v1.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.resources.$post>) {
      return parseResponse(client.setup.v1.resources.$post(args, options))
    },
  })
}

export function usePostSetupV1Resources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.resources.$post>,
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
  const mutationDefaults = getPostSetupV1ResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ResourcesAllocationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/resources/allocations/:id', toValue(args)] as const
}

export function getSetupV1ResourcesAllocationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesAllocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources.allocations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesAllocationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesAllocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesAllocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources.allocations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ResourcesAllocationsIdMutationKey() {
  return ['setup', '/setup/v1/resources/allocations/:id', 'PUT'] as const
}

export function getPutSetupV1ResourcesAllocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesAllocationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resources.allocations[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesAllocationsId<
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
                Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcesAllocationsIdMutationOptions<
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

export function getDeleteSetupV1ResourcesAllocationsIdMutationKey() {
  return ['setup', '/setup/v1/resources/allocations/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ResourcesAllocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ResourcesAllocationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.resources.allocations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ResourcesAllocationsId<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ResourcesAllocationsIdMutationOptions<
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

export function getPutSetupV1ResourcesBlockIdMutationKey() {
  return ['setup', '/setup/v1/resources/block/:id', 'PUT'] as const
}

export function getPutSetupV1ResourcesBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.block)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resources.block[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources.block)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcesBlockIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ResourcesBlockIdMutationKey() {
  return ['setup', '/setup/v1/resources/block/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ResourcesBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.block)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ResourcesBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.resources.block[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ResourcesBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources.block)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ResourcesBlockIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ResourcesBlocksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/resources/blocks/:id', toValue(args)] as const
}

export function getSetupV1ResourcesBlocksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesBlocksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources.blocks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesBlocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesBlocksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesBlocksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesBlocksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources.blocks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ResourcesBulkMutationKey() {
  return ['setup', '/setup/v1/resources/bulk', 'PUT'] as const
}

export function getPutSetupV1ResourcesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.resources.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.resources.bulk.$put>) {
      return parseResponse(client.setup.v1.resources.bulk.$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.resources.bulk.$put>,
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
  const mutationDefaults = getPutSetupV1ResourcesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostSetupV1ResourcesBulkMutationKey() {
  return ['setup', '/setup/v1/resources/bulk', 'POST'] as const
}

export function getPostSetupV1ResourcesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.resources.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.resources.bulk.$post>) {
      return parseResponse(client.setup.v1.resources.bulk.$post(args, options))
    },
  })
}

export function usePostSetupV1ResourcesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.resources.bulk.$post>,
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
  const mutationDefaults = getPostSetupV1ResourcesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ResourcesTimezonesQueryKey() {
  return ['setup', '/setup/v1/resources/timezones'] as const
}

export function getSetupV1ResourcesTimezonesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSetupV1ResourcesTimezonesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources.timezones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesTimezones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesTimezonesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesTimezonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSetupV1ResourcesTimezonesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources.timezones.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1ResourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/resources/:id', toValue(args)] as const
}

export function getSetupV1ResourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ResourcesIdMutationKey() {
  return ['setup', '/setup/v1/resources/:id', 'PUT'] as const
}

export function getPutSetupV1ResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$put']>) {
      return parseResponse(client.setup.v1.resources[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ResourcesIdMutationKey() {
  return ['setup', '/setup/v1/resources/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$delete']>) {
      return parseResponse(client.setup.v1.resources[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ResourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ResourcesIdAllocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>
  >,
) {
  return ['setup', '/setup/v1/resources/:id/allocations', toValue(args)] as const
}

export function getSetupV1ResourcesIdAllocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesIdAllocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources[':id'].allocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>
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
                  ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesIdAllocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdAllocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesIdAllocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources[':id'].allocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ResourcesIdAllocationsMutationKey() {
  return ['setup', '/setup/v1/resources/:id/allocations', 'POST'] as const
}

export function getPostSetupV1ResourcesIdAllocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcesIdAllocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].allocations.$post(args, options))
    },
  })
}

export function usePostSetupV1ResourcesIdAllocations<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>,
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
  const mutationDefaults = getPostSetupV1ResourcesIdAllocationsMutationOptions<
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

export function getSetupV1ResourcesIdAvailabilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>
  >,
) {
  return ['setup', '/setup/v1/resources/:id/availability', toValue(args)] as const
}

export function getSetupV1ResourcesIdAvailabilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesIdAvailabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources[':id'].availability.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesIdAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>
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
                  ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesIdAvailabilityQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdAvailabilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesIdAvailabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources[':id'].availability.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ResourcesIdAvailabilityMutationKey() {
  return ['setup', '/setup/v1/resources/:id/availability', 'PUT'] as const
}

export function getPutSetupV1ResourcesIdAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesIdAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].availability.$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesIdAvailability<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcesIdAvailabilityMutationOptions<
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

export function getPostSetupV1ResourcesIdBlockMutationKey() {
  return ['setup', '/setup/v1/resources/:id/block', 'POST'] as const
}

export function getPostSetupV1ResourcesIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcesIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['block']['$post']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].block.$post(args, options))
    },
  })
}

export function usePostSetupV1ResourcesIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['block']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['block']['$post']>,
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
  const mutationDefaults = getPostSetupV1ResourcesIdBlockMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ResourcesIdBlocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>
  >,
) {
  return ['setup', '/setup/v1/resources/:id/blocks', toValue(args)] as const
}

export function getSetupV1ResourcesIdBlocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ResourcesIdBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources[':id'].blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ResourcesIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesIdBlocksQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ResourcesIdBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources[':id'].blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
    >
  >,
) {
  return [
    'setup',
    '/setup/v1/resources/:id/calendar/auth/google/:googleEmailAddress',
    toValue(args),
  ] as const
}

export function getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources[':id'].calendar.auth.google[':googleEmailAddress'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
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
                    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
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
                    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey>
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
              (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources[':id'].calendar.auth.google[':googleEmailAddress'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
    >
  >,
) {
  return [
    'setup',
    '/setup/v1/resources/:id/calendar/auth/outlook/:outlookEmailAddress',
    toValue(args),
  ] as const
}

export function getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.resources[':id'].calendar.auth.outlook[':outlookEmailAddress'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
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
                    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
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
                    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey>
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
              (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.resources[':id'].calendar.auth.outlook[':outlookEmailAddress'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSetupV1ResourcesIdDeleteimageMutationKey() {
  return ['setup', '/setup/v1/resources/:id/deleteimage', 'DELETE'] as const
}

export function getDeleteSetupV1ResourcesIdDeleteimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ResourcesIdDeleteimageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].deleteimage.$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ResourcesIdDeleteimage<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ResourcesIdDeleteimageMutationOptions<
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

export function getPutSetupV1ResourcesIdReassignAppointmentsResourceIdMutationKey() {
  return ['setup', '/setup/v1/resources/:id/reassign/appointments/:resourceId', 'PUT'] as const
}

export function getPutSetupV1ResourcesIdReassignAppointmentsResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesIdReassignAppointmentsResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.setup.v1.resources[':id'].reassign.appointments[':resourceId'].$put(args, options),
      )
    },
  })
}

export function usePutSetupV1ResourcesIdReassignAppointmentsResourceId<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
          >,
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
  const mutationDefaults = getPutSetupV1ResourcesIdReassignAppointmentsResourceIdMutationOptions<
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

export function getPutSetupV1ResourcesIdRecoverMutationKey() {
  return ['setup', '/setup/v1/resources/:id/recover', 'PUT'] as const
}

export function getPutSetupV1ResourcesIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].recover.$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesIdRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcesIdRecoverMutationOptions<TError, TOnMutateResult>(
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

export function getPutSetupV1ResourcesIdServicesMutationKey() {
  return ['setup', '/setup/v1/resources/:id/services', 'PUT'] as const
}

export function getPutSetupV1ResourcesIdServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ResourcesIdServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$put']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].services.$put(args, options))
    },
  })
}

export function usePutSetupV1ResourcesIdServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$put']>,
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
  const mutationDefaults = getPutSetupV1ResourcesIdServicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSetupV1ResourcesIdServicesMutationKey() {
  return ['setup', '/setup/v1/resources/:id/services', 'POST'] as const
}

export function getPostSetupV1ResourcesIdServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcesIdServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$post']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].services.$post(args, options))
    },
  })
}

export function usePostSetupV1ResourcesIdServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$post']>,
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
  const mutationDefaults = getPostSetupV1ResourcesIdServicesMutationOptions<
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

export function getDeleteSetupV1ResourcesIdServicesMutationKey() {
  return ['setup', '/setup/v1/resources/:id/services', 'DELETE'] as const
}

export function getDeleteSetupV1ResourcesIdServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ResourcesIdServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].services.$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ResourcesIdServices<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ResourcesIdServicesMutationOptions<
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

export function getPostSetupV1ResourcesIdUploadimageMutationKey() {
  return ['setup', '/setup/v1/resources/:id/uploadimage', 'POST'] as const
}

export function getPostSetupV1ResourcesIdUploadimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ResourcesIdUploadimageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>,
    ) {
      return parseResponse(client.setup.v1.resources[':id'].uploadimage.$post(args, options))
    },
  })
}

export function usePostSetupV1ResourcesIdUploadimage<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>,
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
  const mutationDefaults = getPostSetupV1ResourcesIdUploadimageMutationOptions<
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

export function getSetupV1ServicegroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.servicegroups.$get>>,
) {
  return ['setup', '/setup/v1/servicegroups', toValue(args)] as const
}

export function getSetupV1ServicegroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.servicegroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicegroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.servicegroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Servicegroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.servicegroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1ServicegroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicegroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicegroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.servicegroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ServicegroupsMutationKey() {
  return ['setup', '/setup/v1/servicegroups', 'POST'] as const
}

export function getPostSetupV1ServicegroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.servicegroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicegroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.servicegroups.$post>) {
      return parseResponse(client.setup.v1.servicegroups.$post(args, options))
    },
  })
}

export function usePostSetupV1Servicegroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.servicegroups.$post>,
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
  const mutationDefaults = getPostSetupV1ServicegroupsMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ServicegroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/servicegroups/:id', toValue(args)] as const
}

export function getSetupV1ServicegroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicegroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.servicegroups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicegroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicegroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicegroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.servicegroups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ServicegroupsIdMutationKey() {
  return ['setup', '/setup/v1/servicegroups/:id', 'PUT'] as const
}

export function getPutSetupV1ServicegroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicegroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.servicegroups[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ServicegroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicegroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ServicegroupsIdMutationKey() {
  return ['setup', '/setup/v1/servicegroups/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ServicegroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ServicegroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.servicegroups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ServicegroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ServicegroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSetupV1ServicegroupsIdRecoverMutationKey() {
  return ['setup', '/setup/v1/servicegroups/:id/recover', 'PUT'] as const
}

export function getPutSetupV1ServicegroupsIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicegroupsIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>,
    ) {
      return parseResponse(client.setup.v1.servicegroups[':id'].recover.$put(args, options))
    },
  })
}

export function usePutSetupV1ServicegroupsIdRecover<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicegroupsIdRecoverMutationOptions<
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

export function getSetupV1ServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.services.$get>>,
) {
  return ['setup', '/setup/v1/services', toValue(args)] as const
}

export function getSetupV1ServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.v1.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>
            >
          >,
          ReturnType<typeof getSetupV1ServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ServicesMutationKey() {
  return ['setup', '/setup/v1/services', 'POST'] as const
}

export function getPostSetupV1ServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setup.v1.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.services.$post>) {
      return parseResponse(client.setup.v1.services.$post(args, options))
    },
  })
}

export function usePostSetupV1Services<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.services.$post>,
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
  const mutationDefaults = getPostSetupV1ServicesMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ServicesAllocationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>
  >,
) {
  return ['setup', '/setup/v1/services/allocations/:id', toValue(args)] as const
}

export function getSetupV1ServicesAllocationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesAllocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services.allocations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesAllocationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesAllocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesAllocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services.allocations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ServicesAllocationsIdMutationKey() {
  return ['setup', '/setup/v1/services/allocations/:id', 'PUT'] as const
}

export function getPutSetupV1ServicesAllocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicesAllocationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.services.allocations[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ServicesAllocationsId<
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
                Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicesAllocationsIdMutationOptions<
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

export function getDeleteSetupV1ServicesAllocationsIdMutationKey() {
  return ['setup', '/setup/v1/services/allocations/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ServicesAllocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ServicesAllocationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.services.allocations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ServicesAllocationsId<
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
                Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ServicesAllocationsIdMutationOptions<
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

export function getPutSetupV1ServicesBlockIdMutationKey() {
  return ['setup', '/setup/v1/services/block/:id', 'PUT'] as const
}

export function getPutSetupV1ServicesBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.block)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services.block)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicesBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services.block)[':id']['$put']>,
    ) {
      return parseResponse(client.setup.v1.services.block[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ServicesBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services.block)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services.block)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicesBlockIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ServicesBlockIdMutationKey() {
  return ['setup', '/setup/v1/services/block/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ServicesBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.block)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services.block)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ServicesBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services.block)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.services.block[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ServicesBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services.block)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services.block)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ServicesBlockIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ServicesBlocksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/services/blocks/:id', toValue(args)] as const
}

export function getSetupV1ServicesBlocksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesBlocksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services.blocks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesBlocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesBlocksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesBlocksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesBlocksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services.blocks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ServicesCalendarMutationKey() {
  return ['setup', '/setup/v1/services/calendar', 'POST'] as const
}

export function getPostSetupV1ServicesCalendarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.calendar.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setup.v1.services.calendar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicesCalendarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.v1.services.calendar.$post>) {
      return parseResponse(client.setup.v1.services.calendar.$post(args, options))
    },
  })
}

export function usePostSetupV1ServicesCalendar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setup.v1.services.calendar.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.setup.v1.services.calendar.$post>,
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
  const mutationDefaults = getPostSetupV1ServicesCalendarMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ServicesCalendarIdMutationKey() {
  return ['setup', '/setup/v1/services/calendar/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ServicesCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ServicesCalendarIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.services.calendar[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ServicesCalendarId<
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
                Awaited<ReturnType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ServicesCalendarIdMutationOptions<
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

export function getSetupV1ServicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>>,
) {
  return ['setup', '/setup/v1/services/:id', toValue(args)] as const
}

export function getSetupV1ServicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ServicesIdMutationKey() {
  return ['setup', '/setup/v1/services/:id', 'PUT'] as const
}

export function getPutSetupV1ServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.services)[':id']['$put']>) {
      return parseResponse(client.setup.v1.services[':id'].$put(args, options))
    },
  })
}

export function usePutSetupV1ServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetupV1ServicesIdMutationKey() {
  return ['setup', '/setup/v1/services/:id', 'DELETE'] as const
}

export function getDeleteSetupV1ServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.setup.v1.services)[':id']['$delete']>) {
      return parseResponse(client.setup.v1.services[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ServicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ServicesIdAllocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>
  >,
) {
  return ['setup', '/setup/v1/services/:id/allocations', toValue(args)] as const
}

export function getSetupV1ServicesIdAllocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesIdAllocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services[':id'].allocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesIdAllocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdAllocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesIdAllocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services[':id'].allocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ServicesIdAllocationsMutationKey() {
  return ['setup', '/setup/v1/services/:id/allocations', 'POST'] as const
}

export function getPostSetupV1ServicesIdAllocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicesIdAllocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>,
    ) {
      return parseResponse(client.setup.v1.services[':id'].allocations.$post(args, options))
    },
  })
}

export function usePostSetupV1ServicesIdAllocations<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>,
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
  const mutationDefaults = getPostSetupV1ServicesIdAllocationsMutationOptions<
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

export function getPostSetupV1ServicesIdAllocationsBulkMutationKey() {
  return ['setup', '/setup/v1/services/:id/allocations/bulk', 'POST'] as const
}

export function getPostSetupV1ServicesIdAllocationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicesIdAllocationsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']
      >,
    ) {
      return parseResponse(client.setup.v1.services[':id'].allocations.bulk.$post(args, options))
    },
  })
}

export function usePostSetupV1ServicesIdAllocationsBulk<
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
                Awaited<
                  ReturnType<
                    (typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']
          >,
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
  const mutationDefaults = getPostSetupV1ServicesIdAllocationsBulkMutationOptions<
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

export function getSetupV1ServicesIdAvailabilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>
  >,
) {
  return ['setup', '/setup/v1/services/:id/availability', toValue(args)] as const
}

export function getSetupV1ServicesIdAvailabilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesIdAvailabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services[':id'].availability.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesIdAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>
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
                  ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesIdAvailabilityQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdAvailabilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesIdAvailabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services[':id'].availability.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetupV1ServicesIdAvailabilityMutationKey() {
  return ['setup', '/setup/v1/services/:id/availability', 'PUT'] as const
}

export function getPutSetupV1ServicesIdAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicesIdAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$put']>,
    ) {
      return parseResponse(client.setup.v1.services[':id'].availability.$put(args, options))
    },
  })
}

export function usePutSetupV1ServicesIdAvailability<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicesIdAvailabilityMutationOptions<
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

export function getPostSetupV1ServicesIdBlockMutationKey() {
  return ['setup', '/setup/v1/services/:id/block', 'POST'] as const
}

export function getPostSetupV1ServicesIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicesIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services)[':id']['block']['$post']>,
    ) {
      return parseResponse(client.setup.v1.services[':id'].block.$post(args, options))
    },
  })
}

export function usePostSetupV1ServicesIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['block']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['block']['$post']>,
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
  const mutationDefaults = getPostSetupV1ServicesIdBlockMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ServicesIdBlocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>
  >,
) {
  return ['setup', '/setup/v1/services/:id/blocks', toValue(args)] as const
}

export function getSetupV1ServicesIdBlocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesIdBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services[':id'].blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesIdBlocksQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesIdBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services[':id'].blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetupV1ServicesIdCalendarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>
  >,
) {
  return ['setup', '/setup/v1/services/:id/calendar', toValue(args)] as const
}

export function getSetupV1ServicesIdCalendarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesIdCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services[':id'].calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesIdCalendar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesIdCalendarQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesIdCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services[':id'].calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSetupV1ServicesIdDeleteimageMutationKey() {
  return ['setup', '/setup/v1/services/:id/deleteimage', 'DELETE'] as const
}

export function getDeleteSetupV1ServicesIdDeleteimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetupV1ServicesIdDeleteimageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>,
    ) {
      return parseResponse(client.setup.v1.services[':id'].deleteimage.$delete(args, options))
    },
  })
}

export function useDeleteSetupV1ServicesIdDeleteimage<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>,
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
  const mutationDefaults = getDeleteSetupV1ServicesIdDeleteimageMutationOptions<
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

export function getPutSetupV1ServicesIdRecoverMutationKey() {
  return ['setup', '/setup/v1/services/:id/recover', 'PUT'] as const
}

export function getPutSetupV1ServicesIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['recover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetupV1ServicesIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services)[':id']['recover']['$put']>,
    ) {
      return parseResponse(client.setup.v1.services[':id'].recover.$put(args, options))
    },
  })
}

export function usePutSetupV1ServicesIdRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['recover']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['recover']['$put']>,
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
  const mutationDefaults = getPutSetupV1ServicesIdRecoverMutationOptions<TError, TOnMutateResult>(
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

export function getSetupV1ServicesIdResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>
  >,
) {
  return ['setup', '/setup/v1/services/:id/resources', toValue(args)] as const
}

export function getSetupV1ServicesIdResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupV1ServicesIdResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.v1.services[':id'].resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetupV1ServicesIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetupV1ServicesIdResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupV1ServicesIdResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.v1.services[':id'].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetupV1ServicesIdUploadimageMutationKey() {
  return ['setup', '/setup/v1/services/:id/uploadimage', 'POST'] as const
}

export function getPostSetupV1ServicesIdUploadimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupV1ServicesIdUploadimageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>,
    ) {
      return parseResponse(client.setup.v1.services[':id'].uploadimage.$post(args, options))
    },
  })
}

export function usePostSetupV1ServicesIdUploadimage<
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
                Awaited<
                  ReturnType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>,
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
  const mutationDefaults = getPostSetupV1ServicesIdUploadimageMutationOptions<
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
