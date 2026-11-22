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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.activities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/activities', keyArgs] as const
}

export function getCrmActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.activities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.activities.$get>>>>
          >,
          ReturnType<typeof getCrmActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmActivitiesMutationKey() {
  return ['crm', '/crm/activities', 'POST'] as const
}

export function getPostCrmActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.activities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.activities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmActivitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.activities.$post>) {
      return parseResponse(client.crm.activities.$post(args, options))
    },
  })
}

export function usePostCrmActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.activities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.crm.activities.$post>,
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
  const mutationDefaults = getPostCrmActivitiesMutationOptions<TError, TOnMutateResult>(
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

export function getCrmActivitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.activities)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/activities/:id', keyArgs] as const
}

export function getCrmActivitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.activities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmActivitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.activities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmActivitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.activities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.activities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.activities)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.activities)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmActivitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.activities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmActivitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmActivitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.activities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmActivitiesIdMutationKey() {
  return ['crm', '/crm/activities/:id', 'DELETE'] as const
}

export function getDeleteCrmActivitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.activities)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.activities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmActivitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.activities)[':id']['$delete']>) {
      return parseResponse(client.crm.activities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmActivitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.activities)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.activities)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmActivitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmActivitiesIdMutationKey() {
  return ['crm', '/crm/activities/:id', 'PATCH'] as const
}

export function getPatchCrmActivitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.activities)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.activities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmActivitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.activities)[':id']['$patch']>) {
      return parseResponse(client.crm.activities[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmActivitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.activities)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.activities)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmActivitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmCompaniesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.companies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/companies', keyArgs] as const
}

export function getCrmCompaniesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.companies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.companies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.companies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.companies.$get>>>>
          >,
          ReturnType<typeof getCrmCompaniesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmCompaniesMutationKey() {
  return ['crm', '/crm/companies', 'POST'] as const
}

export function getPostCrmCompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.companies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.companies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmCompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.companies.$post>) {
      return parseResponse(client.crm.companies.$post(args, options))
    },
  })
}

export function usePostCrmCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.companies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.companies.$post>,
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
  const mutationDefaults = getPostCrmCompaniesMutationOptions<TError, TOnMutateResult>(
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

export function getCrmCompaniesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.companies)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/companies/:id', keyArgs] as const
}

export function getCrmCompaniesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.companies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmCompaniesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.companies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmCompaniesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.companies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.companies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.companies)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.companies)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmCompaniesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.companies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmCompaniesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmCompaniesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.companies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmCompaniesIdMutationKey() {
  return ['crm', '/crm/companies/:id', 'DELETE'] as const
}

export function getDeleteCrmCompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.companies)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.companies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmCompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.companies)[':id']['$delete']>) {
      return parseResponse(client.crm.companies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.companies)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.companies)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmCompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmCompaniesIdMutationKey() {
  return ['crm', '/crm/companies/:id', 'PATCH'] as const
}

export function getPatchCrmCompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.companies)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.companies)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmCompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.companies)[':id']['$patch']>) {
      return parseResponse(client.crm.companies[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.companies)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.companies)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmCompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.contacts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/contacts', keyArgs] as const
}

export function getCrmContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.contacts.$get>>>>
          >,
          ReturnType<typeof getCrmContactsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmContactsMutationKey() {
  return ['crm', '/crm/contacts', 'POST'] as const
}

export function getPostCrmContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.contacts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.contacts.$post>) {
      return parseResponse(client.crm.contacts.$post(args, options))
    },
  })
}

export function usePostCrmContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.contacts.$post>,
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
  const mutationDefaults = getPostCrmContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmContactsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.contacts)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/contacts/:id', keyArgs] as const
}

export function getCrmContactsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.contacts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmContactsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.contacts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmContactsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.contacts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmContactsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmContactsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmContactsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.contacts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmContactsIdMutationKey() {
  return ['crm', '/crm/contacts/:id', 'DELETE'] as const
}

export function getDeleteCrmContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.contacts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.contacts)[':id']['$delete']>) {
      return parseResponse(client.crm.contacts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.contacts)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmContactsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmContactsIdMutationKey() {
  return ['crm', '/crm/contacts/:id', 'PATCH'] as const
}

export function getPatchCrmContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.contacts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.contacts)[':id']['$patch']>) {
      return parseResponse(client.crm.contacts[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.contacts)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.contacts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmContactsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmLeadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.leads.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/leads', keyArgs] as const
}

export function getCrmLeadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.leads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmLeadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.leads.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmLeads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.leads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.leads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.leads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.leads.$get>>>>
          >,
          ReturnType<typeof getCrmLeadsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.leads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmLeadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmLeadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.leads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmLeadsMutationKey() {
  return ['crm', '/crm/leads', 'POST'] as const
}

export function getPostCrmLeadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.leads.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.leads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmLeadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.leads.$post>) {
      return parseResponse(client.crm.leads.$post(args, options))
    },
  })
}

export function usePostCrmLeads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.leads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.leads.$post>,
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
  const mutationDefaults = getPostCrmLeadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmLeadsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.leads)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/leads/:id', keyArgs] as const
}

export function getCrmLeadsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.leads)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmLeadsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.leads[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLeadsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.leads)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmLeadsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLeadsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmLeadsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.leads[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmLeadsIdMutationKey() {
  return ['crm', '/crm/leads/:id', 'DELETE'] as const
}

export function getDeleteCrmLeadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.leads)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmLeadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.leads)[':id']['$delete']>) {
      return parseResponse(client.crm.leads[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.leads)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmLeadsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmLeadsIdMutationKey() {
  return ['crm', '/crm/leads/:id', 'PATCH'] as const
}

export function getPatchCrmLeadsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.leads)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmLeadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.leads)[':id']['$patch']>) {
      return parseResponse(client.crm.leads[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.leads)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.leads)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmLeadsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.notes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/notes', keyArgs] as const
}

export function getCrmNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.notes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
          >,
          ReturnType<typeof getCrmNotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmNotesMutationKey() {
  return ['crm', '/crm/notes', 'POST'] as const
}

export function getPostCrmNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.notes.$post>) {
      return parseResponse(client.crm.notes.$post(args, options))
    },
  })
}

export function usePostCrmNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.notes.$post>,
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
  const mutationDefaults = getPostCrmNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmNotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.notes)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/notes/:id', keyArgs] as const
}

export function getCrmNotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.notes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmNotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.notes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmNotesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.notes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmNotesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmNotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmNotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.notes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmNotesIdMutationKey() {
  return ['crm', '/crm/notes/:id', 'DELETE'] as const
}

export function getDeleteCrmNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.notes)[':id']['$delete']>) {
      return parseResponse(client.crm.notes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmNotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmNotesIdMutationKey() {
  return ['crm', '/crm/notes/:id', 'PATCH'] as const
}

export function getPatchCrmNotesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.notes)[':id']['$patch']>) {
      return parseResponse(client.crm.notes[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmNotesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmOpportunitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.opportunities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/opportunities', keyArgs] as const
}

export function getCrmOpportunitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.opportunities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmOpportunitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.opportunities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmOpportunities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.opportunities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.opportunities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.opportunities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.opportunities.$get>>>
            >
          >,
          ReturnType<typeof getCrmOpportunitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.opportunities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmOpportunitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmOpportunitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.opportunities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmOpportunitiesMutationKey() {
  return ['crm', '/crm/opportunities', 'POST'] as const
}

export function getPostCrmOpportunitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.opportunities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.opportunities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmOpportunitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.opportunities.$post>) {
      return parseResponse(client.crm.opportunities.$post(args, options))
    },
  })
}

export function usePostCrmOpportunities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.opportunities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.crm.opportunities.$post>,
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
  const mutationDefaults = getPostCrmOpportunitiesMutationOptions<TError, TOnMutateResult>(
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

export function getCrmOpportunitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.opportunities)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/opportunities/:id', keyArgs] as const
}

export function getCrmOpportunitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.opportunities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmOpportunitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.opportunities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmOpportunitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.opportunities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmOpportunitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmOpportunitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmOpportunitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.opportunities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmOpportunitiesIdMutationKey() {
  return ['crm', '/crm/opportunities/:id', 'DELETE'] as const
}

export function getDeleteCrmOpportunitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.opportunities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmOpportunitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.opportunities)[':id']['$delete']>) {
      return parseResponse(client.crm.opportunities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmOpportunitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.opportunities)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmOpportunitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmOpportunitiesIdMutationKey() {
  return ['crm', '/crm/opportunities/:id', 'PATCH'] as const
}

export function getPatchCrmOpportunitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.opportunities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmOpportunitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.opportunities)[':id']['$patch']>) {
      return parseResponse(client.crm.opportunities[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmOpportunitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.opportunities)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.opportunities)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmOpportunitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmPipelinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.pipelines.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/pipelines', keyArgs] as const
}

export function getCrmPipelinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.pipelines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmPipelinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.pipelines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmPipelines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipelines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.pipelines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipelines.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipelines.$get>>>>
          >,
          ReturnType<typeof getCrmPipelinesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipelines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmPipelinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.pipelines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmPipelinesMutationKey() {
  return ['crm', '/crm/pipelines', 'POST'] as const
}

export function getPostCrmPipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipelines.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.pipelines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmPipelinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.pipelines.$post>) {
      return parseResponse(client.crm.pipelines.$post(args, options))
    },
  })
}

export function usePostCrmPipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipelines.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.pipelines.$post>,
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
  const mutationDefaults = getPostCrmPipelinesMutationOptions<TError, TOnMutateResult>(
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

export function getCrmPipelinesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.pipelines)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/pipelines/:id', keyArgs] as const
}

export function getCrmPipelinesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.pipelines)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmPipelinesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.pipelines[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmPipelinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.pipelines)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmPipelinesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelinesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmPipelinesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.pipelines[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmPipelinesIdMutationKey() {
  return ['crm', '/crm/pipelines/:id', 'DELETE'] as const
}

export function getDeleteCrmPipelinesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.pipelines)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmPipelinesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.pipelines)[':id']['$delete']>) {
      return parseResponse(client.crm.pipelines[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmPipelinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.pipelines)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmPipelinesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmPipelinesIdMutationKey() {
  return ['crm', '/crm/pipelines/:id', 'PATCH'] as const
}

export function getPatchCrmPipelinesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.pipelines)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmPipelinesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.pipelines)[':id']['$patch']>) {
      return parseResponse(client.crm.pipelines[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmPipelinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.pipelines)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.pipelines)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmPipelinesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.users.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/users', keyArgs] as const
}

export function getCrmUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.users.$get>>>>
          >,
          ReturnType<typeof getCrmUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmUsersMutationKey() {
  return ['crm', '/crm/users', 'POST'] as const
}

export function getPostCrmUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.users.$post>) {
      return parseResponse(client.crm.users.$post(args, options))
    },
  })
}

export function usePostCrmUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.users.$post>,
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
  const mutationDefaults = getPostCrmUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.users)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['crm', '/crm/users/:id', keyArgs] as const
}

export function getCrmUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmUsersIdMutationKey() {
  return ['crm', '/crm/users/:id', 'DELETE'] as const
}

export function getDeleteCrmUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.users)[':id']['$delete']>) {
      return parseResponse(client.crm.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCrmUsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmUsersIdMutationKey() {
  return ['crm', '/crm/users/:id', 'PATCH'] as const
}

export function getPatchCrmUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.users)[':id']['$patch']>) {
      return parseResponse(client.crm.users[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.users)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.users)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCrmUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
