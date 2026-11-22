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

export function getReportsKey() {
  return ['reports'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getPostReportsMutationKey() {
  return ['reports', '/reports', 'POST'] as const
}

export function getPostReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.$post>) {
      return parseResponse(client.reports.$post(args, options))
    },
  })
}

export function usePostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
        TError,
        InferRequestType<typeof client.reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsOrganizationsQueryKey() {
  return ['settings', '/settings/organizations'] as const
}

export function getSettingsOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsQueryKey>
  >({
    queryKey: getSettingsOrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.organizations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsOrganizationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsOrganizationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadSettingsOrganizationsMutationKey() {
  return ['settings', '/settings/organizations', 'HEAD'] as const
}

export function getHeadSettingsOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$head>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadSettingsOrganizationsMutationKey(),
    async mutationFn() {
      return parseResponse(client.settings.organizations.$head(undefined, options))
    },
  })
}

export function useHeadSettingsOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$head>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadSettingsOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsOrganizationsOrganizationNameQueryKey(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
) {
  return ['settings', '/settings/organizations/:organizationName', args] as const
}

export function getSettingsOrganizationsOrganizationNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsOrganizationNameQueryKey>
  >({
    queryKey: getSettingsOrganizationsOrganizationNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.organizations[':organizationName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsOrganizationsOrganizationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsOrganizationsOrganizationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSettingsOrganizationsOrganizationNameMutationKey() {
  return ['settings', '/settings/organizations/:organizationName', 'PUT'] as const
}

export function getPutSettingsOrganizationsOrganizationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsOrganizationsOrganizationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$put']>,
    ) {
      return parseResponse(client.settings.organizations[':organizationName'].$put(args, options))
    },
  })
}

export function usePutSettingsOrganizationsOrganizationName<
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
                ReturnType<(typeof client.settings.organizations)[':organizationName']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.organizations)[':organizationName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsOrganizationsOrganizationNameMutationOptions<
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

export function getDeleteSettingsOrganizationsOrganizationNameMutationKey() {
  return ['settings', '/settings/organizations/:organizationName', 'DELETE'] as const
}

export function getDeleteSettingsOrganizationsOrganizationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.organizations)[':organizationName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsOrganizationsOrganizationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.organizations)[':organizationName']['$delete']
      >,
    ) {
      return parseResponse(
        client.settings.organizations[':organizationName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSettingsOrganizationsOrganizationName<
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
                ReturnType<(typeof client.settings.organizations)[':organizationName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.organizations)[':organizationName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsOrganizationsOrganizationNameMutationOptions<
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

export function getSettingsOrganizationsOrganizationNameReceiversQueryKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
) {
  return ['settings', '/settings/organizations/:organizationName/receivers', args] as const
}

export function getSettingsOrganizationsOrganizationNameReceiversQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversQueryKey>
  >({
    queryKey: getSettingsOrganizationsOrganizationNameReceiversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.organizations[':organizationName'].receivers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsOrganizationsOrganizationNameReceivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameReceiversQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsOrganizationsOrganizationNameReceivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameReceiversQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
) {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    args,
  ] as const
}

export function getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey>
  >({
    queryKey: getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.organizations[':organizationName'].receivers[':receiverName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsOrganizationsOrganizationNameReceiversReceiverName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsOrganizationsOrganizationNameReceiversReceiverName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    'PUT',
  ] as const
}

export function getPutSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
      >,
    ) {
      return parseResponse(
        client.settings.organizations[':organizationName'].receivers[':receiverName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSettingsOrganizationsOrganizationNameReceiversReceiverName<
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
                  (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
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
  const mutationDefaults =
    getPutSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationOptions<
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

export function getDeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    'DELETE',
  ] as const
}

export function getDeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
      >,
    ) {
      return parseResponse(
        client.settings.organizations[':organizationName'].receivers[':receiverName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSettingsOrganizationsOrganizationNameReceiversReceiverName<
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
                  (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
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
  const mutationDefaults =
    getDeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameMutationOptions<
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

export function getSettingsOrganizationsOrganizationNameSendersQueryKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
) {
  return ['settings', '/settings/organizations/:organizationName/senders', args] as const
}

export function getSettingsOrganizationsOrganizationNameSendersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.organizations)[':organizationName']['senders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['senders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersQueryKey>
  >({
    queryKey: getSettingsOrganizationsOrganizationNameSendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.organizations[':organizationName'].senders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsOrganizationsOrganizationNameSenders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.organizations)[':organizationName']['senders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['senders']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameSendersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsOrganizationsOrganizationNameSenders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.organizations)[':organizationName']['senders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['senders']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameSendersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
) {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    args,
  ] as const
}

export function getSettingsOrganizationsOrganizationNameSendersSenderNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey>
  >({
    queryKey: getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.organizations[':organizationName'].senders[':senderName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsOrganizationsOrganizationNameSendersSenderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameSendersSenderNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsOrganizationsOrganizationNameSendersSenderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey>
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
      ...getSettingsOrganizationsOrganizationNameSendersSenderNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSettingsOrganizationsOrganizationNameSendersSenderNameMutationKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    'PUT',
  ] as const
}

export function getPutSettingsOrganizationsOrganizationNameSendersSenderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsOrganizationsOrganizationNameSendersSenderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
      >,
    ) {
      return parseResponse(
        client.settings.organizations[':organizationName'].senders[':senderName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSettingsOrganizationsOrganizationNameSendersSenderName<
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
                  (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
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
  const mutationDefaults =
    getPutSettingsOrganizationsOrganizationNameSendersSenderNameMutationOptions<
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

export function getDeleteSettingsOrganizationsOrganizationNameSendersSenderNameMutationKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    'DELETE',
  ] as const
}

export function getDeleteSettingsOrganizationsOrganizationNameSendersSenderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsOrganizationsOrganizationNameSendersSenderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
      >,
    ) {
      return parseResponse(
        client.settings.organizations[':organizationName'].senders[':senderName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSettingsOrganizationsOrganizationNameSendersSenderName<
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
                  (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
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
  const mutationDefaults =
    getDeleteSettingsOrganizationsOrganizationNameSendersSenderNameMutationOptions<
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
