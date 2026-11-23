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

export function getV0_5Key() {
  return ['v0.5'] as const
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

export function getPostV05HealthInformationOnRequestMutationKey() {
  return ['v0.5', '/v0.5/health-information/on-request', 'POST'] as const
}

export function getPostV05HealthInformationOnRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['health-information']['on-request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['health-information']['on-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationOnRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['health-information']['on-request']['$post']>,
    ) {
      return parseResponse(client['v0.5']['health-information']['on-request'].$post(args, options))
    },
  })
}

export function usePostV05HealthInformationOnRequest<
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
                ReturnType<(typeof client)['v0.5']['health-information']['on-request']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['health-information']['on-request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05HealthInformationOnRequestMutationOptions<
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

export function getPostV05HealthInformationRequestMutationKey() {
  return ['v0.5', '/v0.5/health-information/request', 'POST'] as const
}

export function getPostV05HealthInformationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['health-information']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['health-information']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['health-information']['request']['$post']>,
    ) {
      return parseResponse(client['v0.5']['health-information'].request.$post(args, options))
    },
  })
}

export function usePostV05HealthInformationRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v0.5']['health-information']['request']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['health-information']['request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV05HealthInformationRequestMutationOptions<
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
