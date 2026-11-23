import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiPatchV1AdvisoriesKey(
  args: InferRequestType<typeof client.api.patch.v1.advisories.$get>,
) {
  return ['api', '/api/patch/v1/advisories', args] as const
}

export function useGetApiPatchV1Advisories<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.advisories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
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
        ? getGetApiPatchV1AdvisoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.advisories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1Advisories<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.advisories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
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
        ? getGetApiPatchV1AdvisoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.advisories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1AdvisoriesAdvisoryIdKey(
  args: InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
) {
  return ['api', '/api/patch/v1/advisories/:advisory_id', args] as const
}

export function useGetApiPatchV1AdvisoriesAdvisoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
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
        ? getGetApiPatchV1AdvisoriesAdvisoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.patch.v1.advisories[':advisory_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1AdvisoriesAdvisoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
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
        ? getGetApiPatchV1AdvisoriesAdvisoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.patch.v1.advisories[':advisory_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1AdvisoriesAdvisoryIdSystemsKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
) {
  return ['api', '/api/patch/v1/advisories/:advisory_id/systems', args] as const
}

export function useGetApiPatchV1AdvisoriesAdvisoryIdSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
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
        ? getGetApiPatchV1AdvisoriesAdvisoryIdSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.advisories[':advisory_id'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1AdvisoriesAdvisoryIdSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
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
        ? getGetApiPatchV1AdvisoriesAdvisoryIdSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.advisories[':advisory_id'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportAdvisoriesKey(
  args: InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
) {
  return ['api', '/api/patch/v1/export/advisories', args] as const
}

export function useGetApiPatchV1ExportAdvisories<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
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
        ? getGetApiPatchV1ExportAdvisoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.export.advisories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportAdvisories<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
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
        ? getGetApiPatchV1ExportAdvisoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.export.advisories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportAdvisoriesAdvisoryIdSystemsKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/advisories/:advisory_id/systems', args] as const
}

export function useGetApiPatchV1ExportAdvisoriesAdvisoryIdSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportAdvisoriesAdvisoryIdSystemsKey(args)
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
                (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
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
          client.api.patch.v1.export.advisories[':advisory_id'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportAdvisoriesAdvisoryIdSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportAdvisoriesAdvisoryIdSystemsKey(args)
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
                (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
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
          client.api.patch.v1.export.advisories[':advisory_id'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportPackagesKey(
  args: InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
) {
  return ['api', '/api/patch/v1/export/packages', args] as const
}

export function useGetApiPatchV1ExportPackages<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
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
        ? getGetApiPatchV1ExportPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.export.packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportPackages<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
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
        ? getGetApiPatchV1ExportPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.export.packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportPackagesPackageNameSystemsKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/packages/:package_name/systems', args] as const
}

export function useGetApiPatchV1ExportPackagesPackageNameSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportPackagesPackageNameSystemsKey(args)
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
                (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
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
          client.api.patch.v1.export.packages[':package_name'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportPackagesPackageNameSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportPackagesPackageNameSystemsKey(args)
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
                (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
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
          client.api.patch.v1.export.packages[':package_name'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportSystemsKey(
  args: InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
) {
  return ['api', '/api/patch/v1/export/systems', args] as const
}

export function useGetApiPatchV1ExportSystems<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
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
        ? getGetApiPatchV1ExportSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.export.systems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportSystems<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
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
        ? getGetApiPatchV1ExportSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.export.systems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportSystemsInventoryIdAdvisoriesKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/systems/:inventory_id/advisories', args] as const
}

export function useGetApiPatchV1ExportSystemsInventoryIdAdvisories<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportSystemsInventoryIdAdvisoriesKey(args)
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
                (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
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
          client.api.patch.v1.export.systems[':inventory_id'].advisories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportSystemsInventoryIdAdvisories<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportSystemsInventoryIdAdvisoriesKey(args)
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
                (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
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
          client.api.patch.v1.export.systems[':inventory_id'].advisories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1ExportSystemsInventoryIdPackagesKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
) {
  return ['api', '/api/patch/v1/export/systems/:inventory_id/packages', args] as const
}

export function useGetApiPatchV1ExportSystemsInventoryIdPackages<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportSystemsInventoryIdPackagesKey(args)
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
                (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
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
          client.api.patch.v1.export.systems[':inventory_id'].packages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1ExportSystemsInventoryIdPackages<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1ExportSystemsInventoryIdPackagesKey(args)
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
                (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
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
          client.api.patch.v1.export.systems[':inventory_id'].packages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1PackagesIndexKey(
  args: InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
) {
  return ['api', '/api/patch/v1/packages/', args] as const
}

export function useGetApiPatchV1PackagesIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
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
        ? getGetApiPatchV1PackagesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.packages.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1PackagesIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
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
        ? getGetApiPatchV1PackagesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.packages.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1PackagesPackageNameKey(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
) {
  return ['api', '/api/patch/v1/packages/:package_name', args] as const
}

export function useGetApiPatchV1PackagesPackageName<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
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
        ? getGetApiPatchV1PackagesPackageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.patch.v1.packages[':package_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1PackagesPackageName<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
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
        ? getGetApiPatchV1PackagesPackageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.patch.v1.packages[':package_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1PackagesPackageNameSystemsKey(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>,
) {
  return ['api', '/api/patch/v1/packages/:package_name/systems', args] as const
}

export function useGetApiPatchV1PackagesPackageNameSystems<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
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
        ? getGetApiPatchV1PackagesPackageNameSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.packages[':package_name'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1PackagesPackageNameSystems<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
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
        ? getGetApiPatchV1PackagesPackageNameSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.packages[':package_name'].systems.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1PackagesPackageNameVersionsKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
) {
  return ['api', '/api/patch/v1/packages/:package_name/versions', args] as const
}

export function useGetApiPatchV1PackagesPackageNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
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
        ? getGetApiPatchV1PackagesPackageNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.packages[':package_name'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1PackagesPackageNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
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
        ? getGetApiPatchV1PackagesPackageNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.packages[':package_name'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1SystemsKey(
  args: InferRequestType<typeof client.api.patch.v1.systems.$get>,
) {
  return ['api', '/api/patch/v1/systems', args] as const
}

export function useGetApiPatchV1Systems<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.systems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
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
        ? getGetApiPatchV1SystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.systems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1Systems<TError = unknown>(
  args: InferRequestType<typeof client.api.patch.v1.systems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
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
        ? getGetApiPatchV1SystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.patch.v1.systems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1SystemsInventoryIdKey(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id', args] as const
}

export function useGetApiPatchV1SystemsInventoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
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
        ? getGetApiPatchV1SystemsInventoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.patch.v1.systems[':inventory_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1SystemsInventoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
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
        ? getGetApiPatchV1SystemsInventoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.patch.v1.systems[':inventory_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPatchV1SystemsInventoryIdKey() {
  return ['api', '/api/patch/v1/systems/:inventory_id', 'DELETE'] as const
}

export function useDeleteApiPatchV1SystemsInventoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPatchV1SystemsInventoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>
        },
      ) => parseResponse(client.api.patch.v1.systems[':inventory_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPatchV1SystemsInventoryIdAdvisoriesKey(
  args: InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id/advisories', args] as const
}

export function useGetApiPatchV1SystemsInventoryIdAdvisories<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1SystemsInventoryIdAdvisoriesKey(args)
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
                (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
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
          client.api.patch.v1.systems[':inventory_id'].advisories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1SystemsInventoryIdAdvisories<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiPatchV1SystemsInventoryIdAdvisoriesKey(args)
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
                (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
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
          client.api.patch.v1.systems[':inventory_id'].advisories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPatchV1SystemsInventoryIdPackagesKey(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id/packages', args] as const
}

export function useGetApiPatchV1SystemsInventoryIdPackages<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
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
        ? getGetApiPatchV1SystemsInventoryIdPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.systems[':inventory_id'].packages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPatchV1SystemsInventoryIdPackages<TError = unknown>(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
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
        ? getGetApiPatchV1SystemsInventoryIdPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.patch.v1.systems[':inventory_id'].packages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiPatchV1ViewsAdvisoriesSystemsKey() {
  return ['api', '/api/patch/v1/views/advisories/systems', 'POST'] as const
}

export function usePostApiPatchV1ViewsAdvisoriesSystems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.patch.v1.views.advisories.systems.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPatchV1ViewsAdvisoriesSystemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post> },
      ) => parseResponse(client.api.patch.v1.views.advisories.systems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPatchV1ViewsSystemsAdvisoriesKey() {
  return ['api', '/api/patch/v1/views/systems/advisories', 'POST'] as const
}

export function usePostApiPatchV1ViewsSystemsAdvisories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.patch.v1.views.systems.advisories.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPatchV1ViewsSystemsAdvisoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post> },
      ) => parseResponse(client.api.patch.v1.views.systems.advisories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
