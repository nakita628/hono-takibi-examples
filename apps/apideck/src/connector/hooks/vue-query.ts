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

export function getConnectorKey() {
  return ['connector'] as const
}

export function getConnectorApisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connector.apis.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/apis', keyArgs] as const
}

export function getConnectorApisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connector.apis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorApisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.apis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorApis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connector.apis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
          >,
          ReturnType<typeof getConnectorApisQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorApisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorApisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.apis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorApisIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connector.apis)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/apis/:id', keyArgs] as const
}

export function getConnectorApisIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connector.apis)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorApisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.apis[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorApisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connector.apis)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectorApisIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorApisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorApisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.apis[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorApisIdResourcesResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/apis/:id/resources/:resource_id', keyArgs] as const
}

export function getConnectorApisIdResourcesResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorApisIdResourcesResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.apis[':id'].resources[':resource_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorApisIdResourcesResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
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
                    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
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
                    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectorApisIdResourcesResourceIdQueryKey>
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
            ReturnType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorApisIdResourcesResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorApisIdResourcesResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.apis[':id'].resources[':resource_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorApisIdResourcesResourceIdCoverageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/apis/:id/resources/:resource_id/coverage', keyArgs] as const
}

export function getConnectorApisIdResourcesResourceIdCoverageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorApisIdResourcesResourceIdCoverageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.apis[':id'].resources[':resource_id'].coverage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorApisIdResourcesResourceIdCoverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
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
                    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
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
                    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectorApisIdResourcesResourceIdCoverageQueryKey>
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
              (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorApisIdResourcesResourceIdCoverageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorApisIdResourcesResourceIdCoverageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.apis[':id'].resources[':resource_id'].coverage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connector.connectors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/connectors', keyArgs] as const
}

export function getConnectorConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connector.connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connector.connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
            >
          >,
          ReturnType<typeof getConnectorConnectorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorConnectorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connector.connectors)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/connectors/:id', keyArgs] as const
}

export function getConnectorConnectorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connector.connectors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorConnectorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.connectors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connector.connectors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectorConnectorsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorConnectorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorConnectorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.connectors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorConnectorsIdDocsDocIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/connectors/:id/docs/:doc_id', keyArgs] as const
}

export function getConnectorConnectorsIdDocsDocIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorConnectorsIdDocsDocIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.connectors[':id'].docs[':doc_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorConnectorsIdDocsDocId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
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
                  ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConnectorConnectorsIdDocsDocIdQueryKey>
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
            ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorConnectorsIdDocsDocIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorConnectorsIdDocsDocIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.connectors[':id'].docs[':doc_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorConnectorsIdResourcesResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connector', '/connector/connectors/:id/resources/:resource_id', keyArgs] as const
}

export function getConnectorConnectorsIdResourcesResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorConnectorsIdResourcesResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connector.connectors[':id'].resources[':resource_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorConnectorsIdResourcesResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
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
                    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
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
                    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectorConnectorsIdResourcesResourceIdQueryKey>
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
              (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorConnectorsIdResourcesResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorConnectorsIdResourcesResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connector.connectors[':id'].resources[':resource_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
