import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createV05WellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v0.5']['.well-known']['openid-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV05WellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV05CareContextsDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05CareContextsDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05CareContextsOnDiscover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05CareContextsOnDiscoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createV05Certs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['certs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV05CertsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV05ConsentsHipNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05ConsentsHipNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05ConsentsHipOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05ConsentsHipOnNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05HealthInformationHipOnRequest<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05HealthInformationHipOnRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05HealthInformationHipRequest<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05HealthInformationHipRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05HealthInformationNotify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05HealthInformationNotifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV05HealthInformationTransferMutationKey() {
  return ['v0.5', '/v0.5/health-information/transfer', 'POST'] as const
}

export function getPostV05HealthInformationTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v0.5']['health-information']['transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v0.5']['health-information']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV05HealthInformationTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v0.5']['health-information']['transfer']['$post']>,
    ) {
      return parseResponse(client['v0.5']['health-information'].transfer.$post(args, options))
    },
  })
}

export function createPostV05HealthInformationTransfer<
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
                ReturnType<(typeof client)['v0.5']['health-information']['transfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v0.5']['health-information']['transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05HealthInformationTransferMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createV05Heartbeat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v0.5']['heartbeat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV05HeartbeatQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV05LinksLinkAddContexts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05LinksLinkAddContextsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05LinksLinkConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05LinksLinkConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05LinksLinkInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05LinksLinkInitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05LinksLinkOnAddContexts<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05LinksLinkOnAddContextsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05LinksLinkOnConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05LinksLinkOnConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05LinksLinkOnInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05LinksLinkOnInitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05PatientsProfileOnShare<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05PatientsProfileOnShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05PatientsProfileShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05PatientsProfileShareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05PatientsSmsNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05PatientsSmsNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05PatientsSmsOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05PatientsSmsOnNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05Sessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05SessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthFetchModes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthFetchModesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthInitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthOnConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthOnConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthOnFetchModes<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthOnFetchModesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthOnInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthOnInitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV05UsersAuthOnNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV05UsersAuthOnNotifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
