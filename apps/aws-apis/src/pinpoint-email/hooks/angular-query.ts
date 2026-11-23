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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EmailConfigurationSetsQueryKey(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/configuration-sets', keyArgs] as const
}

export function getV1EmailConfigurationSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailConfigurationSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['configuration-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailConfigurationSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1EmailConfigurationSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EmailConfigurationSetsMutationOptions<
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

export function getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations',
    keyArgs,
  ] as const
}

export function getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
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

export function getV1EmailDedicatedIpPoolsQueryKey(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/dedicated-ip-pools', keyArgs] as const
}

export function getV1EmailDedicatedIpPoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDedicatedIpPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['dedicated-ip-pools'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDedicatedIpPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDedicatedIpPoolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1EmailDedicatedIpPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EmailDedicatedIpPoolsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1EmailDeliverabilityDashboardTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EmailDeliverabilityDashboardTestMutationOptions<
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

export function getV1EmailIdentitiesQueryKey(
  args: InferRequestType<typeof client.v1.email.identities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/identities', keyArgs] as const
}

export function getV1EmailIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email.identities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailIdentitiesQueryKey>
  >({
    queryKey: getV1EmailIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.identities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EmailIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.email.identities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmailIdentitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1EmailIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.email.identities.$post>,
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
    const mutationDefaults = getPostV1EmailIdentitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1EmailConfigurationSetsConfigurationSetNameQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName', keyArgs] as const
}

export function getV1EmailConfigurationSetsConfigurationSetNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailConfigurationSetsConfigurationSetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['configuration-sets'][':ConfigurationSetName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailConfigurationSetsConfigurationSetName<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailConfigurationSetsConfigurationSetNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV1EmailConfigurationSetsConfigurationSetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EmailConfigurationSetsConfigurationSetNameMutationOptions<
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

export function injectPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function injectDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function injectDeleteV1EmailDedicatedIpPoolsPoolName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EmailDedicatedIpPoolsPoolNameMutationOptions<
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

export function getV1EmailIdentitiesEmailIdentityQueryKey(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/identities/:EmailIdentity', keyArgs] as const
}

export function getV1EmailIdentitiesEmailIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailIdentitiesEmailIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.identities[':EmailIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailIdentitiesEmailIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailIdentitiesEmailIdentityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV1EmailIdentitiesEmailIdentity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EmailIdentitiesEmailIdentityMutationOptions<
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

export function getV1EmailAccountQueryKey(
  args: InferRequestType<typeof client.v1.email.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/account', keyArgs] as const
}

export function getV1EmailAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailAccountQueryKey>
  >({
    queryKey: getV1EmailAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EmailAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.email.account.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmailAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames',
    keyArgs,
  ] as const
}

export function getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey
        >
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
      ...getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailDedicatedIpsIPQueryKey(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/dedicated-ips/:IP', keyArgs] as const
}

export function getV1EmailDedicatedIpsIPQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDedicatedIpsIPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['dedicated-ips'][':IP'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDedicatedIpsIP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDedicatedIpsIPQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailDedicatedIpsQueryKey(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/dedicated-ips', keyArgs] as const
}

export function getV1EmailDedicatedIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDedicatedIpsQueryKey>
  >({
    queryKey: getV1EmailDedicatedIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['dedicated-ips'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDedicatedIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailDedicatedIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmailDedicatedIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1EmailDeliverabilityDashboardQueryKey(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDeliverabilityDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDeliverabilityDashboardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1EmailDeliverabilityDashboard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EmailDeliverabilityDashboardMutationOptions<
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

export function getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard/test-reports/:ReportId', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardTestReportsReportIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDeliverabilityDashboardTestReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboardTestReportsReportId<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDeliverabilityDashboardTestReportsReportIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard/campaigns/:CampaignId', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboardCampaignsCampaignId<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDeliverabilityDashboardCampaignsCampaignIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/email/deliverability-dashboard/statistics-report/:Domain#StartDate&EndDate',
    keyArgs,
  ] as const
}

export function getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['statistics-report'][
          ':Domain#StartDate&EndDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailDeliverabilityDashboardTestReportsQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard/test-reports', keyArgs] as const
}

export function getV1EmailDeliverabilityDashboardTestReportsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailDeliverabilityDashboardTestReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard']['test-reports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboardTestReports<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1EmailDeliverabilityDashboardTestReportsQueryKey>
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
      ...getV1EmailDeliverabilityDashboardTestReportsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns#StartDate&EndDate',
    keyArgs,
  ] as const
}

export function getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['deliverability-dashboard'].domains[':SubscribedDomain'][
          'campaigns#StartDate&EndDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
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
  args: () => InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1EmailTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/tags#ResourceArn', keyArgs] as const
}

export function getV1EmailTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EmailTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email['tags#ResourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmailTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EmailTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1EmailAccountDedicatedIpsWarmup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EmailAccountDedicatedIpsWarmupMutationOptions<
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

export function injectPutV1EmailAccountSending<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.sending.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.email.account.sending.$put>,
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
    const mutationDefaults = getPutV1EmailAccountSendingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationOptions<
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

export function injectPutV1EmailConfigurationSetsConfigurationSetNameReputationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationOptions<
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

export function injectPutV1EmailConfigurationSetsConfigurationSetNameSending<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1EmailConfigurationSetsConfigurationSetNameSendingMutationOptions<
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

export function injectPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationOptions<
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

export function injectPutV1EmailDedicatedIpsIPPool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EmailDedicatedIpsIPPoolMutationOptions<
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

export function injectPutV1EmailDedicatedIpsIPWarmup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EmailDedicatedIpsIPWarmupMutationOptions<
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

export function injectPutV1EmailIdentitiesEmailIdentityDkim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityDkimMutationOptions<
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

export function injectPutV1EmailIdentitiesEmailIdentityFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']>,
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
    const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityFeedbackMutationOptions<
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

export function injectPutV1EmailIdentitiesEmailIdentityMailFrom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityMailFromMutationOptions<
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

export function injectPostV1EmailOutboundEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EmailOutboundEmailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1EmailTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.email.tags.$post>,
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
    const mutationDefaults = getPostV1EmailTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV1EmailTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EmailTagsResourceArnTagKeysMutationOptions<
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
