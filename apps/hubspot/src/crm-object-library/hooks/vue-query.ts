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

export function getCrmObjectLibrary202609EnablementQueryKey() {
  return ['crm', '/crm/object-library/2026-09/enablement'] as const
}

export function getCrmObjectLibrary202609EnablementQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmObjectLibrary202609EnablementQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['object-library']['2026-09'].enablement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmObjectLibrary202609Enablement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>>
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
                Awaited<
                  ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>
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
                  ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmObjectLibrary202609EnablementQueryKey>
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
            ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectLibrary202609EnablementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmObjectLibrary202609EnablementQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['object-library']['2026-09'].enablement.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
    >
  >,
) {
  return ['crm', '/crm/object-library/2026-09/enablement/:objectTypeId', toValue(args)] as const
}

export function getCrmObjectLibrary202609EnablementObjectTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['object-library']['2026-09'].enablement[':objectTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmObjectLibrary202609EnablementObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
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
                    (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
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
                    (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey>
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
              (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['object-library']['2026-09'].enablement[':objectTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
