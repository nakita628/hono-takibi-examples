import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:location/registrations:retrieveImportableDomains', args] as const
}

export function getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryKey>
  >({
    queryKey: getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':location']['registrations:retrieveImportableDomains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1LocationRegistrationsRetrieveImportableDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryKey>
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
      ...getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1LocationRegistrationsRetrieveImportableDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryKey>
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
      ...getV1beta1LocationRegistrationsRetrieveImportableDomainsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:location/registrations:retrieveRegisterParameters', args] as const
}

export function getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryKey>
  >({
    queryKey: getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':location']['registrations:retrieveRegisterParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1LocationRegistrationsRetrieveRegisterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryKey>
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
      ...getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1LocationRegistrationsRetrieveRegisterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryKey>
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
      ...getV1beta1LocationRegistrationsRetrieveRegisterParametersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1LocationRegistrationsRetrieveTransferParametersQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:location/registrations:retrieveTransferParameters', args] as const
}

export function getV1beta1LocationRegistrationsRetrieveTransferParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LocationRegistrationsRetrieveTransferParametersQueryKey>
  >({
    queryKey: getV1beta1LocationRegistrationsRetrieveTransferParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':location']['registrations:retrieveTransferParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1LocationRegistrationsRetrieveTransferParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsRetrieveTransferParametersQueryKey>
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
      ...getV1beta1LocationRegistrationsRetrieveTransferParametersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1LocationRegistrationsRetrieveTransferParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsRetrieveTransferParametersQueryKey>
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
      ...getV1beta1LocationRegistrationsRetrieveTransferParametersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1LocationRegistrationsSearchDomainsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:location/registrations:searchDomains', args] as const
}

export function getV1beta1LocationRegistrationsSearchDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LocationRegistrationsSearchDomainsQueryKey>
  >({
    queryKey: getV1beta1LocationRegistrationsSearchDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':location']['registrations:searchDomains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1LocationRegistrationsSearchDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsSearchDomainsQueryKey>
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
      ...getV1beta1LocationRegistrationsSearchDomainsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1LocationRegistrationsSearchDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LocationRegistrationsSearchDomainsQueryKey>
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
      ...getV1beta1LocationRegistrationsSearchDomainsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1NameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function getV1beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >({
    queryKey: getV1beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name/locations', args] as const
}

export function getV1beta1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameLocationsQueryKey>
  >({
    queryKey: getV1beta1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1beta1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name/operations', args] as const
}

export function getV1beta1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameOperationsQueryKey>
  >({
    queryKey: getV1beta1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameOperationsQueryKey>
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
      ...getV1beta1NameOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameOperationsQueryKey>
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
      ...getV1beta1NameOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1beta1NameExportMutationKey() {
  return ['v1beta1', '/v1beta1/:name:export', 'POST'] as const
}

export function getPostV1beta1NameExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:export']['$post']>) {
      return parseResponse(client.v1beta1[':name:export'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1NameExportMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentRegistrationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/registrations', args] as const
}

export function getV1beta1ParentRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentRegistrationsQueryKey>
  >({
    queryKey: getV1beta1ParentRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].registrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ParentRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentRegistrationsQueryKey>
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
      ...getV1beta1ParentRegistrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ParentRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentRegistrationsQueryKey>
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
      ...getV1beta1ParentRegistrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1beta1ParentRegistrationsImportMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/registrations:import', 'POST'] as const
}

export function getPostV1beta1ParentRegistrationsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['registrations:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentRegistrationsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations:import']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['registrations:import'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentRegistrationsImport<
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
                ReturnType<(typeof client.v1beta1)[':parent']['registrations:import']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['registrations:import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentRegistrationsImportMutationOptions<
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

export function getPostV1beta1ParentRegistrationsRegisterMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/registrations:register', 'POST'] as const
}

export function getPostV1beta1ParentRegistrationsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations:register']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['registrations:register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentRegistrationsRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations:register']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['registrations:register'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentRegistrationsRegister<
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
                ReturnType<(typeof client.v1beta1)[':parent']['registrations:register']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['registrations:register']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentRegistrationsRegisterMutationOptions<
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

export function getPostV1beta1ParentRegistrationsTransferMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/registrations:transfer', 'POST'] as const
}

export function getPostV1beta1ParentRegistrationsTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['registrations:transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['registrations:transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentRegistrationsTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations:transfer']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['registrations:transfer'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentRegistrationsTransfer<
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
                ReturnType<(typeof client.v1beta1)[':parent']['registrations:transfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['registrations:transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentRegistrationsTransferMutationOptions<
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

export function getPostV1beta1RegistrationConfigureContactSettingsMutationKey() {
  return ['v1beta1', '/v1beta1/:registration:configureContactSettings', 'POST'] as const
}

export function getPostV1beta1RegistrationConfigureContactSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':registration:configureContactSettings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':registration:configureContactSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1RegistrationConfigureContactSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':registration:configureContactSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':registration:configureContactSettings'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1RegistrationConfigureContactSettings<
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
                  (typeof client.v1beta1)[':registration:configureContactSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1)[':registration:configureContactSettings']['$post']
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
  const mutationDefaults = getPostV1beta1RegistrationConfigureContactSettingsMutationOptions<
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

export function getPostV1beta1RegistrationConfigureDnsSettingsMutationKey() {
  return ['v1beta1', '/v1beta1/:registration:configureDnsSettings', 'POST'] as const
}

export function getPostV1beta1RegistrationConfigureDnsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':registration:configureDnsSettings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':registration:configureDnsSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1RegistrationConfigureDnsSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':registration:configureDnsSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':registration:configureDnsSettings'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1RegistrationConfigureDnsSettings<
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
                ReturnType<(typeof client.v1beta1)[':registration:configureDnsSettings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':registration:configureDnsSettings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1RegistrationConfigureDnsSettingsMutationOptions<
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

export function getPostV1beta1RegistrationConfigureManagementSettingsMutationKey() {
  return ['v1beta1', '/v1beta1/:registration:configureManagementSettings', 'POST'] as const
}

export function getPostV1beta1RegistrationConfigureManagementSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':registration:configureManagementSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':registration:configureManagementSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1RegistrationConfigureManagementSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':registration:configureManagementSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':registration:configureManagementSettings'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1RegistrationConfigureManagementSettings<
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
                  (typeof client.v1beta1)[':registration:configureManagementSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1)[':registration:configureManagementSettings']['$post']
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
  const mutationDefaults = getPostV1beta1RegistrationConfigureManagementSettingsMutationOptions<
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

export function getPostV1beta1RegistrationResetAuthorizationCodeMutationKey() {
  return ['v1beta1', '/v1beta1/:registration:resetAuthorizationCode', 'POST'] as const
}

export function getPostV1beta1RegistrationResetAuthorizationCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':registration:resetAuthorizationCode']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':registration:resetAuthorizationCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1RegistrationResetAuthorizationCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':registration:resetAuthorizationCode']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':registration:resetAuthorizationCode'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1RegistrationResetAuthorizationCode<
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
                ReturnType<(typeof client.v1beta1)[':registration:resetAuthorizationCode']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':registration:resetAuthorizationCode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1RegistrationResetAuthorizationCodeMutationOptions<
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

export function getV1beta1RegistrationRetrieveAuthorizationCodeQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:registration:retrieveAuthorizationCode', args] as const
}

export function getV1beta1RegistrationRetrieveAuthorizationCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1RegistrationRetrieveAuthorizationCodeQueryKey>
  >({
    queryKey: getV1beta1RegistrationRetrieveAuthorizationCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':registration:retrieveAuthorizationCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1RegistrationRetrieveAuthorizationCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1RegistrationRetrieveAuthorizationCodeQueryKey>
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
      ...getV1beta1RegistrationRetrieveAuthorizationCodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1RegistrationRetrieveAuthorizationCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1RegistrationRetrieveAuthorizationCodeQueryKey>
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
      ...getV1beta1RegistrationRetrieveAuthorizationCodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1ResourceGetIamPolicyQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:resource:getIamPolicy', args] as const
}

export function getV1beta1ResourceGetIamPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ResourceGetIamPolicyQueryKey>
  >({
    queryKey: getV1beta1ResourceGetIamPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':resource:getIamPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ResourceGetIamPolicyQueryKey>
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
      ...getV1beta1ResourceGetIamPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ResourceGetIamPolicyQueryKey>
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
      ...getV1beta1ResourceGetIamPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1beta1ResourceSetIamPolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1beta1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceSetIamPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ResourceSetIamPolicyMutationOptions<
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

export function getPostV1beta1ResourceTestIamPermissionsMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1beta1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ResourceTestIamPermissionsMutationOptions<
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
