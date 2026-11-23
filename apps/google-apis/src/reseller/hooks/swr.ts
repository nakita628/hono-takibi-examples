import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppsKey() {
  return ['apps'] as const
}

export function getPostAppsResellerV1CustomersKey() {
  return ['apps', '/apps/reseller/v1/customers', 'POST'] as const
}

export function usePostAppsResellerV1Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.customers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.apps.reseller.v1.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsResellerV1CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.apps.reseller.v1.customers.$post> },
      ) => parseResponse(client.apps.reseller.v1.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsResellerV1CustomersCustomerIdKey(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
) {
  return ['apps', '/apps/reseller/v1/customers/:customerId', args] as const
}

export function useGetAppsResellerV1CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
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
        ? getGetAppsResellerV1CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps.reseller.v1.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsResellerV1CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
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
        ? getGetAppsResellerV1CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps.reseller.v1.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppsResellerV1CustomersCustomerIdKey() {
  return ['apps', '/apps/reseller/v1/customers/:customerId', 'PUT'] as const
}

export function usePutAppsResellerV1CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppsResellerV1CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>
        },
      ) => parseResponse(client.apps.reseller.v1.customers[':customerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsResellerV1CustomersCustomerIdKey() {
  return ['apps', '/apps/reseller/v1/customers/:customerId', 'PATCH'] as const
}

export function usePatchAppsResellerV1CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsResellerV1CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>
        },
      ) =>
        parseResponse(client.apps.reseller.v1.customers[':customerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsKey() {
  return ['apps', '/apps/reseller/v1/customers/:customerId/subscriptions', 'POST'] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsResellerV1CustomersCustomerIdSubscriptionsKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdKey(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
) {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId',
    args,
  ] as const
}

export function useGetAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
        ? getGetAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
          client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
        ? getGetAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
          client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId',
    'DELETE',
  ] as const
}

export function useDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/activate',
    'POST',
  ] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[
            ':subscriptionId'
          ].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changePlan',
    'POST',
  ] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[
            ':subscriptionId'
          ].changePlan.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changeRenewalSettings',
    'POST',
  ] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[
            ':subscriptionId'
          ].changeRenewalSettings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changeSeats',
    'POST',
  ] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeats<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[
            ':subscriptionId'
          ].changeSeats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/startPaidService',
    'POST',
  ] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[
            ':subscriptionId'
          ].startPaidService.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/suspend',
    'POST',
  ] as const
}

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendKey()
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
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[
            ':subscriptionId'
          ].suspend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsResellerV1ResellernotifyGetwatchdetailsKey(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
) {
  return ['apps', '/apps/reseller/v1/resellernotify/getwatchdetails', args] as const
}

export function useGetAppsResellerV1ResellernotifyGetwatchdetails<TError = unknown>(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
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
        ? getGetAppsResellerV1ResellernotifyGetwatchdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps.reseller.v1.resellernotify.getwatchdetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsResellerV1ResellernotifyGetwatchdetails<TError = unknown>(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
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
        ? getGetAppsResellerV1ResellernotifyGetwatchdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps.reseller.v1.resellernotify.getwatchdetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsResellerV1ResellernotifyRegisterKey() {
  return ['apps', '/apps/reseller/v1/resellernotify/register', 'POST'] as const
}

export function usePostAppsResellerV1ResellernotifyRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.register.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsResellerV1ResellernotifyRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post> },
      ) => parseResponse(client.apps.reseller.v1.resellernotify.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsResellerV1ResellernotifyUnregisterKey() {
  return ['apps', '/apps/reseller/v1/resellernotify/unregister', 'POST'] as const
}

export function usePostAppsResellerV1ResellernotifyUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsResellerV1ResellernotifyUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>
        },
      ) =>
        parseResponse(client.apps.reseller.v1.resellernotify.unregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsResellerV1SubscriptionsKey(
  args: InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
) {
  return ['apps', '/apps/reseller/v1/subscriptions', args] as const
}

export function useGetAppsResellerV1Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
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
        ? getGetAppsResellerV1SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.reseller.v1.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsResellerV1Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
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
        ? getGetAppsResellerV1SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.reseller.v1.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
