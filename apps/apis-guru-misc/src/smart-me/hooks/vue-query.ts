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

export function getPutApiAccessTokenMutationKey() {
  return ['api', '/api/AccessToken', 'PUT'] as const
}

export function getPutApiAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.AccessToken.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.AccessToken.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.AccessToken.$put>) {
      return parseResponse(client.api.AccessToken.$put(args, options))
    },
  })
}

export function usePutApiAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.AccessToken.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.AccessToken.$put>,
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
  const mutationDefaults = getPutApiAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiAccountLoginQueryKey() {
  return ['api', '/api/Account/login'] as const
}

export function getApiAccountLoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAccountLoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Account.login.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>
            >
          >,
          ReturnType<typeof getApiAccountLoginQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAccountLoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Account.login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAccountLoginMutationKey() {
  return ['api', '/api/Account/login', 'POST'] as const
}

export function getPostApiAccountLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountLoginMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.Account.login.$post(undefined, options))
    },
  })
}

export function usePostApiAccountLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiAccountLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiActionsMutationKey() {
  return ['api', '/api/Actions', 'POST'] as const
}

export function getPostApiActionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Actions.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.Actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Actions.$post>) {
      return parseResponse(client.api.Actions.$post(args, options))
    },
  })
}

export function usePostApiActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Actions.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.Actions.$post>,
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
  const mutationDefaults = getPostApiActionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Actions)[':id']['$get']>>,
) {
  return ['api', '/api/Actions/:id', toValue(args)] as const
}

export function getApiActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAdditionalDeviceInformationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>
  >,
) {
  return ['api', '/api/AdditionalDeviceInformation/:id', toValue(args)] as const
}

export function getApiAdditionalDeviceInformationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAdditionalDeviceInformationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.AdditionalDeviceInformation[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAdditionalDeviceInformationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdditionalDeviceInformationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdditionalDeviceInformationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAdditionalDeviceInformationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.AdditionalDeviceInformation[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCustomDeviceQueryKey() {
  return ['api', '/api/CustomDevice'] as const
}

export function getApiCustomDeviceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiCustomDeviceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.CustomDevice.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiCustomDevice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>
            >
          >,
          ReturnType<typeof getApiCustomDeviceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiCustomDeviceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.CustomDevice.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiCustomDeviceMutationKey() {
  return ['api', '/api/CustomDevice', 'POST'] as const
}

export function getPostApiCustomDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.CustomDevice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCustomDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.CustomDevice.$post>) {
      return parseResponse(client.api.CustomDevice.$post(args, options))
    },
  })
}

export function usePostApiCustomDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.CustomDevice.$post>,
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
  const mutationDefaults = getPostApiCustomDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getApiCustomDeviceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>>,
) {
  return ['api', '/api/CustomDevice/:id', toValue(args)] as const
}

export function getApiCustomDeviceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.CustomDevice[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCustomDeviceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.CustomDevice[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDeviceBySerialQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DeviceBySerial.$get>>,
) {
  return ['api', '/api/DeviceBySerial', toValue(args)] as const
}

export function getApiDeviceBySerialQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DeviceBySerial.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDeviceBySerialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.DeviceBySerial.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDeviceBySerial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DeviceBySerial.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>
            >
          >,
          ReturnType<typeof getApiDeviceBySerialQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDeviceBySerialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDeviceBySerialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.DeviceBySerial.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDevicesQueryKey() {
  return ['api', '/api/Devices'] as const
}

export function getApiDevicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDevicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Devices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
          >,
          ReturnType<typeof getApiDevicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDevicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Devices.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDevicesMutationKey() {
  return ['api', '/api/Devices', 'POST'] as const
}

export function getPostApiDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.Devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Devices.$post>) {
      return parseResponse(client.api.Devices.$post(args, options))
    },
  })
}

export function usePostApiDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.Devices.$post>,
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
  const mutationDefaults = getPostApiDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Devices)[':id']['$get']>>,
) {
  return ['api', '/api/Devices/:id', toValue(args)] as const
}

export function getApiDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiDevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiDevicesIdMutationKey() {
  return ['api', '/api/Devices/:id', 'PUT'] as const
}

export function getPutApiDevicesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.Devices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.Devices)[':id']['$put']>) {
      return parseResponse(client.api.Devices[':id'].$put(args, options))
    },
  })
}

export function usePutApiDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.Devices)[':id']['$put']>,
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
  const mutationDefaults = getPutApiDevicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiDevicesByEnergyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DevicesByEnergy.$get>>,
) {
  return ['api', '/api/DevicesByEnergy', toValue(args)] as const
}

export function getApiDevicesByEnergyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DevicesByEnergy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDevicesByEnergyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.DevicesByEnergy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDevicesByEnergy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DevicesByEnergy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
            >
          >,
          ReturnType<typeof getApiDevicesByEnergyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDevicesByEnergyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDevicesByEnergyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.DevicesByEnergy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDevicesBySubTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DevicesBySubType.$get>>,
) {
  return ['api', '/api/DevicesBySubType', toValue(args)] as const
}

export function getApiDevicesBySubTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DevicesBySubType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDevicesBySubTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.DevicesBySubType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDevicesBySubType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.DevicesBySubType.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
            >
          >,
          ReturnType<typeof getApiDevicesBySubTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDevicesBySubTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDevicesBySubTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.DevicesBySubType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFastSendDeviceValuesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>,
) {
  return ['api', '/api/FastSendDeviceValues/:id', toValue(args)] as const
}

export function getApiFastSendDeviceValuesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFastSendDeviceValuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.FastSendDeviceValues[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFastSendDeviceValuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFastSendDeviceValuesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFastSendDeviceValuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFastSendDeviceValuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.FastSendDeviceValues[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Folder)[':id']['$get']>>,
) {
  return ['api', '/api/Folder/:id', toValue(args)] as const
}

export function getApiFolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Folder)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Folder[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFolderId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Folder)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiFolderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Folder[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderMenuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.FolderMenu.$get>>,
) {
  return ['api', '/api/FolderMenu', toValue(args)] as const
}

export function getApiFolderMenuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.FolderMenu.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderMenuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.FolderMenu.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFolderMenu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.FolderMenu.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
          >,
          ReturnType<typeof getApiFolderMenuQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderMenuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderMenuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.FolderMenu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiFolderMenuMutationKey() {
  return ['api', '/api/FolderMenu', 'POST'] as const
}

export function getPostApiFolderMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.FolderMenu.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderMenuMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.FolderMenu.$post>) {
      return parseResponse(client.api.FolderMenu.$post(args, options))
    },
  })
}

export function usePostApiFolderMenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.FolderMenu.$post>,
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
  const mutationDefaults = getPostApiFolderMenuMutationOptions<TError, TOnMutateResult>(
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

export function getApiHealthQueryKey() {
  return ['api', '/api/Health'] as const
}

export function getApiHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>
          >,
          ReturnType<typeof getApiHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMBusMutationKey() {
  return ['api', '/api/MBus', 'POST'] as const
}

export function getPostApiMBusMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.MBus.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.MBus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMBusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.MBus.$post>) {
      return parseResponse(client.api.MBus.$post(args, options))
    },
  })
}

export function usePostApiMBus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.MBus.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.MBus.$post>,
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
  const mutationDefaults = getPostApiMBusMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiMeterFolderInformationMutationKey() {
  return ['api', '/api/MeterFolderInformation', 'POST'] as const
}

export function getPostApiMeterFolderInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.MeterFolderInformation.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.MeterFolderInformation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMeterFolderInformationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.MeterFolderInformation.$post>) {
      return parseResponse(client.api.MeterFolderInformation.$post(args, options))
    },
  })
}

export function usePostApiMeterFolderInformation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.MeterFolderInformation.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.MeterFolderInformation.$post>,
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
  const mutationDefaults = getPostApiMeterFolderInformationMutationOptions<TError, TOnMutateResult>(
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

export function getApiMeterFolderInformationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>
  >,
) {
  return ['api', '/api/MeterFolderInformation/:id', toValue(args)] as const
}

export function getApiMeterFolderInformationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMeterFolderInformationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.MeterFolderInformation[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMeterFolderInformationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMeterFolderInformationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMeterFolderInformationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMeterFolderInformationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.MeterFolderInformation[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMeterValuesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>>,
) {
  return ['api', '/api/MeterValues/:id', toValue(args)] as const
}

export function getApiMeterValuesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMeterValuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.MeterValues[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMeterValuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMeterValuesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMeterValuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMeterValuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.MeterValues[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRegisterForRealtimeApiQueryKey() {
  return ['api', '/api/RegisterForRealtimeApi'] as const
}

export function getApiRegisterForRealtimeApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiRegisterForRealtimeApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.RegisterForRealtimeApi.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRegisterForRealtimeApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
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
                Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>
              >
            >
          >,
          ReturnType<typeof getApiRegisterForRealtimeApiQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRegisterForRealtimeApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiRegisterForRealtimeApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.RegisterForRealtimeApi.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiRegisterForRealtimeApiMutationKey() {
  return ['api', '/api/RegisterForRealtimeApi', 'POST'] as const
}

export function getPostApiRegisterForRealtimeApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.RegisterForRealtimeApi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRegisterForRealtimeApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.RegisterForRealtimeApi.$post>) {
      return parseResponse(client.api.RegisterForRealtimeApi.$post(args, options))
    },
  })
}

export function usePostApiRegisterForRealtimeApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.RegisterForRealtimeApi.$post>,
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
  const mutationDefaults = getPostApiRegisterForRealtimeApiMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiRegisterForRealtimeApiIdMutationKey() {
  return ['api', '/api/RegisterForRealtimeApi/:id', 'DELETE'] as const
}

export function getDeleteApiRegisterForRealtimeApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiRegisterForRealtimeApiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.RegisterForRealtimeApi[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiRegisterForRealtimeApiId<
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
                  Awaited<ReturnType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiRegisterForRealtimeApiIdMutationOptions<
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

export function getPostApiSmartMeDeviceConfigurationMutationKey() {
  return ['api', '/api/SmartMeDeviceConfiguration', 'POST'] as const
}

export function getPostApiSmartMeDeviceConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.SmartMeDeviceConfiguration.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSmartMeDeviceConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post>) {
      return parseResponse(client.api.SmartMeDeviceConfiguration.$post(args, options))
    },
  })
}

export function usePostApiSmartMeDeviceConfiguration<
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
                  Awaited<ReturnType<typeof client.api.SmartMeDeviceConfiguration.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post>,
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
  const mutationDefaults = getPostApiSmartMeDeviceConfigurationMutationOptions<
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

export function getApiSmartMeDeviceConfigurationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>
  >,
) {
  return ['api', '/api/SmartMeDeviceConfiguration/:id', toValue(args)] as const
}

export function getApiSmartMeDeviceConfigurationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSmartMeDeviceConfigurationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.SmartMeDeviceConfiguration[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSmartMeDeviceConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSmartMeDeviceConfigurationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSmartMeDeviceConfigurationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSmartMeDeviceConfigurationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.SmartMeDeviceConfiguration[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSubUserMutationKey() {
  return ['api', '/api/SubUser', 'POST'] as const
}

export function getPostApiSubUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SubUser.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.SubUser.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.SubUser.$post>) {
      return parseResponse(client.api.SubUser.$post(args, options))
    },
  })
}

export function usePostApiSubUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SubUser.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.SubUser.$post>,
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
  const mutationDefaults = getPostApiSubUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSubUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.SubUser)[':id']['$get']>>,
) {
  return ['api', '/api/SubUser/:id', toValue(args)] as const
}

export function getApiSubUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.SubUser)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.SubUser[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.SubUser)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSubUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.SubUser[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSubUserIdMutationKey() {
  return ['api', '/api/SubUser/:id', 'DELETE'] as const
}

export function getDeleteApiSubUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.SubUser)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSubUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.SubUser)[':id']['$delete']>) {
      return parseResponse(client.api.SubUser[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiSubUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.SubUser)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiSubUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserQueryKey() {
  return ['api', '/api/User'] as const
}

export function getApiUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.User.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
          >,
          ReturnType<typeof getApiUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.User.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUserMutationKey() {
  return ['api', '/api/User', 'DELETE'] as const
}

export function getDeleteApiUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.User.$delete(undefined, options))
    },
  })
}

export function useDeleteApiUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteApiUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiValuesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Values)[':id']['$get']>>,
) {
  return ['api', '/api/Values/:id', toValue(args)] as const
}

export function getApiValuesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Values)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiValuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Values[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiValuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Values)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiValuesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiValuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Values[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiValuesInPastIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>>,
) {
  return ['api', '/api/ValuesInPast/:id', toValue(args)] as const
}

export function getApiValuesInPastIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiValuesInPastIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ValuesInPast[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiValuesInPastId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiValuesInPastIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValuesInPastIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiValuesInPastIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ValuesInPast[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiValuesInPastMultipleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>,
) {
  return ['api', '/api/ValuesInPastMultiple/:id', toValue(args)] as const
}

export function getApiValuesInPastMultipleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiValuesInPastMultipleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ValuesInPastMultiple[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiValuesInPastMultipleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiValuesInPastMultipleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValuesInPastMultipleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiValuesInPastMultipleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ValuesInPastMultiple[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualBillingMeterActiveQueryKey() {
  return ['api', '/api/VirtualBillingMeterActive'] as const
}

export function getApiVirtualBillingMeterActiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVirtualBillingMeterActiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualBillingMeterActive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualBillingMeterActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
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
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualBillingMeterActiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualBillingMeterActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVirtualBillingMeterActiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualBillingMeterActive.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiVirtualBillingMeterActiveMutationKey() {
  return ['api', '/api/VirtualBillingMeterActive', 'POST'] as const
}

export function getPostApiVirtualBillingMeterActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.VirtualBillingMeterActive.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVirtualBillingMeterActiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.VirtualBillingMeterActive.$post>) {
      return parseResponse(client.api.VirtualBillingMeterActive.$post(args, options))
    },
  })
}

export function usePostApiVirtualBillingMeterActive<
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
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.VirtualBillingMeterActive.$post>,
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
  const mutationDefaults = getPostApiVirtualBillingMeterActiveMutationOptions<
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

export function getPostApiVirtualBillingMeterDeactivateMutationKey() {
  return ['api', '/api/VirtualBillingMeterDeactivate', 'POST'] as const
}

export function getPostApiVirtualBillingMeterDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.VirtualBillingMeterDeactivate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVirtualBillingMeterDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post>,
    ) {
      return parseResponse(client.api.VirtualBillingMeterDeactivate.$post(args, options))
    },
  })
}

export function usePostApiVirtualBillingMeterDeactivate<
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
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterDeactivate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post>,
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
  const mutationDefaults = getPostApiVirtualBillingMeterDeactivateMutationOptions<
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

export function getApiVirtualBillingMetersQueryKey() {
  return ['api', '/api/VirtualBillingMeters'] as const
}

export function getApiVirtualBillingMetersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVirtualBillingMetersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualBillingMeters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualBillingMeters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
            >
          >,
          ReturnType<typeof getApiVirtualBillingMetersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualBillingMetersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVirtualBillingMetersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualBillingMeters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualMeterCalculateFormulaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>>,
) {
  return ['api', '/api/VirtualMeterCalculateFormula', toValue(args)] as const
}

export function getApiVirtualMeterCalculateFormulaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualMeterCalculateFormulaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualMeterCalculateFormula.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualMeterCalculateFormula<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualMeterCalculateFormulaQueryKey>
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
          Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualMeterCalculateFormulaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualMeterCalculateFormulaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualMeterCalculateFormula.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualTariffQueryKey() {
  return ['api', '/api/VirtualTariff'] as const
}

export function getApiVirtualTariffQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVirtualTariffQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualTariff.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualTariff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>
            >
          >,
          ReturnType<typeof getApiVirtualTariffQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVirtualTariffQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualTariff.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualTariffIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>>,
) {
  return ['api', '/api/VirtualTariff/:id', toValue(args)] as const
}

export function getApiVirtualTariffIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualTariffIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualTariff[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualTariffId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualTariffIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualTariffIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualTariff[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualTariffConsumptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.VirtualTariffConsumption.$get>>,
) {
  return ['api', '/api/VirtualTariffConsumption', toValue(args)] as const
}

export function getApiVirtualTariffConsumptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.VirtualTariffConsumption.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualTariffConsumptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualTariffConsumption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualTariffConsumption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.VirtualTariffConsumption.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualTariffConsumptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffConsumptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualTariffConsumptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualTariffConsumption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualTariffsForPropertyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>
  >,
) {
  return ['api', '/api/VirtualTariffsForProperty/:id', toValue(args)] as const
}

export function getApiVirtualTariffsForPropertyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualTariffsForPropertyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualTariffsForProperty[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualTariffsForPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualTariffsForPropertyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffsForPropertyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualTariffsForPropertyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualTariffsForProperty[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualTariffsStatusForPropertyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>
  >,
) {
  return ['api', '/api/VirtualTariffsStatusForProperty/:id', toValue(args)] as const
}

export function getApiVirtualTariffsStatusForPropertyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualTariffsStatusForPropertyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.VirtualTariffsStatusForProperty[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualTariffsStatusForPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>
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
                  ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiVirtualTariffsStatusForPropertyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffsStatusForPropertyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualTariffsStatusForPropertyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.VirtualTariffsStatusForProperty[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiFolderAssignMutationKey() {
  return ['api', '/api/folder/assign', 'POST'] as const
}

export function getPostApiFolderAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.assign.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.folder.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.folder.assign.$post>) {
      return parseResponse(client.api.folder.assign.$post(args, options))
    },
  })
}

export function usePostApiFolderAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.assign.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.folder.assign.$post>,
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
  const mutationDefaults = getPostApiFolderAssignMutationOptions<TError, TOnMutateResult>(
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

export function getApiFolderSettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>>,
) {
  return ['api', '/api/folder/settings/:id', toValue(args)] as const
}

export function getApiFolderSettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderSettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder.settings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFolderSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderSettingsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderSettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderSettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder.settings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiFolderSettingsIdMutationKey() {
  return ['api', '/api/folder/settings/:id', 'POST'] as const
}

export function getPostApiFolderSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder.settings)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderSettingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.folder.settings)[':id']['$post']>) {
      return parseResponse(client.api.folder.settings[':id'].$post(args, options))
    },
  })
}

export function usePostApiFolderSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.folder.settings)[':id']['$post']>,
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
  const mutationDefaults = getPostApiFolderSettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiFolderSettingsIdMutationKey() {
  return ['api', '/api/folder/settings/:id', 'DELETE'] as const
}

export function getDeleteApiFolderSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.folder.settings)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiFolderSettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder.settings)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.folder.settings[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiFolderSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.folder.settings)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiFolderSettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFolderUserAssignMutationKey() {
  return ['api', '/api/folder/user/assign', 'POST'] as const
}

export function getPostApiFolderUserAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.user.assign.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.folder.user.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderUserAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.folder.user.assign.$post>) {
      return parseResponse(client.api.folder.user.assign.$post(args, options))
    },
  })
}

export function usePostApiFolderUserAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.folder.user.assign.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.folder.user.assign.$post>,
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
  const mutationDefaults = getPostApiFolderUserAssignMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiFolderUserAssignMutationKey() {
  return ['api', '/api/folder/user/assign', 'DELETE'] as const
}

export function getDeleteApiFolderUserAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.user.assign.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.folder.user.assign.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiFolderUserAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.folder.user.assign.$delete>) {
      return parseResponse(client.api.folder.user.assign.$delete(args, options))
    },
  })
}

export function useDeleteApiFolderUserAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.folder.user.assign.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.folder.user.assign.$delete>,
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
  const mutationDefaults = getDeleteApiFolderUserAssignMutationOptions<TError, TOnMutateResult>(
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

export function getApiOauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oauth.authorize.$get>>,
) {
  return ['api', '/api/oauth/authorize', toValue(args)] as const
}

export function getApiOauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getApiOauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOauthAuthorizeMutationKey() {
  return ['api', '/api/oauth/authorize', 'POST'] as const
}

export function getPostApiOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.oauth.authorize.$post>) {
      return parseResponse(client.api.oauth.authorize.$post(args, options))
    },
  })
}

export function usePostApiOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.oauth.authorize.$post>,
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
  const mutationDefaults = getPostApiOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getApiPicoQueryKey() {
  return ['api', '/api/pico'] as const
}

export function getApiPicoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPicoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pico.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPico<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>
          >,
          ReturnType<typeof getApiPicoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPicoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPicoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pico.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPicoChargingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>>,
) {
  return ['api', '/api/pico/charging/:id', toValue(args)] as const
}

export function getApiPicoChargingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPicoChargingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pico.charging[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPicoChargingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPicoChargingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoChargingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPicoChargingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pico.charging[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPicoHistoryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.history)[':id']['$get']>>,
) {
  return ['api', '/api/pico/history/:id', toValue(args)] as const
}

export function getApiPicoHistoryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.history)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPicoHistoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pico.history[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPicoHistoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.history)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPicoHistoryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoHistoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPicoHistoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pico.history[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPicoLoadmanagementgroupQueryKey() {
  return ['api', '/api/pico/loadmanagementgroup'] as const
}

export function getApiPicoLoadmanagementgroupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPicoLoadmanagementgroupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pico.loadmanagementgroup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPicoLoadmanagementgroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
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
                Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPicoLoadmanagementgroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoLoadmanagementgroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPicoLoadmanagementgroupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pico.loadmanagementgroup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPicoLoadmanagementgroupCurrentSerialMutationKey() {
  return ['api', '/api/pico/loadmanagementgroup/current/:serial', 'POST'] as const
}

export function getPostApiPicoLoadmanagementgroupCurrentSerialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPicoLoadmanagementgroupCurrentSerialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pico.loadmanagementgroup.current[':serial'].$post(args, options),
      )
    },
  })
}

export function usePostApiPicoLoadmanagementgroupCurrentSerial<
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
                    (typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']
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
  const mutationDefaults = getPostApiPicoLoadmanagementgroupCurrentSerialMutationOptions<
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

export function getApiPicoLoadmanagementgroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>
  >,
) {
  return ['api', '/api/pico/loadmanagementgroup/:id', toValue(args)] as const
}

export function getApiPicoLoadmanagementgroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPicoLoadmanagementgroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pico.loadmanagementgroup[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPicoLoadmanagementgroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPicoLoadmanagementgroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoLoadmanagementgroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPicoLoadmanagementgroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pico.loadmanagementgroup[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPicoSettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>>,
) {
  return ['api', '/api/pico/settings/:id', toValue(args)] as const
}

export function getApiPicoSettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPicoSettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pico.settings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPicoSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPicoSettingsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoSettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPicoSettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pico.settings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPicoTryenablecablelockIdMutationKey() {
  return ['api', '/api/pico/tryenablecablelock/:id', 'POST'] as const
}

export function getPostApiPicoTryenablecablelockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPicoTryenablecablelockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>,
    ) {
      return parseResponse(client.api.pico.tryenablecablelock[':id'].$post(args, options))
    },
  })
}

export function usePostApiPicoTryenablecablelockId<
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
                Awaited<ReturnType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>,
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
  const mutationDefaults = getPostApiPicoTryenablecablelockIdMutationOptions<
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
