import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1CustomersKey(args: InferRequestType<typeof client.v1.customers.$get>) {
  return ['v1', '/v1/customers', args] as const
}

export function useGetV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataKey() {
  return ['v1', '/v1/partners/:metadataOwnerId/devices/:deviceId/metadata', 'POST'] as const
}

export function usePostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataKey()
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
            (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':metadataOwnerId'].devices[':deviceId'].metadata.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PartnersPartnerIdCustomersKey(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
) {
  return ['v1', '/v1/partners/:partnerId/customers', args] as const
}

export function useGetV1PartnersPartnerIdCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
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
        ? getGetV1PartnersPartnerIdCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.partners[':partnerId'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PartnersPartnerIdCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
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
        ? getGetV1PartnersPartnerIdCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.partners[':partnerId'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesClaimKey() {
  return ['v1', '/v1/partners/:partnerId/devices:claim', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>
        },
      ) =>
        parseResponse(client.v1.partners[':partnerId']['devices:claim'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesClaimAsyncKey() {
  return ['v1', '/v1/partners/:partnerId/devices:claimAsync', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesClaimAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesClaimAsyncKey()
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
            (typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':partnerId']['devices:claimAsync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesFindByIdentifierKey() {
  return ['v1', '/v1/partners/:partnerId/devices:findByIdentifier', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesFindByIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesFindByIdentifierKey()
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
            (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':partnerId']['devices:findByIdentifier'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesFindByOwnerKey() {
  return ['v1', '/v1/partners/:partnerId/devices:findByOwner', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesFindByOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesFindByOwnerKey()
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
            (typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':partnerId']['devices:findByOwner'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesUnclaimKey() {
  return ['v1', '/v1/partners/:partnerId/devices:unclaim', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesUnclaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesUnclaimKey()
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
            (typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':partnerId']['devices:unclaim'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesUnclaimAsyncKey() {
  return ['v1', '/v1/partners/:partnerId/devices:unclaimAsync', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesUnclaimAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesUnclaimAsyncKey()
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
            (typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':partnerId']['devices:unclaimAsync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartnersPartnerIdDevicesUpdateMetadataAsyncKey() {
  return ['v1', '/v1/partners/:partnerId/devices:updateMetadataAsync', 'POST'] as const
}

export function usePostV1PartnersPartnerIdDevicesUpdateMetadataAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartnersPartnerIdDevicesUpdateMetadataAsyncKey()
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
            (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.partners[':partnerId']['devices:updateMetadataAsync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1NameKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function useGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1NameKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function useDeleteV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$delete']> }) =>
        parseResponse(client.v1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1NameKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function usePatchV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$patch']> }) =>
        parseResponse(client.v1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentConfigurationsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
) {
  return ['v1', '/v1/:parent/configurations', args] as const
}

export function useGetV1ParentConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
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
        ? getGetV1ParentConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
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
        ? getGetV1ParentConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentConfigurationsKey() {
  return ['v1', '/v1/:parent/configurations', 'POST'] as const
}

export function usePostV1ParentConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['configurations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent']['configurations']['$post']> },
      ) => parseResponse(client.v1[':parent'].configurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentCustomersKey(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
) {
  return ['v1', '/v1/:parent/customers', args] as const
}

export function useGetV1ParentCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
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
        ? getGetV1ParentCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
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
        ? getGetV1ParentCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentCustomersKey() {
  return ['v1', '/v1/:parent/customers', 'POST'] as const
}

export function usePostV1ParentCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':parent']['customers']['$post']> },
      ) => parseResponse(client.v1[':parent'].customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentDevicesKey(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
) {
  return ['v1', '/v1/:parent/devices', args] as const
}

export function useGetV1ParentDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>
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
        ? getGetV1ParentDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>
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
        ? getGetV1ParentDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentDevicesApplyConfigurationKey() {
  return ['v1', '/v1/:parent/devices:applyConfiguration', 'POST'] as const
}

export function usePostV1ParentDevicesApplyConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentDevicesApplyConfigurationKey()
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
            (typeof client.v1)[':parent']['devices:applyConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(client.v1[':parent']['devices:applyConfiguration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ParentDevicesRemoveConfigurationKey() {
  return ['v1', '/v1/:parent/devices:removeConfiguration', 'POST'] as const
}

export function usePostV1ParentDevicesRemoveConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentDevicesRemoveConfigurationKey()
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
            (typeof client.v1)[':parent']['devices:removeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1[':parent']['devices:removeConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ParentDevicesUnclaimKey() {
  return ['v1', '/v1/:parent/devices:unclaim', 'POST'] as const
}

export function usePostV1ParentDevicesUnclaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentDevicesUnclaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent']['devices:unclaim']['$post']> },
      ) => parseResponse(client.v1[':parent']['devices:unclaim'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentDpcsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
) {
  return ['v1', '/v1/:parent/dpcs', args] as const
}

export function useGetV1ParentDpcs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ParentDpcsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].dpcs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentDpcs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ParentDpcsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].dpcs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentVendorsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
) {
  return ['v1', '/v1/:parent/vendors', args] as const
}

export function useGetV1ParentVendors<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>
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
        ? getGetV1ParentVendorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].vendors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentVendors<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>
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
        ? getGetV1ParentVendorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].vendors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
