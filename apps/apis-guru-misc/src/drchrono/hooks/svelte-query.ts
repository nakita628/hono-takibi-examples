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

export function getApiKey() {
  return ['api'] as const
}

export function getApiAllergiesQueryKey(args: InferRequestType<typeof client.api.allergies.$get>) {
  return ['api', '/api/allergies', args] as const
}

export function getApiAllergiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.allergies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAllergiesQueryKey>
  >({
    queryKey: getApiAllergiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.allergies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAllergies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.allergies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAllergiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAllergiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAllergiesMutationKey() {
  return ['api', '/api/allergies', 'POST'] as const
}

export function getPostApiAllergiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.allergies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAllergiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.allergies.$post>) {
      return parseResponse(client.api.allergies.$post(args, options))
    },
  })
}

export function createPostApiAllergies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.allergies.$post>,
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
    const mutationDefaults = getPostApiAllergiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAllergiesIdQueryKey(
  args: InferRequestType<(typeof client.api.allergies)[':id']['$get']>,
) {
  return ['api', '/api/allergies/:id', args] as const
}

export function getApiAllergiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.allergies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAllergiesIdQueryKey>
  >({
    queryKey: getApiAllergiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.allergies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAllergiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.allergies)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAllergiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAllergiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiAllergiesIdMutationKey() {
  return ['api', '/api/allergies/:id', 'PUT'] as const
}

export function getPutApiAllergiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.allergies)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAllergiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.allergies)[':id']['$put']>) {
      return parseResponse(client.api.allergies[':id'].$put(args, options))
    },
  })
}

export function createPutApiAllergiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.allergies)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.allergies)[':id']['$put']>,
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
    const mutationDefaults = getPutApiAllergiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiAllergiesIdMutationKey() {
  return ['api', '/api/allergies/:id', 'PATCH'] as const
}

export function getPatchApiAllergiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.allergies)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAllergiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.allergies)[':id']['$patch']>) {
      return parseResponse(client.api.allergies[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiAllergiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.allergies)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.allergies)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiAllergiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAmendmentsQueryKey(
  args: InferRequestType<typeof client.api.amendments.$get>,
) {
  return ['api', '/api/amendments', args] as const
}

export function getApiAmendmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.amendments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAmendmentsQueryKey>
  >({
    queryKey: getApiAmendmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.amendments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAmendments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.amendments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAmendmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAmendmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAmendmentsMutationKey() {
  return ['api', '/api/amendments', 'POST'] as const
}

export function getPostApiAmendmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.amendments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAmendmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.amendments.$post>) {
      return parseResponse(client.api.amendments.$post(args, options))
    },
  })
}

export function createPostApiAmendments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.amendments.$post>,
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
    const mutationDefaults = getPostApiAmendmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAmendmentsIdQueryKey(
  args: InferRequestType<(typeof client.api.amendments)[':id']['$get']>,
) {
  return ['api', '/api/amendments/:id', args] as const
}

export function getApiAmendmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.amendments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAmendmentsIdQueryKey>
  >({
    queryKey: getApiAmendmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.amendments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAmendmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.amendments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAmendmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAmendmentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiAmendmentsIdMutationKey() {
  return ['api', '/api/amendments/:id', 'PUT'] as const
}

export function getPutApiAmendmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.amendments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAmendmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.amendments)[':id']['$put']>) {
      return parseResponse(client.api.amendments[':id'].$put(args, options))
    },
  })
}

export function createPutApiAmendmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.amendments)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.amendments)[':id']['$put']>,
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
    const mutationDefaults = getPutApiAmendmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiAmendmentsIdMutationKey() {
  return ['api', '/api/amendments/:id', 'DELETE'] as const
}

export function getDeleteApiAmendmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.amendments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.amendments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAmendmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.amendments)[':id']['$delete']>) {
      return parseResponse(client.api.amendments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiAmendmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.amendments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.amendments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiAmendmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiAmendmentsIdMutationKey() {
  return ['api', '/api/amendments/:id', 'PATCH'] as const
}

export function getPatchApiAmendmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.amendments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAmendmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.amendments)[':id']['$patch']>) {
      return parseResponse(client.api.amendments[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiAmendmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.amendments)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.amendments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiAmendmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppointmentProfilesQueryKey(
  args: InferRequestType<typeof client.api.appointment_profiles.$get>,
) {
  return ['api', '/api/appointment_profiles', args] as const
}

export function getApiAppointmentProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.appointment_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentProfilesQueryKey>
  >({
    queryKey: getApiAppointmentProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.appointment_profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAppointmentProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.appointment_profiles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppointmentProfilesQueryKey>
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
      ...getApiAppointmentProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiAppointmentProfilesMutationKey() {
  return ['api', '/api/appointment_profiles', 'POST'] as const
}

export function getPostApiAppointmentProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.appointment_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppointmentProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.appointment_profiles.$post>) {
      return parseResponse(client.api.appointment_profiles.$post(args, options))
    },
  })
}

export function createPostApiAppointmentProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.appointment_profiles.$post>,
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
    const mutationDefaults = getPostApiAppointmentProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppointmentProfilesIdQueryKey(
  args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>,
) {
  return ['api', '/api/appointment_profiles/:id', args] as const
}

export function getApiAppointmentProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentProfilesIdQueryKey>
  >({
    queryKey: getApiAppointmentProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.appointment_profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAppointmentProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppointmentProfilesIdQueryKey>
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
      ...getApiAppointmentProfilesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiAppointmentProfilesIdMutationKey() {
  return ['api', '/api/appointment_profiles/:id', 'PUT'] as const
}

export function getPutApiAppointmentProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointment_profiles)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAppointmentProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$put']>,
    ) {
      return parseResponse(client.api.appointment_profiles[':id'].$put(args, options))
    },
  })
}

export function createPutApiAppointmentProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointment_profiles)[':id']['$put']>,
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
    const mutationDefaults = getPutApiAppointmentProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiAppointmentProfilesIdMutationKey() {
  return ['api', '/api/appointment_profiles/:id', 'DELETE'] as const
}

export function getDeleteApiAppointmentProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointment_profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAppointmentProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.appointment_profiles[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiAppointmentProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointment_profiles)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiAppointmentProfilesIdMutationOptions<
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

export function getPatchApiAppointmentProfilesIdMutationKey() {
  return ['api', '/api/appointment_profiles/:id', 'PATCH'] as const
}

export function getPatchApiAppointmentProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointment_profiles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAppointmentProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.appointment_profiles[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiAppointmentProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointment_profiles)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiAppointmentProfilesIdMutationOptions<
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

export function getApiAppointmentTemplatesQueryKey(
  args: InferRequestType<typeof client.api.appointment_templates.$get>,
) {
  return ['api', '/api/appointment_templates', args] as const
}

export function getApiAppointmentTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.appointment_templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentTemplatesQueryKey>
  >({
    queryKey: getApiAppointmentTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.appointment_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAppointmentTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.appointment_templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppointmentTemplatesQueryKey>
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
      ...getApiAppointmentTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiAppointmentTemplatesMutationKey() {
  return ['api', '/api/appointment_templates', 'POST'] as const
}

export function getPostApiAppointmentTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.appointment_templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppointmentTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.appointment_templates.$post>) {
      return parseResponse(client.api.appointment_templates.$post(args, options))
    },
  })
}

export function createPostApiAppointmentTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.appointment_templates.$post>,
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
    const mutationDefaults = getPostApiAppointmentTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppointmentTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>,
) {
  return ['api', '/api/appointment_templates/:id', args] as const
}

export function getApiAppointmentTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentTemplatesIdQueryKey>
  >({
    queryKey: getApiAppointmentTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.appointment_templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAppointmentTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppointmentTemplatesIdQueryKey>
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
      ...getApiAppointmentTemplatesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiAppointmentTemplatesIdMutationKey() {
  return ['api', '/api/appointment_templates/:id', 'PUT'] as const
}

export function getPutApiAppointmentTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointment_templates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAppointmentTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$put']>,
    ) {
      return parseResponse(client.api.appointment_templates[':id'].$put(args, options))
    },
  })
}

export function createPutApiAppointmentTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointment_templates)[':id']['$put']>,
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
    const mutationDefaults = getPutApiAppointmentTemplatesIdMutationOptions<
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

export function getDeleteApiAppointmentTemplatesIdMutationKey() {
  return ['api', '/api/appointment_templates/:id', 'DELETE'] as const
}

export function getDeleteApiAppointmentTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointment_templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAppointmentTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.appointment_templates[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiAppointmentTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointment_templates)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiAppointmentTemplatesIdMutationOptions<
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

export function getPatchApiAppointmentTemplatesIdMutationKey() {
  return ['api', '/api/appointment_templates/:id', 'PATCH'] as const
}

export function getPatchApiAppointmentTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointment_templates)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAppointmentTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.appointment_templates[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiAppointmentTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointment_templates)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiAppointmentTemplatesIdMutationOptions<
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

export function getApiAppointmentsQueryKey(
  args: InferRequestType<typeof client.api.appointments.$get>,
) {
  return ['api', '/api/appointments', args] as const
}

export function getApiAppointmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.appointments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentsQueryKey>
  >({
    queryKey: getApiAppointmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.appointments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppointments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.appointments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppointmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppointmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAppointmentsMutationKey() {
  return ['api', '/api/appointments', 'POST'] as const
}

export function getPostApiAppointmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.appointments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppointmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.appointments.$post>) {
      return parseResponse(client.api.appointments.$post(args, options))
    },
  })
}

export function createPostApiAppointments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.appointments.$post>,
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
    const mutationDefaults = getPostApiAppointmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppointmentsIdQueryKey(
  args: InferRequestType<(typeof client.api.appointments)[':id']['$get']>,
) {
  return ['api', '/api/appointments/:id', args] as const
}

export function getApiAppointmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.appointments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentsIdQueryKey>
  >({
    queryKey: getApiAppointmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.appointments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAppointmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.appointments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppointmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppointmentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiAppointmentsIdMutationKey() {
  return ['api', '/api/appointments/:id', 'PUT'] as const
}

export function getPutApiAppointmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.appointments)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAppointmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.appointments)[':id']['$put']>) {
      return parseResponse(client.api.appointments[':id'].$put(args, options))
    },
  })
}

export function createPutApiAppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointments)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointments)[':id']['$put']>,
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
    const mutationDefaults = getPutApiAppointmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiAppointmentsIdMutationKey() {
  return ['api', '/api/appointments/:id', 'DELETE'] as const
}

export function getDeleteApiAppointmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAppointmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.appointments)[':id']['$delete']>) {
      return parseResponse(client.api.appointments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiAppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiAppointmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiAppointmentsIdMutationKey() {
  return ['api', '/api/appointments/:id', 'PATCH'] as const
}

export function getPatchApiAppointmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.appointments)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.appointments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAppointmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.appointments)[':id']['$patch']>) {
      return parseResponse(client.api.appointments[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiAppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointments)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.appointments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiAppointmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiBillingProfilesQueryKey(
  args: InferRequestType<typeof client.api.billing_profiles.$get>,
) {
  return ['api', '/api/billing_profiles', args] as const
}

export function getApiBillingProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.billing_profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBillingProfilesQueryKey>
  >({
    queryKey: getApiBillingProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.billing_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiBillingProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.billing_profiles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBillingProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBillingProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiBillingProfilesIdQueryKey(
  args: InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>,
) {
  return ['api', '/api/billing_profiles/:id', args] as const
}

export function getApiBillingProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBillingProfilesIdQueryKey>
  >({
    queryKey: getApiBillingProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.billing_profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiBillingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBillingProfilesIdQueryKey>
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
      ...getApiBillingProfilesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCarePlansQueryKey(args: InferRequestType<typeof client.api.care_plans.$get>) {
  return ['api', '/api/care_plans', args] as const
}

export function getApiCarePlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.care_plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCarePlansQueryKey>
  >({
    queryKey: getApiCarePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.care_plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCarePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.care_plans.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCarePlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCarePlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCarePlansIdQueryKey(
  args: InferRequestType<(typeof client.api.care_plans)[':id']['$get']>,
) {
  return ['api', '/api/care_plans/:id', args] as const
}

export function getApiCarePlansIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.care_plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCarePlansIdQueryKey>
  >({
    queryKey: getApiCarePlansIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.care_plans[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCarePlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.care_plans)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCarePlansIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCarePlansIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCareTeamMembersQueryKey(
  args: InferRequestType<typeof client.api.care_team_members.$get>,
) {
  return ['api', '/api/care_team_members', args] as const
}

export function getApiCareTeamMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.care_team_members.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCareTeamMembersQueryKey>
  >({
    queryKey: getApiCareTeamMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.care_team_members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCareTeamMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.care_team_members.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCareTeamMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCareTeamMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCareTeamMembersIdQueryKey(
  args: InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>,
) {
  return ['api', '/api/care_team_members/:id', args] as const
}

export function getApiCareTeamMembersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCareTeamMembersIdQueryKey>
  >({
    queryKey: getApiCareTeamMembersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.care_team_members[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCareTeamMembersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCareTeamMembersIdQueryKey>
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
      ...getApiCareTeamMembersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiClaimBillingNotesQueryKey(
  args: InferRequestType<typeof client.api.claim_billing_notes.$get>,
) {
  return ['api', '/api/claim_billing_notes', args] as const
}

export function getApiClaimBillingNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.claim_billing_notes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClaimBillingNotesQueryKey>
  >({
    queryKey: getApiClaimBillingNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.claim_billing_notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClaimBillingNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.claim_billing_notes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClaimBillingNotesQueryKey>
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
      ...getApiClaimBillingNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiClaimBillingNotesMutationKey() {
  return ['api', '/api/claim_billing_notes', 'POST'] as const
}

export function getPostApiClaimBillingNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.claim_billing_notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClaimBillingNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.claim_billing_notes.$post>) {
      return parseResponse(client.api.claim_billing_notes.$post(args, options))
    },
  })
}

export function createPostApiClaimBillingNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.claim_billing_notes.$post>,
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
    const mutationDefaults = getPostApiClaimBillingNotesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiClaimBillingNotesIdQueryKey(
  args: InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>,
) {
  return ['api', '/api/claim_billing_notes/:id', args] as const
}

export function getApiClaimBillingNotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClaimBillingNotesIdQueryKey>
  >({
    queryKey: getApiClaimBillingNotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.claim_billing_notes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClaimBillingNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClaimBillingNotesIdQueryKey>
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
      ...getApiClaimBillingNotesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiClinicalNoteFieldTypesQueryKey(
  args: InferRequestType<typeof client.api.clinical_note_field_types.$get>,
) {
  return ['api', '/api/clinical_note_field_types', args] as const
}

export function getApiClinicalNoteFieldTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.clinical_note_field_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldTypesQueryKey>
  >({
    queryKey: getApiClinicalNoteFieldTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_note_field_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNoteFieldTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.clinical_note_field_types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNoteFieldTypesQueryKey>
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
      ...getApiClinicalNoteFieldTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiClinicalNoteFieldTypesIdQueryKey(
  args: InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>,
) {
  return ['api', '/api/clinical_note_field_types/:id', args] as const
}

export function getApiClinicalNoteFieldTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldTypesIdQueryKey>
  >({
    queryKey: getApiClinicalNoteFieldTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_note_field_types[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNoteFieldTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNoteFieldTypesIdQueryKey>
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
      ...getApiClinicalNoteFieldTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiClinicalNoteFieldValuesQueryKey(
  args: InferRequestType<typeof client.api.clinical_note_field_values.$get>,
) {
  return ['api', '/api/clinical_note_field_values', args] as const
}

export function getApiClinicalNoteFieldValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.clinical_note_field_values.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldValuesQueryKey>
  >({
    queryKey: getApiClinicalNoteFieldValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_note_field_values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNoteFieldValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.clinical_note_field_values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNoteFieldValuesQueryKey>
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
      ...getApiClinicalNoteFieldValuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiClinicalNoteFieldValuesMutationKey() {
  return ['api', '/api/clinical_note_field_values', 'POST'] as const
}

export function getPostApiClinicalNoteFieldValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.clinical_note_field_values.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.clinical_note_field_values.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClinicalNoteFieldValuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.clinical_note_field_values.$post>) {
      return parseResponse(client.api.clinical_note_field_values.$post(args, options))
    },
  })
}

export function createPostApiClinicalNoteFieldValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.clinical_note_field_values.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.clinical_note_field_values.$post>,
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
    const mutationDefaults = getPostApiClinicalNoteFieldValuesMutationOptions<
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

export function getApiClinicalNoteFieldValuesIdQueryKey(
  args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>,
) {
  return ['api', '/api/clinical_note_field_values/:id', args] as const
}

export function getApiClinicalNoteFieldValuesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldValuesIdQueryKey>
  >({
    queryKey: getApiClinicalNoteFieldValuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_note_field_values[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNoteFieldValuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNoteFieldValuesIdQueryKey>
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
      ...getApiClinicalNoteFieldValuesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiClinicalNoteFieldValuesIdMutationKey() {
  return ['api', '/api/clinical_note_field_values/:id', 'PUT'] as const
}

export function getPutApiClinicalNoteFieldValuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiClinicalNoteFieldValuesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$put']>,
    ) {
      return parseResponse(client.api.clinical_note_field_values[':id'].$put(args, options))
    },
  })
}

export function createPutApiClinicalNoteFieldValuesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$put']>,
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
    const mutationDefaults = getPutApiClinicalNoteFieldValuesIdMutationOptions<
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

export function getPatchApiClinicalNoteFieldValuesIdMutationKey() {
  return ['api', '/api/clinical_note_field_values/:id', 'PATCH'] as const
}

export function getPatchApiClinicalNoteFieldValuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiClinicalNoteFieldValuesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.clinical_note_field_values[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiClinicalNoteFieldValuesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiClinicalNoteFieldValuesIdMutationOptions<
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

export function getApiClinicalNoteTemplatesQueryKey(
  args: InferRequestType<typeof client.api.clinical_note_templates.$get>,
) {
  return ['api', '/api/clinical_note_templates', args] as const
}

export function getApiClinicalNoteTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.clinical_note_templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteTemplatesQueryKey>
  >({
    queryKey: getApiClinicalNoteTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_note_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNoteTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.clinical_note_templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNoteTemplatesQueryKey>
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
      ...getApiClinicalNoteTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiClinicalNoteTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>,
) {
  return ['api', '/api/clinical_note_templates/:id', args] as const
}

export function getApiClinicalNoteTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteTemplatesIdQueryKey>
  >({
    queryKey: getApiClinicalNoteTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_note_templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNoteTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNoteTemplatesIdQueryKey>
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
      ...getApiClinicalNoteTemplatesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiClinicalNotesQueryKey(
  args: InferRequestType<typeof client.api.clinical_notes.$get>,
) {
  return ['api', '/api/clinical_notes', args] as const
}

export function getApiClinicalNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.clinical_notes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNotesQueryKey>
  >({
    queryKey: getApiClinicalNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_notes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiClinicalNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.clinical_notes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClinicalNotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiClinicalNotesIdQueryKey(
  args: InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>,
) {
  return ['api', '/api/clinical_notes/:id', args] as const
}

export function getApiClinicalNotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNotesIdQueryKey>
  >({
    queryKey: getApiClinicalNotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.clinical_notes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClinicalNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClinicalNotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClinicalNotesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCommLogsQueryKey(args: InferRequestType<typeof client.api.comm_logs.$get>) {
  return ['api', '/api/comm_logs', args] as const
}

export function getApiCommLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.comm_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommLogsQueryKey>
  >({
    queryKey: getApiCommLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comm_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCommLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.comm_logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCommLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiCommLogsMutationKey() {
  return ['api', '/api/comm_logs', 'POST'] as const
}

export function getPostApiCommLogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.comm_logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCommLogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.comm_logs.$post>) {
      return parseResponse(client.api.comm_logs.$post(args, options))
    },
  })
}

export function createPostApiCommLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.comm_logs.$post>,
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
    const mutationDefaults = getPostApiCommLogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCommLogsIdQueryKey(
  args: InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>,
) {
  return ['api', '/api/comm_logs/:id', args] as const
}

export function getApiCommLogsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommLogsIdQueryKey>
  >({
    queryKey: getApiCommLogsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comm_logs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCommLogsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommLogsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCommLogsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiCommLogsIdMutationKey() {
  return ['api', '/api/comm_logs/:id', 'PUT'] as const
}

export function getPutApiCommLogsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.comm_logs)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCommLogsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.comm_logs)[':id']['$put']>) {
      return parseResponse(client.api.comm_logs[':id'].$put(args, options))
    },
  })
}

export function createPutApiCommLogsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.comm_logs)[':id']['$put']>,
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
    const mutationDefaults = getPutApiCommLogsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiCommLogsIdMutationKey() {
  return ['api', '/api/comm_logs/:id', 'PATCH'] as const
}

export function getPatchApiCommLogsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.comm_logs)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCommLogsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.comm_logs)[':id']['$patch']>) {
      return parseResponse(client.api.comm_logs[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiCommLogsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.comm_logs)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiCommLogsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiConsentFormsQueryKey(
  args: InferRequestType<typeof client.api.consent_forms.$get>,
) {
  return ['api', '/api/consent_forms', args] as const
}

export function getApiConsentFormsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.consent_forms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsentFormsQueryKey>
  >({
    queryKey: getApiConsentFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consent_forms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiConsentForms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.consent_forms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentFormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiConsentFormsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiConsentFormsMutationKey() {
  return ['api', '/api/consent_forms', 'POST'] as const
}

export function getPostApiConsentFormsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.consent_forms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsentFormsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.consent_forms.$post>) {
      return parseResponse(client.api.consent_forms.$post(args, options))
    },
  })
}

export function createPostApiConsentForms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.consent_forms.$post>,
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
    const mutationDefaults = getPostApiConsentFormsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiConsentFormsIdQueryKey(
  args: InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>,
) {
  return ['api', '/api/consent_forms/:id', args] as const
}

export function getApiConsentFormsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsentFormsIdQueryKey>
  >({
    queryKey: getApiConsentFormsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.consent_forms[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiConsentFormsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConsentFormsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiConsentFormsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiConsentFormsIdMutationKey() {
  return ['api', '/api/consent_forms/:id', 'PUT'] as const
}

export function getPutApiConsentFormsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.consent_forms)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiConsentFormsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.consent_forms)[':id']['$put']>) {
      return parseResponse(client.api.consent_forms[':id'].$put(args, options))
    },
  })
}

export function createPutApiConsentFormsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.consent_forms)[':id']['$put']>,
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
    const mutationDefaults = getPutApiConsentFormsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiConsentFormsIdMutationKey() {
  return ['api', '/api/consent_forms/:id', 'PATCH'] as const
}

export function getPatchApiConsentFormsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.consent_forms)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiConsentFormsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.consent_forms)[':id']['$patch']>) {
      return parseResponse(client.api.consent_forms[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiConsentFormsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.consent_forms)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiConsentFormsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiConsentFormsIdApplyToAppointmentMutationKey() {
  return ['api', '/api/consent_forms/:id/apply_to_appointment', 'POST'] as const
}

export function getPostApiConsentFormsIdApplyToAppointmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsentFormsIdApplyToAppointmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']
      >,
    ) {
      return parseResponse(
        client.api.consent_forms[':id'].apply_to_appointment.$post(args, options),
      )
    },
  })
}

export function createPostApiConsentFormsIdApplyToAppointment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']>,
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
    const mutationDefaults = getPostApiConsentFormsIdApplyToAppointmentMutationOptions<
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

export function getPostApiConsentFormsIdUnapplyFromAppointmentMutationKey() {
  return ['api', '/api/consent_forms/:id/unapply_from_appointment', 'POST'] as const
}

export function getPostApiConsentFormsIdUnapplyFromAppointmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.consent_forms)[':id']['unapply_from_appointment']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.consent_forms)[':id']['unapply_from_appointment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConsentFormsIdUnapplyFromAppointmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.consent_forms)[':id']['unapply_from_appointment']['$post']
      >,
    ) {
      return parseResponse(
        client.api.consent_forms[':id'].unapply_from_appointment.$post(args, options),
      )
    },
  })
}

export function createPostApiConsentFormsIdUnapplyFromAppointment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.consent_forms)[':id']['unapply_from_appointment']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.consent_forms)[':id']['unapply_from_appointment']['$post']
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
    const mutationDefaults = getPostApiConsentFormsIdUnapplyFromAppointmentMutationOptions<
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

export function getApiCustomAppointmentFieldsQueryKey(
  args: InferRequestType<typeof client.api.custom_appointment_fields.$get>,
) {
  return ['api', '/api/custom_appointment_fields', args] as const
}

export function getApiCustomAppointmentFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.custom_appointment_fields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomAppointmentFieldsQueryKey>
  >({
    queryKey: getApiCustomAppointmentFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_appointment_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomAppointmentFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.custom_appointment_fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomAppointmentFieldsQueryKey>
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
      ...getApiCustomAppointmentFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiCustomAppointmentFieldsMutationKey() {
  return ['api', '/api/custom_appointment_fields', 'POST'] as const
}

export function getPostApiCustomAppointmentFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_appointment_fields.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.custom_appointment_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCustomAppointmentFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.custom_appointment_fields.$post>) {
      return parseResponse(client.api.custom_appointment_fields.$post(args, options))
    },
  })
}

export function createPostApiCustomAppointmentFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.custom_appointment_fields.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.custom_appointment_fields.$post>,
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
    const mutationDefaults = getPostApiCustomAppointmentFieldsMutationOptions<
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

export function getApiCustomAppointmentFieldsIdQueryKey(
  args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>,
) {
  return ['api', '/api/custom_appointment_fields/:id', args] as const
}

export function getApiCustomAppointmentFieldsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomAppointmentFieldsIdQueryKey>
  >({
    queryKey: getApiCustomAppointmentFieldsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_appointment_fields[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomAppointmentFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomAppointmentFieldsIdQueryKey>
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
      ...getApiCustomAppointmentFieldsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiCustomAppointmentFieldsIdMutationKey() {
  return ['api', '/api/custom_appointment_fields/:id', 'PUT'] as const
}

export function getPutApiCustomAppointmentFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCustomAppointmentFieldsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$put']>,
    ) {
      return parseResponse(client.api.custom_appointment_fields[':id'].$put(args, options))
    },
  })
}

export function createPutApiCustomAppointmentFieldsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$put']>,
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
    const mutationDefaults = getPutApiCustomAppointmentFieldsIdMutationOptions<
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

export function getPatchApiCustomAppointmentFieldsIdMutationKey() {
  return ['api', '/api/custom_appointment_fields/:id', 'PATCH'] as const
}

export function getPatchApiCustomAppointmentFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCustomAppointmentFieldsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.custom_appointment_fields[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiCustomAppointmentFieldsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiCustomAppointmentFieldsIdMutationOptions<
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

export function getApiCustomDemographicsQueryKey(
  args: InferRequestType<typeof client.api.custom_demographics.$get>,
) {
  return ['api', '/api/custom_demographics', args] as const
}

export function getApiCustomDemographicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.custom_demographics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDemographicsQueryKey>
  >({
    queryKey: getApiCustomDemographicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_demographics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomDemographics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.custom_demographics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomDemographicsQueryKey>
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
      ...getApiCustomDemographicsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiCustomDemographicsMutationKey() {
  return ['api', '/api/custom_demographics', 'POST'] as const
}

export function getPostApiCustomDemographicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.custom_demographics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCustomDemographicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.custom_demographics.$post>) {
      return parseResponse(client.api.custom_demographics.$post(args, options))
    },
  })
}

export function createPostApiCustomDemographics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.custom_demographics.$post>,
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
    const mutationDefaults = getPostApiCustomDemographicsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCustomDemographicsIdQueryKey(
  args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>,
) {
  return ['api', '/api/custom_demographics/:id', args] as const
}

export function getApiCustomDemographicsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDemographicsIdQueryKey>
  >({
    queryKey: getApiCustomDemographicsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_demographics[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomDemographicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomDemographicsIdQueryKey>
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
      ...getApiCustomDemographicsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiCustomDemographicsIdMutationKey() {
  return ['api', '/api/custom_demographics/:id', 'PUT'] as const
}

export function getPutApiCustomDemographicsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.custom_demographics)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCustomDemographicsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$put']>,
    ) {
      return parseResponse(client.api.custom_demographics[':id'].$put(args, options))
    },
  })
}

export function createPutApiCustomDemographicsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.custom_demographics)[':id']['$put']>,
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
    const mutationDefaults = getPutApiCustomDemographicsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiCustomDemographicsIdMutationKey() {
  return ['api', '/api/custom_demographics/:id', 'PATCH'] as const
}

export function getPatchApiCustomDemographicsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.custom_demographics)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCustomDemographicsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.custom_demographics[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiCustomDemographicsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.custom_demographics)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiCustomDemographicsIdMutationOptions<
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

export function getApiCustomInsurancePlanNamesQueryKey(
  args: InferRequestType<typeof client.api.custom_insurance_plan_names.$get>,
) {
  return ['api', '/api/custom_insurance_plan_names', args] as const
}

export function getApiCustomInsurancePlanNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.custom_insurance_plan_names.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomInsurancePlanNamesQueryKey>
  >({
    queryKey: getApiCustomInsurancePlanNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_insurance_plan_names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomInsurancePlanNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.custom_insurance_plan_names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomInsurancePlanNamesQueryKey>
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
      ...getApiCustomInsurancePlanNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCustomInsurancePlanNamesIdQueryKey(
  args: InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>,
) {
  return ['api', '/api/custom_insurance_plan_names/:id', args] as const
}

export function getApiCustomInsurancePlanNamesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomInsurancePlanNamesIdQueryKey>
  >({
    queryKey: getApiCustomInsurancePlanNamesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_insurance_plan_names[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomInsurancePlanNamesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomInsurancePlanNamesIdQueryKey>
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
      ...getApiCustomInsurancePlanNamesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCustomVitalsQueryKey(
  args: InferRequestType<typeof client.api.custom_vitals.$get>,
) {
  return ['api', '/api/custom_vitals', args] as const
}

export function getApiCustomVitalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.custom_vitals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomVitalsQueryKey>
  >({
    queryKey: getApiCustomVitalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_vitals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCustomVitals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.custom_vitals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomVitalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCustomVitalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCustomVitalsIdQueryKey(
  args: InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>,
) {
  return ['api', '/api/custom_vitals/:id', args] as const
}

export function getApiCustomVitalsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomVitalsIdQueryKey>
  >({
    queryKey: getApiCustomVitalsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.custom_vitals[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomVitalsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomVitalsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCustomVitalsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDoctorsQueryKey(args: InferRequestType<typeof client.api.doctors.$get>) {
  return ['api', '/api/doctors', args] as const
}

export function getApiDoctorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.doctors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDoctorsQueryKey>
  >({
    queryKey: getApiDoctorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.doctors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDoctors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.doctors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDoctorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDoctorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDoctorsIdQueryKey(
  args: InferRequestType<(typeof client.api.doctors)[':id']['$get']>,
) {
  return ['api', '/api/doctors/:id', args] as const
}

export function getApiDoctorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.doctors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDoctorsIdQueryKey>
  >({
    queryKey: getApiDoctorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.doctors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDoctorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.doctors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDoctorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDoctorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDocumentsQueryKey(args: InferRequestType<typeof client.api.documents.$get>) {
  return ['api', '/api/documents', args] as const
}

export function getApiDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.documents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsQueryKey>
  >({
    queryKey: getApiDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.documents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiDocumentsMutationKey() {
  return ['api', '/api/documents', 'POST'] as const
}

export function getPostApiDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.documents.$post>) {
      return parseResponse(client.api.documents.$post(args, options))
    },
  })
}

export function createPostApiDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.documents.$post>,
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
    const mutationDefaults = getPostApiDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
) {
  return ['api', '/api/documents/:id', args] as const
}

export function getApiDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsIdQueryKey>
  >({
    queryKey: getApiDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.documents[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDocumentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiDocumentsIdMutationKey() {
  return ['api', '/api/documents/:id', 'PUT'] as const
}

export function getPutApiDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.documents)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.documents)[':id']['$put']>) {
      return parseResponse(client.api.documents[':id'].$put(args, options))
    },
  })
}

export function createPutApiDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.documents)[':id']['$put']>,
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
    const mutationDefaults = getPutApiDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiDocumentsIdMutationKey() {
  return ['api', '/api/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.documents)[':id']['$delete']>) {
      return parseResponse(client.api.documents[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.documents)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiDocumentsIdMutationKey() {
  return ['api', '/api/documents/:id', 'PATCH'] as const
}

export function getPatchApiDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.documents)[':id']['$patch']>) {
      return parseResponse(client.api.documents[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.documents)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEligibilityChecksQueryKey(
  args: InferRequestType<typeof client.api.eligibility_checks.$get>,
) {
  return ['api', '/api/eligibility_checks', args] as const
}

export function getApiEligibilityChecksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.eligibility_checks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEligibilityChecksQueryKey>
  >({
    queryKey: getApiEligibilityChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.eligibility_checks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiEligibilityChecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.eligibility_checks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEligibilityChecksQueryKey>
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
      ...getApiEligibilityChecksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiEligibilityChecksIdQueryKey(
  args: InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>,
) {
  return ['api', '/api/eligibility_checks/:id', args] as const
}

export function getApiEligibilityChecksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEligibilityChecksIdQueryKey>
  >({
    queryKey: getApiEligibilityChecksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.eligibility_checks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiEligibilityChecksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEligibilityChecksIdQueryKey>
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
      ...getApiEligibilityChecksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiEobsQueryKey(args: InferRequestType<typeof client.api.eobs.$get>) {
  return ['api', '/api/eobs', args] as const
}

export function getApiEobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.eobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEobsQueryKey>
  >({
    queryKey: getApiEobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.eobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.eobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiEobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiEobsMutationKey() {
  return ['api', '/api/eobs', 'POST'] as const
}

export function getPostApiEobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.eobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.eobs.$post>) {
      return parseResponse(client.api.eobs.$post(args, options))
    },
  })
}

export function createPostApiEobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.eobs.$post>,
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
    const mutationDefaults = getPostApiEobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEobsIdQueryKey(
  args: InferRequestType<(typeof client.api.eobs)[':id']['$get']>,
) {
  return ['api', '/api/eobs/:id', args] as const
}

export function getApiEobsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api.eobs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEobsIdQueryKey>
  >({
    queryKey: getApiEobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.eobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.eobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiFeeSchedulesQueryKey(
  args: InferRequestType<typeof client.api.fee_schedules.$get>,
) {
  return ['api', '/api/fee_schedules', args] as const
}

export function getApiFeeSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.fee_schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeeSchedulesQueryKey>
  >({
    queryKey: getApiFeeSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fee_schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFeeSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.fee_schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeeSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFeeSchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiFeeSchedulesIdQueryKey(
  args: InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>,
) {
  return ['api', '/api/fee_schedules/:id', args] as const
}

export function getApiFeeSchedulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeeSchedulesIdQueryKey>
  >({
    queryKey: getApiFeeSchedulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fee_schedules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiFeeSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeeSchedulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFeeSchedulesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiImplantableDevicesQueryKey(
  args: InferRequestType<typeof client.api.implantable_devices.$get>,
) {
  return ['api', '/api/implantable_devices', args] as const
}

export function getApiImplantableDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.implantable_devices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiImplantableDevicesQueryKey>
  >({
    queryKey: getApiImplantableDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.implantable_devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiImplantableDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.implantable_devices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiImplantableDevicesQueryKey>
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
      ...getApiImplantableDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiImplantableDevicesIdQueryKey(
  args: InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>,
) {
  return ['api', '/api/implantable_devices/:id', args] as const
}

export function getApiImplantableDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiImplantableDevicesIdQueryKey>
  >({
    queryKey: getApiImplantableDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.implantable_devices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiImplantableDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiImplantableDevicesIdQueryKey>
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
      ...getApiImplantableDevicesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiInsurancesQueryKey(
  args: InferRequestType<typeof client.api.insurances.$get>,
) {
  return ['api', '/api/insurances', args] as const
}

export function getApiInsurancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.insurances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInsurancesQueryKey>
  >({
    queryKey: getApiInsurancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.insurances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInsurances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.insurances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInsurancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInsurancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiInsurancesIdQueryKey(
  args: InferRequestType<(typeof client.api.insurances)[':id']['$get']>,
) {
  return ['api', '/api/insurances/:id', args] as const
}

export function getApiInsurancesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.insurances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInsurancesIdQueryKey>
  >({
    queryKey: getApiInsurancesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.insurances[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInsurancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.insurances)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInsurancesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInsurancesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiInventoryCategoriesQueryKey(
  args: InferRequestType<typeof client.api.inventory_categories.$get>,
) {
  return ['api', '/api/inventory_categories', args] as const
}

export function getApiInventoryCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.inventory_categories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryCategoriesQueryKey>
  >({
    queryKey: getApiInventoryCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.inventory_categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInventoryCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.inventory_categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInventoryCategoriesQueryKey>
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
      ...getApiInventoryCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiInventoryCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>,
) {
  return ['api', '/api/inventory_categories/:id', args] as const
}

export function getApiInventoryCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryCategoriesIdQueryKey>
  >({
    queryKey: getApiInventoryCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.inventory_categories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInventoryCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInventoryCategoriesIdQueryKey>
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
      ...getApiInventoryCategoriesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiInventoryVaccinesQueryKey(
  args: InferRequestType<typeof client.api.inventory_vaccines.$get>,
) {
  return ['api', '/api/inventory_vaccines', args] as const
}

export function getApiInventoryVaccinesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.inventory_vaccines.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryVaccinesQueryKey>
  >({
    queryKey: getApiInventoryVaccinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.inventory_vaccines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInventoryVaccines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.inventory_vaccines.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInventoryVaccinesQueryKey>
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
      ...getApiInventoryVaccinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiInventoryVaccinesMutationKey() {
  return ['api', '/api/inventory_vaccines', 'POST'] as const
}

export function getPostApiInventoryVaccinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.inventory_vaccines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInventoryVaccinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.inventory_vaccines.$post>) {
      return parseResponse(client.api.inventory_vaccines.$post(args, options))
    },
  })
}

export function createPostApiInventoryVaccines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.inventory_vaccines.$post>,
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
    const mutationDefaults = getPostApiInventoryVaccinesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInventoryVaccinesIdQueryKey(
  args: InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>,
) {
  return ['api', '/api/inventory_vaccines/:id', args] as const
}

export function getApiInventoryVaccinesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryVaccinesIdQueryKey>
  >({
    queryKey: getApiInventoryVaccinesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.inventory_vaccines[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInventoryVaccinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInventoryVaccinesIdQueryKey>
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
      ...getApiInventoryVaccinesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLabDocumentsQueryKey(
  args: InferRequestType<typeof client.api.lab_documents.$get>,
) {
  return ['api', '/api/lab_documents', args] as const
}

export function getApiLabDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.lab_documents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabDocumentsQueryKey>
  >({
    queryKey: getApiLabDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.lab_documents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLabDocumentsMutationKey() {
  return ['api', '/api/lab_documents', 'POST'] as const
}

export function getPostApiLabDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.lab_documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLabDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lab_documents.$post>) {
      return parseResponse(client.api.lab_documents.$post(args, options))
    },
  })
}

export function createPostApiLabDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.lab_documents.$post>,
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
    const mutationDefaults = getPostApiLabDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>,
) {
  return ['api', '/api/lab_documents/:id', args] as const
}

export function getApiLabDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabDocumentsIdQueryKey>
  >({
    queryKey: getApiLabDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_documents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLabDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabDocumentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiLabDocumentsIdMutationKey() {
  return ['api', '/api/lab_documents/:id', 'PUT'] as const
}

export function getPutApiLabDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_documents)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLabDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_documents)[':id']['$put']>) {
      return parseResponse(client.api.lab_documents[':id'].$put(args, options))
    },
  })
}

export function createPutApiLabDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_documents)[':id']['$put']>,
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
    const mutationDefaults = getPutApiLabDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiLabDocumentsIdMutationKey() {
  return ['api', '/api/lab_documents/:id', 'DELETE'] as const
}

export function getDeleteApiLabDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLabDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_documents)[':id']['$delete']>) {
      return parseResponse(client.api.lab_documents[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLabDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_documents)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLabDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiLabDocumentsIdMutationKey() {
  return ['api', '/api/lab_documents/:id', 'PATCH'] as const
}

export function getPatchApiLabDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLabDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_documents)[':id']['$patch']>) {
      return parseResponse(client.api.lab_documents[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiLabDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_documents)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiLabDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabOrdersQueryKey(args: InferRequestType<typeof client.api.lab_orders.$get>) {
  return ['api', '/api/lab_orders', args] as const
}

export function getApiLabOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.lab_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersQueryKey>
  >({
    queryKey: getApiLabOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.lab_orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLabOrdersMutationKey() {
  return ['api', '/api/lab_orders', 'POST'] as const
}

export function getPostApiLabOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.lab_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLabOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lab_orders.$post>) {
      return parseResponse(client.api.lab_orders.$post(args, options))
    },
  })
}

export function createPostApiLabOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.lab_orders.$post>,
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
    const mutationDefaults = getPostApiLabOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabOrdersIdQueryKey(
  args: InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>,
) {
  return ['api', '/api/lab_orders/:id', args] as const
}

export function getApiLabOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersIdQueryKey>
  >({
    queryKey: getApiLabOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiLabOrdersIdMutationKey() {
  return ['api', '/api/lab_orders/:id', 'PUT'] as const
}

export function getPutApiLabOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_orders)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLabOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_orders)[':id']['$put']>) {
      return parseResponse(client.api.lab_orders[':id'].$put(args, options))
    },
  })
}

export function createPutApiLabOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_orders)[':id']['$put']>,
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
    const mutationDefaults = getPutApiLabOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiLabOrdersIdMutationKey() {
  return ['api', '/api/lab_orders/:id', 'DELETE'] as const
}

export function getDeleteApiLabOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_orders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLabOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_orders)[':id']['$delete']>) {
      return parseResponse(client.api.lab_orders[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLabOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_orders)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLabOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiLabOrdersIdMutationKey() {
  return ['api', '/api/lab_orders/:id', 'PATCH'] as const
}

export function getPatchApiLabOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLabOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_orders)[':id']['$patch']>) {
      return parseResponse(client.api.lab_orders[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiLabOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_orders)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiLabOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabOrdersSummaryQueryKey(
  args: InferRequestType<typeof client.api.lab_orders_summary.$get>,
) {
  return ['api', '/api/lab_orders_summary', args] as const
}

export function getApiLabOrdersSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.lab_orders_summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersSummaryQueryKey>
  >({
    queryKey: getApiLabOrdersSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_orders_summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLabOrdersSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.lab_orders_summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabOrdersSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabOrdersSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiLabOrdersSummaryIdQueryKey(
  args: InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>,
) {
  return ['api', '/api/lab_orders_summary/:id', args] as const
}

export function getApiLabOrdersSummaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersSummaryIdQueryKey>
  >({
    queryKey: getApiLabOrdersSummaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_orders_summary[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLabOrdersSummaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabOrdersSummaryIdQueryKey>
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
      ...getApiLabOrdersSummaryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLabResultsQueryKey(
  args: InferRequestType<typeof client.api.lab_results.$get>,
) {
  return ['api', '/api/lab_results', args] as const
}

export function getApiLabResultsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.lab_results.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabResultsQueryKey>
  >({
    queryKey: getApiLabResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_results.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.lab_results.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabResultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLabResultsMutationKey() {
  return ['api', '/api/lab_results', 'POST'] as const
}

export function getPostApiLabResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.lab_results.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLabResultsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lab_results.$post>) {
      return parseResponse(client.api.lab_results.$post(args, options))
    },
  })
}

export function createPostApiLabResults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.lab_results.$post>,
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
    const mutationDefaults = getPostApiLabResultsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabResultsIdQueryKey(
  args: InferRequestType<(typeof client.api.lab_results)[':id']['$get']>,
) {
  return ['api', '/api/lab_results/:id', args] as const
}

export function getApiLabResultsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lab_results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabResultsIdQueryKey>
  >({
    queryKey: getApiLabResultsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_results[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLabResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lab_results)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabResultsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabResultsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiLabResultsIdMutationKey() {
  return ['api', '/api/lab_results/:id', 'PUT'] as const
}

export function getPutApiLabResultsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_results)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLabResultsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_results)[':id']['$put']>) {
      return parseResponse(client.api.lab_results[':id'].$put(args, options))
    },
  })
}

export function createPutApiLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_results)[':id']['$put']>,
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
    const mutationDefaults = getPutApiLabResultsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiLabResultsIdMutationKey() {
  return ['api', '/api/lab_results/:id', 'DELETE'] as const
}

export function getDeleteApiLabResultsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_results)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLabResultsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_results)[':id']['$delete']>) {
      return parseResponse(client.api.lab_results[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_results)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLabResultsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiLabResultsIdMutationKey() {
  return ['api', '/api/lab_results/:id', 'PATCH'] as const
}

export function getPatchApiLabResultsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_results)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLabResultsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_results)[':id']['$patch']>) {
      return parseResponse(client.api.lab_results[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_results)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiLabResultsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabTestsQueryKey(args: InferRequestType<typeof client.api.lab_tests.$get>) {
  return ['api', '/api/lab_tests', args] as const
}

export function getApiLabTestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.lab_tests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabTestsQueryKey>
  >({
    queryKey: getApiLabTestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_tests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabTests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.lab_tests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabTestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabTestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLabTestsMutationKey() {
  return ['api', '/api/lab_tests', 'POST'] as const
}

export function getPostApiLabTestsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.lab_tests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLabTestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.lab_tests.$post>) {
      return parseResponse(client.api.lab_tests.$post(args, options))
    },
  })
}

export function createPostApiLabTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.lab_tests.$post>,
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
    const mutationDefaults = getPostApiLabTestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLabTestsIdQueryKey(
  args: InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>,
) {
  return ['api', '/api/lab_tests/:id', args] as const
}

export function getApiLabTestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabTestsIdQueryKey>
  >({
    queryKey: getApiLabTestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lab_tests[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLabTestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLabTestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLabTestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiLabTestsIdMutationKey() {
  return ['api', '/api/lab_tests/:id', 'PUT'] as const
}

export function getPutApiLabTestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_tests)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLabTestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_tests)[':id']['$put']>) {
      return parseResponse(client.api.lab_tests[':id'].$put(args, options))
    },
  })
}

export function createPutApiLabTestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_tests)[':id']['$put']>,
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
    const mutationDefaults = getPutApiLabTestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiLabTestsIdMutationKey() {
  return ['api', '/api/lab_tests/:id', 'DELETE'] as const
}

export function getDeleteApiLabTestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_tests)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLabTestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_tests)[':id']['$delete']>) {
      return parseResponse(client.api.lab_tests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLabTestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_tests)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLabTestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiLabTestsIdMutationKey() {
  return ['api', '/api/lab_tests/:id', 'PATCH'] as const
}

export function getPatchApiLabTestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.lab_tests)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLabTestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.lab_tests)[':id']['$patch']>) {
      return parseResponse(client.api.lab_tests[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiLabTestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.lab_tests)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiLabTestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLineItemsQueryKey(args: InferRequestType<typeof client.api.line_items.$get>) {
  return ['api', '/api/line_items', args] as const
}

export function getApiLineItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.line_items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLineItemsQueryKey>
  >({
    queryKey: getApiLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.line_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLineItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.line_items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLineItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLineItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLineItemsMutationKey() {
  return ['api', '/api/line_items', 'POST'] as const
}

export function getPostApiLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.line_items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLineItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.line_items.$post>) {
      return parseResponse(client.api.line_items.$post(args, options))
    },
  })
}

export function createPostApiLineItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.line_items.$post>,
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
    const mutationDefaults = getPostApiLineItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLineItemsIdQueryKey(
  args: InferRequestType<(typeof client.api.line_items)[':id']['$get']>,
) {
  return ['api', '/api/line_items/:id', args] as const
}

export function getApiLineItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.line_items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLineItemsIdQueryKey>
  >({
    queryKey: getApiLineItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.line_items[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLineItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.line_items)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLineItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLineItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiLineItemsIdMutationKey() {
  return ['api', '/api/line_items/:id', 'PUT'] as const
}

export function getPutApiLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.line_items)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLineItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.line_items)[':id']['$put']>) {
      return parseResponse(client.api.line_items[':id'].$put(args, options))
    },
  })
}

export function createPutApiLineItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.line_items)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.line_items)[':id']['$put']>,
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
    const mutationDefaults = getPutApiLineItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiLineItemsIdMutationKey() {
  return ['api', '/api/line_items/:id', 'DELETE'] as const
}

export function getDeleteApiLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.line_items)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.line_items)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLineItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.line_items)[':id']['$delete']>) {
      return parseResponse(client.api.line_items[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiLineItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.line_items)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.line_items)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLineItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiLineItemsIdMutationKey() {
  return ['api', '/api/line_items/:id', 'PATCH'] as const
}

export function getPatchApiLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.line_items)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLineItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.line_items)[':id']['$patch']>) {
      return parseResponse(client.api.line_items[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiLineItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.line_items)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.line_items)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiLineItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMedicationsQueryKey(
  args: InferRequestType<typeof client.api.medications.$get>,
) {
  return ['api', '/api/medications', args] as const
}

export function getApiMedicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.medications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMedicationsQueryKey>
  >({
    queryKey: getApiMedicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.medications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMedications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.medications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMedicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMedicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiMedicationsMutationKey() {
  return ['api', '/api/medications', 'POST'] as const
}

export function getPostApiMedicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.medications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMedicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.medications.$post>) {
      return parseResponse(client.api.medications.$post(args, options))
    },
  })
}

export function createPostApiMedications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.medications.$post>,
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
    const mutationDefaults = getPostApiMedicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMedicationsIdQueryKey(
  args: InferRequestType<(typeof client.api.medications)[':id']['$get']>,
) {
  return ['api', '/api/medications/:id', args] as const
}

export function getApiMedicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.medications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMedicationsIdQueryKey>
  >({
    queryKey: getApiMedicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.medications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMedicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.medications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMedicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMedicationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiMedicationsIdMutationKey() {
  return ['api', '/api/medications/:id', 'PUT'] as const
}

export function getPutApiMedicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.medications)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.medications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiMedicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.medications)[':id']['$put']>) {
      return parseResponse(client.api.medications[':id'].$put(args, options))
    },
  })
}

export function createPutApiMedicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.medications)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.medications)[':id']['$put']>,
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
    const mutationDefaults = getPutApiMedicationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiMedicationsIdMutationKey() {
  return ['api', '/api/medications/:id', 'PATCH'] as const
}

export function getPatchApiMedicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.medications)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.medications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMedicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.medications)[':id']['$patch']>) {
      return parseResponse(client.api.medications[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiMedicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.medications)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.medications)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiMedicationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiMedicationsIdAppendToPharmacyNoteMutationKey() {
  return ['api', '/api/medications/:id/append_to_pharmacy_note', 'PATCH'] as const
}

export function getPatchApiMedicationsIdAppendToPharmacyNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.medications)[':id']['append_to_pharmacy_note']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.medications)[':id']['append_to_pharmacy_note']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMedicationsIdAppendToPharmacyNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.medications)[':id']['append_to_pharmacy_note']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.medications[':id'].append_to_pharmacy_note.$patch(args, options),
      )
    },
  })
}

export function createPatchApiMedicationsIdAppendToPharmacyNote<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.medications)[':id']['append_to_pharmacy_note']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.medications)[':id']['append_to_pharmacy_note']['$patch']
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
    const mutationDefaults = getPatchApiMedicationsIdAppendToPharmacyNoteMutationOptions<
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

export function getApiMessagesQueryKey(args: InferRequestType<typeof client.api.messages.$get>) {
  return ['api', '/api/messages', args] as const
}

export function getApiMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMessagesQueryKey>
  >({
    queryKey: getApiMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.messages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiMessagesMutationKey() {
  return ['api', '/api/messages', 'POST'] as const
}

export function getPostApiMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.messages.$post>) {
      return parseResponse(client.api.messages.$post(args, options))
    },
  })
}

export function createPostApiMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.messages.$post>,
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
    const mutationDefaults = getPostApiMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMessagesIdQueryKey(
  args: InferRequestType<(typeof client.api.messages)[':id']['$get']>,
) {
  return ['api', '/api/messages/:id', args] as const
}

export function getApiMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessagesIdQueryKey>
  >({
    queryKey: getApiMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.messages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMessagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMessagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiMessagesIdMutationKey() {
  return ['api', '/api/messages/:id', 'PUT'] as const
}

export function getPutApiMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.messages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.messages)[':id']['$put']>) {
      return parseResponse(client.api.messages[':id'].$put(args, options))
    },
  })
}

export function createPutApiMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$put']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.messages)[':id']['$put']>,
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
    const mutationDefaults = getPutApiMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiMessagesIdMutationKey() {
  return ['api', '/api/messages/:id', 'DELETE'] as const
}

export function getDeleteApiMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.messages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.messages)[':id']['$delete']>) {
      return parseResponse(client.api.messages[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.messages)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.messages)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiMessagesIdMutationKey() {
  return ['api', '/api/messages/:id', 'PATCH'] as const
}

export function getPatchApiMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.messages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.messages)[':id']['$patch']>) {
      return parseResponse(client.api.messages[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.messages)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.messages)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOfficesQueryKey(args: InferRequestType<typeof client.api.offices.$get>) {
  return ['api', '/api/offices', args] as const
}

export function getApiOfficesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.offices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOfficesQueryKey>
  >({
    queryKey: getApiOfficesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.offices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOffices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.offices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOfficesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOfficesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiOfficesIdQueryKey(
  args: InferRequestType<(typeof client.api.offices)[':id']['$get']>,
) {
  return ['api', '/api/offices/:id', args] as const
}

export function getApiOfficesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.offices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOfficesIdQueryKey>
  >({
    queryKey: getApiOfficesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.offices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOfficesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.offices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOfficesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOfficesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiOfficesIdMutationKey() {
  return ['api', '/api/offices/:id', 'PUT'] as const
}

export function getPutApiOfficesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.offices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiOfficesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.offices)[':id']['$put']>) {
      return parseResponse(client.api.offices[':id'].$put(args, options))
    },
  })
}

export function createPutApiOfficesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$put']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.offices)[':id']['$put']>,
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
    const mutationDefaults = getPutApiOfficesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiOfficesIdMutationKey() {
  return ['api', '/api/offices/:id', 'PATCH'] as const
}

export function getPatchApiOfficesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.offices)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOfficesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.offices)[':id']['$patch']>) {
      return parseResponse(client.api.offices[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiOfficesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.offices)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.offices)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiOfficesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiOfficesIdAddExamRoomMutationKey() {
  return ['api', '/api/offices/:id/add_exam_room', 'POST'] as const
}

export function getPostApiOfficesIdAddExamRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.offices)[':id']['add_exam_room']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.offices)[':id']['add_exam_room']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOfficesIdAddExamRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.offices)[':id']['add_exam_room']['$post']>,
    ) {
      return parseResponse(client.api.offices[':id'].add_exam_room.$post(args, options))
    },
  })
}

export function createPostApiOfficesIdAddExamRoom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.offices)[':id']['add_exam_room']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.offices)[':id']['add_exam_room']['$post']>,
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
    const mutationDefaults = getPostApiOfficesIdAddExamRoomMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientCommunicationsQueryKey(
  args: InferRequestType<typeof client.api.patient_communications.$get>,
) {
  return ['api', '/api/patient_communications', args] as const
}

export function getApiPatientCommunicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_communications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientCommunicationsQueryKey>
  >({
    queryKey: getApiPatientCommunicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_communications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientCommunications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_communications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientCommunicationsQueryKey>
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
      ...getApiPatientCommunicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientCommunicationsMutationKey() {
  return ['api', '/api/patient_communications', 'POST'] as const
}

export function getPostApiPatientCommunicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_communications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientCommunicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_communications.$post>) {
      return parseResponse(client.api.patient_communications.$post(args, options))
    },
  })
}

export function createPostApiPatientCommunications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patient_communications.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_communications.$post>,
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
    const mutationDefaults = getPostApiPatientCommunicationsMutationOptions<
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

export function getApiPatientCommunicationsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>,
) {
  return ['api', '/api/patient_communications/:id', args] as const
}

export function getApiPatientCommunicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientCommunicationsIdQueryKey>
  >({
    queryKey: getApiPatientCommunicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_communications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientCommunicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientCommunicationsIdQueryKey>
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
      ...getApiPatientCommunicationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientCommunicationsIdMutationKey() {
  return ['api', '/api/patient_communications/:id', 'PUT'] as const
}

export function getPutApiPatientCommunicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_communications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientCommunicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_communications)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_communications[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientCommunicationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_communications)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientCommunicationsIdMutationOptions<
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

export function getPatchApiPatientCommunicationsIdMutationKey() {
  return ['api', '/api/patient_communications/:id', 'PATCH'] as const
}

export function getPatchApiPatientCommunicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_communications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientCommunicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_communications)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_communications[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientCommunicationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_communications)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientCommunicationsIdMutationOptions<
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

export function getApiPatientFlagTypesQueryKey(
  args: InferRequestType<typeof client.api.patient_flag_types.$get>,
) {
  return ['api', '/api/patient_flag_types', args] as const
}

export function getApiPatientFlagTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_flag_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientFlagTypesQueryKey>
  >({
    queryKey: getApiPatientFlagTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_flag_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientFlagTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_flag_types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientFlagTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientFlagTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPatientFlagTypesMutationKey() {
  return ['api', '/api/patient_flag_types', 'POST'] as const
}

export function getPostApiPatientFlagTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_flag_types.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientFlagTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_flag_types.$post>) {
      return parseResponse(client.api.patient_flag_types.$post(args, options))
    },
  })
}

export function createPostApiPatientFlagTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_flag_types.$post>,
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
    const mutationDefaults = getPostApiPatientFlagTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientFlagTypesIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>,
) {
  return ['api', '/api/patient_flag_types/:id', args] as const
}

export function getApiPatientFlagTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientFlagTypesIdQueryKey>
  >({
    queryKey: getApiPatientFlagTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_flag_types[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientFlagTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientFlagTypesIdQueryKey>
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
      ...getApiPatientFlagTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientFlagTypesIdMutationKey() {
  return ['api', '/api/patient_flag_types/:id', 'PUT'] as const
}

export function getPutApiPatientFlagTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_flag_types)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientFlagTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_flag_types[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientFlagTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_flag_types)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientFlagTypesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiPatientFlagTypesIdMutationKey() {
  return ['api', '/api/patient_flag_types/:id', 'PATCH'] as const
}

export function getPatchApiPatientFlagTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_flag_types)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientFlagTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_flag_types[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientFlagTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_flag_types)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientFlagTypesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientInterventionsQueryKey(
  args: InferRequestType<typeof client.api.patient_interventions.$get>,
) {
  return ['api', '/api/patient_interventions', args] as const
}

export function getApiPatientInterventionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_interventions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientInterventionsQueryKey>
  >({
    queryKey: getApiPatientInterventionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_interventions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientInterventions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_interventions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientInterventionsQueryKey>
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
      ...getApiPatientInterventionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientInterventionsMutationKey() {
  return ['api', '/api/patient_interventions', 'POST'] as const
}

export function getPostApiPatientInterventionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_interventions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientInterventionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_interventions.$post>) {
      return parseResponse(client.api.patient_interventions.$post(args, options))
    },
  })
}

export function createPostApiPatientInterventions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_interventions.$post>,
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
    const mutationDefaults = getPostApiPatientInterventionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientInterventionsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>,
) {
  return ['api', '/api/patient_interventions/:id', args] as const
}

export function getApiPatientInterventionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientInterventionsIdQueryKey>
  >({
    queryKey: getApiPatientInterventionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_interventions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientInterventionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientInterventionsIdQueryKey>
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
      ...getApiPatientInterventionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientInterventionsIdMutationKey() {
  return ['api', '/api/patient_interventions/:id', 'PUT'] as const
}

export function getPutApiPatientInterventionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_interventions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientInterventionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_interventions[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientInterventionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_interventions)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientInterventionsIdMutationOptions<
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

export function getPatchApiPatientInterventionsIdMutationKey() {
  return ['api', '/api/patient_interventions/:id', 'PATCH'] as const
}

export function getPatchApiPatientInterventionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_interventions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientInterventionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_interventions[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientInterventionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_interventions)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientInterventionsIdMutationOptions<
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

export function getApiPatientLabResultsQueryKey(
  args: InferRequestType<typeof client.api.patient_lab_results.$get>,
) {
  return ['api', '/api/patient_lab_results', args] as const
}

export function getApiPatientLabResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_lab_results.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientLabResultsQueryKey>
  >({
    queryKey: getApiPatientLabResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_lab_results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientLabResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_lab_results.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientLabResultsQueryKey>
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
      ...getApiPatientLabResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientLabResultsMutationKey() {
  return ['api', '/api/patient_lab_results', 'POST'] as const
}

export function getPostApiPatientLabResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_lab_results.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientLabResultsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_lab_results.$post>) {
      return parseResponse(client.api.patient_lab_results.$post(args, options))
    },
  })
}

export function createPostApiPatientLabResults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_lab_results.$post>,
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
    const mutationDefaults = getPostApiPatientLabResultsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientLabResultsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>,
) {
  return ['api', '/api/patient_lab_results/:id', args] as const
}

export function getApiPatientLabResultsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientLabResultsIdQueryKey>
  >({
    queryKey: getApiPatientLabResultsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_lab_results[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientLabResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientLabResultsIdQueryKey>
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
      ...getApiPatientLabResultsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientLabResultsIdMutationKey() {
  return ['api', '/api/patient_lab_results/:id', 'PUT'] as const
}

export function getPutApiPatientLabResultsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_lab_results)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientLabResultsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_lab_results[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_lab_results)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientLabResultsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiPatientLabResultsIdMutationKey() {
  return ['api', '/api/patient_lab_results/:id', 'DELETE'] as const
}

export function getDeleteApiPatientLabResultsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_lab_results)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatientLabResultsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.patient_lab_results[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiPatientLabResultsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_lab_results)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiPatientLabResultsIdMutationOptions<
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

export function getPatchApiPatientLabResultsIdMutationKey() {
  return ['api', '/api/patient_lab_results/:id', 'PATCH'] as const
}

export function getPatchApiPatientLabResultsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_lab_results)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientLabResultsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_lab_results[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_lab_results)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientLabResultsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientMessagesQueryKey(
  args: InferRequestType<typeof client.api.patient_messages.$get>,
) {
  return ['api', '/api/patient_messages', args] as const
}

export function getApiPatientMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.patient_messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientMessagesQueryKey>
  >({
    queryKey: getApiPatientMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPatientMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_messages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPatientMessagesMutationKey() {
  return ['api', '/api/patient_messages', 'POST'] as const
}

export function getPostApiPatientMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_messages.$post>) {
      return parseResponse(client.api.patient_messages.$post(args, options))
    },
  })
}

export function createPostApiPatientMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_messages.$post>,
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
    const mutationDefaults = getPostApiPatientMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientMessagesIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>,
) {
  return ['api', '/api/patient_messages/:id', args] as const
}

export function getApiPatientMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientMessagesIdQueryKey>
  >({
    queryKey: getApiPatientMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_messages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientMessagesIdQueryKey>
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
      ...getApiPatientMessagesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientMessagesIdMutationKey() {
  return ['api', '/api/patient_messages/:id', 'PUT'] as const
}

export function getPutApiPatientMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_messages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.patient_messages)[':id']['$put']>) {
      return parseResponse(client.api.patient_messages[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_messages)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiPatientMessagesIdMutationKey() {
  return ['api', '/api/patient_messages/:id', 'PATCH'] as const
}

export function getPatchApiPatientMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_messages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_messages)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_messages[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_messages)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientPaymentLogQueryKey(
  args: InferRequestType<typeof client.api.patient_payment_log.$get>,
) {
  return ['api', '/api/patient_payment_log', args] as const
}

export function getApiPatientPaymentLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_payment_log.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentLogQueryKey>
  >({
    queryKey: getApiPatientPaymentLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_payment_log.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientPaymentLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_payment_log.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientPaymentLogQueryKey>
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
      ...getApiPatientPaymentLogQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPatientPaymentLogIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>,
) {
  return ['api', '/api/patient_payment_log/:id', args] as const
}

export function getApiPatientPaymentLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentLogIdQueryKey>
  >({
    queryKey: getApiPatientPaymentLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_payment_log[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientPaymentLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientPaymentLogIdQueryKey>
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
      ...getApiPatientPaymentLogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPatientPaymentsQueryKey(
  args: InferRequestType<typeof client.api.patient_payments.$get>,
) {
  return ['api', '/api/patient_payments', args] as const
}

export function getApiPatientPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.patient_payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentsQueryKey>
  >({
    queryKey: getApiPatientPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPatientPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPatientPaymentsMutationKey() {
  return ['api', '/api/patient_payments', 'POST'] as const
}

export function getPostApiPatientPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_payments.$post>) {
      return parseResponse(client.api.patient_payments.$post(args, options))
    },
  })
}

export function createPostApiPatientPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_payments.$post>,
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
    const mutationDefaults = getPostApiPatientPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>,
) {
  return ['api', '/api/patient_payments/:id', args] as const
}

export function getApiPatientPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentsIdQueryKey>
  >({
    queryKey: getApiPatientPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_payments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientPaymentsIdQueryKey>
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
      ...getApiPatientPaymentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPatientPhysicalExamsQueryKey(
  args: InferRequestType<typeof client.api.patient_physical_exams.$get>,
) {
  return ['api', '/api/patient_physical_exams', args] as const
}

export function getApiPatientPhysicalExamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_physical_exams.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPhysicalExamsQueryKey>
  >({
    queryKey: getApiPatientPhysicalExamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_physical_exams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientPhysicalExams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_physical_exams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientPhysicalExamsQueryKey>
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
      ...getApiPatientPhysicalExamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientPhysicalExamsMutationKey() {
  return ['api', '/api/patient_physical_exams', 'POST'] as const
}

export function getPostApiPatientPhysicalExamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_physical_exams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientPhysicalExamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_physical_exams.$post>) {
      return parseResponse(client.api.patient_physical_exams.$post(args, options))
    },
  })
}

export function createPostApiPatientPhysicalExams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patient_physical_exams.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_physical_exams.$post>,
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
    const mutationDefaults = getPostApiPatientPhysicalExamsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientPhysicalExamsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>,
) {
  return ['api', '/api/patient_physical_exams/:id', args] as const
}

export function getApiPatientPhysicalExamsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPhysicalExamsIdQueryKey>
  >({
    queryKey: getApiPatientPhysicalExamsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_physical_exams[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientPhysicalExamsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientPhysicalExamsIdQueryKey>
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
      ...getApiPatientPhysicalExamsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientPhysicalExamsIdMutationKey() {
  return ['api', '/api/patient_physical_exams/:id', 'PUT'] as const
}

export function getPutApiPatientPhysicalExamsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientPhysicalExamsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_physical_exams[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientPhysicalExamsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientPhysicalExamsIdMutationOptions<
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

export function getPatchApiPatientPhysicalExamsIdMutationKey() {
  return ['api', '/api/patient_physical_exams/:id', 'PATCH'] as const
}

export function getPatchApiPatientPhysicalExamsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientPhysicalExamsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_physical_exams[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientPhysicalExamsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientPhysicalExamsIdMutationOptions<
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

export function getApiPatientRiskAssessmentsQueryKey(
  args: InferRequestType<typeof client.api.patient_risk_assessments.$get>,
) {
  return ['api', '/api/patient_risk_assessments', args] as const
}

export function getApiPatientRiskAssessmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_risk_assessments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientRiskAssessmentsQueryKey>
  >({
    queryKey: getApiPatientRiskAssessmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_risk_assessments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientRiskAssessments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_risk_assessments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientRiskAssessmentsQueryKey>
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
      ...getApiPatientRiskAssessmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientRiskAssessmentsMutationKey() {
  return ['api', '/api/patient_risk_assessments', 'POST'] as const
}

export function getPostApiPatientRiskAssessmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_risk_assessments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_risk_assessments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientRiskAssessmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_risk_assessments.$post>) {
      return parseResponse(client.api.patient_risk_assessments.$post(args, options))
    },
  })
}

export function createPostApiPatientRiskAssessments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patient_risk_assessments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_risk_assessments.$post>,
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
    const mutationDefaults = getPostApiPatientRiskAssessmentsMutationOptions<
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

export function getApiPatientRiskAssessmentsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>,
) {
  return ['api', '/api/patient_risk_assessments/:id', args] as const
}

export function getApiPatientRiskAssessmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientRiskAssessmentsIdQueryKey>
  >({
    queryKey: getApiPatientRiskAssessmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_risk_assessments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientRiskAssessmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientRiskAssessmentsIdQueryKey>
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
      ...getApiPatientRiskAssessmentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientRiskAssessmentsIdMutationKey() {
  return ['api', '/api/patient_risk_assessments/:id', 'PUT'] as const
}

export function getPutApiPatientRiskAssessmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientRiskAssessmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_risk_assessments[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientRiskAssessmentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientRiskAssessmentsIdMutationOptions<
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

export function getPatchApiPatientRiskAssessmentsIdMutationKey() {
  return ['api', '/api/patient_risk_assessments/:id', 'PATCH'] as const
}

export function getPatchApiPatientRiskAssessmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientRiskAssessmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_risk_assessments[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientRiskAssessmentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientRiskAssessmentsIdMutationOptions<
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

export function getApiPatientVaccineRecordsQueryKey(
  args: InferRequestType<typeof client.api.patient_vaccine_records.$get>,
) {
  return ['api', '/api/patient_vaccine_records', args] as const
}

export function getApiPatientVaccineRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patient_vaccine_records.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientVaccineRecordsQueryKey>
  >({
    queryKey: getApiPatientVaccineRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_vaccine_records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientVaccineRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patient_vaccine_records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientVaccineRecordsQueryKey>
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
      ...getApiPatientVaccineRecordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientVaccineRecordsMutationKey() {
  return ['api', '/api/patient_vaccine_records', 'POST'] as const
}

export function getPostApiPatientVaccineRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_vaccine_records.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patient_vaccine_records.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientVaccineRecordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patient_vaccine_records.$post>) {
      return parseResponse(client.api.patient_vaccine_records.$post(args, options))
    },
  })
}

export function createPostApiPatientVaccineRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patient_vaccine_records.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.patient_vaccine_records.$post>,
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
    const mutationDefaults = getPostApiPatientVaccineRecordsMutationOptions<
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

export function getApiPatientVaccineRecordsIdQueryKey(
  args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>,
) {
  return ['api', '/api/patient_vaccine_records/:id', args] as const
}

export function getApiPatientVaccineRecordsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientVaccineRecordsIdQueryKey>
  >({
    queryKey: getApiPatientVaccineRecordsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patient_vaccine_records[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientVaccineRecordsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientVaccineRecordsIdQueryKey>
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
      ...getApiPatientVaccineRecordsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientVaccineRecordsIdMutationKey() {
  return ['api', '/api/patient_vaccine_records/:id', 'PUT'] as const
}

export function getPutApiPatientVaccineRecordsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientVaccineRecordsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$put']>,
    ) {
      return parseResponse(client.api.patient_vaccine_records[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientVaccineRecordsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientVaccineRecordsIdMutationOptions<
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

export function getPatchApiPatientVaccineRecordsIdMutationKey() {
  return ['api', '/api/patient_vaccine_records/:id', 'PATCH'] as const
}

export function getPatchApiPatientVaccineRecordsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientVaccineRecordsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patient_vaccine_records[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientVaccineRecordsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientVaccineRecordsIdMutationOptions<
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

export function getApiPatientsQueryKey(args: InferRequestType<typeof client.api.patients.$get>) {
  return ['api', '/api/patients', args] as const
}

export function getApiPatientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.patients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPatientsQueryKey>
  >({
    queryKey: getApiPatientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPatients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPatientsMutationKey() {
  return ['api', '/api/patients', 'POST'] as const
}

export function getPostApiPatientsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.patients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patients.$post>) {
      return parseResponse(client.api.patients.$post(args, options))
    },
  })
}

export function createPostApiPatients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.patients.$post>,
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
    const mutationDefaults = getPostApiPatientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientsIdQueryKey(
  args: InferRequestType<(typeof client.api.patients)[':id']['$get']>,
) {
  return ['api', '/api/patients/:id', args] as const
}

export function getApiPatientsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdQueryKey>
  >({
    queryKey: getApiPatientsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPatientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patients)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiPatientsIdMutationKey() {
  return ['api', '/api/patients/:id', 'PUT'] as const
}

export function getPutApiPatientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.patients)[':id']['$put']>) {
      return parseResponse(client.api.patients[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$put']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiPatientsIdMutationKey() {
  return ['api', '/api/patients/:id', 'DELETE'] as const
}

export function getDeleteApiPatientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.patients)[':id']['$delete']>) {
      return parseResponse(client.api.patients[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiPatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiPatientsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiPatientsIdMutationKey() {
  return ['api', '/api/patients/:id', 'PATCH'] as const
}

export function getPatchApiPatientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.patients)[':id']['$patch']>) {
      return parseResponse(client.api.patients[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientsIdCcdaQueryKey(
  args: InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>,
) {
  return ['api', '/api/patients/:id/ccda', args] as const
}

export function getApiPatientsIdCcdaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdCcdaQueryKey>
  >({
    queryKey: getApiPatientsIdCcdaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients[':id'].ccda.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientsIdCcda<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsIdCcdaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientsIdCcdaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPatientsIdOnpatientAccessQueryKey(
  args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>,
) {
  return ['api', '/api/patients/:id/onpatient_access', args] as const
}

export function getApiPatientsIdOnpatientAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdOnpatientAccessQueryKey>
  >({
    queryKey: getApiPatientsIdOnpatientAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients[':id'].onpatient_access.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientsIdOnpatientAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsIdOnpatientAccessQueryKey>
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
      ...getApiPatientsIdOnpatientAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiPatientsIdOnpatientAccessMutationKey() {
  return ['api', '/api/patients/:id/onpatient_access', 'POST'] as const
}

export function getPostApiPatientsIdOnpatientAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientsIdOnpatientAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>,
    ) {
      return parseResponse(client.api.patients[':id'].onpatient_access.$post(args, options))
    },
  })
}

export function createPostApiPatientsIdOnpatientAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>,
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
    const mutationDefaults = getPostApiPatientsIdOnpatientAccessMutationOptions<
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

export function getDeleteApiPatientsIdOnpatientAccessMutationKey() {
  return ['api', '/api/patients/:id/onpatient_access', 'DELETE'] as const
}

export function getDeleteApiPatientsIdOnpatientAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatientsIdOnpatientAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$delete']>,
    ) {
      return parseResponse(client.api.patients[':id'].onpatient_access.$delete(args, options))
    },
  })
}

export function createDeleteApiPatientsIdOnpatientAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$delete']>,
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
    const mutationDefaults = getDeleteApiPatientsIdOnpatientAccessMutationOptions<
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

export function getApiPatientsIdQrda1QueryKey(
  args: InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>,
) {
  return ['api', '/api/patients/:id/qrda1', args] as const
}

export function getApiPatientsIdQrda1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdQrda1QueryKey>
  >({
    queryKey: getApiPatientsIdQrda1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients[':id'].qrda1.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientsIdQrda1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsIdQrda1QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientsIdQrda1QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPatientsSummaryQueryKey(
  args: InferRequestType<typeof client.api.patients_summary.$get>,
) {
  return ['api', '/api/patients_summary', args] as const
}

export function getApiPatientsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.patients_summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsSummaryQueryKey>
  >({
    queryKey: getApiPatientsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients_summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPatientsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patients_summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatientsSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPatientsSummaryMutationKey() {
  return ['api', '/api/patients_summary', 'POST'] as const
}

export function getPostApiPatientsSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.patients_summary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatientsSummaryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patients_summary.$post>) {
      return parseResponse(client.api.patients_summary.$post(args, options))
    },
  })
}

export function createPostApiPatientsSummary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.patients_summary.$post>,
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
    const mutationDefaults = getPostApiPatientsSummaryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPatientsSummaryIdQueryKey(
  args: InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>,
) {
  return ['api', '/api/patients_summary/:id', args] as const
}

export function getApiPatientsSummaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsSummaryIdQueryKey>
  >({
    queryKey: getApiPatientsSummaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patients_summary[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPatientsSummaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatientsSummaryIdQueryKey>
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
      ...getApiPatientsSummaryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPatientsSummaryIdMutationKey() {
  return ['api', '/api/patients_summary/:id', 'PUT'] as const
}

export function getPutApiPatientsSummaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients_summary)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPatientsSummaryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.patients_summary)[':id']['$put']>) {
      return parseResponse(client.api.patients_summary[':id'].$put(args, options))
    },
  })
}

export function createPutApiPatientsSummaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients_summary)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPatientsSummaryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiPatientsSummaryIdMutationKey() {
  return ['api', '/api/patients_summary/:id', 'DELETE'] as const
}

export function getDeleteApiPatientsSummaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients_summary)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatientsSummaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patients_summary)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.patients_summary[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiPatientsSummaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients_summary)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiPatientsSummaryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiPatientsSummaryIdMutationKey() {
  return ['api', '/api/patients_summary/:id', 'PATCH'] as const
}

export function getPatchApiPatientsSummaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.patients_summary)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatientsSummaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patients_summary)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.patients_summary[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiPatientsSummaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.patients_summary)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiPatientsSummaryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPrescriptionMessagesQueryKey(
  args: InferRequestType<typeof client.api.prescription_messages.$get>,
) {
  return ['api', '/api/prescription_messages', args] as const
}

export function getApiPrescriptionMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.prescription_messages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.prescription_messages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.prescription_messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPrescriptionMessagesQueryKey>
  >({
    queryKey: getApiPrescriptionMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.prescription_messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPrescriptionMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.prescription_messages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.prescription_messages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.prescription_messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPrescriptionMessagesQueryKey>
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
      ...getApiPrescriptionMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPrescriptionMessagesIdQueryKey(
  args: InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>,
) {
  return ['api', '/api/prescription_messages/:id', args] as const
}

export function getApiPrescriptionMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPrescriptionMessagesIdQueryKey>
  >({
    queryKey: getApiPrescriptionMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.prescription_messages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPrescriptionMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPrescriptionMessagesIdQueryKey>
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
      ...getApiPrescriptionMessagesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiProblemsQueryKey(args: InferRequestType<typeof client.api.problems.$get>) {
  return ['api', '/api/problems', args] as const
}

export function getApiProblemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.problems.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProblemsQueryKey>
  >({
    queryKey: getApiProblemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.problems.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProblems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.problems.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProblemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProblemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiProblemsMutationKey() {
  return ['api', '/api/problems', 'POST'] as const
}

export function getPostApiProblemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.problems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProblemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.problems.$post>) {
      return parseResponse(client.api.problems.$post(args, options))
    },
  })
}

export function createPostApiProblems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.problems.$post>,
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
    const mutationDefaults = getPostApiProblemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiProblemsIdQueryKey(
  args: InferRequestType<(typeof client.api.problems)[':id']['$get']>,
) {
  return ['api', '/api/problems/:id', args] as const
}

export function getApiProblemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.problems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProblemsIdQueryKey>
  >({
    queryKey: getApiProblemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.problems[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProblemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.problems)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProblemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProblemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiProblemsIdMutationKey() {
  return ['api', '/api/problems/:id', 'PUT'] as const
}

export function getPutApiProblemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.problems)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiProblemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.problems)[':id']['$put']>) {
      return parseResponse(client.api.problems[':id'].$put(args, options))
    },
  })
}

export function createPutApiProblemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$put']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.problems)[':id']['$put']>,
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
    const mutationDefaults = getPutApiProblemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiProblemsIdMutationKey() {
  return ['api', '/api/problems/:id', 'PATCH'] as const
}

export function getPatchApiProblemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.problems)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiProblemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.problems)[':id']['$patch']>) {
      return parseResponse(client.api.problems[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiProblemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.problems)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.problems)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiProblemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiProceduresQueryKey(
  args: InferRequestType<typeof client.api.procedures.$get>,
) {
  return ['api', '/api/procedures', args] as const
}

export function getApiProceduresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.procedures.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProceduresQueryKey>
  >({
    queryKey: getApiProceduresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.procedures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProcedures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.procedures.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProceduresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProceduresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiProceduresIdQueryKey(
  args: InferRequestType<(typeof client.api.procedures)[':id']['$get']>,
) {
  return ['api', '/api/procedures/:id', args] as const
}

export function getApiProceduresIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.procedures)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProceduresIdQueryKey>
  >({
    queryKey: getApiProceduresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.procedures[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProceduresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.procedures)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProceduresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProceduresIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiReminderProfilesQueryKey(
  args: InferRequestType<typeof client.api.reminder_profiles.$get>,
) {
  return ['api', '/api/reminder_profiles', args] as const
}

export function getApiReminderProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.reminder_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReminderProfilesQueryKey>
  >({
    queryKey: getApiReminderProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.reminder_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiReminderProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.reminder_profiles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReminderProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiReminderProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiReminderProfilesMutationKey() {
  return ['api', '/api/reminder_profiles', 'POST'] as const
}

export function getPostApiReminderProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.reminder_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReminderProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.reminder_profiles.$post>) {
      return parseResponse(client.api.reminder_profiles.$post(args, options))
    },
  })
}

export function createPostApiReminderProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.reminder_profiles.$post>,
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
    const mutationDefaults = getPostApiReminderProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiReminderProfilesIdQueryKey(
  args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>,
) {
  return ['api', '/api/reminder_profiles/:id', args] as const
}

export function getApiReminderProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReminderProfilesIdQueryKey>
  >({
    queryKey: getApiReminderProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.reminder_profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReminderProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReminderProfilesIdQueryKey>
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
      ...getApiReminderProfilesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiReminderProfilesIdMutationKey() {
  return ['api', '/api/reminder_profiles/:id', 'PUT'] as const
}

export function getPutApiReminderProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.reminder_profiles)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiReminderProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$put']>) {
      return parseResponse(client.api.reminder_profiles[':id'].$put(args, options))
    },
  })
}

export function createPutApiReminderProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.reminder_profiles)[':id']['$put']>,
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
    const mutationDefaults = getPutApiReminderProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiReminderProfilesIdMutationKey() {
  return ['api', '/api/reminder_profiles/:id', 'DELETE'] as const
}

export function getDeleteApiReminderProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.reminder_profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiReminderProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.reminder_profiles[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiReminderProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.reminder_profiles)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiReminderProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiReminderProfilesIdMutationKey() {
  return ['api', '/api/reminder_profiles/:id', 'PATCH'] as const
}

export function getPatchApiReminderProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.reminder_profiles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiReminderProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.reminder_profiles[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiReminderProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.reminder_profiles)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiReminderProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSublabsQueryKey(args: InferRequestType<typeof client.api.sublabs.$get>) {
  return ['api', '/api/sublabs', args] as const
}

export function getApiSublabsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.sublabs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSublabsQueryKey>
  >({
    queryKey: getApiSublabsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.sublabs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSublabs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.sublabs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSublabsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSublabsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiSublabsMutationKey() {
  return ['api', '/api/sublabs', 'POST'] as const
}

export function getPostApiSublabsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSublabsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.sublabs.$post(undefined, options))
    },
  })
}

export function createPostApiSublabs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$post>>>>
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
    const mutationDefaults = getPostApiSublabsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSublabsIdQueryKey(
  args: InferRequestType<(typeof client.api.sublabs)[':id']['$get']>,
) {
  return ['api', '/api/sublabs/:id', args] as const
}

export function getApiSublabsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.sublabs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSublabsIdQueryKey>
  >({
    queryKey: getApiSublabsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.sublabs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSublabsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.sublabs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSublabsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSublabsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiSublabsIdMutationKey() {
  return ['api', '/api/sublabs/:id', 'PUT'] as const
}

export function getPutApiSublabsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.sublabs)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiSublabsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.sublabs)[':id']['$put']>) {
      return parseResponse(client.api.sublabs[':id'].$put(args, options))
    },
  })
}

export function createPutApiSublabsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$put']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.sublabs)[':id']['$put']>,
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
    const mutationDefaults = getPutApiSublabsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiSublabsIdMutationKey() {
  return ['api', '/api/sublabs/:id', 'DELETE'] as const
}

export function getDeleteApiSublabsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.sublabs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSublabsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.sublabs)[':id']['$delete']>) {
      return parseResponse(client.api.sublabs[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiSublabsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.sublabs)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiSublabsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiSublabsIdMutationKey() {
  return ['api', '/api/sublabs/:id', 'PATCH'] as const
}

export function getPatchApiSublabsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.sublabs)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSublabsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.sublabs)[':id']['$patch']>) {
      return parseResponse(client.api.sublabs[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiSublabsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.sublabs)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiSublabsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskCategoriesQueryKey(
  args: InferRequestType<typeof client.api.task_categories.$get>,
) {
  return ['api', '/api/task_categories', args] as const
}

export function getApiTaskCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.task_categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskCategoriesQueryKey>
  >({
    queryKey: getApiTaskCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTaskCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.task_categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTaskCategoriesMutationKey() {
  return ['api', '/api/task_categories', 'POST'] as const
}

export function getPostApiTaskCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.task_categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaskCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.task_categories.$post>) {
      return parseResponse(client.api.task_categories.$post(args, options))
    },
  })
}

export function createPostApiTaskCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.task_categories.$post>,
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
    const mutationDefaults = getPostApiTaskCategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.api.task_categories)[':id']['$get']>,
) {
  return ['api', '/api/task_categories/:id', args] as const
}

export function getApiTaskCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.task_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskCategoriesIdQueryKey>
  >({
    queryKey: getApiTaskCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_categories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTaskCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.task_categories)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskCategoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskCategoriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiTaskCategoriesIdMutationKey() {
  return ['api', '/api/task_categories/:id', 'PUT'] as const
}

export function getPutApiTaskCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_categories)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTaskCategoriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_categories)[':id']['$put']>) {
      return parseResponse(client.api.task_categories[':id'].$put(args, options))
    },
  })
}

export function createPutApiTaskCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_categories)[':id']['$put']>,
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
    const mutationDefaults = getPutApiTaskCategoriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiTaskCategoriesIdMutationKey() {
  return ['api', '/api/task_categories/:id', 'PATCH'] as const
}

export function getPatchApiTaskCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_categories)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTaskCategoriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_categories)[':id']['$patch']>) {
      return parseResponse(client.api.task_categories[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiTaskCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_categories)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiTaskCategoriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskNotesQueryKey(args: InferRequestType<typeof client.api.task_notes.$get>) {
  return ['api', '/api/task_notes', args] as const
}

export function getApiTaskNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.task_notes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskNotesQueryKey>
  >({
    queryKey: getApiTaskNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_notes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTaskNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.task_notes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskNotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTaskNotesMutationKey() {
  return ['api', '/api/task_notes', 'POST'] as const
}

export function getPostApiTaskNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.task_notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaskNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.task_notes.$post>) {
      return parseResponse(client.api.task_notes.$post(args, options))
    },
  })
}

export function createPostApiTaskNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.task_notes.$post>,
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
    const mutationDefaults = getPostApiTaskNotesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskNotesIdQueryKey(
  args: InferRequestType<(typeof client.api.task_notes)[':id']['$get']>,
) {
  return ['api', '/api/task_notes/:id', args] as const
}

export function getApiTaskNotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.task_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskNotesIdQueryKey>
  >({
    queryKey: getApiTaskNotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_notes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTaskNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.task_notes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskNotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskNotesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiTaskNotesIdMutationKey() {
  return ['api', '/api/task_notes/:id', 'PUT'] as const
}

export function getPutApiTaskNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_notes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTaskNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_notes)[':id']['$put']>) {
      return parseResponse(client.api.task_notes[':id'].$put(args, options))
    },
  })
}

export function createPutApiTaskNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_notes)[':id']['$put']>,
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
    const mutationDefaults = getPutApiTaskNotesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiTaskNotesIdMutationKey() {
  return ['api', '/api/task_notes/:id', 'PATCH'] as const
}

export function getPatchApiTaskNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_notes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTaskNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_notes)[':id']['$patch']>) {
      return parseResponse(client.api.task_notes[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiTaskNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_notes)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiTaskNotesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskStatusesQueryKey(
  args: InferRequestType<typeof client.api.task_statuses.$get>,
) {
  return ['api', '/api/task_statuses', args] as const
}

export function getApiTaskStatusesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.task_statuses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskStatusesQueryKey>
  >({
    queryKey: getApiTaskStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_statuses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTaskStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.task_statuses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskStatusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTaskStatusesMutationKey() {
  return ['api', '/api/task_statuses', 'POST'] as const
}

export function getPostApiTaskStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.task_statuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaskStatusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.task_statuses.$post>) {
      return parseResponse(client.api.task_statuses.$post(args, options))
    },
  })
}

export function createPostApiTaskStatuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.task_statuses.$post>,
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
    const mutationDefaults = getPostApiTaskStatusesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskStatusesIdQueryKey(
  args: InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>,
) {
  return ['api', '/api/task_statuses/:id', args] as const
}

export function getApiTaskStatusesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskStatusesIdQueryKey>
  >({
    queryKey: getApiTaskStatusesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_statuses[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTaskStatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskStatusesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskStatusesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiTaskStatusesIdMutationKey() {
  return ['api', '/api/task_statuses/:id', 'PUT'] as const
}

export function getPutApiTaskStatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_statuses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTaskStatusesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_statuses)[':id']['$put']>) {
      return parseResponse(client.api.task_statuses[':id'].$put(args, options))
    },
  })
}

export function createPutApiTaskStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_statuses)[':id']['$put']>,
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
    const mutationDefaults = getPutApiTaskStatusesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiTaskStatusesIdMutationKey() {
  return ['api', '/api/task_statuses/:id', 'PATCH'] as const
}

export function getPatchApiTaskStatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_statuses)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTaskStatusesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_statuses)[':id']['$patch']>) {
      return parseResponse(client.api.task_statuses[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiTaskStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_statuses)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiTaskStatusesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskTemplatesQueryKey(
  args: InferRequestType<typeof client.api.task_templates.$get>,
) {
  return ['api', '/api/task_templates', args] as const
}

export function getApiTaskTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.task_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskTemplatesQueryKey>
  >({
    queryKey: getApiTaskTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTaskTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.task_templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTaskTemplatesMutationKey() {
  return ['api', '/api/task_templates', 'POST'] as const
}

export function getPostApiTaskTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.task_templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaskTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.task_templates.$post>) {
      return parseResponse(client.api.task_templates.$post(args, options))
    },
  })
}

export function createPostApiTaskTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.task_templates.$post>,
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
    const mutationDefaults = getPostApiTaskTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaskTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.api.task_templates)[':id']['$get']>,
) {
  return ['api', '/api/task_templates/:id', args] as const
}

export function getApiTaskTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.task_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskTemplatesIdQueryKey>
  >({
    queryKey: getApiTaskTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.task_templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTaskTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.task_templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaskTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaskTemplatesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiTaskTemplatesIdMutationKey() {
  return ['api', '/api/task_templates/:id', 'PUT'] as const
}

export function getPutApiTaskTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_templates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTaskTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_templates)[':id']['$put']>) {
      return parseResponse(client.api.task_templates[':id'].$put(args, options))
    },
  })
}

export function createPutApiTaskTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_templates)[':id']['$put']>,
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
    const mutationDefaults = getPutApiTaskTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiTaskTemplatesIdMutationKey() {
  return ['api', '/api/task_templates/:id', 'PATCH'] as const
}

export function getPatchApiTaskTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.task_templates)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTaskTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.task_templates)[':id']['$patch']>) {
      return parseResponse(client.api.task_templates[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiTaskTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.task_templates)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiTaskTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksQueryKey(args: InferRequestType<typeof client.api.tasks.$get>) {
  return ['api', '/api/tasks', args] as const
}

export function getApiTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTasksQueryKey>
  >({
    queryKey: getApiTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTasksMutationKey() {
  return ['api', '/api/tasks', 'POST'] as const
}

export function getPostApiTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tasks.$post>) {
      return parseResponse(client.api.tasks.$post(args, options))
    },
  })
}

export function createPostApiTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tasks.$post>,
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
    const mutationDefaults = getPostApiTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTasksIdQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
) {
  return ['api', '/api/tasks/:id', args] as const
}

export function getApiTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdQueryKey>
  >({
    queryKey: getApiTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiTasksIdMutationKey() {
  return ['api', '/api/tasks/:id', 'PUT'] as const
}

export function getPutApiTasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tasks)[':id']['$put']>) {
      return parseResponse(client.api.tasks[':id'].$put(args, options))
    },
  })
}

export function createPutApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$put']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['$put']>,
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
    const mutationDefaults = getPutApiTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiTasksIdMutationKey() {
  return ['api', '/api/tasks/:id', 'PATCH'] as const
}

export function getPatchApiTasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tasks)[':id']['$patch']>) {
      return parseResponse(client.api.tasks[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$patch']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTransactionsQueryKey(
  args: InferRequestType<typeof client.api.transactions.$get>,
) {
  return ['api', '/api/transactions', args] as const
}

export function getApiTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsQueryKey>
  >({
    queryKey: getApiTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTransactionsIdQueryKey(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
) {
  return ['api', '/api/transactions/:id', args] as const
}

export function getApiTransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsIdQueryKey>
  >({
    queryKey: getApiTransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTransactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUserGroupsQueryKey(
  args: InferRequestType<typeof client.api.user_groups.$get>,
) {
  return ['api', '/api/user_groups', args] as const
}

export function getApiUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserGroupsQueryKey>
  >({
    queryKey: getApiUserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUserGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.user_groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUserGroupsIdQueryKey(
  args: InferRequestType<(typeof client.api.user_groups)[':id']['$get']>,
) {
  return ['api', '/api/user_groups/:id', args] as const
}

export function getApiUserGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserGroupsIdQueryKey>
  >({
    queryKey: getApiUserGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user_groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUserGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.user_groups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersQueryKey(args: InferRequestType<typeof client.api.users.$get>) {
  return ['api', '/api/users', args] as const
}

export function getApiUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >({
    queryKey: getApiUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
) {
  return ['api', '/api/users/:id', args] as const
}

export function getApiUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >({
    queryKey: getApiUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
