import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1EmailConfigurationSetsKey(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/configuration-sets', keyArgs] as const
}

export function useGetV1EmailConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
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
        ? getGetV1EmailConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['configuration-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
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
        ? getGetV1EmailConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['configuration-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmailConfigurationSetsKey() {
  return ['v1', '/v1/email/configuration-sets', 'POST'] as const
}

export function usePostV1EmailConfigurationSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['configuration-sets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['configuration-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailConfigurationSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.email)['configuration-sets']['$post']> },
      ) => parseResponse(client.v1.email['configuration-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailConfigurationSetsConfigurationSetNameEventDestinationsKey(
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

export function useGetV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailConfigurationSetsConfigurationSetNameEventDestinationsKey(args)
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
                (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
          client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailConfigurationSetsConfigurationSetNameEventDestinationsKey(args)
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
                (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
          client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations',
    'POST',
  ] as const
}

export function usePostV1EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1EmailConfigurationSetsConfigurationSetNameEventDestinationsKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailDedicatedIpPoolsKey(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/dedicated-ip-pools', keyArgs] as const
}

export function useGetV1EmailDedicatedIpPools<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
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
        ? getGetV1EmailDedicatedIpPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['dedicated-ip-pools'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDedicatedIpPools<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
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
        ? getGetV1EmailDedicatedIpPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['dedicated-ip-pools'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmailDedicatedIpPoolsKey() {
  return ['v1', '/v1/email/dedicated-ip-pools', 'POST'] as const
}

export function usePostV1EmailDedicatedIpPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailDedicatedIpPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$post']> },
      ) => parseResponse(client.v1.email['dedicated-ip-pools'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EmailDeliverabilityDashboardTestKey() {
  return ['v1', '/v1/email/deliverability-dashboard/test', 'POST'] as const
}

export function usePostV1EmailDeliverabilityDashboardTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailDeliverabilityDashboardTestKey()
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
            (typeof client.v1.email)['deliverability-dashboard']['test']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.email['deliverability-dashboard'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailIdentitiesKey(
  args: InferRequestType<typeof client.v1.email.identities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/identities', keyArgs] as const
}

export function useGetV1EmailIdentities<TError = unknown>(
  args: InferRequestType<typeof client.v1.email.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
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
        ? getGetV1EmailIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailIdentities<TError = unknown>(
  args: InferRequestType<typeof client.v1.email.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
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
        ? getGetV1EmailIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmailIdentitiesKey() {
  return ['v1', '/v1/email/identities', 'POST'] as const
}

export function usePostV1EmailIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.identities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.email.identities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailIdentitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.email.identities.$post> }) =>
        parseResponse(client.v1.email.identities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailConfigurationSetsConfigurationSetNameKey(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName', keyArgs] as const
}

export function useGetV1EmailConfigurationSetsConfigurationSetName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailConfigurationSetsConfigurationSetNameKey(args)
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
                (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
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
          client.v1.email['configuration-sets'][':ConfigurationSetName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailConfigurationSetsConfigurationSetName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailConfigurationSetsConfigurationSetNameKey(args)
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
                (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
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
          client.v1.email['configuration-sets'][':ConfigurationSetName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1EmailConfigurationSetsConfigurationSetNameKey() {
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName', 'DELETE'] as const
}

export function useDeleteV1EmailConfigurationSetsConfigurationSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EmailConfigurationSetsConfigurationSetNameKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'PUT',
  ] as const
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
            ':EventDestinationName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'DELETE',
  ] as const
}

export function useDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
            ':EventDestinationName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EmailDedicatedIpPoolsPoolNameKey() {
  return ['v1', '/v1/email/dedicated-ip-pools/:PoolName', 'DELETE'] as const
}

export function useDeleteV1EmailDedicatedIpPoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EmailDedicatedIpPoolsPoolNameKey()
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
            (typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['dedicated-ip-pools'][':PoolName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailIdentitiesEmailIdentityKey(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/identities/:EmailIdentity', keyArgs] as const
}

export function useGetV1EmailIdentitiesEmailIdentity<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
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
        ? getGetV1EmailIdentitiesEmailIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.email.identities[':EmailIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailIdentitiesEmailIdentity<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
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
        ? getGetV1EmailIdentitiesEmailIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.email.identities[':EmailIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1EmailIdentitiesEmailIdentityKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity', 'DELETE'] as const
}

export function useDeleteV1EmailIdentitiesEmailIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EmailIdentitiesEmailIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>
        },
      ) => parseResponse(client.v1.email.identities[':EmailIdentity'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailAccountKey(
  args: InferRequestType<typeof client.v1.email.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/account', keyArgs] as const
}

export function useGetV1EmailAccount<TError = unknown>(
  args: InferRequestType<typeof client.v1.email.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmailAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailAccount<TError = unknown>(
  args: InferRequestType<typeof client.v1.email.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmailAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesKey(
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

export function useGetV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
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
          client.v1.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
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
          client.v1.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDedicatedIpsIPKey(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/dedicated-ips/:IP', keyArgs] as const
}

export function useGetV1EmailDedicatedIpsIP<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
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
        ? getGetV1EmailDedicatedIpsIPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['dedicated-ips'][':IP'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDedicatedIpsIP<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
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
        ? getGetV1EmailDedicatedIpsIPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['dedicated-ips'][':IP'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDedicatedIpsKey(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/dedicated-ips', keyArgs] as const
}

export function useGetV1EmailDedicatedIps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
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
        ? getGetV1EmailDedicatedIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['dedicated-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDedicatedIps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
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
        ? getGetV1EmailDedicatedIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['dedicated-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardKey(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard', keyArgs] as const
}

export function useGetV1EmailDeliverabilityDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
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
        ? getGetV1EmailDeliverabilityDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.email['deliverability-dashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
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
        ? getGetV1EmailDeliverabilityDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.email['deliverability-dashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EmailDeliverabilityDashboardKey() {
  return ['v1', '/v1/email/deliverability-dashboard', 'PUT'] as const
}

export function usePutV1EmailDeliverabilityDashboard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['deliverability-dashboard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailDeliverabilityDashboardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$put']> },
      ) => parseResponse(client.v1.email['deliverability-dashboard'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardTestReportsReportIdKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard/test-reports/:ReportId', keyArgs] as const
}

export function useGetV1EmailDeliverabilityDashboardTestReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardTestReportsReportIdKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
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
          client.v1.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboardTestReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardTestReportsReportIdKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
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
          client.v1.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardCampaignsCampaignIdKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard/campaigns/:CampaignId', keyArgs] as const
}

export function useGetV1EmailDeliverabilityDashboardCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardCampaignsCampaignIdKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
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
          client.v1.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboardCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardCampaignsCampaignIdKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
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
          client.v1.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateKey(
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

export function useGetV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
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
          client.v1.email['deliverability-dashboard']['statistics-report'][
            ':Domain#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
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
          client.v1.email['deliverability-dashboard']['statistics-report'][
            ':Domain#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardTestReportsKey(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/deliverability-dashboard/test-reports', keyArgs] as const
}

export function useGetV1EmailDeliverabilityDashboardTestReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardTestReportsKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
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
          client.v1.email['deliverability-dashboard']['test-reports'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboardTestReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardTestReportsKey(args)
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
                (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
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
          client.v1.email['deliverability-dashboard']['test-reports'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateKey(
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

export function useGetV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateKey(
            args,
          )
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
                (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
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
          client.v1.email['deliverability-dashboard'].domains[':SubscribedDomain'][
            'campaigns#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateKey(
            args,
          )
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
                (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
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
          client.v1.email['deliverability-dashboard'].domains[':SubscribedDomain'][
            'campaigns#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailTagsResourceArnKey(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/email/tags#ResourceArn', keyArgs] as const
}

export function useGetV1EmailTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
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
        ? getGetV1EmailTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['tags#ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
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
        ? getGetV1EmailTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email['tags#ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EmailAccountDedicatedIpsWarmupKey() {
  return ['v1', '/v1/email/account/dedicated-ips/warmup', 'PUT'] as const
}

export function usePutV1EmailAccountDedicatedIpsWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailAccountDedicatedIpsWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>
        },
      ) => parseResponse(client.v1.email.account['dedicated-ips'].warmup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailAccountSendingKey() {
  return ['v1', '/v1/email/account/sending', 'PUT'] as const
}

export function usePutV1EmailAccountSending<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.account.sending.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.email.account.sending.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailAccountSendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.email.account.sending.$put> },
      ) => parseResponse(client.v1.email.account.sending.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/delivery-options',
    'PUT',
  ] as const
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName']['delivery-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/reputation-options',
    'PUT',
  ] as const
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameReputationOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1EmailConfigurationSetsConfigurationSetNameReputationOptionsKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName']['reputation-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameSendingKey() {
  return ['v1', '/v1/email/configuration-sets/:ConfigurationSetName/sending', 'PUT'] as const
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameSending<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailConfigurationSetsConfigurationSetNameSendingKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName'].sending.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsKey() {
  return [
    'v1',
    '/v1/email/configuration-sets/:ConfigurationSetName/tracking-options',
    'PUT',
  ] as const
}

export function usePutV1EmailConfigurationSetsConfigurationSetNameTrackingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsKey()
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
            (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email['configuration-sets'][':ConfigurationSetName']['tracking-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailDedicatedIpsIPPoolKey() {
  return ['v1', '/v1/email/dedicated-ips/:IP/pool', 'PUT'] as const
}

export function usePutV1EmailDedicatedIpsIPPool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailDedicatedIpsIPPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>
        },
      ) => parseResponse(client.v1.email['dedicated-ips'][':IP'].pool.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailDedicatedIpsIPWarmupKey() {
  return ['v1', '/v1/email/dedicated-ips/:IP/warmup', 'PUT'] as const
}

export function usePutV1EmailDedicatedIpsIPWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailDedicatedIpsIPWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>
        },
      ) => parseResponse(client.v1.email['dedicated-ips'][':IP'].warmup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailIdentitiesEmailIdentityDkimKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/dkim', 'PUT'] as const
}

export function usePutV1EmailIdentitiesEmailIdentityDkim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailIdentitiesEmailIdentityDkimKey()
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
            (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.email.identities[':EmailIdentity'].dkim.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailIdentitiesEmailIdentityFeedbackKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/feedback', 'PUT'] as const
}

export function usePutV1EmailIdentitiesEmailIdentityFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailIdentitiesEmailIdentityFeedbackKey()
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
            (typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email.identities[':EmailIdentity'].feedback.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailIdentitiesEmailIdentityMailFromKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/mail-from', 'PUT'] as const
}

export function usePutV1EmailIdentitiesEmailIdentityMailFrom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailIdentitiesEmailIdentityMailFromKey()
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
            (typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email.identities[':EmailIdentity']['mail-from'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1EmailOutboundEmailsKey() {
  return ['v1', '/v1/email/outbound-emails', 'POST'] as const
}

export function usePostV1EmailOutboundEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['outbound-emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['outbound-emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailOutboundEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.email)['outbound-emails']['$post']> },
      ) => parseResponse(client.v1.email['outbound-emails'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EmailTagsKey() {
  return ['v1', '/v1/email/tags', 'POST'] as const
}

export function usePostV1EmailTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.tags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.email.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.email.tags.$post> }) =>
        parseResponse(client.v1.email.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EmailTagsResourceArnTagKeysKey() {
  return ['v1', '/v1/email/tags#ResourceArn&TagKeys', 'DELETE'] as const
}

export function useDeleteV1EmailTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EmailTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>
        },
      ) => parseResponse(client.v1.email['tags#ResourceArn&TagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
