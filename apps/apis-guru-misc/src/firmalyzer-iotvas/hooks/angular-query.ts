import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostDeviceDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.device.detect.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.device.detect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDetectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashAccountsQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/accounts', args] as const
}

export function getFirmwareFirmwareHashAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashConfigIssuesQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/config-issues', args] as const
}

export function getFirmwareFirmwareHashConfigIssuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashConfigIssuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash']['config-issues'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashConfigIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFirmwareFirmwareHashConfigIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashConfigIssuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashExpiredCertsQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/expired-certs', args] as const
}

export function getFirmwareFirmwareHashExpiredCertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashExpiredCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash']['expired-certs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashExpiredCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFirmwareFirmwareHashExpiredCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashExpiredCertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashPrivateKeysQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/private-keys', args] as const
}

export function getFirmwareFirmwareHashPrivateKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashPrivateKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash']['private-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashPrivateKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFirmwareFirmwareHashPrivateKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashPrivateKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashRiskQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/risk', args] as const
}

export function getFirmwareFirmwareHashRiskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashRiskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash'].risk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashRiskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashWeakCertsQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/weak-certs', args] as const
}

export function getFirmwareFirmwareHashWeakCertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashWeakCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash']['weak-certs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashWeakCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashWeakCertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFirmwareFirmwareHashWeakKeysQueryKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/weak-keys', args] as const
}

export function getFirmwareFirmwareHashWeakKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFirmwareFirmwareHashWeakKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firmware[':firmware_hash']['weak-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFirmwareFirmwareHashWeakKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFirmwareFirmwareHashWeakKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
