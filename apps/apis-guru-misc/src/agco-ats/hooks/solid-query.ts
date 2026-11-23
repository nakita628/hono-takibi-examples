import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2AftermarketServicesCertificatesQueryKey() {
  return ['api', '/api/v2/AftermarketServices/Certificates'] as const
}

export function getApiV2AftermarketServicesCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesCertificatesQueryKey>
  >({
    queryKey: getApiV2AftermarketServicesCertificatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AftermarketServices.Certificates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AftermarketServicesCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AftermarketServicesCertificatesQueryKey>
        >
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
      ...getApiV2AftermarketServicesCertificatesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AftermarketServicesECUsSerialNumberMutationKey() {
  return ['api', '/api/v2/AftermarketServices/ECUs/:serialNumber', 'PUT'] as const
}

export function getPutApiV2AftermarketServicesECUsSerialNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AftermarketServicesECUsSerialNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.AftermarketServices.ECUs[':serialNumber'].$put(args, options),
      )
    },
  })
}

export function createPutApiV2AftermarketServicesECUsSerialNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AftermarketServicesECUsSerialNumberMutationOptions<
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

export function getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
) {
  return ['api', '/api/v2/AftermarketServices/Engines/:serialNumber/IQACodes', args] as const
}

export function getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey>
  >({
    queryKey: getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AftermarketServicesEnginesSerialNumberIQACodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey>
        >
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
      ...getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesMutationKey() {
  return ['api', '/api/v2/AftermarketServices/Engines/:serialNumber/IQACodes', 'PUT'] as const
}

export function getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$put(args, options),
      )
    },
  })
}

export function createPutApiV2AftermarketServicesEnginesSerialNumberIQACodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesMutationOptions<
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

export function getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
) {
  return ['api', '/api/v2/AftermarketServices/Engines/:serialNumber/ProductionData', args] as const
}

export function getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey>
  >({
    queryKey: getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AftermarketServices.Engines[':serialNumber'].ProductionData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AftermarketServicesEnginesSerialNumberProductionData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey>
        >
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
      ...getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV2AftermarketServicesHelloQueryKey() {
  return ['api', '/api/v2/AftermarketServices/Hello'] as const
}

export function getApiV2AftermarketServicesHelloQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesHelloQueryKey>
  >({
    queryKey: getApiV2AftermarketServicesHelloQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AftermarketServices.Hello.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AftermarketServicesHello<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AftermarketServicesHelloQueryKey>
        >
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
      ...getApiV2AftermarketServicesHelloQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2AftermarketServicesUserStatusesQueryKey(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
) {
  return ['api', '/api/v2/AftermarketServices/UserStatuses', args] as const
}

export function getApiV2AftermarketServicesUserStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesUserStatusesQueryKey>
  >({
    queryKey: getApiV2AftermarketServicesUserStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AftermarketServices.UserStatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AftermarketServicesUserStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AftermarketServicesUserStatusesQueryKey>
        >
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
      ...getApiV2AftermarketServicesUserStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AftermarketServicesUserStatusesMutationKey() {
  return ['api', '/api/v2/AftermarketServices/UserStatuses', 'PUT'] as const
}

export function getPutApiV2AftermarketServicesUserStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AftermarketServicesUserStatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>,
    ) {
      return parseResponse(client.api.v2.AftermarketServices.UserStatuses.$put(args, options))
    },
  })
}

export function createPutApiV2AftermarketServicesUserStatuses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AftermarketServicesUserStatusesMutationOptions<
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

export function getPutApiV2AuthenticatedUsersUserIDTokensMutationKey() {
  return ['api', '/api/v2/AuthenticatedUsers/:UserID/Tokens', 'PUT'] as const
}

export function getPutApiV2AuthenticatedUsersUserIDTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AuthenticatedUsersUserIDTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']
      >,
    ) {
      return parseResponse(client.api.v2.AuthenticatedUsers[':UserID'].Tokens.$put(args, options))
    },
  })
}

export function createPutApiV2AuthenticatedUsersUserIDTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AuthenticatedUsersUserIDTokensMutationOptions<
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

export function getPostApiV2AuthenticationMutationKey() {
  return ['api', '/api/v2/Authentication', 'POST'] as const
}

export function getPostApiV2AuthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.Authentication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthenticationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Authentication.$post>) {
      return parseResponse(client.api.v2.Authentication.$post(args, options))
    },
  })
}

export function createPostApiV2Authentication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Authentication.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthenticationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2AuthenticationIsAliveQueryKey() {
  return ['api', '/api/v2/Authentication/IsAlive'] as const
}

export function getApiV2AuthenticationIsAliveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthenticationIsAliveQueryKey>
  >({
    queryKey: getApiV2AuthenticationIsAliveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Authentication.IsAlive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthenticationIsAlive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthenticationIsAliveQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AuthenticationIsAliveQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2AuthenticationRequestPasswordResetMutationKey() {
  return ['api', '/api/v2/Authentication/RequestPasswordReset', 'POST'] as const
}

export function getPostApiV2AuthenticationRequestPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthenticationRequestPasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>,
    ) {
      return parseResponse(client.api.v2.Authentication.RequestPasswordReset.$post(args, options))
    },
  })
}

export function createPostApiV2AuthenticationRequestPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthenticationRequestPasswordResetMutationOptions<
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

export function getPostApiV2AuthenticationResetPaswordMutationKey() {
  return ['api', '/api/v2/Authentication/ResetPasword', 'POST'] as const
}

export function getPostApiV2AuthenticationResetPaswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.Authentication.ResetPasword.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.Authentication.ResetPasword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthenticationResetPaswordMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.Authentication.ResetPasword.$post>,
    ) {
      return parseResponse(client.api.v2.Authentication.ResetPasword.$post(args, options))
    },
  })
}

export function createPostApiV2AuthenticationResetPasword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.Authentication.ResetPasword.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.Authentication.ResetPasword.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthenticationResetPaswordMutationOptions<
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

export function getApiV2AuthorizationCategoriesQueryKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
) {
  return ['api', '/api/v2/AuthorizationCategories', args] as const
}

export function getApiV2AuthorizationCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCategoriesQueryKey>
  >({
    queryKey: getApiV2AuthorizationCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCategoriesQueryKey>
        >
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
      ...getApiV2AuthorizationCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2AuthorizationCategoriesMutationKey() {
  return ['api', '/api/v2/AuthorizationCategories', 'POST'] as const
}

export function getPostApiV2AuthorizationCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.AuthorizationCategories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthorizationCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$post>) {
      return parseResponse(client.api.v2.AuthorizationCategories.$post(args, options))
    },
  })
}

export function createPostApiV2AuthorizationCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationCategories.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthorizationCategoriesMutationOptions<
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

export function getApiV2AuthorizationCategoriesUsersQueryKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
) {
  return ['api', '/api/v2/AuthorizationCategories/Users', args] as const
}

export function getApiV2AuthorizationCategoriesUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCategoriesUsersQueryKey>
  >({
    queryKey: getApiV2AuthorizationCategoriesUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCategories.Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCategoriesUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCategoriesUsersQueryKey>
        >
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
      ...getApiV2AuthorizationCategoriesUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AuthorizationCategoriesIdMutationKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id', 'PUT'] as const
}

export function getPutApiV2AuthorizationCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AuthorizationCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCategories[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2AuthorizationCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AuthorizationCategoriesIdMutationOptions<
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

export function getDeleteApiV2AuthorizationCategoriesIdMutationKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id', 'DELETE'] as const
}

export function getDeleteApiV2AuthorizationCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AuthorizationCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCategories[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2AuthorizationCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2AuthorizationCategoriesIdMutationOptions<
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

export function getPostApiV2AuthorizationCategoriesIdUsersUserIDMutationKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id/Users/:userID', 'POST'] as const
}

export function getPostApiV2AuthorizationCategoriesIdUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthorizationCategoriesIdUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.AuthorizationCategories[':id'].Users[':userID'].$post(args, options),
      )
    },
  })
}

export function createPostApiV2AuthorizationCategoriesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthorizationCategoriesIdUsersUserIDMutationOptions<
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

export function getDeleteApiV2AuthorizationCategoriesIdUsersUserIDMutationKey() {
  return ['api', '/api/v2/AuthorizationCategories/:id/Users/:userID', 'DELETE'] as const
}

export function getDeleteApiV2AuthorizationCategoriesIdUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AuthorizationCategoriesIdUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.AuthorizationCategories[':id'].Users[':userID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2AuthorizationCategoriesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2AuthorizationCategoriesIdUsersUserIDMutationOptions<
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

export function getApiV2AuthorizationCodeDefinitionsQueryKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
) {
  return ['api', '/api/v2/AuthorizationCodeDefinitions', args] as const
}

export function getApiV2AuthorizationCodeDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodeDefinitionsQueryKey>
  >({
    queryKey: getApiV2AuthorizationCodeDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCodeDefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCodeDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCodeDefinitionsQueryKey>
        >
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
      ...getApiV2AuthorizationCodeDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2AuthorizationCodeDefinitionsMutationKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions', 'POST'] as const
}

export function getPostApiV2AuthorizationCodeDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthorizationCodeDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCodeDefinitions.$post(args, options))
    },
  })
}

export function createPostApiV2AuthorizationCodeDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthorizationCodeDefinitionsMutationOptions<
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

export function getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:ID/Categories/:categoryID', 'POST'] as const
}

export function getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.AuthorizationCodeDefinitions[':ID'].Categories[':categoryID'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationOptions<
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

export function getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationKey() {
  return [
    'api',
    '/api/v2/AuthorizationCodeDefinitions/:ID/Categories/:categoryID',
    'DELETE',
  ] as const
}

export function getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.AuthorizationCodeDefinitions[':ID'].Categories[':categoryID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationOptions<
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

export function getApiV2AuthorizationCodeDefinitionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
) {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', args] as const
}

export function getApiV2AuthorizationCodeDefinitionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodeDefinitionsIdQueryKey>
  >({
    queryKey: getApiV2AuthorizationCodeDefinitionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCodeDefinitions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCodeDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCodeDefinitionsIdQueryKey>
        >
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
      ...getApiV2AuthorizationCodeDefinitionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AuthorizationCodeDefinitionsIdMutationKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', 'PUT'] as const
}

export function getPutApiV2AuthorizationCodeDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AuthorizationCodeDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2AuthorizationCodeDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AuthorizationCodeDefinitionsIdMutationOptions<
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

export function getDeleteApiV2AuthorizationCodeDefinitionsIdMutationKey() {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', 'DELETE'] as const
}

export function getDeleteApiV2AuthorizationCodeDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AuthorizationCodeDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2AuthorizationCodeDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2AuthorizationCodeDefinitionsIdMutationOptions<
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

export function getApiV2AuthorizationCodesQueryKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
) {
  return ['api', '/api/v2/AuthorizationCodes', args] as const
}

export function getApiV2AuthorizationCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesQueryKey>
  >({
    queryKey: getApiV2AuthorizationCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCodesQueryKey>
        >
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
      ...getApiV2AuthorizationCodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2AuthorizationCodesMutationKey() {
  return ['api', '/api/v2/AuthorizationCodes', 'POST'] as const
}

export function getPostApiV2AuthorizationCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.AuthorizationCodes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthorizationCodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$post>) {
      return parseResponse(client.api.v2.AuthorizationCodes.$post(args, options))
    },
  })
}

export function createPostApiV2AuthorizationCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationCodes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthorizationCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2AuthorizationCodesIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id', args] as const
}

export function getApiV2AuthorizationCodesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesIdQueryKey>
  >({
    queryKey: getApiV2AuthorizationCodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCodes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCodesIdQueryKey>
        >
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
      ...getApiV2AuthorizationCodesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AuthorizationCodesIdMutationKey() {
  return ['api', '/api/v2/AuthorizationCodes/:id', 'PUT'] as const
}

export function getPutApiV2AuthorizationCodesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AuthorizationCodesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCodes[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2AuthorizationCodesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AuthorizationCodesIdMutationOptions<
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

export function getDeleteApiV2AuthorizationCodesIdMutationKey() {
  return ['api', '/api/v2/AuthorizationCodes/:id', 'DELETE'] as const
}

export function getDeleteApiV2AuthorizationCodesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AuthorizationCodesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v2.AuthorizationCodes[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2AuthorizationCodesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2AuthorizationCodesIdMutationOptions<
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

export function getApiV2AuthorizationCodesIdContactInformationQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id/ContactInformation', args] as const
}

export function getApiV2AuthorizationCodesIdContactInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesIdContactInformationQueryKey>
  >({
    queryKey: getApiV2AuthorizationCodesIdContactInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCodes[':id'].ContactInformation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCodesIdContactInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCodesIdContactInformationQueryKey>
        >
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
      ...getApiV2AuthorizationCodesIdContactInformationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV2AuthorizationCodesIdValidateQueryKey(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id/Validate', args] as const
}

export function getApiV2AuthorizationCodesIdValidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesIdValidateQueryKey>
  >({
    queryKey: getApiV2AuthorizationCodesIdValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationCodes[':id'].Validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationCodesIdValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationCodesIdValidateQueryKey>
        >
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
      ...getApiV2AuthorizationCodesIdValidateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2AuthorizationContactInformationQueryKey(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
) {
  return ['api', '/api/v2/AuthorizationContactInformation', args] as const
}

export function getApiV2AuthorizationContactInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationContactInformationQueryKey>
  >({
    queryKey: getApiV2AuthorizationContactInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.AuthorizationContactInformation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AuthorizationContactInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AuthorizationContactInformationQueryKey>
        >
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
      ...getApiV2AuthorizationContactInformationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2AuthorizationContactInformationMutationKey() {
  return ['api', '/api/v2/AuthorizationContactInformation', 'POST'] as const
}

export function getPostApiV2AuthorizationContactInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AuthorizationContactInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post>,
    ) {
      return parseResponse(client.api.v2.AuthorizationContactInformation.$post(args, options))
    },
  })
}

export function createPostApiV2AuthorizationContactInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AuthorizationContactInformationMutationOptions<
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

export function getApiV2BrandsQueryKey() {
  return ['api', '/api/v2/Brands'] as const
}

export function getApiV2BrandsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BrandsQueryKey>
  >({
    queryKey: getApiV2BrandsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Brands.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Brands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BrandsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BrandsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BundlesQueryKey(args: InferRequestType<typeof client.api.v2.Bundles.$get>) {
  return ['api', '/api/v2/Bundles', args] as const
}

export function getApiV2BundlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Bundles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BundlesQueryKey>
  >({
    queryKey: getApiV2BundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Bundles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Bundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Bundles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BundlesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BundlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2BundlesMutationKey() {
  return ['api', '/api/v2/Bundles', 'POST'] as const
}

export function getPostApiV2BundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Bundles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2BundlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Bundles.$post>) {
      return parseResponse(client.api.v2.Bundles.$post(args, options))
    },
  })
}

export function createPostApiV2Bundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Bundles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2BundlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2BundlesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Bundles/:ID', args] as const
}

export function getApiV2BundlesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BundlesIDQueryKey>
  >({
    queryKey: getApiV2BundlesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Bundles[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2BundlesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BundlesIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BundlesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2BundlesIDMutationKey() {
  return ['api', '/api/v2/Bundles/:ID', 'PUT'] as const
}

export function getPutApiV2BundlesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2BundlesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$put']>) {
      return parseResponse(client.api.v2.Bundles[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2BundlesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2BundlesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2BundlesIDMutationKey() {
  return ['api', '/api/v2/Bundles/:ID', 'DELETE'] as const
}

export function getDeleteApiV2BundlesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2BundlesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$delete']>) {
      return parseResponse(client.api.v2.Bundles[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2BundlesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2BundlesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ClientsQueryKey(args: InferRequestType<typeof client.api.v2.Clients.$get>) {
  return ['api', '/api/v2/Clients', args] as const
}

export function getApiV2ClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsQueryKey>
  >({
    queryKey: getApiV2ClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Clients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Clients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ClientsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2ClientsClientIDCachedFilesQueryKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ClientID/CachedFiles', args] as const
}

export function getApiV2ClientsClientIDCachedFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsClientIDCachedFilesQueryKey>
  >({
    queryKey: getApiV2ClientsClientIDCachedFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Clients[':ClientID'].CachedFiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ClientsClientIDCachedFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ClientsClientIDCachedFilesQueryKey>
        >
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
      ...getApiV2ClientsClientIDCachedFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ClientsClientIDPackageReportsQueryKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports', args] as const
}

export function getApiV2ClientsClientIDPackageReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsClientIDPackageReportsQueryKey>
  >({
    queryKey: getApiV2ClientsClientIDPackageReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Clients[':ClientID'].PackageReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ClientsClientIDPackageReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ClientsClientIDPackageReportsQueryKey>
        >
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
      ...getApiV2ClientsClientIDPackageReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ClientsClientIDPackageReportsMutationKey() {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports', 'PUT'] as const
}

export function getPutApiV2ClientsClientIDPackageReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ClientsClientIDPackageReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>,
    ) {
      return parseResponse(client.api.v2.Clients[':ClientID'].PackageReports.$put(args, options))
    },
  })
}

export function createPutApiV2ClientsClientIDPackageReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ClientsClientIDPackageReportsMutationOptions<
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

export function getPutApiV2ClientsClientIDPackageReportsBatchMutationKey() {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports/Batch', 'PUT'] as const
}

export function getPutApiV2ClientsClientIDPackageReportsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ClientsClientIDPackageReportsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.Clients[':ClientID'].PackageReports.Batch.$put(args, options),
      )
    },
  })
}

export function createPutApiV2ClientsClientIDPackageReportsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ClientsClientIDPackageReportsBatchMutationOptions<
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

export function getApiV2ClientsIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ID', args] as const
}

export function getApiV2ClientsIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsIDQueryKey>
  >({
    queryKey: getApiV2ClientsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Clients[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2ClientsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ClientsIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ClientsIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2ClientsIDMutationKey() {
  return ['api', '/api/v2/Clients/:ID', 'PUT'] as const
}

export function getPutApiV2ClientsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Clients)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ClientsIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$put']>) {
      return parseResponse(client.api.v2.Clients[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2ClientsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Clients)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ClientsIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
) {
  return ['api', '/api/v2/Clients/:ID/AvailableUpdateGroupSubscriptions', args] as const
}

export function getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey>
  >({
    queryKey: getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Clients[':ID'].AvailableUpdateGroupSubscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ClientsIDAvailableUpdateGroupSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey>
        >
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
      ...getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>,
) {
  return ['api', '/api/v2/Clients/:ID/UpdateGroupSubscriptions', args] as const
}

export function getApiV2ClientsIDUpdateGroupSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey>
  >({
    queryKey: getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Clients[':ID'].UpdateGroupSubscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ClientsIDUpdateGroupSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey>
        >
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
      ...getApiV2ClientsIDUpdateGroupSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ContentDefinitionAttributesBatchMutationKey() {
  return ['api', '/api/v2/ContentDefinitionAttributes/Batch', 'PUT'] as const
}

export function getPutApiV2ContentDefinitionAttributesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentDefinitionAttributesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>,
    ) {
      return parseResponse(client.api.v2.ContentDefinitionAttributes.Batch.$put(args, options))
    },
  })
}

export function createPutApiV2ContentDefinitionAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ContentDefinitionAttributesBatchMutationOptions<
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

export function getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationKey() {
  return [
    'api',
    '/api/v2/ContentDefinitionAttributes/:contentDefinitionAttributeID',
    'PUT',
  ] as const
}

export function getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentDefinitionAttributes[':contentDefinitionAttributeID'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV2ContentDefinitionAttributesContentDefinitionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationOptions<
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

export function getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationKey() {
  return [
    'api',
    '/api/v2/ContentDefinitionAttributes/:contentDefinitionAttributeID',
    'DELETE',
  ] as const
}

export function getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentDefinitionAttributes[':contentDefinitionAttributeID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationOptions<
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

export function getApiV2ContentDefinitionsQueryKey(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
) {
  return ['api', '/api/v2/ContentDefinitions', args] as const
}

export function getApiV2ContentDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentDefinitionsQueryKey>
  >({
    queryKey: getApiV2ContentDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentDefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentDefinitionsQueryKey>
        >
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
      ...getApiV2ContentDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ContentDefinitionsMutationKey() {
  return ['api', '/api/v2/ContentDefinitions', 'POST'] as const
}

export function getPostApiV2ContentDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.ContentDefinitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentDefinitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.ContentDefinitions.$post>) {
      return parseResponse(client.api.v2.ContentDefinitions.$post(args, options))
    },
  })
}

export function createPostApiV2ContentDefinitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.ContentDefinitions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ContentDefinitionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ContentDefinitionsContentDefinitionIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>,
) {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', args] as const
}

export function getApiV2ContentDefinitionsContentDefinitionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDQueryKey>
  >({
    queryKey: getApiV2ContentDefinitionsContentDefinitionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentDefinitionsContentDefinitionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDQueryKey>
        >
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
      ...getApiV2ContentDefinitionsContentDefinitionIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ContentDefinitionsContentDefinitionIDMutationKey() {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', 'PUT'] as const
}

export function getPutApiV2ContentDefinitionsContentDefinitionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentDefinitionsContentDefinitionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].$put(args, options),
      )
    },
  })
}

export function createPutApiV2ContentDefinitionsContentDefinitionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ContentDefinitionsContentDefinitionIDMutationOptions<
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

export function getDeleteApiV2ContentDefinitionsContentDefinitionIDMutationKey() {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', 'DELETE'] as const
}

export function getDeleteApiV2ContentDefinitionsContentDefinitionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ContentDefinitionsContentDefinitionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2ContentDefinitionsContentDefinitionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2ContentDefinitionsContentDefinitionIDMutationOptions<
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

export function getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
) {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes', args] as const
}

export function getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey>
  >({
    queryKey: getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentDefinitionsContentDefinitionIDAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey>
        >
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
      ...getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ContentDefinitionsContentDefinitionIDAttributesMutationKey() {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes', 'POST'] as const
}

export function getPostApiV2ContentDefinitionsContentDefinitionIDAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentDefinitionsContentDefinitionIDAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$post(args, options),
      )
    },
  })
}

export function createPostApiV2ContentDefinitionsContentDefinitionIDAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV2ContentDefinitionsContentDefinitionIDAttributesMutationOptions<
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

export function getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchMutationKey() {
  return [
    'api',
    '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes/Batch',
    'POST',
  ] as const
}

export function getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.Batch.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchMutationOptions<
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

export function getApiV2ContentReleasesQueryKey(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$get>,
) {
  return ['api', '/api/v2/ContentReleases', args] as const
}

export function getApiV2ContentReleasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentReleasesQueryKey>
  >({
    queryKey: getApiV2ContentReleasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentReleases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentReleases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.ContentReleases.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentReleasesQueryKey>
        >
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
      ...getApiV2ContentReleasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ContentReleasesMutationKey() {
  return ['api', '/api/v2/ContentReleases', 'POST'] as const
}

export function getPostApiV2ContentReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.ContentReleases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentReleasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.ContentReleases.$post>) {
      return parseResponse(client.api.v2.ContentReleases.$post(args, options))
    },
  })
}

export function createPostApiV2ContentReleases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.ContentReleases.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ContentReleasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ContentReleasesContentReleaseIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
) {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', args] as const
}

export function getApiV2ContentReleasesContentReleaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentReleasesContentReleaseIdQueryKey>
  >({
    queryKey: getApiV2ContentReleasesContentReleaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentReleases[':ContentReleaseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentReleasesContentReleaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentReleasesContentReleaseIdQueryKey>
        >
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
      ...getApiV2ContentReleasesContentReleaseIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ContentReleasesContentReleaseIdMutationKey() {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', 'PUT'] as const
}

export function getPutApiV2ContentReleasesContentReleaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentReleasesContentReleaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>,
    ) {
      return parseResponse(client.api.v2.ContentReleases[':ContentReleaseId'].$put(args, options))
    },
  })
}

export function createPutApiV2ContentReleasesContentReleaseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ContentReleasesContentReleaseIdMutationOptions<
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

export function getDeleteApiV2ContentReleasesContentReleaseIdMutationKey() {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', 'DELETE'] as const
}

export function getDeleteApiV2ContentReleasesContentReleaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ContentReleasesContentReleaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentReleases[':ContentReleaseId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2ContentReleasesContentReleaseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2ContentReleasesContentReleaseIdMutationOptions<
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

export function getPutApiV2ContentSubmissionAttributesBatchMutationKey() {
  return ['api', '/api/v2/ContentSubmissionAttributes/Batch', 'PUT'] as const
}

export function getPutApiV2ContentSubmissionAttributesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentSubmissionAttributesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>,
    ) {
      return parseResponse(client.api.v2.ContentSubmissionAttributes.Batch.$put(args, options))
    },
  })
}

export function createPutApiV2ContentSubmissionAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ContentSubmissionAttributesBatchMutationOptions<
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

export function getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationKey() {
  return [
    'api',
    '/api/v2/ContentSubmissionAttributes/:contentSubmissionAttributeID',
    'PUT',
  ] as const
}

export function getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentSubmissionAttributes[':contentSubmissionAttributeID'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV2ContentSubmissionAttributesContentSubmissionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationOptions<
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

export function getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationKey() {
  return [
    'api',
    '/api/v2/ContentSubmissionAttributes/:contentSubmissionAttributeID',
    'DELETE',
  ] as const
}

export function getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentSubmissionAttributes[':contentSubmissionAttributeID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationOptions<
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

export function getApiV2ContentSubmissionTypesQueryKey(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
) {
  return ['api', '/api/v2/ContentSubmissionTypes', args] as const
}

export function getApiV2ContentSubmissionTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionTypesQueryKey>
  >({
    queryKey: getApiV2ContentSubmissionTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentSubmissionTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentSubmissionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentSubmissionTypesQueryKey>
        >
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
      ...getApiV2ContentSubmissionTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ContentSubmissionTypesMutationKey() {
  return ['api', '/api/v2/ContentSubmissionTypes', 'POST'] as const
}

export function getPostApiV2ContentSubmissionTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentSubmissionTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post>) {
      return parseResponse(client.api.v2.ContentSubmissionTypes.$post(args, options))
    },
  })
}

export function createPostApiV2ContentSubmissionTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ContentSubmissionTypesMutationOptions<
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

export function getApiV2ContentSubmissionTypesIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
) {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', args] as const
}

export function getApiV2ContentSubmissionTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionTypesIdQueryKey>
  >({
    queryKey: getApiV2ContentSubmissionTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentSubmissionTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentSubmissionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentSubmissionTypesIdQueryKey>
        >
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
      ...getApiV2ContentSubmissionTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ContentSubmissionTypesIdMutationKey() {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', 'PUT'] as const
}

export function getPutApiV2ContentSubmissionTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentSubmissionTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2ContentSubmissionTypesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ContentSubmissionTypesIdMutationOptions<
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

export function getDeleteApiV2ContentSubmissionTypesIdMutationKey() {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', 'DELETE'] as const
}

export function getDeleteApiV2ContentSubmissionTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ContentSubmissionTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2ContentSubmissionTypesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2ContentSubmissionTypesIdMutationOptions<
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

export function getApiV2ContentSubmissionsQueryKey(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
) {
  return ['api', '/api/v2/ContentSubmissions', args] as const
}

export function getApiV2ContentSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsQueryKey>
  >({
    queryKey: getApiV2ContentSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentSubmissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentSubmissionsQueryKey>
        >
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
      ...getApiV2ContentSubmissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ContentSubmissionsMutationKey() {
  return ['api', '/api/v2/ContentSubmissions', 'POST'] as const
}

export function getPostApiV2ContentSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.ContentSubmissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentSubmissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.ContentSubmissions.$post>) {
      return parseResponse(client.api.v2.ContentSubmissions.$post(args, options))
    },
  })
}

export function createPostApiV2ContentSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.ContentSubmissions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ContentSubmissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ContentSubmissionsContentSubmissionIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', args] as const
}

export function getApiV2ContentSubmissionsContentSubmissionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDQueryKey>
  >({
    queryKey: getApiV2ContentSubmissionsContentSubmissionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentSubmissionsContentSubmissionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDQueryKey>
        >
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
      ...getApiV2ContentSubmissionsContentSubmissionIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ContentSubmissionsContentSubmissionIDMutationKey() {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', 'PUT'] as const
}

export function getPutApiV2ContentSubmissionsContentSubmissionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ContentSubmissionsContentSubmissionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].$put(args, options),
      )
    },
  })
}

export function createPutApiV2ContentSubmissionsContentSubmissionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ContentSubmissionsContentSubmissionIDMutationOptions<
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

export function getDeleteApiV2ContentSubmissionsContentSubmissionIDMutationKey() {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', 'DELETE'] as const
}

export function getDeleteApiV2ContentSubmissionsContentSubmissionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ContentSubmissionsContentSubmissionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2ContentSubmissionsContentSubmissionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2ContentSubmissionsContentSubmissionIDMutationOptions<
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

export function getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes', args] as const
}

export function getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey>
  >({
    queryKey: getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentSubmissionsContentSubmissionIDAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey>
        >
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
      ...getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ContentSubmissionsContentSubmissionIDAttributesMutationKey() {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes', 'POST'] as const
}

export function getPostApiV2ContentSubmissionsContentSubmissionIDAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentSubmissionsContentSubmissionIDAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$post(args, options),
      )
    },
  })
}

export function createPostApiV2ContentSubmissionsContentSubmissionIDAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV2ContentSubmissionsContentSubmissionIDAttributesMutationOptions<
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

export function getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchMutationKey() {
  return [
    'api',
    '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes/Batch',
    'POST',
  ] as const
}

export function getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.Batch.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchMutationOptions<
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

export function getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Status', args] as const
}

export function getApiV2ContentSubmissionsContentSubmissionIDStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey>
  >({
    queryKey: getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContentSubmissionsContentSubmissionIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey>
        >
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
      ...getApiV2ContentSubmissionsContentSubmissionIDStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV2DealerByCountryQueryKey(
  args: InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
) {
  return ['api', '/api/v2/DealerByCountry', args] as const
}

export function getApiV2DealerByCountryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DealerByCountryQueryKey>
  >({
    queryKey: getApiV2DealerByCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.DealerByCountry.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2DealerByCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2DealerByCountryQueryKey>
        >
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
      ...getApiV2DealerByCountryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2DealersQueryKey(args: InferRequestType<typeof client.api.v2.Dealers.$get>) {
  return ['api', '/api/v2/Dealers', args] as const
}

export function getApiV2DealersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Dealers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DealersQueryKey>
  >({
    queryKey: getApiV2DealersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Dealers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Dealers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Dealers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2DealersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2DealersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2DealersDealerCodeQueryKey(
  args: InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
) {
  return ['api', '/api/v2/Dealers/:DealerCode', args] as const
}

export function getApiV2DealersDealerCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DealersDealerCodeQueryKey>
  >({
    queryKey: getApiV2DealersDealerCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Dealers[':DealerCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2DealersDealerCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2DealersDealerCodeQueryKey>
        >
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
      ...getApiV2DealersDealerCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2FilesQueryKey(args: InferRequestType<typeof client.api.v2.Files.$get>) {
  return ['api', '/api/v2/Files', args] as const
}

export function getApiV2FilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2FilesQueryKey>
  >({
    queryKey: getApiV2FilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Files<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Files.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2FilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2FilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2FilesMutationKey() {
  return ['api', '/api/v2/Files', 'POST'] as const
}

export function getPostApiV2FilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2FilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Files.$post>) {
      return parseResponse(client.api.v2.Files.$post(args, options))
    },
  })
}

export function createPostApiV2Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Files.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2FilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2FilesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Files/:ID', args] as const
}

export function getApiV2FilesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FilesIDQueryKey>
  >({
    queryKey: getApiV2FilesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Files[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2FilesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2FilesIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2FilesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2FilesIDMutationKey() {
  return ['api', '/api/v2/Files/:ID', 'PUT'] as const
}

export function getPutApiV2FilesIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Files)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2FilesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$put']>) {
      return parseResponse(client.api.v2.Files[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2FilesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Files)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2FilesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2FilesIDMutationKey() {
  return ['api', '/api/v2/Files/:ID', 'DELETE'] as const
}

export function getDeleteApiV2FilesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Files)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2FilesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$delete']>) {
      return parseResponse(client.api.v2.Files[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2FilesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Files)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2FilesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2FilesIDFileContentsQueryKey(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
) {
  return ['api', '/api/v2/Files/:ID/FileContents', args] as const
}

export function getApiV2FilesIDFileContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FilesIDFileContentsQueryKey>
  >({
    queryKey: getApiV2FilesIDFileContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Files[':ID'].FileContents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2FilesIDFileContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2FilesIDFileContentsQueryKey>
        >
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
      ...getApiV2FilesIDFileContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2FilesIDFileContentsMutationKey() {
  return ['api', '/api/v2/Files/:ID/FileContents', 'PUT'] as const
}

export function getPutApiV2FilesIDFileContentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2FilesIDFileContentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>,
    ) {
      return parseResponse(client.api.v2.Files[':ID'].FileContents.$put(args, options))
    },
  })
}

export function createPutApiV2FilesIDFileContents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2FilesIDFileContentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2GlobalImageCategoriesQueryKey(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
) {
  return ['api', '/api/v2/GlobalImageCategories', args] as const
}

export function getApiV2GlobalImageCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImageCategoriesQueryKey>
  >({
    queryKey: getApiV2GlobalImageCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.GlobalImageCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GlobalImageCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GlobalImageCategoriesQueryKey>
        >
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
      ...getApiV2GlobalImageCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2GlobalImageCategoriesMutationKey() {
  return ['api', '/api/v2/GlobalImageCategories', 'POST'] as const
}

export function getPostApiV2GlobalImageCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.GlobalImageCategories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2GlobalImageCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$post>) {
      return parseResponse(client.api.v2.GlobalImageCategories.$post(args, options))
    },
  })
}

export function createPostApiV2GlobalImageCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.GlobalImageCategories.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2GlobalImageCategoriesMutationOptions<
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

export function getApiV2GlobalImageCategoriesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
) {
  return ['api', '/api/v2/GlobalImageCategories/:ID', args] as const
}

export function getApiV2GlobalImageCategoriesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImageCategoriesIDQueryKey>
  >({
    queryKey: getApiV2GlobalImageCategoriesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.GlobalImageCategories[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GlobalImageCategoriesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GlobalImageCategoriesIDQueryKey>
        >
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
      ...getApiV2GlobalImageCategoriesIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2GlobalImagesQueryKey(
  args: InferRequestType<typeof client.api.v2.GlobalImages.$get>,
) {
  return ['api', '/api/v2/GlobalImages', args] as const
}

export function getApiV2GlobalImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.GlobalImages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImagesQueryKey>
  >({
    queryKey: getApiV2GlobalImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.GlobalImages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2GlobalImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.GlobalImages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GlobalImagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2GlobalImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2GlobalImagesMutationKey() {
  return ['api', '/api/v2/GlobalImages', 'POST'] as const
}

export function getPostApiV2GlobalImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.GlobalImages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2GlobalImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.GlobalImages.$post>) {
      return parseResponse(client.api.v2.GlobalImages.$post(args, options))
    },
  })
}

export function createPostApiV2GlobalImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.GlobalImages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2GlobalImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2GlobalImagesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
) {
  return ['api', '/api/v2/GlobalImages/:ID', args] as const
}

export function getApiV2GlobalImagesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImagesIDQueryKey>
  >({
    queryKey: getApiV2GlobalImagesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.GlobalImages[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GlobalImagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GlobalImagesIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2GlobalImagesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2GlobalImagesIDMutationKey() {
  return ['api', '/api/v2/GlobalImages/:ID', 'PUT'] as const
}

export function getPutApiV2GlobalImagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2GlobalImagesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>) {
      return parseResponse(client.api.v2.GlobalImages[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2GlobalImagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2GlobalImagesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2GlobalImagesIDMutationKey() {
  return ['api', '/api/v2/GlobalImages/:ID', 'DELETE'] as const
}

export function getDeleteApiV2GlobalImagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2GlobalImagesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.GlobalImages[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2GlobalImagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2GlobalImagesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2GlobalImagesIDImageContentsQueryKey(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
) {
  return ['api', '/api/v2/GlobalImages/:ID/ImageContents', args] as const
}

export function getApiV2GlobalImagesIDImageContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImagesIDImageContentsQueryKey>
  >({
    queryKey: getApiV2GlobalImagesIDImageContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.GlobalImages[':ID'].ImageContents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GlobalImagesIDImageContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GlobalImagesIDImageContentsQueryKey>
        >
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
      ...getApiV2GlobalImagesIDImageContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2GlobalImagesIDImageContentsMutationKey() {
  return ['api', '/api/v2/GlobalImages/:ID/ImageContents', 'PUT'] as const
}

export function getPutApiV2GlobalImagesIDImageContentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2GlobalImagesIDImageContentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>,
    ) {
      return parseResponse(client.api.v2.GlobalImages[':ID'].ImageContents.$put(args, options))
    },
  })
}

export function createPutApiV2GlobalImagesIDImageContents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2GlobalImagesIDImageContentsMutationOptions<
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

export function getApiV2LanguagesQueryKey(
  args: InferRequestType<typeof client.api.v2.Languages.$get>,
) {
  return ['api', '/api/v2/Languages', args] as const
}

export function getApiV2LanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguagesQueryKey>
  >({
    queryKey: getApiV2LanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Languages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LanguagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LanguagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2LanguagesMutationKey() {
  return ['api', '/api/v2/Languages', 'POST'] as const
}

export function getPostApiV2LanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Languages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2LanguagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Languages.$post>) {
      return parseResponse(client.api.v2.Languages.$post(args, options))
    },
  })
}

export function createPostApiV2Languages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Languages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2LanguagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2LanguagesLocaleIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
) {
  return ['api', '/api/v2/Languages/:LocaleID', args] as const
}

export function getApiV2LanguagesLocaleIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguagesLocaleIDQueryKey>
  >({
    queryKey: getApiV2LanguagesLocaleIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Languages[':LocaleID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2LanguagesLocaleID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LanguagesLocaleIDQueryKey>
        >
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
      ...getApiV2LanguagesLocaleIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2LanguagesLocaleIDMutationKey() {
  return ['api', '/api/v2/Languages/:LocaleID', 'PUT'] as const
}

export function getPutApiV2LanguagesLocaleIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2LanguagesLocaleIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>,
    ) {
      return parseResponse(client.api.v2.Languages[':LocaleID'].$put(args, options))
    },
  })
}

export function createPutApiV2LanguagesLocaleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2LanguagesLocaleIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2LanguagesLocaleIDMutationKey() {
  return ['api', '/api/v2/Languages/:LocaleID', 'DELETE'] as const
}

export function getDeleteApiV2LanguagesLocaleIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2LanguagesLocaleIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.Languages[':LocaleID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2LanguagesLocaleID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2LanguagesLocaleIDMutationOptions<
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

export function getPostApiV2LicenseActivationsMutationKey() {
  return ['api', '/api/v2/LicenseActivations', 'POST'] as const
}

export function getPostApiV2LicenseActivationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.LicenseActivations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.LicenseActivations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2LicenseActivationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.LicenseActivations.$post>) {
      return parseResponse(client.api.v2.LicenseActivations.$post(args, options))
    },
  })
}

export function createPostApiV2LicenseActivations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.LicenseActivations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.LicenseActivations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2LicenseActivationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV2LicenseActivationsRegisterEDTLiteMutationKey() {
  return ['api', '/api/v2/LicenseActivations/RegisterEDTLite', 'POST'] as const
}

export function getPostApiV2LicenseActivationsRegisterEDTLiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2LicenseActivationsRegisterEDTLiteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>,
    ) {
      return parseResponse(client.api.v2.LicenseActivations.RegisterEDTLite.$post(args, options))
    },
  })
}

export function createPostApiV2LicenseActivationsRegisterEDTLite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2LicenseActivationsRegisterEDTLiteMutationOptions<
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

export function getPutApiV2LicenseActivationsIDMutationKey() {
  return ['api', '/api/v2/LicenseActivations/:ID', 'PUT'] as const
}

export function getPutApiV2LicenseActivationsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2LicenseActivationsIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>,
    ) {
      return parseResponse(client.api.v2.LicenseActivations[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2LicenseActivationsID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2LicenseActivationsIDMutationOptions<
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

export function getPutApiV2LicenseActivationsIDConfirmMutationKey() {
  return ['api', '/api/v2/LicenseActivations/:ID/Confirm', 'PUT'] as const
}

export function getPutApiV2LicenseActivationsIDConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2LicenseActivationsIDConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>,
    ) {
      return parseResponse(client.api.v2.LicenseActivations[':ID'].Confirm.$put(args, options))
    },
  })
}

export function createPutApiV2LicenseActivationsIDConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2LicenseActivationsIDConfirmMutationOptions<
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

export function getApiV2LicensesQueryKey(
  args: InferRequestType<typeof client.api.v2.Licenses.$get>,
) {
  return ['api', '/api/v2/Licenses', args] as const
}

export function getApiV2LicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LicensesQueryKey>
  >({
    queryKey: getApiV2LicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Licenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Licenses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LicensesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2LicensesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Licenses/:ID', args] as const
}

export function getApiV2LicensesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LicensesIDQueryKey>
  >({
    queryKey: getApiV2LicensesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Licenses[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2LicensesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LicensesIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LicensesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2LogsQueryKey(args: InferRequestType<typeof client.api.v2.Logs.$get>) {
  return ['api', '/api/v2/Logs', args] as const
}

export function getApiV2LogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2LogsQueryKey>
  >({
    queryKey: getApiV2LogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2LogsMutationKey() {
  return ['api', '/api/v2/Logs', 'POST'] as const
}

export function getPostApiV2LogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v2.Logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2LogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Logs.$post>) {
      return parseResponse(client.api.v2.Logs.$post(args, options))
    },
  })
}

export function createPostApiV2Logs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Logs.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2LogsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2LogsIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Logs/:ID', args] as const
}

export function getApiV2LogsIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LogsIDQueryKey>
  >({
    queryKey: getApiV2LogsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Logs[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2LogsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LogsIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LogsIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2NotificationsMutationKey() {
  return ['api', '/api/v2/Notifications', 'POST'] as const
}

export function getPostApiV2NotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Notifications.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.Notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2NotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Notifications.$post>) {
      return parseResponse(client.api.v2.Notifications.$post(args, options))
    },
  })
}

export function createPostApiV2Notifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Notifications.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.Notifications.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2NotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PackageTypesQueryKey(
  args: InferRequestType<typeof client.api.v2.PackageTypes.$get>,
) {
  return ['api', '/api/v2/PackageTypes', args] as const
}

export function getApiV2PackageTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.PackageTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackageTypesQueryKey>
  >({
    queryKey: getApiV2PackageTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.PackageTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2PackageTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.PackageTypes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PackageTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PackageTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2PackageTypesMutationKey() {
  return ['api', '/api/v2/PackageTypes', 'POST'] as const
}

export function getPostApiV2PackageTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.PackageTypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PackageTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.PackageTypes.$post>) {
      return parseResponse(client.api.v2.PackageTypes.$post(args, options))
    },
  })
}

export function createPostApiV2PackageTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.PackageTypes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2PackageTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PackageTypesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
) {
  return ['api', '/api/v2/PackageTypes/:ID', args] as const
}

export function getApiV2PackageTypesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackageTypesIDQueryKey>
  >({
    queryKey: getApiV2PackageTypesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.PackageTypes[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PackageTypesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PackageTypesIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PackageTypesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2PackageTypesIDMutationKey() {
  return ['api', '/api/v2/PackageTypes/:ID', 'PUT'] as const
}

export function getPutApiV2PackageTypesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2PackageTypesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>) {
      return parseResponse(client.api.v2.PackageTypes[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2PackageTypesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2PackageTypesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2PackageTypesIDMutationKey() {
  return ['api', '/api/v2/PackageTypes/:ID', 'DELETE'] as const
}

export function getDeleteApiV2PackageTypesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PackageTypesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.PackageTypes[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2PackageTypesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2PackageTypesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV2PackageTypesIdUsersUserIDMutationKey() {
  return ['api', '/api/v2/PackageTypes/:id/Users/:userID', 'POST'] as const
}

export function getPostApiV2PackageTypesIdUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PackageTypesIdUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']
      >,
    ) {
      return parseResponse(client.api.v2.PackageTypes[':id'].Users[':userID'].$post(args, options))
    },
  })
}

export function createPostApiV2PackageTypesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2PackageTypesIdUsersUserIDMutationOptions<
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

export function getDeleteApiV2PackageTypesIdUsersUserIDMutationKey() {
  return ['api', '/api/v2/PackageTypes/:id/Users/:userID', 'DELETE'] as const
}

export function getDeleteApiV2PackageTypesIdUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PackageTypesIdUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.PackageTypes[':id'].Users[':userID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2PackageTypesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2PackageTypesIdUsersUserIDMutationOptions<
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

export function getApiV2PackageTypetoBundlesQueryKey(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
) {
  return ['api', '/api/v2/PackageTypetoBundles', args] as const
}

export function getApiV2PackageTypetoBundlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackageTypetoBundlesQueryKey>
  >({
    queryKey: getApiV2PackageTypetoBundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.PackageTypetoBundles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PackageTypetoBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PackageTypetoBundlesQueryKey>
        >
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
      ...getApiV2PackageTypetoBundlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2PackageTypetoBundlesMutationKey() {
  return ['api', '/api/v2/PackageTypetoBundles', 'PUT'] as const
}

export function getPutApiV2PackageTypetoBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.PackageTypetoBundles.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2PackageTypetoBundlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$put>) {
      return parseResponse(client.api.v2.PackageTypetoBundles.$put(args, options))
    },
  })
}

export function createPutApiV2PackageTypetoBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.PackageTypetoBundles.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2PackageTypetoBundlesMutationOptions<
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

export function getPostApiV2PackageTypetoBundlesMutationKey() {
  return ['api', '/api/v2/PackageTypetoBundles', 'POST'] as const
}

export function getPostApiV2PackageTypetoBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.PackageTypetoBundles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PackageTypetoBundlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$post>) {
      return parseResponse(client.api.v2.PackageTypetoBundles.$post(args, options))
    },
  })
}

export function createPostApiV2PackageTypetoBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.PackageTypetoBundles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2PackageTypetoBundlesMutationOptions<
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

export function getDeleteApiV2PackageTypetoBundlesMutationKey() {
  return ['api', '/api/v2/PackageTypetoBundles', 'DELETE'] as const
}

export function getDeleteApiV2PackageTypetoBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.PackageTypetoBundles.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PackageTypetoBundlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$delete>) {
      return parseResponse(client.api.v2.PackageTypetoBundles.$delete(args, options))
    },
  })
}

export function createDeleteApiV2PackageTypetoBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.PackageTypetoBundles.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2PackageTypetoBundlesMutationOptions<
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

export function getApiV2PackagesQueryKey(
  args: InferRequestType<typeof client.api.v2.Packages.$get>,
) {
  return ['api', '/api/v2/Packages', args] as const
}

export function getApiV2PackagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Packages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackagesQueryKey>
  >({
    queryKey: getApiV2PackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Packages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Packages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Packages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PackagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PackagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2PackagesMutationKey() {
  return ['api', '/api/v2/Packages', 'POST'] as const
}

export function getPostApiV2PackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Packages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PackagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Packages.$post>) {
      return parseResponse(client.api.v2.Packages.$post(args, options))
    },
  })
}

export function createPostApiV2Packages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Packages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2PackagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PackagesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
) {
  return ['api', '/api/v2/Packages/:ID', args] as const
}

export function getApiV2PackagesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackagesIDQueryKey>
  >({
    queryKey: getApiV2PackagesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Packages[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PackagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PackagesIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PackagesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2PackagesIDMutationKey() {
  return ['api', '/api/v2/Packages/:ID', 'PUT'] as const
}

export function getPutApiV2PackagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Packages)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2PackagesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$put']>) {
      return parseResponse(client.api.v2.Packages[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2PackagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Packages)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2PackagesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2PackagesIDMutationKey() {
  return ['api', '/api/v2/Packages/:ID', 'DELETE'] as const
}

export function getDeleteApiV2PackagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Packages)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PackagesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$delete']>) {
      return parseResponse(client.api.v2.Packages[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2PackagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Packages)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2PackagesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PermissionsQueryKey(
  args: InferRequestType<typeof client.api.v2.Permissions.$get>,
) {
  return ['api', '/api/v2/Permissions', args] as const
}

export function getApiV2PermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Permissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PermissionsQueryKey>
  >({
    queryKey: getApiV2PermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Permissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Permissions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PermissionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2PermissionsMutationKey() {
  return ['api', '/api/v2/Permissions', 'POST'] as const
}

export function getPostApiV2PermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Permissions.$post>) {
      return parseResponse(client.api.v2.Permissions.$post(args, options))
    },
  })
}

export function createPostApiV2Permissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Permissions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2PermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PermissionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
) {
  return ['api', '/api/v2/Permissions/:id', args] as const
}

export function getApiV2PermissionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PermissionsIdQueryKey>
  >({
    queryKey: getApiV2PermissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Permissions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PermissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PermissionsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PermissionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2PermissionsIdMutationKey() {
  return ['api', '/api/v2/Permissions/:id', 'PUT'] as const
}

export function getPutApiV2PermissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Permissions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2PermissionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$put']>) {
      return parseResponse(client.api.v2.Permissions[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2PermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Permissions)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2PermissionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2PermissionsIdMutationKey() {
  return ['api', '/api/v2/Permissions/:id', 'DELETE'] as const
}

export function getDeleteApiV2PermissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Permissions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PermissionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$delete']>) {
      return parseResponse(client.api.v2.Permissions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2PermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Permissions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2PermissionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PriorityPackagesQueryKey(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
) {
  return ['api', '/api/v2/PriorityPackages', args] as const
}

export function getApiV2PriorityPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PriorityPackagesQueryKey>
  >({
    queryKey: getApiV2PriorityPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.PriorityPackages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PriorityPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PriorityPackagesQueryKey>
        >
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
      ...getApiV2PriorityPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2PriorityPackagesMutationKey() {
  return ['api', '/api/v2/PriorityPackages', 'POST'] as const
}

export function getPostApiV2PriorityPackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.PriorityPackages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PriorityPackagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.PriorityPackages.$post>) {
      return parseResponse(client.api.v2.PriorityPackages.$post(args, options))
    },
  })
}

export function createPostApiV2PriorityPackages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.PriorityPackages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2PriorityPackagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2PriorityPackagesIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
) {
  return ['api', '/api/v2/PriorityPackages/:ID', args] as const
}

export function getApiV2PriorityPackagesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PriorityPackagesIDQueryKey>
  >({
    queryKey: getApiV2PriorityPackagesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.PriorityPackages[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PriorityPackagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PriorityPackagesIDQueryKey>
        >
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
      ...getApiV2PriorityPackagesIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV2PriorityPackagesIDMutationKey() {
  return ['api', '/api/v2/PriorityPackages/:ID', 'DELETE'] as const
}

export function getDeleteApiV2PriorityPackagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PriorityPackagesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.PriorityPackages[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2PriorityPackagesID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2PriorityPackagesIDMutationOptions<
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

export function getApiV2ReleasesQueryKey(
  args: InferRequestType<typeof client.api.v2.Releases.$get>,
) {
  return ['api', '/api/v2/Releases', args] as const
}

export function getApiV2ReleasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Releases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReleasesQueryKey>
  >({
    queryKey: getApiV2ReleasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Releases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Releases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Releases.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReleasesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ReleasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2ReleasesMutationKey() {
  return ['api', '/api/v2/Releases', 'POST'] as const
}

export function getPostApiV2ReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Releases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ReleasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Releases.$post>) {
      return parseResponse(client.api.v2.Releases.$post(args, options))
    },
  })
}

export function createPostApiV2Releases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Releases.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ReleasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ReleasesReleaseIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
) {
  return ['api', '/api/v2/Releases/:ReleaseId', args] as const
}

export function getApiV2ReleasesReleaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReleasesReleaseIdQueryKey>
  >({
    queryKey: getApiV2ReleasesReleaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Releases[':ReleaseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReleasesReleaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReleasesReleaseIdQueryKey>
        >
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
      ...getApiV2ReleasesReleaseIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2ReleasesReleaseIdBundleBundleIdMutationKey() {
  return ['api', '/api/v2/Releases/:ReleaseId/Bundle/:BundleId', 'POST'] as const
}

export function getPostApiV2ReleasesReleaseIdBundleBundleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ReleasesReleaseIdBundleBundleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.Releases[':ReleaseId'].Bundle[':BundleId'].$post(args, options),
      )
    },
  })
}

export function createPostApiV2ReleasesReleaseIdBundleBundleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ReleasesReleaseIdBundleBundleIdMutationOptions<
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

export function getDeleteApiV2ReleasesReleaseIdBundleBundleIdMutationKey() {
  return ['api', '/api/v2/Releases/:ReleaseId/Bundle/:BundleId', 'DELETE'] as const
}

export function getDeleteApiV2ReleasesReleaseIdBundleBundleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ReleasesReleaseIdBundleBundleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.Releases[':ReleaseId'].Bundle[':BundleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2ReleasesReleaseIdBundleBundleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2ReleasesReleaseIdBundleBundleIdMutationOptions<
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

export function getPutApiV2ReleasesReleaseId2MutationKey() {
  return ['api', '/api/v2/Releases/:releaseId', 'PUT'] as const
}

export function getPutApiV2ReleasesReleaseId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Releases)[':releaseId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Releases)[':releaseId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ReleasesReleaseId2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Releases)[':releaseId']['$put']>,
    ) {
      return parseResponse(client.api.v2.Releases[':releaseId'].$put(args, options))
    },
  })
}

export function createPutApiV2ReleasesReleaseId2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Releases)[':releaseId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Releases)[':releaseId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ReleasesReleaseId2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ReportingBundleStatusSummaryQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
) {
  return ['api', '/api/v2/Reporting/BundleStatusSummary', args] as const
}

export function getApiV2ReportingBundleStatusSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingBundleStatusSummaryQueryKey>
  >({
    queryKey: getApiV2ReportingBundleStatusSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.BundleStatusSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingBundleStatusSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingBundleStatusSummaryQueryKey>
        >
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
      ...getApiV2ReportingBundleStatusSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingBundlesInUpdateGroupQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
) {
  return ['api', '/api/v2/Reporting/BundlesInUpdateGroup', args] as const
}

export function getApiV2ReportingBundlesInUpdateGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingBundlesInUpdateGroupQueryKey>
  >({
    queryKey: getApiV2ReportingBundlesInUpdateGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.BundlesInUpdateGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingBundlesInUpdateGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingBundlesInUpdateGroupQueryKey>
        >
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
      ...getApiV2ReportingBundlesInUpdateGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingClientInfoQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
) {
  return ['api', '/api/v2/Reporting/ClientInfo', args] as const
}

export function getApiV2ReportingClientInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingClientInfoQueryKey>
  >({
    queryKey: getApiV2ReportingClientInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.ClientInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingClientInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingClientInfoQueryKey>
        >
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
      ...getApiV2ReportingClientInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
) {
  return ['api', '/api/v2/Reporting/CurrentPackagesInUpdateGroup', args] as const
}

export function getApiV2ReportingCurrentPackagesInUpdateGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey>
  >({
    queryKey: getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingCurrentPackagesInUpdateGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey>
        >
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
      ...getApiV2ReportingCurrentPackagesInUpdateGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingGetClientQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
) {
  return ['api', '/api/v2/Reporting/GetClient', args] as const
}

export function getApiV2ReportingGetClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingGetClientQueryKey>
  >({
    queryKey: getApiV2ReportingGetClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.GetClient.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingGetClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingGetClientQueryKey>
        >
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
      ...getApiV2ReportingGetClientQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingGetSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
) {
  return ['api', '/api/v2/Reporting/GetSubscriptions', args] as const
}

export function getApiV2ReportingGetSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingGetSubscriptionsQueryKey>
  >({
    queryKey: getApiV2ReportingGetSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.GetSubscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingGetSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingGetSubscriptionsQueryKey>
        >
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
      ...getApiV2ReportingGetSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingPackageStatusSummaryQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
) {
  return ['api', '/api/v2/Reporting/PackageStatusSummary', args] as const
}

export function getApiV2ReportingPackageStatusSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingPackageStatusSummaryQueryKey>
  >({
    queryKey: getApiV2ReportingPackageStatusSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.PackageStatusSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingPackageStatusSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingPackageStatusSummaryQueryKey>
        >
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
      ...getApiV2ReportingPackageStatusSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingRegisteredClientsQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
) {
  return ['api', '/api/v2/Reporting/RegisteredClients', args] as const
}

export function getApiV2ReportingRegisteredClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingRegisteredClientsQueryKey>
  >({
    queryKey: getApiV2ReportingRegisteredClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.RegisteredClients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingRegisteredClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingRegisteredClientsQueryKey>
        >
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
      ...getApiV2ReportingRegisteredClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingUpdateGroupsQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
) {
  return ['api', '/api/v2/Reporting/UpdateGroups', args] as const
}

export function getApiV2ReportingUpdateGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingUpdateGroupsQueryKey>
  >({
    queryKey: getApiV2ReportingUpdateGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.UpdateGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingUpdateGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingUpdateGroupsQueryKey>
        >
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
      ...getApiV2ReportingUpdateGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ReportingUpdateMetricsQueryKey(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
) {
  return ['api', '/api/v2/Reporting/UpdateMetrics', args] as const
}

export function getApiV2ReportingUpdateMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingUpdateMetricsQueryKey>
  >({
    queryKey: getApiV2ReportingUpdateMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Reporting.UpdateMetrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ReportingUpdateMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ReportingUpdateMetricsQueryKey>
        >
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
      ...getApiV2ReportingUpdateMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2RolesQueryKey(args: InferRequestType<typeof client.api.v2.Roles.$get>) {
  return ['api', '/api/v2/Roles', args] as const
}

export function getApiV2RolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesQueryKey>
  >({
    queryKey: getApiV2RolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Roles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Roles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2RolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2RolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2RolesMutationKey() {
  return ['api', '/api/v2/Roles', 'POST'] as const
}

export function getPostApiV2RolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2RolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Roles.$post>) {
      return parseResponse(client.api.v2.Roles.$post(args, options))
    },
  })
}

export function createPostApiV2Roles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Roles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2RolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2RolesIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
) {
  return ['api', '/api/v2/Roles/:id', args] as const
}

export function getApiV2RolesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesIdQueryKey>
  >({
    queryKey: getApiV2RolesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Roles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2RolesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2RolesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2RolesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2RolesIdMutationKey() {
  return ['api', '/api/v2/Roles/:id', 'PUT'] as const
}

export function getPutApiV2RolesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2RolesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$put']>) {
      return parseResponse(client.api.v2.Roles[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2RolesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Roles)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2RolesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2RolesIdMutationKey() {
  return ['api', '/api/v2/Roles/:id', 'DELETE'] as const
}

export function getDeleteApiV2RolesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2RolesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$delete']>) {
      return parseResponse(client.api.v2.Roles[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2RolesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Roles)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2RolesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2RolesIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
) {
  return ['api', '/api/v2/Roles/:id/Permissions', args] as const
}

export function getApiV2RolesIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesIdPermissionsQueryKey>
  >({
    queryKey: getApiV2RolesIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Roles[':id'].Permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2RolesIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2RolesIdPermissionsQueryKey>
        >
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
      ...getApiV2RolesIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2RolesIdPermissionsMutationKey() {
  return ['api', '/api/v2/Roles/:id/Permissions', 'PUT'] as const
}

export function getPutApiV2RolesIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2RolesIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>,
    ) {
      return parseResponse(client.api.v2.Roles[':id'].Permissions.$put(args, options))
    },
  })
}

export function createPutApiV2RolesIdPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2RolesIdPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2RolesIdUsersQueryKey(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
) {
  return ['api', '/api/v2/Roles/:id/Users', args] as const
}

export function getApiV2RolesIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesIdUsersQueryKey>
  >({
    queryKey: getApiV2RolesIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Roles[':id'].Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2RolesIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2RolesIdUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2RolesIdUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2RolesIdUsersMutationKey() {
  return ['api', '/api/v2/Roles/:id/Users', 'PUT'] as const
}

export function getPutApiV2RolesIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2RolesIdUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>) {
      return parseResponse(client.api.v2.Roles[':id'].Users.$put(args, options))
    },
  })
}

export function createPutApiV2RolesIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2RolesIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2StringDefinitionsQueryKey(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
) {
  return ['api', '/api/v2/StringDefinitions', args] as const
}

export function getApiV2StringDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringDefinitionsQueryKey>
  >({
    queryKey: getApiV2StringDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.StringDefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2StringDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StringDefinitionsQueryKey>
        >
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
      ...getApiV2StringDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2StringDefinitionsBatchMutationKey() {
  return ['api', '/api/v2/StringDefinitions/Batch', 'PUT'] as const
}

export function getPutApiV2StringDefinitionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.StringDefinitions.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2StringDefinitionsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$put>) {
      return parseResponse(client.api.v2.StringDefinitions.Batch.$put(args, options))
    },
  })
}

export function createPutApiV2StringDefinitionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.StringDefinitions.Batch.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2StringDefinitionsBatchMutationOptions<
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

export function getPostApiV2StringDefinitionsBatchMutationKey() {
  return ['api', '/api/v2/StringDefinitions/Batch', 'POST'] as const
}

export function getPostApiV2StringDefinitionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.StringDefinitions.Batch.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2StringDefinitionsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$post>) {
      return parseResponse(client.api.v2.StringDefinitions.Batch.$post(args, options))
    },
  })
}

export function createPostApiV2StringDefinitionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.StringDefinitions.Batch.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2StringDefinitionsBatchMutationOptions<
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

export function getApiV2StringDefinitionsIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
) {
  return ['api', '/api/v2/StringDefinitions/:ID', args] as const
}

export function getApiV2StringDefinitionsIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringDefinitionsIDQueryKey>
  >({
    queryKey: getApiV2StringDefinitionsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.StringDefinitions[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2StringDefinitionsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StringDefinitionsIDQueryKey>
        >
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
      ...getApiV2StringDefinitionsIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2StringTranslationsQueryKey(
  args: InferRequestType<typeof client.api.v2.StringTranslations.$get>,
) {
  return ['api', '/api/v2/StringTranslations', args] as const
}

export function getApiV2StringTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.StringTranslations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringTranslationsQueryKey>
  >({
    queryKey: getApiV2StringTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.StringTranslations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2StringTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.StringTranslations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StringTranslationsQueryKey>
        >
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
      ...getApiV2StringTranslationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2StringTranslationsBatchMutationKey() {
  return ['api', '/api/v2/StringTranslations/Batch', 'PUT'] as const
}

export function getPutApiV2StringTranslationsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.StringTranslations.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.StringTranslations.Batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2StringTranslationsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.StringTranslations.Batch.$put>) {
      return parseResponse(client.api.v2.StringTranslations.Batch.$put(args, options))
    },
  })
}

export function createPutApiV2StringTranslationsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.StringTranslations.Batch.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.StringTranslations.Batch.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2StringTranslationsBatchMutationOptions<
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

export function getApiV2StringTranslationsStringIdLanguageIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
) {
  return ['api', '/api/v2/StringTranslations/:stringId/:languageId', args] as const
}

export function getApiV2StringTranslationsStringIdLanguageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringTranslationsStringIdLanguageIdQueryKey>
  >({
    queryKey: getApiV2StringTranslationsStringIdLanguageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.StringTranslations[':stringId'][':languageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2StringTranslationsStringIdLanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StringTranslationsStringIdLanguageIdQueryKey>
        >
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
      ...getApiV2StringTranslationsStringIdLanguageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2StringTranslationsStringIdLanguageIdMutationKey() {
  return ['api', '/api/v2/StringTranslations/:stringId/:languageId', 'PUT'] as const
}

export function getPutApiV2StringTranslationsStringIdLanguageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2StringTranslationsStringIdLanguageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.StringTranslations[':stringId'][':languageId'].$put(args, options),
      )
    },
  })
}

export function createPutApiV2StringTranslationsStringIdLanguageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2StringTranslationsStringIdLanguageIdMutationOptions<
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

export function getApiV2TranslationKeysQueryKey(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
) {
  return ['api', '/api/v2/TranslationKeys', args] as const
}

export function getApiV2TranslationKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationKeysQueryKey>
  >({
    queryKey: getApiV2TranslationKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationKeysQueryKey>
        >
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
      ...getApiV2TranslationKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2TranslationKeysMutationKey() {
  return ['api', '/api/v2/TranslationKeys', 'POST'] as const
}

export function getPostApiV2TranslationKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.TranslationKeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TranslationKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.TranslationKeys.$post>) {
      return parseResponse(client.api.v2.TranslationKeys.$post(args, options))
    },
  })
}

export function createPostApiV2TranslationKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.TranslationKeys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2TranslationKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2TranslationKeysIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
) {
  return ['api', '/api/v2/TranslationKeys/:ID', args] as const
}

export function getApiV2TranslationKeysIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationKeysIDQueryKey>
  >({
    queryKey: getApiV2TranslationKeysIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationKeys[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationKeysID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationKeysIDQueryKey>
        >
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
      ...getApiV2TranslationKeysIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2TranslationKeysIDMutationKey() {
  return ['api', '/api/v2/TranslationKeys/:ID', 'PUT'] as const
}

export function getPutApiV2TranslationKeysIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationKeysIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>,
    ) {
      return parseResponse(client.api.v2.TranslationKeys[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2TranslationKeysID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationKeysIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2TranslationRequestsQueryKey(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
) {
  return ['api', '/api/v2/TranslationRequests', args] as const
}

export function getApiV2TranslationRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationRequestsQueryKey>
  >({
    queryKey: getApiV2TranslationRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationRequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationRequestsQueryKey>
        >
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
      ...getApiV2TranslationRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2TranslationRequestsMutationKey() {
  return ['api', '/api/v2/TranslationRequests', 'POST'] as const
}

export function getPostApiV2TranslationRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.TranslationRequests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TranslationRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.TranslationRequests.$post>) {
      return parseResponse(client.api.v2.TranslationRequests.$post(args, options))
    },
  })
}

export function createPostApiV2TranslationRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.TranslationRequests.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2TranslationRequestsMutationOptions<
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

export function getApiV2TranslationRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
) {
  return ['api', '/api/v2/TranslationRequests/:Id', args] as const
}

export function getApiV2TranslationRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationRequestsIdQueryKey>
  >({
    queryKey: getApiV2TranslationRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationRequests[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationRequestsIdQueryKey>
        >
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
      ...getApiV2TranslationRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2TranslationRequestsIdMutationKey() {
  return ['api', '/api/v2/TranslationRequests/:Id', 'PUT'] as const
}

export function getPutApiV2TranslationRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>,
    ) {
      return parseResponse(client.api.v2.TranslationRequests[':Id'].$put(args, options))
    },
  })
}

export function createPutApiV2TranslationRequestsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationRequestsIdMutationOptions<
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

export function getPutApiV2TranslationRequestsIdStringsMutationKey() {
  return ['api', '/api/v2/TranslationRequests/:Id/Strings', 'PUT'] as const
}

export function getPutApiV2TranslationRequestsIdStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationRequestsIdStringsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>,
    ) {
      return parseResponse(client.api.v2.TranslationRequests[':Id'].Strings.$put(args, options))
    },
  })
}

export function createPutApiV2TranslationRequestsIdStrings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationRequestsIdStringsMutationOptions<
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

export function getPutApiV2TranslationSetAttributesBatchMutationKey() {
  return ['api', '/api/v2/TranslationSetAttributes/Batch', 'PUT'] as const
}

export function getPutApiV2TranslationSetAttributesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationSetAttributesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>,
    ) {
      return parseResponse(client.api.v2.TranslationSetAttributes.Batch.$put(args, options))
    },
  })
}

export function createPutApiV2TranslationSetAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationSetAttributesBatchMutationOptions<
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

export function getPutApiV2TranslationSetAttributesIDMutationKey() {
  return ['api', '/api/v2/TranslationSetAttributes/:ID', 'PUT'] as const
}

export function getPutApiV2TranslationSetAttributesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationSetAttributesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>,
    ) {
      return parseResponse(client.api.v2.TranslationSetAttributes[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2TranslationSetAttributesID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationSetAttributesIDMutationOptions<
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

export function getDeleteApiV2TranslationSetAttributesIDMutationKey() {
  return ['api', '/api/v2/TranslationSetAttributes/:ID', 'DELETE'] as const
}

export function getDeleteApiV2TranslationSetAttributesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2TranslationSetAttributesIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.TranslationSetAttributes[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2TranslationSetAttributesID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2TranslationSetAttributesIDMutationOptions<
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

export function getApiV2TranslationSetsQueryKey(
  args: InferRequestType<typeof client.api.v2.TranslationSets.$get>,
) {
  return ['api', '/api/v2/TranslationSets', args] as const
}

export function getApiV2TranslationSetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.TranslationSets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsQueryKey>
  >({
    queryKey: getApiV2TranslationSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationSets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.TranslationSets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationSetsQueryKey>
        >
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
      ...getApiV2TranslationSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TranslationSetsIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID', args] as const
}

export function getApiV2TranslationSetsIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDQueryKey>
  >({
    queryKey: getApiV2TranslationSetsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationSetsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationSetsIDQueryKey>
        >
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
      ...getApiV2TranslationSetsIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2TranslationSetsIDMutationKey() {
  return ['api', '/api/v2/TranslationSets/:ID', 'PUT'] as const
}

export function getPutApiV2TranslationSetsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationSetsIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>,
    ) {
      return parseResponse(client.api.v2.TranslationSets[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2TranslationSetsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationSetsIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2TranslationSetsIDAttributesQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes', args] as const
}

export function getApiV2TranslationSetsIDAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDAttributesQueryKey>
  >({
    queryKey: getApiV2TranslationSetsIDAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationSetsIDAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationSetsIDAttributesQueryKey>
        >
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
      ...getApiV2TranslationSetsIDAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2TranslationSetsIDAttributesMutationKey() {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes', 'POST'] as const
}

export function getPostApiV2TranslationSetsIDAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TranslationSetsIDAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>,
    ) {
      return parseResponse(client.api.v2.TranslationSets[':ID'].Attributes.$post(args, options))
    },
  })
}

export function createPostApiV2TranslationSetsIDAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2TranslationSetsIDAttributesMutationOptions<
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

export function getPostApiV2TranslationSetsIDAttributesBatchMutationKey() {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes/Batch', 'POST'] as const
}

export function getPostApiV2TranslationSetsIDAttributesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TranslationSetsIDAttributesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Attributes.Batch.$post(args, options),
      )
    },
  })
}

export function createPostApiV2TranslationSetsIDAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2TranslationSetsIDAttributesBatchMutationOptions<
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

export function getApiV2TranslationSetsIDSourceStringsQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/SourceStrings', args] as const
}

export function getApiV2TranslationSetsIDSourceStringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDSourceStringsQueryKey>
  >({
    queryKey: getApiV2TranslationSetsIDSourceStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].SourceStrings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationSetsIDSourceStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationSetsIDSourceStringsQueryKey>
        >
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
      ...getApiV2TranslationSetsIDSourceStringsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TranslationSetsIDStatisticsQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Statistics', args] as const
}

export function getApiV2TranslationSetsIDStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDStatisticsQueryKey>
  >({
    queryKey: getApiV2TranslationSetsIDStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationSetsIDStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationSetsIDStatisticsQueryKey>
        >
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
      ...getApiV2TranslationSetsIDStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TranslationSetsIDStringsQueryKey(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Strings', args] as const
}

export function getApiV2TranslationSetsIDStringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDStringsQueryKey>
  >({
    queryKey: getApiV2TranslationSetsIDStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Strings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TranslationSetsIDStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TranslationSetsIDStringsQueryKey>
        >
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
      ...getApiV2TranslationSetsIDStringsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2TranslationSetsIDStringsMutationKey() {
  return ['api', '/api/v2/TranslationSets/:ID/Strings', 'PUT'] as const
}

export function getPutApiV2TranslationSetsIDStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2TranslationSetsIDStringsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>,
    ) {
      return parseResponse(client.api.v2.TranslationSets[':ID'].Strings.$put(args, options))
    },
  })
}

export function createPutApiV2TranslationSetsIDStrings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2TranslationSetsIDStringsMutationOptions<
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

export function getApiV2UpdateGroupClientRelationshipsQueryKey(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
) {
  return ['api', '/api/v2/UpdateGroupClientRelationships', args] as const
}

export function getApiV2UpdateGroupClientRelationshipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupClientRelationshipsQueryKey>
  >({
    queryKey: getApiV2UpdateGroupClientRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroupClientRelationships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UpdateGroupClientRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupClientRelationshipsQueryKey>
        >
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
      ...getApiV2UpdateGroupClientRelationshipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2UpdateGroupClientRelationshipsMutationKey() {
  return ['api', '/api/v2/UpdateGroupClientRelationships', 'PUT'] as const
}

export function getPutApiV2UpdateGroupClientRelationshipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UpdateGroupClientRelationshipsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$put>,
    ) {
      return parseResponse(client.api.v2.UpdateGroupClientRelationships.$put(args, options))
    },
  })
}

export function createPutApiV2UpdateGroupClientRelationships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UpdateGroupClientRelationshipsMutationOptions<
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

export function getPostApiV2UpdateGroupClientRelationshipsMutationKey() {
  return ['api', '/api/v2/UpdateGroupClientRelationships', 'POST'] as const
}

export function getPostApiV2UpdateGroupClientRelationshipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UpdateGroupClientRelationshipsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post>,
    ) {
      return parseResponse(client.api.v2.UpdateGroupClientRelationships.$post(args, options))
    },
  })
}

export function createPostApiV2UpdateGroupClientRelationships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UpdateGroupClientRelationshipsMutationOptions<
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

export function getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
) {
  return ['api', '/api/v2/UpdateGroupClientRelationships/:RelationshipID', args] as const
}

export function getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey>
  >({
    queryKey: getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UpdateGroupClientRelationshipsRelationshipID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey>
        >
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
      ...getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2UpdateGroupClientRelationshipsRelationshipIDMutationKey() {
  return ['api', '/api/v2/UpdateGroupClientRelationships/:RelationshipID', 'PUT'] as const
}

export function getPutApiV2UpdateGroupClientRelationshipsRelationshipIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UpdateGroupClientRelationshipsRelationshipIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$put(args, options),
      )
    },
  })
}

export function createPutApiV2UpdateGroupClientRelationshipsRelationshipID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UpdateGroupClientRelationshipsRelationshipIDMutationOptions<
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

export function getApiV2UpdateGroupSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
) {
  return ['api', '/api/v2/UpdateGroupSubscriptions', args] as const
}

export function getApiV2UpdateGroupSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupSubscriptionsQueryKey>
  >({
    queryKey: getApiV2UpdateGroupSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroupSubscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UpdateGroupSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupSubscriptionsQueryKey>
        >
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
      ...getApiV2UpdateGroupSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2UpdateGroupSubscriptionsMutationKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions', 'POST'] as const
}

export function getPostApiV2UpdateGroupSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UpdateGroupSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post>) {
      return parseResponse(client.api.v2.UpdateGroupSubscriptions.$post(args, options))
    },
  })
}

export function createPostApiV2UpdateGroupSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UpdateGroupSubscriptionsMutationOptions<
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

export function getPutApiV2UpdateGroupSubscriptionsBatchMutationKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/Batch', 'PUT'] as const
}

export function getPutApiV2UpdateGroupSubscriptionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UpdateGroupSubscriptionsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>,
    ) {
      return parseResponse(client.api.v2.UpdateGroupSubscriptions.Batch.$put(args, options))
    },
  })
}

export function createPutApiV2UpdateGroupSubscriptionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UpdateGroupSubscriptionsBatchMutationOptions<
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

export function getPostApiV2UpdateGroupSubscriptionsBatchMutationKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/Batch', 'POST'] as const
}

export function getPostApiV2UpdateGroupSubscriptionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UpdateGroupSubscriptionsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>,
    ) {
      return parseResponse(client.api.v2.UpdateGroupSubscriptions.Batch.$post(args, options))
    },
  })
}

export function createPostApiV2UpdateGroupSubscriptionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UpdateGroupSubscriptionsBatchMutationOptions<
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

export function getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
) {
  return ['api', '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID', args] as const
}

export function getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey>
  >({
    queryKey: getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey>
        >
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
      ...getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID', 'PUT'] as const
}

export function getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$put(args, options),
      )
    },
  })
}

export function createPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationOptions<
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

export function getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationKey() {
  return ['api', '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID', 'DELETE'] as const
}

export function getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationOptions<
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

export function getApiV2UpdateGroupsQueryKey(
  args: InferRequestType<typeof client.api.v2.UpdateGroups.$get>,
) {
  return ['api', '/api/v2/UpdateGroups', args] as const
}

export function getApiV2UpdateGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.UpdateGroups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupsQueryKey>
  >({
    queryKey: getApiV2UpdateGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2UpdateGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.UpdateGroups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UpdateGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2UpdateGroupsMutationKey() {
  return ['api', '/api/v2/UpdateGroups', 'POST'] as const
}

export function getPostApiV2UpdateGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.UpdateGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UpdateGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.UpdateGroups.$post>) {
      return parseResponse(client.api.v2.UpdateGroups.$post(args, options))
    },
  })
}

export function createPostApiV2UpdateGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroups.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UpdateGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2UpdateGroupsIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
) {
  return ['api', '/api/v2/UpdateGroups/:ID', args] as const
}

export function getApiV2UpdateGroupsIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupsIDQueryKey>
  >({
    queryKey: getApiV2UpdateGroupsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroups[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UpdateGroupsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupsIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UpdateGroupsIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2UpdateGroupsIDMutationKey() {
  return ['api', '/api/v2/UpdateGroups/:ID', 'PUT'] as const
}

export function getPutApiV2UpdateGroupsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UpdateGroupsIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>) {
      return parseResponse(client.api.v2.UpdateGroups[':ID'].$put(args, options))
    },
  })
}

export function createPutApiV2UpdateGroupsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UpdateGroupsIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2UpdateGroupsIDMutationKey() {
  return ['api', '/api/v2/UpdateGroups/:ID', 'DELETE'] as const
}

export function getDeleteApiV2UpdateGroupsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UpdateGroupsIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.UpdateGroups[':ID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2UpdateGroupsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2UpdateGroupsIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2UpdateGroupsIDBundlesQueryKey(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
) {
  return ['api', '/api/v2/UpdateGroups/:ID/Bundles', args] as const
}

export function getApiV2UpdateGroupsIDBundlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupsIDBundlesQueryKey>
  >({
    queryKey: getApiV2UpdateGroupsIDBundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateGroups[':ID'].Bundles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UpdateGroupsIDBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateGroupsIDBundlesQueryKey>
        >
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
      ...getApiV2UpdateGroupsIDBundlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2UpdateGroupsIdUsersUserIDMutationKey() {
  return ['api', '/api/v2/UpdateGroups/:id/Users/:userID', 'POST'] as const
}

export function getPostApiV2UpdateGroupsIdUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UpdateGroupsIdUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']
      >,
    ) {
      return parseResponse(client.api.v2.UpdateGroups[':id'].Users[':userID'].$post(args, options))
    },
  })
}

export function createPostApiV2UpdateGroupsIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UpdateGroupsIdUsersUserIDMutationOptions<
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

export function getDeleteApiV2UpdateGroupsIdUsersUserIDMutationKey() {
  return ['api', '/api/v2/UpdateGroups/:id/Users/:userID', 'DELETE'] as const
}

export function getDeleteApiV2UpdateGroupsIdUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UpdateGroupsIdUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.UpdateGroups[':id'].Users[':userID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2UpdateGroupsIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2UpdateGroupsIdUsersUserIDMutationOptions<
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

export function getApiV2UpdateSystemQueryKey(
  args: InferRequestType<typeof client.api.v2.UpdateSystem.$get>,
) {
  return ['api', '/api/v2/UpdateSystem', args] as const
}

export function getApiV2UpdateSystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.UpdateSystem.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateSystemQueryKey>
  >({
    queryKey: getApiV2UpdateSystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UpdateSystem.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2UpdateSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.UpdateSystem.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UpdateSystemQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UpdateSystemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2UserContentDefinitionsQueryKey(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
) {
  return ['api', '/api/v2/UserContentDefinitions', args] as const
}

export function getApiV2UserContentDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UserContentDefinitionsQueryKey>
  >({
    queryKey: getApiV2UserContentDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UserContentDefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UserContentDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UserContentDefinitionsQueryKey>
        >
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
      ...getApiV2UserContentDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2UserContentDefinitionsMutationKey() {
  return ['api', '/api/v2/UserContentDefinitions', 'POST'] as const
}

export function getPostApiV2UserContentDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.UserContentDefinitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UserContentDefinitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$post>) {
      return parseResponse(client.api.v2.UserContentDefinitions.$post(args, options))
    },
  })
}

export function createPostApiV2UserContentDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UserContentDefinitions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UserContentDefinitionsMutationOptions<
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

export function getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
) {
  return ['api', '/api/v2/UserContentDefinitions/:userContentDefinitionID', args] as const
}

export function getApiV2UserContentDefinitionsUserContentDefinitionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey>
  >({
    queryKey: getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UserContentDefinitionsUserContentDefinitionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey>
        >
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
      ...getApiV2UserContentDefinitionsUserContentDefinitionIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDMutationKey() {
  return ['api', '/api/v2/UserContentDefinitions/:userContentDefinitionID', 'DELETE'] as const
}

export function getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2UserContentDefinitionsUserContentDefinitionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDMutationOptions<
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

export function getApiV2UsersQueryKey(args: InferRequestType<typeof client.api.v2.Users.$get>) {
  return ['api', '/api/v2/Users', args] as const
}

export function getApiV2UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersQueryKey>
  >({
    queryKey: getApiV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2UsersMutationKey() {
  return ['api', '/api/v2/Users', 'POST'] as const
}

export function getPostApiV2UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Users.$post>) {
      return parseResponse(client.api.v2.Users.$post(args, options))
    },
  })
}

export function createPostApiV2Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2UsersCurrentQueryKey() {
  return ['api', '/api/v2/Users/Current'] as const
}

export function getApiV2UsersCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersCurrentQueryKey>
  >({
    queryKey: getApiV2UsersCurrentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users.Current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UsersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersCurrentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersCurrentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2UsersCurrentMutationKey() {
  return ['api', '/api/v2/Users/Current', 'PUT'] as const
}

export function getPutApiV2UsersCurrentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.Users.Current.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UsersCurrentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Users.Current.$put>) {
      return parseResponse(client.api.v2.Users.Current.$put(args, options))
    },
  })
}

export function createPutApiV2UsersCurrent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.Users.Current.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UsersCurrentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2UsersCurrentPermissionsQueryKey(
  args: InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
) {
  return ['api', '/api/v2/Users/Current/Permissions', args] as const
}

export function getApiV2UsersCurrentPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersCurrentPermissionsQueryKey>
  >({
    queryKey: getApiV2UsersCurrentPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users.Current.Permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UsersCurrentPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersCurrentPermissionsQueryKey>
        >
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
      ...getApiV2UsersCurrentPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2UsersCurrentRolesQueryKey(
  args: InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
) {
  return ['api', '/api/v2/Users/Current/Roles', args] as const
}

export function getApiV2UsersCurrentRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersCurrentRolesQueryKey>
  >({
    queryKey: getApiV2UsersCurrentRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users.Current.Roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UsersCurrentRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersCurrentRolesQueryKey>
        >
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
      ...getApiV2UsersCurrentRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2UsersIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
) {
  return ['api', '/api/v2/Users/:id', args] as const
}

export function getApiV2UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdQueryKey>
  >({
    queryKey: getApiV2UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2UsersIdMutationKey() {
  return ['api', '/api/v2/Users/:id', 'PUT'] as const
}

export function getPutApiV2UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Users)[':id']['$put']>) {
      return parseResponse(client.api.v2.Users[':id'].$put(args, options))
    },
  })
}

export function createPutApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Users)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2UsersIdMutationKey() {
  return ['api', '/api/v2/Users/:id', 'DELETE'] as const
}

export function getDeleteApiV2UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Users)[':id']['$delete']>) {
      return parseResponse(client.api.v2.Users[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Users)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2UsersIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
) {
  return ['api', '/api/v2/Users/:id/Permissions', args] as const
}

export function getApiV2UsersIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdPermissionsQueryKey>
  >({
    queryKey: getApiV2UsersIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users[':id'].Permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UsersIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersIdPermissionsQueryKey>
        >
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
      ...getApiV2UsersIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2UsersIdRolesQueryKey(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
) {
  return ['api', '/api/v2/Users/:id/Roles', args] as const
}

export function getApiV2UsersIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdRolesQueryKey>
  >({
    queryKey: getApiV2UsersIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Users[':id'].Roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UsersIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2UsersIdRolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersIdRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2UsersIdRolesMutationKey() {
  return ['api', '/api/v2/Users/:id/Roles', 'PUT'] as const
}

export function getPutApiV2UsersIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2UsersIdRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>) {
      return parseResponse(client.api.v2.Users[':id'].Roles.$put(args, options))
    },
  })
}

export function createPutApiV2UsersIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2UsersIdRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2VoucherHistoryQueryKey(
  args: InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
) {
  return ['api', '/api/v2/VoucherHistory', args] as const
}

export function getApiV2VoucherHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VoucherHistoryQueryKey>
  >({
    queryKey: getApiV2VoucherHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.VoucherHistory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2VoucherHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VoucherHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2VoucherHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2VouchersQueryKey(
  args: InferRequestType<typeof client.api.v2.Vouchers.$get>,
) {
  return ['api', '/api/v2/Vouchers', args] as const
}

export function getApiV2VouchersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.Vouchers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VouchersQueryKey>
  >({
    queryKey: getApiV2VouchersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Vouchers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Vouchers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.Vouchers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VouchersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2VouchersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2VouchersMutationKey() {
  return ['api', '/api/v2/Vouchers', 'POST'] as const
}

export function getPostApiV2VouchersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.Vouchers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2VouchersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.Vouchers.$post>) {
      return parseResponse(client.api.v2.Vouchers.$post(args, options))
    },
  })
}

export function createPostApiV2Vouchers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Vouchers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2VouchersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2VouchersVoucherCodeQueryKey(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
) {
  return ['api', '/api/v2/Vouchers/:VoucherCode', args] as const
}

export function getApiV2VouchersVoucherCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VouchersVoucherCodeQueryKey>
  >({
    queryKey: getApiV2VouchersVoucherCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Vouchers[':VoucherCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2VouchersVoucherCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VouchersVoucherCodeQueryKey>
        >
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
      ...getApiV2VouchersVoucherCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2VouchersVoucherCodeMutationKey() {
  return ['api', '/api/v2/Vouchers/:VoucherCode', 'PUT'] as const
}

export function getPutApiV2VouchersVoucherCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2VouchersVoucherCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>,
    ) {
      return parseResponse(client.api.v2.Vouchers[':VoucherCode'].$put(args, options))
    },
  })
}

export function createPutApiV2VouchersVoucherCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2VouchersVoucherCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2VouchersVoucherCodeMutationKey() {
  return ['api', '/api/v2/Vouchers/:VoucherCode', 'DELETE'] as const
}

export function getDeleteApiV2VouchersVoucherCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2VouchersVoucherCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>,
    ) {
      return parseResponse(client.api.v2.Vouchers[':VoucherCode'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2VouchersVoucherCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2VouchersVoucherCodeMutationOptions<
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

export function getApiV2VouchersVoucherCodeVoucherHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>,
) {
  return ['api', '/api/v2/Vouchers/:VoucherCode/VoucherHistory', args] as const
}

export function getApiV2VouchersVoucherCodeVoucherHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VouchersVoucherCodeVoucherHistoryQueryKey>
  >({
    queryKey: getApiV2VouchersVoucherCodeVoucherHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.Vouchers[':VoucherCode'].VoucherHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2VouchersVoucherCodeVoucherHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VouchersVoucherCodeVoucherHistoryQueryKey>
        >
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
      ...getApiV2VouchersVoucherCodeVoucherHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ActivitiesQueryKey(
  args: InferRequestType<typeof client.api.v2.activities.$get>,
) {
  return ['api', '/api/v2/activities', args] as const
}

export function getApiV2ActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivitiesQueryKey>
  >({
    queryKey: getApiV2ActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.activities.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ActivitiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ActivitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2ActivitiesMutationKey() {
  return ['api', '/api/v2/activities', 'POST'] as const
}

export function getPostApiV2ActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.activities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ActivitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.activities.$post>) {
      return parseResponse(client.api.v2.activities.$post(args, options))
    },
  })
}

export function createPostApiV2Activities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.activities.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2ActivitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ActivitiesActivityIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
) {
  return ['api', '/api/v2/activities/:activityID', args] as const
}

export function getApiV2ActivitiesActivityIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivitiesActivityIDQueryKey>
  >({
    queryKey: getApiV2ActivitiesActivityIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.activities[':activityID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ActivitiesActivityID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ActivitiesActivityIDQueryKey>
        >
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
      ...getApiV2ActivitiesActivityIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ActivitiesActivityIDMutationKey() {
  return ['api', '/api/v2/activities/:activityID', 'PUT'] as const
}

export function getPutApiV2ActivitiesActivityIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ActivitiesActivityIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$put']>,
    ) {
      return parseResponse(client.api.v2.activities[':activityID'].$put(args, options))
    },
  })
}

export function createPutApiV2ActivitiesActivityID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.activities)[':activityID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ActivitiesActivityIDMutationOptions<
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

export function getDeleteApiV2ActivitiesActivityIDMutationKey() {
  return ['api', '/api/v2/activities/:activityID', 'DELETE'] as const
}

export function getDeleteApiV2ActivitiesActivityIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2ActivitiesActivityIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.activities[':activityID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2ActivitiesActivityID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.activities)[':activityID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2ActivitiesActivityIDMutationOptions<
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

export function getApiV2ActivityRunsQueryKey(
  args: InferRequestType<typeof client.api.v2.activityRuns.$get>,
) {
  return ['api', '/api/v2/activityRuns', args] as const
}

export function getApiV2ActivityRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.activityRuns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivityRunsQueryKey>
  >({
    queryKey: getApiV2ActivityRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.activityRuns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2ActivityRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.activityRuns.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ActivityRunsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ActivityRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2ActivityRunsActivityRunIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
) {
  return ['api', '/api/v2/activityRuns/:activityRunID', args] as const
}

export function getApiV2ActivityRunsActivityRunIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivityRunsActivityRunIDQueryKey>
  >({
    queryKey: getApiV2ActivityRunsActivityRunIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.activityRuns[':activityRunID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ActivityRunsActivityRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ActivityRunsActivityRunIDQueryKey>
        >
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
      ...getApiV2ActivityRunsActivityRunIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ActivityRunsActivityRunIDMutationKey() {
  return ['api', '/api/v2/activityRuns/:activityRunID', 'PUT'] as const
}

export function getPutApiV2ActivityRunsActivityRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ActivityRunsActivityRunIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>,
    ) {
      return parseResponse(client.api.v2.activityRuns[':activityRunID'].$put(args, options))
    },
  })
}

export function createPutApiV2ActivityRunsActivityRunID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ActivityRunsActivityRunIDMutationOptions<
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

export function getApiV2ActivityRunsActivityRunIDStatusQueryKey(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>,
) {
  return ['api', '/api/v2/activityRuns/:activityRunID/status', args] as const
}

export function getApiV2ActivityRunsActivityRunIDStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivityRunsActivityRunIDStatusQueryKey>
  >({
    queryKey: getApiV2ActivityRunsActivityRunIDStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.activityRuns[':activityRunID'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ActivityRunsActivityRunIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ActivityRunsActivityRunIDStatusQueryKey>
        >
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
      ...getApiV2ActivityRunsActivityRunIDStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2ActivityRunsActivityRunIDStatusMutationKey() {
  return ['api', '/api/v2/activityRuns/:activityRunID/status', 'PUT'] as const
}

export function getPutApiV2ActivityRunsActivityRunIDStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2ActivityRunsActivityRunIDStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']
      >,
    ) {
      return parseResponse(client.api.v2.activityRuns[':activityRunID'].status.$put(args, options))
    },
  })
}

export function createPutApiV2ActivityRunsActivityRunIDStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2ActivityRunsActivityRunIDStatusMutationOptions<
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

export function getApiV2AgentsQueryKey(args: InferRequestType<typeof client.api.v2.agents.$get>) {
  return ['api', '/api/v2/agents', args] as const
}

export function getApiV2AgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsQueryKey>
  >({
    queryKey: getApiV2AgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.agents.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AgentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2AgentsMutationKey() {
  return ['api', '/api/v2/agents', 'POST'] as const
}

export function getPostApiV2AgentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.agents.$post>) {
      return parseResponse(client.api.v2.agents.$post(args, options))
    },
  })
}

export function createPostApiV2Agents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.agents.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2AgentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2AgentsCurrentQueryKey() {
  return ['api', '/api/v2/agents/Current'] as const
}

export function getApiV2AgentsCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsCurrentQueryKey>
  >({
    queryKey: getApiV2AgentsCurrentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agents.Current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AgentsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AgentsCurrentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AgentsCurrentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV2AgentsCurrentActivityRunQueryKey() {
  return ['api', '/api/v2/agents/Current/ActivityRun'] as const
}

export function getApiV2AgentsCurrentActivityRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsCurrentActivityRunQueryKey>
  >({
    queryKey: getApiV2AgentsCurrentActivityRunQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agents.Current.ActivityRun.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AgentsCurrentActivityRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AgentsCurrentActivityRunQueryKey>
        >
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
      ...getApiV2AgentsCurrentActivityRunQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2AgentsAgentIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
) {
  return ['api', '/api/v2/agents/:agentID', args] as const
}

export function getApiV2AgentsAgentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsAgentIDQueryKey>
  >({
    queryKey: getApiV2AgentsAgentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agents[':agentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AgentsAgentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AgentsAgentIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AgentsAgentIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2AgentsAgentIDMutationKey() {
  return ['api', '/api/v2/agents/:agentID', 'PUT'] as const
}

export function getPutApiV2AgentsAgentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AgentsAgentIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$put']>) {
      return parseResponse(client.api.v2.agents[':agentID'].$put(args, options))
    },
  })
}

export function createPutApiV2AgentsAgentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.agents)[':agentID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AgentsAgentIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2AgentsAgentIDMutationKey() {
  return ['api', '/api/v2/agents/:agentID', 'DELETE'] as const
}

export function getDeleteApiV2AgentsAgentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AgentsAgentIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$delete']>) {
      return parseResponse(client.api.v2.agents[':agentID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2AgentsAgentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.agents)[':agentID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2AgentsAgentIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2AgentsAgentIDActivityRunQueryKey(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
) {
  return ['api', '/api/v2/agents/:agentID/ActivityRun', args] as const
}

export function getApiV2AgentsAgentIDActivityRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsAgentIDActivityRunQueryKey>
  >({
    queryKey: getApiV2AgentsAgentIDActivityRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agents[':agentID'].ActivityRun.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AgentsAgentIDActivityRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AgentsAgentIDActivityRunQueryKey>
        >
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
      ...getApiV2AgentsAgentIDActivityRunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2AgentsAgentIDActivityRunMutationKey() {
  return ['api', '/api/v2/agents/:agentID/ActivityRun', 'PUT'] as const
}

export function getPutApiV2AgentsAgentIDActivityRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AgentsAgentIDActivityRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>,
    ) {
      return parseResponse(client.api.v2.agents[':agentID'].ActivityRun.$put(args, options))
    },
  })
}

export function createPutApiV2AgentsAgentIDActivityRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AgentsAgentIDActivityRunMutationOptions<
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

export function getPutApiV2AgentsAgentIDStatusMutationKey() {
  return ['api', '/api/v2/agents/:agentID/Status', 'PUT'] as const
}

export function getPutApiV2AgentsAgentIDStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AgentsAgentIDStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>,
    ) {
      return parseResponse(client.api.v2.agents[':agentID'].Status.$put(args, options))
    },
  })
}

export function createPutApiV2AgentsAgentIDStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2AgentsAgentIDStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2JobRunsQueryKey(args: InferRequestType<typeof client.api.v2.jobRuns.$get>) {
  return ['api', '/api/v2/jobRuns', args] as const
}

export function getApiV2JobRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.jobRuns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2JobRunsQueryKey>
  >({
    queryKey: getApiV2JobRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.jobRuns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2JobRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.jobRuns.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2JobRunsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2JobRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2JobRunsMutationKey() {
  return ['api', '/api/v2/jobRuns', 'POST'] as const
}

export function getPostApiV2JobRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.jobRuns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2JobRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.jobRuns.$post>) {
      return parseResponse(client.api.v2.jobRuns.$post(args, options))
    },
  })
}

export function createPostApiV2JobRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.jobRuns.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2JobRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2JobRunsJobRunIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
) {
  return ['api', '/api/v2/jobRuns/:jobRunID', args] as const
}

export function getApiV2JobRunsJobRunIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2JobRunsJobRunIDQueryKey>
  >({
    queryKey: getApiV2JobRunsJobRunIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.jobRuns[':jobRunID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2JobRunsJobRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2JobRunsJobRunIDQueryKey>
        >
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
      ...getApiV2JobRunsJobRunIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2JobRunsJobRunIDMutationKey() {
  return ['api', '/api/v2/jobRuns/:jobRunID', 'PUT'] as const
}

export function getPutApiV2JobRunsJobRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2JobRunsJobRunIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>) {
      return parseResponse(client.api.v2.jobRuns[':jobRunID'].$put(args, options))
    },
  })
}

export function createPutApiV2JobRunsJobRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2JobRunsJobRunIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2JobRunsJobRunIDMutationKey() {
  return ['api', '/api/v2/jobRuns/:jobRunID', 'DELETE'] as const
}

export function getDeleteApiV2JobRunsJobRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2JobRunsJobRunIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>,
    ) {
      return parseResponse(client.api.v2.jobRuns[':jobRunID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2JobRunsJobRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2JobRunsJobRunIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2JobsQueryKey(args: InferRequestType<typeof client.api.v2.jobs.$get>) {
  return ['api', '/api/v2/jobs', args] as const
}

export function getApiV2JobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2JobsQueryKey>
  >({
    queryKey: getApiV2JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2JobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2JobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2JobsMutationKey() {
  return ['api', '/api/v2/jobs', 'POST'] as const
}

export function getPostApiV2JobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v2.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2JobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.jobs.$post>) {
      return parseResponse(client.api.v2.jobs.$post(args, options))
    },
  })
}

export function createPostApiV2Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.jobs.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2JobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2JobsJobIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
) {
  return ['api', '/api/v2/jobs/:jobID', args] as const
}

export function getApiV2JobsJobIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2JobsJobIDQueryKey>
  >({
    queryKey: getApiV2JobsJobIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.jobs[':jobID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2JobsJobID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2JobsJobIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2JobsJobIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2JobsJobIDMutationKey() {
  return ['api', '/api/v2/jobs/:jobID', 'PUT'] as const
}

export function getPutApiV2JobsJobIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2JobsJobIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$put']>) {
      return parseResponse(client.api.v2.jobs[':jobID'].$put(args, options))
    },
  })
}

export function createPutApiV2JobsJobID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2JobsJobIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV2JobsJobIDMutationKey() {
  return ['api', '/api/v2/jobs/:jobID', 'DELETE'] as const
}

export function getDeleteApiV2JobsJobIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2JobsJobIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$delete']>) {
      return parseResponse(client.api.v2.jobs[':jobID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV2JobsJobID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2JobsJobIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2StepsQueryKey(args: InferRequestType<typeof client.api.v2.steps.$get>) {
  return ['api', '/api/v2/steps', args] as const
}

export function getApiV2StepsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.steps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2StepsQueryKey>
  >({
    queryKey: getApiV2StepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.steps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Steps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.steps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StepsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2StepsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2StepsMutationKey() {
  return ['api', '/api/v2/steps', 'POST'] as const
}

export function getPostApiV2StepsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.steps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2StepsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.steps.$post>) {
      return parseResponse(client.api.v2.steps.$post(args, options))
    },
  })
}

export function createPostApiV2Steps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.steps.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2StepsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2StepsStepIDQueryKey(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
) {
  return ['api', '/api/v2/steps/:stepID', args] as const
}

export function getApiV2StepsStepIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StepsStepIDQueryKey>
  >({
    queryKey: getApiV2StepsStepIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.steps[':stepID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2StepsStepID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StepsStepIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2StepsStepIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV2StepsStepIDMutationKey() {
  return ['api', '/api/v2/steps/:stepID', 'PUT'] as const
}

export function getPutApiV2StepsStepIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.steps)[':stepID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2StepsStepIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$put']>) {
      return parseResponse(client.api.v2.steps[':stepID'].$put(args, options))
    },
  })
}

export function createPutApiV2StepsStepID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.steps)[':stepID']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2StepsStepIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
