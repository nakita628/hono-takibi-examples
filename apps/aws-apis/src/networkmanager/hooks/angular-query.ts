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

export function getPostAttachmentsAttachmentIdAcceptMutationKey() {
  return ['attachments', '/attachments/:attachmentId/accept', 'POST'] as const
}

export function getPostAttachmentsAttachmentIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attachments)[':attachmentId']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsAttachmentIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attachments)[':attachmentId']['accept']['$post']>,
    ) {
      return parseResponse(client.attachments[':attachmentId'].accept.$post(args, options))
    },
  })
}

export function injectPostAttachmentsAttachmentIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['accept']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attachments)[':attachmentId']['accept']['$post']>,
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
    const mutationDefaults = getPostAttachmentsAttachmentIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['connect-peer-associations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdConnectPeerAssociations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdConnectPeerAssociationsMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connect-peer-associations',
    'POST',
  ] as const
}

export function getPostGlobalNetworksGlobalNetworkIdConnectPeerAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdConnectPeerAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['connect-peer-associations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdConnectPeerAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
        >,
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
    const mutationDefaults =
      getPostGlobalNetworksGlobalNetworkIdConnectPeerAssociationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/customer-gateway-associations',
    'POST',
  ] as const
}

export function getPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
        >,
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
    const mutationDefaults =
      getPostGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdLinkAssociationsQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdLinkAssociationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdLinkAssociationsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdLinkAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['link-associations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdLinkAssociations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdLinkAssociationsQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdLinkAssociationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdLinkAssociationsMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/link-associations', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdLinkAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdLinkAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['link-associations'].$post(args, options),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdLinkAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
        >,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdLinkAssociationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'][
          'transit-gateway-connect-peer-associations'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsQueryKey
        >
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
      ...getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations',
    'POST',
  ] as const
}

export function getPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'][
          'transit-gateway-connect-peer-associations'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
        >,
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
    const mutationDefaults =
      getPostGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostConnectAttachmentsMutationKey() {
  return ['connect-attachments', '/connect-attachments', 'POST'] as const
}

export function getPostConnectAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-attachments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['connect-attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['connect-attachments']['$post']>) {
      return parseResponse(client['connect-attachments'].$post(args, options))
    },
  })
}

export function injectPostConnectAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['connect-attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['connect-attachments']['$post']>,
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
    const mutationDefaults = getPostConnectAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectPeersQueryKey(
  args: InferRequestType<(typeof client)['connect-peers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connect-peers', '/connect-peers', keyArgs] as const
}

export function getConnectPeersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['connect-peers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectPeersQueryKey>
  >({
    queryKey: getConnectPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['connect-peers'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnectPeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['connect-peers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectPeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectPeersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostConnectPeersMutationKey() {
  return ['connect-peers', '/connect-peers', 'POST'] as const
}

export function getPostConnectPeersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['connect-peers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectPeersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['connect-peers']['$post']>) {
      return parseResponse(client['connect-peers'].$post(args, options))
    },
  })
}

export function injectPostConnectPeers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['connect-peers']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['connect-peers']['$post']>,
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
    const mutationDefaults = getPostConnectPeersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdConnectionsQueryKey(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/connections', keyArgs] as const
}

export function getGlobalNetworksGlobalNetworkIdConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['global-networks'][':globalNetworkId']['connections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdConnectionsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['global-networks'][':globalNetworkId']['connections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdConnectionsQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdConnectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdConnectionsMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/connections', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['connections']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].connections.$post(args, options),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['connections']['$post']
        >,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdConnectionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCoreNetworksQueryKey(
  args: InferRequestType<(typeof client)['core-networks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['core-networks', '/core-networks', keyArgs] as const
}

export function getCoreNetworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['core-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCoreNetworksQueryKey>
  >({
    queryKey: getCoreNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['core-networks'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCoreNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['core-networks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCoreNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCoreNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCoreNetworksMutationKey() {
  return ['core-networks', '/core-networks', 'POST'] as const
}

export function getPostCoreNetworksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['core-networks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCoreNetworksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['core-networks']['$post']>) {
      return parseResponse(client['core-networks'].$post(args, options))
    },
  })
}

export function injectPostCoreNetworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['core-networks']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['core-networks']['$post']>,
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
    const mutationDefaults = getPostCoreNetworksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdDevicesQueryKey(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/devices', keyArgs] as const
}

export function getGlobalNetworksGlobalNetworkIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdDevicesQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['devices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['global-networks'][':globalNetworkId']['devices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdDevicesQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdDevicesMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/devices', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['devices']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].devices.$post(args, options),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['global-networks'][':globalNetworkId']['devices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['devices']['$post']
        >,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksQueryKey(
  args: InferRequestType<(typeof client)['global-networks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks', keyArgs] as const
}

export function getGlobalNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksQueryKey>
  >({
    queryKey: getGlobalNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGlobalNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['global-networks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGlobalNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGlobalNetworksMutationKey() {
  return ['global-networks', '/global-networks', 'POST'] as const
}

export function getPostGlobalNetworksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['global-networks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['global-networks']['$post']>) {
      return parseResponse(client['global-networks'].$post(args, options))
    },
  })
}

export function injectPostGlobalNetworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['global-networks']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['global-networks']['$post']>,
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
    const mutationDefaults = getPostGlobalNetworksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdLinksQueryKey(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/links', keyArgs] as const
}

export function getGlobalNetworksGlobalNetworkIdLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdLinksQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdLinksQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdLinksMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/links', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['links']['$post']
      >,
    ) {
      return parseResponse(client['global-networks'][':globalNetworkId'].links.$post(args, options))
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$post']>,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdLinksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdSitesQueryKey(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-networks', '/global-networks/:globalNetworkId/sites', keyArgs] as const
}

export function getGlobalNetworksGlobalNetworkIdSitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdSitesQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].sites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['sites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdSitesQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdSitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdSitesMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/sites', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdSitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdSitesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['sites']['$post']
      >,
    ) {
      return parseResponse(client['global-networks'][':globalNetworkId'].sites.$post(args, options))
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdSites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$post']>,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdSitesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSiteToSiteVpnAttachmentsMutationKey() {
  return ['site-to-site-vpn-attachments', '/site-to-site-vpn-attachments', 'POST'] as const
}

export function getPostSiteToSiteVpnAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['site-to-site-vpn-attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['site-to-site-vpn-attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSiteToSiteVpnAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['site-to-site-vpn-attachments']['$post']>,
    ) {
      return parseResponse(client['site-to-site-vpn-attachments'].$post(args, options))
    },
  })
}

export function injectPostSiteToSiteVpnAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['site-to-site-vpn-attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['site-to-site-vpn-attachments']['$post']>,
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
    const mutationDefaults = getPostSiteToSiteVpnAttachmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTransitGatewayPeeringsMutationKey() {
  return ['transit-gateway-peerings', '/transit-gateway-peerings', 'POST'] as const
}

export function getPostTransitGatewayPeeringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['transit-gateway-peerings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['transit-gateway-peerings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransitGatewayPeeringsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['transit-gateway-peerings']['$post']>) {
      return parseResponse(client['transit-gateway-peerings'].$post(args, options))
    },
  })
}

export function injectPostTransitGatewayPeerings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['transit-gateway-peerings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['transit-gateway-peerings']['$post']>,
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
    const mutationDefaults = getPostTransitGatewayPeeringsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTransitGatewayRouteTableAttachmentsMutationKey() {
  return [
    'transit-gateway-route-table-attachments',
    '/transit-gateway-route-table-attachments',
    'POST',
  ] as const
}

export function getPostTransitGatewayRouteTableAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['transit-gateway-route-table-attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['transit-gateway-route-table-attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransitGatewayRouteTableAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['transit-gateway-route-table-attachments']['$post']>,
    ) {
      return parseResponse(client['transit-gateway-route-table-attachments'].$post(args, options))
    },
  })
}

export function injectPostTransitGatewayRouteTableAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['transit-gateway-route-table-attachments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['transit-gateway-route-table-attachments']['$post']>,
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
    const mutationDefaults = getPostTransitGatewayRouteTableAttachmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVpcAttachmentsMutationKey() {
  return ['vpc-attachments', '/vpc-attachments', 'POST'] as const
}

export function getPostVpcAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['vpc-attachments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['vpc-attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVpcAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vpc-attachments']['$post']>) {
      return parseResponse(client['vpc-attachments'].$post(args, options))
    },
  })
}

export function injectPostVpcAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['vpc-attachments']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['vpc-attachments']['$post']>,
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
    const mutationDefaults = getPostVpcAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAttachmentsAttachmentIdMutationKey() {
  return ['attachments', '/attachments/:attachmentId', 'DELETE'] as const
}

export function getDeleteAttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attachments)[':attachmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attachments)[':attachmentId']['$delete']>,
    ) {
      return parseResponse(client.attachments[':attachmentId'].$delete(args, options))
    },
  })
}

export function injectDeleteAttachmentsAttachmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attachments)[':attachmentId']['$delete']>,
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
    const mutationDefaults = getDeleteAttachmentsAttachmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectPeersConnectPeerIdQueryKey(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connect-peers', '/connect-peers/:connectPeerId', keyArgs] as const
}

export function getConnectPeersConnectPeerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectPeersConnectPeerIdQueryKey>
  >({
    queryKey: getConnectPeersConnectPeerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['connect-peers'][':connectPeerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectPeersConnectPeerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectPeersConnectPeerIdQueryKey>
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
      ...getConnectPeersConnectPeerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteConnectPeersConnectPeerIdMutationKey() {
  return ['connect-peers', '/connect-peers/:connectPeerId', 'DELETE'] as const
}

export function getDeleteConnectPeersConnectPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectPeersConnectPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>,
    ) {
      return parseResponse(client['connect-peers'][':connectPeerId'].$delete(args, options))
    },
  })
}

export function injectDeleteConnectPeersConnectPeerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>,
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
    const mutationDefaults = getDeleteConnectPeersConnectPeerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connections/:connectionId',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].connections[':connectionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connections/:connectionId',
    'PATCH',
  ] as const
}

export function getPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].connections[':connectionId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
        >,
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
    const mutationDefaults =
      getPatchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCoreNetworksCoreNetworkIdQueryKey(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['core-networks', '/core-networks/:coreNetworkId', keyArgs] as const
}

export function getCoreNetworksCoreNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCoreNetworksCoreNetworkIdQueryKey>
  >({
    queryKey: getCoreNetworksCoreNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['core-networks'][':coreNetworkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCoreNetworksCoreNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCoreNetworksCoreNetworkIdQueryKey>
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
      ...getCoreNetworksCoreNetworkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCoreNetworksCoreNetworkIdMutationKey() {
  return ['core-networks', '/core-networks/:coreNetworkId', 'DELETE'] as const
}

export function getDeleteCoreNetworksCoreNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCoreNetworksCoreNetworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>,
    ) {
      return parseResponse(client['core-networks'][':coreNetworkId'].$delete(args, options))
    },
  })
}

export function injectDeleteCoreNetworksCoreNetworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>,
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
    const mutationDefaults = getDeleteCoreNetworksCoreNetworkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCoreNetworksCoreNetworkIdMutationKey() {
  return ['core-networks', '/core-networks/:coreNetworkId', 'PATCH'] as const
}

export function getPatchCoreNetworksCoreNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCoreNetworksCoreNetworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>,
    ) {
      return parseResponse(client['core-networks'][':coreNetworkId'].$patch(args, options))
    },
  })
}

export function injectPatchCoreNetworksCoreNetworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>,
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
    const mutationDefaults = getPatchCoreNetworksCoreNetworkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdMutationKey() {
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-policy-versions/:policyVersionId',
    'DELETE',
  ] as const
}

export function getDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-policy-versions'][
          ':policyVersionId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/devices/:deviceId',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].devices[':deviceId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
        >,
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
    const mutationDefaults = getDeleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/devices/:deviceId',
    'PATCH',
  ] as const
}

export function getPatchGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].devices[':deviceId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchGlobalNetworksGlobalNetworkIdDevicesDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
        >,
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
    const mutationDefaults = getPatchGlobalNetworksGlobalNetworkIdDevicesDeviceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId', 'DELETE'] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGlobalNetworksGlobalNetworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>,
    ) {
      return parseResponse(client['global-networks'][':globalNetworkId'].$delete(args, options))
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>,
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
    const mutationDefaults = getDeleteGlobalNetworksGlobalNetworkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchGlobalNetworksGlobalNetworkIdMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId', 'PATCH'] as const
}

export function getPatchGlobalNetworksGlobalNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGlobalNetworksGlobalNetworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>,
    ) {
      return parseResponse(client['global-networks'][':globalNetworkId'].$patch(args, options))
    },
  })
}

export function injectPatchGlobalNetworksGlobalNetworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>,
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
    const mutationDefaults = getPatchGlobalNetworksGlobalNetworkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdLinksLinkIdMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/links/:linkId', 'DELETE'] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGlobalNetworksGlobalNetworkIdLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].links[':linkId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
        >,
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
    const mutationDefaults = getDeleteGlobalNetworksGlobalNetworkIdLinksLinkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchGlobalNetworksGlobalNetworkIdLinksLinkIdMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/links/:linkId', 'PATCH'] as const
}

export function getPatchGlobalNetworksGlobalNetworkIdLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGlobalNetworksGlobalNetworkIdLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].links[':linkId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchGlobalNetworksGlobalNetworkIdLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
        >,
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
    const mutationDefaults = getPatchGlobalNetworksGlobalNetworkIdLinksLinkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePeeringsPeeringIdMutationKey() {
  return ['peerings', '/peerings/:peeringId', 'DELETE'] as const
}

export function getDeletePeeringsPeeringIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.peerings)[':peeringId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.peerings)[':peeringId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePeeringsPeeringIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peerings)[':peeringId']['$delete']>) {
      return parseResponse(client.peerings[':peeringId'].$delete(args, options))
    },
  })
}

export function injectDeletePeeringsPeeringId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peerings)[':peeringId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.peerings)[':peeringId']['$delete']>,
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
    const mutationDefaults = getDeletePeeringsPeeringIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcePolicyResourceArnQueryKey(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-policy', '/resource-policy/:resourceArn', keyArgs] as const
}

export function getResourcePolicyResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcePolicyResourceArnQueryKey>
  >({
    queryKey: getResourcePolicyResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resource-policy'][':resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcePolicyResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcePolicyResourceArnQueryKey>
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
      ...getResourcePolicyResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostResourcePolicyResourceArnMutationKey() {
  return ['resource-policy', '/resource-policy/:resourceArn', 'POST'] as const
}

export function getPostResourcePolicyResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcePolicyResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$post']>,
    ) {
      return parseResponse(client['resource-policy'][':resourceArn'].$post(args, options))
    },
  })
}

export function injectPostResourcePolicyResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$post']>,
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
    const mutationDefaults = getPostResourcePolicyResourceArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteResourcePolicyResourceArnMutationKey() {
  return ['resource-policy', '/resource-policy/:resourceArn', 'DELETE'] as const
}

export function getDeleteResourcePolicyResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResourcePolicyResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$delete']>,
    ) {
      return parseResponse(client['resource-policy'][':resourceArn'].$delete(args, options))
    },
  })
}

export function injectDeleteResourcePolicyResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-policy'][':resourceArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$delete']>,
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
    const mutationDefaults = getDeleteResourcePolicyResourceArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdSitesSiteIdMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/sites/:siteId', 'DELETE'] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGlobalNetworksGlobalNetworkIdSitesSiteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].sites[':siteId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdSitesSiteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
        >,
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
    const mutationDefaults = getDeleteGlobalNetworksGlobalNetworkIdSitesSiteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchGlobalNetworksGlobalNetworkIdSitesSiteIdMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/sites/:siteId', 'PATCH'] as const
}

export function getPatchGlobalNetworksGlobalNetworkIdSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGlobalNetworksGlobalNetworkIdSitesSiteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId'].sites[':siteId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchGlobalNetworksGlobalNetworkIdSitesSiteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
        >,
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
    const mutationDefaults = getPatchGlobalNetworksGlobalNetworkIdSitesSiteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-registrations/:transitGatewayArn',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['transit-gateway-registrations'][
          ':transitGatewayArn'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/connect-peer-associations/:connectPeerId',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['connect-peer-associations'][
          ':connectPeerId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/customer-gateway-associations/:customerGatewayArn',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['customer-gateway-associations'][
          ':customerGatewayArn'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/link-associations#deviceId&linkId',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations/:transitGatewayConnectPeerArn',
    'DELETE',
  ] as const
}

export function getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][
          ':transitGatewayConnectPeerArn'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteMutationKey() {
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-change-sets/:policyVersionId/execute',
    'POST',
  ] as const
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
      >,
    ) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-change-sets'][
          ':policyVersionId'
        ].execute.$post(args, options),
      )
    },
  })
}

export function injectPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
        >,
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
    const mutationDefaults =
      getPostCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connect-attachments', '/connect-attachments/:attachmentId', keyArgs] as const
}

export function getConnectAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getConnectAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['connect-attachments'][':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['connect-attachments'][':attachmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectAttachmentsAttachmentIdQueryKey>
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
      ...getConnectAttachmentsAttachmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdQueryKey(
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

export function getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdQueryKey>
  >({
    queryKey: getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-change-events'][
          ':policyVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdQueryKey
        >
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
      ...getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdQueryKey(
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

export function getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdQueryKey>
  >({
    queryKey: getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-change-sets'][
          ':policyVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdQueryKey>
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
      ...getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCoreNetworksCoreNetworkIdCoreNetworkPolicyQueryKey(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['core-networks', '/core-networks/:coreNetworkId/core-network-policy', keyArgs] as const
}

export function getCoreNetworksCoreNetworkIdCoreNetworkPolicyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkPolicyQueryKey>
  >({
    queryKey: getCoreNetworksCoreNetworkIdCoreNetworkPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCoreNetworksCoreNetworkIdCoreNetworkPolicy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkPolicyQueryKey>
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
      ...getCoreNetworksCoreNetworkIdCoreNetworkPolicyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyMutationKey() {
  return ['core-networks', '/core-networks/:coreNetworkId/core-network-policy', 'POST'] as const
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
      >,
    ) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-policy'].$post(args, options),
      )
    },
  })
}

export function injectPostCoreNetworksCoreNetworkIdCoreNetworkPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
        >,
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
    const mutationDefaults = getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdNetworkResourceCountQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdNetworkResourceCountQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkResourceCountQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdNetworkResourceCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['network-resource-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdNetworkResourceCount<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkResourceCountQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdNetworkResourceCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['network-resource-relationships'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdNetworkResourceRelationships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdNetworkResourcesQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdNetworkResourcesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkResourcesQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdNetworkResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['network-resources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdNetworkResources<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkResourcesQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdNetworkResourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdNetworkRoutesMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/network-routes', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdNetworkRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdNetworkRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['network-routes'].$post(args, options),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdNetworkRoutes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
        >,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdNetworkRoutesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdNetworkTelemetryQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdNetworkTelemetryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkTelemetryQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdNetworkTelemetryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['network-telemetry'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdNetworkTelemetry<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdNetworkTelemetryQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdNetworkTelemetryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getSiteToSiteVpnAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'site-to-site-vpn-attachments',
    '/site-to-site-vpn-attachments/:attachmentId',
    keyArgs,
  ] as const
}

export function getSiteToSiteVpnAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSiteToSiteVpnAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getSiteToSiteVpnAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['site-to-site-vpn-attachments'][':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSiteToSiteVpnAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSiteToSiteVpnAttachmentsAttachmentIdQueryKey>
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
      ...getSiteToSiteVpnAttachmentsAttachmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTransitGatewayPeeringsPeeringIdQueryKey(
  args: InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transit-gateway-peerings', '/transit-gateway-peerings/:peeringId', keyArgs] as const
}

export function getTransitGatewayPeeringsPeeringIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitGatewayPeeringsPeeringIdQueryKey>
  >({
    queryKey: getTransitGatewayPeeringsPeeringIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['transit-gateway-peerings'][':peeringId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransitGatewayPeeringsPeeringId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransitGatewayPeeringsPeeringIdQueryKey>
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
      ...getTransitGatewayPeeringsPeeringIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsQueryKey(
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

export function getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsQueryKey>
  >({
    queryKey: getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsQueryKey>
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
      ...getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/transit-gateway-registrations',
    'POST',
  ] as const
}

export function getPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
        >,
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
    const mutationDefaults =
      getPostGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTransitGatewayRouteTableAttachmentsAttachmentIdQueryKey(
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

export function getTransitGatewayRouteTableAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getTransitGatewayRouteTableAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getTransitGatewayRouteTableAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['transit-gateway-route-table-attachments'][':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransitGatewayRouteTableAttachmentsAttachmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getTransitGatewayRouteTableAttachmentsAttachmentIdQueryKey>
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
      ...getTransitGatewayRouteTableAttachmentsAttachmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getVpcAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vpc-attachments', '/vpc-attachments/:attachmentId', keyArgs] as const
}

export function getVpcAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpcAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getVpcAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['vpc-attachments'][':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVpcAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVpcAttachmentsAttachmentIdQueryKey>
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
      ...getVpcAttachmentsAttachmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchVpcAttachmentsAttachmentIdMutationKey() {
  return ['vpc-attachments', '/vpc-attachments/:attachmentId', 'PATCH'] as const
}

export function getPatchVpcAttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVpcAttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>,
    ) {
      return parseResponse(client['vpc-attachments'][':attachmentId'].$patch(args, options))
    },
  })
}

export function injectPatchVpcAttachmentsAttachmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>,
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
    const mutationDefaults = getPatchVpcAttachmentsAttachmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAttachmentsQueryKey(args: InferRequestType<typeof client.attachments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['attachments', '/attachments', keyArgs] as const
}

export function getAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.attachments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttachmentsQueryKey>
  >({
    queryKey: getAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.attachments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAttachmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsQueryKey(
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

export function getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsQueryKey>
  >({
    queryKey: getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-policy-versions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCoreNetworksCoreNetworkIdCoreNetworkPolicyVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsQueryKey>
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
      ...getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsServiceAccessQueryKey(
  args: InferRequestType<(typeof client.organizations)['service-access']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['organizations', '/organizations/service-access', keyArgs] as const
}

export function getOrganizationsServiceAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)['service-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsServiceAccessQueryKey>
  >({
    queryKey: getOrganizationsServiceAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations['service-access'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsServiceAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)['service-access']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)['service-access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsServiceAccessQueryKey>
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
      ...getOrganizationsServiceAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganizationsServiceAccessMutationKey() {
  return ['organizations', '/organizations/service-access', 'POST'] as const
}

export function getPostOrganizationsServiceAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)['service-access']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)['service-access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsServiceAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)['service-access']['$post']>,
    ) {
      return parseResponse(client.organizations['service-access'].$post(args, options))
    },
  })
}

export function injectPostOrganizationsServiceAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)['service-access']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)['service-access']['$post']>,
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
    const mutationDefaults = getPostOrganizationsServiceAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPeeringsQueryKey(args: InferRequestType<typeof client.peerings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['peerings', '/peerings', keyArgs] as const
}

export function getPeeringsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.peerings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeeringsQueryKey>
  >({
    queryKey: getPeeringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.peerings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPeerings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.peerings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peerings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeeringsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeeringsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAttachmentsAttachmentIdRejectMutationKey() {
  return ['attachments', '/attachments/:attachmentId/reject', 'POST'] as const
}

export function getPostAttachmentsAttachmentIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['reject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attachments)[':attachmentId']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsAttachmentIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attachments)[':attachmentId']['reject']['$post']>,
    ) {
      return parseResponse(client.attachments[':attachmentId'].reject.$post(args, options))
    },
  })
}

export function injectPostAttachmentsAttachmentIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attachments)[':attachmentId']['reject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attachments)[':attachmentId']['reject']['$post']>,
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
    const mutationDefaults = getPostAttachmentsAttachmentIdRejectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreMutationKey() {
  return [
    'core-networks',
    '/core-networks/:coreNetworkId/core-network-policy-versions/:policyVersionId/restore',
    'POST',
  ] as const
}

export function getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client['core-networks'][':coreNetworkId']['core-network-policy-versions'][
          ':policyVersionId'
        ].restore.$post(args, options),
      )
    },
  })
}

export function injectPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
        >,
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
    const mutationDefaults =
      getPostCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGlobalNetworksGlobalNetworkIdRouteAnalysesMutationKey() {
  return ['global-networks', '/global-networks/:globalNetworkId/route-analyses', 'POST'] as const
}

export function getPostGlobalNetworksGlobalNetworkIdRouteAnalysesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalNetworksGlobalNetworkIdRouteAnalysesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['route-analyses'].$post(args, options),
      )
    },
  })
}

export function injectPostGlobalNetworksGlobalNetworkIdRouteAnalyses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
        >,
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
    const mutationDefaults = getPostGlobalNetworksGlobalNetworkIdRouteAnalysesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataMutationKey() {
  return [
    'global-networks',
    '/global-networks/:globalNetworkId/network-resources/:resourceArn/metadata',
    'PATCH',
  ] as const
}

export function getPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
      >,
    ) {
      return parseResponse(
        client['global-networks'][':globalNetworkId']['network-resources'][
          ':resourceArn'
        ].metadata.$patch(args, options),
      )
    },
  })
}

export function injectPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
        >,
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
    const mutationDefaults =
      getPatchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
