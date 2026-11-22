import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeviceKey() {
  return ['device'] as const
}

export function getFirmwareKey() {
  return ['firmware'] as const
}

export function getPostDeviceDetectKey() {
  return ['device', '/device/detect', 'POST'] as const
}

export function usePostDeviceDetect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.device.detect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.device.detect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDetectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.device.detect.$post> }) =>
        parseResponse(client.device.detect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashAccountsKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/accounts', args] as const
}

export function useGetFirmwareFirmwareHashAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
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
        ? getGetFirmwareFirmwareHashAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
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
        ? getGetFirmwareFirmwareHashAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashConfigIssuesKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/config-issues', args] as const
}

export function useGetFirmwareFirmwareHashConfigIssues<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
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
        ? getGetFirmwareFirmwareHashConfigIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['config-issues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashConfigIssues<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
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
        ? getGetFirmwareFirmwareHashConfigIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['config-issues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashExpiredCertsKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/expired-certs', args] as const
}

export function useGetFirmwareFirmwareHashExpiredCerts<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
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
        ? getGetFirmwareFirmwareHashExpiredCertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['expired-certs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashExpiredCerts<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
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
        ? getGetFirmwareFirmwareHashExpiredCertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['expired-certs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashPrivateKeysKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/private-keys', args] as const
}

export function useGetFirmwareFirmwareHashPrivateKeys<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
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
        ? getGetFirmwareFirmwareHashPrivateKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['private-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashPrivateKeys<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
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
        ? getGetFirmwareFirmwareHashPrivateKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['private-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashRiskKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/risk', args] as const
}

export function useGetFirmwareFirmwareHashRisk<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
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
        ? getGetFirmwareFirmwareHashRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.firmware[':firmware_hash'].risk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashRisk<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
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
        ? getGetFirmwareFirmwareHashRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.firmware[':firmware_hash'].risk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashWeakCertsKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/weak-certs', args] as const
}

export function useGetFirmwareFirmwareHashWeakCerts<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
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
        ? getGetFirmwareFirmwareHashWeakCertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['weak-certs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashWeakCerts<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
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
        ? getGetFirmwareFirmwareHashWeakCertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['weak-certs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFirmwareFirmwareHashWeakKeysKey(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
) {
  return ['firmware', '/firmware/:firmware_hash/weak-keys', args] as const
}

export function useGetFirmwareFirmwareHashWeakKeys<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
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
        ? getGetFirmwareFirmwareHashWeakKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['weak-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFirmwareFirmwareHashWeakKeys<TError = unknown>(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
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
        ? getGetFirmwareFirmwareHashWeakKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.firmware[':firmware_hash']['weak-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
