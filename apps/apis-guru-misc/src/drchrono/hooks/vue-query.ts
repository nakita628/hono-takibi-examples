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

export function getApiKey() {
  return ['api'] as const
}

export function getApiAllergiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.allergies.$get>>,
) {
  return ['api', '/api/allergies', toValue(args)] as const
}

export function getApiAllergiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.allergies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAllergiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.allergies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAllergies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.allergies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
          >,
          ReturnType<typeof getApiAllergiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAllergiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAllergiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.allergies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAllergies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.allergies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.allergies.$post>,
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
  const mutationDefaults = getPostApiAllergiesMutationOptions<TError, TOnMutateResult>(
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

export function getApiAllergiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.allergies)[':id']['$get']>>,
) {
  return ['api', '/api/allergies/:id', toValue(args)] as const
}

export function getApiAllergiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.allergies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAllergiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.allergies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAllergiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.allergies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAllergiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.allergies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAllergiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAllergiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.allergies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiAllergiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAllergiesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiAllergiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAllergiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAmendmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.amendments.$get>>,
) {
  return ['api', '/api/amendments', toValue(args)] as const
}

export function getApiAmendmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.amendments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAmendmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.amendments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAmendments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.amendments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
          >,
          ReturnType<typeof getApiAmendmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAmendmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAmendmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.amendments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAmendments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.amendments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.amendments.$post>,
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
  const mutationDefaults = getPostApiAmendmentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAmendmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.amendments)[':id']['$get']>>,
) {
  return ['api', '/api/amendments/:id', toValue(args)] as const
}

export function getApiAmendmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.amendments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAmendmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.amendments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAmendmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.amendments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAmendmentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.amendments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAmendmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAmendmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.amendments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiAmendmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAmendmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiAmendmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAmendmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiAmendmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAmendmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAppointmentProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointment_profiles.$get>>,
) {
  return ['api', '/api/appointment_profiles', toValue(args)] as const
}

export function getApiAppointmentProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointment_profiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppointmentProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.appointment_profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppointmentProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointment_profiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
            >
          >,
          ReturnType<typeof getApiAppointmentProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppointmentProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.appointment_profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAppointmentProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.appointment_profiles.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.appointment_profiles.$post>,
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
  const mutationDefaults = getPostApiAppointmentProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getApiAppointmentProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>>,
) {
  return ['api', '/api/appointment_profiles/:id', toValue(args)] as const
}

export function getApiAppointmentProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppointmentProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.appointment_profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppointmentProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAppointmentProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.appointment_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppointmentProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.appointment_profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiAppointmentProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAppointmentProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiAppointmentProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAppointmentProfilesIdMutationOptions<
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

export function usePatchApiAppointmentProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAppointmentProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAppointmentTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointment_templates.$get>>,
) {
  return ['api', '/api/appointment_templates', toValue(args)] as const
}

export function getApiAppointmentTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointment_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppointmentTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.appointment_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppointmentTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointment_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.appointment_templates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.appointment_templates.$get>>
              >
            >
          >,
          ReturnType<typeof getApiAppointmentTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.appointment_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppointmentTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.appointment_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAppointmentTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.appointment_templates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.appointment_templates.$post>,
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
  const mutationDefaults = getPostApiAppointmentTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getApiAppointmentTemplatesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>
  >,
) {
  return ['api', '/api/appointment_templates/:id', toValue(args)] as const
}

export function getApiAppointmentTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppointmentTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.appointment_templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppointmentTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAppointmentTemplatesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppointmentTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.appointment_templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiAppointmentTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAppointmentTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiAppointmentTemplatesId<
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
                  Awaited<ReturnType<(typeof client.api.appointment_templates)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.appointment_templates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiAppointmentTemplatesIdMutationOptions<
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

export function usePatchApiAppointmentTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAppointmentTemplatesIdMutationOptions<
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

export function getApiAppointmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointments.$get>>,
) {
  return ['api', '/api/appointments', toValue(args)] as const
}

export function getApiAppointmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppointmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.appointments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppointments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.appointments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>
            >
          >,
          ReturnType<typeof getApiAppointmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppointmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.appointments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiAppointments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.appointments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.appointments.$post>,
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
  const mutationDefaults = getPostApiAppointmentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAppointmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.appointments)[':id']['$get']>>,
) {
  return ['api', '/api/appointments/:id', toValue(args)] as const
}

export function getApiAppointmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.appointments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppointmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.appointments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppointmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.appointments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAppointmentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.appointments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppointmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppointmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.appointments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiAppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAppointmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiAppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAppointmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiAppointmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAppointmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiBillingProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.billing_profiles.$get>>,
) {
  return ['api', '/api/billing_profiles', toValue(args)] as const
}

export function getApiBillingProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.billing_profiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBillingProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.billing_profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBillingProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.billing_profiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>
            >
          >,
          ReturnType<typeof getApiBillingProfilesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.billing_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBillingProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBillingProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.billing_profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBillingProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>>,
) {
  return ['api', '/api/billing_profiles/:id', toValue(args)] as const
}

export function getApiBillingProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBillingProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.billing_profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBillingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBillingProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.billing_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBillingProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBillingProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.billing_profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCarePlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.care_plans.$get>>,
) {
  return ['api', '/api/care_plans', toValue(args)] as const
}

export function getApiCarePlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.care_plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCarePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.care_plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCarePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.care_plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
          >,
          ReturnType<typeof getApiCarePlansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCarePlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCarePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.care_plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCarePlansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.care_plans)[':id']['$get']>>,
) {
  return ['api', '/api/care_plans/:id', toValue(args)] as const
}

export function getApiCarePlansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.care_plans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCarePlansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.care_plans[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCarePlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.care_plans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCarePlansIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.care_plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCarePlansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCarePlansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.care_plans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCareTeamMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.care_team_members.$get>>,
) {
  return ['api', '/api/care_team_members', toValue(args)] as const
}

export function getApiCareTeamMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.care_team_members.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCareTeamMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.care_team_members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCareTeamMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.care_team_members.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>
            >
          >,
          ReturnType<typeof getApiCareTeamMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.care_team_members.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCareTeamMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCareTeamMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.care_team_members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCareTeamMembersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>>,
) {
  return ['api', '/api/care_team_members/:id', toValue(args)] as const
}

export function getApiCareTeamMembersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCareTeamMembersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.care_team_members[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCareTeamMembersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCareTeamMembersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.care_team_members)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCareTeamMembersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCareTeamMembersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.care_team_members[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClaimBillingNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.claim_billing_notes.$get>>,
) {
  return ['api', '/api/claim_billing_notes', toValue(args)] as const
}

export function getApiClaimBillingNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.claim_billing_notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClaimBillingNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.claim_billing_notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClaimBillingNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.claim_billing_notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
            >
          >,
          ReturnType<typeof getApiClaimBillingNotesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClaimBillingNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClaimBillingNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.claim_billing_notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiClaimBillingNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.claim_billing_notes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.claim_billing_notes.$post>,
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
  const mutationDefaults = getPostApiClaimBillingNotesMutationOptions<TError, TOnMutateResult>(
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

export function getApiClaimBillingNotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>>,
) {
  return ['api', '/api/claim_billing_notes/:id', toValue(args)] as const
}

export function getApiClaimBillingNotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClaimBillingNotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.claim_billing_notes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClaimBillingNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClaimBillingNotesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.claim_billing_notes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClaimBillingNotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClaimBillingNotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.claim_billing_notes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClinicalNoteFieldTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_field_types.$get>>,
) {
  return ['api', '/api/clinical_note_field_types', toValue(args)] as const
}

export function getApiClinicalNoteFieldTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_field_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNoteFieldTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_note_field_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNoteFieldTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_field_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNoteFieldTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNoteFieldTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_note_field_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClinicalNoteFieldTypesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>
  >,
) {
  return ['api', '/api/clinical_note_field_types/:id', toValue(args)] as const
}

export function getApiClinicalNoteFieldTypesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNoteFieldTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_note_field_types[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNoteFieldTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNoteFieldTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.clinical_note_field_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNoteFieldTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_note_field_types[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClinicalNoteFieldValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_field_values.$get>>,
) {
  return ['api', '/api/clinical_note_field_values', toValue(args)] as const
}

export function getApiClinicalNoteFieldValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_field_values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNoteFieldValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_note_field_values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNoteFieldValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_field_values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNoteFieldValuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_field_values.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNoteFieldValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_note_field_values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiClinicalNoteFieldValues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiClinicalNoteFieldValuesMutationOptions<
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

export function getApiClinicalNoteFieldValuesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>
  >,
) {
  return ['api', '/api/clinical_note_field_values/:id', toValue(args)] as const
}

export function getApiClinicalNoteFieldValuesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNoteFieldValuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_note_field_values[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNoteFieldValuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNoteFieldValuesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteFieldValuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNoteFieldValuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_note_field_values[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiClinicalNoteFieldValuesId<
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
                  Awaited<ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$put']>,
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
  const mutationDefaults = getPutApiClinicalNoteFieldValuesIdMutationOptions<
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

export function usePatchApiClinicalNoteFieldValuesId<
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
                    ReturnType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiClinicalNoteFieldValuesIdMutationOptions<
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

export function getApiClinicalNoteTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_templates.$get>>,
) {
  return ['api', '/api/clinical_note_templates', toValue(args)] as const
}

export function getApiClinicalNoteTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNoteTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_note_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNoteTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_note_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNoteTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_note_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNoteTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_note_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClinicalNoteTemplatesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>
  >,
) {
  return ['api', '/api/clinical_note_templates/:id', toValue(args)] as const
}

export function getApiClinicalNoteTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNoteTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_note_templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNoteTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNoteTemplatesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.clinical_note_templates)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNoteTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNoteTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_note_templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClinicalNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_notes.$get>>,
) {
  return ['api', '/api/clinical_notes', toValue(args)] as const
}

export function getApiClinicalNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.clinical_notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>
            >
          >,
          ReturnType<typeof getApiClinicalNotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.clinical_notes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClinicalNotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>>,
) {
  return ['api', '/api/clinical_notes/:id', toValue(args)] as const
}

export function getApiClinicalNotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClinicalNotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.clinical_notes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClinicalNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClinicalNotesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.clinical_notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClinicalNotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClinicalNotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.clinical_notes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCommLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comm_logs.$get>>,
) {
  return ['api', '/api/comm_logs', toValue(args)] as const
}

export function getApiCommLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comm_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comm_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCommLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comm_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
          >,
          ReturnType<typeof getApiCommLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comm_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCommLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comm_logs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.comm_logs.$post>,
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
  const mutationDefaults = getPostApiCommLogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCommLogsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>>,
) {
  return ['api', '/api/comm_logs/:id', toValue(args)] as const
}

export function getApiCommLogsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommLogsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comm_logs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCommLogsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCommLogsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comm_logs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommLogsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommLogsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comm_logs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiCommLogsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCommLogsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiCommLogsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiCommLogsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiConsentFormsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.consent_forms.$get>>,
) {
  return ['api', '/api/consent_forms', toValue(args)] as const
}

export function getApiConsentFormsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.consent_forms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConsentFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.consent_forms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConsentForms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.consent_forms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>
            >
          >,
          ReturnType<typeof getApiConsentFormsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsentFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConsentFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.consent_forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiConsentForms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.consent_forms.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.consent_forms.$post>,
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
  const mutationDefaults = getPostApiConsentFormsMutationOptions<TError, TOnMutateResult>(
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

export function getApiConsentFormsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>>,
) {
  return ['api', '/api/consent_forms/:id', toValue(args)] as const
}

export function getApiConsentFormsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConsentFormsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.consent_forms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConsentFormsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiConsentFormsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent_forms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConsentFormsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConsentFormsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.consent_forms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiConsentFormsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiConsentFormsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiConsentFormsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiConsentFormsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiConsentFormsIdApplyToAppointment<
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
                    ReturnType<
                      (typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']
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
  const mutationDefaults = getPostApiConsentFormsIdApplyToAppointmentMutationOptions<
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

export function usePostApiConsentFormsIdUnapplyFromAppointment<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiConsentFormsIdUnapplyFromAppointmentMutationOptions<
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

export function getApiCustomAppointmentFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_appointment_fields.$get>>,
) {
  return ['api', '/api/custom_appointment_fields', toValue(args)] as const
}

export function getApiCustomAppointmentFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_appointment_fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomAppointmentFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_appointment_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomAppointmentFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_appointment_fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCustomAppointmentFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_appointment_fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomAppointmentFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomAppointmentFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_appointment_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCustomAppointmentFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCustomAppointmentFieldsMutationOptions<
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

export function getApiCustomAppointmentFieldsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>
  >,
) {
  return ['api', '/api/custom_appointment_fields/:id', toValue(args)] as const
}

export function getApiCustomAppointmentFieldsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomAppointmentFieldsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_appointment_fields[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomAppointmentFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCustomAppointmentFieldsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomAppointmentFieldsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomAppointmentFieldsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_appointment_fields[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiCustomAppointmentFieldsId<
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
                  Awaited<ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$put']>,
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
  const mutationDefaults = getPutApiCustomAppointmentFieldsIdMutationOptions<
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

export function usePatchApiCustomAppointmentFieldsId<
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
                    ReturnType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiCustomAppointmentFieldsIdMutationOptions<
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

export function getApiCustomDemographicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_demographics.$get>>,
) {
  return ['api', '/api/custom_demographics', toValue(args)] as const
}

export function getApiCustomDemographicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_demographics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomDemographicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_demographics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomDemographics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_demographics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
            >
          >,
          ReturnType<typeof getApiCustomDemographicsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDemographicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomDemographicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_demographics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCustomDemographics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_demographics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.custom_demographics.$post>,
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
  const mutationDefaults = getPostApiCustomDemographicsMutationOptions<TError, TOnMutateResult>(
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

export function getApiCustomDemographicsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>>,
) {
  return ['api', '/api/custom_demographics/:id', toValue(args)] as const
}

export function getApiCustomDemographicsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomDemographicsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_demographics[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomDemographicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCustomDemographicsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.custom_demographics)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDemographicsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomDemographicsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_demographics[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiCustomDemographicsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCustomDemographicsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiCustomDemographicsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiCustomDemographicsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiCustomInsurancePlanNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_insurance_plan_names.$get>>,
) {
  return ['api', '/api/custom_insurance_plan_names', toValue(args)] as const
}

export function getApiCustomInsurancePlanNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_insurance_plan_names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomInsurancePlanNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_insurance_plan_names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomInsurancePlanNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_insurance_plan_names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCustomInsurancePlanNamesQueryKey>
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
          Awaited<ReturnType<typeof client.api.custom_insurance_plan_names.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomInsurancePlanNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomInsurancePlanNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_insurance_plan_names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCustomInsurancePlanNamesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>
  >,
) {
  return ['api', '/api/custom_insurance_plan_names/:id', toValue(args)] as const
}

export function getApiCustomInsurancePlanNamesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomInsurancePlanNamesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_insurance_plan_names[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomInsurancePlanNamesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCustomInsurancePlanNamesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomInsurancePlanNamesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomInsurancePlanNamesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_insurance_plan_names[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCustomVitalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_vitals.$get>>,
) {
  return ['api', '/api/custom_vitals', toValue(args)] as const
}

export function getApiCustomVitalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_vitals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomVitalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_vitals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomVitals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.custom_vitals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>
            >
          >,
          ReturnType<typeof getApiCustomVitalsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.custom_vitals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomVitalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomVitalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_vitals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCustomVitalsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>>,
) {
  return ['api', '/api/custom_vitals/:id', toValue(args)] as const
}

export function getApiCustomVitalsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomVitalsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.custom_vitals[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomVitalsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCustomVitalsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.custom_vitals)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomVitalsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomVitalsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.custom_vitals[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDoctorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.doctors.$get>>,
) {
  return ['api', '/api/doctors', toValue(args)] as const
}

export function getApiDoctorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.doctors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDoctorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.doctors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiDoctors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.doctors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>
          >,
          ReturnType<typeof getApiDoctorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doctors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDoctorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDoctorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.doctors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDoctorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.doctors)[':id']['$get']>>,
) {
  return ['api', '/api/doctors/:id', toValue(args)] as const
}

export function getApiDoctorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.doctors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDoctorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.doctors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDoctorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.doctors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiDoctorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.doctors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDoctorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDoctorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.doctors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.documents.$get>>,
) {
  return ['api', '/api/documents', toValue(args)] as const
}

export function getApiDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
          >,
          ReturnType<typeof getApiDocumentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.documents.$post>,
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
  const mutationDefaults = getPostApiDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiDocumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.documents)[':id']['$get']>>,
) {
  return ['api', '/api/documents/:id', toValue(args)] as const
}

export function getApiDocumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.documents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.documents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.documents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDocumentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.documents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiEligibilityChecksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.eligibility_checks.$get>>,
) {
  return ['api', '/api/eligibility_checks', toValue(args)] as const
}

export function getApiEligibilityChecksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.eligibility_checks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEligibilityChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.eligibility_checks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEligibilityChecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.eligibility_checks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>
            >
          >,
          ReturnType<typeof getApiEligibilityChecksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.eligibility_checks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEligibilityChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEligibilityChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.eligibility_checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEligibilityChecksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>>,
) {
  return ['api', '/api/eligibility_checks/:id', toValue(args)] as const
}

export function getApiEligibilityChecksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEligibilityChecksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.eligibility_checks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEligibilityChecksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiEligibilityChecksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.eligibility_checks)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEligibilityChecksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEligibilityChecksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.eligibility_checks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.eobs.$get>>,
) {
  return ['api', '/api/eobs', toValue(args)] as const
}

export function getApiEobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.eobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.eobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiEobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.eobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>
          >,
          ReturnType<typeof getApiEobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.eobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiEobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.eobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.eobs.$post>,
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
  const mutationDefaults = getPostApiEobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiEobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.eobs)[':id']['$get']>>,
) {
  return ['api', '/api/eobs/:id', toValue(args)] as const
}

export function getApiEobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.eobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.eobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.eobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiEobsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.eobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.eobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFeeSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.fee_schedules.$get>>,
) {
  return ['api', '/api/fee_schedules', toValue(args)] as const
}

export function getApiFeeSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.fee_schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFeeSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fee_schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFeeSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.fee_schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>
            >
          >,
          ReturnType<typeof getApiFeeSchedulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fee_schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeeSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFeeSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fee_schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFeeSchedulesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>>,
) {
  return ['api', '/api/fee_schedules/:id', toValue(args)] as const
}

export function getApiFeeSchedulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFeeSchedulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fee_schedules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFeeSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFeeSchedulesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.fee_schedules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeeSchedulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFeeSchedulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fee_schedules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiImplantableDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.implantable_devices.$get>>,
) {
  return ['api', '/api/implantable_devices', toValue(args)] as const
}

export function getApiImplantableDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.implantable_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiImplantableDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.implantable_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiImplantableDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.implantable_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
            >
          >,
          ReturnType<typeof getApiImplantableDevicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.implantable_devices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiImplantableDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiImplantableDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.implantable_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiImplantableDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>>,
) {
  return ['api', '/api/implantable_devices/:id', toValue(args)] as const
}

export function getApiImplantableDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiImplantableDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.implantable_devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiImplantableDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiImplantableDevicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.implantable_devices)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiImplantableDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiImplantableDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.implantable_devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInsurancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.insurances.$get>>,
) {
  return ['api', '/api/insurances', toValue(args)] as const
}

export function getApiInsurancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.insurances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInsurancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.insurances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInsurances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.insurances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
          >,
          ReturnType<typeof getApiInsurancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.insurances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInsurancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInsurancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.insurances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInsurancesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.insurances)[':id']['$get']>>,
) {
  return ['api', '/api/insurances/:id', toValue(args)] as const
}

export function getApiInsurancesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.insurances)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInsurancesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.insurances[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInsurancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.insurances)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiInsurancesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.insurances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInsurancesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInsurancesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.insurances[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInventoryCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.inventory_categories.$get>>,
) {
  return ['api', '/api/inventory_categories', toValue(args)] as const
}

export function getApiInventoryCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.inventory_categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInventoryCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.inventory_categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInventoryCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.inventory_categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
            >
          >,
          ReturnType<typeof getApiInventoryCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInventoryCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.inventory_categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInventoryCategoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>>,
) {
  return ['api', '/api/inventory_categories/:id', toValue(args)] as const
}

export function getApiInventoryCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInventoryCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.inventory_categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInventoryCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiInventoryCategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.inventory_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInventoryCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.inventory_categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInventoryVaccinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.inventory_vaccines.$get>>,
) {
  return ['api', '/api/inventory_vaccines', toValue(args)] as const
}

export function getApiInventoryVaccinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.inventory_vaccines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInventoryVaccinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.inventory_vaccines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInventoryVaccines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.inventory_vaccines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>
            >
          >,
          ReturnType<typeof getApiInventoryVaccinesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryVaccinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInventoryVaccinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.inventory_vaccines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiInventoryVaccines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.inventory_vaccines.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.inventory_vaccines.$post>,
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
  const mutationDefaults = getPostApiInventoryVaccinesMutationOptions<TError, TOnMutateResult>(
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

export function getApiInventoryVaccinesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>>,
) {
  return ['api', '/api/inventory_vaccines/:id', toValue(args)] as const
}

export function getApiInventoryVaccinesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInventoryVaccinesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.inventory_vaccines[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInventoryVaccinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiInventoryVaccinesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.inventory_vaccines)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInventoryVaccinesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInventoryVaccinesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.inventory_vaccines[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLabDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_documents.$get>>,
) {
  return ['api', '/api/lab_documents', toValue(args)] as const
}

export function getApiLabDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>
            >
          >,
          ReturnType<typeof getApiLabDocumentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLabDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_documents.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.lab_documents.$post>,
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
  const mutationDefaults = getPostApiLabDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiLabDocumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>>,
) {
  return ['api', '/api/lab_documents/:id', toValue(args)] as const
}

export function getApiLabDocumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabDocumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_documents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLabDocumentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabDocumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabDocumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_documents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiLabDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLabDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiLabDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLabDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiLabDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLabDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLabOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_orders.$get>>,
) {
  return ['api', '/api/lab_orders', toValue(args)] as const
}

export function getApiLabOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
          >,
          ReturnType<typeof getApiLabOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLabOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.lab_orders.$post>,
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
  const mutationDefaults = getPostApiLabOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getApiLabOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>>,
) {
  return ['api', '/api/lab_orders/:id', toValue(args)] as const
}

export function getApiLabOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLabOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiLabOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLabOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiLabOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLabOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiLabOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLabOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLabOrdersSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_orders_summary.$get>>,
) {
  return ['api', '/api/lab_orders_summary', toValue(args)] as const
}

export function getApiLabOrdersSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_orders_summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabOrdersSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_orders_summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabOrdersSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_orders_summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>
            >
          >,
          ReturnType<typeof getApiLabOrdersSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_orders_summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabOrdersSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_orders_summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLabOrdersSummaryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>>,
) {
  return ['api', '/api/lab_orders_summary/:id', toValue(args)] as const
}

export function getApiLabOrdersSummaryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabOrdersSummaryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_orders_summary[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabOrdersSummaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLabOrdersSummaryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.lab_orders_summary)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabOrdersSummaryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabOrdersSummaryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_orders_summary[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLabResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_results.$get>>,
) {
  return ['api', '/api/lab_results', toValue(args)] as const
}

export function getApiLabResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_results.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_results.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>
            >
          >,
          ReturnType<typeof getApiLabResultsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLabResults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_results.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.lab_results.$post>,
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
  const mutationDefaults = getPostApiLabResultsMutationOptions<TError, TOnMutateResult>(
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

export function getApiLabResultsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_results)[':id']['$get']>>,
) {
  return ['api', '/api/lab_results/:id', toValue(args)] as const
}

export function getApiLabResultsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_results)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabResultsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_results[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_results)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLabResultsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_results)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabResultsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabResultsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_results[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLabResultsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLabResultsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLabResultsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLabTestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_tests.$get>>,
) {
  return ['api', '/api/lab_tests', toValue(args)] as const
}

export function getApiLabTestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_tests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabTestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_tests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabTests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.lab_tests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
          >,
          ReturnType<typeof getApiLabTestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabTestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabTestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_tests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLabTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lab_tests.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.lab_tests.$post>,
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
  const mutationDefaults = getPostApiLabTestsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLabTestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>>,
) {
  return ['api', '/api/lab_tests/:id', toValue(args)] as const
}

export function getApiLabTestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLabTestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lab_tests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLabTestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLabTestsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lab_tests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLabTestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLabTestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lab_tests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiLabTestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLabTestsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiLabTestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLabTestsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiLabTestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLabTestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLineItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.line_items.$get>>,
) {
  return ['api', '/api/line_items', toValue(args)] as const
}

export function getApiLineItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.line_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.line_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLineItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.line_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
          >,
          ReturnType<typeof getApiLineItemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiLineItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.line_items.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.line_items.$post>,
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
  const mutationDefaults = getPostApiLineItemsMutationOptions<TError, TOnMutateResult>(
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

export function getApiLineItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.line_items)[':id']['$get']>>,
) {
  return ['api', '/api/line_items/:id', toValue(args)] as const
}

export function getApiLineItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.line_items)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLineItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.line_items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLineItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.line_items)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLineItemsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.line_items)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLineItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLineItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.line_items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiLineItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiLineItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiLineItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiLineItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiLineItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiLineItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiMedicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.medications.$get>>,
) {
  return ['api', '/api/medications', toValue(args)] as const
}

export function getApiMedicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.medications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMedicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.medications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMedications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.medications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>
            >
          >,
          ReturnType<typeof getApiMedicationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMedicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMedicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.medications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiMedications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.medications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.medications.$post>,
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
  const mutationDefaults = getPostApiMedicationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiMedicationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.medications)[':id']['$get']>>,
) {
  return ['api', '/api/medications/:id', toValue(args)] as const
}

export function getApiMedicationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.medications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMedicationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.medications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMedicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.medications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMedicationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.medications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMedicationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMedicationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.medications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiMedicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiMedicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiMedicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiMedicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiMedicationsIdAppendToPharmacyNote<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiMedicationsIdAppendToPharmacyNoteMutationOptions<
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

export function getApiMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.messages.$get>>,
) {
  return ['api', '/api/messages', toValue(args)] as const
}

export function getApiMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.messages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>
          >,
          ReturnType<typeof getApiMessagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.messages.$post>,
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
  const mutationDefaults = getPostApiMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMessagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.messages)[':id']['$get']>>,
) {
  return ['api', '/api/messages/:id', toValue(args)] as const
}

export function getApiMessagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.messages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.messages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiMessagesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.messages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.messages)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.messages)[':id']['$put']>,
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
  const mutationDefaults = getPutApiMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiOfficesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.offices.$get>>,
) {
  return ['api', '/api/offices', toValue(args)] as const
}

export function getApiOfficesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.offices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOfficesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.offices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiOffices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.offices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>
          >,
          ReturnType<typeof getApiOfficesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.offices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOfficesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOfficesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.offices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOfficesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.offices)[':id']['$get']>>,
) {
  return ['api', '/api/offices/:id', toValue(args)] as const
}

export function getApiOfficesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.offices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOfficesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.offices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOfficesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.offices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiOfficesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.offices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOfficesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOfficesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.offices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiOfficesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.offices)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.offices)[':id']['$put']>,
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
  const mutationDefaults = getPutApiOfficesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiOfficesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOfficesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiOfficesIdAddExamRoom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOfficesIdAddExamRoomMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientCommunicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_communications.$get>>,
) {
  return ['api', '/api/patient_communications', toValue(args)] as const
}

export function getApiPatientCommunicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_communications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientCommunicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_communications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientCommunications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_communications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_communications.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_communications.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatientCommunicationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_communications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientCommunicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientCommunicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_communications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientCommunications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPatientCommunicationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientCommunicationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>
  >,
) {
  return ['api', '/api/patient_communications/:id', toValue(args)] as const
}

export function getApiPatientCommunicationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientCommunicationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_communications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientCommunicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientCommunicationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientCommunicationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientCommunicationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_communications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientCommunicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientCommunicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientCommunicationsId<
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
                  Awaited<ReturnType<(typeof client.api.patient_communications)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.patient_communications)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiPatientCommunicationsIdMutationOptions<
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

export function getApiPatientFlagTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_flag_types.$get>>,
) {
  return ['api', '/api/patient_flag_types', toValue(args)] as const
}

export function getApiPatientFlagTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_flag_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientFlagTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_flag_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientFlagTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_flag_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>
            >
          >,
          ReturnType<typeof getApiPatientFlagTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientFlagTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientFlagTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_flag_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientFlagTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_flag_types.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.patient_flag_types.$post>,
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
  const mutationDefaults = getPostApiPatientFlagTypesMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientFlagTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>>,
) {
  return ['api', '/api/patient_flag_types/:id', toValue(args)] as const
}

export function getApiPatientFlagTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientFlagTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_flag_types[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientFlagTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientFlagTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_flag_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientFlagTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientFlagTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_flag_types[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientFlagTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientFlagTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientFlagTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientFlagTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientInterventionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_interventions.$get>>,
) {
  return ['api', '/api/patient_interventions', toValue(args)] as const
}

export function getApiPatientInterventionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_interventions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientInterventionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_interventions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientInterventions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_interventions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_interventions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_interventions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatientInterventionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_interventions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientInterventionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientInterventionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_interventions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientInterventions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_interventions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.patient_interventions.$post>,
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
  const mutationDefaults = getPostApiPatientInterventionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientInterventionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>
  >,
) {
  return ['api', '/api/patient_interventions/:id', toValue(args)] as const
}

export function getApiPatientInterventionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientInterventionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_interventions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientInterventionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientInterventionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_interventions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientInterventionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientInterventionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_interventions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientInterventionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientInterventionsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientInterventionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientInterventionsIdMutationOptions<
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

export function getApiPatientLabResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_lab_results.$get>>,
) {
  return ['api', '/api/patient_lab_results', toValue(args)] as const
}

export function getApiPatientLabResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_lab_results.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientLabResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_lab_results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientLabResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_lab_results.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
            >
          >,
          ReturnType<typeof getApiPatientLabResultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientLabResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientLabResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_lab_results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientLabResults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_lab_results.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.patient_lab_results.$post>,
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
  const mutationDefaults = getPostApiPatientLabResultsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientLabResultsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>>,
) {
  return ['api', '/api/patient_lab_results/:id', toValue(args)] as const
}

export function getApiPatientLabResultsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientLabResultsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_lab_results[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientLabResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientLabResultsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_lab_results)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientLabResultsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientLabResultsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_lab_results[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientLabResultsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiPatientLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPatientLabResultsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientLabResultsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientLabResultsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_messages.$get>>,
) {
  return ['api', '/api/patient_messages', toValue(args)] as const
}

export function getApiPatientMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>
            >
          >,
          ReturnType<typeof getApiPatientMessagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_messages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.patient_messages.$post>,
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
  const mutationDefaults = getPostApiPatientMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientMessagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>>,
) {
  return ['api', '/api/patient_messages/:id', toValue(args)] as const
}

export function getApiPatientMessagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientMessagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientPaymentLogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_payment_log.$get>>,
) {
  return ['api', '/api/patient_payment_log', toValue(args)] as const
}

export function getApiPatientPaymentLogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_payment_log.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientPaymentLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_payment_log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientPaymentLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_payment_log.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
            >
          >,
          ReturnType<typeof getApiPatientPaymentLogQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payment_log.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientPaymentLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_payment_log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatientPaymentLogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>>,
) {
  return ['api', '/api/patient_payment_log/:id', toValue(args)] as const
}

export function getApiPatientPaymentLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientPaymentLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_payment_log[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientPaymentLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientPaymentLogIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_payment_log)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientPaymentLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_payment_log[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatientPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_payments.$get>>,
) {
  return ['api', '/api/patient_payments', toValue(args)] as const
}

export function getApiPatientPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>
            >
          >,
          ReturnType<typeof getApiPatientPaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.patient_payments.$post>,
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
  const mutationDefaults = getPostApiPatientPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientPaymentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>>,
) {
  return ['api', '/api/patient_payments/:id', toValue(args)] as const
}

export function getApiPatientPaymentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientPaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientPaymentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_payments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientPaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatientPhysicalExamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_physical_exams.$get>>,
) {
  return ['api', '/api/patient_physical_exams', toValue(args)] as const
}

export function getApiPatientPhysicalExamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_physical_exams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientPhysicalExamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_physical_exams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientPhysicalExams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_physical_exams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatientPhysicalExamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_physical_exams.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPhysicalExamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientPhysicalExamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_physical_exams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientPhysicalExams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPatientPhysicalExamsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientPhysicalExamsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>
  >,
) {
  return ['api', '/api/patient_physical_exams/:id', toValue(args)] as const
}

export function getApiPatientPhysicalExamsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientPhysicalExamsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_physical_exams[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientPhysicalExamsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientPhysicalExamsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_physical_exams)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientPhysicalExamsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientPhysicalExamsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_physical_exams[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientPhysicalExamsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientPhysicalExamsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientPhysicalExamsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientPhysicalExamsIdMutationOptions<
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

export function getApiPatientRiskAssessmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_risk_assessments.$get>>,
) {
  return ['api', '/api/patient_risk_assessments', toValue(args)] as const
}

export function getApiPatientRiskAssessmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_risk_assessments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientRiskAssessmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_risk_assessments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientRiskAssessments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_risk_assessments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatientRiskAssessmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_risk_assessments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientRiskAssessmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientRiskAssessmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_risk_assessments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientRiskAssessments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPatientRiskAssessmentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientRiskAssessmentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>
  >,
) {
  return ['api', '/api/patient_risk_assessments/:id', toValue(args)] as const
}

export function getApiPatientRiskAssessmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientRiskAssessmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_risk_assessments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientRiskAssessmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientRiskAssessmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientRiskAssessmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientRiskAssessmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_risk_assessments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientRiskAssessmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientRiskAssessmentsIdMutationOptions<
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

export function usePatchApiPatientRiskAssessmentsId<
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
                  Awaited<ReturnType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiPatientRiskAssessmentsIdMutationOptions<
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

export function getApiPatientVaccineRecordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_vaccine_records.$get>>,
) {
  return ['api', '/api/patient_vaccine_records', toValue(args)] as const
}

export function getApiPatientVaccineRecordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_vaccine_records.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientVaccineRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_vaccine_records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientVaccineRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patient_vaccine_records.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatientVaccineRecordsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patient_vaccine_records.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientVaccineRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientVaccineRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_vaccine_records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientVaccineRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPatientVaccineRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientVaccineRecordsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>
  >,
) {
  return ['api', '/api/patient_vaccine_records/:id', toValue(args)] as const
}

export function getApiPatientVaccineRecordsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientVaccineRecordsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patient_vaccine_records[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientVaccineRecordsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientVaccineRecordsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientVaccineRecordsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientVaccineRecordsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patient_vaccine_records[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientVaccineRecordsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientVaccineRecordsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientVaccineRecordsId<
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
                  Awaited<ReturnType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiPatientVaccineRecordsIdMutationOptions<
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

export function getApiPatientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patients.$get>>,
) {
  return ['api', '/api/patients', toValue(args)] as const
}

export function getApiPatientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPatients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>
          >,
          ReturnType<typeof getApiPatientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPatientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.patients.$post>,
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
  const mutationDefaults = getPostApiPatientsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPatientsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['$get']>>,
) {
  return ['api', '/api/patients/:id', toValue(args)] as const
}

export function getApiPatientsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPatientsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.patients)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.patients)[':id']['$put']>,
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
  const mutationDefaults = getPutApiPatientsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiPatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPatientsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientsIdCcdaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>>,
) {
  return ['api', '/api/patients/:id/ccda', toValue(args)] as const
}

export function getApiPatientsIdCcdaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsIdCcdaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients[':id'].ccda.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientsIdCcda<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientsIdCcdaQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patients)[':id']['ccda']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdCcdaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsIdCcdaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients[':id'].ccda.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatientsIdOnpatientAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>
  >,
) {
  return ['api', '/api/patients/:id/onpatient_access', toValue(args)] as const
}

export function getApiPatientsIdOnpatientAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsIdOnpatientAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients[':id'].onpatient_access.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientsIdOnpatientAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientsIdOnpatientAccessQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdOnpatientAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsIdOnpatientAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients[':id'].onpatient_access.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientsIdOnpatientAccess<
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
                  ReturnType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>,
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
  const mutationDefaults = getPostApiPatientsIdOnpatientAccessMutationOptions<
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

export function useDeleteApiPatientsIdOnpatientAccess<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPatientsIdOnpatientAccessMutationOptions<
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

export function getApiPatientsIdQrda1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>>,
) {
  return ['api', '/api/patients/:id/qrda1', toValue(args)] as const
}

export function getApiPatientsIdQrda1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsIdQrda1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients[':id'].qrda1.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientsIdQrda1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientsIdQrda1QueryKey>
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
          Awaited<ReturnType<(typeof client.api.patients)[':id']['qrda1']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsIdQrda1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsIdQrda1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients[':id'].qrda1.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatientsSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patients_summary.$get>>,
) {
  return ['api', '/api/patients_summary', toValue(args)] as const
}

export function getApiPatientsSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patients_summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients_summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patients_summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>
            >
          >,
          ReturnType<typeof getApiPatientsSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients_summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPatientsSummary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patients_summary.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.patients_summary.$post>,
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
  const mutationDefaults = getPostApiPatientsSummaryMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatientsSummaryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>>,
) {
  return ['api', '/api/patients_summary/:id', toValue(args)] as const
}

export function getApiPatientsSummaryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatientsSummaryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patients_summary[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatientsSummaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatientsSummaryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patients_summary)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatientsSummaryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatientsSummaryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patients_summary[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPatientsSummaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPatientsSummaryIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiPatientsSummaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPatientsSummaryIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiPatientsSummaryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPatientsSummaryIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPrescriptionMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.prescription_messages.$get>>,
) {
  return ['api', '/api/prescription_messages', toValue(args)] as const
}

export function getApiPrescriptionMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.prescription_messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPrescriptionMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.prescription_messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPrescriptionMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.prescription_messages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.prescription_messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.prescription_messages.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.prescription_messages.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPrescriptionMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.prescription_messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPrescriptionMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPrescriptionMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.prescription_messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPrescriptionMessagesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>
  >,
) {
  return ['api', '/api/prescription_messages/:id', toValue(args)] as const
}

export function getApiPrescriptionMessagesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPrescriptionMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.prescription_messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPrescriptionMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPrescriptionMessagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.prescription_messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPrescriptionMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPrescriptionMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.prescription_messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProblemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.problems.$get>>,
) {
  return ['api', '/api/problems', toValue(args)] as const
}

export function getApiProblemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.problems.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProblemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.problems.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiProblems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.problems.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>
          >,
          ReturnType<typeof getApiProblemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProblemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProblemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.problems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiProblems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.problems.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.problems.$post>,
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
  const mutationDefaults = getPostApiProblemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiProblemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.problems)[':id']['$get']>>,
) {
  return ['api', '/api/problems/:id', toValue(args)] as const
}

export function getApiProblemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.problems)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProblemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.problems[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProblemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.problems)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiProblemsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.problems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProblemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProblemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.problems[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiProblemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.problems)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.problems)[':id']['$put']>,
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
  const mutationDefaults = getPutApiProblemsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiProblemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiProblemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiProceduresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.procedures.$get>>,
) {
  return ['api', '/api/procedures', toValue(args)] as const
}

export function getApiProceduresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.procedures.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProceduresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.procedures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProcedures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.procedures.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
          >,
          ReturnType<typeof getApiProceduresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.procedures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProceduresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProceduresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.procedures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProceduresIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.procedures)[':id']['$get']>>,
) {
  return ['api', '/api/procedures/:id', toValue(args)] as const
}

export function getApiProceduresIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.procedures)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProceduresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.procedures[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProceduresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.procedures)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProceduresIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.procedures)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProceduresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProceduresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.procedures[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReminderProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.reminder_profiles.$get>>,
) {
  return ['api', '/api/reminder_profiles', toValue(args)] as const
}

export function getApiReminderProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.reminder_profiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReminderProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.reminder_profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReminderProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.reminder_profiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>
            >
          >,
          ReturnType<typeof getApiReminderProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReminderProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReminderProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.reminder_profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiReminderProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.reminder_profiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.reminder_profiles.$post>,
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
  const mutationDefaults = getPostApiReminderProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getApiReminderProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>>,
) {
  return ['api', '/api/reminder_profiles/:id', toValue(args)] as const
}

export function getApiReminderProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReminderProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.reminder_profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReminderProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiReminderProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.reminder_profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReminderProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReminderProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.reminder_profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiReminderProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiReminderProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiReminderProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiReminderProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiReminderProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiReminderProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiSublabsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.sublabs.$get>>,
) {
  return ['api', '/api/sublabs', toValue(args)] as const
}

export function getApiSublabsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.sublabs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSublabsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.sublabs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSublabs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.sublabs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>
          >,
          ReturnType<typeof getApiSublabsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSublabsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSublabsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.sublabs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiSublabs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.sublabs.$post>>>>
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
  const mutationDefaults = getPostApiSublabsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSublabsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.sublabs)[':id']['$get']>>,
) {
  return ['api', '/api/sublabs/:id', toValue(args)] as const
}

export function getApiSublabsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.sublabs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSublabsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.sublabs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSublabsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.sublabs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSublabsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSublabsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSublabsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.sublabs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiSublabsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.sublabs)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.sublabs)[':id']['$put']>,
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
  const mutationDefaults = getPutApiSublabsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiSublabsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiSublabsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiSublabsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiSublabsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_categories.$get>>,
) {
  return ['api', '/api/task_categories', toValue(args)] as const
}

export function getApiTaskCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>
            >
          >,
          ReturnType<typeof getApiTaskCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTaskCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_categories.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.task_categories.$post>,
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
  const mutationDefaults = getPostApiTaskCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskCategoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_categories)[':id']['$get']>>,
) {
  return ['api', '/api/task_categories/:id', toValue(args)] as const
}

export function getApiTaskCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_categories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_categories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTaskCategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.task_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiTaskCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTaskCategoriesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiTaskCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTaskCategoriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_notes.$get>>,
) {
  return ['api', '/api/task_notes', toValue(args)] as const
}

export function getApiTaskNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
          >,
          ReturnType<typeof getApiTaskNotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTaskNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_notes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.task_notes.$post>,
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
  const mutationDefaults = getPostApiTaskNotesMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskNotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_notes)[':id']['$get']>>,
) {
  return ['api', '/api/task_notes/:id', toValue(args)] as const
}

export function getApiTaskNotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_notes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskNotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_notes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_notes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTaskNotesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskNotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskNotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_notes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiTaskNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTaskNotesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiTaskNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTaskNotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskStatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_statuses.$get>>,
) {
  return ['api', '/api/task_statuses', toValue(args)] as const
}

export function getApiTaskStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>
            >
          >,
          ReturnType<typeof getApiTaskStatusesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTaskStatuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_statuses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.task_statuses.$post>,
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
  const mutationDefaults = getPostApiTaskStatusesMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskStatusesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>>,
) {
  return ['api', '/api/task_statuses/:id', toValue(args)] as const
}

export function getApiTaskStatusesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskStatusesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_statuses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskStatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTaskStatusesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_statuses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskStatusesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskStatusesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_statuses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiTaskStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTaskStatusesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiTaskStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTaskStatusesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_templates.$get>>,
) {
  return ['api', '/api/task_templates', toValue(args)] as const
}

export function getApiTaskTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.task_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>
            >
          >,
          ReturnType<typeof getApiTaskTemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTaskTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.task_templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.task_templates.$post>,
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
  const mutationDefaults = getPostApiTaskTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaskTemplatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_templates)[':id']['$get']>>,
) {
  return ['api', '/api/task_templates/:id', toValue(args)] as const
}

export function getApiTaskTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_templates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaskTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.task_templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTaskTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.task_templates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTaskTemplatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.task_templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTaskTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaskTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.task_templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiTaskTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTaskTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiTaskTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiTaskTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
) {
  return ['api', '/api/tasks', toValue(args)] as const
}

export function getApiTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
          >,
          ReturnType<typeof getApiTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.tasks.$post>,
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
  const mutationDefaults = getPostApiTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTasksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['$get']>>,
) {
  return ['api', '/api/tasks/:id', toValue(args)] as const
}

export function getApiTasksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tasks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tasks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTasksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tasks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.tasks)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transactions.$get>>,
) {
  return ['api', '/api/transactions', toValue(args)] as const
}

export function getApiTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>
            >
          >,
          ReturnType<typeof getApiTransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.transactions)[':id']['$get']>>,
) {
  return ['api', '/api/transactions/:id', toValue(args)] as const
}

export function getApiTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransactionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.user_groups.$get>>,
) {
  return ['api', '/api/user_groups', toValue(args)] as const
}

export function getApiUserGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.user_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.user_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>
            >
          >,
          ReturnType<typeof getApiUserGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user_groups)[':id']['$get']>>,
) {
  return ['api', '/api/user_groups/:id', toValue(args)] as const
}

export function getApiUserGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user_groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user_groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user_groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserGroupsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user_groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
) {
  return ['api', '/api/users', toValue(args)] as const
}

export function getApiUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          ReturnType<typeof getApiUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
) {
  return ['api', '/api/users/:id', toValue(args)] as const
}

export function getApiUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
