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

export function getGetV05WellKnownOpenidConfigurationKey() {
  return ['v0.5', '/v0.5/.well-known/openid-configuration'] as const
}

export function useGetV05WellKnownOpenidConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV05WellKnownOpenidConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v0.5']['.well-known']['openid-configuration'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV05WellKnownOpenidConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV05WellKnownOpenidConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v0.5']['.well-known']['openid-configuration'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV05CareContextsDiscoverKey() {
  return ['v0.5', '/v0.5/care-contexts/discover', 'POST'] as const
}

export function usePostV05CareContextsDiscover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05CareContextsDiscoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['care-contexts']['discover']['$post']> },
      ) => parseResponse(client['v0.5']['care-contexts'].discover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
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

export function getGetV05CertsKey() {
  return ['v0.5', '/v0.5/certs'] as const
}

export function useGetV05Certs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV05CertsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v0.5'].certs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV05Certs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV05CertsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v0.5'].certs.$get(undefined, clientOptions)),
      restSwrOptions,
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

export function getPostV05ConsentRequestsOnInitKey() {
  return ['v0.5', '/v0.5/consent-requests/on-init', 'POST'] as const
}

export function usePostV05ConsentRequestsOnInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentRequestsOnInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>
        },
      ) => parseResponse(client['v0.5']['consent-requests']['on-init'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05ConsentRequestsOnStatusKey() {
  return ['v0.5', '/v0.5/consent-requests/on-status', 'POST'] as const
}

export function usePostV05ConsentRequestsOnStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentRequestsOnStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>
        },
      ) => parseResponse(client['v0.5']['consent-requests']['on-status'].$post(arg, clientOptions)),
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

export function getPostV05ConsentsHipNotifyKey() {
  return ['v0.5', '/v0.5/consents/hip/notify', 'POST'] as const
}

export function usePostV05ConsentsHipNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentsHipNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']> },
      ) => parseResponse(client['v0.5'].consents.hip.notify.$post(arg, clientOptions)),
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

export function getPostV05ConsentsHiuNotifyKey() {
  return ['v0.5', '/v0.5/consents/hiu/notify', 'POST'] as const
}

export function usePostV05ConsentsHiuNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentsHiuNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']> },
      ) => parseResponse(client['v0.5'].consents.hiu.notify.$post(arg, clientOptions)),
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

export function getPostV05ConsentsOnFetchKey() {
  return ['v0.5', '/v0.5/consents/on-fetch', 'POST'] as const
}

export function usePostV05ConsentsOnFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05ConsentsOnFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['consents']['on-fetch']['$post']> },
      ) => parseResponse(client['v0.5'].consents['on-fetch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationCmOnRequestKey() {
  return ['v0.5', '/v0.5/health-information/cm/on-request', 'POST'] as const
}

export function usePostV05HealthInformationCmOnRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['health-information']['cm']['on-request']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['cm']['on-request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationCmOnRequestKey()
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
            (typeof client)['v0.5']['health-information']['cm']['on-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v0.5']['health-information'].cm['on-request'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationCmRequestKey() {
  return ['v0.5', '/v0.5/health-information/cm/request', 'POST'] as const
}

export function usePostV05HealthInformationCmRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['health-information']['cm']['request']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['cm']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationCmRequestKey()
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
            (typeof client)['v0.5']['health-information']['cm']['request']['$post']
          >
        },
      ) => parseResponse(client['v0.5']['health-information'].cm.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationHipOnRequestKey() {
  return ['v0.5', '/v0.5/health-information/hip/on-request', 'POST'] as const
}

export function usePostV05HealthInformationHipOnRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['health-information']['hip']['on-request']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['hip']['on-request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationHipOnRequestKey()
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
            (typeof client)['v0.5']['health-information']['hip']['on-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v0.5']['health-information'].hip['on-request'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV05HealthInformationHipRequestKey() {
  return ['v0.5', '/v0.5/health-information/hip/request', 'POST'] as const
}

export function usePostV05HealthInformationHipRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['health-information']['hip']['request']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['health-information']['hip']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05HealthInformationHipRequestKey()
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
            (typeof client)['v0.5']['health-information']['hip']['request']['$post']
          >
        },
      ) =>
        parseResponse(client['v0.5']['health-information'].hip.request.$post(arg, clientOptions)),
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

export function getGetV05HiServicesServiceIdKey(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v0.5', '/v0.5/hi-services/:service-id', keyArgs] as const
}

export function useGetV05HiServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
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
        ? getGetV05HiServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v0.5']['hi-services'][':service-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV05HiServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
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
        ? getGetV05HiServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v0.5']['hi-services'][':service-id'].$get(args, clientOptions)),
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

export function getPostV05LinksLinkConfirmKey() {
  return ['v0.5', '/v0.5/links/link/confirm', 'POST'] as const
}

export function usePostV05LinksLinkConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05LinksLinkConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['links']['link']['confirm']['$post']> },
      ) => parseResponse(client['v0.5'].links.link.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05LinksLinkInitKey() {
  return ['v0.5', '/v0.5/links/link/init', 'POST'] as const
}

export function usePostV05LinksLinkInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['init']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['links']['link']['init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05LinksLinkInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['links']['link']['init']['$post']> },
      ) => parseResponse(client['v0.5'].links.link.init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05LinksLinkOnAddContextsKey() {
  return ['v0.5', '/v0.5/links/link/on-add-contexts', 'POST'] as const
}

export function usePostV05LinksLinkOnAddContexts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05LinksLinkOnAddContextsKey()
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
            (typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']
          >
        },
      ) => parseResponse(client['v0.5'].links.link['on-add-contexts'].$post(arg, clientOptions)),
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

export function getPostV05PatientsOnFindKey() {
  return ['v0.5', '/v0.5/patients/on-find', 'POST'] as const
}

export function usePostV05PatientsOnFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['on-find']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['patients']['on-find']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05PatientsOnFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v0.5']['patients']['on-find']['$post']> },
      ) => parseResponse(client['v0.5'].patients['on-find'].$post(arg, clientOptions)),
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

export function getPostV05PatientsProfileShareKey() {
  return ['v0.5', '/v0.5/patients/profile/share', 'POST'] as const
}

export function usePostV05PatientsProfileShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05PatientsProfileShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>
        },
      ) => parseResponse(client['v0.5'].patients.profile.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05PatientsSmsNotifyKey() {
  return ['v0.5', '/v0.5/patients/sms/notify', 'POST'] as const
}

export function usePostV05PatientsSmsNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05PatientsSmsNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']> },
      ) => parseResponse(client['v0.5'].patients.sms.notify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05PatientsSmsOnNotifyKey() {
  return ['v0.5', '/v0.5/patients/sms/on-notify', 'POST'] as const
}

export function usePostV05PatientsSmsOnNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05PatientsSmsOnNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>
        },
      ) => parseResponse(client['v0.5'].patients.sms['on-notify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05SessionsKey() {
  return ['v0.5', '/v0.5/sessions', 'POST'] as const
}

export function usePostV05Sessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['sessions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v0.5']['sessions']['$post']> },
      ) => parseResponse(client['v0.5'].sessions.$post(arg, clientOptions)),
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

export function getPostV05SubscriptionRequestsCmOnInitKey() {
  return ['v0.5', '/v0.5/subscription-requests/cm/on-init', 'POST'] as const
}

export function usePostV05SubscriptionRequestsCmOnInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SubscriptionRequestsCmOnInitKey()
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
            (typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v0.5']['subscription-requests'].cm['on-init'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV05SubscriptionRequestsHiuNotifyKey() {
  return ['v0.5', '/v0.5/subscription-requests/hiu/notify', 'POST'] as const
}

export function usePostV05SubscriptionRequestsHiuNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SubscriptionRequestsHiuNotifyKey()
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
            (typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']
          >
        },
      ) =>
        parseResponse(client['v0.5']['subscription-requests'].hiu.notify.$post(arg, clientOptions)),
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

export function getPostV05SubscriptionsHiuNotifyKey() {
  return ['v0.5', '/v0.5/subscriptions/hiu/notify', 'POST'] as const
}

export function usePostV05SubscriptionsHiuNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05SubscriptionsHiuNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>
        },
      ) => parseResponse(client['v0.5'].subscriptions.hiu.notify.$post(arg, clientOptions)),
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

export function getPostV05UsersAuthNotifyKey() {
  return ['v0.5', '/v0.5/users/auth/notify', 'POST'] as const
}

export function usePostV05UsersAuthNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['notify']['$post']> },
      ) => parseResponse(client['v0.5'].users.auth.notify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthOnConfirmKey() {
  return ['v0.5', '/v0.5/users/auth/on-confirm', 'POST'] as const
}

export function usePostV05UsersAuthOnConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthOnConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>
        },
      ) => parseResponse(client['v0.5'].users.auth['on-confirm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthOnFetchModesKey() {
  return ['v0.5', '/v0.5/users/auth/on-fetch-modes', 'POST'] as const
}

export function usePostV05UsersAuthOnFetchModes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthOnFetchModesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>
        },
      ) => parseResponse(client['v0.5'].users.auth['on-fetch-modes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV05UsersAuthOnInitKey() {
  return ['v0.5', '/v0.5/users/auth/on-init', 'POST'] as const
}

export function usePostV05UsersAuthOnInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV05UsersAuthOnInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']> },
      ) => parseResponse(client['v0.5'].users.auth['on-init'].$post(arg, clientOptions)),
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
