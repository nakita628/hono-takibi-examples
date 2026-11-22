import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReportsKey() {
  return ['reports'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getPostReportsKey() {
  return ['reports', '/reports', 'POST'] as const
}

export function usePostReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.$post> }) =>
        parseResponse(client.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsOrganizationsKey() {
  return ['settings', '/settings/organizations'] as const
}

export function useGetSettingsOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsOrganizationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsOrganizationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadSettingsOrganizationsKey() {
  return ['settings', '/settings/organizations', 'HEAD'] as const
}

export function useHeadSettingsOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.organizations.$head>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadSettingsOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.settings.organizations.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsOrganizationsOrganizationNameKey(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
) {
  return ['settings', '/settings/organizations/:organizationName', args] as const
}

export function useGetSettingsOrganizationsOrganizationName<TError = unknown>(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
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
        ? getGetSettingsOrganizationsOrganizationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.organizations[':organizationName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsOrganizationsOrganizationName<TError = unknown>(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
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
        ? getGetSettingsOrganizationsOrganizationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.organizations[':organizationName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSettingsOrganizationsOrganizationNameKey() {
  return ['settings', '/settings/organizations/:organizationName', 'PUT'] as const
}

export function usePutSettingsOrganizationsOrganizationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.organizations)[':organizationName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsOrganizationsOrganizationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$put']>
        },
      ) =>
        parseResponse(client.settings.organizations[':organizationName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsOrganizationsOrganizationNameKey() {
  return ['settings', '/settings/organizations/:organizationName', 'DELETE'] as const
}

export function useDeleteSettingsOrganizationsOrganizationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.organizations)[':organizationName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.organizations)[':organizationName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsOrganizationsOrganizationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.organizations)[':organizationName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.settings.organizations[':organizationName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsOrganizationsOrganizationNameReceiversKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
) {
  return ['settings', '/settings/organizations/:organizationName/receivers', args] as const
}

export function useGetSettingsOrganizationsOrganizationNameReceivers<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameReceiversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].receivers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsOrganizationsOrganizationNameReceivers<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameReceiversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].receivers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsOrganizationsOrganizationNameReceiversReceiverNameKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
) {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    args,
  ] as const
}

export function useGetSettingsOrganizationsOrganizationNameReceiversReceiverName<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameReceiversReceiverNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].receivers[':receiverName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsOrganizationsOrganizationNameReceiversReceiverName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameReceiversReceiverNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].receivers[':receiverName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSettingsOrganizationsOrganizationNameReceiversReceiverNameKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    'PUT',
  ] as const
}

export function usePutSettingsOrganizationsOrganizationNameReceiversReceiverName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsOrganizationsOrganizationNameReceiversReceiverNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.settings.organizations[':organizationName'].receivers[':receiverName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/receivers/:receiverName',
    'DELETE',
  ] as const
}

export function useDeleteSettingsOrganizationsOrganizationNameReceiversReceiverName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.settings.organizations[':organizationName'].receivers[':receiverName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsOrganizationsOrganizationNameSendersKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
) {
  return ['settings', '/settings/organizations/:organizationName/senders', args] as const
}

export function useGetSettingsOrganizationsOrganizationNameSenders<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameSendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].senders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsOrganizationsOrganizationNameSenders<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameSendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].senders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsOrganizationsOrganizationNameSendersSenderNameKey(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
) {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    args,
  ] as const
}

export function useGetSettingsOrganizationsOrganizationNameSendersSenderName<TError = unknown>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameSendersSenderNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].senders[':senderName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsOrganizationsOrganizationNameSendersSenderName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
              >
            >
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
        ? getGetSettingsOrganizationsOrganizationNameSendersSenderNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.organizations[':organizationName'].senders[':senderName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSettingsOrganizationsOrganizationNameSendersSenderNameKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    'PUT',
  ] as const
}

export function usePutSettingsOrganizationsOrganizationNameSendersSenderName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsOrganizationsOrganizationNameSendersSenderNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.settings.organizations[':organizationName'].senders[':senderName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsOrganizationsOrganizationNameSendersSenderNameKey() {
  return [
    'settings',
    '/settings/organizations/:organizationName/senders/:senderName',
    'DELETE',
  ] as const
}

export function useDeleteSettingsOrganizationsOrganizationNameSendersSenderName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsOrganizationsOrganizationNameSendersSenderNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.settings.organizations[':organizationName'].senders[':senderName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
