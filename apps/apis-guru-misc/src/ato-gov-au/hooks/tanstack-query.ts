import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useBusinessNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBusinessNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBusinessNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBusinessNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useClassificationsAddressTypes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsAddressTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsAddressTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsAddressTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsBusinessNameLifecycleStates<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsBusinessNameLifecycleStatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsBusinessNameLifecycleStates<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsBusinessNameLifecycleStatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsElectronicAddressTypes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsElectronicAddressTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsElectronicAddressTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsElectronicAddressTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsGenders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.genders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsGendersQueryKey>
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
      ...getClassificationsGendersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsGenders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.genders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsGendersQueryKey>
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
      ...getClassificationsGendersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsLegalEntityTypes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsLegalEntityTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsLegalEntityTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsLegalEntityTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsLicenseLifecycleStates<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsLicenseLifecycleStatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsLicenseLifecycleStates<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsLicenseLifecycleStatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsLicenseTypes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsLicenseTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsLicenseTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsLicenseTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsNameDirections<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsNameDirectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsNameDirections<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsNameDirectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsNamePrefixes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsNamePrefixesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsNamePrefixes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsNamePrefixesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsNameTypes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsNameTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsNameTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsNameTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsRegisteredIdentifierTypes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getClassificationsRegisteredIdentifierTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationsRegisteredIdentifierTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getClassificationsRegisteredIdentifierTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useClassificationsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.roles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClassificationsRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClassificationsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.roles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClassificationsRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useIndividuals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.individuals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndividualsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndividualsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndividuals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.individuals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndividualsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndividualsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostIndividuals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.individuals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndividualsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndividualsPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndividualsPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutIndividualsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndividualsPartyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndividualsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndividualsPartyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdAddresses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdAddresses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostIndividualsPartyIdAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndividualsPartyIdAddressesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutIndividualsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndividualsPartyIdAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndividualsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndividualsPartyIdAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdBusinessNames<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdBusinessNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdBusinessNames<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdBusinessNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostIndividualsPartyIdBusinessNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndividualsPartyIdBusinessNamesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdBusinessNamesProductId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdBusinessNamesProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdBusinessNamesProductId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdBusinessNamesProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutIndividualsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndividualsPartyIdBusinessNamesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndividualsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndividualsPartyIdBusinessNamesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdElectronicAddresses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdElectronicAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdElectronicAddresses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdElectronicAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostIndividualsPartyIdElectronicAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndividualsPartyIdElectronicAddressesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdElectronicAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdElectronicAddressesAddressIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdElectronicAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdElectronicAddressesAddressIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutIndividualsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndividualsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdLicenses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdLicensesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdLicenses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdLicensesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostIndividualsPartyIdLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndividualsPartyIdLicensesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdLicensesProductId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdLicensesProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdLicensesProductId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdLicensesProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutIndividualsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndividualsPartyIdLicensesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndividualsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndividualsPartyIdLicensesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdRoles<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdRoles<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostIndividualsPartyIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndividualsPartyIdRolesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useIndividualsPartyIdRolesRoleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIndividualsPartyIdRolesRoleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndividualsPartyIdRolesRoleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIndividualsPartyIdRolesRoleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutIndividualsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndividualsPartyIdRolesRoleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndividualsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndividualsPartyIdRolesRoleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLicensesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLicensesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganisationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganisationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostOrganisations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organisations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganisationsPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganisationsPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutOrganisationsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsPartyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrganisationsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsPartyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdAddresses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdAddresses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostOrganisationsPartyIdAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsPartyIdAddressesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutOrganisationsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsPartyIdAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrganisationsPartyIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsPartyIdAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdBusinessNames<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdBusinessNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdBusinessNames<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdBusinessNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostOrganisationsPartyIdBusinessNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsPartyIdBusinessNamesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdBusinessNamesProductId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdBusinessNamesProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdBusinessNamesProductId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdBusinessNamesProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutOrganisationsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrganisationsPartyIdBusinessNamesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdElectronicAddresses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdElectronicAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdElectronicAddresses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdElectronicAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostOrganisationsPartyIdElectronicAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsPartyIdElectronicAddressesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdElectronicAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdElectronicAddressesAddressIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdElectronicAddressesAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdElectronicAddressesAddressIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutOrganisationsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrganisationsPartyIdElectronicAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdLicenses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdLicensesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdLicenses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdLicensesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostOrganisationsPartyIdLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsPartyIdLicensesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdLicensesProductId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdLicensesProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdLicensesProductId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdLicensesProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutOrganisationsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsPartyIdLicensesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrganisationsPartyIdLicensesProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsPartyIdLicensesProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdRoles<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdRoles<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostOrganisationsPartyIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsPartyIdRolesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganisationsPartyIdRolesRoleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOrganisationsPartyIdRolesRoleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsPartyIdRolesRoleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOrganisationsPartyIdRolesRoleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutOrganisationsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsPartyIdRolesRoleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrganisationsPartyIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsPartyIdRolesRoleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
