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

export function getCrmLimits202609AssociationsLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>
  >,
) {
  return ['crm', '/crm/limits/2026-09/associations/labels', toValue(args)] as const
}

export function getCrmLimits202609AssociationsLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmLimits202609AssociationsLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609AssociationsLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>
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
                    (typeof client.crm.limits)['2026-09']['associations']['labels']['$get']
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
                    (typeof client.crm.limits)['2026-09']['associations']['labels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609AssociationsLabelsQueryKey>
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
            ReturnType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609AssociationsLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmLimits202609AssociationsLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09'].associations.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609AssociationsRecordsFromQueryKey() {
  return ['crm', '/crm/limits/2026-09/associations/records/from'] as const
}

export function getCrmLimits202609AssociationsRecordsFromQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getCrmLimits202609AssociationsRecordsFromQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.records.from.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609AssociationsRecordsFrom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.limits)['2026-09']['associations']['records']['from']['$get']
          >
        >
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
                  ReturnType<
                    (typeof client.crm.limits)['2026-09']['associations']['records']['from']['$get']
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
                    (typeof client.crm.limits)['2026-09']['associations']['records']['from']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609AssociationsRecordsFromQueryKey>
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
              (typeof client.crm.limits)['2026-09']['associations']['records']['from']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609AssociationsRecordsFromQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmLimits202609AssociationsRecordsFromQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09'].associations.records.from.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/limits/2026-09/associations/records/:fromObjectTypeId/to',
    toValue(args),
  ] as const
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'].to.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCrmLimits202609AssociationsRecordsFromObjectTypeIdTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
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
                    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
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
                    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey>
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
              (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'].to.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/limits/2026-09/associations/records/:fromObjectTypeId/:toObjectTypeId',
    toValue(args),
  ] as const
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'][
          ':toObjectTypeId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
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
                    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
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
                    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey
          >
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
              (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'][
            ':toObjectTypeId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609CalculatedPropertiesQueryKey() {
  return ['crm', '/crm/limits/2026-09/calculated-properties'] as const
}

export function getCrmLimits202609CalculatedPropertiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmLimits202609CalculatedPropertiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09']['calculated-properties'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609CalculatedProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['calculated-properties']['$get']>>
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
                  ReturnType<(typeof client.crm.limits)['2026-09']['calculated-properties']['$get']>
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
                  ReturnType<(typeof client.crm.limits)['2026-09']['calculated-properties']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609CalculatedPropertiesQueryKey>
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
            ReturnType<(typeof client.crm.limits)['2026-09']['calculated-properties']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609CalculatedPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmLimits202609CalculatedPropertiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09']['calculated-properties'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609CustomObjectTypesQueryKey() {
  return ['crm', '/crm/limits/2026-09/custom-object-types'] as const
}

export function getCrmLimits202609CustomObjectTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmLimits202609CustomObjectTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09']['custom-object-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609CustomObjectTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['custom-object-types']['$get']>>
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
                  ReturnType<(typeof client.crm.limits)['2026-09']['custom-object-types']['$get']>
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
                  ReturnType<(typeof client.crm.limits)['2026-09']['custom-object-types']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609CustomObjectTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['custom-object-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609CustomObjectTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmLimits202609CustomObjectTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09']['custom-object-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609CustomPropertiesQueryKey() {
  return ['crm', '/crm/limits/2026-09/custom-properties'] as const
}

export function getCrmLimits202609CustomPropertiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmLimits202609CustomPropertiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09']['custom-properties'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609CustomProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['custom-properties']['$get']>>
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
                  ReturnType<(typeof client.crm.limits)['2026-09']['custom-properties']['$get']>
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
                  ReturnType<(typeof client.crm.limits)['2026-09']['custom-properties']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609CustomPropertiesQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['custom-properties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609CustomPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmLimits202609CustomPropertiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09']['custom-properties'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609PipelinesQueryKey() {
  return ['crm', '/crm/limits/2026-09/pipelines'] as const
}

export function getCrmLimits202609PipelinesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmLimits202609PipelinesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09'].pipelines.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609Pipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['pipelines']['$get']>>
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
                Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['pipelines']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['pipelines']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609PipelinesQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['pipelines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609PipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmLimits202609PipelinesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09'].pipelines.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmLimits202609RecordsQueryKey() {
  return ['crm', '/crm/limits/2026-09/records'] as const
}

export function getCrmLimits202609RecordsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmLimits202609RecordsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.limits['2026-09'].records.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmLimits202609Records<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['records']['$get']>>
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
                Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['records']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmLimits202609RecordsQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLimits202609RecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmLimits202609RecordsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.limits['2026-09'].records.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
