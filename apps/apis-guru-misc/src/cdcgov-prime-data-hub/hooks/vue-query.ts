import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getSettingsOrganizationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsOrganizationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.organizations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
            >
          >,
          ReturnType<typeof getSettingsOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsOrganizationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.organizations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>
  >,
) {
  return ['settings', '/settings/organizations/:organizationName', toValue(args)] as const
}

export function getSettingsOrganizationsOrganizationNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsOrganizationsOrganizationNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.organizations[':organizationName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSettingsOrganizationsOrganizationNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsOrganizationsOrganizationNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.organizations[':organizationName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
    >
  >,
) {
  return ['settings', '/settings/organizations/:organizationName/receivers', toValue(args)] as const
}

export function getSettingsOrganizationsOrganizationNameReceiversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsOrganizationsOrganizationNameReceiversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.organizations[':organizationName'].receivers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsOrganizationsOrganizationNameReceiversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.organizations[':organizationName'].receivers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
    >
  >,
) {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    toValue(args),
  ] as const
}

export function getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.organizations[':organizationName'].receivers[':receiverName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSettingsOrganizationsOrganizationNameReceiversReceiverNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.organizations[':organizationName'].receivers[':receiverName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['senders']['$get']>
  >,
) {
  return ['settings', '/settings/organizations/:organizationName/senders', toValue(args)] as const
}

export function getSettingsOrganizationsOrganizationNameSendersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['senders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsOrganizationsOrganizationNameSendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.organizations[':organizationName'].senders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['senders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsOrganizationsOrganizationNameSendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.organizations[':organizationName'].senders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
    >
  >,
) {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    toValue(args),
  ] as const
}

export function getSettingsOrganizationsOrganizationNameSendersSenderNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.organizations[':organizationName'].senders[':senderName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSettingsOrganizationsOrganizationNameSendersSenderNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.organizations[':organizationName'].senders[':senderName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
