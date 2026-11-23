import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal',
    '/#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposal<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
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
      getPostXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnectMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect',
    '/#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnect<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
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
      getPostXAmzTargetOvertureServiceAllocateConnectionOnInterconnectMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAllocateHostedConnectionMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocateHostedConnection',
    '/#X-Amz-Target=OvertureService.AllocateHostedConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAllocateHostedConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAllocateHostedConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AllocateHostedConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAllocateHostedConnection<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
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
      getPostXAmzTargetOvertureServiceAllocateHostedConnectionMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface',
    '/#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface',
    '/#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAllocatePublicVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface',
    '/#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAllocateTransitVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAssociateConnectionWithLagMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateConnectionWithLag',
    '/#X-Amz-Target=OvertureService.AssociateConnectionWithLag',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAssociateConnectionWithLagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAssociateConnectionWithLagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AssociateConnectionWithLag'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAssociateConnectionWithLag<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
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
      getPostXAmzTargetOvertureServiceAssociateConnectionWithLagMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAssociateHostedConnectionMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateHostedConnection',
    '/#X-Amz-Target=OvertureService.AssociateHostedConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAssociateHostedConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAssociateHostedConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AssociateHostedConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAssociateHostedConnection<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
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
      getPostXAmzTargetOvertureServiceAssociateHostedConnectionMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAssociateMacSecKeyMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateMacSecKey',
    '/#X-Amz-Target=OvertureService.AssociateMacSecKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAssociateMacSecKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAssociateMacSecKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AssociateMacSecKey'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAssociateMacSecKey<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceAssociateMacSecKeyMutationOptions<
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

export function getPostXAmzTargetOvertureServiceAssociateVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.AssociateVirtualInterface',
    '/#X-Amz-Target=OvertureService.AssociateVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceAssociateVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceAssociateVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.AssociateVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceAssociateVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceAssociateVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceConfirmConnectionMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmConnection',
    '/#X-Amz-Target=OvertureService.ConfirmConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceConfirmConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceConfirmConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.ConfirmConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceConfirmConnection<
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
                  (typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceConfirmConnectionMutationOptions<
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

export function getPostXAmzTargetOvertureServiceConfirmCustomerAgreementMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmCustomerAgreement',
    '/#X-Amz-Target=OvertureService.ConfirmCustomerAgreement',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceConfirmCustomerAgreementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceConfirmCustomerAgreementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceConfirmCustomerAgreement<
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
                  (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
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
      getPostXAmzTargetOvertureServiceConfirmCustomerAgreementMutationOptions<
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

export function getPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface',
    '/#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface',
    '/#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceConfirmPublicVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface',
    '/#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceConfirmTransitVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateBGPPeerMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateBGPPeer',
    '/#X-Amz-Target=OvertureService.CreateBGPPeer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateBGPPeerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateBGPPeerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateBGPPeer'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateBGPPeer<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceCreateBGPPeerMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateConnectionMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateConnection',
    '/#X-Amz-Target=OvertureService.CreateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateConnection<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceCreateConnectionMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateDirectConnectGateway',
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateDirectConnectGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateDirectConnectGateway<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
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
      getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation',
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociation<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
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
      getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal',
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposal<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
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
      getPostXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateInterconnectMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateInterconnect',
    '/#X-Amz-Target=OvertureService.CreateInterconnect',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateInterconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateInterconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateInterconnect'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateInterconnect<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceCreateInterconnectMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateLagMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateLag',
    '/#X-Amz-Target=OvertureService.CreateLag',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateLagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateLagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OvertureService.CreateLag'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateLag<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceCreateLagMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface',
    '/#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreatePrivateVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreatePublicVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreatePublicVirtualInterface',
    '/#X-Amz-Target=OvertureService.CreatePublicVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreatePublicVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreatePublicVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreatePublicVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceCreatePublicVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceCreateTransitVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.CreateTransitVirtualInterface',
    '/#X-Amz-Target=OvertureService.CreateTransitVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceCreateTransitVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceCreateTransitVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceCreateTransitVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
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
      getPostXAmzTargetOvertureServiceCreateTransitVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteBGPPeerMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteBGPPeer',
    '/#X-Amz-Target=OvertureService.DeleteBGPPeer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteBGPPeerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteBGPPeerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteBGPPeer'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteBGPPeer<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDeleteBGPPeerMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteConnection',
    '/#X-Amz-Target=OvertureService.DeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteConnection<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDeleteConnectionMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteDirectConnectGateway',
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteDirectConnectGateway<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
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
      getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation',
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociation<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
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
      getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal',
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposal<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
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
      getPostXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteInterconnectMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteInterconnect',
    '/#X-Amz-Target=OvertureService.DeleteInterconnect',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteInterconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteInterconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteInterconnect'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteInterconnect<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDeleteInterconnectMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteLagMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteLag',
    '/#X-Amz-Target=OvertureService.DeleteLag',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteLagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteLagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OvertureService.DeleteLag'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteLag<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDeleteLagMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDeleteVirtualInterfaceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DeleteVirtualInterface',
    '/#X-Amz-Target=OvertureService.DeleteVirtualInterface',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDeleteVirtualInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDeleteVirtualInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DeleteVirtualInterface'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDeleteVirtualInterface<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDeleteVirtualInterfaceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeConnectionLoaMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeConnectionLoa',
    '/#X-Amz-Target=OvertureService.DescribeConnectionLoa',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeConnectionLoaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeConnectionLoaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeConnectionLoa'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeConnectionLoa<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeConnectionLoaMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeConnectionsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeConnections',
    '/#X-Amz-Target=OvertureService.DescribeConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeConnections'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeConnections<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeConnectionsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect',
    '/#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnect<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeCustomerMetadataMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeCustomerMetadata',
    '/#X-Amz-Target=OvertureService.DescribeCustomerMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeCustomerMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeCustomerMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeCustomerMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeCustomerMetadata<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeCustomerMetadataMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposals<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociations<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachments<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewaysMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeDirectConnectGateways',
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGateways',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeDirectConnectGateways<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeDirectConnectGatewaysMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeHostedConnectionsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeHostedConnections',
    '/#X-Amz-Target=OvertureService.DescribeHostedConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeHostedConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeHostedConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeHostedConnections'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeHostedConnections<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeHostedConnectionsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeInterconnectLoaMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeInterconnectLoa',
    '/#X-Amz-Target=OvertureService.DescribeInterconnectLoa',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeInterconnectLoaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeInterconnectLoaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeInterconnectLoa'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeInterconnectLoa<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeInterconnectLoaMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeInterconnectsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeInterconnects',
    '/#X-Amz-Target=OvertureService.DescribeInterconnects',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeInterconnectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeInterconnectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeInterconnects'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeInterconnects<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeInterconnectsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeLagsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeLags',
    '/#X-Amz-Target=OvertureService.DescribeLags',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeLagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeLagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeLags'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeLags<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeLagsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeLoaMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeLoa',
    '/#X-Amz-Target=OvertureService.DescribeLoa',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeLoaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeLoaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OvertureService.DescribeLoa'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeLoa<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeLoaMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeLocationsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeLocations',
    '/#X-Amz-Target=OvertureService.DescribeLocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeLocations'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeLocations<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeLocationsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeRouterConfigurationMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeRouterConfiguration',
    '/#X-Amz-Target=OvertureService.DescribeRouterConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeRouterConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeRouterConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeRouterConfiguration'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeRouterConfiguration<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeRouterConfigurationMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeTagsMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeTags',
    '/#X-Amz-Target=OvertureService.DescribeTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeTags'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeTags<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeTagsMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeVirtualGatewaysMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeVirtualGateways',
    '/#X-Amz-Target=OvertureService.DescribeVirtualGateways',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeVirtualGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeVirtualGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeVirtualGateways'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeVirtualGateways<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDescribeVirtualGatewaysMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDescribeVirtualInterfacesMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DescribeVirtualInterfaces',
    '/#X-Amz-Target=OvertureService.DescribeVirtualInterfaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDescribeVirtualInterfacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDescribeVirtualInterfacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDescribeVirtualInterfaces<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
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
      getPostXAmzTargetOvertureServiceDescribeVirtualInterfacesMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDisassociateConnectionFromLagMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DisassociateConnectionFromLag',
    '/#X-Amz-Target=OvertureService.DisassociateConnectionFromLag',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDisassociateConnectionFromLagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDisassociateConnectionFromLagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDisassociateConnectionFromLag<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
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
      getPostXAmzTargetOvertureServiceDisassociateConnectionFromLagMutationOptions<
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

export function getPostXAmzTargetOvertureServiceDisassociateMacSecKeyMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.DisassociateMacSecKey',
    '/#X-Amz-Target=OvertureService.DisassociateMacSecKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceDisassociateMacSecKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceDisassociateMacSecKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.DisassociateMacSecKey'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceDisassociateMacSecKey<
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
                  (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceDisassociateMacSecKeyMutationOptions<
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

export function getPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory',
    '/#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistory<
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
                  (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
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
      getPostXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryMutationOptions<
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

export function getPostXAmzTargetOvertureServiceStartBgpFailoverTestMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.StartBgpFailoverTest',
    '/#X-Amz-Target=OvertureService.StartBgpFailoverTest',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceStartBgpFailoverTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceStartBgpFailoverTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.StartBgpFailoverTest'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceStartBgpFailoverTest<
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
                  (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceStartBgpFailoverTestMutationOptions<
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

export function getPostXAmzTargetOvertureServiceStopBgpFailoverTestMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.StopBgpFailoverTest',
    '/#X-Amz-Target=OvertureService.StopBgpFailoverTest',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceStopBgpFailoverTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceStopBgpFailoverTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.StopBgpFailoverTest'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceStopBgpFailoverTest<
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
                  (typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceStopBgpFailoverTestMutationOptions<
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

export function getPostXAmzTargetOvertureServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.TagResource',
    '/#X-Amz-Target=OvertureService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OvertureService.TagResource'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetOvertureServiceTagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.UntagResource',
    '/#X-Amz-Target=OvertureService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceUntagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetOvertureServiceUpdateConnectionMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateConnection',
    '/#X-Amz-Target=OvertureService.UpdateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceUpdateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceUpdateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.UpdateConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceUpdateConnection<
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
                  (typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceUpdateConnectionMutationOptions<
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

export function getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateDirectConnectGateway',
    '/#X-Amz-Target=OvertureService.UpdateDirectConnectGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceUpdateDirectConnectGateway<
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
                  (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
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
      getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayMutationOptions<
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

export function getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation',
    '/#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociation<
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
                  (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
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
      getPostXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationMutationOptions<
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

export function getPostXAmzTargetOvertureServiceUpdateLagMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateLag',
    '/#X-Amz-Target=OvertureService.UpdateLag',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceUpdateLagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceUpdateLagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OvertureService.UpdateLag'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetOvertureServiceUpdateLag<
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
                ReturnType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOvertureServiceUpdateLagMutationOptions<
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

export function getPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesMutationKey() {
  return [
    '#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes',
    '/#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributes<
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
                  (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
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
      getPostXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesMutationOptions<
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
