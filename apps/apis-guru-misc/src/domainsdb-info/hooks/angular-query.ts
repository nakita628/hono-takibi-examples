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

export function getDomainsKey() {
  return ['domains'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getDomainsSearchQueryKey(
  args: InferRequestType<typeof client.domains.search.$get>,
) {
  return ['domains', '/domains/search', args] as const
}

export function getDomainsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSearchQueryKey>
  >({
    queryKey: getDomainsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDomainsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDomainsTldZoneIdQueryKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id', args] as const
}

export function getDomainsTldZoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdQueryKey>
  >({
    queryKey: getDomainsTldZoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.tld[':zone_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsTldZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsTldZoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsTldZoneIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDomainsTldZoneIdDownloadQueryKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id/download', args] as const
}

export function getDomainsTldZoneIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdDownloadQueryKey>
  >({
    queryKey: getDomainsTldZoneIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.tld[':zone_id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsTldZoneIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsTldZoneIdDownloadQueryKey>
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
      ...getDomainsTldZoneIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDomainsTldZoneIdSearchQueryKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id/search', args] as const
}

export function getDomainsTldZoneIdSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsTldZoneIdSearchQueryKey>
  >({
    queryKey: getDomainsTldZoneIdSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.tld[':zone_id'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsTldZoneIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsTldZoneIdSearchQueryKey>
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
      ...getDomainsTldZoneIdSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDomainsUpdatesAddedQueryKey(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
) {
  return ['domains', '/domains/updates/added', args] as const
}

export function getDomainsUpdatesAddedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesAddedQueryKey>
  >({
    queryKey: getDomainsUpdatesAddedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.added.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDomainsUpdatesAdded<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.updates.added.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesAddedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsUpdatesAddedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDomainsUpdatesAddedDownloadQueryKey(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
) {
  return ['domains', '/domains/updates/added/download', args] as const
}

export function getDomainsUpdatesAddedDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
  >({
    queryKey: getDomainsUpdatesAddedDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.added.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsUpdatesAddedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesAddedDownloadQueryKey>
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
      ...getDomainsUpdatesAddedDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDomainsUpdatesDeletedQueryKey(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
) {
  return ['domains', '/domains/updates/deleted', args] as const
}

export function getDomainsUpdatesDeletedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
  >({
    queryKey: getDomainsUpdatesDeletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.deleted.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsUpdatesDeleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesDeletedQueryKey>
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
      ...getDomainsUpdatesDeletedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDomainsUpdatesDeletedDownloadQueryKey(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
) {
  return ['domains', '/domains/updates/deleted/download', args] as const
}

export function getDomainsUpdatesDeletedDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesDeletedDownloadQueryKey>
  >({
    queryKey: getDomainsUpdatesDeletedDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.deleted.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsUpdatesDeletedDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesDeletedDownloadQueryKey>
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
      ...getDomainsUpdatesDeletedDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDomainsUpdatesListQueryKey(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
) {
  return ['domains', '/domains/updates/list', args] as const
}

export function getDomainsUpdatesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.updates.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsUpdatesListQueryKey>
  >({
    queryKey: getDomainsUpdatesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.updates.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDomainsUpdatesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.updates.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsUpdatesListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsUpdatesListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInfoApiQueryKey(args: InferRequestType<typeof client.info.api.$get>) {
  return ['info', '/info/api', args] as const
}

export function getInfoApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.info.api.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoApiQueryKey>
  >({
    queryKey: getInfoApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.api.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInfoApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.info.api.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoApiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInfoStatIndexQueryKey(
  args: InferRequestType<typeof client.info.stat.index.$get>,
) {
  return ['info', '/info/stat/', args] as const
}

export function getInfoStatIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.info.stat.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoStatIndexQueryKey>
  >({
    queryKey: getInfoStatIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.stat.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInfoStatIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.info.stat.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInfoStatIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoStatIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInfoStatZoneQueryKey(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
) {
  return ['info', '/info/stat/:zone', args] as const
}

export function getInfoStatZoneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoStatZoneQueryKey>
  >({
    queryKey: getInfoStatZoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.stat[':zone'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInfoStatZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoStatZoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoStatZoneQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInfoTldIndexQueryKey() {
  return ['info', '/info/tld/'] as const
}

export function getInfoTldIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoTldIndexQueryKey>
  >({
    queryKey: getInfoTldIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.tld.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInfoTldIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInfoTldIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoTldIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getInfoTldZoneQueryKey(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
) {
  return ['info', '/info/tld/:zone', args] as const
}

export function getInfoTldZoneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoTldZoneQueryKey>
  >({
    queryKey: getInfoTldZoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.tld[':zone'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInfoTldZone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoTldZoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoTldZoneQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
