import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalKey() {
  return ['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal'] as const
}

export function getXAmzTargetOvertureServiceAllocateConnectionOnInterconnectKey() {
  return ['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect'] as const
}

export function getXAmzTargetOvertureServiceAllocateHostedConnectionKey() {
  return ['#X-Amz-Target=OvertureService.AllocateHostedConnection'] as const
}

export function getXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceAssociateConnectionWithLagKey() {
  return ['#X-Amz-Target=OvertureService.AssociateConnectionWithLag'] as const
}

export function getXAmzTargetOvertureServiceAssociateHostedConnectionKey() {
  return ['#X-Amz-Target=OvertureService.AssociateHostedConnection'] as const
}

export function getXAmzTargetOvertureServiceAssociateMacSecKeyKey() {
  return ['#X-Amz-Target=OvertureService.AssociateMacSecKey'] as const
}

export function getXAmzTargetOvertureServiceAssociateVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.AssociateVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceConfirmConnectionKey() {
  return ['#X-Amz-Target=OvertureService.ConfirmConnection'] as const
}

export function getXAmzTargetOvertureServiceConfirmCustomerAgreementKey() {
  return ['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement'] as const
}

export function getXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceCreateBGPPeerKey() {
  return ['#X-Amz-Target=OvertureService.CreateBGPPeer'] as const
}

export function getXAmzTargetOvertureServiceCreateConnectionKey() {
  return ['#X-Amz-Target=OvertureService.CreateConnection'] as const
}

export function getXAmzTargetOvertureServiceCreateDirectConnectGatewayKey() {
  return ['#X-Amz-Target=OvertureService.CreateDirectConnectGateway'] as const
}

export function getXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationKey() {
  return ['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation'] as const
}

export function getXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalKey() {
  return ['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal'] as const
}

export function getXAmzTargetOvertureServiceCreateInterconnectKey() {
  return ['#X-Amz-Target=OvertureService.CreateInterconnect'] as const
}

export function getXAmzTargetOvertureServiceCreateLagKey() {
  return ['#X-Amz-Target=OvertureService.CreateLag'] as const
}

export function getXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceCreatePublicVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceCreateTransitVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceDeleteBGPPeerKey() {
  return ['#X-Amz-Target=OvertureService.DeleteBGPPeer'] as const
}

export function getXAmzTargetOvertureServiceDeleteConnectionKey() {
  return ['#X-Amz-Target=OvertureService.DeleteConnection'] as const
}

export function getXAmzTargetOvertureServiceDeleteDirectConnectGatewayKey() {
  return ['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway'] as const
}

export function getXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationKey() {
  return ['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation'] as const
}

export function getXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalKey() {
  return ['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal'] as const
}

export function getXAmzTargetOvertureServiceDeleteInterconnectKey() {
  return ['#X-Amz-Target=OvertureService.DeleteInterconnect'] as const
}

export function getXAmzTargetOvertureServiceDeleteLagKey() {
  return ['#X-Amz-Target=OvertureService.DeleteLag'] as const
}

export function getXAmzTargetOvertureServiceDeleteVirtualInterfaceKey() {
  return ['#X-Amz-Target=OvertureService.DeleteVirtualInterface'] as const
}

export function getXAmzTargetOvertureServiceDescribeConnectionLoaKey() {
  return ['#X-Amz-Target=OvertureService.DescribeConnectionLoa'] as const
}

export function getXAmzTargetOvertureServiceDescribeConnectionsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeConnections'] as const
}

export function getXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectKey() {
  return ['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect'] as const
}

export function getXAmzTargetOvertureServiceDescribeCustomerMetadataKey() {
  return ['#X-Amz-Target=OvertureService.DescribeCustomerMetadata'] as const
}

export function getXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals'] as const
}

export function getXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations'] as const
}

export function getXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments'] as const
}

export function getXAmzTargetOvertureServiceDescribeDirectConnectGatewaysKey() {
  return ['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways'] as const
}

export function getXAmzTargetOvertureServiceDescribeHostedConnectionsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeHostedConnections'] as const
}

export function getXAmzTargetOvertureServiceDescribeInterconnectLoaKey() {
  return ['#X-Amz-Target=OvertureService.DescribeInterconnectLoa'] as const
}

export function getXAmzTargetOvertureServiceDescribeInterconnectsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeInterconnects'] as const
}

export function getXAmzTargetOvertureServiceDescribeLagsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeLags'] as const
}

export function getXAmzTargetOvertureServiceDescribeLoaKey() {
  return ['#X-Amz-Target=OvertureService.DescribeLoa'] as const
}

export function getXAmzTargetOvertureServiceDescribeLocationsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeLocations'] as const
}

export function getXAmzTargetOvertureServiceDescribeRouterConfigurationKey() {
  return ['#X-Amz-Target=OvertureService.DescribeRouterConfiguration'] as const
}

export function getXAmzTargetOvertureServiceDescribeTagsKey() {
  return ['#X-Amz-Target=OvertureService.DescribeTags'] as const
}

export function getXAmzTargetOvertureServiceDescribeVirtualGatewaysKey() {
  return ['#X-Amz-Target=OvertureService.DescribeVirtualGateways'] as const
}

export function getXAmzTargetOvertureServiceDescribeVirtualInterfacesKey() {
  return ['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces'] as const
}

export function getXAmzTargetOvertureServiceDisassociateConnectionFromLagKey() {
  return ['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag'] as const
}

export function getXAmzTargetOvertureServiceDisassociateMacSecKeyKey() {
  return ['#X-Amz-Target=OvertureService.DisassociateMacSecKey'] as const
}

export function getXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryKey() {
  return ['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory'] as const
}

export function getXAmzTargetOvertureServiceStartBgpFailoverTestKey() {
  return ['#X-Amz-Target=OvertureService.StartBgpFailoverTest'] as const
}

export function getXAmzTargetOvertureServiceStopBgpFailoverTestKey() {
  return ['#X-Amz-Target=OvertureService.StopBgpFailoverTest'] as const
}

export function getXAmzTargetOvertureServiceTagResourceKey() {
  return ['#X-Amz-Target=OvertureService.TagResource'] as const
}

export function getXAmzTargetOvertureServiceUntagResourceKey() {
  return ['#X-Amz-Target=OvertureService.UntagResource'] as const
}

export function getXAmzTargetOvertureServiceUpdateConnectionKey() {
  return ['#X-Amz-Target=OvertureService.UpdateConnection'] as const
}

export function getXAmzTargetOvertureServiceUpdateDirectConnectGatewayKey() {
  return ['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway'] as const
}

export function getXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationKey() {
  return ['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation'] as const
}

export function getXAmzTargetOvertureServiceUpdateLagKey() {
  return ['#X-Amz-Target=OvertureService.UpdateLag'] as const
}

export function getXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesKey() {
  return ['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes'] as const
}

export function getPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalKey() {
  return [
    '#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal',
    '/#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnectKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect',
    '/#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAllocateConnectionOnInterconnect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnectKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAllocateHostedConnectionKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocateHostedConnection',
    '/#X-Amz-Target=OvertureService.AllocateHostedConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAllocateHostedConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAllocateHostedConnectionKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AllocateHostedConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface',
    '/#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAllocatePrivateVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface',
    '/#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAllocatePublicVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface',
    '/#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAllocateTransitVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAssociateConnectionWithLagKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateConnectionWithLag',
    '/#X-Amz-Target=OvertureService.AssociateConnectionWithLag',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAssociateConnectionWithLag<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAssociateConnectionWithLagKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AssociateConnectionWithLag'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAssociateHostedConnectionKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateHostedConnection',
    '/#X-Amz-Target=OvertureService.AssociateHostedConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAssociateHostedConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAssociateHostedConnectionKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AssociateHostedConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAssociateMacSecKeyKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateMacSecKey',
    '/#X-Amz-Target=OvertureService.AssociateMacSecKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAssociateMacSecKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAssociateMacSecKeyKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AssociateMacSecKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceAssociateVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateVirtualInterface',
    '/#X-Amz-Target=OvertureService.AssociateVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceAssociateVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceAssociateVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.AssociateVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceConfirmConnectionKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmConnection',
    '/#X-Amz-Target=OvertureService.ConfirmConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceConfirmConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceConfirmConnectionKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.ConfirmConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceConfirmCustomerAgreementKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmCustomerAgreement',
    '/#X-Amz-Target=OvertureService.ConfirmCustomerAgreement',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceConfirmCustomerAgreement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceConfirmCustomerAgreementKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface',
    '/#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceConfirmPrivateVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface',
    '/#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceConfirmPublicVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface',
    '/#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceConfirmTransitVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateBGPPeerKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateBGPPeer',
    '/#X-Amz-Target=OvertureService.CreateBGPPeer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateBGPPeer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreateBGPPeerKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreateBGPPeer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateConnectionKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateConnection',
    '/#X-Amz-Target=OvertureService.CreateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreateConnectionKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreateConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateDirectConnectGateway',
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateDirectConnectGateway<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreateDirectConnectGateway'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation',
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal',
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateInterconnectKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateInterconnect',
    '/#X-Amz-Target=OvertureService.CreateInterconnect',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateInterconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreateInterconnectKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreateInterconnect'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateLagKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateLag',
    '/#X-Amz-Target=OvertureService.CreateLag',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateLag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreateLagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=OvertureService.CreateLag'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface',
    '/#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreatePrivateVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreatePublicVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.CreatePublicVirtualInterface',
    '/#X-Amz-Target=OvertureService.CreatePublicVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreatePublicVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreatePublicVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceCreateTransitVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateTransitVirtualInterface',
    '/#X-Amz-Target=OvertureService.CreateTransitVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceCreateTransitVirtualInterface<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceCreateTransitVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteBGPPeerKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteBGPPeer',
    '/#X-Amz-Target=OvertureService.DeleteBGPPeer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteBGPPeer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDeleteBGPPeerKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DeleteBGPPeer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteConnectionKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteConnection',
    '/#X-Amz-Target=OvertureService.DeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDeleteConnectionKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DeleteConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteDirectConnectGateway',
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteDirectConnectGateway<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation',
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal',
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteInterconnectKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteInterconnect',
    '/#X-Amz-Target=OvertureService.DeleteInterconnect',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteInterconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDeleteInterconnectKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DeleteInterconnect'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteLagKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteLag',
    '/#X-Amz-Target=OvertureService.DeleteLag',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteLag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDeleteLagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=OvertureService.DeleteLag'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDeleteVirtualInterfaceKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteVirtualInterface',
    '/#X-Amz-Target=OvertureService.DeleteVirtualInterface',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDeleteVirtualInterface<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDeleteVirtualInterfaceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DeleteVirtualInterface'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeConnectionLoaKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeConnectionLoa',
    '/#X-Amz-Target=OvertureService.DescribeConnectionLoa',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeConnectionLoa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeConnectionLoaKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeConnectionLoa'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeConnectionsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeConnections',
    '/#X-Amz-Target=OvertureService.DescribeConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeConnectionsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeConnections'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect',
    '/#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeCustomerMetadataKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeCustomerMetadata',
    '/#X-Amz-Target=OvertureService.DescribeCustomerMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeCustomerMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeCustomerMetadataKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeCustomerMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposals<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewaysKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGateways',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGateways',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeDirectConnectGateways<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewaysKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeHostedConnectionsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeHostedConnections',
    '/#X-Amz-Target=OvertureService.DescribeHostedConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeHostedConnections<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeHostedConnectionsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeHostedConnections'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeInterconnectLoaKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeInterconnectLoa',
    '/#X-Amz-Target=OvertureService.DescribeInterconnectLoa',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeInterconnectLoa<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeInterconnectLoaKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeInterconnectLoa'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeInterconnectsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeInterconnects',
    '/#X-Amz-Target=OvertureService.DescribeInterconnects',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeInterconnects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeInterconnectsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeInterconnects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeLagsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeLags',
    '/#X-Amz-Target=OvertureService.DescribeLags',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeLags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeLagsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeLags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeLoaKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeLoa',
    '/#X-Amz-Target=OvertureService.DescribeLoa',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeLoa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeLoaKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeLoa'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeLocationsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeLocations',
    '/#X-Amz-Target=OvertureService.DescribeLocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeLocationsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeLocations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeRouterConfigurationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeRouterConfiguration',
    '/#X-Amz-Target=OvertureService.DescribeRouterConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeRouterConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeRouterConfigurationKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeRouterConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeTagsKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeTags',
    '/#X-Amz-Target=OvertureService.DescribeTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeTagsKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeVirtualGatewaysKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeVirtualGateways',
    '/#X-Amz-Target=OvertureService.DescribeVirtualGateways',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeVirtualGateways<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeVirtualGatewaysKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeVirtualGateways'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDescribeVirtualInterfacesKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeVirtualInterfaces',
    '/#X-Amz-Target=OvertureService.DescribeVirtualInterfaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDescribeVirtualInterfaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDescribeVirtualInterfacesKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDisassociateConnectionFromLagKey() {
  return [
    '#X-Amz-Target=OvertureService.DisassociateConnectionFromLag',
    '/#X-Amz-Target=OvertureService.DisassociateConnectionFromLag',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDisassociateConnectionFromLag<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDisassociateConnectionFromLagKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceDisassociateMacSecKeyKey() {
  return [
    '#X-Amz-Target=OvertureService.DisassociateMacSecKey',
    '/#X-Amz-Target=OvertureService.DisassociateMacSecKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceDisassociateMacSecKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceDisassociateMacSecKeyKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.DisassociateMacSecKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryKey() {
  return [
    '#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory',
    '/#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceListVirtualInterfaceTestHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceStartBgpFailoverTestKey() {
  return [
    '#X-Amz-Target=OvertureService.StartBgpFailoverTest',
    '/#X-Amz-Target=OvertureService.StartBgpFailoverTest',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceStartBgpFailoverTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceStartBgpFailoverTestKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.StartBgpFailoverTest'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceStopBgpFailoverTestKey() {
  return [
    '#X-Amz-Target=OvertureService.StopBgpFailoverTest',
    '/#X-Amz-Target=OvertureService.StopBgpFailoverTest',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceStopBgpFailoverTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceStopBgpFailoverTestKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.StopBgpFailoverTest'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceTagResourceKey() {
  return [
    '#X-Amz-Target=OvertureService.TagResource',
    '/#X-Amz-Target=OvertureService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=OvertureService.UntagResource',
    '/#X-Amz-Target=OvertureService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceUpdateConnectionKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateConnection',
    '/#X-Amz-Target=OvertureService.UpdateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceUpdateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceUpdateConnectionKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.UpdateConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateDirectConnectGateway',
    '/#X-Amz-Target=OvertureService.UpdateDirectConnectGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceUpdateDirectConnectGateway<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation',
    '/#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceUpdateLagKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateLag',
    '/#X-Amz-Target=OvertureService.UpdateLag',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceUpdateLag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceUpdateLagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=OvertureService.UpdateLag'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes',
    '/#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesKey()
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
            (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
