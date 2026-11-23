import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getBusinessNamesQueryKey(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business-names', '/business-names', keyArgs] as const
}

export function getBusinessNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessNamesQueryKey>
  >({
    queryKey: getBusinessNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-names'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBusinessNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['business-names']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBusinessNamesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBusinessNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getClassificationsAddressTypesQueryKey(
  args: InferRequestType<(typeof client.classifications)['address-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/address-types', keyArgs] as const
}

export function getClassificationsAddressTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['address-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsAddressTypesQueryKey>
  >({
    queryKey: getClassificationsAddressTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['address-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['address-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsAddressTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsAddressTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsBusinessNameLifecycleStatesQueryKey(
  args: InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/business-name-lifecycle-states', keyArgs] as const
}

export function getClassificationsBusinessNameLifecycleStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsBusinessNameLifecycleStatesQueryKey>
  >({
    queryKey: getClassificationsBusinessNameLifecycleStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['business-name-lifecycle-states'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsBusinessNameLifecycleStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.classifications)['business-name-lifecycle-states']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.classifications)['business-name-lifecycle-states']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsBusinessNameLifecycleStatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsBusinessNameLifecycleStatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsElectronicAddressTypesQueryKey(
  args: InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/electronic-address-types', keyArgs] as const
}

export function getClassificationsElectronicAddressTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsElectronicAddressTypesQueryKey>
  >({
    queryKey: getClassificationsElectronicAddressTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['electronic-address-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsElectronicAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsElectronicAddressTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsElectronicAddressTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsGendersQueryKey(
  args: InferRequestType<typeof client.classifications.genders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/genders', keyArgs] as const
}

export function getClassificationsGendersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.genders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsGendersQueryKey>
  >({
    queryKey: getClassificationsGendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications.genders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsGenders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.classifications.genders.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsGendersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsGendersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsLegalEntityTypesQueryKey(
  args: InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/legal-entity-types', keyArgs] as const
}

export function getClassificationsLegalEntityTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsLegalEntityTypesQueryKey>
  >({
    queryKey: getClassificationsLegalEntityTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['legal-entity-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsLegalEntityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsLegalEntityTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsLegalEntityTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsLicenseLifecycleStatesQueryKey(
  args: InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/license-lifecycle-states', keyArgs] as const
}

export function getClassificationsLicenseLifecycleStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsLicenseLifecycleStatesQueryKey>
  >({
    queryKey: getClassificationsLicenseLifecycleStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['license-lifecycle-states'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsLicenseLifecycleStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsLicenseLifecycleStatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsLicenseLifecycleStatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsLicenseTypesQueryKey(
  args: InferRequestType<(typeof client.classifications)['license-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/license-types', keyArgs] as const
}

export function getClassificationsLicenseTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['license-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsLicenseTypesQueryKey>
  >({
    queryKey: getClassificationsLicenseTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['license-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsLicenseTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['license-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsLicenseTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsLicenseTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsNameDirectionsQueryKey(
  args: InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/name-directions', keyArgs] as const
}

export function getClassificationsNameDirectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsNameDirectionsQueryKey>
  >({
    queryKey: getClassificationsNameDirectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['name-directions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsNameDirections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsNameDirectionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsNameDirectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsNamePrefixesQueryKey(
  args: InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/name-prefixes', keyArgs] as const
}

export function getClassificationsNamePrefixesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsNamePrefixesQueryKey>
  >({
    queryKey: getClassificationsNamePrefixesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['name-prefixes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsNamePrefixes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsNamePrefixesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsNamePrefixesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsNameTypesQueryKey(
  args: InferRequestType<(typeof client.classifications)['name-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/name-types', keyArgs] as const
}

export function getClassificationsNameTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['name-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsNameTypesQueryKey>
  >({
    queryKey: getClassificationsNameTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['name-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsNameTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifications)['name-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsNameTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsNameTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsRegisteredIdentifierTypesQueryKey(
  args: InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/registered-identifier-types', keyArgs] as const
}

export function getClassificationsRegisteredIdentifierTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsRegisteredIdentifierTypesQueryKey>
  >({
    queryKey: getClassificationsRegisteredIdentifierTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications['registered-identifier-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationsRegisteredIdentifierTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.classifications)['registered-identifier-types']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsRegisteredIdentifierTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsRegisteredIdentifierTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getClassificationsRolesQueryKey(
  args: InferRequestType<typeof client.classifications.roles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['classifications', '/classifications/roles', keyArgs] as const
}

export function getClassificationsRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.roles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsRolesQueryKey>
  >({
    queryKey: getClassificationsRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClassificationsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.classifications.roles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationsRolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationsRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndividualsQueryKey(args: InferRequestType<typeof client.individuals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals', keyArgs] as const
}

export function getIndividualsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.individuals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndividualsQueryKey>
  >({
    queryKey: getIndividualsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIndividuals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.individuals.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndividualsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIndividualsMutationKey() {
  return ['individuals', '/individuals', 'POST'] as const
}

export function getPostIndividualsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$post>>>>>,
    TError,
    InferRequestType<typeof client.individuals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.individuals.$post>) {
      return parseResponse(client.individuals.$post(args, options))
    },
  })
}

export function createPostIndividuals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.individuals.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndividualsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId', keyArgs] as const
}

export function getIndividualsPartyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdQueryKey>
  >({
    queryKey: getIndividualsPartyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndividualsPartyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutIndividualsPartyIdMutationKey() {
  return ['individuals', '/individuals/:partyId', 'PUT'] as const
}

export function getPutIndividualsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.individuals)[':partyId']['$put']>) {
      return parseResponse(client.individuals[':partyId'].$put(args, options))
    },
  })
}

export function createPutIndividualsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIndividualsPartyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIndividualsPartyIdMutationKey() {
  return ['individuals', '/individuals/:partyId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.individuals)[':partyId']['$delete']>) {
      return parseResponse(client.individuals[':partyId'].$delete(args, options))
    },
  })
}

export function createDeleteIndividualsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.individuals)[':partyId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIndividualsPartyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdAddressesQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/addresses', keyArgs] as const
}

export function getIndividualsPartyIdAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdAddressesQueryKey>
  >({
    queryKey: getIndividualsPartyIdAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndividualsPartyIdAddressesMutationKey() {
  return ['individuals', '/individuals/:partyId/addresses', 'POST'] as const
}

export function getPostIndividualsPartyIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId'].addresses.$post(args, options))
    },
  })
}

export function createPostIndividualsPartyIdAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndividualsPartyIdAddressesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdAddressesAddressIdQueryKey(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/addresses/:addressId', keyArgs] as const
}

export function getIndividualsPartyIdAddressesAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdAddressesAddressIdQueryKey>
  >({
    queryKey: getIndividualsPartyIdAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].addresses[':addressId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdAddressesAddressIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdAddressesAddressIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutIndividualsPartyIdAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/addresses/:addressId', 'PUT'] as const
}

export function getPutIndividualsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].addresses[':addressId'].$put(args, options),
      )
    },
  })
}

export function createPutIndividualsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIndividualsPartyIdAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIndividualsPartyIdAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/addresses/:addressId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].addresses[':addressId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIndividualsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIndividualsPartyIdAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdBusinessNamesQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/business-names', keyArgs] as const
}

export function getIndividualsPartyIdBusinessNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdBusinessNamesQueryKey>
  >({
    queryKey: getIndividualsPartyIdBusinessNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId']['business-names'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdBusinessNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdBusinessNamesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdBusinessNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndividualsPartyIdBusinessNamesMutationKey() {
  return ['individuals', '/individuals/:partyId/business-names', 'POST'] as const
}

export function getPostIndividualsPartyIdBusinessNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdBusinessNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId']['business-names'].$post(args, options))
    },
  })
}

export function createPostIndividualsPartyIdBusinessNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.individuals)[':partyId']['business-names']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndividualsPartyIdBusinessNamesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdBusinessNamesProductIdQueryKey(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/business-names/:productId', keyArgs] as const
}

export function getIndividualsPartyIdBusinessNamesProductIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdBusinessNamesProductIdQueryKey>
  >({
    queryKey: getIndividualsPartyIdBusinessNamesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId']['business-names'][':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdBusinessNamesProductId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdBusinessNamesProductIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdBusinessNamesProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutIndividualsPartyIdBusinessNamesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/business-names/:productId', 'PUT'] as const
}

export function getPutIndividualsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['business-names'][':productId'].$put(args, options),
      )
    },
  })
}

export function createPutIndividualsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIndividualsPartyIdBusinessNamesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIndividualsPartyIdBusinessNamesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/business-names/:productId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['business-names'][':productId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIndividualsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIndividualsPartyIdBusinessNamesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdElectronicAddressesQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/electronic-addresses', keyArgs] as const
}

export function getIndividualsPartyIdElectronicAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdElectronicAddressesQueryKey>
  >({
    queryKey: getIndividualsPartyIdElectronicAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdElectronicAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.individuals)[':partyId']['electronic-addresses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdElectronicAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdElectronicAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndividualsPartyIdElectronicAddressesMutationKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses', 'POST'] as const
}

export function getPostIndividualsPartyIdElectronicAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdElectronicAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'].$post(args, options),
      )
    },
  })
}

export function createPostIndividualsPartyIdElectronicAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndividualsPartyIdElectronicAddressesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdElectronicAddressesAddressIdQueryKey(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', keyArgs] as const
}

export function getIndividualsPartyIdElectronicAddressesAddressIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdElectronicAddressesAddressIdQueryKey>
  >({
    queryKey: getIndividualsPartyIdElectronicAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'][':addressId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdElectronicAddressesAddressId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdElectronicAddressesAddressIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdElectronicAddressesAddressIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutIndividualsPartyIdElectronicAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', 'PUT'] as const
}

export function getPutIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'][':addressId'].$put(args, options),
      )
    },
  })
}

export function createPutIndividualsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'][':addressId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIndividualsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdLicensesQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/licenses', keyArgs] as const
}

export function getIndividualsPartyIdLicensesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdLicensesQueryKey>
  >({
    queryKey: getIndividualsPartyIdLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].licenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdLicensesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdLicensesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndividualsPartyIdLicensesMutationKey() {
  return ['individuals', '/individuals/:partyId/licenses', 'POST'] as const
}

export function getPostIndividualsPartyIdLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId'].licenses.$post(args, options))
    },
  })
}

export function createPostIndividualsPartyIdLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndividualsPartyIdLicensesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdLicensesProductIdQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/licenses/:productId', keyArgs] as const
}

export function getIndividualsPartyIdLicensesProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdLicensesProductIdQueryKey>
  >({
    queryKey: getIndividualsPartyIdLicensesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].licenses[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdLicensesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.individuals)[':partyId']['licenses'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.individuals)[':partyId']['licenses'][':productId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdLicensesProductIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdLicensesProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutIndividualsPartyIdLicensesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/licenses/:productId', 'PUT'] as const
}

export function getPutIndividualsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].licenses[':productId'].$put(args, options),
      )
    },
  })
}

export function createPutIndividualsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIndividualsPartyIdLicensesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIndividualsPartyIdLicensesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/licenses/:productId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].licenses[':productId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIndividualsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIndividualsPartyIdLicensesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdRolesQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/roles', keyArgs] as const
}

export function getIndividualsPartyIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdRolesQueryKey>
  >({
    queryKey: getIndividualsPartyIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdRolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndividualsPartyIdRolesMutationKey() {
  return ['individuals', '/individuals/:partyId/roles', 'POST'] as const
}

export function getPostIndividualsPartyIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId'].roles.$post(args, options))
    },
  })
}

export function createPostIndividualsPartyIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndividualsPartyIdRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndividualsPartyIdRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['individuals', '/individuals/:partyId/roles/:roleId', keyArgs] as const
}

export function getIndividualsPartyIdRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdRolesRoleIdQueryKey>
  >({
    queryKey: getIndividualsPartyIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individuals[':partyId'].roles[':roleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndividualsPartyIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndividualsPartyIdRolesRoleIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualsPartyIdRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutIndividualsPartyIdRolesRoleIdMutationKey() {
  return ['individuals', '/individuals/:partyId/roles/:roleId', 'PUT'] as const
}

export function getPutIndividualsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
    ) {
      return parseResponse(client.individuals[':partyId'].roles[':roleId'].$put(args, options))
    },
  })
}

export function createPutIndividualsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIndividualsPartyIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIndividualsPartyIdRolesRoleIdMutationKey() {
  return ['individuals', '/individuals/:partyId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(client.individuals[':partyId'].roles[':roleId'].$delete(args, options))
    },
  })
}

export function createDeleteIndividualsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIndividualsPartyIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLicensesQueryKey(args: InferRequestType<typeof client.licenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['licenses', '/licenses', keyArgs] as const
}

export function getLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicensesQueryKey>
  >({
    queryKey: getLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.licenses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLicensesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrganisationsQueryKey(args: InferRequestType<typeof client.organisations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations', keyArgs] as const
}

export function getOrganisationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organisations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsQueryKey>
  >({
    queryKey: getOrganisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organisations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganisationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOrganisationsMutationKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function getPostOrganisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organisations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organisations.$post>) {
      return parseResponse(client.organisations.$post(args, options))
    },
  })
}

export function createPostOrganisations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organisations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganisationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId', keyArgs] as const
}

export function getOrganisationsPartyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdQueryKey>
  >({
    queryKey: getOrganisationsPartyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganisationsPartyIdMutationKey() {
  return ['organisations', '/organisations/:partyId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':partyId']['$put']>) {
      return parseResponse(client.organisations[':partyId'].$put(args, options))
    },
  })
}

export function createPutOrganisationsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganisationsPartyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganisationsPartyIdMutationKey() {
  return ['organisations', '/organisations/:partyId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':partyId']['$delete']>) {
      return parseResponse(client.organisations[':partyId'].$delete(args, options))
    },
  })
}

export function createDeleteOrganisationsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.organisations)[':partyId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganisationsPartyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdAddressesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/addresses', keyArgs] as const
}

export function getOrganisationsPartyIdAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdAddressesQueryKey>
  >({
    queryKey: getOrganisationsPartyIdAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganisationsPartyIdAddressesMutationKey() {
  return ['organisations', '/organisations/:partyId/addresses', 'POST'] as const
}

export function getPostOrganisationsPartyIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId'].addresses.$post(args, options))
    },
  })
}

export function createPostOrganisationsPartyIdAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganisationsPartyIdAddressesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdAddressesAddressIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/addresses/:addressId', keyArgs] as const
}

export function getOrganisationsPartyIdAddressesAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdAddressesAddressIdQueryKey>
  >({
    queryKey: getOrganisationsPartyIdAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].addresses[':addressId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdAddressesAddressIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdAddressesAddressIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganisationsPartyIdAddressesAddressIdMutationKey() {
  return ['organisations', '/organisations/:partyId/addresses/:addressId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].addresses[':addressId'].$put(args, options),
      )
    },
  })
}

export function createPutOrganisationsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganisationsPartyIdAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganisationsPartyIdAddressesAddressIdMutationKey() {
  return ['organisations', '/organisations/:partyId/addresses/:addressId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].addresses[':addressId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganisationsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganisationsPartyIdAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdBusinessNamesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/business-names', keyArgs] as const
}

export function getOrganisationsPartyIdBusinessNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdBusinessNamesQueryKey>
  >({
    queryKey: getOrganisationsPartyIdBusinessNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId']['business-names'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdBusinessNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdBusinessNamesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdBusinessNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganisationsPartyIdBusinessNamesMutationKey() {
  return ['organisations', '/organisations/:partyId/business-names', 'POST'] as const
}

export function getPostOrganisationsPartyIdBusinessNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdBusinessNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId']['business-names'].$post(args, options))
    },
  })
}

export function createPostOrganisationsPartyIdBusinessNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':partyId']['business-names']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganisationsPartyIdBusinessNamesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdBusinessNamesProductIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/business-names/:productId', keyArgs] as const
}

export function getOrganisationsPartyIdBusinessNamesProductIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdBusinessNamesProductIdQueryKey>
  >({
    queryKey: getOrganisationsPartyIdBusinessNamesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId']['business-names'][':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdBusinessNamesProductId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdBusinessNamesProductIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdBusinessNamesProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganisationsPartyIdBusinessNamesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/business-names/:productId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['business-names'][':productId'].$put(args, options),
      )
    },
  })
}

export function createPutOrganisationsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/business-names/:productId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['business-names'][':productId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganisationsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdElectronicAddressesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/electronic-addresses', keyArgs] as const
}

export function getOrganisationsPartyIdElectronicAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdElectronicAddressesQueryKey>
  >({
    queryKey: getOrganisationsPartyIdElectronicAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdElectronicAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organisations)[':partyId']['electronic-addresses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdElectronicAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdElectronicAddressesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganisationsPartyIdElectronicAddressesMutationKey() {
  return ['organisations', '/organisations/:partyId/electronic-addresses', 'POST'] as const
}

export function getPostOrganisationsPartyIdElectronicAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdElectronicAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'].$post(args, options),
      )
    },
  })
}

export function createPostOrganisationsPartyIdElectronicAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganisationsPartyIdElectronicAddressesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey(
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

export function getOrganisationsPartyIdElectronicAddressesAddressIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey>
  >({
    queryKey: getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'][':addressId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdElectronicAddressesAddressId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdElectronicAddressesAddressIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationKey() {
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    'PUT',
  ] as const
}

export function getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'][':addressId'].$put(args, options),
      )
    },
  })
}

export function createPutOrganisationsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationKey() {
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'][':addressId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganisationsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdLicensesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/licenses', keyArgs] as const
}

export function getOrganisationsPartyIdLicensesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdLicensesQueryKey>
  >({
    queryKey: getOrganisationsPartyIdLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].licenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdLicensesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdLicensesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganisationsPartyIdLicensesMutationKey() {
  return ['organisations', '/organisations/:partyId/licenses', 'POST'] as const
}

export function getPostOrganisationsPartyIdLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId'].licenses.$post(args, options))
    },
  })
}

export function createPostOrganisationsPartyIdLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganisationsPartyIdLicensesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdLicensesProductIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/licenses/:productId', keyArgs] as const
}

export function getOrganisationsPartyIdLicensesProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdLicensesProductIdQueryKey>
  >({
    queryKey: getOrganisationsPartyIdLicensesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].licenses[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdLicensesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdLicensesProductIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdLicensesProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganisationsPartyIdLicensesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/licenses/:productId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].licenses[':productId'].$put(args, options),
      )
    },
  })
}

export function createPutOrganisationsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganisationsPartyIdLicensesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganisationsPartyIdLicensesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/licenses/:productId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].licenses[':productId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganisationsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganisationsPartyIdLicensesProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdRolesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/roles', keyArgs] as const
}

export function getOrganisationsPartyIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdRolesQueryKey>
  >({
    queryKey: getOrganisationsPartyIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdRolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganisationsPartyIdRolesMutationKey() {
  return ['organisations', '/organisations/:partyId/roles', 'POST'] as const
}

export function getPostOrganisationsPartyIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId'].roles.$post(args, options))
    },
  })
}

export function createPostOrganisationsPartyIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganisationsPartyIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsPartyIdRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organisations', '/organisations/:partyId/roles/:roleId', keyArgs] as const
}

export function getOrganisationsPartyIdRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdRolesRoleIdQueryKey>
  >({
    queryKey: getOrganisationsPartyIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':partyId'].roles[':roleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsPartyIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':partyId']['roles'][':roleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsPartyIdRolesRoleIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsPartyIdRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganisationsPartyIdRolesRoleIdMutationKey() {
  return ['organisations', '/organisations/:partyId/roles/:roleId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
    ) {
      return parseResponse(client.organisations[':partyId'].roles[':roleId'].$put(args, options))
    },
  })
}

export function createPutOrganisationsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganisationsPartyIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganisationsPartyIdRolesRoleIdMutationKey() {
  return ['organisations', '/organisations/:partyId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(client.organisations[':partyId'].roles[':roleId'].$delete(args, options))
    },
  })
}

export function createDeleteOrganisationsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganisationsPartyIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
