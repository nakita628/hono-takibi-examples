import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConnectorKey() {
  return ['connector'] as const
}

export function getGetConnectorApisKey(args: InferRequestType<typeof client.connector.apis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis', keyArgs] as const
}

export function useGetConnectorApis<TError = unknown>(
  args: InferRequestType<typeof client.connector.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectorApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.apis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorApis<TError = unknown>(
  args: InferRequestType<typeof client.connector.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectorApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connector.apis.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.apis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorApisIdKey(
  args: InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis/:id', keyArgs] as const
}

export function useGetConnectorApisId<TError = unknown>(
  args: InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorApisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.apis[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorApisId<TError = unknown>(
  args: InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorApisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connector.apis)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.apis[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorApisIdResourcesResourceIdKey(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis/:id/resources/:resource_id', keyArgs] as const
}

export function useGetConnectorApisIdResourcesResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorApisIdResourcesResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connector.apis[':id'].resources[':resource_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorApisIdResourcesResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorApisIdResourcesResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connector.apis[':id'].resources[':resource_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorApisIdResourcesResourceIdCoverageKey(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/apis/:id/resources/:resource_id/coverage', keyArgs] as const
}

export function useGetConnectorApisIdResourcesResourceIdCoverage<TError = unknown>(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorApisIdResourcesResourceIdCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connector.apis[':id'].resources[':resource_id'].coverage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorApisIdResourcesResourceIdCoverage<TError = unknown>(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorApisIdResourcesResourceIdCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connector.apis[':id'].resources[':resource_id'].coverage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorConnectorsKey(
  args: InferRequestType<typeof client.connector.connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors', keyArgs] as const
}

export function useGetConnectorConnectors<TError = unknown>(
  args: InferRequestType<typeof client.connector.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorConnectors<TError = unknown>(
  args: InferRequestType<typeof client.connector.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connector.connectors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorConnectorsIdKey(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors/:id', keyArgs] as const
}

export function useGetConnectorConnectorsId<TError = unknown>(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.connectors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorConnectorsId<TError = unknown>(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connector.connectors)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connector.connectors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorConnectorsIdDocsDocIdKey(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors/:id/docs/:doc_id', keyArgs] as const
}

export function useGetConnectorConnectorsIdDocsDocId<TError = unknown>(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsIdDocsDocIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.connector.connectors[':id'].docs[':doc_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorConnectorsIdDocsDocId<TError = unknown>(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsIdDocsDocIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.connector.connectors[':id'].docs[':doc_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectorConnectorsIdResourcesResourceIdKey(
  args: InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['connector', '/connector/connectors/:id/resources/:resource_id', keyArgs] as const
}

export function useGetConnectorConnectorsIdResourcesResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsIdResourcesResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connector.connectors[':id'].resources[':resource_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectorConnectorsIdResourcesResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectorConnectorsIdResourcesResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connector.connectors[':id'].resources[':resource_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
