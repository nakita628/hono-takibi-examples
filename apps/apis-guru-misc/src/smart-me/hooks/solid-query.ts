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

export function createPutApiAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.AccessToken.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.AccessToken.$put>,
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
    const mutationDefaults = getPutApiAccessTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAccountLoginQueryKey() {
  return ['api', '/api/Account/login'] as const
}

export function getApiAccountLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountLoginQueryKey>
  >({
    queryKey: getApiAccountLoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Account.login.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAccountLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiAccountLoginQueryKey>
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
    return { ...getApiAccountLoginQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAccountLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiAccountLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Actions.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.Actions.$post>,
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
    const mutationDefaults = getPostApiActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiActionsIdQueryKey(
  args: InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
) {
  return ['api', '/api/Actions/:id', args] as const
}

export function getApiActionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiActionsIdQueryKey>
  >({
    queryKey: getApiActionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Actions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiActionsIdQueryKey>
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
    return { ...getApiActionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAdditionalDeviceInformationIdQueryKey(
  args: InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
) {
  return ['api', '/api/AdditionalDeviceInformation/:id', args] as const
}

export function getApiAdditionalDeviceInformationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAdditionalDeviceInformationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.AdditionalDeviceInformation[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAdditionalDeviceInformationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiAdditionalDeviceInformationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCustomDeviceQueryKey() {
  return ['api', '/api/CustomDevice'] as const
}

export function getApiCustomDeviceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDeviceQueryKey>
  >({
    queryKey: getApiCustomDeviceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.CustomDevice.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCustomDevice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCustomDeviceQueryKey>
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
    return { ...getApiCustomDeviceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiCustomDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.CustomDevice.$post>,
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
    const mutationDefaults = getPostApiCustomDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCustomDeviceIdQueryKey(
  args: InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
) {
  return ['api', '/api/CustomDevice/:id', args] as const
}

export function getApiCustomDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomDeviceIdQueryKey>
  >({
    queryKey: getApiCustomDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.CustomDevice[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCustomDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCustomDeviceIdQueryKey>
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
    return { ...getApiCustomDeviceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDeviceBySerialQueryKey(
  args: InferRequestType<typeof client.api.DeviceBySerial.$get>,
) {
  return ['api', '/api/DeviceBySerial', args] as const
}

export function getApiDeviceBySerialQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.DeviceBySerial.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDeviceBySerialQueryKey>
  >({
    queryKey: getApiDeviceBySerialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.DeviceBySerial.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDeviceBySerial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.DeviceBySerial.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDeviceBySerialQueryKey>
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
    return { ...getApiDeviceBySerialQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDevicesQueryKey() {
  return ['api', '/api/Devices'] as const
}

export function getApiDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDevicesQueryKey>
  >({
    queryKey: getApiDevicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Devices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiDevicesQueryKey>
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
    return { ...getApiDevicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.Devices.$post>,
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
    const mutationDefaults = getPostApiDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDevicesIdQueryKey(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
) {
  return ['api', '/api/Devices/:id', args] as const
}

export function getApiDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDevicesIdQueryKey>
  >({
    queryKey: getApiDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDevicesIdQueryKey>
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
    return { ...getApiDevicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.Devices)[':id']['$put']>,
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
    const mutationDefaults = getPutApiDevicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDevicesByEnergyQueryKey(
  args: InferRequestType<typeof client.api.DevicesByEnergy.$get>,
) {
  return ['api', '/api/DevicesByEnergy', args] as const
}

export function getApiDevicesByEnergyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.DevicesByEnergy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDevicesByEnergyQueryKey>
  >({
    queryKey: getApiDevicesByEnergyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.DevicesByEnergy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDevicesByEnergy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.DevicesByEnergy.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDevicesByEnergyQueryKey>
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
    return { ...getApiDevicesByEnergyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDevicesBySubTypeQueryKey(
  args: InferRequestType<typeof client.api.DevicesBySubType.$get>,
) {
  return ['api', '/api/DevicesBySubType', args] as const
}

export function getApiDevicesBySubTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.DevicesBySubType.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDevicesBySubTypeQueryKey>
  >({
    queryKey: getApiDevicesBySubTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.DevicesBySubType.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDevicesBySubType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.DevicesBySubType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDevicesBySubTypeQueryKey>
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
    return { ...getApiDevicesBySubTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiFastSendDeviceValuesIdQueryKey(
  args: InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
) {
  return ['api', '/api/FastSendDeviceValues/:id', args] as const
}

export function getApiFastSendDeviceValuesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiFastSendDeviceValuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.FastSendDeviceValues[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiFastSendDeviceValuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiFastSendDeviceValuesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiFolderIdQueryKey(
  args: InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
) {
  return ['api', '/api/Folder/:id', args] as const
}

export function getApiFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderIdQueryKey>
  >({
    queryKey: getApiFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Folder[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFolderId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiFolderIdQueryKey>
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
    return { ...getApiFolderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiFolderMenuQueryKey(
  args: InferRequestType<typeof client.api.FolderMenu.$get>,
) {
  return ['api', '/api/FolderMenu', args] as const
}

export function getApiFolderMenuQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.FolderMenu.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderMenuQueryKey>
  >({
    queryKey: getApiFolderMenuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.FolderMenu.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFolderMenu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.FolderMenu.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiFolderMenuQueryKey>
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
    return { ...getApiFolderMenuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiFolderMenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.FolderMenu.$post>,
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
    const mutationDefaults = getPostApiFolderMenuMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiHealthQueryKey() {
  return ['api', '/api/Health'] as const
}

export function getApiHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHealthQueryKey>
  >({
    queryKey: getApiHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiHealthQueryKey>
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
    return { ...getApiHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiMBus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.MBus.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.MBus.$post>,
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
    const mutationDefaults = getPostApiMBusMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiMeterFolderInformation<
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
                  Awaited<ReturnType<typeof client.api.MeterFolderInformation.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.MeterFolderInformation.$post>,
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
    const mutationDefaults = getPostApiMeterFolderInformationMutationOptions<
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

export function getApiMeterFolderInformationIdQueryKey(
  args: InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
) {
  return ['api', '/api/MeterFolderInformation/:id', args] as const
}

export function getApiMeterFolderInformationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMeterFolderInformationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.MeterFolderInformation[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMeterFolderInformationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiMeterFolderInformationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiMeterValuesIdQueryKey(
  args: InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
) {
  return ['api', '/api/MeterValues/:id', args] as const
}

export function getApiMeterValuesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMeterValuesIdQueryKey>
  >({
    queryKey: getApiMeterValuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.MeterValues[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMeterValuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMeterValuesIdQueryKey>
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
    return { ...getApiMeterValuesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRegisterForRealtimeApiQueryKey() {
  return ['api', '/api/RegisterForRealtimeApi'] as const
}

export function getApiRegisterForRealtimeApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRegisterForRealtimeApiQueryKey>
  >({
    queryKey: getApiRegisterForRealtimeApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.RegisterForRealtimeApi.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRegisterForRealtimeApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
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
                Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiRegisterForRealtimeApiQueryKey>
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
    return { ...getApiRegisterForRealtimeApiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiRegisterForRealtimeApi<
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
                  Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.RegisterForRealtimeApi.$post>,
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
    const mutationDefaults = getPostApiRegisterForRealtimeApiMutationOptions<
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

export function createDeleteApiRegisterForRealtimeApiId<
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
                  Awaited<ReturnType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiRegisterForRealtimeApiIdMutationOptions<
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

export function createPostApiSmartMeDeviceConfiguration<
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
                  Awaited<ReturnType<typeof client.api.SmartMeDeviceConfiguration.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post>,
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
    const mutationDefaults = getPostApiSmartMeDeviceConfigurationMutationOptions<
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

export function getApiSmartMeDeviceConfigurationIdQueryKey(
  args: InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
) {
  return ['api', '/api/SmartMeDeviceConfiguration/:id', args] as const
}

export function getApiSmartMeDeviceConfigurationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSmartMeDeviceConfigurationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.SmartMeDeviceConfiguration[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSmartMeDeviceConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiSmartMeDeviceConfigurationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiSubUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SubUser.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.SubUser.$post>,
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
    const mutationDefaults = getPostApiSubUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSubUserIdQueryKey(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
) {
  return ['api', '/api/SubUser/:id', args] as const
}

export function getApiSubUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubUserIdQueryKey>
  >({
    queryKey: getApiSubUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.SubUser[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSubUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiSubUserIdQueryKey>
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
    return { ...getApiSubUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiSubUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiSubUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUserQueryKey() {
  return ['api', '/api/User'] as const
}

export function getApiUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserQueryKey>
  >({
    queryKey: getApiUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.User.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiUserQueryKey>
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
    return { ...getApiUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$delete>>>>
          >,
          TError,
          void,
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
    const mutationDefaults = getDeleteApiUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiValuesIdQueryKey(
  args: InferRequestType<(typeof client.api.Values)[':id']['$get']>,
) {
  return ['api', '/api/Values/:id', args] as const
}

export function getApiValuesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Values)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValuesIdQueryKey>
  >({
    queryKey: getApiValuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Values[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiValuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Values)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiValuesIdQueryKey>
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
    return { ...getApiValuesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiValuesInPastIdQueryKey(
  args: InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
) {
  return ['api', '/api/ValuesInPast/:id', args] as const
}

export function getApiValuesInPastIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValuesInPastIdQueryKey>
  >({
    queryKey: getApiValuesInPastIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ValuesInPast[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiValuesInPastId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiValuesInPastIdQueryKey>
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
    return { ...getApiValuesInPastIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiValuesInPastMultipleIdQueryKey(
  args: InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
) {
  return ['api', '/api/ValuesInPastMultiple/:id', args] as const
}

export function getApiValuesInPastMultipleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiValuesInPastMultipleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ValuesInPastMultiple[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiValuesInPastMultipleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiValuesInPastMultipleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiVirtualBillingMeterActiveQueryKey() {
  return ['api', '/api/VirtualBillingMeterActive'] as const
}

export function getApiVirtualBillingMeterActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualBillingMeterActiveQueryKey>
  >({
    queryKey: getApiVirtualBillingMeterActiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualBillingMeterActive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualBillingMeterActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
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
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiVirtualBillingMeterActiveQueryKey>
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
      ...getApiVirtualBillingMeterActiveQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiVirtualBillingMeterActive<
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
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.VirtualBillingMeterActive.$post>,
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
    const mutationDefaults = getPostApiVirtualBillingMeterActiveMutationOptions<
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

export function createPostApiVirtualBillingMeterDeactivate<
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
                Awaited<ReturnType<typeof client.api.VirtualBillingMeterDeactivate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post>,
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
    const mutationDefaults = getPostApiVirtualBillingMeterDeactivateMutationOptions<
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

export function getApiVirtualBillingMetersQueryKey() {
  return ['api', '/api/VirtualBillingMeters'] as const
}

export function getApiVirtualBillingMetersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualBillingMetersQueryKey>
  >({
    queryKey: getApiVirtualBillingMetersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualBillingMeters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualBillingMeters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiVirtualBillingMetersQueryKey>
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
    return { ...getApiVirtualBillingMetersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiVirtualMeterCalculateFormulaQueryKey(
  args: InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
) {
  return ['api', '/api/VirtualMeterCalculateFormula', args] as const
}

export function getApiVirtualMeterCalculateFormulaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiVirtualMeterCalculateFormulaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualMeterCalculateFormula.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualMeterCalculateFormula<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiVirtualMeterCalculateFormulaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiVirtualTariffQueryKey() {
  return ['api', '/api/VirtualTariff'] as const
}

export function getApiVirtualTariffQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffQueryKey>
  >({
    queryKey: getApiVirtualTariffQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualTariff.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualTariff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiVirtualTariffQueryKey>
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
    return { ...getApiVirtualTariffQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiVirtualTariffIdQueryKey(
  args: InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
) {
  return ['api', '/api/VirtualTariff/:id', args] as const
}

export function getApiVirtualTariffIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffIdQueryKey>
  >({
    queryKey: getApiVirtualTariffIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualTariff[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualTariffId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiVirtualTariffIdQueryKey>
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
    return { ...getApiVirtualTariffIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiVirtualTariffConsumptionQueryKey(
  args: InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
) {
  return ['api', '/api/VirtualTariffConsumption', args] as const
}

export function getApiVirtualTariffConsumptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualTariffConsumptionQueryKey>
  >({
    queryKey: getApiVirtualTariffConsumptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualTariffConsumption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualTariffConsumption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiVirtualTariffConsumptionQueryKey>
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
      ...getApiVirtualTariffConsumptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiVirtualTariffsForPropertyIdQueryKey(
  args: InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
) {
  return ['api', '/api/VirtualTariffsForProperty/:id', args] as const
}

export function getApiVirtualTariffsForPropertyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiVirtualTariffsForPropertyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualTariffsForProperty[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualTariffsForPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiVirtualTariffsForPropertyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiVirtualTariffsStatusForPropertyIdQueryKey(
  args: InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
) {
  return ['api', '/api/VirtualTariffsStatusForProperty/:id', args] as const
}

export function getApiVirtualTariffsStatusForPropertyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiVirtualTariffsStatusForPropertyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.VirtualTariffsStatusForProperty[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVirtualTariffsStatusForPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiVirtualTariffsStatusForPropertyIdQueryKey>
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
      ...getApiVirtualTariffsStatusForPropertyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFolderAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.assign.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.folder.assign.$post>,
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
    const mutationDefaults = getPostApiFolderAssignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiFolderSettingsIdQueryKey(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
) {
  return ['api', '/api/folder/settings/:id', args] as const
}

export function getApiFolderSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiFolderSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder.settings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiFolderSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiFolderSettingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiFolderSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiFolderSettingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiFolderSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiFolderSettingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFolderUserAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiFolderUserAssignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiFolderUserAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiFolderUserAssignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.api.oauth.authorize.$get>,
) {
  return ['api', '/api/oauth/authorize', args] as const
}

export function getApiOauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOauthAuthorizeQueryKey>
  >({
    queryKey: getApiOauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.oauth.authorize.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiOauthAuthorizeQueryKey>
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
    return { ...getApiOauthAuthorizeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.oauth.authorize.$post>,
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
    const mutationDefaults = getPostApiOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPicoQueryKey() {
  return ['api', '/api/pico'] as const
}

export function getApiPicoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPicoQueryKey>
  >({
    queryKey: getApiPicoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pico.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPico<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiPicoQueryKey>
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
    return { ...getApiPicoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiPicoChargingIdQueryKey(
  args: InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
) {
  return ['api', '/api/pico/charging/:id', args] as const
}

export function getApiPicoChargingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoChargingIdQueryKey>
  >({
    queryKey: getApiPicoChargingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pico.charging[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPicoChargingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPicoChargingIdQueryKey>
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
    return { ...getApiPicoChargingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPicoHistoryIdQueryKey(
  args: InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
) {
  return ['api', '/api/pico/history/:id', args] as const
}

export function getApiPicoHistoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoHistoryIdQueryKey>
  >({
    queryKey: getApiPicoHistoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pico.history[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPicoHistoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPicoHistoryIdQueryKey>
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
    return { ...getApiPicoHistoryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPicoLoadmanagementgroupQueryKey() {
  return ['api', '/api/pico/loadmanagementgroup'] as const
}

export function getApiPicoLoadmanagementgroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoLoadmanagementgroupQueryKey>
  >({
    queryKey: getApiPicoLoadmanagementgroupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pico.loadmanagementgroup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPicoLoadmanagementgroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
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
                Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPicoLoadmanagementgroupQueryKey>
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
    return { ...getApiPicoLoadmanagementgroupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiPicoLoadmanagementgroupCurrentSerial<
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
    const mutationDefaults = getPostApiPicoLoadmanagementgroupCurrentSerialMutationOptions<
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

export function getApiPicoLoadmanagementgroupIdQueryKey(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
) {
  return ['api', '/api/pico/loadmanagementgroup/:id', args] as const
}

export function getApiPicoLoadmanagementgroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPicoLoadmanagementgroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pico.loadmanagementgroup[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPicoLoadmanagementgroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiPicoLoadmanagementgroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPicoSettingsIdQueryKey(
  args: InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
) {
  return ['api', '/api/pico/settings/:id', args] as const
}

export function getApiPicoSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPicoSettingsIdQueryKey>
  >({
    queryKey: getApiPicoSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pico.settings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPicoSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPicoSettingsIdQueryKey>
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
    return { ...getApiPicoSettingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiPicoTryenablecablelockId<
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
                Awaited<ReturnType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>,
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
    const mutationDefaults = getPostApiPicoTryenablecablelockIdMutationOptions<
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
