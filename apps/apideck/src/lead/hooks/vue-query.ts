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

export function getLeadKey() {
  return ['lead'] as const
}

export function getLeadLeadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lead.leads.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lead', '/lead/leads', keyArgs] as const
}

export function getLeadLeadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lead.leads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeadLeadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lead.leads.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLeadLeads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lead.leads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
          >,
          ReturnType<typeof getLeadLeadsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeadLeadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeadLeadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lead.leads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLeadLeadsMutationKey() {
  return ['lead', '/lead/leads', 'POST'] as const
}

export function getPostLeadLeadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$post>>>>>,
    TError,
    InferRequestType<typeof client.lead.leads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLeadLeadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lead.leads.$post>) {
      return parseResponse(client.lead.leads.$post(args, options))
    },
  })
}

export function usePostLeadLeads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.lead.leads.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLeadLeadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLeadLeadsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lead.leads)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lead', '/lead/leads/:id', keyArgs] as const
}

export function getLeadLeadsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lead.leads)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeadLeadsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lead.leads[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeadLeadsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lead.leads)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getLeadLeadsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeadLeadsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeadLeadsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lead.leads[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLeadLeadsIdMutationKey() {
  return ['lead', '/lead/leads/:id', 'DELETE'] as const
}

export function getDeleteLeadLeadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lead.leads)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLeadLeadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lead.leads)[':id']['$delete']>) {
      return parseResponse(client.lead.leads[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLeadLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lead.leads)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lead.leads)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLeadLeadsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLeadLeadsIdMutationKey() {
  return ['lead', '/lead/leads/:id', 'PATCH'] as const
}

export function getPatchLeadLeadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lead.leads)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLeadLeadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lead.leads)[':id']['$patch']>) {
      return parseResponse(client.lead.leads[':id'].$patch(args, options))
    },
  })
}

export function usePatchLeadLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lead.leads)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLeadLeadsIdMutationOptions<TError, TOnMutateResult>(
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
