import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAttachmentsKey() {
  return ['attachments'] as const
}

export function getConnectAttachmentsKey() {
  return ['connect-attachments'] as const
}

export function getConnectPeersKey() {
  return ['connect-peers'] as const
}

export function getCoreNetworksKey() {
  return ['core-networks'] as const
}

export function getGlobalNetworksKey() {
  return ['global-networks'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPeeringsKey() {
  return ['peerings'] as const
}

export function getResourcePolicyKey() {
  return ['resource-policy'] as const
}

export function getSiteToSiteVpnAttachmentsKey() {
  return ['site-to-site-vpn-attachments'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTransitGatewayPeeringsKey() {
  return ['transit-gateway-peerings'] as const
}

export function getTransitGatewayRouteTableAttachmentsKey() {
  return ['transit-gateway-route-table-attachments'] as const
}

export function getVpcAttachmentsKey() {
  return ['vpc-attachments'] as const
}

export function getPostAttachmentsAttachmentIdAcceptKey() {
  return ['attachments', '/attachments/:attachmentId/accept', 'POST'] as const
}

export function usePostAttachmentsAttachmentIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':attachmentId']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsAttachmentIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.attachments)[':attachmentId']['accept']['$post']>
        },
      ) => parseResponse(client.attachments[':attachmentId'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdConnectPeerAssociationsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connect-peer-associations',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdConnectPeerAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdConnectPeerAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
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
          client['global-networks'][':globalNetworkId']['connect-peer-associations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdConnectPeerAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdConnectPeerAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
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
          client['global-networks'][':globalNetworkId']['connect-peer-associations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdConnectPeerAssociationsKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connect-peer-associations',
    'POST',
  ] as const
}

export function usePostGlobalNetworksGlobalNetworkIdConnectPeerAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdConnectPeerAssociationsKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['connect-peer-associations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/customer-gateway-associations',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
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
          client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
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
          client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/customer-gateway-associations',
    'POST',
  ] as const
}

export function usePostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdLinkAssociationsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/link-associations',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdLinkAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdLinkAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
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
          client['global-networks'][':globalNetworkId']['link-associations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdLinkAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdLinkAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
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
          client['global-networks'][':globalNetworkId']['link-associations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdLinkAssociationsKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/link-associations', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdLinkAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdLinkAssociationsKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['link-associations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
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
          client['global-networks'][':globalNetworkId'][
            'transit-gateway-connect-peer-associations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
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
          client['global-networks'][':globalNetworkId'][
            'transit-gateway-connect-peer-associations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations',
    'POST',
  ] as const
}

export function usePostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'][
            'transit-gateway-connect-peer-associations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConnectAttachmentsKey() {
  return ['connect-attachments', '/connect-attachments', 'POST'] as const
}

export function usePostConnectAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-attachments']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['connect-attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['connect-attachments']['$post']> },
      ) => parseResponse(client['connect-attachments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectPeersKey(
  args: InferRequestType<(typeof client)['connect-peers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connect-peers', '/connect-peers', keyArgs] as const
}

export function useGetConnectPeers<TError = unknown>(
  args: InferRequestType<(typeof client)['connect-peers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConnectPeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['connect-peers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectPeers<TError = unknown>(
  args: InferRequestType<(typeof client)['connect-peers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConnectPeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['connect-peers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectPeersKey() {
  return ['connect-peers', '/connect-peers', 'POST'] as const
}

export function usePostConnectPeers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['connect-peers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectPeersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['connect-peers']['$post']> },
      ) => parseResponse(client['connect-peers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdConnectionsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/connections', keyArgs] as const
}

export function useGetGlobalNetworksGlobalNetworkIdConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdConnectionsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
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
          client['global-networks'][':globalNetworkId'].connections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdConnectionsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
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
          client['global-networks'][':globalNetworkId'].connections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdConnectionsKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/connections', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['connections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['connections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdConnectionsKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['connections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].connections.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCoreNetworksKey(
  args: InferRequestType<(typeof client)['core-networks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['core-networks', '/core-networks', keyArgs] as const
}

export function useGetCoreNetworks<TError = unknown>(
  args: InferRequestType<(typeof client)['core-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCoreNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['core-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreNetworks<TError = unknown>(
  args: InferRequestType<(typeof client)['core-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCoreNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['core-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCoreNetworksKey() {
  return ['core-networks', '/core-networks', 'POST'] as const
}

export function usePostCoreNetworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['core-networks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCoreNetworksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['core-networks']['$post']> },
      ) => parseResponse(client['core-networks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdDevicesKey(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/devices', keyArgs] as const
}

export function useGetGlobalNetworksGlobalNetworkIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
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
        ? getGetGlobalNetworksGlobalNetworkIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].devices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
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
        ? getGetGlobalNetworksGlobalNetworkIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].devices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdDevicesKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/devices', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdDevicesKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['devices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].devices.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksKey(
  args: InferRequestType<(typeof client)['global-networks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks', keyArgs] as const
}

export function useGetGlobalNetworks<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGlobalNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['global-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworks<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGlobalNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['global-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksKey() {
  return ['global-networks', '/global-networks', 'POST'] as const
}

export function usePostGlobalNetworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['global-networks']['$post']> },
      ) => parseResponse(client['global-networks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdLinksKey(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/links', keyArgs] as const
}

export function useGetGlobalNetworksGlobalNetworkIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>
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
        ? getGetGlobalNetworksGlobalNetworkIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].links.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>
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
        ? getGetGlobalNetworksGlobalNetworkIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].links.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdLinksKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/links', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdLinksKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['links']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].links.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdSitesKey(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/sites', keyArgs] as const
}

export function useGetGlobalNetworksGlobalNetworkIdSites<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>
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
        ? getGetGlobalNetworksGlobalNetworkIdSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].sites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdSites<TError = unknown>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>
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
        ? getGetGlobalNetworksGlobalNetworkIdSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].sites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdSitesKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/sites', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdSitesKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['sites']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].sites.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSiteToSiteVpnAttachmentsKey() {
  return ['site-to-site-vpn-attachments', '/site-to-site-vpn-attachments', 'POST'] as const
}

export function usePostSiteToSiteVpnAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['site-to-site-vpn-attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['site-to-site-vpn-attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSiteToSiteVpnAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['site-to-site-vpn-attachments']['$post']> },
      ) => parseResponse(client['site-to-site-vpn-attachments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransitGatewayPeeringsKey() {
  return ['transit-gateway-peerings', '/transit-gateway-peerings', 'POST'] as const
}

export function usePostTransitGatewayPeerings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['transit-gateway-peerings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['transit-gateway-peerings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransitGatewayPeeringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['transit-gateway-peerings']['$post']> },
      ) => parseResponse(client['transit-gateway-peerings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransitGatewayRouteTableAttachmentsKey() {
  return [
    'transit-gateway-route-table-attachments',
    '/transit-gateway-route-table-attachments',
    'POST',
  ] as const
}

export function usePostTransitGatewayRouteTableAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['transit-gateway-route-table-attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['transit-gateway-route-table-attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransitGatewayRouteTableAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['transit-gateway-route-table-attachments']['$post']>
        },
      ) =>
        parseResponse(client['transit-gateway-route-table-attachments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVpcAttachmentsKey() {
  return ['vpc-attachments', '/vpc-attachments', 'POST'] as const
}

export function usePostVpcAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['vpc-attachments']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vpc-attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVpcAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vpc-attachments']['$post']> },
      ) => parseResponse(client['vpc-attachments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAttachmentsAttachmentIdKey() {
  return ['attachments', '/attachments/:attachmentId', 'DELETE'] as const
}

export function useDeleteAttachmentsAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':attachmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttachmentsAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.attachments)[':attachmentId']['$delete']> },
      ) => parseResponse(client.attachments[':attachmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectPeersConnectPeerIdKey(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connect-peers', '/connect-peers/:connectPeerId', keyArgs] as const
}

export function useGetConnectPeersConnectPeerId<TError = unknown>(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
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
        ? getGetConnectPeersConnectPeerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['connect-peers'][':connectPeerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectPeersConnectPeerId<TError = unknown>(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
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
        ? getGetConnectPeersConnectPeerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['connect-peers'][':connectPeerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteConnectPeersConnectPeerIdKey() {
  return ['connect-peers', '/connect-peers/:connectPeerId', 'DELETE'] as const
}

export function useDeleteConnectPeersConnectPeerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectPeersConnectPeerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$delete']> },
      ) => parseResponse(client['connect-peers'][':connectPeerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connections/:connectionId',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].connections[':connectionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connections/:connectionId',
    'PATCH',
  ] as const
}

export function usePatchGlobalNetworksGlobalNetworkIdConnectionsConnectionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].connections[':connectionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCoreNetworksCoreNetworkIdKey(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['core-networks', '/core-networks/:coreNetworkId', keyArgs] as const
}

export function useGetCoreNetworksCoreNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
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
        ? getGetCoreNetworksCoreNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['core-networks'][':coreNetworkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreNetworksCoreNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
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
        ? getGetCoreNetworksCoreNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['core-networks'][':coreNetworkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCoreNetworksCoreNetworkIdKey() {
  return ['core-networks', '/core-networks/:coreNetworkId', 'DELETE'] as const
}

export function useDeleteCoreNetworksCoreNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCoreNetworksCoreNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$delete']> },
      ) => parseResponse(client['core-networks'][':coreNetworkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCoreNetworksCoreNetworkIdKey() {
  return ['core-networks', '/core-networks/:coreNetworkId', 'PATCH'] as const
}

export function usePatchCoreNetworksCoreNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCoreNetworksCoreNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$patch']> },
      ) => parseResponse(client['core-networks'][':coreNetworkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdKey() {
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-policy-versions/:policyVersionId',
    'DELETE',
  ] as const
}

export function useDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdKey()
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
            (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['core-networks'][':coreNetworkId']['core-network-policy-versions'][
            ':policyVersionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/devices/:deviceId',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].devices[':deviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalNetworksGlobalNetworkIdDevicesDeviceIdKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/devices/:deviceId',
    'PATCH',
  ] as const
}

export function usePatchGlobalNetworksGlobalNetworkIdDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGlobalNetworksGlobalNetworkIdDevicesDeviceIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].devices[':deviceId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdKey() {
  return ['global-networks', '/global-networks/:globalNetworkId', 'DELETE'] as const
}

export function useDeleteGlobalNetworksGlobalNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGlobalNetworksGlobalNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>
        },
      ) => parseResponse(client['global-networks'][':globalNetworkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalNetworksGlobalNetworkIdKey() {
  return ['global-networks', '/global-networks/:globalNetworkId', 'PATCH'] as const
}

export function usePatchGlobalNetworksGlobalNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGlobalNetworksGlobalNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>
        },
      ) => parseResponse(client['global-networks'][':globalNetworkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdLinksLinkIdKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/links/:linkId', 'DELETE'] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGlobalNetworksGlobalNetworkIdLinksLinkIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].links[':linkId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalNetworksGlobalNetworkIdLinksLinkIdKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/links/:linkId', 'PATCH'] as const
}

export function usePatchGlobalNetworksGlobalNetworkIdLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGlobalNetworksGlobalNetworkIdLinksLinkIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].links[':linkId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePeeringsPeeringIdKey() {
  return ['peerings', '/peerings/:peeringId', 'DELETE'] as const
}

export function useDeletePeeringsPeeringId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.peerings)[':peeringId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.peerings)[':peeringId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePeeringsPeeringIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.peerings)[':peeringId']['$delete']> },
      ) => parseResponse(client.peerings[':peeringId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourcePolicyResourceArnKey(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-policy', '/resource-policy/:resourceArn', keyArgs] as const
}

export function useGetResourcePolicyResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
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
        ? getGetResourcePolicyResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['resource-policy'][':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcePolicyResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
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
        ? getGetResourcePolicyResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['resource-policy'][':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResourcePolicyResourceArnKey() {
  return ['resource-policy', '/resource-policy/:resourceArn', 'POST'] as const
}

export function usePostResourcePolicyResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourcePolicyResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$post']> },
      ) => parseResponse(client['resource-policy'][':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteResourcePolicyResourceArnKey() {
  return ['resource-policy', '/resource-policy/:resourceArn', 'DELETE'] as const
}

export function useDeleteResourcePolicyResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteResourcePolicyResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$delete']> },
      ) => parseResponse(client['resource-policy'][':resourceArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdSitesSiteIdKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/sites/:siteId', 'DELETE'] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGlobalNetworksGlobalNetworkIdSitesSiteIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].sites[':siteId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalNetworksGlobalNetworkIdSitesSiteIdKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/sites/:siteId', 'PATCH'] as const
}

export function usePatchGlobalNetworksGlobalNetworkIdSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGlobalNetworksGlobalNetworkIdSitesSiteIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'].sites[':siteId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-registrations/:transitGatewayArn',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['transit-gateway-registrations'][
            ':transitGatewayArn'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connect-peer-associations/:connectPeerId',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['connect-peer-associations'][
            ':connectPeerId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/customer-gateway-associations/:customerGatewayArn',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['customer-gateway-associations'][
            ':customerGatewayArn'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/link-associations#deviceId&linkId',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'][
            'link-associations#deviceId&linkId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations/:transitGatewayConnectPeerArn',
    'DELETE',
  ] as const
}

export function useDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId'][
            'transit-gateway-connect-peer-associations'
          ][':transitGatewayConnectPeerArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteKey() {
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-change-sets/:policyVersionId/execute',
    'POST',
  ] as const
}

export function usePostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecute<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteKey()
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
            (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
          >
        },
      ) =>
        parseResponse(
          client['core-networks'][':coreNetworkId']['core-network-change-sets'][
            ':policyVersionId'
          ].execute.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConnectAttachmentsAttachmentIdKey(
  args: InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connect-attachments', '/connect-attachments/:attachmentId', keyArgs] as const
}

export function useGetConnectAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
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
        ? getGetConnectAttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['connect-attachments'][':attachmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
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
        ? getGetConnectAttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['connect-attachments'][':attachmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdKey(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-change-events/:policyVersionId',
    keyArgs,
  ] as const
}

export function useGetCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-change-events'][
            ':policyVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-change-events'][
            ':policyVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdKey(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-change-sets/:policyVersionId',
    keyArgs,
  ] as const
}

export function useGetCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-change-sets'][
            ':policyVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-change-sets'][
            ':policyVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCoreNetworksCoreNetworkIdCoreNetworkPolicyKey(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['core-networks', '/core-networks/:coreNetworkId/core-network-policy', keyArgs] as const
}

export function useGetCoreNetworksCoreNetworkIdCoreNetworkPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkPolicyKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-policy'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreNetworksCoreNetworkIdCoreNetworkPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkPolicyKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-policy'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyKey() {
  return ['core-networks', '/core-networks/:coreNetworkId/core-network-policy', 'POST'] as const
}

export function usePostCoreNetworksCoreNetworkIdCoreNetworkPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyKey()
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
            (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['core-networks'][':coreNetworkId']['core-network-policy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdNetworkResourceCountKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/network-resource-count',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdNetworkResourceCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkResourceCountKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
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
          client['global-networks'][':globalNetworkId']['network-resource-count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdNetworkResourceCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkResourceCountKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
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
          client['global-networks'][':globalNetworkId']['network-resource-count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/network-resource-relationships',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdNetworkResourceRelationships<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
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
          client['global-networks'][':globalNetworkId']['network-resource-relationships'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdNetworkResourceRelationships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
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
          client['global-networks'][':globalNetworkId']['network-resource-relationships'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdNetworkResourcesKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/network-resources',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdNetworkResources<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkResourcesKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
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
          client['global-networks'][':globalNetworkId']['network-resources'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdNetworkResources<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkResourcesKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
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
          client['global-networks'][':globalNetworkId']['network-resources'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdNetworkRoutesKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/network-routes', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdNetworkRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdNetworkRoutesKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['network-routes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdNetworkTelemetryKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/network-telemetry',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdNetworkTelemetry<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkTelemetryKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
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
          client['global-networks'][':globalNetworkId']['network-telemetry'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdNetworkTelemetry<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdNetworkTelemetryKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
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
          client['global-networks'][':globalNetworkId']['network-telemetry'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/route-analyses/:routeAnalysisId',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
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
          client['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
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
          client['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSiteToSiteVpnAttachmentsAttachmentIdKey(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'site-to-site-vpn-attachments',
    '/site-to-site-vpn-attachments/:attachmentId',
    keyArgs,
  ] as const
}

export function useGetSiteToSiteVpnAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
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
        ? getGetSiteToSiteVpnAttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['site-to-site-vpn-attachments'][':attachmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteToSiteVpnAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
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
        ? getGetSiteToSiteVpnAttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['site-to-site-vpn-attachments'][':attachmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTransitGatewayPeeringsPeeringIdKey(
  args: InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transit-gateway-peerings', '/transit-gateway-peerings/:peeringId', keyArgs] as const
}

export function useGetTransitGatewayPeeringsPeeringId<TError = unknown>(
  args: InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
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
        ? getGetTransitGatewayPeeringsPeeringIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['transit-gateway-peerings'][':peeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitGatewayPeeringsPeeringId<TError = unknown>(
  args: InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
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
        ? getGetTransitGatewayPeeringsPeeringIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['transit-gateway-peerings'][':peeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-registrations',
    keyArgs,
  ] as const
}

export function useGetGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
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
          client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
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
        ? getGetGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsKey(args)
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
                (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
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
          client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-registrations',
    'POST',
  ] as const
}

export function usePostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTransitGatewayRouteTableAttachmentsAttachmentIdKey(
  args: InferRequestType<
    (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'transit-gateway-route-table-attachments',
    '/transit-gateway-route-table-attachments/:attachmentId',
    keyArgs,
  ] as const
}

export function useGetTransitGatewayRouteTableAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
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
        ? getGetTransitGatewayRouteTableAttachmentsAttachmentIdKey(args)
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
                (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
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
          client['transit-gateway-route-table-attachments'][':attachmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitGatewayRouteTableAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
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
        ? getGetTransitGatewayRouteTableAttachmentsAttachmentIdKey(args)
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
                (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
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
          client['transit-gateway-route-table-attachments'][':attachmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVpcAttachmentsAttachmentIdKey(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vpc-attachments', '/vpc-attachments/:attachmentId', keyArgs] as const
}

export function useGetVpcAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
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
        ? getGetVpcAttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['vpc-attachments'][':attachmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpcAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
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
        ? getGetVpcAttachmentsAttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['vpc-attachments'][':attachmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchVpcAttachmentsAttachmentIdKey() {
  return ['vpc-attachments', '/vpc-attachments/:attachmentId', 'PATCH'] as const
}

export function usePatchVpcAttachmentsAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVpcAttachmentsAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']> },
      ) => parseResponse(client['vpc-attachments'][':attachmentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttachmentsKey(args: InferRequestType<typeof client.attachments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['attachments', '/attachments', keyArgs] as const
}

export function useGetAttachments<TError = unknown>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachments<TError = unknown>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsKey(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-policy-versions',
    keyArgs,
  ] as const
}

export function useGetCoreNetworksCoreNetworkIdCoreNetworkPolicyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-policy-versions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreNetworksCoreNetworkIdCoreNetworkPolicyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
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
        ? getGetCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsKey(args)
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
                (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
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
          client['core-networks'][':coreNetworkId']['core-network-policy-versions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsServiceAccessKey(
  args: InferRequestType<(typeof client.organizations)['service-access']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organizations', '/organizations/service-access', keyArgs] as const
}

export function useGetOrganizationsServiceAccess<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)['service-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
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
        ? getGetOrganizationsServiceAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations['service-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsServiceAccess<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)['service-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
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
        ? getGetOrganizationsServiceAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations['service-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsServiceAccessKey() {
  return ['organizations', '/organizations/service-access', 'POST'] as const
}

export function usePostOrganizationsServiceAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)['service-access']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)['service-access']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsServiceAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)['service-access']['$post']> },
      ) => parseResponse(client.organizations['service-access'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeeringsKey(args: InferRequestType<typeof client.peerings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['peerings', '/peerings', keyArgs] as const
}

export function useGetPeerings<TError = unknown>(
  args: InferRequestType<typeof client.peerings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeeringsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.peerings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPeerings<TError = unknown>(
  args: InferRequestType<typeof client.peerings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeeringsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.peerings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachmentsAttachmentIdRejectKey() {
  return ['attachments', '/attachments/:attachmentId/reject', 'POST'] as const
}

export function usePostAttachmentsAttachmentIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':attachmentId']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsAttachmentIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.attachments)[':attachmentId']['reject']['$post']>
        },
      ) => parseResponse(client.attachments[':attachmentId'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreKey() {
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-policy-versions/:policyVersionId/restore',
    'POST',
  ] as const
}

export function usePostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreKey()
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
            (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['core-networks'][':coreNetworkId']['core-network-policy-versions'][
            ':policyVersionId'
          ].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGlobalNetworksGlobalNetworkIdRouteAnalysesKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/route-analyses', 'POST'] as const
}

export function usePostGlobalNetworksGlobalNetworkIdRouteAnalyses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlobalNetworksGlobalNetworkIdRouteAnalysesKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['route-analyses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/network-resources/:resourceArn/metadata',
    'PATCH',
  ] as const
}

export function usePatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataKey()
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
            (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['global-networks'][':globalNetworkId']['network-resources'][
            ':resourceArn'
          ].metadata.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
