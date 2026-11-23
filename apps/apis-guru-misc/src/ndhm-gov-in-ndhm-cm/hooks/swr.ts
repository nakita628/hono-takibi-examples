import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV0_5Key() {
  return ['v0.5'] as const
}

export function getPostV05CareContextsOnDiscoverKey() {
  return ['v0.5', '/v0.5/care-contexts/on-discover', 'POST'] as const
}

export function usePostV05CareContextsOnDiscover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05CareContextsOnDiscoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>
        },
      ) => parseResponse(client['v0.5']['care-contexts']['on-discover'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05ConsentRequestsInitKey() {
  return ['v0.5', '/v0.5/consent-requests/init', 'POST'] as const
}

export function usePostV05ConsentRequestsInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['init']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentRequestsInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']> },
      ) => parseResponse(client['v0.5']['consent-requests'].init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05ConsentRequestsStatusKey() {
  return ['v0.5', '/v0.5/consent-requests/status', 'POST'] as const
}

export function usePostV05ConsentRequestsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentRequestsStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['consent-requests']['status']['$post']>
        },
      ) => parseResponse(client['v0.5']['consent-requests'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05ConsentsFetchKey() {
  return ['v0.5', '/v0.5/consents/fetch', 'POST'] as const
}

export function usePostV05ConsentsFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['fetch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consents']['fetch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentsFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v0.5']['consents']['fetch']['$post']> },
      ) => parseResponse(client['v0.5'].consents.fetch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05ConsentsHipOnNotifyKey() {
  return ['v0.5', '/v0.5/consents/hip/on-notify', 'POST'] as const
}

export function usePostV05ConsentsHipOnNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentsHipOnNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>
        },
      ) => parseResponse(client['v0.5'].consents.hip['on-notify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05ConsentsHiuOnNotifyKey() {
  return ['v0.5', '/v0.5/consents/hiu/on-notify', 'POST'] as const
}

export function usePostV05ConsentsHiuOnNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentsHiuOnNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>
        },
      ) => parseResponse(client['v0.5'].consents.hiu['on-notify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationNotifyKey() {
  return ['v0.5', '/v0.5/health-information/notify', 'POST'] as const
}

export function usePostV05HealthInformationNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v0.5']['health-information']['notify']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>
        },
      ) => parseResponse(client['v0.5']['health-information'].notify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationOnRequestKey() {
  return ['v0.5', '/v0.5/health-information/on-request', 'POST'] as const
}

export function usePostV05HealthInformationOnRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['health-information']['on-request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['on-request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationOnRequestKey()
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
            (typeof client)['v0.5']['health-information']['on-request']['$post']
          >
        },
      ) =>
        parseResponse(client['v0.5']['health-information']['on-request'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationRequestKey() {
  return ['v0.5', '/v0.5/health-information/request', 'POST'] as const
}

export function usePostV05HealthInformationRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['health-information']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['health-information']['request']['$post']>
        },
      ) => parseResponse(client['v0.5']['health-information'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV05HeartbeatKey() {
  return ['v0.5', '/v0.5/heartbeat'] as const
}

export function useGetV05Heartbeat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV05HeartbeatKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v0.5'].heartbeat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV05Heartbeat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV05HeartbeatKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v0.5'].heartbeat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV05LinksLinkAddContextsKey() {
  return ['v0.5', '/v0.5/links/link/add-contexts', 'POST'] as const
}

export function usePostV05LinksLinkAddContexts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05LinksLinkAddContextsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>
        },
      ) => parseResponse(client['v0.5'].links.link['add-contexts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05LinksLinkOnConfirmKey() {
  return ['v0.5', '/v0.5/links/link/on-confirm', 'POST'] as const
}

export function usePostV05LinksLinkOnConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05LinksLinkOnConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>
        },
      ) => parseResponse(client['v0.5'].links.link['on-confirm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05LinksLinkOnInitKey() {
  return ['v0.5', '/v0.5/links/link/on-init', 'POST'] as const
}

export function usePostV05LinksLinkOnInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05LinksLinkOnInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['links']['link']['on-init']['$post']> },
      ) => parseResponse(client['v0.5'].links.link['on-init'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05PatientsFindKey() {
  return ['v0.5', '/v0.5/patients/find', 'POST'] as const
}

export function usePostV05PatientsFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['find']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05PatientsFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']> },
      ) => parseResponse(client['v0.5'].patients.find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05PatientsProfileOnShareKey() {
  return ['v0.5', '/v0.5/patients/profile/on-share', 'POST'] as const
}

export function usePostV05PatientsProfileOnShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05PatientsProfileOnShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>
        },
      ) => parseResponse(client['v0.5'].patients.profile['on-share'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05SubscriptionRequestsCmInitKey() {
  return ['v0.5', '/v0.5/subscription-requests/cm/init', 'POST'] as const
}

export function usePostV05SubscriptionRequestsCmInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SubscriptionRequestsCmInitKey()
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
            (typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']
          >
        },
      ) => parseResponse(client['v0.5']['subscription-requests'].cm.init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05SubscriptionRequestsHiuOnNotifyKey() {
  return ['v0.5', '/v0.5/subscription-requests/hiu/on-notify', 'POST'] as const
}

export function usePostV05SubscriptionRequestsHiuOnNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SubscriptionRequestsHiuOnNotifyKey()
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
            (typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v0.5']['subscription-requests'].hiu['on-notify'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV05SubscriptionsHiuOnNotifyKey() {
  return ['v0.5', '/v0.5/subscriptions/hiu/on-notify', 'POST'] as const
}

export function usePostV05SubscriptionsHiuOnNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SubscriptionsHiuOnNotifyKey()
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
            (typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']
          >
        },
      ) => parseResponse(client['v0.5'].subscriptions.hiu['on-notify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthConfirmKey() {
  return ['v0.5', '/v0.5/users/auth/confirm', 'POST'] as const
}

export function usePostV05UsersAuthConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']> },
      ) => parseResponse(client['v0.5'].users.auth.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthFetchModesKey() {
  return ['v0.5', '/v0.5/users/auth/fetch-modes', 'POST'] as const
}

export function usePostV05UsersAuthFetchModes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthFetchModesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>
        },
      ) => parseResponse(client['v0.5'].users.auth['fetch-modes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthInitKey() {
  return ['v0.5', '/v0.5/users/auth/init', 'POST'] as const
}

export function usePostV05UsersAuthInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['init']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['init']['$post']> },
      ) => parseResponse(client['v0.5'].users.auth.init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthOnNotifyKey() {
  return ['v0.5', '/v0.5/users/auth/on-notify', 'POST'] as const
}

export function usePostV05UsersAuthOnNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthOnNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>
        },
      ) => parseResponse(client['v0.5'].users.auth['on-notify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
