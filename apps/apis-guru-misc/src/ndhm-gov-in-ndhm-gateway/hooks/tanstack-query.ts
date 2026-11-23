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

export function getV0_5Key() {
  return ['v0.5'] as const
}

export function getV05WellKnownOpenidConfigurationQueryKey() {
  return ['v0.5', '/v0.5/.well-known/openid-configuration'] as const
}

export function getV05WellKnownOpenidConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV05WellKnownOpenidConfigurationQueryKey>
  >({
    queryKey: getV05WellKnownOpenidConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['v0.5']['.well-known']['openid-configuration'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV05WellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05WellKnownOpenidConfigurationQueryKey>
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
      ...getV05WellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV05WellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05WellKnownOpenidConfigurationQueryKey>
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
      ...getV05WellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV05CareContextsDiscoverMutationKey() {
  return ['v0.5', '/v0.5/care-contexts/discover', 'POST'] as const
}

export function getPostV05CareContextsDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05CareContextsDiscoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>,
    ) {
      return parseResponse(client['v0.5']['care-contexts'].discover.$post(args, options))
    },
  })
}

export function usePostV05CareContextsDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['care-contexts']['discover']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05CareContextsDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05CareContextsOnDiscoverMutationKey() {
  return ['v0.5', '/v0.5/care-contexts/on-discover', 'POST'] as const
}

export function getPostV05CareContextsOnDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05CareContextsOnDiscoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>,
    ) {
      return parseResponse(client['v0.5']['care-contexts']['on-discover'].$post(args, options))
    },
  })
}

export function usePostV05CareContextsOnDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05CareContextsOnDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function getV05CertsQueryKey() {
  return ['v0.5', '/v0.5/certs'] as const
}

export function getV05CertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV05CertsQueryKey>
  >({
    queryKey: getV05CertsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['v0.5'].certs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV05Certs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05CertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV05CertsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV05Certs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05CertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV05CertsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV05ConsentRequestsInitMutationKey() {
  return ['v0.5', '/v0.5/consent-requests/init', 'POST'] as const
}

export function getPostV05ConsentRequestsInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['init']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentRequestsInitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']>,
    ) {
      return parseResponse(client['v0.5']['consent-requests'].init.$post(args, options))
    },
  })
}

export function usePostV05ConsentRequestsInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['init']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentRequestsInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentRequestsOnInitMutationKey() {
  return ['v0.5', '/v0.5/consent-requests/on-init', 'POST'] as const
}

export function getPostV05ConsentRequestsOnInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentRequestsOnInitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>,
    ) {
      return parseResponse(client['v0.5']['consent-requests']['on-init'].$post(args, options))
    },
  })
}

export function usePostV05ConsentRequestsOnInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentRequestsOnInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentRequestsOnStatusMutationKey() {
  return ['v0.5', '/v0.5/consent-requests/on-status', 'POST'] as const
}

export function getPostV05ConsentRequestsOnStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentRequestsOnStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>,
    ) {
      return parseResponse(client['v0.5']['consent-requests']['on-status'].$post(args, options))
    },
  })
}

export function usePostV05ConsentRequestsOnStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentRequestsOnStatusMutationOptions<
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

export function getPostV05ConsentRequestsStatusMutationKey() {
  return ['v0.5', '/v0.5/consent-requests/status', 'POST'] as const
}

export function getPostV05ConsentRequestsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consent-requests']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentRequestsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consent-requests']['status']['$post']>,
    ) {
      return parseResponse(client['v0.5']['consent-requests'].status.$post(args, options))
    },
  })
}

export function usePostV05ConsentRequestsStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consent-requests']['status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consent-requests']['status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentRequestsStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentsFetchMutationKey() {
  return ['v0.5', '/v0.5/consents/fetch', 'POST'] as const
}

export function getPostV05ConsentsFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['fetch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consents']['fetch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentsFetchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consents']['fetch']['$post']>,
    ) {
      return parseResponse(client['v0.5'].consents.fetch.$post(args, options))
    },
  })
}

export function usePostV05ConsentsFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consents']['fetch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consents']['fetch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentsFetchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentsHipNotifyMutationKey() {
  return ['v0.5', '/v0.5/consents/hip/notify', 'POST'] as const
}

export function getPostV05ConsentsHipNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentsHipNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].consents.hip.notify.$post(args, options))
    },
  })
}

export function usePostV05ConsentsHipNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consents']['hip']['notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentsHipNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentsHipOnNotifyMutationKey() {
  return ['v0.5', '/v0.5/consents/hip/on-notify', 'POST'] as const
}

export function getPostV05ConsentsHipOnNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentsHipOnNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].consents.hip['on-notify'].$post(args, options))
    },
  })
}

export function usePostV05ConsentsHipOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentsHipOnNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentsHiuNotifyMutationKey() {
  return ['v0.5', '/v0.5/consents/hiu/notify', 'POST'] as const
}

export function getPostV05ConsentsHiuNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentsHiuNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].consents.hiu.notify.$post(args, options))
    },
  })
}

export function usePostV05ConsentsHiuNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentsHiuNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentsHiuOnNotifyMutationKey() {
  return ['v0.5', '/v0.5/consents/hiu/on-notify', 'POST'] as const
}

export function getPostV05ConsentsHiuOnNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentsHiuOnNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].consents.hiu['on-notify'].$post(args, options))
    },
  })
}

export function usePostV05ConsentsHiuOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentsHiuOnNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05ConsentsOnFetchMutationKey() {
  return ['v0.5', '/v0.5/consents/on-fetch', 'POST'] as const
}

export function getPostV05ConsentsOnFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05ConsentsOnFetchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>,
    ) {
      return parseResponse(client['v0.5'].consents['on-fetch'].$post(args, options))
    },
  })
}

export function usePostV05ConsentsOnFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05ConsentsOnFetchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05HealthInformationCmOnRequestMutationKey() {
  return ['v0.5', '/v0.5/health-information/cm/on-request', 'POST'] as const
}

export function getPostV05HealthInformationCmOnRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['health-information']['cm']['on-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationCmOnRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['health-information']['cm']['on-request']['$post']
      >,
    ) {
      return parseResponse(
        client['v0.5']['health-information'].cm['on-request'].$post(args, options),
      )
    },
  })
}

export function usePostV05HealthInformationCmOnRequest<
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
                  (typeof client)['v0.5']['health-information']['cm']['on-request']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['v0.5']['health-information']['cm']['on-request']['$post']
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
  const mutationDefaults = getPostV05HealthInformationCmOnRequestMutationOptions<
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

export function getPostV05HealthInformationCmRequestMutationKey() {
  return ['v0.5', '/v0.5/health-information/cm/request', 'POST'] as const
}

export function getPostV05HealthInformationCmRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['health-information']['cm']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationCmRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['health-information']['cm']['request']['$post']
      >,
    ) {
      return parseResponse(client['v0.5']['health-information'].cm.request.$post(args, options))
    },
  })
}

export function usePostV05HealthInformationCmRequest<
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
                ReturnType<(typeof client)['v0.5']['health-information']['cm']['request']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['health-information']['cm']['request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05HealthInformationCmRequestMutationOptions<
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

export function getPostV05HealthInformationHipOnRequestMutationKey() {
  return ['v0.5', '/v0.5/health-information/hip/on-request', 'POST'] as const
}

export function getPostV05HealthInformationHipOnRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['health-information']['hip']['on-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationHipOnRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['health-information']['hip']['on-request']['$post']
      >,
    ) {
      return parseResponse(
        client['v0.5']['health-information'].hip['on-request'].$post(args, options),
      )
    },
  })
}

export function usePostV05HealthInformationHipOnRequest<
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
                  (typeof client)['v0.5']['health-information']['hip']['on-request']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['v0.5']['health-information']['hip']['on-request']['$post']
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
  const mutationDefaults = getPostV05HealthInformationHipOnRequestMutationOptions<
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

export function getPostV05HealthInformationHipRequestMutationKey() {
  return ['v0.5', '/v0.5/health-information/hip/request', 'POST'] as const
}

export function getPostV05HealthInformationHipRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['health-information']['hip']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationHipRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['health-information']['hip']['request']['$post']
      >,
    ) {
      return parseResponse(client['v0.5']['health-information'].hip.request.$post(args, options))
    },
  })
}

export function usePostV05HealthInformationHipRequest<
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
                ReturnType<(typeof client)['v0.5']['health-information']['hip']['request']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['health-information']['hip']['request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05HealthInformationHipRequestMutationOptions<
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

export function getPostV05HealthInformationNotifyMutationKey() {
  return ['v0.5', '/v0.5/health-information/notify', 'POST'] as const
}

export function getPostV05HealthInformationNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v0.5']['health-information']['notify']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>,
    ) {
      return parseResponse(client['v0.5']['health-information'].notify.$post(args, options))
    },
  })
}

export function usePostV05HealthInformationNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['v0.5']['health-information']['notify']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05HealthInformationNotifyMutationOptions<
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

export function getV05HeartbeatQueryKey() {
  return ['v0.5', '/v0.5/heartbeat'] as const
}

export function getV05HeartbeatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV05HeartbeatQueryKey>
  >({
    queryKey: getV05HeartbeatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['v0.5'].heartbeat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV05Heartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05HeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV05HeartbeatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV05Heartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05HeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV05HeartbeatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV05HiServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v0.5', '/v0.5/hi-services/:service-id', keyArgs] as const
}

export function getV05HiServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV05HiServicesServiceIdQueryKey>
  >({
    queryKey: getV05HiServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v0.5']['hi-services'][':service-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV05HiServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05HiServicesServiceIdQueryKey>
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
      ...getV05HiServicesServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV05HiServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['hi-services'][':service-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV05HiServicesServiceIdQueryKey>
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
      ...getV05HiServicesServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV05LinksLinkAddContextsMutationKey() {
  return ['v0.5', '/v0.5/links/link/add-contexts', 'POST'] as const
}

export function getPostV05LinksLinkAddContextsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05LinksLinkAddContextsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>,
    ) {
      return parseResponse(client['v0.5'].links.link['add-contexts'].$post(args, options))
    },
  })
}

export function usePostV05LinksLinkAddContexts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05LinksLinkAddContextsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05LinksLinkConfirmMutationKey() {
  return ['v0.5', '/v0.5/links/link/confirm', 'POST'] as const
}

export function getPostV05LinksLinkConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05LinksLinkConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>,
    ) {
      return parseResponse(client['v0.5'].links.link.confirm.$post(args, options))
    },
  })
}

export function usePostV05LinksLinkConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['links']['link']['confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05LinksLinkConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05LinksLinkInitMutationKey() {
  return ['v0.5', '/v0.5/links/link/init', 'POST'] as const
}

export function getPostV05LinksLinkInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['init']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['links']['link']['init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05LinksLinkInitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['links']['link']['init']['$post']>,
    ) {
      return parseResponse(client['v0.5'].links.link.init.$post(args, options))
    },
  })
}

export function usePostV05LinksLinkInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['init']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['links']['link']['init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05LinksLinkInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05LinksLinkOnAddContextsMutationKey() {
  return ['v0.5', '/v0.5/links/link/on-add-contexts', 'POST'] as const
}

export function getPostV05LinksLinkOnAddContextsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05LinksLinkOnAddContextsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>,
    ) {
      return parseResponse(client['v0.5'].links.link['on-add-contexts'].$post(args, options))
    },
  })
}

export function usePostV05LinksLinkOnAddContexts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['links']['link']['on-add-contexts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05LinksLinkOnAddContextsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05LinksLinkOnConfirmMutationKey() {
  return ['v0.5', '/v0.5/links/link/on-confirm', 'POST'] as const
}

export function getPostV05LinksLinkOnConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05LinksLinkOnConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>,
    ) {
      return parseResponse(client['v0.5'].links.link['on-confirm'].$post(args, options))
    },
  })
}

export function usePostV05LinksLinkOnConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05LinksLinkOnConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05LinksLinkOnInitMutationKey() {
  return ['v0.5', '/v0.5/links/link/on-init', 'POST'] as const
}

export function getPostV05LinksLinkOnInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05LinksLinkOnInitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>,
    ) {
      return parseResponse(client['v0.5'].links.link['on-init'].$post(args, options))
    },
  })
}

export function usePostV05LinksLinkOnInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05LinksLinkOnInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05PatientsFindMutationKey() {
  return ['v0.5', '/v0.5/patients/find', 'POST'] as const
}

export function getPostV05PatientsFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['find']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05PatientsFindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']>) {
      return parseResponse(client['v0.5'].patients.find.$post(args, options))
    },
  })
}

export function usePostV05PatientsFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['patients']['find']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05PatientsFindMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05PatientsOnFindMutationKey() {
  return ['v0.5', '/v0.5/patients/on-find', 'POST'] as const
}

export function getPostV05PatientsOnFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['on-find']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['patients']['on-find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05PatientsOnFindMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['patients']['on-find']['$post']>,
    ) {
      return parseResponse(client['v0.5'].patients['on-find'].$post(args, options))
    },
  })
}

export function usePostV05PatientsOnFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['patients']['on-find']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['patients']['on-find']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05PatientsOnFindMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05PatientsProfileOnShareMutationKey() {
  return ['v0.5', '/v0.5/patients/profile/on-share', 'POST'] as const
}

export function getPostV05PatientsProfileOnShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05PatientsProfileOnShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>,
    ) {
      return parseResponse(client['v0.5'].patients.profile['on-share'].$post(args, options))
    },
  })
}

export function usePostV05PatientsProfileOnShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05PatientsProfileOnShareMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05PatientsProfileShareMutationKey() {
  return ['v0.5', '/v0.5/patients/profile/share', 'POST'] as const
}

export function getPostV05PatientsProfileShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05PatientsProfileShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>,
    ) {
      return parseResponse(client['v0.5'].patients.profile.share.$post(args, options))
    },
  })
}

export function usePostV05PatientsProfileShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['patients']['profile']['share']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05PatientsProfileShareMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05PatientsSmsNotifyMutationKey() {
  return ['v0.5', '/v0.5/patients/sms/notify', 'POST'] as const
}

export function getPostV05PatientsSmsNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05PatientsSmsNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].patients.sms.notify.$post(args, options))
    },
  })
}

export function usePostV05PatientsSmsNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['patients']['sms']['notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05PatientsSmsNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05PatientsSmsOnNotifyMutationKey() {
  return ['v0.5', '/v0.5/patients/sms/on-notify', 'POST'] as const
}

export function getPostV05PatientsSmsOnNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05PatientsSmsOnNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].patients.sms['on-notify'].$post(args, options))
    },
  })
}

export function usePostV05PatientsSmsOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['patients']['sms']['on-notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05PatientsSmsOnNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05SessionsMutationKey() {
  return ['v0.5', '/v0.5/sessions', 'POST'] as const
}

export function getPostV05SessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['sessions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SessionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['v0.5']['sessions']['$post']>) {
      return parseResponse(client['v0.5'].sessions.$post(args, options))
    },
  })
}

export function usePostV05Sessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['sessions']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['sessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05SessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV05SubscriptionRequestsCmInitMutationKey() {
  return ['v0.5', '/v0.5/subscription-requests/cm/init', 'POST'] as const
}

export function getPostV05SubscriptionRequestsCmInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SubscriptionRequestsCmInitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']
      >,
    ) {
      return parseResponse(client['v0.5']['subscription-requests'].cm.init.$post(args, options))
    },
  })
}

export function usePostV05SubscriptionRequestsCmInit<
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
                ReturnType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05SubscriptionRequestsCmInitMutationOptions<
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

export function getPostV05SubscriptionRequestsCmOnInitMutationKey() {
  return ['v0.5', '/v0.5/subscription-requests/cm/on-init', 'POST'] as const
}

export function getPostV05SubscriptionRequestsCmOnInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SubscriptionRequestsCmOnInitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']
      >,
    ) {
      return parseResponse(
        client['v0.5']['subscription-requests'].cm['on-init'].$post(args, options),
      )
    },
  })
}

export function usePostV05SubscriptionRequestsCmOnInit<
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
                  (typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['v0.5']['subscription-requests']['cm']['on-init']['$post']
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
  const mutationDefaults = getPostV05SubscriptionRequestsCmOnInitMutationOptions<
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

export function getPostV05SubscriptionRequestsHiuNotifyMutationKey() {
  return ['v0.5', '/v0.5/subscription-requests/hiu/notify', 'POST'] as const
}

export function getPostV05SubscriptionRequestsHiuNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SubscriptionRequestsHiuNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']
      >,
    ) {
      return parseResponse(client['v0.5']['subscription-requests'].hiu.notify.$post(args, options))
    },
  })
}

export function usePostV05SubscriptionRequestsHiuNotify<
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
                  (typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']
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
  const mutationDefaults = getPostV05SubscriptionRequestsHiuNotifyMutationOptions<
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

export function getPostV05SubscriptionRequestsHiuOnNotifyMutationKey() {
  return ['v0.5', '/v0.5/subscription-requests/hiu/on-notify', 'POST'] as const
}

export function getPostV05SubscriptionRequestsHiuOnNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SubscriptionRequestsHiuOnNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']
      >,
    ) {
      return parseResponse(
        client['v0.5']['subscription-requests'].hiu['on-notify'].$post(args, options),
      )
    },
  })
}

export function usePostV05SubscriptionRequestsHiuOnNotify<
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
                  (typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']
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
  const mutationDefaults = getPostV05SubscriptionRequestsHiuOnNotifyMutationOptions<
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

export function getPostV05SubscriptionsHiuNotifyMutationKey() {
  return ['v0.5', '/v0.5/subscriptions/hiu/notify', 'POST'] as const
}

export function getPostV05SubscriptionsHiuNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SubscriptionsHiuNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].subscriptions.hiu.notify.$post(args, options))
    },
  })
}

export function usePostV05SubscriptionsHiuNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05SubscriptionsHiuNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05SubscriptionsHiuOnNotifyMutationKey() {
  return ['v0.5', '/v0.5/subscriptions/hiu/on-notify', 'POST'] as const
}

export function getPostV05SubscriptionsHiuOnNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05SubscriptionsHiuOnNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].subscriptions.hiu['on-notify'].$post(args, options))
    },
  })
}

export function usePostV05SubscriptionsHiuOnNotify<
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
                ReturnType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05SubscriptionsHiuOnNotifyMutationOptions<
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

export function getPostV05UsersAuthConfirmMutationKey() {
  return ['v0.5', '/v0.5/users/auth/confirm', 'POST'] as const
}

export function getPostV05UsersAuthConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth.confirm.$post(args, options))
    },
  })
}

export function usePostV05UsersAuthConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthFetchModesMutationKey() {
  return ['v0.5', '/v0.5/users/auth/fetch-modes', 'POST'] as const
}

export function getPostV05UsersAuthFetchModesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthFetchModesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth['fetch-modes'].$post(args, options))
    },
  })
}

export function usePostV05UsersAuthFetchModes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthFetchModesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthInitMutationKey() {
  return ['v0.5', '/v0.5/users/auth/init', 'POST'] as const
}

export function getPostV05UsersAuthInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['init']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthInitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['init']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth.init.$post(args, options))
    },
  })
}

export function usePostV05UsersAuthInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['init']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthNotifyMutationKey() {
  return ['v0.5', '/v0.5/users/auth/notify', 'POST'] as const
}

export function getPostV05UsersAuthNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth.notify.$post(args, options))
    },
  })
}

export function usePostV05UsersAuthNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthOnConfirmMutationKey() {
  return ['v0.5', '/v0.5/users/auth/on-confirm', 'POST'] as const
}

export function getPostV05UsersAuthOnConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthOnConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth['on-confirm'].$post(args, options))
    },
  })
}

export function usePostV05UsersAuthOnConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthOnConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthOnFetchModesMutationKey() {
  return ['v0.5', '/v0.5/users/auth/on-fetch-modes', 'POST'] as const
}

export function getPostV05UsersAuthOnFetchModesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthOnFetchModesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth['on-fetch-modes'].$post(args, options))
    },
  })
}

export function usePostV05UsersAuthOnFetchModes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthOnFetchModesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthOnInitMutationKey() {
  return ['v0.5', '/v0.5/users/auth/on-init', 'POST'] as const
}

export function getPostV05UsersAuthOnInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthOnInitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth['on-init'].$post(args, options))
    },
  })
}

export function usePostV05UsersAuthOnInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthOnInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV05UsersAuthOnNotifyMutationKey() {
  return ['v0.5', '/v0.5/users/auth/on-notify', 'POST'] as const
}

export function getPostV05UsersAuthOnNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05UsersAuthOnNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>,
    ) {
      return parseResponse(client['v0.5'].users.auth['on-notify'].$post(args, options))
    },
  })
}

export function usePostV05UsersAuthOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05UsersAuthOnNotifyMutationOptions<TError, TOnMutateResult>(
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
