import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiPatchV1AdvisoriesQueryKey(
  args: InferRequestType<typeof client.api.patch.v1.advisories.$get>,
) {
  return ['api', '/api/patch/v1/advisories', args] as const
}

export function getApiPatchV1AdvisoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patch.v1.advisories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1AdvisoriesQueryKey>
  >({
    queryKey: getApiPatchV1AdvisoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.advisories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1Advisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patch.v1.advisories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1AdvisoriesQueryKey>
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
      ...getApiPatchV1AdvisoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1AdvisoriesAdvisoryIdQueryKey(
  args: InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
) {
  return ['api', '/api/patch/v1/advisories/:advisory_id', args] as const
}

export function getApiPatchV1AdvisoriesAdvisoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdQueryKey>
  >({
    queryKey: getApiPatchV1AdvisoriesAdvisoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.advisories[':advisory_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1AdvisoriesAdvisoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdQueryKey>
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
      ...getApiPatchV1AdvisoriesAdvisoryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
) {
  return ['api', '/api/patch/v1/advisories/:advisory_id/systems', args] as const
}

export function getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey>
  >({
    queryKey: getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.advisories[':advisory_id'].systems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1AdvisoriesAdvisoryIdSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey>
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
      ...getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportAdvisoriesQueryKey(
  args: InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
) {
  return ['api', '/api/patch/v1/export/advisories', args] as const
}

export function getApiPatchV1ExportAdvisoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportAdvisoriesQueryKey>
  >({
    queryKey: getApiPatchV1ExportAdvisoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.advisories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportAdvisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportAdvisoriesQueryKey>
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
      ...getApiPatchV1ExportAdvisoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/advisories/:advisory_id/systems', args] as const
}

export function getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey>
  >({
    queryKey: getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.advisories[':advisory_id'].systems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportAdvisoriesAdvisoryIdSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey>
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
      ...getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportPackagesQueryKey(
  args: InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
) {
  return ['api', '/api/patch/v1/export/packages', args] as const
}

export function getApiPatchV1ExportPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportPackagesQueryKey>
  >({
    queryKey: getApiPatchV1ExportPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.packages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportPackagesQueryKey>
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
      ...getApiPatchV1ExportPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportPackagesPackageNameSystemsQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/packages/:package_name/systems', args] as const
}

export function getApiPatchV1ExportPackagesPackageNameSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportPackagesPackageNameSystemsQueryKey>
  >({
    queryKey: getApiPatchV1ExportPackagesPackageNameSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.packages[':package_name'].systems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportPackagesPackageNameSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportPackagesPackageNameSystemsQueryKey>
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
      ...getApiPatchV1ExportPackagesPackageNameSystemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportSystemsQueryKey(
  args: InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
) {
  return ['api', '/api/patch/v1/export/systems', args] as const
}

export function getApiPatchV1ExportSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportSystemsQueryKey>
  >({
    queryKey: getApiPatchV1ExportSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.systems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportSystemsQueryKey>
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
      ...getApiPatchV1ExportSystemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/systems/:inventory_id/advisories', args] as const
}

export function getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey>
  >({
    queryKey: getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.systems[':inventory_id'].advisories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportSystemsInventoryIdAdvisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey>
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
      ...getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/systems/:inventory_id/packages', args] as const
}

export function getApiPatchV1ExportSystemsInventoryIdPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey>
  >({
    queryKey: getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.export.systems[':inventory_id'].packages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1ExportSystemsInventoryIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey>
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
      ...getApiPatchV1ExportSystemsInventoryIdPackagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1PackagesIndexQueryKey(
  args: InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
) {
  return ['api', '/api/patch/v1/packages/', args] as const
}

export function getApiPatchV1PackagesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesIndexQueryKey>
  >({
    queryKey: getApiPatchV1PackagesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.packages.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1PackagesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1PackagesIndexQueryKey>
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
      ...getApiPatchV1PackagesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1PackagesPackageNameQueryKey(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
) {
  return ['api', '/api/patch/v1/packages/:package_name', args] as const
}

export function getApiPatchV1PackagesPackageNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesPackageNameQueryKey>
  >({
    queryKey: getApiPatchV1PackagesPackageNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.packages[':package_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1PackagesPackageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1PackagesPackageNameQueryKey>
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
      ...getApiPatchV1PackagesPackageNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1PackagesPackageNameSystemsQueryKey(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>,
) {
  return ['api', '/api/patch/v1/packages/:package_name/systems', args] as const
}

export function getApiPatchV1PackagesPackageNameSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesPackageNameSystemsQueryKey>
  >({
    queryKey: getApiPatchV1PackagesPackageNameSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.packages[':package_name'].systems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1PackagesPackageNameSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1PackagesPackageNameSystemsQueryKey>
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
      ...getApiPatchV1PackagesPackageNameSystemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1PackagesPackageNameVersionsQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
) {
  return ['api', '/api/patch/v1/packages/:package_name/versions', args] as const
}

export function getApiPatchV1PackagesPackageNameVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesPackageNameVersionsQueryKey>
  >({
    queryKey: getApiPatchV1PackagesPackageNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.packages[':package_name'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1PackagesPackageNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1PackagesPackageNameVersionsQueryKey>
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
      ...getApiPatchV1PackagesPackageNameVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1SystemsQueryKey(
  args: InferRequestType<typeof client.api.patch.v1.systems.$get>,
) {
  return ['api', '/api/patch/v1/systems', args] as const
}

export function getApiPatchV1SystemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.patch.v1.systems.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsQueryKey>
  >({
    queryKey: getApiPatchV1SystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.systems.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPatchV1Systems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.patch.v1.systems.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1SystemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatchV1SystemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiPatchV1SystemsInventoryIdQueryKey(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id', args] as const
}

export function getApiPatchV1SystemsInventoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsInventoryIdQueryKey>
  >({
    queryKey: getApiPatchV1SystemsInventoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.systems[':inventory_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1SystemsInventoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1SystemsInventoryIdQueryKey>
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
      ...getApiPatchV1SystemsInventoryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiPatchV1SystemsInventoryIdMutationKey() {
  return ['api', '/api/patch/v1/systems/:inventory_id', 'DELETE'] as const
}

export function getDeleteApiPatchV1SystemsInventoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatchV1SystemsInventoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
    ) {
      return parseResponse(client.api.patch.v1.systems[':inventory_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiPatchV1SystemsInventoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiPatchV1SystemsInventoryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id/advisories', args] as const
}

export function getApiPatchV1SystemsInventoryIdAdvisoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey>
  >({
    queryKey: getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.systems[':inventory_id'].advisories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1SystemsInventoryIdAdvisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey>
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
      ...getApiPatchV1SystemsInventoryIdAdvisoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiPatchV1SystemsInventoryIdPackagesQueryKey(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id/packages', args] as const
}

export function getApiPatchV1SystemsInventoryIdPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsInventoryIdPackagesQueryKey>
  >({
    queryKey: getApiPatchV1SystemsInventoryIdPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.patch.v1.systems[':inventory_id'].packages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPatchV1SystemsInventoryIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatchV1SystemsInventoryIdPackagesQueryKey>
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
      ...getApiPatchV1SystemsInventoryIdPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiPatchV1ViewsAdvisoriesSystemsMutationKey() {
  return ['api', '/api/patch/v1/views/advisories/systems', 'POST'] as const
}

export function getPostApiPatchV1ViewsAdvisoriesSystemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.patch.v1.views.advisories.systems.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatchV1ViewsAdvisoriesSystemsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
    ) {
      return parseResponse(client.api.patch.v1.views.advisories.systems.$post(args, options))
    },
  })
}

export function injectPostApiPatchV1ViewsAdvisoriesSystems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patch.v1.views.advisories.systems.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPatchV1ViewsAdvisoriesSystemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiPatchV1ViewsSystemsAdvisoriesMutationKey() {
  return ['api', '/api/patch/v1/views/systems/advisories', 'POST'] as const
}

export function getPostApiPatchV1ViewsSystemsAdvisoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.patch.v1.views.systems.advisories.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatchV1ViewsSystemsAdvisoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
    ) {
      return parseResponse(client.api.patch.v1.views.systems.advisories.$post(args, options))
    },
  })
}

export function injectPostApiPatchV1ViewsSystemsAdvisories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.patch.v1.views.systems.advisories.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPatchV1ViewsSystemsAdvisoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
