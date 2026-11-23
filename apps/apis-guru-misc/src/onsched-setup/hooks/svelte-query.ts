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

export function getSetupKey() {
  return ['setup'] as const
}

export function getSetupV1AppointmentsQueryKey(
  args: InferRequestType<typeof client.setup.v1.appointments.$get>,
) {
  return ['setup', '/setup/v1/appointments', args] as const
}

export function getSetupV1AppointmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setup.v1.appointments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1AppointmentsQueryKey>
  >({
    queryKey: getSetupV1AppointmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.appointments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSetupV1Appointments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.appointments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1AppointmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1AppointmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSetupV1AppointmentsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/appointments/:id', args] as const
}

export function getSetupV1AppointmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1AppointmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.appointments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1AppointmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1AppointmentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1AppointmentsIdReassignResourceResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1AppointmentsIdReassignResourceResourceIdMutationOptions<
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

export function getSetupV1BusinessusersQueryKey(
  args: InferRequestType<typeof client.setup.v1.businessusers.$get>,
) {
  return ['setup', '/setup/v1/businessusers', args] as const
}

export function getSetupV1BusinessusersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setup.v1.businessusers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1BusinessusersQueryKey>
  >({
    queryKey: getSetupV1BusinessusersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.businessusers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1Businessusers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.businessusers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1BusinessusersQueryKey>
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
      ...getSetupV1BusinessusersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1Businessusers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.businessusers.$post>,
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
    const mutationDefaults = getPostSetupV1BusinessusersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1BusinessusersPermissionsQueryKey(
  args: InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
) {
  return ['setup', '/setup/v1/businessusers/permissions', args] as const
}

export function getSetupV1BusinessusersPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1BusinessusersPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.businessusers.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1BusinessusersPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1BusinessusersPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1BusinessusersEmailCompaniesQueryKey(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>,
) {
  return ['setup', '/setup/v1/businessusers/:email/companies', args] as const
}

export function getSetupV1BusinessusersEmailCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1BusinessusersEmailCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.businessusers[':email'].companies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1BusinessusersEmailCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.setup.v1.businessusers)[':email']['companies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSetupV1BusinessusersEmailCompaniesQueryKey>
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
      ...getSetupV1BusinessusersEmailCompaniesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1BusinessusersIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/businessusers/:id', args] as const
}

export function getSetupV1BusinessusersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1BusinessusersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.businessusers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1BusinessusersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1BusinessusersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1BusinessusersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1BusinessusersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1BusinessusersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1BusinessusersIdMutationOptions<
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

export function getSetupV1CalendarsQueryKey(
  args: InferRequestType<typeof client.setup.v1.calendars.$get>,
) {
  return ['setup', '/setup/v1/calendars', args] as const
}

export function getSetupV1CalendarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setup.v1.calendars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsQueryKey>
  >({
    queryKey: getSetupV1CalendarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.calendars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSetupV1Calendars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.calendars.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CalendarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1CalendarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSetupV1Calendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.calendars.$post>,
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
    const mutationDefaults = getPostSetupV1CalendarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutSetupV1CalendarsBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1CalendarsBlockIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1CalendarsBlockId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1CalendarsBlockIdMutationOptions<
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

export function getSetupV1CalendarsBlocksIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/blocks/:id', args] as const
}

export function getSetupV1CalendarsBlocksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CalendarsBlocksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.calendars.blocks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CalendarsBlocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CalendarsBlocksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1CalendarsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/:id', args] as const
}

export function getSetupV1CalendarsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CalendarsIdQueryKey>
  >({
    queryKey: getSetupV1CalendarsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.calendars[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CalendarsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CalendarsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1CalendarsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutSetupV1CalendarsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1CalendarsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1CalendarsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1CalendarsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSetupV1CalendarsIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1CalendarsIdBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1CalendarsIdBlocksQueryKey(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/:id/blocks', args] as const
}

export function getSetupV1CalendarsIdBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CalendarsIdBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.calendars[':id'].blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CalendarsIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CalendarsIdBlocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1CalendarsIdRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1CalendarsIdRecoverMutationOptions<
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

export function getSetupV1CalendarsIdServicesQueryKey(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/:id/services', args] as const
}

export function getSetupV1CalendarsIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CalendarsIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.calendars[':id'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CalendarsIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CalendarsIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1CompaniesQueryKey() {
  return ['setup', '/setup/v1/companies'] as const
}

export function getSetupV1CompaniesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesQueryKey>
  >({
    queryKey: getSetupV1CompaniesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1Companies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1CompaniesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutSetupV1Companies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.companies.$put>,
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
    const mutationDefaults = getPutSetupV1CompaniesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSetupV1Companies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.companies.$post>,
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
    const mutationDefaults = getPostSetupV1CompaniesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1CompaniesDomainsQueryKey() {
  return ['setup', '/setup/v1/companies/domains'] as const
}

export function getSetupV1CompaniesDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesDomainsQueryKey>
  >({
    queryKey: getSetupV1CompaniesDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.domains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CompaniesDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1CompaniesDomainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSetupV1CompaniesDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1CompaniesDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1CompaniesDomainsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/companies/domains/:id', args] as const
}

export function getSetupV1CompaniesDomainsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CompaniesDomainsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.domains[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesDomainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CompaniesDomainsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1CompaniesDomainsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1CompaniesDomainsIdMutationOptions<
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

export function createDeleteSetupV1CompaniesDomainsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1CompaniesDomainsIdMutationOptions<
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

export function getSetupV1CompaniesEmailTemplatesQueryKey() {
  return ['setup', '/setup/v1/companies/email/templates'] as const
}

export function getSetupV1CompaniesEmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CompaniesEmailTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.email.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CompaniesEmailTemplatesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1CompaniesEmailTemplatesMasterQueryKey() {
  return ['setup', '/setup/v1/companies/email/templates/master'] as const
}

export function getSetupV1CompaniesEmailTemplatesMasterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CompaniesEmailTemplatesMasterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.email.templates.master.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesEmailTemplatesMaster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CompaniesEmailTemplatesMasterQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1CompaniesEmailTemplatesMaster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1CompaniesEmailTemplatesMasterMutationOptions<
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

export function createDeleteSetupV1CompaniesEmailTemplatesMaster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1CompaniesEmailTemplatesMasterMutationOptions<
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

export function getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey(
  args: InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
) {
  return ['setup', '/setup/v1/companies/email/templates/:templateName', args] as const
}

export function getSetupV1CompaniesEmailTemplatesTemplateNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.email.templates[':templateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesEmailTemplatesTemplateName<
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
  args: () => InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSetupV1CompaniesEmailTemplatesTemplateNameQueryKey>
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
      ...getSetupV1CompaniesEmailTemplatesTemplateNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1CompaniesRegionsQueryKey(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$get>,
) {
  return ['setup', '/setup/v1/companies/regions', args] as const
}

export function getSetupV1CompaniesRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CompaniesRegionsQueryKey>
  >({
    queryKey: getSetupV1CompaniesRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.regions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.companies.regions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CompaniesRegionsQueryKey>
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
      ...getSetupV1CompaniesRegionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1CompaniesRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1CompaniesRegionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1CompaniesRegionsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/companies/regions/:id', args] as const
}

export function getSetupV1CompaniesRegionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CompaniesRegionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.regions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CompaniesRegionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1CompaniesRegionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1CompaniesRegionsIdMutationOptions<
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

export function createDeleteSetupV1CompaniesRegionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1CompaniesRegionsIdMutationOptions<
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

export function getSetupV1CompaniesTimezonesDateQueryKey(
  args: InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
) {
  return ['setup', '/setup/v1/companies/timezones/:date', args] as const
}

export function getSetupV1CompaniesTimezonesDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CompaniesTimezonesDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.companies.timezones[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CompaniesTimezonesDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CompaniesTimezonesDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1CustomersQueryKey(
  args: InferRequestType<typeof client.setup.v1.customers.$get>,
) {
  return ['setup', '/setup/v1/customers', args] as const
}

export function getSetupV1CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setup.v1.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CustomersQueryKey>
  >({
    queryKey: getSetupV1CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSetupV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.customers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1CustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSetupV1CustomersIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/customers/:id', args] as const
}

export function getSetupV1CustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1CustomersIdQueryKey>
  >({
    queryKey: getSetupV1CustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.customers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1CustomersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1CustomersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSetupV1CustomersIdPrivacyQueryKey(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
) {
  return ['setup', '/setup/v1/customers/:id/privacy', args] as const
}

export function getSetupV1CustomersIdPrivacyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1CustomersIdPrivacyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.customers[':id'].privacy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1CustomersIdPrivacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1CustomersIdPrivacyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1LocationsQueryKey(
  args: InferRequestType<typeof client.setup.v1.locations.$get>,
) {
  return ['setup', '/setup/v1/locations', args] as const
}

export function getSetupV1LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setup.v1.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsQueryKey>
  >({
    queryKey: getSetupV1LocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSetupV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.locations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1LocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSetupV1Locations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.locations.$post>,
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
    const mutationDefaults = getPostSetupV1LocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSetupV1LocationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.locations.bulk.$post>,
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
    const mutationDefaults = getPostSetupV1LocationsBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1LocationsServicesIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/locations/services/:id', args] as const
}

export function getSetupV1LocationsServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1LocationsServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations.services[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1LocationsServicesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSetupV1LocationsServicesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsServicesIdMutationOptions<
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

export function getSetupV1LocationsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id', args] as const
}

export function getSetupV1LocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1LocationsIdQueryKey>
  >({
    queryKey: getSetupV1LocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1LocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1LocationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutSetupV1LocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1LocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1LocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1LocationsIdAppointmentremindersQueryKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id/appointmentreminders', args] as const
}

export function getSetupV1LocationsIdAppointmentremindersQueryOptions<
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
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1LocationsIdAppointmentremindersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations[':id'].appointmentreminders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsIdAppointmentreminders<
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
  args: () => InferRequestType<
    (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSetupV1LocationsIdAppointmentremindersQueryKey>
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
      ...getSetupV1LocationsIdAppointmentremindersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1LocationsIdAppointmentreminders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']>,
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
    const mutationDefaults = getPutSetupV1LocationsIdAppointmentremindersMutationOptions<
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

export function createDeleteSetupV1LocationsIdDeleteallimages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdDeleteallimagesMutationOptions<
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

export function createDeleteSetupV1LocationsIdDeleteimage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdDeleteimageMutationOptions<
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

export function getSetupV1LocationsIdEmailTemplatesQueryKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates', args] as const
}

export function getSetupV1LocationsIdEmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1LocationsIdEmailTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsIdEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1LocationsIdEmailTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1LocationsIdEmailTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1LocationsIdEmailTemplatesMutationOptions<
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

export function getSetupV1LocationsIdEmailTemplatesMasterQueryKey(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', args] as const
}

export function getSetupV1LocationsIdEmailTemplatesMasterQueryOptions<
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
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1LocationsIdEmailTemplatesMasterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates.master.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsIdEmailTemplatesMaster<
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
  args: () => InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1LocationsIdEmailTemplatesMasterQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1LocationsIdEmailTemplatesMaster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1LocationsIdEmailTemplatesMasterMutationOptions<
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

export function createDeleteSetupV1LocationsIdEmailTemplatesMaster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdEmailTemplatesMasterMutationOptions<
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

export function getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates/:templateName', args] as const
}

export function getSetupV1LocationsIdEmailTemplatesTemplateNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1LocationsIdEmailTemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations[':id'].email.templates[':templateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsIdEmailTemplatesTemplateName<
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
  args: () => InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1LocationsIdEmailTemplatesTemplateNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSetupV1LocationsIdEmailTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameMutationOptions<
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

export function createPostSetupV1LocationsIdGoogleServiceAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1LocationsIdGoogleServiceAccountMutationOptions<
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

export function createDeleteSetupV1LocationsIdGoogleServiceAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdGoogleServiceAccountMutationOptions<
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

export function createPutSetupV1LocationsIdHolidaysHolidayIdClosed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1LocationsIdHolidaysHolidayIdClosedMutationOptions<
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

export function createPutSetupV1LocationsIdRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1LocationsIdRecoverMutationOptions<
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

export function getSetupV1LocationsIdServicesQueryKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id/services', args] as const
}

export function getSetupV1LocationsIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1LocationsIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.locations[':id'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1LocationsIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1LocationsIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1LocationsIdServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1LocationsIdServicesMutationOptions<
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

export function createDeleteSetupV1LocationsIdServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1LocationsIdServicesMutationOptions<
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

export function createPutSetupV1LocationsIdSettingsScopeSettingsScope<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1LocationsIdSettingsScopeSettingsScopeMutationOptions<
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

export function createPostSetupV1LocationsIdUploadimage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1LocationsIdUploadimageMutationOptions<
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

export function getSetupV1ResourcegroupsQueryKey(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
) {
  return ['setup', '/setup/v1/resourcegroups', args] as const
}

export function getSetupV1ResourcegroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcegroupsQueryKey>
  >({
    queryKey: getSetupV1ResourcegroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resourcegroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1Resourcegroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ResourcegroupsQueryKey>
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
      ...getSetupV1ResourcegroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1Resourcegroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.resourcegroups.$post>,
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
    const mutationDefaults = getPostSetupV1ResourcegroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ResourcegroupsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resourcegroups/:id', args] as const
}

export function getSetupV1ResourcegroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcegroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resourcegroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcegroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ResourcegroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcegroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ResourcegroupsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ResourcegroupsIdMutationOptions<
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

export function createPutSetupV1ResourcegroupsIdRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcegroupsIdRecoverMutationOptions<
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

export function getSetupV1ResourcesQueryKey(
  args: InferRequestType<typeof client.setup.v1.resources.$get>,
) {
  return ['setup', '/setup/v1/resources', args] as const
}

export function getSetupV1ResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setup.v1.resources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesQueryKey>
  >({
    queryKey: getSetupV1ResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSetupV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.resources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1ResourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSetupV1Resources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.resources.$post>,
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
    const mutationDefaults = getPostSetupV1ResourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ResourcesAllocationsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resources/allocations/:id', args] as const
}

export function getSetupV1ResourcesAllocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesAllocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources.allocations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesAllocationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ResourcesAllocationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesAllocationsIdMutationOptions<
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

export function createDeleteSetupV1ResourcesAllocationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ResourcesAllocationsIdMutationOptions<
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

export function createPutSetupV1ResourcesBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesBlockIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ResourcesBlockId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ResourcesBlockIdMutationOptions<
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

export function getSetupV1ResourcesBlocksIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resources/blocks/:id', args] as const
}

export function getSetupV1ResourcesBlocksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesBlocksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources.blocks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesBlocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesBlocksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ResourcesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.resources.bulk.$put>,
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
    const mutationDefaults = getPutSetupV1ResourcesBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSetupV1ResourcesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.resources.bulk.$post>,
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
    const mutationDefaults = getPostSetupV1ResourcesBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ResourcesTimezonesQueryKey() {
  return ['setup', '/setup/v1/resources/timezones'] as const
}

export function getSetupV1ResourcesTimezonesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesTimezonesQueryKey>
  >({
    queryKey: getSetupV1ResourcesTimezonesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources.timezones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesTimezones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ResourcesTimezonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1ResourcesTimezonesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSetupV1ResourcesIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id', args] as const
}

export function getSetupV1ResourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ResourcesIdQueryKey>
  >({
    queryKey: getSetupV1ResourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ResourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1ResourcesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutSetupV1ResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ResourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ResourcesIdAllocationsQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id/allocations', args] as const
}

export function getSetupV1ResourcesIdAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesIdAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources[':id'].allocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesIdAllocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1ResourcesIdAllocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ResourcesIdAllocationsMutationOptions<
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

export function getSetupV1ResourcesIdAvailabilityQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id/availability', args] as const
}

export function getSetupV1ResourcesIdAvailabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesIdAvailabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources[':id'].availability.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesIdAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesIdAvailabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ResourcesIdAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesIdAvailabilityMutationOptions<
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

export function createPostSetupV1ResourcesIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ResourcesIdBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ResourcesIdBlocksQueryKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id/blocks', args] as const
}

export function getSetupV1ResourcesIdBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesIdBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources[':id'].blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesIdBlocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
) {
  return [
    'setup',
    '/setup/v1/resources/:id/calendar/auth/google/:googleEmailAddress',
    args,
  ] as const
}

export function getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryOptions<
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
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources[':id'].calendar.auth.google[':googleEmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress<
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
  args: () => InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
) {
  return [
    'setup',
    '/setup/v1/resources/:id/calendar/auth/outlook/:outlookEmailAddress',
    args,
  ] as const
}

export function getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryOptions<
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
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.resources[':id'].calendar.auth.outlook[':outlookEmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress<
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
  args: () => InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSetupV1ResourcesIdDeleteimage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ResourcesIdDeleteimageMutationOptions<
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

export function createPutSetupV1ResourcesIdReassignAppointmentsResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesIdReassignAppointmentsResourceIdMutationOptions<
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

export function createPutSetupV1ResourcesIdRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesIdRecoverMutationOptions<
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

export function createPutSetupV1ResourcesIdServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ResourcesIdServicesMutationOptions<
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

export function createPostSetupV1ResourcesIdServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ResourcesIdServicesMutationOptions<
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

export function createDeleteSetupV1ResourcesIdServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ResourcesIdServicesMutationOptions<
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

export function createPostSetupV1ResourcesIdUploadimage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ResourcesIdUploadimageMutationOptions<
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

export function getSetupV1ServicegroupsQueryKey(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$get>,
) {
  return ['setup', '/setup/v1/servicegroups', args] as const
}

export function getSetupV1ServicegroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicegroupsQueryKey>
  >({
    queryKey: getSetupV1ServicegroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.servicegroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1Servicegroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.servicegroups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ServicegroupsQueryKey>
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
      ...getSetupV1ServicegroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1Servicegroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.servicegroups.$post>,
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
    const mutationDefaults = getPostSetupV1ServicegroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ServicegroupsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/servicegroups/:id', args] as const
}

export function getSetupV1ServicegroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicegroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.servicegroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicegroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicegroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ServicegroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicegroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ServicegroupsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ServicegroupsIdMutationOptions<
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

export function createPutSetupV1ServicegroupsIdRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicegroupsIdRecoverMutationOptions<
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

export function getSetupV1ServicesQueryKey(
  args: InferRequestType<typeof client.setup.v1.services.$get>,
) {
  return ['setup', '/setup/v1/services', args] as const
}

export function getSetupV1ServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setup.v1.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesQueryKey>
  >({
    queryKey: getSetupV1ServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSetupV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.v1.services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1ServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSetupV1Services<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setup.v1.services.$post>,
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
    const mutationDefaults = getPostSetupV1ServicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ServicesAllocationsIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/services/allocations/:id', args] as const
}

export function getSetupV1ServicesAllocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesAllocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services.allocations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesAllocationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ServicesAllocationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicesAllocationsIdMutationOptions<
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

export function createDeleteSetupV1ServicesAllocationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ServicesAllocationsIdMutationOptions<
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

export function createPutSetupV1ServicesBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicesBlockIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ServicesBlockId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ServicesBlockIdMutationOptions<
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

export function getSetupV1ServicesBlocksIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/services/blocks/:id', args] as const
}

export function getSetupV1ServicesBlocksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesBlocksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services.blocks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesBlocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesBlocksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1ServicesCalendar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ServicesCalendarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ServicesCalendarId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ServicesCalendarIdMutationOptions<
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

export function getSetupV1ServicesIdQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id', args] as const
}

export function getSetupV1ServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetupV1ServicesIdQueryKey>
  >({
    queryKey: getSetupV1ServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetupV1ServicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupV1ServicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutSetupV1ServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSetupV1ServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ServicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ServicesIdAllocationsQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/allocations', args] as const
}

export function getSetupV1ServicesIdAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesIdAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services[':id'].allocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesIdAllocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1ServicesIdAllocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ServicesIdAllocationsMutationOptions<
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

export function createPostSetupV1ServicesIdAllocationsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ServicesIdAllocationsBulkMutationOptions<
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

export function getSetupV1ServicesIdAvailabilityQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/availability', args] as const
}

export function getSetupV1ServicesIdAvailabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesIdAvailabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services[':id'].availability.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesIdAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesIdAvailabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSetupV1ServicesIdAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicesIdAvailabilityMutationOptions<
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

export function createPostSetupV1ServicesIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ServicesIdBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ServicesIdBlocksQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/blocks', args] as const
}

export function getSetupV1ServicesIdBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesIdBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services[':id'].blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesIdBlocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSetupV1ServicesIdCalendarQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/calendar', args] as const
}

export function getSetupV1ServicesIdCalendarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesIdCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services[':id'].calendar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesIdCalendar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesIdCalendarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSetupV1ServicesIdDeleteimage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetupV1ServicesIdDeleteimageMutationOptions<
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

export function createPutSetupV1ServicesIdRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetupV1ServicesIdRecoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSetupV1ServicesIdResourcesQueryKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/resources', args] as const
}

export function getSetupV1ServicesIdResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetupV1ServicesIdResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.v1.services[':id'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSetupV1ServicesIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSetupV1ServicesIdResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSetupV1ServicesIdUploadimage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupV1ServicesIdUploadimageMutationOptions<
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
