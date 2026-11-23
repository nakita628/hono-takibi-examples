import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConnectorKey() {
  return ['connector'] as const
}

export function getConnectorApisQueryKey(
  args: InferRequestType<typeof client.connector.apis.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis', keyArgs] as const
}

export function getConnectorApisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connector.apis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorApisQueryKey>
  >({
    queryKey: getConnectorApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnectorApis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connector.apis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectorApisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConnectorApisIdQueryKey(
  args: InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis/:id', keyArgs] as const
}

export function getConnectorApisIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorApisIdQueryKey>
  >({
    queryKey: getConnectorApisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.apis[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnectorApisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorApisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectorApisIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConnectorApisIdResourcesResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis/:id/resources/:resource_id', keyArgs] as const
}

export function getConnectorApisIdResourcesResourceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectorApisIdResourcesResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.apis[':id'].resources[':resource_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorApisIdResourcesResourceId<
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
  args: () => InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getConnectorApisIdResourcesResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorApisIdResourcesResourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConnectorApisIdResourcesResourceIdCoverageQueryKey(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis/:id/resources/:resource_id/coverage', keyArgs] as const
}

export function getConnectorApisIdResourcesResourceIdCoverageQueryOptions<
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
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectorApisIdResourcesResourceIdCoverageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.apis[':id'].resources[':resource_id'].coverage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorApisIdResourcesResourceIdCoverage<
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
  args: () => InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorApisIdResourcesResourceIdCoverageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getConnectorConnectorsQueryKey(
  args: InferRequestType<typeof client.connector.connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors', keyArgs] as const
}

export function getConnectorConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connector.connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorConnectorsQueryKey>
  >({
    queryKey: getConnectorConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnectorConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connector.connectors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectorConnectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConnectorConnectorsIdQueryKey(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors/:id', keyArgs] as const
}

export function getConnectorConnectorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectorConnectorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.connectors[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorConnectorsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConnectorConnectorsIdDocsDocIdQueryKey(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors/:id/docs/:doc_id', keyArgs] as const
}

export function getConnectorConnectorsIdDocsDocIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectorConnectorsIdDocsDocIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.connectors[':id'].docs[':doc_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorConnectorsIdDocsDocId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorConnectorsIdDocsDocIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConnectorConnectorsIdResourcesResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors/:id/resources/:resource_id', keyArgs] as const
}

export function getConnectorConnectorsIdResourcesResourceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectorConnectorsIdResourcesResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connector.connectors[':id'].resources[':resource_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorConnectorsIdResourcesResourceId<
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
  args: () => InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorConnectorsIdResourcesResourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
