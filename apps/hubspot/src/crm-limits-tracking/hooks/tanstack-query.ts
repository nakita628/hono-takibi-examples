import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmLimits202609AssociationsLabelsQueryKey(
  args: InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>,
) {
  return ['crm', '/crm/limits/2026-09/associations/labels', args] as const
}

export function getCrmLimits202609AssociationsLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609AssociationsLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609AssociationsLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609AssociationsLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609AssociationsLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609AssociationsRecordsFromQueryKey() {
  return ['crm', '/crm/limits/2026-09/associations/records/from'] as const
}

export function getCrmLimits202609AssociationsRecordsFromQueryOptions<
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
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609AssociationsRecordsFromQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.records.from.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getCrmLimits202609AssociationsRecordsFromQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609AssociationsRecordsFromQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609AssociationsRecordsFrom<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609AssociationsRecordsFromQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey(
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
  >,
) {
  return ['crm', '/crm/limits/2026-09/associations/records/:fromObjectTypeId/to', args] as const
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'].to.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609AssociationsRecordsFromObjectTypeIdTo<
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
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609AssociationsRecordsFromObjectTypeIdToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
  >,
) {
  return [
    'crm',
    '/crm/limits/2026-09/associations/records/:fromObjectTypeId/:toObjectTypeId',
    args,
  ] as const
}

export function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'][
          ':toObjectTypeId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeId<
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
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609CalculatedPropertiesQueryKey() {
  return ['crm', '/crm/limits/2026-09/calculated-properties'] as const
}

export function getCrmLimits202609CalculatedPropertiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['calculated-properties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609CalculatedPropertiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09']['calculated-properties'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getCrmLimits202609CalculatedPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609CalculatedPropertiesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609CalculatedProperties<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609CalculatedPropertiesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609CustomObjectTypesQueryKey() {
  return ['crm', '/crm/limits/2026-09/custom-object-types'] as const
}

export function getCrmLimits202609CustomObjectTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['custom-object-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609CustomObjectTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09']['custom-object-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getCrmLimits202609CustomObjectTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609CustomObjectTypesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609CustomObjectTypes<
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
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getCrmLimits202609CustomObjectTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609CustomObjectTypesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609CustomPropertiesQueryKey() {
  return ['crm', '/crm/limits/2026-09/custom-properties'] as const
}

export function getCrmLimits202609CustomPropertiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['custom-properties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609CustomPropertiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09']['custom-properties'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getCrmLimits202609CustomPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmLimits202609CustomPropertiesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609CustomProperties<
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
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getCrmLimits202609CustomPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmLimits202609CustomPropertiesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmLimits202609PipelinesQueryKey() {
  return ['crm', '/crm/limits/2026-09/pipelines'] as const
}

export function getCrmLimits202609PipelinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['pipelines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609PipelinesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09'].pipelines.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getCrmLimits202609PipelinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrmLimits202609PipelinesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609Pipelines<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrmLimits202609PipelinesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCrmLimits202609RecordsQueryKey() {
  return ['crm', '/crm/limits/2026-09/records'] as const
}

export function getCrmLimits202609RecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.limits)['2026-09']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmLimits202609RecordsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.limits['2026-09'].records.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getCrmLimits202609RecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrmLimits202609RecordsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrmLimits202609Records<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrmLimits202609RecordsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
