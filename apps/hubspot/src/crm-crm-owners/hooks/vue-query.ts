import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
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

export function getCrmOwners202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>>,
) {
  return ['crm', '/crm/owners/2026-09', toValue(args)] as const
}

export function getCrmOwners202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmOwners202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.owners['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmOwners202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmOwners202609QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmOwners202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmOwners202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.owners['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmOwners202609OwnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>
  >,
) {
  return ['crm', '/crm/owners/2026-09/:ownerId', toValue(args)] as const
}

export function getCrmOwners202609OwnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmOwners202609OwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.owners['2026-09'][':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmOwners202609OwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmOwners202609OwnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmOwners202609OwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmOwners202609OwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.owners['2026-09'][':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
