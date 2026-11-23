import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBusinessNamesKey() {
  return ['business-names'] as const
}

export function getClassificationsKey() {
  return ['classifications'] as const
}

export function getIndividualsKey() {
  return ['individuals'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getOrganisationsKey() {
  return ['organisations'] as const
}

export function getGetBusinessNamesKey(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business-names', '/business-names', keyArgs] as const
}

export function useGetBusinessNames<TError = unknown>(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBusinessNamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessNames<TError = unknown>(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBusinessNamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsAddressTypesKey(
  args: InferRequestType<(typeof client.classifications)['address-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/address-types', keyArgs] as const
}

export function useGetClassificationsAddressTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['address-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
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
        ? getGetClassificationsAddressTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['address-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsAddressTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['address-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
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
        ? getGetClassificationsAddressTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['address-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsBusinessNameLifecycleStatesKey(
  args: InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/business-name-lifecycle-states', keyArgs] as const
}

export function useGetClassificationsBusinessNameLifecycleStates<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
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
        ? getGetClassificationsBusinessNameLifecycleStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classifications['business-name-lifecycle-states'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsBusinessNameLifecycleStates<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
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
        ? getGetClassificationsBusinessNameLifecycleStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classifications['business-name-lifecycle-states'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsElectronicAddressTypesKey(
  args: InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/electronic-address-types', keyArgs] as const
}

export function useGetClassificationsElectronicAddressTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
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
        ? getGetClassificationsElectronicAddressTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['electronic-address-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsElectronicAddressTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
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
        ? getGetClassificationsElectronicAddressTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['electronic-address-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsGendersKey(
  args: InferRequestType<typeof client.classifications.genders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/genders', keyArgs] as const
}

export function useGetClassificationsGenders<TError = unknown>(
  args: InferRequestType<typeof client.classifications.genders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
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
        ? getGetClassificationsGendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications.genders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsGenders<TError = unknown>(
  args: InferRequestType<typeof client.classifications.genders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
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
        ? getGetClassificationsGendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications.genders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsLegalEntityTypesKey(
  args: InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/legal-entity-types', keyArgs] as const
}

export function useGetClassificationsLegalEntityTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
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
        ? getGetClassificationsLegalEntityTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['legal-entity-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsLegalEntityTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
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
        ? getGetClassificationsLegalEntityTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['legal-entity-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsLicenseLifecycleStatesKey(
  args: InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/license-lifecycle-states', keyArgs] as const
}

export function useGetClassificationsLicenseLifecycleStates<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
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
        ? getGetClassificationsLicenseLifecycleStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['license-lifecycle-states'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsLicenseLifecycleStates<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
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
        ? getGetClassificationsLicenseLifecycleStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['license-lifecycle-states'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsLicenseTypesKey(
  args: InferRequestType<(typeof client.classifications)['license-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/license-types', keyArgs] as const
}

export function useGetClassificationsLicenseTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['license-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
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
        ? getGetClassificationsLicenseTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['license-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsLicenseTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['license-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
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
        ? getGetClassificationsLicenseTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['license-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsNameDirectionsKey(
  args: InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/name-directions', keyArgs] as const
}

export function useGetClassificationsNameDirections<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
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
        ? getGetClassificationsNameDirectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['name-directions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsNameDirections<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
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
        ? getGetClassificationsNameDirectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.classifications['name-directions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsNamePrefixesKey(
  args: InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/name-prefixes', keyArgs] as const
}

export function useGetClassificationsNamePrefixes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
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
        ? getGetClassificationsNamePrefixesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['name-prefixes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsNamePrefixes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
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
        ? getGetClassificationsNamePrefixesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['name-prefixes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsNameTypesKey(
  args: InferRequestType<(typeof client.classifications)['name-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/name-types', keyArgs] as const
}

export function useGetClassificationsNameTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['name-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
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
        ? getGetClassificationsNameTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['name-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsNameTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['name-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
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
        ? getGetClassificationsNameTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications['name-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsRegisteredIdentifierTypesKey(
  args: InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/registered-identifier-types', keyArgs] as const
}

export function useGetClassificationsRegisteredIdentifierTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
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
        ? getGetClassificationsRegisteredIdentifierTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classifications['registered-identifier-types'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsRegisteredIdentifierTypes<TError = unknown>(
  args: InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
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
        ? getGetClassificationsRegisteredIdentifierTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.classifications['registered-identifier-types'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationsRolesKey(
  args: InferRequestType<typeof client.classifications.roles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/roles', keyArgs] as const
}

export function useGetClassificationsRoles<TError = unknown>(
  args: InferRequestType<typeof client.classifications.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
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
        ? getGetClassificationsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationsRoles<TError = unknown>(
  args: InferRequestType<typeof client.classifications.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
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
        ? getGetClassificationsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classifications.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndividualsKey(args: InferRequestType<typeof client.individuals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals', keyArgs] as const
}

export function useGetIndividuals<TError = unknown>(
  args: InferRequestType<typeof client.individuals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndividualsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividuals<TError = unknown>(
  args: InferRequestType<typeof client.individuals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndividualsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndividualsKey() {
  return ['individuals', '/individuals', 'POST'] as const
}

export function usePostIndividuals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.individuals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndividualsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.individuals.$post> }) =>
        parseResponse(client.individuals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId', keyArgs] as const
}

export function useGetIndividualsPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
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
        ? getGetIndividualsPartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
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
        ? getGetIndividualsPartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndividualsPartyIdKey() {
  return ['individuals', '/individuals/:partyId', 'PUT'] as const
}

export function usePutIndividualsPartyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndividualsPartyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.individuals)[':partyId']['$put']> },
      ) => parseResponse(client.individuals[':partyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndividualsPartyIdKey() {
  return ['individuals', '/individuals/:partyId', 'DELETE'] as const
}

export function useDeleteIndividualsPartyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndividualsPartyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.individuals)[':partyId']['$delete']> },
      ) => parseResponse(client.individuals[':partyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdAddressesKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/addresses', keyArgs] as const
}

export function useGetIndividualsPartyIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
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
        ? getGetIndividualsPartyIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
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
        ? getGetIndividualsPartyIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndividualsPartyIdAddressesKey() {
  return ['individuals', '/individuals/:partyId/addresses', 'POST'] as const
}

export function usePostIndividualsPartyIdAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndividualsPartyIdAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']> },
      ) => parseResponse(client.individuals[':partyId'].addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdAddressesAddressIdKey(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/addresses/:addressId', keyArgs] as const
}

export function useGetIndividualsPartyIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
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
        ? getGetIndividualsPartyIdAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.individuals[':partyId'].addresses[':addressId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
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
        ? getGetIndividualsPartyIdAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.individuals[':partyId'].addresses[':addressId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndividualsPartyIdAddressesAddressIdKey() {
  return ['individuals', '/individuals/:partyId/addresses/:addressId', 'PUT'] as const
}

export function usePutIndividualsPartyIdAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndividualsPartyIdAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId'].addresses[':addressId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndividualsPartyIdAddressesAddressIdKey() {
  return ['individuals', '/individuals/:partyId/addresses/:addressId', 'DELETE'] as const
}

export function useDeleteIndividualsPartyIdAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndividualsPartyIdAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId'].addresses[':addressId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdBusinessNamesKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/business-names', keyArgs] as const
}

export function useGetIndividualsPartyIdBusinessNames<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
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
        ? getGetIndividualsPartyIdBusinessNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.individuals[':partyId']['business-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdBusinessNames<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
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
        ? getGetIndividualsPartyIdBusinessNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.individuals[':partyId']['business-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndividualsPartyIdBusinessNamesKey() {
  return ['individuals', '/individuals/:partyId/business-names', 'POST'] as const
}

export function usePostIndividualsPartyIdBusinessNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndividualsPartyIdBusinessNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>
        },
      ) =>
        parseResponse(client.individuals[':partyId']['business-names'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdBusinessNamesProductIdKey(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/business-names/:productId', keyArgs] as const
}

export function useGetIndividualsPartyIdBusinessNamesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
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
        ? getGetIndividualsPartyIdBusinessNamesProductIdKey(args)
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
                (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
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
          client.individuals[':partyId']['business-names'][':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdBusinessNamesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
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
        ? getGetIndividualsPartyIdBusinessNamesProductIdKey(args)
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
                (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
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
          client.individuals[':partyId']['business-names'][':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndividualsPartyIdBusinessNamesProductIdKey() {
  return ['individuals', '/individuals/:partyId/business-names/:productId', 'PUT'] as const
}

export function usePutIndividualsPartyIdBusinessNamesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndividualsPartyIdBusinessNamesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId']['business-names'][':productId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndividualsPartyIdBusinessNamesProductIdKey() {
  return ['individuals', '/individuals/:partyId/business-names/:productId', 'DELETE'] as const
}

export function useDeleteIndividualsPartyIdBusinessNamesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndividualsPartyIdBusinessNamesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId']['business-names'][':productId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdElectronicAddressesKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/electronic-addresses', keyArgs] as const
}

export function useGetIndividualsPartyIdElectronicAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
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
        ? getGetIndividualsPartyIdElectronicAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.individuals[':partyId']['electronic-addresses'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdElectronicAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
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
        ? getGetIndividualsPartyIdElectronicAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.individuals[':partyId']['electronic-addresses'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIndividualsPartyIdElectronicAddressesKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses', 'POST'] as const
}

export function usePostIndividualsPartyIdElectronicAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndividualsPartyIdElectronicAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId']['electronic-addresses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdElectronicAddressesAddressIdKey(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', keyArgs] as const
}

export function useGetIndividualsPartyIdElectronicAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
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
        ? getGetIndividualsPartyIdElectronicAddressesAddressIdKey(args)
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
                (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
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
          client.individuals[':partyId']['electronic-addresses'][':addressId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdElectronicAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
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
        ? getGetIndividualsPartyIdElectronicAddressesAddressIdKey(args)
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
                (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
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
          client.individuals[':partyId']['electronic-addresses'][':addressId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndividualsPartyIdElectronicAddressesAddressIdKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', 'PUT'] as const
}

export function usePutIndividualsPartyIdElectronicAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndividualsPartyIdElectronicAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId']['electronic-addresses'][':addressId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndividualsPartyIdElectronicAddressesAddressIdKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', 'DELETE'] as const
}

export function useDeleteIndividualsPartyIdElectronicAddressesAddressId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndividualsPartyIdElectronicAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId']['electronic-addresses'][':addressId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdLicensesKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/licenses', keyArgs] as const
}

export function useGetIndividualsPartyIdLicenses<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
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
        ? getGetIndividualsPartyIdLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdLicenses<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
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
        ? getGetIndividualsPartyIdLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndividualsPartyIdLicensesKey() {
  return ['individuals', '/individuals/:partyId/licenses', 'POST'] as const
}

export function usePostIndividualsPartyIdLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndividualsPartyIdLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']> },
      ) => parseResponse(client.individuals[':partyId'].licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdLicensesProductIdKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/licenses/:productId', keyArgs] as const
}

export function useGetIndividualsPartyIdLicensesProductId<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
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
        ? getGetIndividualsPartyIdLicensesProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.individuals[':partyId'].licenses[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdLicensesProductId<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
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
        ? getGetIndividualsPartyIdLicensesProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.individuals[':partyId'].licenses[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndividualsPartyIdLicensesProductIdKey() {
  return ['individuals', '/individuals/:partyId/licenses/:productId', 'PUT'] as const
}

export function usePutIndividualsPartyIdLicensesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndividualsPartyIdLicensesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId'].licenses[':productId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndividualsPartyIdLicensesProductIdKey() {
  return ['individuals', '/individuals/:partyId/licenses/:productId', 'DELETE'] as const
}

export function useDeleteIndividualsPartyIdLicensesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndividualsPartyIdLicensesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.individuals[':partyId'].licenses[':productId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdRolesKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/roles', keyArgs] as const
}

export function useGetIndividualsPartyIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
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
        ? getGetIndividualsPartyIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
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
        ? getGetIndividualsPartyIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individuals[':partyId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndividualsPartyIdRolesKey() {
  return ['individuals', '/individuals/:partyId/roles', 'POST'] as const
}

export function usePostIndividualsPartyIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndividualsPartyIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']> },
      ) => parseResponse(client.individuals[':partyId'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndividualsPartyIdRolesRoleIdKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/roles/:roleId', keyArgs] as const
}

export function useGetIndividualsPartyIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
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
        ? getGetIndividualsPartyIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.individuals[':partyId'].roles[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualsPartyIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
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
        ? getGetIndividualsPartyIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.individuals[':partyId'].roles[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndividualsPartyIdRolesRoleIdKey() {
  return ['individuals', '/individuals/:partyId/roles/:roleId', 'PUT'] as const
}

export function usePutIndividualsPartyIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndividualsPartyIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>
        },
      ) => parseResponse(client.individuals[':partyId'].roles[':roleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndividualsPartyIdRolesRoleIdKey() {
  return ['individuals', '/individuals/:partyId/roles/:roleId', 'DELETE'] as const
}

export function useDeleteIndividualsPartyIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndividualsPartyIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(client.individuals[':partyId'].roles[':roleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicensesKey(args: InferRequestType<typeof client.licenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['licenses', '/licenses', keyArgs] as const
}

export function useGetLicenses<TError = unknown>(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.licenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLicenses<TError = unknown>(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.licenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOrganisationsKey(args: InferRequestType<typeof client.organisations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations', keyArgs] as const
}

export function useGetOrganisations<TError = unknown>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisations<TError = unknown>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function usePostOrganisations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organisations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organisations.$post> }) =>
        parseResponse(client.organisations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId', keyArgs] as const
}

export function useGetOrganisationsPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
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
        ? getGetOrganisationsPartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':partyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
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
        ? getGetOrganisationsPartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':partyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsPartyIdKey() {
  return ['organisations', '/organisations/:partyId', 'PUT'] as const
}

export function usePutOrganisationsPartyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsPartyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organisations)[':partyId']['$put']> },
      ) => parseResponse(client.organisations[':partyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsPartyIdKey() {
  return ['organisations', '/organisations/:partyId', 'DELETE'] as const
}

export function useDeleteOrganisationsPartyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsPartyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organisations)[':partyId']['$delete']> },
      ) => parseResponse(client.organisations[':partyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdAddressesKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/addresses', keyArgs] as const
}

export function useGetOrganisationsPartyIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
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
        ? getGetOrganisationsPartyIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
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
        ? getGetOrganisationsPartyIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsPartyIdAddressesKey() {
  return ['organisations', '/organisations/:partyId/addresses', 'POST'] as const
}

export function usePostOrganisationsPartyIdAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsPartyIdAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>
        },
      ) => parseResponse(client.organisations[':partyId'].addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdAddressesAddressIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/addresses/:addressId', keyArgs] as const
}

export function useGetOrganisationsPartyIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
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
        ? getGetOrganisationsPartyIdAddressesAddressIdKey(args)
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
                (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
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
          client.organisations[':partyId'].addresses[':addressId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
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
        ? getGetOrganisationsPartyIdAddressesAddressIdKey(args)
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
                (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
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
          client.organisations[':partyId'].addresses[':addressId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsPartyIdAddressesAddressIdKey() {
  return ['organisations', '/organisations/:partyId/addresses/:addressId', 'PUT'] as const
}

export function usePutOrganisationsPartyIdAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsPartyIdAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId'].addresses[':addressId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsPartyIdAddressesAddressIdKey() {
  return ['organisations', '/organisations/:partyId/addresses/:addressId', 'DELETE'] as const
}

export function useDeleteOrganisationsPartyIdAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsPartyIdAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId'].addresses[':addressId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdBusinessNamesKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/business-names', keyArgs] as const
}

export function useGetOrganisationsPartyIdBusinessNames<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
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
        ? getGetOrganisationsPartyIdBusinessNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId']['business-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdBusinessNames<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
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
        ? getGetOrganisationsPartyIdBusinessNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId']['business-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsPartyIdBusinessNamesKey() {
  return ['organisations', '/organisations/:partyId/business-names', 'POST'] as const
}

export function usePostOrganisationsPartyIdBusinessNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsPartyIdBusinessNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['business-names']['$post']
          >
        },
      ) =>
        parseResponse(client.organisations[':partyId']['business-names'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdBusinessNamesProductIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/business-names/:productId', keyArgs] as const
}

export function useGetOrganisationsPartyIdBusinessNamesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
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
        ? getGetOrganisationsPartyIdBusinessNamesProductIdKey(args)
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
                (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
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
          client.organisations[':partyId']['business-names'][':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdBusinessNamesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
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
        ? getGetOrganisationsPartyIdBusinessNamesProductIdKey(args)
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
                (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
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
          client.organisations[':partyId']['business-names'][':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsPartyIdBusinessNamesProductIdKey() {
  return ['organisations', '/organisations/:partyId/business-names/:productId', 'PUT'] as const
}

export function usePutOrganisationsPartyIdBusinessNamesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsPartyIdBusinessNamesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId']['business-names'][':productId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsPartyIdBusinessNamesProductIdKey() {
  return ['organisations', '/organisations/:partyId/business-names/:productId', 'DELETE'] as const
}

export function useDeleteOrganisationsPartyIdBusinessNamesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsPartyIdBusinessNamesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId']['business-names'][':productId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdElectronicAddressesKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/electronic-addresses', keyArgs] as const
}

export function useGetOrganisationsPartyIdElectronicAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
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
        ? getGetOrganisationsPartyIdElectronicAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':partyId']['electronic-addresses'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdElectronicAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
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
        ? getGetOrganisationsPartyIdElectronicAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':partyId']['electronic-addresses'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsPartyIdElectronicAddressesKey() {
  return ['organisations', '/organisations/:partyId/electronic-addresses', 'POST'] as const
}

export function usePostOrganisationsPartyIdElectronicAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsPartyIdElectronicAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId']['electronic-addresses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdElectronicAddressesAddressIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    keyArgs,
  ] as const
}

export function useGetOrganisationsPartyIdElectronicAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
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
        ? getGetOrganisationsPartyIdElectronicAddressesAddressIdKey(args)
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
                (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
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
          client.organisations[':partyId']['electronic-addresses'][':addressId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdElectronicAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
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
        ? getGetOrganisationsPartyIdElectronicAddressesAddressIdKey(args)
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
                (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
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
          client.organisations[':partyId']['electronic-addresses'][':addressId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsPartyIdElectronicAddressesAddressIdKey() {
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    'PUT',
  ] as const
}

export function usePutOrganisationsPartyIdElectronicAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsPartyIdElectronicAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId']['electronic-addresses'][':addressId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsPartyIdElectronicAddressesAddressIdKey() {
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsPartyIdElectronicAddressesAddressId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsPartyIdElectronicAddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId']['electronic-addresses'][':addressId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdLicensesKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/licenses', keyArgs] as const
}

export function useGetOrganisationsPartyIdLicenses<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
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
        ? getGetOrganisationsPartyIdLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId'].licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdLicenses<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
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
        ? getGetOrganisationsPartyIdLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId'].licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsPartyIdLicensesKey() {
  return ['organisations', '/organisations/:partyId/licenses', 'POST'] as const
}

export function usePostOrganisationsPartyIdLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsPartyIdLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>
        },
      ) => parseResponse(client.organisations[':partyId'].licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdLicensesProductIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/licenses/:productId', keyArgs] as const
}

export function useGetOrganisationsPartyIdLicensesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
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
        ? getGetOrganisationsPartyIdLicensesProductIdKey(args)
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
                (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
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
          client.organisations[':partyId'].licenses[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdLicensesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
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
        ? getGetOrganisationsPartyIdLicensesProductIdKey(args)
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
                (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
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
          client.organisations[':partyId'].licenses[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsPartyIdLicensesProductIdKey() {
  return ['organisations', '/organisations/:partyId/licenses/:productId', 'PUT'] as const
}

export function usePutOrganisationsPartyIdLicensesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsPartyIdLicensesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId'].licenses[':productId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsPartyIdLicensesProductIdKey() {
  return ['organisations', '/organisations/:partyId/licenses/:productId', 'DELETE'] as const
}

export function useDeleteOrganisationsPartyIdLicensesProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsPartyIdLicensesProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId'].licenses[':productId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdRolesKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/roles', keyArgs] as const
}

export function useGetOrganisationsPartyIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
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
        ? getGetOrganisationsPartyIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':partyId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
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
        ? getGetOrganisationsPartyIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':partyId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsPartyIdRolesKey() {
  return ['organisations', '/organisations/:partyId/roles', 'POST'] as const
}

export function usePostOrganisationsPartyIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsPartyIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']> },
      ) => parseResponse(client.organisations[':partyId'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsPartyIdRolesRoleIdKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/roles/:roleId', keyArgs] as const
}

export function useGetOrganisationsPartyIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
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
        ? getGetOrganisationsPartyIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId'].roles[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsPartyIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
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
        ? getGetOrganisationsPartyIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':partyId'].roles[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsPartyIdRolesRoleIdKey() {
  return ['organisations', '/organisations/:partyId/roles/:roleId', 'PUT'] as const
}

export function usePutOrganisationsPartyIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsPartyIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['roles'][':roleId']['$put']
          >
        },
      ) =>
        parseResponse(client.organisations[':partyId'].roles[':roleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsPartyIdRolesRoleIdKey() {
  return ['organisations', '/organisations/:partyId/roles/:roleId', 'DELETE'] as const
}

export function useDeleteOrganisationsPartyIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsPartyIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':partyId'].roles[':roleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
