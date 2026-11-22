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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2AftermarketServicesCertificatesQueryKey() {
  return ['api', '/api/v2/AftermarketServices/Certificates'] as const
}

export function getApiV2AftermarketServicesCertificatesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getApiV2AftermarketServicesCertificatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AftermarketServices.Certificates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AftermarketServicesCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AftermarketServicesCertificatesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Certificates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AftermarketServicesCertificatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AftermarketServices.Certificates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AftermarketServicesECUsSerialNumber<
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
  const mutationDefaults = getPutApiV2AftermarketServicesECUsSerialNumberMutationOptions<
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

export function getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/AftermarketServices/Engines/:serialNumber/IQACodes',
    toValue(args),
  ] as const
}

export function getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AftermarketServicesEnginesSerialNumberIQACodes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
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
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
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
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey>
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
              (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2AftermarketServicesEnginesSerialNumberIQACodesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AftermarketServicesEnginesSerialNumberIQACodes<
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
  const mutationDefaults = getPutApiV2AftermarketServicesEnginesSerialNumberIQACodesMutationOptions<
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

export function getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/AftermarketServices/Engines/:serialNumber/ProductionData',
    toValue(args),
  ] as const
}

export function getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AftermarketServices.Engines[':serialNumber'].ProductionData.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV2AftermarketServicesEnginesSerialNumberProductionData<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
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
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
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
                    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey>
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
              (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2AftermarketServicesEnginesSerialNumberProductionDataQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AftermarketServices.Engines[':serialNumber'].ProductionData.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AftermarketServicesHelloQueryKey() {
  return ['api', '/api/v2/AftermarketServices/Hello'] as const
}

export function getApiV2AftermarketServicesHelloQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2AftermarketServicesHelloQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AftermarketServices.Hello.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AftermarketServicesHello<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AftermarketServicesHelloQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.Hello.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesHelloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AftermarketServicesHelloQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AftermarketServices.Hello.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AftermarketServicesUserStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>
  >,
) {
  return ['api', '/api/v2/AftermarketServices/UserStatuses', toValue(args)] as const
}

export function getApiV2AftermarketServicesUserStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AftermarketServicesUserStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AftermarketServices.UserStatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AftermarketServicesUserStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AftermarketServicesUserStatusesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AftermarketServicesUserStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AftermarketServicesUserStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AftermarketServices.UserStatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AftermarketServicesUserStatuses<
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
                Awaited<ReturnType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>,
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
  const mutationDefaults = getPutApiV2AftermarketServicesUserStatusesMutationOptions<
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

export function usePutApiV2AuthenticatedUsersUserIDTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AuthenticatedUsersUserIDTokensMutationOptions<
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

export function usePostApiV2Authentication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Authentication.$post>,
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
  const mutationDefaults = getPostApiV2AuthenticationMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2AuthenticationIsAliveQueryKey() {
  return ['api', '/api/v2/Authentication/IsAlive'] as const
}

export function getApiV2AuthenticationIsAliveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2AuthenticationIsAliveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Authentication.IsAlive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthenticationIsAlive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthenticationIsAliveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Authentication.IsAlive.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthenticationIsAliveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AuthenticationIsAliveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Authentication.IsAlive.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2AuthenticationRequestPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2AuthenticationRequestPasswordResetMutationOptions<
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

export function usePostApiV2AuthenticationResetPasword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2AuthenticationResetPaswordMutationOptions<
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

export function getApiV2AuthorizationCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>>,
) {
  return ['api', '/api/v2/AuthorizationCategories', toValue(args)] as const
}

export function getApiV2AuthorizationCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2AuthorizationCategories<
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
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationCategories.$post>,
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
  const mutationDefaults = getPostApiV2AuthorizationCategoriesMutationOptions<
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

export function getApiV2AuthorizationCategoriesUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>>,
) {
  return ['api', '/api/v2/AuthorizationCategories/Users', toValue(args)] as const
}

export function getApiV2AuthorizationCategoriesUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCategoriesUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCategories.Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCategoriesUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCategoriesUsersQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCategories.Users.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCategoriesUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCategoriesUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCategories.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AuthorizationCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AuthorizationCategoriesIdMutationOptions<
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

export function useDeleteApiV2AuthorizationCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2AuthorizationCategoriesIdMutationOptions<
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

export function usePostApiV2AuthorizationCategoriesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2AuthorizationCategoriesIdUsersUserIDMutationOptions<
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

export function useDeleteApiV2AuthorizationCategoriesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2AuthorizationCategoriesIdUsersUserIDMutationOptions<
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

export function getApiV2AuthorizationCodeDefinitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>,
) {
  return ['api', '/api/v2/AuthorizationCodeDefinitions', toValue(args)] as const
}

export function getApiV2AuthorizationCodeDefinitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCodeDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCodeDefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCodeDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCodeDefinitionsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodeDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCodeDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCodeDefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2AuthorizationCodeDefinitions<
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
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>,
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
  const mutationDefaults = getPostApiV2AuthorizationCodeDefinitionsMutationOptions<
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

export function usePostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getPostApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationOptions<
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

export function useDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDMutationOptions<
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

export function getApiV2AuthorizationCodeDefinitionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>
  >,
) {
  return ['api', '/api/v2/AuthorizationCodeDefinitions/:id', toValue(args)] as const
}

export function getApiV2AuthorizationCodeDefinitionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCodeDefinitionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCodeDefinitions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCodeDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCodeDefinitionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodeDefinitionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCodeDefinitionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCodeDefinitions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AuthorizationCodeDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AuthorizationCodeDefinitionsIdMutationOptions<
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

export function useDeleteApiV2AuthorizationCodeDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2AuthorizationCodeDefinitionsIdMutationOptions<
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

export function getApiV2AuthorizationCodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>>,
) {
  return ['api', '/api/v2/AuthorizationCodes', toValue(args)] as const
}

export function getApiV2AuthorizationCodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.AuthorizationCodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2AuthorizationCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2AuthorizationCodesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2AuthorizationCodesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>
  >,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id', toValue(args)] as const
}

export function getApiV2AuthorizationCodesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCodesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCodes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCodesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCodesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCodes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AuthorizationCodesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AuthorizationCodesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2AuthorizationCodesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2AuthorizationCodesIdMutationOptions<
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

export function getApiV2AuthorizationCodesIdContactInformationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']>
  >,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id/ContactInformation', toValue(args)] as const
}

export function getApiV2AuthorizationCodesIdContactInformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCodesIdContactInformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCodes[':id'].ContactInformation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCodesIdContactInformation<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']>
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
                    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
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
                    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCodesIdContactInformationQueryKey>
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
              (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesIdContactInformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCodesIdContactInformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCodes[':id'].ContactInformation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthorizationCodesIdValidateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
  >,
) {
  return ['api', '/api/v2/AuthorizationCodes/:id/Validate', toValue(args)] as const
}

export function getApiV2AuthorizationCodesIdValidateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationCodesIdValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationCodes[':id'].Validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationCodesIdValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationCodesIdValidateQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationCodesIdValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationCodesIdValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationCodes[':id'].Validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthorizationContactInformationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>
  >,
) {
  return ['api', '/api/v2/AuthorizationContactInformation', toValue(args)] as const
}

export function getApiV2AuthorizationContactInformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorizationContactInformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.AuthorizationContactInformation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorizationContactInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AuthorizationContactInformationQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorizationContactInformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorizationContactInformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.AuthorizationContactInformation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2AuthorizationContactInformation<
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
                Awaited<ReturnType<typeof client.api.v2.AuthorizationContactInformation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post>,
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
  const mutationDefaults = getPostApiV2AuthorizationContactInformationMutationOptions<
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

export function getApiV2BrandsQueryKey() {
  return ['api', '/api/v2/Brands'] as const
}

export function getApiV2BrandsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2BrandsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Brands.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Brands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
          >,
          ReturnType<typeof getApiV2BrandsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Brands.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BrandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2BrandsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Brands.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BundlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Bundles.$get>>,
) {
  return ['api', '/api/v2/Bundles', toValue(args)] as const
}

export function getApiV2BundlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Bundles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Bundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Bundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Bundles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
          >,
          ReturnType<typeof getApiV2BundlesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Bundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Bundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Bundles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Bundles.$post>,
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
  const mutationDefaults = getPostApiV2BundlesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2BundlesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/Bundles/:ID', toValue(args)] as const
}

export function getApiV2BundlesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BundlesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Bundles[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BundlesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BundlesIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Bundles)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BundlesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BundlesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Bundles[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2BundlesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2BundlesIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2BundlesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2BundlesIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Clients.$get>>,
) {
  return ['api', '/api/v2/Clients', toValue(args)] as const
}

export function getApiV2ClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Clients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
          >,
          ReturnType<typeof getApiV2ClientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ClientsClientIDCachedFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>
  >,
) {
  return ['api', '/api/v2/Clients/:ClientID/CachedFiles', toValue(args)] as const
}

export function getApiV2ClientsClientIDCachedFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClientsClientIDCachedFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Clients[':ClientID'].CachedFiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClientsClientIDCachedFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ClientsClientIDCachedFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsClientIDCachedFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClientsClientIDCachedFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Clients[':ClientID'].CachedFiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ClientsClientIDPackageReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
  >,
) {
  return ['api', '/api/v2/Clients/:ClientID/PackageReports', toValue(args)] as const
}

export function getApiV2ClientsClientIDPackageReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClientsClientIDPackageReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Clients[':ClientID'].PackageReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClientsClientIDPackageReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ClientsClientIDPackageReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsClientIDPackageReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClientsClientIDPackageReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Clients[':ClientID'].PackageReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ClientsClientIDPackageReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ClientsClientIDPackageReportsMutationOptions<
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

export function usePutApiV2ClientsClientIDPackageReportsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ClientsClientIDPackageReportsBatchMutationOptions<
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

export function getApiV2ClientsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/Clients/:ID', toValue(args)] as const
}

export function getApiV2ClientsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClientsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Clients[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClientsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ClientsIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Clients)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClientsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Clients[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ClientsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ClientsIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
    >
  >,
) {
  return ['api', '/api/v2/Clients/:ID/AvailableUpdateGroupSubscriptions', toValue(args)] as const
}

export function getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Clients[':ID'].AvailableUpdateGroupSubscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClientsIDAvailableUpdateGroupSubscriptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
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
                    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
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
                    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey>
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
              (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClientsIDAvailableUpdateGroupSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Clients[':ID'].AvailableUpdateGroupSubscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
  >,
) {
  return ['api', '/api/v2/Clients/:ID/UpdateGroupSubscriptions', toValue(args)] as const
}

export function getApiV2ClientsIDUpdateGroupSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Clients[':ID'].UpdateGroupSubscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClientsIDUpdateGroupSubscriptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
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
                    (typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']
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
                    (typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey>
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
            ReturnType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClientsIDUpdateGroupSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Clients[':ID'].UpdateGroupSubscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ContentDefinitionAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ContentDefinitionAttributesBatchMutationOptions<
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

export function usePutApiV2ContentDefinitionAttributesContentDefinitionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getPutApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationOptions<
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

export function useDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDMutationOptions<
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

export function getApiV2ContentDefinitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentDefinitions.$get>>,
) {
  return ['api', '/api/v2/ContentDefinitions', toValue(args)] as const
}

export function getApiV2ContentDefinitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentDefinitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentDefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentDefinitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContentDefinitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentDefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ContentDefinitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2ContentDefinitionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ContentDefinitionsContentDefinitionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
  >,
) {
  return ['api', '/api/v2/ContentDefinitions/:contentDefinitionID', toValue(args)] as const
}

export function getApiV2ContentDefinitionsContentDefinitionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentDefinitionsContentDefinitionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentDefinitionsContentDefinitionID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
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
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']
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
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDQueryKey>
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
            ReturnType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentDefinitionsContentDefinitionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ContentDefinitionsContentDefinitionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ContentDefinitionsContentDefinitionIDMutationOptions<
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

export function useDeleteApiV2ContentDefinitionsContentDefinitionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2ContentDefinitionsContentDefinitionIDMutationOptions<
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

export function getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes',
    toValue(args),
  ] as const
}

export function getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentDefinitionsContentDefinitionIDAttributes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
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
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
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
                    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey>
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
              (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2ContentDefinitionsContentDefinitionIDAttributesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ContentDefinitionsContentDefinitionIDAttributes<
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
    getPostApiV2ContentDefinitionsContentDefinitionIDAttributesMutationOptions<
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

export function usePostApiV2ContentDefinitionsContentDefinitionIDAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getPostApiV2ContentDefinitionsContentDefinitionIDAttributesBatchMutationOptions<
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

export function getApiV2ContentReleasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentReleases.$get>>,
) {
  return ['api', '/api/v2/ContentReleases', toValue(args)] as const
}

export function getApiV2ContentReleasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentReleases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentReleasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentReleases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentReleases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentReleases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ContentReleasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentReleasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentReleases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ContentReleases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentReleases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.ContentReleases.$post>,
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
  const mutationDefaults = getPostApiV2ContentReleasesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ContentReleasesContentReleaseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>
  >,
) {
  return ['api', '/api/v2/ContentReleases/:ContentReleaseId', toValue(args)] as const
}

export function getApiV2ContentReleasesContentReleaseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentReleasesContentReleaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentReleases[':ContentReleaseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentReleasesContentReleaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContentReleasesContentReleaseIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentReleasesContentReleaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentReleasesContentReleaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentReleases[':ContentReleaseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ContentReleasesContentReleaseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ContentReleasesContentReleaseIdMutationOptions<
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

export function useDeleteApiV2ContentReleasesContentReleaseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2ContentReleasesContentReleaseIdMutationOptions<
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

export function usePutApiV2ContentSubmissionAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ContentSubmissionAttributesBatchMutationOptions<
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

export function usePutApiV2ContentSubmissionAttributesContentSubmissionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getPutApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationOptions<
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

export function useDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDMutationOptions<
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

export function getApiV2ContentSubmissionTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>>,
) {
  return ['api', '/api/v2/ContentSubmissionTypes', toValue(args)] as const
}

export function getApiV2ContentSubmissionTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentSubmissionTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentSubmissionTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentSubmissionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContentSubmissionTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentSubmissionTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentSubmissionTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ContentSubmissionTypes<
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
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissionTypes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post>,
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
  const mutationDefaults = getPostApiV2ContentSubmissionTypesMutationOptions<
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

export function getApiV2ContentSubmissionTypesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>
  >,
) {
  return ['api', '/api/v2/ContentSubmissionTypes/:id', toValue(args)] as const
}

export function getApiV2ContentSubmissionTypesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentSubmissionTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentSubmissionTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentSubmissionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContentSubmissionTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentSubmissionTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentSubmissionTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ContentSubmissionTypesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ContentSubmissionTypesIdMutationOptions<
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

export function useDeleteApiV2ContentSubmissionTypesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2ContentSubmissionTypesIdMutationOptions<
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

export function getApiV2ContentSubmissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentSubmissions.$get>>,
) {
  return ['api', '/api/v2/ContentSubmissions', toValue(args)] as const
}

export function getApiV2ContentSubmissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentSubmissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentSubmissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ContentSubmissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContentSubmissionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ContentSubmissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentSubmissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ContentSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2ContentSubmissionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ContentSubmissionsContentSubmissionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
  >,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID', toValue(args)] as const
}

export function getApiV2ContentSubmissionsContentSubmissionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentSubmissionsContentSubmissionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentSubmissionsContentSubmissionID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
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
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']
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
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDQueryKey>
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
            ReturnType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentSubmissionsContentSubmissionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ContentSubmissionsContentSubmissionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ContentSubmissionsContentSubmissionIDMutationOptions<
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

export function useDeleteApiV2ContentSubmissionsContentSubmissionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2ContentSubmissionsContentSubmissionIDMutationOptions<
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

export function getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes',
    toValue(args),
  ] as const
}

export function getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentSubmissionsContentSubmissionIDAttributes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
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
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
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
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey>
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
              (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2ContentSubmissionsContentSubmissionIDAttributesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ContentSubmissionsContentSubmissionIDAttributes<
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
    getPostApiV2ContentSubmissionsContentSubmissionIDAttributesMutationOptions<
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

export function usePostApiV2ContentSubmissionsContentSubmissionIDAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getPostApiV2ContentSubmissionsContentSubmissionIDAttributesBatchMutationOptions<
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

export function getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
    >
  >,
) {
  return ['api', '/api/v2/ContentSubmissions/:contentSubmissionID/Status', toValue(args)] as const
}

export function getApiV2ContentSubmissionsContentSubmissionIDStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ContentSubmissions[':contentSubmissionID'].Status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContentSubmissionsContentSubmissionIDStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
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
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
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
                    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey>
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
              (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContentSubmissionsContentSubmissionIDStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ContentSubmissions[':contentSubmissionID'].Status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DealerByCountryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.DealerByCountry.$get>>,
) {
  return ['api', '/api/v2/DealerByCountry', toValue(args)] as const
}

export function getApiV2DealerByCountryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.DealerByCountry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DealerByCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.DealerByCountry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DealerByCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.DealerByCountry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
            >
          >,
          ReturnType<typeof getApiV2DealerByCountryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.DealerByCountry.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DealerByCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DealerByCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.DealerByCountry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DealersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Dealers.$get>>,
) {
  return ['api', '/api/v2/Dealers', toValue(args)] as const
}

export function getApiV2DealersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Dealers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DealersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Dealers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Dealers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Dealers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
          >,
          ReturnType<typeof getApiV2DealersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Dealers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DealersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DealersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Dealers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2DealersDealerCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>,
) {
  return ['api', '/api/v2/Dealers/:DealerCode', toValue(args)] as const
}

export function getApiV2DealersDealerCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DealersDealerCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Dealers[':DealerCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2DealersDealerCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2DealersDealerCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2DealersDealerCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DealersDealerCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Dealers[':DealerCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2FilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Files.$get>>,
) {
  return ['api', '/api/v2/Files', toValue(args)] as const
}

export function getApiV2FilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2FilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Files<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>
          >,
          ReturnType<typeof getApiV2FilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2FilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2FilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Files.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Files.$post>,
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
  const mutationDefaults = getPostApiV2FilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2FilesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/Files/:ID', toValue(args)] as const
}

export function getApiV2FilesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2FilesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Files[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2FilesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV2FilesIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FilesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2FilesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Files[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2FilesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2FilesIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV2FilesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2FilesIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2FilesIDFileContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>
  >,
) {
  return ['api', '/api/v2/Files/:ID/FileContents', toValue(args)] as const
}

export function getApiV2FilesIDFileContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2FilesIDFileContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Files[':ID'].FileContents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2FilesIDFileContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2FilesIDFileContentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FilesIDFileContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2FilesIDFileContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Files[':ID'].FileContents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2FilesIDFileContents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2FilesIDFileContentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2GlobalImageCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>>,
) {
  return ['api', '/api/v2/GlobalImageCategories', toValue(args)] as const
}

export function getApiV2GlobalImageCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GlobalImageCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.GlobalImageCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GlobalImageCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2GlobalImageCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImageCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImageCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GlobalImageCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.GlobalImageCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2GlobalImageCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2GlobalImageCategoriesMutationOptions<
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

export function getApiV2GlobalImageCategoriesIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>
  >,
) {
  return ['api', '/api/v2/GlobalImageCategories/:ID', toValue(args)] as const
}

export function getApiV2GlobalImageCategoriesIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GlobalImageCategoriesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.GlobalImageCategories[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GlobalImageCategoriesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2GlobalImageCategoriesIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImageCategoriesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GlobalImageCategoriesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.GlobalImageCategories[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GlobalImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.GlobalImages.$get>>,
) {
  return ['api', '/api/v2/GlobalImages', toValue(args)] as const
}

export function getApiV2GlobalImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.GlobalImages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GlobalImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.GlobalImages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GlobalImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.GlobalImages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>
            >
          >,
          ReturnType<typeof getApiV2GlobalImagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GlobalImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.GlobalImages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2GlobalImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.GlobalImages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.GlobalImages.$post>,
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
  const mutationDefaults = getPostApiV2GlobalImagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2GlobalImagesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/GlobalImages/:ID', toValue(args)] as const
}

export function getApiV2GlobalImagesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GlobalImagesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.GlobalImages[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GlobalImagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2GlobalImagesIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImagesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GlobalImagesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.GlobalImages[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2GlobalImagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2GlobalImagesIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2GlobalImagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2GlobalImagesIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2GlobalImagesIDImageContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>
  >,
) {
  return ['api', '/api/v2/GlobalImages/:ID/ImageContents', toValue(args)] as const
}

export function getApiV2GlobalImagesIDImageContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GlobalImagesIDImageContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.GlobalImages[':ID'].ImageContents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GlobalImagesIDImageContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2GlobalImagesIDImageContentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GlobalImagesIDImageContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GlobalImagesIDImageContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.GlobalImages[':ID'].ImageContents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2GlobalImagesIDImageContents<
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
                  ReturnType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>,
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
  const mutationDefaults = getPutApiV2GlobalImagesIDImageContentsMutationOptions<
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

export function getApiV2LanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Languages.$get>>,
) {
  return ['api', '/api/v2/Languages', toValue(args)] as const
}

export function getApiV2LanguagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Languages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Languages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Languages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>
            >
          >,
          ReturnType<typeof getApiV2LanguagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Languages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Languages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Languages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Languages.$post>,
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
  const mutationDefaults = getPostApiV2LanguagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2LanguagesLocaleIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>,
) {
  return ['api', '/api/v2/Languages/:LocaleID', toValue(args)] as const
}

export function getApiV2LanguagesLocaleIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LanguagesLocaleIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Languages[':LocaleID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LanguagesLocaleID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2LanguagesLocaleIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguagesLocaleIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LanguagesLocaleIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Languages[':LocaleID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2LanguagesLocaleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2LanguagesLocaleIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2LanguagesLocaleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2LanguagesLocaleIDMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV2LicenseActivations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2LicenseActivationsMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV2LicenseActivationsRegisterEDTLite<
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
                Awaited<ReturnType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>,
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
  const mutationDefaults = getPostApiV2LicenseActivationsRegisterEDTLiteMutationOptions<
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

export function usePutApiV2LicenseActivationsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2LicenseActivationsIDMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV2LicenseActivationsIDConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2LicenseActivationsIDConfirmMutationOptions<
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

export function getApiV2LicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Licenses.$get>>,
) {
  return ['api', '/api/v2/Licenses', toValue(args)] as const
}

export function getApiV2LicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Licenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>
            >
          >,
          ReturnType<typeof getApiV2LicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LicensesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/Licenses/:ID', toValue(args)] as const
}

export function getApiV2LicensesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LicensesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Licenses[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LicensesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2LicensesIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Licenses)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LicensesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LicensesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Licenses[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Logs.$get>>,
) {
  return ['api', '/api/v2/Logs', toValue(args)] as const
}

export function getApiV2LogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>
          >,
          ReturnType<typeof getApiV2LogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2LogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Logs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Logs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Logs.$post>,
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
  const mutationDefaults = getPostApiV2LogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2LogsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/Logs/:ID', toValue(args)] as const
}

export function getApiV2LogsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LogsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Logs[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LogsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV2LogsIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Logs)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LogsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LogsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Logs[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Notifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Notifications.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.Notifications.$post>,
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
  const mutationDefaults = getPostApiV2NotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PackageTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PackageTypes.$get>>,
) {
  return ['api', '/api/v2/PackageTypes', toValue(args)] as const
}

export function getApiV2PackageTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PackageTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PackageTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.PackageTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PackageTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PackageTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PackageTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackageTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PackageTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.PackageTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2PackageTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.PackageTypes.$post>,
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
  const mutationDefaults = getPostApiV2PackageTypesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PackageTypesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/PackageTypes/:ID', toValue(args)] as const
}

export function getApiV2PackageTypesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PackageTypesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.PackageTypes[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PackageTypesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PackageTypesIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackageTypesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PackageTypesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.PackageTypes[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2PackageTypesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2PackageTypesIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2PackageTypesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2PackageTypesIDMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV2PackageTypesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2PackageTypesIdUsersUserIDMutationOptions<
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

export function useDeleteApiV2PackageTypesIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2PackageTypesIdUsersUserIDMutationOptions<
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

export function getApiV2PackageTypetoBundlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>>,
) {
  return ['api', '/api/v2/PackageTypetoBundles', toValue(args)] as const
}

export function getApiV2PackageTypetoBundlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PackageTypetoBundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.PackageTypetoBundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PackageTypetoBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PackageTypetoBundlesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PackageTypetoBundles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackageTypetoBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PackageTypetoBundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.PackageTypetoBundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2PackageTypetoBundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2PackageTypetoBundlesMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV2PackageTypetoBundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2PackageTypetoBundlesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2PackageTypetoBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2PackageTypetoBundlesMutationOptions<
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

export function getApiV2PackagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Packages.$get>>,
) {
  return ['api', '/api/v2/Packages', toValue(args)] as const
}

export function getApiV2PackagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Packages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Packages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Packages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PackagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Packages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Packages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Packages.$post>,
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
  const mutationDefaults = getPostApiV2PackagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PackagesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/Packages/:ID', toValue(args)] as const
}

export function getApiV2PackagesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PackagesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Packages[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PackagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PackagesIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Packages)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PackagesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PackagesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Packages[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2PackagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2PackagesIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2PackagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2PackagesIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Permissions.$get>>,
) {
  return ['api', '/api/v2/Permissions', toValue(args)] as const
}

export function getApiV2PermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Permissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Permissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Permissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PermissionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Permissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Permissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Permissions.$post>,
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
  const mutationDefaults = getPostApiV2PermissionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PermissionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>>,
) {
  return ['api', '/api/v2/Permissions/:id', toValue(args)] as const
}

export function getApiV2PermissionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PermissionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Permissions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PermissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PermissionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Permissions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PermissionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PermissionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Permissions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2PermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2PermissionsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2PermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2PermissionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PriorityPackagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PriorityPackages.$get>>,
) {
  return ['api', '/api/v2/PriorityPackages', toValue(args)] as const
}

export function getApiV2PriorityPackagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PriorityPackages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PriorityPackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.PriorityPackages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PriorityPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.PriorityPackages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PriorityPackagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PriorityPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PriorityPackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.PriorityPackages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2PriorityPackages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.PriorityPackages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.PriorityPackages.$post>,
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
  const mutationDefaults = getPostApiV2PriorityPackagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PriorityPackagesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/PriorityPackages/:ID', toValue(args)] as const
}

export function getApiV2PriorityPackagesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PriorityPackagesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.PriorityPackages[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PriorityPackagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PriorityPackagesIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PriorityPackagesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PriorityPackagesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.PriorityPackages[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV2PriorityPackagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2PriorityPackagesIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ReleasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Releases.$get>>,
) {
  return ['api', '/api/v2/Releases', toValue(args)] as const
}

export function getApiV2ReleasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Releases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReleasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Releases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Releases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Releases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ReleasesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReleasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Releases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Releases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Releases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Releases.$post>,
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
  const mutationDefaults = getPostApiV2ReleasesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ReleasesReleaseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>,
) {
  return ['api', '/api/v2/Releases/:ReleaseId', toValue(args)] as const
}

export function getApiV2ReleasesReleaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReleasesReleaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Releases[':ReleaseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReleasesReleaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReleasesReleaseIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReleasesReleaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReleasesReleaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Releases[':ReleaseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2ReleasesReleaseIdBundleBundleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2ReleasesReleaseIdBundleBundleIdMutationOptions<
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

export function useDeleteApiV2ReleasesReleaseIdBundleBundleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2ReleasesReleaseIdBundleBundleIdMutationOptions<
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

export function usePutApiV2ReleasesReleaseId2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ReleasesReleaseId2MutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ReportingBundleStatusSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>,
) {
  return ['api', '/api/v2/Reporting/BundleStatusSummary', toValue(args)] as const
}

export function getApiV2ReportingBundleStatusSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingBundleStatusSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.BundleStatusSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingBundleStatusSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingBundleStatusSummaryQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingBundleStatusSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingBundleStatusSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.BundleStatusSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingBundlesInUpdateGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>
  >,
) {
  return ['api', '/api/v2/Reporting/BundlesInUpdateGroup', toValue(args)] as const
}

export function getApiV2ReportingBundlesInUpdateGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingBundlesInUpdateGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.BundlesInUpdateGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingBundlesInUpdateGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingBundlesInUpdateGroupQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingBundlesInUpdateGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingBundlesInUpdateGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.BundlesInUpdateGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingClientInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>>,
) {
  return ['api', '/api/v2/Reporting/ClientInfo', toValue(args)] as const
}

export function getApiV2ReportingClientInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingClientInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.ClientInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingClientInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingClientInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.ClientInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingClientInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingClientInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.ClientInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>
  >,
) {
  return ['api', '/api/v2/Reporting/CurrentPackagesInUpdateGroup', toValue(args)] as const
}

export function getApiV2ReportingCurrentPackagesInUpdateGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingCurrentPackagesInUpdateGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingCurrentPackagesInUpdateGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingGetClientQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>>,
) {
  return ['api', '/api/v2/Reporting/GetClient', toValue(args)] as const
}

export function getApiV2ReportingGetClientQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingGetClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.GetClient.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingGetClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingGetClientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.GetClient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingGetClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingGetClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.GetClient.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingGetSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>,
) {
  return ['api', '/api/v2/Reporting/GetSubscriptions', toValue(args)] as const
}

export function getApiV2ReportingGetSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingGetSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.GetSubscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingGetSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingGetSubscriptionsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Reporting.GetSubscriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingGetSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingGetSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.GetSubscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingPackageStatusSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>
  >,
) {
  return ['api', '/api/v2/Reporting/PackageStatusSummary', toValue(args)] as const
}

export function getApiV2ReportingPackageStatusSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingPackageStatusSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.PackageStatusSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingPackageStatusSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingPackageStatusSummaryQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingPackageStatusSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingPackageStatusSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.PackageStatusSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingRegisteredClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>>,
) {
  return ['api', '/api/v2/Reporting/RegisteredClients', toValue(args)] as const
}

export function getApiV2ReportingRegisteredClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingRegisteredClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.RegisteredClients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingRegisteredClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingRegisteredClientsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Reporting.RegisteredClients.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingRegisteredClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingRegisteredClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.RegisteredClients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingUpdateGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>>,
) {
  return ['api', '/api/v2/Reporting/UpdateGroups', toValue(args)] as const
}

export function getApiV2ReportingUpdateGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingUpdateGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.UpdateGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingUpdateGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingUpdateGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateGroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingUpdateGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingUpdateGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.UpdateGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ReportingUpdateMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>,
) {
  return ['api', '/api/v2/Reporting/UpdateMetrics', toValue(args)] as const
}

export function getApiV2ReportingUpdateMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ReportingUpdateMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Reporting.UpdateMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ReportingUpdateMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2ReportingUpdateMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Reporting.UpdateMetrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ReportingUpdateMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ReportingUpdateMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Reporting.UpdateMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2RolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Roles.$get>>,
) {
  return ['api', '/api/v2/Roles', toValue(args)] as const
}

export function getApiV2RolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Roles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>
          >,
          ReturnType<typeof getApiV2RolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Roles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Roles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Roles.$post>,
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
  const mutationDefaults = getPostApiV2RolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2RolesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>>,
) {
  return ['api', '/api/v2/Roles/:id', toValue(args)] as const
}

export function getApiV2RolesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RolesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Roles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RolesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV2RolesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RolesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Roles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2RolesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2RolesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV2RolesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2RolesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2RolesIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>
  >,
) {
  return ['api', '/api/v2/Roles/:id/Permissions', toValue(args)] as const
}

export function getApiV2RolesIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RolesIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Roles[':id'].Permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RolesIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2RolesIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RolesIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Roles[':id'].Permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2RolesIdPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2RolesIdPermissionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2RolesIdUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>,
) {
  return ['api', '/api/v2/Roles/:id/Users', toValue(args)] as const
}

export function getApiV2RolesIdUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RolesIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Roles[':id'].Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RolesIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2RolesIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RolesIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RolesIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Roles[':id'].Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2RolesIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2RolesIdUsersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2StringDefinitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.StringDefinitions.$get>>,
) {
  return ['api', '/api/v2/StringDefinitions', toValue(args)] as const
}

export function getApiV2StringDefinitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.StringDefinitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StringDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.StringDefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StringDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.StringDefinitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
            >
          >,
          ReturnType<typeof getApiV2StringDefinitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StringDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.StringDefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2StringDefinitionsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2StringDefinitionsBatchMutationOptions<
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

export function usePostApiV2StringDefinitionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2StringDefinitionsBatchMutationOptions<
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

export function getApiV2StringDefinitionsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/StringDefinitions/:ID', toValue(args)] as const
}

export function getApiV2StringDefinitionsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StringDefinitionsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.StringDefinitions[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StringDefinitionsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2StringDefinitionsIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringDefinitionsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StringDefinitionsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.StringDefinitions[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2StringTranslationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.StringTranslations.$get>>,
) {
  return ['api', '/api/v2/StringTranslations', toValue(args)] as const
}

export function getApiV2StringTranslationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.StringTranslations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StringTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.StringTranslations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StringTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.StringTranslations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2StringTranslationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.StringTranslations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StringTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.StringTranslations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2StringTranslationsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2StringTranslationsBatchMutationOptions<
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

export function getApiV2StringTranslationsStringIdLanguageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']>
  >,
) {
  return ['api', '/api/v2/StringTranslations/:stringId/:languageId', toValue(args)] as const
}

export function getApiV2StringTranslationsStringIdLanguageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StringTranslationsStringIdLanguageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.StringTranslations[':stringId'][':languageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StringTranslationsStringIdLanguageId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']>
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
                    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
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
                    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2StringTranslationsStringIdLanguageIdQueryKey>
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
              (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StringTranslationsStringIdLanguageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StringTranslationsStringIdLanguageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.StringTranslations[':stringId'][':languageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2StringTranslationsStringIdLanguageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2StringTranslationsStringIdLanguageIdMutationOptions<
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

export function getApiV2TranslationKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationKeys.$get>>,
) {
  return ['api', '/api/v2/TranslationKeys', toValue(args)] as const
}

export function getApiV2TranslationKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationKeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationKeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationKeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
            >
          >,
          ReturnType<typeof getApiV2TranslationKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2TranslationKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationKeys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.TranslationKeys.$post>,
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
  const mutationDefaults = getPostApiV2TranslationKeysMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2TranslationKeysIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/TranslationKeys/:ID', toValue(args)] as const
}

export function getApiV2TranslationKeysIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationKeysIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationKeys[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationKeysID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationKeysIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationKeysIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationKeysIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationKeys[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2TranslationKeysID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationKeysIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2TranslationRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationRequests.$get>>,
) {
  return ['api', '/api/v2/TranslationRequests', toValue(args)] as const
}

export function getApiV2TranslationRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationRequests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationRequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationRequests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationRequests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationRequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2TranslationRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2TranslationRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2TranslationRequestsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>
  >,
) {
  return ['api', '/api/v2/TranslationRequests/:Id', toValue(args)] as const
}

export function getApiV2TranslationRequestsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationRequests[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationRequests[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2TranslationRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV2TranslationRequestsIdStrings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationRequestsIdStringsMutationOptions<
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

export function usePutApiV2TranslationSetAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationSetAttributesBatchMutationOptions<
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

export function usePutApiV2TranslationSetAttributesID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationSetAttributesIDMutationOptions<
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

export function useDeleteApiV2TranslationSetAttributesID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2TranslationSetAttributesIDMutationOptions<
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

export function getApiV2TranslationSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationSets.$get>>,
) {
  return ['api', '/api/v2/TranslationSets', toValue(args)] as const
}

export function getApiV2TranslationSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationSets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationSets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.TranslationSets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
            >
          >,
          ReturnType<typeof getApiV2TranslationSetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.TranslationSets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationSets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TranslationSetsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/TranslationSets/:ID', toValue(args)] as const
}

export function getApiV2TranslationSetsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationSetsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationSetsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationSetsIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationSetsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationSets[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2TranslationSetsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationSetsIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2TranslationSetsIDAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>
  >,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Attributes', toValue(args)] as const
}

export function getApiV2TranslationSetsIDAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationSetsIDAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationSetsIDAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationSetsIDAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationSetsIDAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationSets[':ID'].Attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2TranslationSetsIDAttributes<
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
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>,
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
  const mutationDefaults = getPostApiV2TranslationSetsIDAttributesMutationOptions<
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

export function usePostApiV2TranslationSetsIDAttributesBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2TranslationSetsIDAttributesBatchMutationOptions<
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

export function getApiV2TranslationSetsIDSourceStringsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
  >,
) {
  return ['api', '/api/v2/TranslationSets/:ID/SourceStrings', toValue(args)] as const
}

export function getApiV2TranslationSetsIDSourceStringsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationSetsIDSourceStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].SourceStrings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationSetsIDSourceStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationSetsIDSourceStringsQueryKey>
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
            ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDSourceStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationSetsIDSourceStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationSets[':ID'].SourceStrings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TranslationSetsIDStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>
  >,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Statistics', toValue(args)] as const
}

export function getApiV2TranslationSetsIDStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationSetsIDStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationSetsIDStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationSetsIDStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationSetsIDStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationSets[':ID'].Statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TranslationSetsIDStringsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>
  >,
) {
  return ['api', '/api/v2/TranslationSets/:ID/Strings', toValue(args)] as const
}

export function getApiV2TranslationSetsIDStringsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TranslationSetsIDStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.TranslationSets[':ID'].Strings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TranslationSetsIDStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2TranslationSetsIDStringsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TranslationSetsIDStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TranslationSetsIDStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.TranslationSets[':ID'].Strings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2TranslationSetsIDStrings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2TranslationSetsIDStringsMutationOptions<
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

export function getApiV2UpdateGroupClientRelationshipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>
  >,
) {
  return ['api', '/api/v2/UpdateGroupClientRelationships', toValue(args)] as const
}

export function getApiV2UpdateGroupClientRelationshipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateGroupClientRelationshipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroupClientRelationships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroupClientRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupClientRelationshipsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupClientRelationshipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateGroupClientRelationshipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroupClientRelationships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UpdateGroupClientRelationships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2UpdateGroupClientRelationshipsMutationOptions<
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

export function usePostApiV2UpdateGroupClientRelationships<
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
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupClientRelationships.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post>,
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
  const mutationDefaults = getPostApiV2UpdateGroupClientRelationshipsMutationOptions<
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

export function getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
    >
  >,
) {
  return ['api', '/api/v2/UpdateGroupClientRelationships/:RelationshipID', toValue(args)] as const
}

export function getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroupClientRelationshipsRelationshipID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
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
                    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
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
                    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey>
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
              (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateGroupClientRelationshipsRelationshipIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UpdateGroupClientRelationshipsRelationshipID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2UpdateGroupClientRelationshipsRelationshipIDMutationOptions<
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

export function getApiV2UpdateGroupSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>,
) {
  return ['api', '/api/v2/UpdateGroupSubscriptions', toValue(args)] as const
}

export function getApiV2UpdateGroupSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateGroupSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroupSubscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroupSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupSubscriptionsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateGroupSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroupSubscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2UpdateGroupSubscriptions<
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
                Awaited<ReturnType<typeof client.api.v2.UpdateGroupSubscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post>,
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
  const mutationDefaults = getPostApiV2UpdateGroupSubscriptionsMutationOptions<
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

export function usePutApiV2UpdateGroupSubscriptionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2UpdateGroupSubscriptionsBatchMutationOptions<
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

export function usePostApiV2UpdateGroupSubscriptionsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2UpdateGroupSubscriptionsBatchMutationOptions<
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

export function getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID',
    toValue(args),
  ] as const
}

export function getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
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
                    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
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
                    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey>
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
              (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getPutApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationOptions<
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

export function useDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDMutationOptions<
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

export function getApiV2UpdateGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateGroups.$get>>,
) {
  return ['api', '/api/v2/UpdateGroups', toValue(args)] as const
}

export function getApiV2UpdateGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2UpdateGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateGroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UpdateGroups.$post>,
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
  const mutationDefaults = getPostApiV2UpdateGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2UpdateGroupsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>,
) {
  return ['api', '/api/v2/UpdateGroups/:ID', toValue(args)] as const
}

export function getApiV2UpdateGroupsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateGroupsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroups[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroupsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupsIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateGroupsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroups[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UpdateGroupsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2UpdateGroupsIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2UpdateGroupsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2UpdateGroupsIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2UpdateGroupsIDBundlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>
  >,
) {
  return ['api', '/api/v2/UpdateGroups/:ID/Bundles', toValue(args)] as const
}

export function getApiV2UpdateGroupsIDBundlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateGroupsIDBundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateGroups[':ID'].Bundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateGroupsIDBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UpdateGroupsIDBundlesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateGroupsIDBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateGroupsIDBundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateGroups[':ID'].Bundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2UpdateGroupsIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2UpdateGroupsIdUsersUserIDMutationOptions<
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

export function useDeleteApiV2UpdateGroupsIdUsersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2UpdateGroupsIdUsersUserIDMutationOptions<
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

export function getApiV2UpdateSystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateSystem.$get>>,
) {
  return ['api', '/api/v2/UpdateSystem', toValue(args)] as const
}

export function getApiV2UpdateSystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateSystem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UpdateSystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UpdateSystem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UpdateSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UpdateSystem.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>
            >
          >,
          ReturnType<typeof getApiV2UpdateSystemQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UpdateSystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UpdateSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UpdateSystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UpdateSystem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UserContentDefinitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>>,
) {
  return ['api', '/api/v2/UserContentDefinitions', toValue(args)] as const
}

export function getApiV2UserContentDefinitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UserContentDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UserContentDefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UserContentDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2UserContentDefinitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UserContentDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UserContentDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UserContentDefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2UserContentDefinitions<
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
                Awaited<ReturnType<typeof client.api.v2.UserContentDefinitions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.UserContentDefinitions.$post>,
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
  const mutationDefaults = getPostApiV2UserContentDefinitionsMutationOptions<
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

export function getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
    >
  >,
) {
  return ['api', '/api/v2/UserContentDefinitions/:userContentDefinitionID', toValue(args)] as const
}

export function getApiV2UserContentDefinitionsUserContentDefinitionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UserContentDefinitionsUserContentDefinitionID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
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
                    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
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
                    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey>
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
              (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UserContentDefinitionsUserContentDefinitionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV2UserContentDefinitionsUserContentDefinitionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteApiV2UserContentDefinitionsUserContentDefinitionIDMutationOptions<
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

export function getApiV2UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.$get>>,
) {
  return ['api', '/api/v2/Users', toValue(args)] as const
}

export function getApiV2UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>
          >,
          ReturnType<typeof getApiV2UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.Users.$post>,
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
  const mutationDefaults = getPostApiV2UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2UsersCurrentQueryKey() {
  return ['api', '/api/v2/Users/Current'] as const
}

export function getApiV2UsersCurrentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2UsersCurrentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users.Current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>
            >
          >,
          ReturnType<typeof getApiV2UsersCurrentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2UsersCurrentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users.Current.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UsersCurrent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.Users.Current.$put>,
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
  const mutationDefaults = getPutApiV2UsersCurrentMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2UsersCurrentPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>>,
) {
  return ['api', '/api/v2/Users/Current/Permissions', toValue(args)] as const
}

export function getApiV2UsersCurrentPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersCurrentPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users.Current.Permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersCurrentPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2UsersCurrentPermissionsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.Users.Current.Permissions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersCurrentPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersCurrentPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users.Current.Permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UsersCurrentRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>>,
) {
  return ['api', '/api/v2/Users/Current/Roles', toValue(args)] as const
}

export function getApiV2UsersCurrentRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersCurrentRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users.Current.Roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersCurrentRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2UsersCurrentRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Users.Current.Roles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersCurrentRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersCurrentRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users.Current.Roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>>,
) {
  return ['api', '/api/v2/Users/:id', toValue(args)] as const
}

export function getApiV2UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV2UsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2UsersIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>
  >,
) {
  return ['api', '/api/v2/Users/:id/Permissions', toValue(args)] as const
}

export function getApiV2UsersIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users[':id'].Permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UsersIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users[':id'].Permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UsersIdRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>,
) {
  return ['api', '/api/v2/Users/:id/Roles', toValue(args)] as const
}

export function getApiV2UsersIdRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Users[':id'].Roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UsersIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Users[':id'].Roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2UsersIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2UsersIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2VoucherHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.VoucherHistory.$get>>,
) {
  return ['api', '/api/v2/VoucherHistory', toValue(args)] as const
}

export function getApiV2VoucherHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.VoucherHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VoucherHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.VoucherHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VoucherHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.VoucherHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
            >
          >,
          ReturnType<typeof getApiV2VoucherHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.VoucherHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VoucherHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VoucherHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.VoucherHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VouchersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Vouchers.$get>>,
) {
  return ['api', '/api/v2/Vouchers', toValue(args)] as const
}

export function getApiV2VouchersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Vouchers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VouchersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Vouchers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Vouchers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.Vouchers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>
            >
          >,
          ReturnType<typeof getApiV2VouchersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VouchersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VouchersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Vouchers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Vouchers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.Vouchers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.Vouchers.$post>,
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
  const mutationDefaults = getPostApiV2VouchersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2VouchersVoucherCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>,
) {
  return ['api', '/api/v2/Vouchers/:VoucherCode', toValue(args)] as const
}

export function getApiV2VouchersVoucherCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VouchersVoucherCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Vouchers[':VoucherCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VouchersVoucherCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2VouchersVoucherCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VouchersVoucherCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VouchersVoucherCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Vouchers[':VoucherCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2VouchersVoucherCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2VouchersVoucherCodeMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2VouchersVoucherCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2VouchersVoucherCodeMutationOptions<
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

export function getApiV2VouchersVoucherCodeVoucherHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
  >,
) {
  return ['api', '/api/v2/Vouchers/:VoucherCode/VoucherHistory', toValue(args)] as const
}

export function getApiV2VouchersVoucherCodeVoucherHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VouchersVoucherCodeVoucherHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.Vouchers[':VoucherCode'].VoucherHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VouchersVoucherCodeVoucherHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
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
                    (typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']
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
                    (typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2VouchersVoucherCodeVoucherHistoryQueryKey>
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
            ReturnType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VouchersVoucherCodeVoucherHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VouchersVoucherCodeVoucherHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.Vouchers[':VoucherCode'].VoucherHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.activities.$get>>,
) {
  return ['api', '/api/v2/activities', toValue(args)] as const
}

export function getApiV2ActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Activities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.activities.$post>,
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
  const mutationDefaults = getPostApiV2ActivitiesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ActivitiesActivityIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>
  >,
) {
  return ['api', '/api/v2/activities/:activityID', toValue(args)] as const
}

export function getApiV2ActivitiesActivityIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ActivitiesActivityIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.activities[':activityID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ActivitiesActivityID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ActivitiesActivityIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.activities)[':activityID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivitiesActivityIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ActivitiesActivityIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.activities[':activityID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ActivitiesActivityID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ActivitiesActivityIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2ActivitiesActivityID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2ActivitiesActivityIDMutationOptions<
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

export function getApiV2ActivityRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.activityRuns.$get>>,
) {
  return ['api', '/api/v2/activityRuns', toValue(args)] as const
}

export function getApiV2ActivityRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.activityRuns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ActivityRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.activityRuns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ActivityRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.activityRuns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ActivityRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.activityRuns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivityRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ActivityRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.activityRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ActivityRunsActivityRunIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>
  >,
) {
  return ['api', '/api/v2/activityRuns/:activityRunID', toValue(args)] as const
}

export function getApiV2ActivityRunsActivityRunIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ActivityRunsActivityRunIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.activityRuns[':activityRunID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ActivityRunsActivityRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ActivityRunsActivityRunIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivityRunsActivityRunIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ActivityRunsActivityRunIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.activityRuns[':activityRunID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ActivityRunsActivityRunID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ActivityRunsActivityRunIDMutationOptions<
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

export function getApiV2ActivityRunsActivityRunIDStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
  >,
) {
  return ['api', '/api/v2/activityRuns/:activityRunID/status', toValue(args)] as const
}

export function getApiV2ActivityRunsActivityRunIDStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ActivityRunsActivityRunIDStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.activityRuns[':activityRunID'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ActivityRunsActivityRunIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
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
                    (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']
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
                    (typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ActivityRunsActivityRunIDStatusQueryKey>
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
            ReturnType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ActivityRunsActivityRunIDStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ActivityRunsActivityRunIDStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.activityRuns[':activityRunID'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2ActivityRunsActivityRunIDStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2ActivityRunsActivityRunIDStatusMutationOptions<
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

export function getApiV2AgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.agents.$get>>,
) {
  return ['api', '/api/v2/agents', toValue(args)] as const
}

export function getApiV2AgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.agents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.agents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
          >,
          ReturnType<typeof getApiV2AgentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Agents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.agents.$post>,
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
  const mutationDefaults = getPostApiV2AgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2AgentsCurrentQueryKey() {
  return ['api', '/api/v2/agents/Current'] as const
}

export function getApiV2AgentsCurrentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2AgentsCurrentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agents.Current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgentsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AgentsCurrentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agents.Current.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AgentsCurrentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agents.Current.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AgentsCurrentActivityRunQueryKey() {
  return ['api', '/api/v2/agents/Current/ActivityRun'] as const
}

export function getApiV2AgentsCurrentActivityRunQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2AgentsCurrentActivityRunQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agents.Current.ActivityRun.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgentsCurrentActivityRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AgentsCurrentActivityRunQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.agents.Current.ActivityRun.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsCurrentActivityRunQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2AgentsCurrentActivityRunQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agents.Current.ActivityRun.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AgentsAgentIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>>,
) {
  return ['api', '/api/v2/agents/:agentID', toValue(args)] as const
}

export function getApiV2AgentsAgentIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AgentsAgentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agents[':agentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgentsAgentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AgentsAgentIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsAgentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AgentsAgentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agents[':agentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AgentsAgentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AgentsAgentIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2AgentsAgentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2AgentsAgentIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2AgentsAgentIDActivityRunQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>
  >,
) {
  return ['api', '/api/v2/agents/:agentID/ActivityRun', toValue(args)] as const
}

export function getApiV2AgentsAgentIDActivityRunQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AgentsAgentIDActivityRunQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agents[':agentID'].ActivityRun.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgentsAgentIDActivityRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AgentsAgentIDActivityRunQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgentsAgentIDActivityRunQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AgentsAgentIDActivityRunQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agents[':agentID'].ActivityRun.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2AgentsAgentIDActivityRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AgentsAgentIDActivityRunMutationOptions<
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

export function usePutApiV2AgentsAgentIDStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2AgentsAgentIDStatusMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2JobRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobRuns.$get>>,
) {
  return ['api', '/api/v2/jobRuns', toValue(args)] as const
}

export function getApiV2JobRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobRuns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2JobRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.jobRuns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2JobRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobRuns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
          >,
          ReturnType<typeof getApiV2JobRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2JobRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2JobRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.jobRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2JobRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobRuns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.jobRuns.$post>,
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
  const mutationDefaults = getPostApiV2JobRunsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2JobRunsJobRunIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>,
) {
  return ['api', '/api/v2/jobRuns/:jobRunID', toValue(args)] as const
}

export function getApiV2JobRunsJobRunIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2JobRunsJobRunIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.jobRuns[':jobRunID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2JobRunsJobRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2JobRunsJobRunIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2JobRunsJobRunIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2JobRunsJobRunIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.jobRuns[':jobRunID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2JobRunsJobRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2JobRunsJobRunIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2JobRunsJobRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2JobRunsJobRunIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2JobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobs.$get>>,
) {
  return ['api', '/api/v2/jobs', toValue(args)] as const
}

export function getApiV2JobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2JobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
          >,
          ReturnType<typeof getApiV2JobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2JobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2JobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.jobs.$post>,
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
  const mutationDefaults = getPostApiV2JobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2JobsJobIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>>,
) {
  return ['api', '/api/v2/jobs/:jobID', toValue(args)] as const
}

export function getApiV2JobsJobIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2JobsJobIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.jobs[':jobID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2JobsJobID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2JobsJobIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.jobs)[':jobID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2JobsJobIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2JobsJobIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.jobs[':jobID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2JobsJobID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2JobsJobIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV2JobsJobID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV2JobsJobIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2StepsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.steps.$get>>,
) {
  return ['api', '/api/v2/steps', toValue(args)] as const
}

export function getApiV2StepsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.steps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.steps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Steps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.steps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>
          >,
          ReturnType<typeof getApiV2StepsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2StepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.steps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2Steps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.steps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.steps.$post>,
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
  const mutationDefaults = getPostApiV2StepsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2StepsStepIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>>,
) {
  return ['api', '/api/v2/steps/:stepID', toValue(args)] as const
}

export function getApiV2StepsStepIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StepsStepIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.steps[':stepID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StepsStepID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2StepsStepIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.steps)[':stepID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StepsStepIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StepsStepIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.steps[':stepID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2StepsStepID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV2StepsStepIDMutationOptions<TError, TOnMutateResult>(
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
