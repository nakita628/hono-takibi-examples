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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EmailConfigurationSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/configuration-sets', keyArgs] as const
}

export function getV1EmailConfigurationSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailConfigurationSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['configuration-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailConfigurationSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailConfigurationSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailConfigurationSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['configuration-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EmailConfigurationSetsMutationKey() {
  return ['v1', '/v1/email/configuration-sets', 'POST'] as const
}

export function getPostV1EmailConfigurationSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['configuration-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailConfigurationSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$post']>,
    ) {
      return parseResponse(client.v1.email['configuration-sets'].$post(args, options))
    },
  })
}

export function usePostV1EmailConfigurationSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['configuration-sets']['$post']>,
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
  const mutationDefaults = getPostV1EmailConfigurationSetsMutationOptions<TError, TOnMutateResult>(
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

export function getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations',
    keyArgs,
  ] as const
}

export function getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey
          >
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
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations',
    'POST',
  ] as const
}

export function getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
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
    getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
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

export function getV1EmailDedicatedIpPoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/dedicated-ip-pools', keyArgs] as const
}

export function getV1EmailDedicatedIpPoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDedicatedIpPoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['dedicated-ip-pools'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDedicatedIpPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailDedicatedIpPoolsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDedicatedIpPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDedicatedIpPoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['dedicated-ip-pools'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EmailDedicatedIpPoolsMutationKey() {
  return ['v1', '/v1/email/dedicated-ip-pools', 'POST'] as const
}

export function getPostV1EmailDedicatedIpPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailDedicatedIpPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>,
    ) {
      return parseResponse(client.v1.email['dedicated-ip-pools'].$post(args, options))
    },
  })
}

export function usePostV1EmailDedicatedIpPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>,
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
  const mutationDefaults = getPostV1EmailDedicatedIpPoolsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EmailDeliverabilityDashboardTestMutationKey() {
  return ['v1', '/v1/email/deliverability-dashboard/test', 'POST'] as const
}

export function getPostV1EmailDeliverabilityDashboardTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailDeliverabilityDashboardTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>,
    ) {
      return parseResponse(client.v1.email['deliverability-dashboard'].test.$post(args, options))
    },
  })
}

export function usePostV1EmailDeliverabilityDashboardTest<
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
                  ReturnType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>,
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
  const mutationDefaults = getPostV1EmailDeliverabilityDashboardTestMutationOptions<
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

export function getV1EmailIdentitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.identities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/identities', keyArgs] as const
}

export function getV1EmailIdentitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.identities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email.identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.identities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
            >
          >,
          ReturnType<typeof getV1EmailIdentitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email.identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EmailIdentitiesMutationKey() {
  return ['v1', '/v1/email/identities', 'POST'] as const
}

export function getPostV1EmailIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.email.identities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailIdentitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.identities.$post>) {
      return parseResponse(client.v1.email.identities.$post(args, options))
    },
  })
}

export function usePostV1EmailIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.email.identities.$post>,
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
  const mutationDefaults = getPostV1EmailIdentitiesMutationOptions<TError, TOnMutateResult>(
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

export function getV1EmailConfigurationSetsConfigurationSetNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName', keyArgs] as const
}

export function getV1EmailConfigurationSetsConfigurationSetNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailConfigurationSetsConfigurationSetNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailConfigurationSetsConfigurationSetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EmailConfigurationSetsConfigurationSetNameQueryKey>
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
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailConfigurationSetsConfigurationSetNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailConfigurationSetsConfigurationSetNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1EmailConfigurationSetsConfigurationSetNameMutationKey() {
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName', 'DELETE'] as const
}

export function getDeleteV1EmailConfigurationSetsConfigurationSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EmailConfigurationSetsConfigurationSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1EmailConfigurationSetsConfigurationSetName<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
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
  const mutationDefaults = getDeleteV1EmailConfigurationSetsConfigurationSetNameMutationOptions<
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

export function getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'PUT',
  ] as const
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
          ':EventDestinationName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
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
    getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'DELETE',
  ] as const
}

export function getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
          ':EventDestinationName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
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
    getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function getDeleteV1EmailDedicatedIpPoolsPoolNameMutationKey() {
  return ['v1', '/v1/email/dedicated-ip-pools/:PoolName', 'DELETE'] as const
}

export function getDeleteV1EmailDedicatedIpPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EmailDedicatedIpPoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.email['dedicated-ip-pools'][':PoolName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1EmailDedicatedIpPoolsPoolName<
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
                  ReturnType<(typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']>,
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
  const mutationDefaults = getDeleteV1EmailDedicatedIpPoolsPoolNameMutationOptions<
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

export function getV1EmailIdentitiesEmailIdentityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/identities/:EmailIdentity', keyArgs] as const
}

export function getV1EmailIdentitiesEmailIdentityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailIdentitiesEmailIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email.identities[':EmailIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailIdentitiesEmailIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailIdentitiesEmailIdentityQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailIdentitiesEmailIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailIdentitiesEmailIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email.identities[':EmailIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1EmailIdentitiesEmailIdentityMutationKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity', 'DELETE'] as const
}

export function getDeleteV1EmailIdentitiesEmailIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EmailIdentitiesEmailIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>,
    ) {
      return parseResponse(client.v1.email.identities[':EmailIdentity'].$delete(args, options))
    },
  })
}

export function useDeleteV1EmailIdentitiesEmailIdentity<
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
                  ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>,
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
  const mutationDefaults = getDeleteV1EmailIdentitiesEmailIdentityMutationOptions<
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

export function getV1EmailAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.account.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/account', keyArgs] as const
}

export function getV1EmailAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>
            >
          >,
          ReturnType<typeof getV1EmailAccountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames',
    keyArgs,
  ] as const
}

export function getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey
          >
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
              (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDedicatedIpsIPQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/dedicated-ips/:IP', keyArgs] as const
}

export function getV1EmailDedicatedIpsIPQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDedicatedIpsIPQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['dedicated-ips'][':IP'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDedicatedIpsIP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailDedicatedIpsIPQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDedicatedIpsIPQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDedicatedIpsIPQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['dedicated-ips'][':IP'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDedicatedIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/dedicated-ips', keyArgs] as const
}

export function getV1EmailDedicatedIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDedicatedIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['dedicated-ips'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDedicatedIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailDedicatedIpsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDedicatedIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDedicatedIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['dedicated-ips'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDeliverabilityDashboardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/deliverability-dashboard', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDeliverabilityDashboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailDeliverabilityDashboardQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDeliverabilityDashboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDeliverabilityDashboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1EmailDeliverabilityDashboardMutationKey() {
  return ['v1', '/v1/email/deliverability-dashboard', 'PUT'] as const
}

export function getPutV1EmailDeliverabilityDashboardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailDeliverabilityDashboardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$put']>,
    ) {
      return parseResponse(client.v1.email['deliverability-dashboard'].$put(args, options))
    },
  })
}

export function usePutV1EmailDeliverabilityDashboard<
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
                Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$put']>,
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
  const mutationDefaults = getPutV1EmailDeliverabilityDashboardMutationOptions<
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

export function getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/deliverability-dashboard/test-reports/:ReportId', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardTestReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboardTestReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey>
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
              (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/deliverability-dashboard/campaigns/:CampaignId', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboardCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey>
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
              (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/email/deliverability-dashboard/statistics-report/:Domain#StartDate&EndDate',
    keyArgs,
  ] as const
}

export function getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['statistics-report'][
          ':Domain#StartDate&EndDate'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey
          >
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
              (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard']['statistics-report'][
            ':Domain#StartDate&EndDate'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDeliverabilityDashboardTestReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/deliverability-dashboard/test-reports', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardTestReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDeliverabilityDashboardTestReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['test-reports'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboardTestReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']>
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
                    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EmailDeliverabilityDashboardTestReportsQueryKey>
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
            ReturnType<(typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDeliverabilityDashboardTestReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDeliverabilityDashboardTestReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard']['test-reports'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns#StartDate&EndDate',
    keyArgs,
  ] as const
}

export function getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['deliverability-dashboard'].domains[':SubscribedDomain'][
          'campaigns#StartDate&EndDate'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
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
                    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey
          >
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
              (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['deliverability-dashboard'].domains[':SubscribedDomain'][
            'campaigns#StartDate&EndDate'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/email/tags#ResourceArn', keyArgs] as const
}

export function getV1EmailTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email['tags#ResourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailTagsResourceArnQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email['tags#ResourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1EmailAccountDedicatedIpsWarmupMutationKey() {
  return ['v1', '/v1/email/account/dedicated-ips/warmup', 'PUT'] as const
}

export function getPutV1EmailAccountDedicatedIpsWarmupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailAccountDedicatedIpsWarmupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>,
    ) {
      return parseResponse(client.v1.email.account['dedicated-ips'].warmup.$put(args, options))
    },
  })
}

export function usePutV1EmailAccountDedicatedIpsWarmup<
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
                  ReturnType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>,
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
  const mutationDefaults = getPutV1EmailAccountDedicatedIpsWarmupMutationOptions<
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

export function getPutV1EmailAccountSendingMutationKey() {
  return ['v1', '/v1/email/account/sending', 'PUT'] as const
}

export function getPutV1EmailAccountSendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.sending.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.email.account.sending.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailAccountSendingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.account.sending.$put>) {
      return parseResponse(client.v1.email.account.sending.$put(args, options))
    },
  })
}

export function usePutV1EmailAccountSending<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.sending.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.email.account.sending.$put>,
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
  const mutationDefaults = getPutV1EmailAccountSendingMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/delivery-options',
    'PUT',
  ] as const
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['delivery-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptions<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
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
    getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationOptions<
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

export function getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/reputation-options',
    'PUT',
  ] as const
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['reputation-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameReputationOptions<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
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
    getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationOptions<
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

export function getPutV1EmailConfigurationSetsConfigurationSetNameSendingMutationKey() {
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName/sending', 'PUT'] as const
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameSendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailConfigurationSetsConfigurationSetNameSendingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName'].sending.$put(args, options),
      )
    },
  })
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameSending<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
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
  const mutationDefaults = getPutV1EmailConfigurationSetsConfigurationSetNameSendingMutationOptions<
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

export function getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/tracking-options',
    'PUT',
  ] as const
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['tracking-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameTrackingOptions<
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
                    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
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
    getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationOptions<
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

export function getPutV1EmailDedicatedIpsIPPoolMutationKey() {
  return ['v1', '/v1/email/dedicated-ips/:IP/pool', 'PUT'] as const
}

export function getPutV1EmailDedicatedIpsIPPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailDedicatedIpsIPPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>,
    ) {
      return parseResponse(client.v1.email['dedicated-ips'][':IP'].pool.$put(args, options))
    },
  })
}

export function usePutV1EmailDedicatedIpsIPPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>,
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
  const mutationDefaults = getPutV1EmailDedicatedIpsIPPoolMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1EmailDedicatedIpsIPWarmupMutationKey() {
  return ['v1', '/v1/email/dedicated-ips/:IP/warmup', 'PUT'] as const
}

export function getPutV1EmailDedicatedIpsIPWarmupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailDedicatedIpsIPWarmupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>,
    ) {
      return parseResponse(client.v1.email['dedicated-ips'][':IP'].warmup.$put(args, options))
    },
  })
}

export function usePutV1EmailDedicatedIpsIPWarmup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>,
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
  const mutationDefaults = getPutV1EmailDedicatedIpsIPWarmupMutationOptions<
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

export function getPutV1EmailIdentitiesEmailIdentityDkimMutationKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/dkim', 'PUT'] as const
}

export function getPutV1EmailIdentitiesEmailIdentityDkimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailIdentitiesEmailIdentityDkimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>,
    ) {
      return parseResponse(client.v1.email.identities[':EmailIdentity'].dkim.$put(args, options))
    },
  })
}

export function usePutV1EmailIdentitiesEmailIdentityDkim<
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
                  ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>,
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
  const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityDkimMutationOptions<
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

export function getPutV1EmailIdentitiesEmailIdentityFeedbackMutationKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/feedback', 'PUT'] as const
}

export function getPutV1EmailIdentitiesEmailIdentityFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailIdentitiesEmailIdentityFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email.identities[':EmailIdentity'].feedback.$put(args, options),
      )
    },
  })
}

export function usePutV1EmailIdentitiesEmailIdentityFeedback<
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
                    (typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']
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
  const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityFeedbackMutationOptions<
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

export function getPutV1EmailIdentitiesEmailIdentityMailFromMutationKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/mail-from', 'PUT'] as const
}

export function getPutV1EmailIdentitiesEmailIdentityMailFromMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailIdentitiesEmailIdentityMailFromMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email.identities[':EmailIdentity']['mail-from'].$put(args, options),
      )
    },
  })
}

export function usePutV1EmailIdentitiesEmailIdentityMailFrom<
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
                    (typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']
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
  const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityMailFromMutationOptions<
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

export function getPostV1EmailOutboundEmailsMutationKey() {
  return ['v1', '/v1/email/outbound-emails', 'POST'] as const
}

export function getPostV1EmailOutboundEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['outbound-emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['outbound-emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailOutboundEmailsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.email)['outbound-emails']['$post']>) {
      return parseResponse(client.v1.email['outbound-emails'].$post(args, options))
    },
  })
}

export function usePostV1EmailOutboundEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email)['outbound-emails']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['outbound-emails']['$post']>,
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
  const mutationDefaults = getPostV1EmailOutboundEmailsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EmailTagsMutationKey() {
  return ['v1', '/v1/email/tags', 'POST'] as const
}

export function getPostV1EmailTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.tags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.email.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.tags.$post>) {
      return parseResponse(client.v1.email.tags.$post(args, options))
    },
  })
}

export function usePostV1EmailTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.tags.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.email.tags.$post>,
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
  const mutationDefaults = getPostV1EmailTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1EmailTagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/email/tags#ResourceArn&TagKeys', 'DELETE'] as const
}

export function getDeleteV1EmailTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EmailTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.email['tags#ResourceArn&TagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV1EmailTagsResourceArnTagKeys<
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
                Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteV1EmailTagsResourceArnTagKeysMutationOptions<
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
