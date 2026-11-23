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

export function getDeviceKey() {
  return ['device'] as const
}

export function getFirmwareKey() {
  return ['firmware'] as const
}

export function getPostDeviceDetectMutationKey() {
  return ['device', '/device/detect', 'POST'] as const
}

export function getPostDeviceDetectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.device.detect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.device.detect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDetectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.device.detect.$post>) {
      return parseResponse(client.device.detect.$post(args, options))
    },
  })
}

export function usePostDeviceDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.device.detect.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.device.detect.$post>,
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
  const mutationDefaults = getPostDeviceDetectMutationOptions<TError, TOnMutateResult>(
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

export function getFirmwareFirmwareHashAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/accounts', toValue(args)] as const
}

export function getFirmwareFirmwareHashAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirmwareFirmwareHashConfigIssuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/config-issues', toValue(args)] as const
}

export function getFirmwareFirmwareHashConfigIssuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashConfigIssuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash']['config-issues'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashConfigIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>
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
                  ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashConfigIssuesQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashConfigIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashConfigIssuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash']['config-issues'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirmwareFirmwareHashExpiredCertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/expired-certs', toValue(args)] as const
}

export function getFirmwareFirmwareHashExpiredCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashExpiredCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash']['expired-certs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashExpiredCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>
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
                  ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashExpiredCertsQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashExpiredCertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashExpiredCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash']['expired-certs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirmwareFirmwareHashPrivateKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/private-keys', toValue(args)] as const
}

export function getFirmwareFirmwareHashPrivateKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashPrivateKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash']['private-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashPrivateKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>
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
                  ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashPrivateKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashPrivateKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashPrivateKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash']['private-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirmwareFirmwareHashRiskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/risk', toValue(args)] as const
}

export function getFirmwareFirmwareHashRiskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashRiskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash'].risk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashRiskQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashRiskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashRiskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash'].risk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirmwareFirmwareHashWeakCertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/weak-certs', toValue(args)] as const
}

export function getFirmwareFirmwareHashWeakCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashWeakCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash']['weak-certs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashWeakCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>
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
                  ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashWeakCertsQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashWeakCertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashWeakCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash']['weak-certs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirmwareFirmwareHashWeakKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>
  >,
) {
  return ['firmware', '/firmware/:firmware_hash/weak-keys', toValue(args)] as const
}

export function getFirmwareFirmwareHashWeakKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirmwareFirmwareHashWeakKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firmware[':firmware_hash']['weak-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirmwareFirmwareHashWeakKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFirmwareFirmwareHashWeakKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirmwareFirmwareHashWeakKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirmwareFirmwareHashWeakKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firmware[':firmware_hash']['weak-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
