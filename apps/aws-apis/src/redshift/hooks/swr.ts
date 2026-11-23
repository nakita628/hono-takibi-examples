import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionAcceptReservedNodeExchangeKey() {
  return ['#Action=AcceptReservedNodeExchange'] as const
}

export function getActionAddPartnerKey() {
  return ['#Action=AddPartner'] as const
}

export function getActionAssociateDataShareConsumerKey() {
  return ['#Action=AssociateDataShareConsumer'] as const
}

export function getActionAuthorizeClusterSecurityGroupIngressKey() {
  return ['#Action=AuthorizeClusterSecurityGroupIngress'] as const
}

export function getActionAuthorizeDataShareKey() {
  return ['#Action=AuthorizeDataShare'] as const
}

export function getActionAuthorizeEndpointAccessKey() {
  return ['#Action=AuthorizeEndpointAccess'] as const
}

export function getActionAuthorizeSnapshotAccessKey() {
  return ['#Action=AuthorizeSnapshotAccess'] as const
}

export function getActionBatchDeleteClusterSnapshotsKey() {
  return ['#Action=BatchDeleteClusterSnapshots'] as const
}

export function getActionBatchModifyClusterSnapshotsKey() {
  return ['#Action=BatchModifyClusterSnapshots'] as const
}

export function getActionCancelResizeKey() {
  return ['#Action=CancelResize'] as const
}

export function getActionCopyClusterSnapshotKey() {
  return ['#Action=CopyClusterSnapshot'] as const
}

export function getActionCreateAuthenticationProfileKey() {
  return ['#Action=CreateAuthenticationProfile'] as const
}

export function getActionCreateClusterKey() {
  return ['#Action=CreateCluster'] as const
}

export function getActionCreateClusterParameterGroupKey() {
  return ['#Action=CreateClusterParameterGroup'] as const
}

export function getActionCreateClusterSecurityGroupKey() {
  return ['#Action=CreateClusterSecurityGroup'] as const
}

export function getActionCreateClusterSnapshotKey() {
  return ['#Action=CreateClusterSnapshot'] as const
}

export function getActionCreateClusterSubnetGroupKey() {
  return ['#Action=CreateClusterSubnetGroup'] as const
}

export function getActionCreateEndpointAccessKey() {
  return ['#Action=CreateEndpointAccess'] as const
}

export function getActionCreateEventSubscriptionKey() {
  return ['#Action=CreateEventSubscription'] as const
}

export function getActionCreateHsmClientCertificateKey() {
  return ['#Action=CreateHsmClientCertificate'] as const
}

export function getActionCreateHsmConfigurationKey() {
  return ['#Action=CreateHsmConfiguration'] as const
}

export function getActionCreateScheduledActionKey() {
  return ['#Action=CreateScheduledAction'] as const
}

export function getActionCreateSnapshotCopyGrantKey() {
  return ['#Action=CreateSnapshotCopyGrant'] as const
}

export function getActionCreateSnapshotScheduleKey() {
  return ['#Action=CreateSnapshotSchedule'] as const
}

export function getActionCreateTagsKey() {
  return ['#Action=CreateTags'] as const
}

export function getActionCreateUsageLimitKey() {
  return ['#Action=CreateUsageLimit'] as const
}

export function getActionDeauthorizeDataShareKey() {
  return ['#Action=DeauthorizeDataShare'] as const
}

export function getActionDeleteAuthenticationProfileKey() {
  return ['#Action=DeleteAuthenticationProfile'] as const
}

export function getActionDeleteClusterKey() {
  return ['#Action=DeleteCluster'] as const
}

export function getActionDeleteClusterParameterGroupKey() {
  return ['#Action=DeleteClusterParameterGroup'] as const
}

export function getActionDeleteClusterSecurityGroupKey() {
  return ['#Action=DeleteClusterSecurityGroup'] as const
}

export function getActionDeleteClusterSnapshotKey() {
  return ['#Action=DeleteClusterSnapshot'] as const
}

export function getActionDeleteClusterSubnetGroupKey() {
  return ['#Action=DeleteClusterSubnetGroup'] as const
}

export function getActionDeleteEndpointAccessKey() {
  return ['#Action=DeleteEndpointAccess'] as const
}

export function getActionDeleteEventSubscriptionKey() {
  return ['#Action=DeleteEventSubscription'] as const
}

export function getActionDeleteHsmClientCertificateKey() {
  return ['#Action=DeleteHsmClientCertificate'] as const
}

export function getActionDeleteHsmConfigurationKey() {
  return ['#Action=DeleteHsmConfiguration'] as const
}

export function getActionDeletePartnerKey() {
  return ['#Action=DeletePartner'] as const
}

export function getActionDeleteScheduledActionKey() {
  return ['#Action=DeleteScheduledAction'] as const
}

export function getActionDeleteSnapshotCopyGrantKey() {
  return ['#Action=DeleteSnapshotCopyGrant'] as const
}

export function getActionDeleteSnapshotScheduleKey() {
  return ['#Action=DeleteSnapshotSchedule'] as const
}

export function getActionDeleteTagsKey() {
  return ['#Action=DeleteTags'] as const
}

export function getActionDeleteUsageLimitKey() {
  return ['#Action=DeleteUsageLimit'] as const
}

export function getActionDescribeAccountAttributesKey() {
  return ['#Action=DescribeAccountAttributes'] as const
}

export function getActionDescribeAuthenticationProfilesKey() {
  return ['#Action=DescribeAuthenticationProfiles'] as const
}

export function getActionDescribeClusterDbRevisionsKey() {
  return ['#Action=DescribeClusterDbRevisions'] as const
}

export function getActionDescribeClusterParameterGroupsKey() {
  return ['#Action=DescribeClusterParameterGroups'] as const
}

export function getActionDescribeClusterParametersKey() {
  return ['#Action=DescribeClusterParameters'] as const
}

export function getActionDescribeClusterSecurityGroupsKey() {
  return ['#Action=DescribeClusterSecurityGroups'] as const
}

export function getActionDescribeClusterSnapshotsKey() {
  return ['#Action=DescribeClusterSnapshots'] as const
}

export function getActionDescribeClusterSubnetGroupsKey() {
  return ['#Action=DescribeClusterSubnetGroups'] as const
}

export function getActionDescribeClusterTracksKey() {
  return ['#Action=DescribeClusterTracks'] as const
}

export function getActionDescribeClusterVersionsKey() {
  return ['#Action=DescribeClusterVersions'] as const
}

export function getActionDescribeClustersKey() {
  return ['#Action=DescribeClusters'] as const
}

export function getActionDescribeDataSharesKey() {
  return ['#Action=DescribeDataShares'] as const
}

export function getActionDescribeDataSharesForConsumerKey() {
  return ['#Action=DescribeDataSharesForConsumer'] as const
}

export function getActionDescribeDataSharesForProducerKey() {
  return ['#Action=DescribeDataSharesForProducer'] as const
}

export function getActionDescribeDefaultClusterParametersKey() {
  return ['#Action=DescribeDefaultClusterParameters'] as const
}

export function getActionDescribeEndpointAccessKey() {
  return ['#Action=DescribeEndpointAccess'] as const
}

export function getActionDescribeEndpointAuthorizationKey() {
  return ['#Action=DescribeEndpointAuthorization'] as const
}

export function getActionDescribeEventCategoriesKey() {
  return ['#Action=DescribeEventCategories'] as const
}

export function getActionDescribeEventSubscriptionsKey() {
  return ['#Action=DescribeEventSubscriptions'] as const
}

export function getActionDescribeEventsKey() {
  return ['#Action=DescribeEvents'] as const
}

export function getActionDescribeHsmClientCertificatesKey() {
  return ['#Action=DescribeHsmClientCertificates'] as const
}

export function getActionDescribeHsmConfigurationsKey() {
  return ['#Action=DescribeHsmConfigurations'] as const
}

export function getActionDescribeLoggingStatusKey() {
  return ['#Action=DescribeLoggingStatus'] as const
}

export function getActionDescribeNodeConfigurationOptionsKey() {
  return ['#Action=DescribeNodeConfigurationOptions'] as const
}

export function getActionDescribeOrderableClusterOptionsKey() {
  return ['#Action=DescribeOrderableClusterOptions'] as const
}

export function getActionDescribePartnersKey() {
  return ['#Action=DescribePartners'] as const
}

export function getActionDescribeReservedNodeExchangeStatusKey() {
  return ['#Action=DescribeReservedNodeExchangeStatus'] as const
}

export function getActionDescribeReservedNodeOfferingsKey() {
  return ['#Action=DescribeReservedNodeOfferings'] as const
}

export function getActionDescribeReservedNodesKey() {
  return ['#Action=DescribeReservedNodes'] as const
}

export function getActionDescribeResizeKey() {
  return ['#Action=DescribeResize'] as const
}

export function getActionDescribeScheduledActionsKey() {
  return ['#Action=DescribeScheduledActions'] as const
}

export function getActionDescribeSnapshotCopyGrantsKey() {
  return ['#Action=DescribeSnapshotCopyGrants'] as const
}

export function getActionDescribeSnapshotSchedulesKey() {
  return ['#Action=DescribeSnapshotSchedules'] as const
}

export function getActionDescribeStorageKey() {
  return ['#Action=DescribeStorage'] as const
}

export function getActionDescribeTableRestoreStatusKey() {
  return ['#Action=DescribeTableRestoreStatus'] as const
}

export function getActionDescribeTagsKey() {
  return ['#Action=DescribeTags'] as const
}

export function getActionDescribeUsageLimitsKey() {
  return ['#Action=DescribeUsageLimits'] as const
}

export function getActionDisableLoggingKey() {
  return ['#Action=DisableLogging'] as const
}

export function getActionDisableSnapshotCopyKey() {
  return ['#Action=DisableSnapshotCopy'] as const
}

export function getActionDisassociateDataShareConsumerKey() {
  return ['#Action=DisassociateDataShareConsumer'] as const
}

export function getActionEnableLoggingKey() {
  return ['#Action=EnableLogging'] as const
}

export function getActionEnableSnapshotCopyKey() {
  return ['#Action=EnableSnapshotCopy'] as const
}

export function getActionGetClusterCredentialsKey() {
  return ['#Action=GetClusterCredentials'] as const
}

export function getActionGetClusterCredentialsWithIAMKey() {
  return ['#Action=GetClusterCredentialsWithIAM'] as const
}

export function getActionGetReservedNodeExchangeConfigurationOptionsKey() {
  return ['#Action=GetReservedNodeExchangeConfigurationOptions'] as const
}

export function getActionGetReservedNodeExchangeOfferingsKey() {
  return ['#Action=GetReservedNodeExchangeOfferings'] as const
}

export function getActionModifyAquaConfigurationKey() {
  return ['#Action=ModifyAquaConfiguration'] as const
}

export function getActionModifyAuthenticationProfileKey() {
  return ['#Action=ModifyAuthenticationProfile'] as const
}

export function getActionModifyClusterKey() {
  return ['#Action=ModifyCluster'] as const
}

export function getActionModifyClusterDbRevisionKey() {
  return ['#Action=ModifyClusterDbRevision'] as const
}

export function getActionModifyClusterIamRolesKey() {
  return ['#Action=ModifyClusterIamRoles'] as const
}

export function getActionModifyClusterMaintenanceKey() {
  return ['#Action=ModifyClusterMaintenance'] as const
}

export function getActionModifyClusterParameterGroupKey() {
  return ['#Action=ModifyClusterParameterGroup'] as const
}

export function getActionModifyClusterSnapshotKey() {
  return ['#Action=ModifyClusterSnapshot'] as const
}

export function getActionModifyClusterSnapshotScheduleKey() {
  return ['#Action=ModifyClusterSnapshotSchedule'] as const
}

export function getActionModifyClusterSubnetGroupKey() {
  return ['#Action=ModifyClusterSubnetGroup'] as const
}

export function getActionModifyEndpointAccessKey() {
  return ['#Action=ModifyEndpointAccess'] as const
}

export function getActionModifyEventSubscriptionKey() {
  return ['#Action=ModifyEventSubscription'] as const
}

export function getActionModifyScheduledActionKey() {
  return ['#Action=ModifyScheduledAction'] as const
}

export function getActionModifySnapshotCopyRetentionPeriodKey() {
  return ['#Action=ModifySnapshotCopyRetentionPeriod'] as const
}

export function getActionModifySnapshotScheduleKey() {
  return ['#Action=ModifySnapshotSchedule'] as const
}

export function getActionModifyUsageLimitKey() {
  return ['#Action=ModifyUsageLimit'] as const
}

export function getActionPauseClusterKey() {
  return ['#Action=PauseCluster'] as const
}

export function getActionPurchaseReservedNodeOfferingKey() {
  return ['#Action=PurchaseReservedNodeOffering'] as const
}

export function getActionRebootClusterKey() {
  return ['#Action=RebootCluster'] as const
}

export function getActionRejectDataShareKey() {
  return ['#Action=RejectDataShare'] as const
}

export function getActionResetClusterParameterGroupKey() {
  return ['#Action=ResetClusterParameterGroup'] as const
}

export function getActionResizeClusterKey() {
  return ['#Action=ResizeCluster'] as const
}

export function getActionRestoreFromClusterSnapshotKey() {
  return ['#Action=RestoreFromClusterSnapshot'] as const
}

export function getActionRestoreTableFromClusterSnapshotKey() {
  return ['#Action=RestoreTableFromClusterSnapshot'] as const
}

export function getActionResumeClusterKey() {
  return ['#Action=ResumeCluster'] as const
}

export function getActionRevokeClusterSecurityGroupIngressKey() {
  return ['#Action=RevokeClusterSecurityGroupIngress'] as const
}

export function getActionRevokeEndpointAccessKey() {
  return ['#Action=RevokeEndpointAccess'] as const
}

export function getActionRevokeSnapshotAccessKey() {
  return ['#Action=RevokeSnapshotAccess'] as const
}

export function getActionRotateEncryptionKeyKey() {
  return ['#Action=RotateEncryptionKey'] as const
}

export function getActionUpdatePartnerStatusKey() {
  return ['#Action=UpdatePartnerStatus'] as const
}

export function getGetActionAcceptReservedNodeExchangeKey(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AcceptReservedNodeExchange',
    '/#Action=AcceptReservedNodeExchange',
    keyArgs,
  ] as const
}

export function useGetActionAcceptReservedNodeExchange<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
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
        ? getGetActionAcceptReservedNodeExchangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AcceptReservedNodeExchange'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAcceptReservedNodeExchange<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
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
        ? getGetActionAcceptReservedNodeExchangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AcceptReservedNodeExchange'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAcceptReservedNodeExchangeKey() {
  return [
    '#Action=AcceptReservedNodeExchange',
    '/#Action=AcceptReservedNodeExchange',
    'POST',
  ] as const
}

export function usePostActionAcceptReservedNodeExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAcceptReservedNodeExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>
        },
      ) => parseResponse(client['#Action=AcceptReservedNodeExchange'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAddPartnerKey(
  args: InferRequestType<(typeof client)['#Action=AddPartner']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddPartner', '/#Action=AddPartner', keyArgs] as const
}

export function useGetActionAddPartner<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddPartner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>>
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
        ? getGetActionAddPartnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddPartner'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddPartner<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddPartner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>>
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
        ? getGetActionAddPartnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddPartner'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddPartnerKey() {
  return ['#Action=AddPartner', '/#Action=AddPartner', 'POST'] as const
}

export function usePostActionAddPartner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddPartner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddPartnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddPartner']['$post']> },
      ) => parseResponse(client['#Action=AddPartner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAssociateDataShareConsumerKey(
  args: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AssociateDataShareConsumer',
    '/#Action=AssociateDataShareConsumer',
    keyArgs,
  ] as const
}

export function useGetActionAssociateDataShareConsumer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
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
        ? getGetActionAssociateDataShareConsumerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AssociateDataShareConsumer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAssociateDataShareConsumer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
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
        ? getGetActionAssociateDataShareConsumerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AssociateDataShareConsumer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAssociateDataShareConsumerKey() {
  return [
    '#Action=AssociateDataShareConsumer',
    '/#Action=AssociateDataShareConsumer',
    'POST',
  ] as const
}

export function usePostActionAssociateDataShareConsumer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAssociateDataShareConsumerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>
        },
      ) => parseResponse(client['#Action=AssociateDataShareConsumer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAuthorizeClusterSecurityGroupIngressKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AuthorizeClusterSecurityGroupIngress',
    '/#Action=AuthorizeClusterSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function useGetActionAuthorizeClusterSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
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
        ? getGetActionAuthorizeClusterSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=AuthorizeClusterSecurityGroupIngress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAuthorizeClusterSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
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
        ? getGetActionAuthorizeClusterSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=AuthorizeClusterSecurityGroupIngress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionAuthorizeClusterSecurityGroupIngressKey() {
  return [
    '#Action=AuthorizeClusterSecurityGroupIngress',
    '/#Action=AuthorizeClusterSecurityGroupIngress',
    'POST',
  ] as const
}

export function usePostActionAuthorizeClusterSecurityGroupIngress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAuthorizeClusterSecurityGroupIngressKey()
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
            (typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=AuthorizeClusterSecurityGroupIngress'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionAuthorizeDataShareKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AuthorizeDataShare', '/#Action=AuthorizeDataShare', keyArgs] as const
}

export function useGetActionAuthorizeDataShare<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
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
        ? getGetActionAuthorizeDataShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AuthorizeDataShare'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAuthorizeDataShare<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
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
        ? getGetActionAuthorizeDataShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AuthorizeDataShare'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAuthorizeDataShareKey() {
  return ['#Action=AuthorizeDataShare', '/#Action=AuthorizeDataShare', 'POST'] as const
}

export function usePostActionAuthorizeDataShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAuthorizeDataShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$post']> },
      ) => parseResponse(client['#Action=AuthorizeDataShare'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAuthorizeEndpointAccessKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AuthorizeEndpointAccess', '/#Action=AuthorizeEndpointAccess', keyArgs] as const
}

export function useGetActionAuthorizeEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
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
        ? getGetActionAuthorizeEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AuthorizeEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAuthorizeEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
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
        ? getGetActionAuthorizeEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AuthorizeEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAuthorizeEndpointAccessKey() {
  return ['#Action=AuthorizeEndpointAccess', '/#Action=AuthorizeEndpointAccess', 'POST'] as const
}

export function usePostActionAuthorizeEndpointAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAuthorizeEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']> },
      ) => parseResponse(client['#Action=AuthorizeEndpointAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAuthorizeSnapshotAccessKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AuthorizeSnapshotAccess', '/#Action=AuthorizeSnapshotAccess', keyArgs] as const
}

export function useGetActionAuthorizeSnapshotAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
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
        ? getGetActionAuthorizeSnapshotAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AuthorizeSnapshotAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAuthorizeSnapshotAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
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
        ? getGetActionAuthorizeSnapshotAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AuthorizeSnapshotAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAuthorizeSnapshotAccessKey() {
  return ['#Action=AuthorizeSnapshotAccess', '/#Action=AuthorizeSnapshotAccess', 'POST'] as const
}

export function usePostActionAuthorizeSnapshotAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAuthorizeSnapshotAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']> },
      ) => parseResponse(client['#Action=AuthorizeSnapshotAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionBatchDeleteClusterSnapshotsKey(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=BatchDeleteClusterSnapshots',
    '/#Action=BatchDeleteClusterSnapshots',
    keyArgs,
  ] as const
}

export function useGetActionBatchDeleteClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
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
        ? getGetActionBatchDeleteClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=BatchDeleteClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionBatchDeleteClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
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
        ? getGetActionBatchDeleteClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=BatchDeleteClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionBatchDeleteClusterSnapshotsKey() {
  return [
    '#Action=BatchDeleteClusterSnapshots',
    '/#Action=BatchDeleteClusterSnapshots',
    'POST',
  ] as const
}

export function usePostActionBatchDeleteClusterSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionBatchDeleteClusterSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>
        },
      ) => parseResponse(client['#Action=BatchDeleteClusterSnapshots'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionBatchModifyClusterSnapshotsKey(
  args: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=BatchModifyClusterSnapshots',
    '/#Action=BatchModifyClusterSnapshots',
    keyArgs,
  ] as const
}

export function useGetActionBatchModifyClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
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
        ? getGetActionBatchModifyClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=BatchModifyClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionBatchModifyClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
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
        ? getGetActionBatchModifyClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=BatchModifyClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionBatchModifyClusterSnapshotsKey() {
  return [
    '#Action=BatchModifyClusterSnapshots',
    '/#Action=BatchModifyClusterSnapshots',
    'POST',
  ] as const
}

export function usePostActionBatchModifyClusterSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionBatchModifyClusterSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>
        },
      ) => parseResponse(client['#Action=BatchModifyClusterSnapshots'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCancelResizeKey(
  args: InferRequestType<(typeof client)['#Action=CancelResize']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelResize', '/#Action=CancelResize', keyArgs] as const
}

export function useGetActionCancelResize<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CancelResize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>>
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
        ? getGetActionCancelResizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CancelResize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCancelResize<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CancelResize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>>
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
        ? getGetActionCancelResizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CancelResize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCancelResizeKey() {
  return ['#Action=CancelResize', '/#Action=CancelResize', 'POST'] as const
}

export function usePostActionCancelResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CancelResize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCancelResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CancelResize']['$post']> },
      ) => parseResponse(client['#Action=CancelResize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCopyClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyClusterSnapshot', '/#Action=CopyClusterSnapshot', keyArgs] as const
}

export function useGetActionCopyClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
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
        ? getGetActionCopyClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCopyClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
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
        ? getGetActionCopyClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCopyClusterSnapshotKey() {
  return ['#Action=CopyClusterSnapshot', '/#Action=CopyClusterSnapshot', 'POST'] as const
}

export function usePostActionCopyClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCopyClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=CopyClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateAuthenticationProfileKey(
  args: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateAuthenticationProfile',
    '/#Action=CreateAuthenticationProfile',
    keyArgs,
  ] as const
}

export function useGetActionCreateAuthenticationProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
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
        ? getGetActionCreateAuthenticationProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateAuthenticationProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateAuthenticationProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
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
        ? getGetActionCreateAuthenticationProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateAuthenticationProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateAuthenticationProfileKey() {
  return [
    '#Action=CreateAuthenticationProfile',
    '/#Action=CreateAuthenticationProfile',
    'POST',
  ] as const
}

export function usePostActionCreateAuthenticationProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateAuthenticationProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>
        },
      ) => parseResponse(client['#Action=CreateAuthenticationProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateClusterKey(
  args: InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateCluster', '/#Action=CreateCluster', keyArgs] as const
}

export function useGetActionCreateCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>
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
        ? getGetActionCreateClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>
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
        ? getGetActionCreateClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateClusterKey() {
  return ['#Action=CreateCluster', '/#Action=CreateCluster', 'POST'] as const
}

export function usePostActionCreateCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateCluster']['$post']> },
      ) => parseResponse(client['#Action=CreateCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateClusterParameterGroup',
    '/#Action=CreateClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionCreateClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
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
        ? getGetActionCreateClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
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
        ? getGetActionCreateClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateClusterParameterGroupKey() {
  return [
    '#Action=CreateClusterParameterGroup',
    '/#Action=CreateClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionCreateClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=CreateClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateClusterSecurityGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateClusterSecurityGroup',
    '/#Action=CreateClusterSecurityGroup',
    keyArgs,
  ] as const
}

export function useGetActionCreateClusterSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
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
        ? getGetActionCreateClusterSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateClusterSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateClusterSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
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
        ? getGetActionCreateClusterSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateClusterSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateClusterSecurityGroupKey() {
  return [
    '#Action=CreateClusterSecurityGroup',
    '/#Action=CreateClusterSecurityGroup',
    'POST',
  ] as const
}

export function usePostActionCreateClusterSecurityGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateClusterSecurityGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>
        },
      ) => parseResponse(client['#Action=CreateClusterSecurityGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateClusterSnapshot', '/#Action=CreateClusterSnapshot', keyArgs] as const
}

export function useGetActionCreateClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
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
        ? getGetActionCreateClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
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
        ? getGetActionCreateClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateClusterSnapshotKey() {
  return ['#Action=CreateClusterSnapshot', '/#Action=CreateClusterSnapshot', 'POST'] as const
}

export function usePostActionCreateClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=CreateClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateClusterSubnetGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateClusterSubnetGroup', '/#Action=CreateClusterSubnetGroup', keyArgs] as const
}

export function useGetActionCreateClusterSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
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
        ? getGetActionCreateClusterSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateClusterSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateClusterSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
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
        ? getGetActionCreateClusterSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateClusterSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateClusterSubnetGroupKey() {
  return ['#Action=CreateClusterSubnetGroup', '/#Action=CreateClusterSubnetGroup', 'POST'] as const
}

export function usePostActionCreateClusterSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateClusterSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateClusterSubnetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateEndpointAccessKey(
  args: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateEndpointAccess', '/#Action=CreateEndpointAccess', keyArgs] as const
}

export function useGetActionCreateEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
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
        ? getGetActionCreateEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
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
        ? getGetActionCreateEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateEndpointAccessKey() {
  return ['#Action=CreateEndpointAccess', '/#Action=CreateEndpointAccess', 'POST'] as const
}

export function usePostActionCreateEndpointAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$post']> },
      ) => parseResponse(client['#Action=CreateEndpointAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateEventSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', keyArgs] as const
}

export function useGetActionCreateEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
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
        ? getGetActionCreateEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
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
        ? getGetActionCreateEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateEventSubscriptionKey() {
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', 'POST'] as const
}

export function usePostActionCreateEventSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']> },
      ) => parseResponse(client['#Action=CreateEventSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateHsmClientCertificateKey(
  args: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateHsmClientCertificate',
    '/#Action=CreateHsmClientCertificate',
    keyArgs,
  ] as const
}

export function useGetActionCreateHsmClientCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
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
        ? getGetActionCreateHsmClientCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateHsmClientCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateHsmClientCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
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
        ? getGetActionCreateHsmClientCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateHsmClientCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateHsmClientCertificateKey() {
  return [
    '#Action=CreateHsmClientCertificate',
    '/#Action=CreateHsmClientCertificate',
    'POST',
  ] as const
}

export function usePostActionCreateHsmClientCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateHsmClientCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>
        },
      ) => parseResponse(client['#Action=CreateHsmClientCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateHsmConfigurationKey(
  args: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateHsmConfiguration', '/#Action=CreateHsmConfiguration', keyArgs] as const
}

export function useGetActionCreateHsmConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
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
        ? getGetActionCreateHsmConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateHsmConfiguration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateHsmConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
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
        ? getGetActionCreateHsmConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateHsmConfiguration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateHsmConfigurationKey() {
  return ['#Action=CreateHsmConfiguration', '/#Action=CreateHsmConfiguration', 'POST'] as const
}

export function usePostActionCreateHsmConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateHsmConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$post']> },
      ) => parseResponse(client['#Action=CreateHsmConfiguration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateScheduledActionKey(
  args: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateScheduledAction', '/#Action=CreateScheduledAction', keyArgs] as const
}

export function useGetActionCreateScheduledAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
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
        ? getGetActionCreateScheduledActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateScheduledAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateScheduledAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
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
        ? getGetActionCreateScheduledActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateScheduledAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateScheduledActionKey() {
  return ['#Action=CreateScheduledAction', '/#Action=CreateScheduledAction', 'POST'] as const
}

export function usePostActionCreateScheduledAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateScheduledActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$post']> },
      ) => parseResponse(client['#Action=CreateScheduledAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateSnapshotCopyGrantKey(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateSnapshotCopyGrant', '/#Action=CreateSnapshotCopyGrant', keyArgs] as const
}

export function useGetActionCreateSnapshotCopyGrant<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
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
        ? getGetActionCreateSnapshotCopyGrantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateSnapshotCopyGrant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateSnapshotCopyGrant<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
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
        ? getGetActionCreateSnapshotCopyGrantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateSnapshotCopyGrant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateSnapshotCopyGrantKey() {
  return ['#Action=CreateSnapshotCopyGrant', '/#Action=CreateSnapshotCopyGrant', 'POST'] as const
}

export function usePostActionCreateSnapshotCopyGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateSnapshotCopyGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']> },
      ) => parseResponse(client['#Action=CreateSnapshotCopyGrant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateSnapshotScheduleKey(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateSnapshotSchedule', '/#Action=CreateSnapshotSchedule', keyArgs] as const
}

export function useGetActionCreateSnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
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
        ? getGetActionCreateSnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateSnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateSnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
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
        ? getGetActionCreateSnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateSnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateSnapshotScheduleKey() {
  return ['#Action=CreateSnapshotSchedule', '/#Action=CreateSnapshotSchedule', 'POST'] as const
}

export function usePostActionCreateSnapshotSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateSnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']> },
      ) => parseResponse(client['#Action=CreateSnapshotSchedule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateTagsKey(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateTags', '/#Action=CreateTags', keyArgs] as const
}

export function useGetActionCreateTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>>
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
        ? getGetActionCreateTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>>
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
        ? getGetActionCreateTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateTagsKey() {
  return ['#Action=CreateTags', '/#Action=CreateTags', 'POST'] as const
}

export function usePostActionCreateTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateTags']['$post']> },
      ) => parseResponse(client['#Action=CreateTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateUsageLimitKey(
  args: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateUsageLimit', '/#Action=CreateUsageLimit', keyArgs] as const
}

export function useGetActionCreateUsageLimit<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
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
        ? getGetActionCreateUsageLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateUsageLimit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateUsageLimit<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
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
        ? getGetActionCreateUsageLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateUsageLimit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateUsageLimitKey() {
  return ['#Action=CreateUsageLimit', '/#Action=CreateUsageLimit', 'POST'] as const
}

export function usePostActionCreateUsageLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateUsageLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$post']> },
      ) => parseResponse(client['#Action=CreateUsageLimit'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeauthorizeDataShareKey(
  args: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeauthorizeDataShare', '/#Action=DeauthorizeDataShare', keyArgs] as const
}

export function useGetActionDeauthorizeDataShare<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
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
        ? getGetActionDeauthorizeDataShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeauthorizeDataShare'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeauthorizeDataShare<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
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
        ? getGetActionDeauthorizeDataShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeauthorizeDataShare'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeauthorizeDataShareKey() {
  return ['#Action=DeauthorizeDataShare', '/#Action=DeauthorizeDataShare', 'POST'] as const
}

export function usePostActionDeauthorizeDataShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeauthorizeDataShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$post']> },
      ) => parseResponse(client['#Action=DeauthorizeDataShare'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteAuthenticationProfileKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteAuthenticationProfile',
    '/#Action=DeleteAuthenticationProfile',
    keyArgs,
  ] as const
}

export function useGetActionDeleteAuthenticationProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
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
        ? getGetActionDeleteAuthenticationProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteAuthenticationProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAuthenticationProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
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
        ? getGetActionDeleteAuthenticationProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteAuthenticationProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAuthenticationProfileKey() {
  return [
    '#Action=DeleteAuthenticationProfile',
    '/#Action=DeleteAuthenticationProfile',
    'POST',
  ] as const
}

export function usePostActionDeleteAuthenticationProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAuthenticationProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteAuthenticationProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteClusterKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteCluster', '/#Action=DeleteCluster', keyArgs] as const
}

export function useGetActionDeleteCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>
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
        ? getGetActionDeleteClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>
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
        ? getGetActionDeleteClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteClusterKey() {
  return ['#Action=DeleteCluster', '/#Action=DeleteCluster', 'POST'] as const
}

export function usePostActionDeleteCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteCluster']['$post']> },
      ) => parseResponse(client['#Action=DeleteCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteClusterParameterGroup',
    '/#Action=DeleteClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionDeleteClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
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
        ? getGetActionDeleteClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
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
        ? getGetActionDeleteClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteClusterParameterGroupKey() {
  return [
    '#Action=DeleteClusterParameterGroup',
    '/#Action=DeleteClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionDeleteClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteClusterSecurityGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteClusterSecurityGroup',
    '/#Action=DeleteClusterSecurityGroup',
    keyArgs,
  ] as const
}

export function useGetActionDeleteClusterSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
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
        ? getGetActionDeleteClusterSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteClusterSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteClusterSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
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
        ? getGetActionDeleteClusterSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteClusterSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteClusterSecurityGroupKey() {
  return [
    '#Action=DeleteClusterSecurityGroup',
    '/#Action=DeleteClusterSecurityGroup',
    'POST',
  ] as const
}

export function usePostActionDeleteClusterSecurityGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteClusterSecurityGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteClusterSecurityGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteClusterSnapshot', '/#Action=DeleteClusterSnapshot', keyArgs] as const
}

export function useGetActionDeleteClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
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
        ? getGetActionDeleteClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
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
        ? getGetActionDeleteClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteClusterSnapshotKey() {
  return ['#Action=DeleteClusterSnapshot', '/#Action=DeleteClusterSnapshot', 'POST'] as const
}

export function usePostActionDeleteClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=DeleteClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteClusterSubnetGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteClusterSubnetGroup', '/#Action=DeleteClusterSubnetGroup', keyArgs] as const
}

export function useGetActionDeleteClusterSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
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
        ? getGetActionDeleteClusterSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteClusterSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteClusterSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
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
        ? getGetActionDeleteClusterSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteClusterSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteClusterSubnetGroupKey() {
  return ['#Action=DeleteClusterSubnetGroup', '/#Action=DeleteClusterSubnetGroup', 'POST'] as const
}

export function usePostActionDeleteClusterSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteClusterSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteClusterSubnetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteEndpointAccessKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteEndpointAccess', '/#Action=DeleteEndpointAccess', keyArgs] as const
}

export function useGetActionDeleteEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
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
        ? getGetActionDeleteEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
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
        ? getGetActionDeleteEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteEndpointAccessKey() {
  return ['#Action=DeleteEndpointAccess', '/#Action=DeleteEndpointAccess', 'POST'] as const
}

export function usePostActionDeleteEndpointAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$post']> },
      ) => parseResponse(client['#Action=DeleteEndpointAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteEventSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', keyArgs] as const
}

export function useGetActionDeleteEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
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
        ? getGetActionDeleteEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
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
        ? getGetActionDeleteEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteEventSubscriptionKey() {
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', 'POST'] as const
}

export function usePostActionDeleteEventSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']> },
      ) => parseResponse(client['#Action=DeleteEventSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteHsmClientCertificateKey(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteHsmClientCertificate',
    '/#Action=DeleteHsmClientCertificate',
    keyArgs,
  ] as const
}

export function useGetActionDeleteHsmClientCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
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
        ? getGetActionDeleteHsmClientCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteHsmClientCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteHsmClientCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
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
        ? getGetActionDeleteHsmClientCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteHsmClientCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteHsmClientCertificateKey() {
  return [
    '#Action=DeleteHsmClientCertificate',
    '/#Action=DeleteHsmClientCertificate',
    'POST',
  ] as const
}

export function usePostActionDeleteHsmClientCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteHsmClientCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteHsmClientCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteHsmConfigurationKey(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteHsmConfiguration', '/#Action=DeleteHsmConfiguration', keyArgs] as const
}

export function useGetActionDeleteHsmConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
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
        ? getGetActionDeleteHsmConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteHsmConfiguration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteHsmConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
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
        ? getGetActionDeleteHsmConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteHsmConfiguration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteHsmConfigurationKey() {
  return ['#Action=DeleteHsmConfiguration', '/#Action=DeleteHsmConfiguration', 'POST'] as const
}

export function usePostActionDeleteHsmConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteHsmConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']> },
      ) => parseResponse(client['#Action=DeleteHsmConfiguration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeletePartnerKey(
  args: InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeletePartner', '/#Action=DeletePartner', keyArgs] as const
}

export function useGetActionDeletePartner<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>
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
        ? getGetActionDeletePartnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeletePartner'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeletePartner<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>
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
        ? getGetActionDeletePartnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeletePartner'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeletePartnerKey() {
  return ['#Action=DeletePartner', '/#Action=DeletePartner', 'POST'] as const
}

export function usePostActionDeletePartner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeletePartner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeletePartnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeletePartner']['$post']> },
      ) => parseResponse(client['#Action=DeletePartner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteScheduledActionKey(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', keyArgs] as const
}

export function useGetActionDeleteScheduledAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
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
        ? getGetActionDeleteScheduledActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteScheduledAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteScheduledAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
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
        ? getGetActionDeleteScheduledActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteScheduledAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteScheduledActionKey() {
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', 'POST'] as const
}

export function usePostActionDeleteScheduledAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteScheduledActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']> },
      ) => parseResponse(client['#Action=DeleteScheduledAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSnapshotCopyGrantKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSnapshotCopyGrant', '/#Action=DeleteSnapshotCopyGrant', keyArgs] as const
}

export function useGetActionDeleteSnapshotCopyGrant<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
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
        ? getGetActionDeleteSnapshotCopyGrantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteSnapshotCopyGrant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSnapshotCopyGrant<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
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
        ? getGetActionDeleteSnapshotCopyGrantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteSnapshotCopyGrant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSnapshotCopyGrantKey() {
  return ['#Action=DeleteSnapshotCopyGrant', '/#Action=DeleteSnapshotCopyGrant', 'POST'] as const
}

export function usePostActionDeleteSnapshotCopyGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSnapshotCopyGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']> },
      ) => parseResponse(client['#Action=DeleteSnapshotCopyGrant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSnapshotScheduleKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSnapshotSchedule', '/#Action=DeleteSnapshotSchedule', keyArgs] as const
}

export function useGetActionDeleteSnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
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
        ? getGetActionDeleteSnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
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
        ? getGetActionDeleteSnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSnapshotScheduleKey() {
  return ['#Action=DeleteSnapshotSchedule', '/#Action=DeleteSnapshotSchedule', 'POST'] as const
}

export function usePostActionDeleteSnapshotSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']> },
      ) => parseResponse(client['#Action=DeleteSnapshotSchedule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteTagsKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTags', '/#Action=DeleteTags', keyArgs] as const
}

export function useGetActionDeleteTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
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
        ? getGetActionDeleteTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
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
        ? getGetActionDeleteTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteTagsKey() {
  return ['#Action=DeleteTags', '/#Action=DeleteTags', 'POST'] as const
}

export function usePostActionDeleteTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteTags']['$post']> },
      ) => parseResponse(client['#Action=DeleteTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteUsageLimitKey(
  args: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteUsageLimit', '/#Action=DeleteUsageLimit', keyArgs] as const
}

export function useGetActionDeleteUsageLimit<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
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
        ? getGetActionDeleteUsageLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteUsageLimit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteUsageLimit<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
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
        ? getGetActionDeleteUsageLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteUsageLimit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteUsageLimitKey() {
  return ['#Action=DeleteUsageLimit', '/#Action=DeleteUsageLimit', 'POST'] as const
}

export function usePostActionDeleteUsageLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteUsageLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$post']> },
      ) => parseResponse(client['#Action=DeleteUsageLimit'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAccountAttributesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeAccountAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
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
        ? getGetActionDescribeAccountAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAccountAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
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
        ? getGetActionDescribeAccountAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAccountAttributesKey() {
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    'POST',
  ] as const
}

export function usePostActionDescribeAccountAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAccountAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']> },
      ) => parseResponse(client['#Action=DescribeAccountAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAuthenticationProfilesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAuthenticationProfiles',
    '/#Action=DescribeAuthenticationProfiles',
    keyArgs,
  ] as const
}

export function useGetActionDescribeAuthenticationProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>>
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
        ? getGetActionDescribeAuthenticationProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAuthenticationProfiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAuthenticationProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>>
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
        ? getGetActionDescribeAuthenticationProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAuthenticationProfiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAuthenticationProfilesKey() {
  return [
    '#Action=DescribeAuthenticationProfiles',
    '/#Action=DescribeAuthenticationProfiles',
    'POST',
  ] as const
}

export function usePostActionDescribeAuthenticationProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAuthenticationProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DescribeAuthenticationProfiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterDbRevisionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeClusterDbRevisions',
    '/#Action=DescribeClusterDbRevisions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeClusterDbRevisions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
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
        ? getGetActionDescribeClusterDbRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterDbRevisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterDbRevisions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
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
        ? getGetActionDescribeClusterDbRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterDbRevisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterDbRevisionsKey() {
  return [
    '#Action=DescribeClusterDbRevisions',
    '/#Action=DescribeClusterDbRevisions',
    'POST',
  ] as const
}

export function usePostActionDescribeClusterDbRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterDbRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeClusterDbRevisions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterParameterGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeClusterParameterGroups',
    '/#Action=DescribeClusterParameterGroups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeClusterParameterGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>>
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
        ? getGetActionDescribeClusterParameterGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterParameterGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterParameterGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>>
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
        ? getGetActionDescribeClusterParameterGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterParameterGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterParameterGroupsKey() {
  return [
    '#Action=DescribeClusterParameterGroups',
    '/#Action=DescribeClusterParameterGroups',
    'POST',
  ] as const
}

export function usePostActionDescribeClusterParameterGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterParameterGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DescribeClusterParameterGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeClusterParameters',
    '/#Action=DescribeClusterParameters',
    keyArgs,
  ] as const
}

export function useGetActionDescribeClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
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
        ? getGetActionDescribeClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
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
        ? getGetActionDescribeClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterParametersKey() {
  return [
    '#Action=DescribeClusterParameters',
    '/#Action=DescribeClusterParameters',
    'POST',
  ] as const
}

export function usePostActionDescribeClusterParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$post']> },
      ) => parseResponse(client['#Action=DescribeClusterParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterSecurityGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeClusterSecurityGroups',
    '/#Action=DescribeClusterSecurityGroups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeClusterSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>>
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
        ? getGetActionDescribeClusterSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterSecurityGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>>
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
        ? getGetActionDescribeClusterSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterSecurityGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterSecurityGroupsKey() {
  return [
    '#Action=DescribeClusterSecurityGroups',
    '/#Action=DescribeClusterSecurityGroups',
    'POST',
  ] as const
}

export function usePostActionDescribeClusterSecurityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterSecurityGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeClusterSecurityGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterSnapshotsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeClusterSnapshots', '/#Action=DescribeClusterSnapshots', keyArgs] as const
}

export function useGetActionDescribeClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
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
        ? getGetActionDescribeClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
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
        ? getGetActionDescribeClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterSnapshotsKey() {
  return ['#Action=DescribeClusterSnapshots', '/#Action=DescribeClusterSnapshots', 'POST'] as const
}

export function usePostActionDescribeClusterSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']> },
      ) => parseResponse(client['#Action=DescribeClusterSnapshots'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterSubnetGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeClusterSubnetGroups',
    '/#Action=DescribeClusterSubnetGroups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeClusterSubnetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
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
        ? getGetActionDescribeClusterSubnetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterSubnetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterSubnetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
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
        ? getGetActionDescribeClusterSubnetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterSubnetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterSubnetGroupsKey() {
  return [
    '#Action=DescribeClusterSubnetGroups',
    '/#Action=DescribeClusterSubnetGroups',
    'POST',
  ] as const
}

export function usePostActionDescribeClusterSubnetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterSubnetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeClusterSubnetGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterTracksKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeClusterTracks', '/#Action=DescribeClusterTracks', keyArgs] as const
}

export function useGetActionDescribeClusterTracks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
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
        ? getGetActionDescribeClusterTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeClusterTracks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterTracks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
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
        ? getGetActionDescribeClusterTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeClusterTracks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterTracksKey() {
  return ['#Action=DescribeClusterTracks', '/#Action=DescribeClusterTracks', 'POST'] as const
}

export function usePostActionDescribeClusterTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$post']> },
      ) => parseResponse(client['#Action=DescribeClusterTracks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClusterVersionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeClusterVersions', '/#Action=DescribeClusterVersions', keyArgs] as const
}

export function useGetActionDescribeClusterVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
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
        ? getGetActionDescribeClusterVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterVersions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusterVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
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
        ? getGetActionDescribeClusterVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeClusterVersions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClusterVersionsKey() {
  return ['#Action=DescribeClusterVersions', '/#Action=DescribeClusterVersions', 'POST'] as const
}

export function usePostActionDescribeClusterVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClusterVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$post']> },
      ) => parseResponse(client['#Action=DescribeClusterVersions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeClustersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeClusters', '/#Action=DescribeClusters', keyArgs] as const
}

export function useGetActionDescribeClusters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
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
        ? getGetActionDescribeClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeClusters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeClusters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
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
        ? getGetActionDescribeClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeClusters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeClustersKey() {
  return ['#Action=DescribeClusters', '/#Action=DescribeClusters', 'POST'] as const
}

export function usePostActionDescribeClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeClusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeClusters']['$post']> },
      ) => parseResponse(client['#Action=DescribeClusters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDataSharesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDataShares', '/#Action=DescribeDataShares', keyArgs] as const
}

export function useGetActionDescribeDataShares<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
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
        ? getGetActionDescribeDataSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDataShares'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDataShares<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
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
        ? getGetActionDescribeDataSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDataShares'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDataSharesKey() {
  return ['#Action=DescribeDataShares', '/#Action=DescribeDataShares', 'POST'] as const
}

export function usePostActionDescribeDataShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDataShares']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDataSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$post']> },
      ) => parseResponse(client['#Action=DescribeDataShares'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDataSharesForConsumerKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDataSharesForConsumer',
    '/#Action=DescribeDataSharesForConsumer',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDataSharesForConsumer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>>
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
        ? getGetActionDescribeDataSharesForConsumerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDataSharesForConsumer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDataSharesForConsumer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>>
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
        ? getGetActionDescribeDataSharesForConsumerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDataSharesForConsumer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDataSharesForConsumerKey() {
  return [
    '#Action=DescribeDataSharesForConsumer',
    '/#Action=DescribeDataSharesForConsumer',
    'POST',
  ] as const
}

export function usePostActionDescribeDataSharesForConsumer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDataSharesForConsumerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDataSharesForConsumer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDataSharesForProducerKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDataSharesForProducer',
    '/#Action=DescribeDataSharesForProducer',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDataSharesForProducer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>>
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
        ? getGetActionDescribeDataSharesForProducerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDataSharesForProducer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDataSharesForProducer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>>
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
        ? getGetActionDescribeDataSharesForProducerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDataSharesForProducer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDataSharesForProducerKey() {
  return [
    '#Action=DescribeDataSharesForProducer',
    '/#Action=DescribeDataSharesForProducer',
    'POST',
  ] as const
}

export function usePostActionDescribeDataSharesForProducer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDataSharesForProducerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDataSharesForProducer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDefaultClusterParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDefaultClusterParameters',
    '/#Action=DescribeDefaultClusterParameters',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDefaultClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>>
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
        ? getGetActionDescribeDefaultClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDefaultClusterParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDefaultClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>>
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
        ? getGetActionDescribeDefaultClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDefaultClusterParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDefaultClusterParametersKey() {
  return [
    '#Action=DescribeDefaultClusterParameters',
    '/#Action=DescribeDefaultClusterParameters',
    'POST',
  ] as const
}

export function usePostActionDescribeDefaultClusterParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDefaultClusterParametersKey()
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
            (typeof client)['#Action=DescribeDefaultClusterParameters']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=DescribeDefaultClusterParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEndpointAccessKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEndpointAccess', '/#Action=DescribeEndpointAccess', keyArgs] as const
}

export function useGetActionDescribeEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
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
        ? getGetActionDescribeEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
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
        ? getGetActionDescribeEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEndpointAccessKey() {
  return ['#Action=DescribeEndpointAccess', '/#Action=DescribeEndpointAccess', 'POST'] as const
}

export function usePostActionDescribeEndpointAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$post']> },
      ) => parseResponse(client['#Action=DescribeEndpointAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEndpointAuthorizationKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEndpointAuthorization',
    '/#Action=DescribeEndpointAuthorization',
    keyArgs,
  ] as const
}

export function useGetActionDescribeEndpointAuthorization<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>>
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
        ? getGetActionDescribeEndpointAuthorizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEndpointAuthorization'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEndpointAuthorization<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>>
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
        ? getGetActionDescribeEndpointAuthorizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEndpointAuthorization'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEndpointAuthorizationKey() {
  return [
    '#Action=DescribeEndpointAuthorization',
    '/#Action=DescribeEndpointAuthorization',
    'POST',
  ] as const
}

export function usePostActionDescribeEndpointAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEndpointAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeEndpointAuthorization'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEventCategoriesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', keyArgs] as const
}

export function useGetActionDescribeEventCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
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
        ? getGetActionDescribeEventCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventCategories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEventCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
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
        ? getGetActionDescribeEventCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventCategories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEventCategoriesKey() {
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', 'POST'] as const
}

export function usePostActionDescribeEventCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEventCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']> },
      ) => parseResponse(client['#Action=DescribeEventCategories'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEventSubscriptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeEventSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
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
        ? getGetActionDescribeEventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventSubscriptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEventSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
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
        ? getGetActionDescribeEventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventSubscriptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEventSubscriptionsKey() {
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    'POST',
  ] as const
}

export function usePostActionDescribeEventSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEventSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeEventSubscriptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEventsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function useGetActionDescribeEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
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
        ? getGetActionDescribeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeEvents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
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
        ? getGetActionDescribeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeEvents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEventsKey() {
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', 'POST'] as const
}

export function usePostActionDescribeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']> },
      ) => parseResponse(client['#Action=DescribeEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeHsmClientCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeHsmClientCertificates',
    '/#Action=DescribeHsmClientCertificates',
    keyArgs,
  ] as const
}

export function useGetActionDescribeHsmClientCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>>
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
        ? getGetActionDescribeHsmClientCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeHsmClientCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeHsmClientCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>>
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
        ? getGetActionDescribeHsmClientCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeHsmClientCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeHsmClientCertificatesKey() {
  return [
    '#Action=DescribeHsmClientCertificates',
    '/#Action=DescribeHsmClientCertificates',
    'POST',
  ] as const
}

export function usePostActionDescribeHsmClientCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeHsmClientCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeHsmClientCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeHsmConfigurationsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeHsmConfigurations',
    '/#Action=DescribeHsmConfigurations',
    keyArgs,
  ] as const
}

export function useGetActionDescribeHsmConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
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
        ? getGetActionDescribeHsmConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeHsmConfigurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeHsmConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
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
        ? getGetActionDescribeHsmConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeHsmConfigurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeHsmConfigurationsKey() {
  return [
    '#Action=DescribeHsmConfigurations',
    '/#Action=DescribeHsmConfigurations',
    'POST',
  ] as const
}

export function usePostActionDescribeHsmConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeHsmConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']> },
      ) => parseResponse(client['#Action=DescribeHsmConfigurations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeLoggingStatusKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeLoggingStatus', '/#Action=DescribeLoggingStatus', keyArgs] as const
}

export function useGetActionDescribeLoggingStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
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
        ? getGetActionDescribeLoggingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeLoggingStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeLoggingStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
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
        ? getGetActionDescribeLoggingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeLoggingStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeLoggingStatusKey() {
  return ['#Action=DescribeLoggingStatus', '/#Action=DescribeLoggingStatus', 'POST'] as const
}

export function usePostActionDescribeLoggingStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeLoggingStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$post']> },
      ) => parseResponse(client['#Action=DescribeLoggingStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeNodeConfigurationOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeNodeConfigurationOptions',
    '/#Action=DescribeNodeConfigurationOptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeNodeConfigurationOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>>
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
        ? getGetActionDescribeNodeConfigurationOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeNodeConfigurationOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeNodeConfigurationOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>>
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
        ? getGetActionDescribeNodeConfigurationOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeNodeConfigurationOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeNodeConfigurationOptionsKey() {
  return [
    '#Action=DescribeNodeConfigurationOptions',
    '/#Action=DescribeNodeConfigurationOptions',
    'POST',
  ] as const
}

export function usePostActionDescribeNodeConfigurationOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeNodeConfigurationOptionsKey()
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
            (typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=DescribeNodeConfigurationOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeOrderableClusterOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeOrderableClusterOptions',
    '/#Action=DescribeOrderableClusterOptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeOrderableClusterOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>>
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
        ? getGetActionDescribeOrderableClusterOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeOrderableClusterOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeOrderableClusterOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>>
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
        ? getGetActionDescribeOrderableClusterOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeOrderableClusterOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeOrderableClusterOptionsKey() {
  return [
    '#Action=DescribeOrderableClusterOptions',
    '/#Action=DescribeOrderableClusterOptions',
    'POST',
  ] as const
}

export function usePostActionDescribeOrderableClusterOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeOrderableClusterOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DescribeOrderableClusterOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribePartnersKey(
  args: InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribePartners', '/#Action=DescribePartners', keyArgs] as const
}

export function useGetActionDescribePartners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
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
        ? getGetActionDescribePartnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribePartners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribePartners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
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
        ? getGetActionDescribePartnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribePartners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribePartnersKey() {
  return ['#Action=DescribePartners', '/#Action=DescribePartners', 'POST'] as const
}

export function usePostActionDescribePartners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribePartners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribePartnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribePartners']['$post']> },
      ) => parseResponse(client['#Action=DescribePartners'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReservedNodeExchangeStatusKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedNodeExchangeStatus',
    '/#Action=DescribeReservedNodeExchangeStatus',
    keyArgs,
  ] as const
}

export function useGetActionDescribeReservedNodeExchangeStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
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
        ? getGetActionDescribeReservedNodeExchangeStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeReservedNodeExchangeStatus'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReservedNodeExchangeStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
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
        ? getGetActionDescribeReservedNodeExchangeStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeReservedNodeExchangeStatus'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReservedNodeExchangeStatusKey() {
  return [
    '#Action=DescribeReservedNodeExchangeStatus',
    '/#Action=DescribeReservedNodeExchangeStatus',
    'POST',
  ] as const
}

export function usePostActionDescribeReservedNodeExchangeStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReservedNodeExchangeStatusKey()
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
            (typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeReservedNodeExchangeStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReservedNodeOfferingsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedNodeOfferings',
    '/#Action=DescribeReservedNodeOfferings',
    keyArgs,
  ] as const
}

export function useGetActionDescribeReservedNodeOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>>
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
        ? getGetActionDescribeReservedNodeOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeReservedNodeOfferings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReservedNodeOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>>
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
        ? getGetActionDescribeReservedNodeOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeReservedNodeOfferings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReservedNodeOfferingsKey() {
  return [
    '#Action=DescribeReservedNodeOfferings',
    '/#Action=DescribeReservedNodeOfferings',
    'POST',
  ] as const
}

export function usePostActionDescribeReservedNodeOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReservedNodeOfferingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeReservedNodeOfferings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReservedNodesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeReservedNodes', '/#Action=DescribeReservedNodes', keyArgs] as const
}

export function useGetActionDescribeReservedNodes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
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
        ? getGetActionDescribeReservedNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeReservedNodes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReservedNodes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
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
        ? getGetActionDescribeReservedNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeReservedNodes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReservedNodesKey() {
  return ['#Action=DescribeReservedNodes', '/#Action=DescribeReservedNodes', 'POST'] as const
}

export function usePostActionDescribeReservedNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReservedNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$post']> },
      ) => parseResponse(client['#Action=DescribeReservedNodes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeResizeKey(
  args: InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeResize', '/#Action=DescribeResize', keyArgs] as const
}

export function useGetActionDescribeResize<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>
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
        ? getGetActionDescribeResizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeResize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeResize<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>
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
        ? getGetActionDescribeResizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeResize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeResizeKey() {
  return ['#Action=DescribeResize', '/#Action=DescribeResize', 'POST'] as const
}

export function usePostActionDescribeResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeResize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeResize']['$post']> },
      ) => parseResponse(client['#Action=DescribeResize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeScheduledActionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', keyArgs] as const
}

export function useGetActionDescribeScheduledActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
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
        ? getGetActionDescribeScheduledActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeScheduledActions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeScheduledActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
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
        ? getGetActionDescribeScheduledActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeScheduledActions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeScheduledActionsKey() {
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', 'POST'] as const
}

export function usePostActionDescribeScheduledActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeScheduledActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']> },
      ) => parseResponse(client['#Action=DescribeScheduledActions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeSnapshotCopyGrantsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeSnapshotCopyGrants',
    '/#Action=DescribeSnapshotCopyGrants',
    keyArgs,
  ] as const
}

export function useGetActionDescribeSnapshotCopyGrants<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
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
        ? getGetActionDescribeSnapshotCopyGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeSnapshotCopyGrants'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeSnapshotCopyGrants<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
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
        ? getGetActionDescribeSnapshotCopyGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeSnapshotCopyGrants'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeSnapshotCopyGrantsKey() {
  return [
    '#Action=DescribeSnapshotCopyGrants',
    '/#Action=DescribeSnapshotCopyGrants',
    'POST',
  ] as const
}

export function usePostActionDescribeSnapshotCopyGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeSnapshotCopyGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeSnapshotCopyGrants'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeSnapshotSchedulesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeSnapshotSchedules',
    '/#Action=DescribeSnapshotSchedules',
    keyArgs,
  ] as const
}

export function useGetActionDescribeSnapshotSchedules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
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
        ? getGetActionDescribeSnapshotSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeSnapshotSchedules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeSnapshotSchedules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
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
        ? getGetActionDescribeSnapshotSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeSnapshotSchedules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeSnapshotSchedulesKey() {
  return [
    '#Action=DescribeSnapshotSchedules',
    '/#Action=DescribeSnapshotSchedules',
    'POST',
  ] as const
}

export function usePostActionDescribeSnapshotSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeSnapshotSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']> },
      ) => parseResponse(client['#Action=DescribeSnapshotSchedules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeStorageKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStorage', '/#Action=DescribeStorage', keyArgs] as const
}

export function useGetActionDescribeStorage<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
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
        ? getGetActionDescribeStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeStorage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeStorage<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
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
        ? getGetActionDescribeStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeStorage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeStorageKey() {
  return ['#Action=DescribeStorage', '/#Action=DescribeStorage', 'POST'] as const
}

export function usePostActionDescribeStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeStorage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeStorage']['$post']> },
      ) => parseResponse(client['#Action=DescribeStorage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeTableRestoreStatusKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeTableRestoreStatus',
    '/#Action=DescribeTableRestoreStatus',
    keyArgs,
  ] as const
}

export function useGetActionDescribeTableRestoreStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
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
        ? getGetActionDescribeTableRestoreStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeTableRestoreStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeTableRestoreStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
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
        ? getGetActionDescribeTableRestoreStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeTableRestoreStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeTableRestoreStatusKey() {
  return [
    '#Action=DescribeTableRestoreStatus',
    '/#Action=DescribeTableRestoreStatus',
    'POST',
  ] as const
}

export function usePostActionDescribeTableRestoreStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeTableRestoreStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeTableRestoreStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeTagsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function useGetActionDescribeTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
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
        ? getGetActionDescribeTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
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
        ? getGetActionDescribeTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeTagsKey() {
  return ['#Action=DescribeTags', '/#Action=DescribeTags', 'POST'] as const
}

export function usePostActionDescribeTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']> },
      ) => parseResponse(client['#Action=DescribeTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeUsageLimitsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeUsageLimits', '/#Action=DescribeUsageLimits', keyArgs] as const
}

export function useGetActionDescribeUsageLimits<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
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
        ? getGetActionDescribeUsageLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeUsageLimits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeUsageLimits<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
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
        ? getGetActionDescribeUsageLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeUsageLimits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeUsageLimitsKey() {
  return ['#Action=DescribeUsageLimits', '/#Action=DescribeUsageLimits', 'POST'] as const
}

export function usePostActionDescribeUsageLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeUsageLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$post']> },
      ) => parseResponse(client['#Action=DescribeUsageLimits'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDisableLoggingKey(
  args: InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableLogging', '/#Action=DisableLogging', keyArgs] as const
}

export function useGetActionDisableLogging<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>
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
        ? getGetActionDisableLoggingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableLogging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDisableLogging<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>
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
        ? getGetActionDisableLoggingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableLogging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDisableLoggingKey() {
  return ['#Action=DisableLogging', '/#Action=DisableLogging', 'POST'] as const
}

export function usePostActionDisableLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DisableLogging']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDisableLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DisableLogging']['$post']> },
      ) => parseResponse(client['#Action=DisableLogging'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDisableSnapshotCopyKey(
  args: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DisableSnapshotCopy', '/#Action=DisableSnapshotCopy', keyArgs] as const
}

export function useGetActionDisableSnapshotCopy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
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
        ? getGetActionDisableSnapshotCopyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableSnapshotCopy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDisableSnapshotCopy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
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
        ? getGetActionDisableSnapshotCopyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DisableSnapshotCopy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDisableSnapshotCopyKey() {
  return ['#Action=DisableSnapshotCopy', '/#Action=DisableSnapshotCopy', 'POST'] as const
}

export function usePostActionDisableSnapshotCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDisableSnapshotCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$post']> },
      ) => parseResponse(client['#Action=DisableSnapshotCopy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDisassociateDataShareConsumerKey(
  args: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DisassociateDataShareConsumer',
    '/#Action=DisassociateDataShareConsumer',
    keyArgs,
  ] as const
}

export function useGetActionDisassociateDataShareConsumer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>>
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
        ? getGetActionDisassociateDataShareConsumerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DisassociateDataShareConsumer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDisassociateDataShareConsumer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>>
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
        ? getGetActionDisassociateDataShareConsumerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DisassociateDataShareConsumer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDisassociateDataShareConsumerKey() {
  return [
    '#Action=DisassociateDataShareConsumer',
    '/#Action=DisassociateDataShareConsumer',
    'POST',
  ] as const
}

export function usePostActionDisassociateDataShareConsumer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDisassociateDataShareConsumerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>
        },
      ) => parseResponse(client['#Action=DisassociateDataShareConsumer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionEnableLoggingKey(
  args: InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableLogging', '/#Action=EnableLogging', keyArgs] as const
}

export function useGetActionEnableLogging<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>
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
        ? getGetActionEnableLoggingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableLogging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionEnableLogging<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>
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
        ? getGetActionEnableLoggingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableLogging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionEnableLoggingKey() {
  return ['#Action=EnableLogging', '/#Action=EnableLogging', 'POST'] as const
}

export function usePostActionEnableLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=EnableLogging']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionEnableLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=EnableLogging']['$post']> },
      ) => parseResponse(client['#Action=EnableLogging'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionEnableSnapshotCopyKey(
  args: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableSnapshotCopy', '/#Action=EnableSnapshotCopy', keyArgs] as const
}

export function useGetActionEnableSnapshotCopy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
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
        ? getGetActionEnableSnapshotCopyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableSnapshotCopy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionEnableSnapshotCopy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
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
        ? getGetActionEnableSnapshotCopyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableSnapshotCopy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionEnableSnapshotCopyKey() {
  return ['#Action=EnableSnapshotCopy', '/#Action=EnableSnapshotCopy', 'POST'] as const
}

export function usePostActionEnableSnapshotCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionEnableSnapshotCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$post']> },
      ) => parseResponse(client['#Action=EnableSnapshotCopy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetClusterCredentialsKey(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetClusterCredentials', '/#Action=GetClusterCredentials', keyArgs] as const
}

export function useGetActionGetClusterCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
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
        ? getGetActionGetClusterCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetClusterCredentials'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetClusterCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
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
        ? getGetActionGetClusterCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetClusterCredentials'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetClusterCredentialsKey() {
  return ['#Action=GetClusterCredentials', '/#Action=GetClusterCredentials', 'POST'] as const
}

export function usePostActionGetClusterCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetClusterCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$post']> },
      ) => parseResponse(client['#Action=GetClusterCredentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetClusterCredentialsWithIAMKey(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetClusterCredentialsWithIAM',
    '/#Action=GetClusterCredentialsWithIAM',
    keyArgs,
  ] as const
}

export function useGetActionGetClusterCredentialsWithIAM<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
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
        ? getGetActionGetClusterCredentialsWithIAMKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetClusterCredentialsWithIAM'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetClusterCredentialsWithIAM<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
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
        ? getGetActionGetClusterCredentialsWithIAMKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetClusterCredentialsWithIAM'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetClusterCredentialsWithIAMKey() {
  return [
    '#Action=GetClusterCredentialsWithIAM',
    '/#Action=GetClusterCredentialsWithIAM',
    'POST',
  ] as const
}

export function usePostActionGetClusterCredentialsWithIAM<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetClusterCredentialsWithIAMKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>
        },
      ) => parseResponse(client['#Action=GetClusterCredentialsWithIAM'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetReservedNodeExchangeConfigurationOptionsKey(
  args: InferRequestType<
    (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetReservedNodeExchangeConfigurationOptions',
    '/#Action=GetReservedNodeExchangeConfigurationOptions',
    keyArgs,
  ] as const
}

export function useGetActionGetReservedNodeExchangeConfigurationOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
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
        ? getGetActionGetReservedNodeExchangeConfigurationOptionsKey(args)
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
                (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
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
          client['#Action=GetReservedNodeExchangeConfigurationOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetReservedNodeExchangeConfigurationOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
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
        ? getGetActionGetReservedNodeExchangeConfigurationOptionsKey(args)
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
                (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
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
          client['#Action=GetReservedNodeExchangeConfigurationOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetReservedNodeExchangeConfigurationOptionsKey() {
  return [
    '#Action=GetReservedNodeExchangeConfigurationOptions',
    '/#Action=GetReservedNodeExchangeConfigurationOptions',
    'POST',
  ] as const
}

export function usePostActionGetReservedNodeExchangeConfigurationOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetReservedNodeExchangeConfigurationOptionsKey()
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
            (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetReservedNodeExchangeConfigurationOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetReservedNodeExchangeOfferingsKey(
  args: InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetReservedNodeExchangeOfferings',
    '/#Action=GetReservedNodeExchangeOfferings',
    keyArgs,
  ] as const
}

export function useGetActionGetReservedNodeExchangeOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>>
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
        ? getGetActionGetReservedNodeExchangeOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetReservedNodeExchangeOfferings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetReservedNodeExchangeOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>>
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
        ? getGetActionGetReservedNodeExchangeOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetReservedNodeExchangeOfferings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetReservedNodeExchangeOfferingsKey() {
  return [
    '#Action=GetReservedNodeExchangeOfferings',
    '/#Action=GetReservedNodeExchangeOfferings',
    'POST',
  ] as const
}

export function usePostActionGetReservedNodeExchangeOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetReservedNodeExchangeOfferingsKey()
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
            (typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=GetReservedNodeExchangeOfferings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyAquaConfigurationKey(
  args: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyAquaConfiguration', '/#Action=ModifyAquaConfiguration', keyArgs] as const
}

export function useGetActionModifyAquaConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
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
        ? getGetActionModifyAquaConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyAquaConfiguration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyAquaConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
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
        ? getGetActionModifyAquaConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyAquaConfiguration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyAquaConfigurationKey() {
  return ['#Action=ModifyAquaConfiguration', '/#Action=ModifyAquaConfiguration', 'POST'] as const
}

export function usePostActionModifyAquaConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyAquaConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']> },
      ) => parseResponse(client['#Action=ModifyAquaConfiguration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyAuthenticationProfileKey(
  args: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyAuthenticationProfile',
    '/#Action=ModifyAuthenticationProfile',
    keyArgs,
  ] as const
}

export function useGetActionModifyAuthenticationProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
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
        ? getGetActionModifyAuthenticationProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyAuthenticationProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyAuthenticationProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
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
        ? getGetActionModifyAuthenticationProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyAuthenticationProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyAuthenticationProfileKey() {
  return [
    '#Action=ModifyAuthenticationProfile',
    '/#Action=ModifyAuthenticationProfile',
    'POST',
  ] as const
}

export function usePostActionModifyAuthenticationProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyAuthenticationProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyAuthenticationProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyCluster', '/#Action=ModifyCluster', keyArgs] as const
}

export function useGetActionModifyCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>
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
        ? getGetActionModifyClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>
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
        ? getGetActionModifyClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterKey() {
  return ['#Action=ModifyCluster', '/#Action=ModifyCluster', 'POST'] as const
}

export function usePostActionModifyCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyCluster']['$post']> },
      ) => parseResponse(client['#Action=ModifyCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterDbRevisionKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyClusterDbRevision', '/#Action=ModifyClusterDbRevision', keyArgs] as const
}

export function useGetActionModifyClusterDbRevision<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
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
        ? getGetActionModifyClusterDbRevisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterDbRevision'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterDbRevision<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
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
        ? getGetActionModifyClusterDbRevisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterDbRevision'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterDbRevisionKey() {
  return ['#Action=ModifyClusterDbRevision', '/#Action=ModifyClusterDbRevision', 'POST'] as const
}

export function usePostActionModifyClusterDbRevision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterDbRevisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']> },
      ) => parseResponse(client['#Action=ModifyClusterDbRevision'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterIamRolesKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyClusterIamRoles', '/#Action=ModifyClusterIamRoles', keyArgs] as const
}

export function useGetActionModifyClusterIamRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
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
        ? getGetActionModifyClusterIamRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyClusterIamRoles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterIamRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
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
        ? getGetActionModifyClusterIamRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyClusterIamRoles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterIamRolesKey() {
  return ['#Action=ModifyClusterIamRoles', '/#Action=ModifyClusterIamRoles', 'POST'] as const
}

export function usePostActionModifyClusterIamRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterIamRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']> },
      ) => parseResponse(client['#Action=ModifyClusterIamRoles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterMaintenanceKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyClusterMaintenance', '/#Action=ModifyClusterMaintenance', keyArgs] as const
}

export function useGetActionModifyClusterMaintenance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
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
        ? getGetActionModifyClusterMaintenanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterMaintenance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterMaintenance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
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
        ? getGetActionModifyClusterMaintenanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterMaintenance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterMaintenanceKey() {
  return ['#Action=ModifyClusterMaintenance', '/#Action=ModifyClusterMaintenance', 'POST'] as const
}

export function usePostActionModifyClusterMaintenance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterMaintenanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']> },
      ) => parseResponse(client['#Action=ModifyClusterMaintenance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyClusterParameterGroup',
    '/#Action=ModifyClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionModifyClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
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
        ? getGetActionModifyClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
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
        ? getGetActionModifyClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterParameterGroupKey() {
  return [
    '#Action=ModifyClusterParameterGroup',
    '/#Action=ModifyClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionModifyClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyClusterSnapshot', '/#Action=ModifyClusterSnapshot', keyArgs] as const
}

export function useGetActionModifyClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
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
        ? getGetActionModifyClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
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
        ? getGetActionModifyClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterSnapshotKey() {
  return ['#Action=ModifyClusterSnapshot', '/#Action=ModifyClusterSnapshot', 'POST'] as const
}

export function usePostActionModifyClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=ModifyClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterSnapshotScheduleKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyClusterSnapshotSchedule',
    '/#Action=ModifyClusterSnapshotSchedule',
    keyArgs,
  ] as const
}

export function useGetActionModifyClusterSnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>>
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
        ? getGetActionModifyClusterSnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterSnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterSnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>>
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
        ? getGetActionModifyClusterSnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterSnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterSnapshotScheduleKey() {
  return [
    '#Action=ModifyClusterSnapshotSchedule',
    '/#Action=ModifyClusterSnapshotSchedule',
    'POST',
  ] as const
}

export function usePostActionModifyClusterSnapshotSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterSnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyClusterSnapshotSchedule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyClusterSubnetGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyClusterSubnetGroup', '/#Action=ModifyClusterSubnetGroup', keyArgs] as const
}

export function useGetActionModifyClusterSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
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
        ? getGetActionModifyClusterSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyClusterSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
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
        ? getGetActionModifyClusterSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyClusterSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyClusterSubnetGroupKey() {
  return ['#Action=ModifyClusterSubnetGroup', '/#Action=ModifyClusterSubnetGroup', 'POST'] as const
}

export function usePostActionModifyClusterSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyClusterSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']> },
      ) => parseResponse(client['#Action=ModifyClusterSubnetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyEndpointAccessKey(
  args: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyEndpointAccess', '/#Action=ModifyEndpointAccess', keyArgs] as const
}

export function useGetActionModifyEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
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
        ? getGetActionModifyEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
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
        ? getGetActionModifyEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyEndpointAccessKey() {
  return ['#Action=ModifyEndpointAccess', '/#Action=ModifyEndpointAccess', 'POST'] as const
}

export function usePostActionModifyEndpointAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$post']> },
      ) => parseResponse(client['#Action=ModifyEndpointAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyEventSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', keyArgs] as const
}

export function useGetActionModifyEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
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
        ? getGetActionModifyEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
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
        ? getGetActionModifyEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyEventSubscriptionKey() {
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', 'POST'] as const
}

export function usePostActionModifyEventSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']> },
      ) => parseResponse(client['#Action=ModifyEventSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyScheduledActionKey(
  args: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyScheduledAction', '/#Action=ModifyScheduledAction', keyArgs] as const
}

export function useGetActionModifyScheduledAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
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
        ? getGetActionModifyScheduledActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyScheduledAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyScheduledAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
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
        ? getGetActionModifyScheduledActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyScheduledAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyScheduledActionKey() {
  return ['#Action=ModifyScheduledAction', '/#Action=ModifyScheduledAction', 'POST'] as const
}

export function usePostActionModifyScheduledAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyScheduledActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$post']> },
      ) => parseResponse(client['#Action=ModifyScheduledAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifySnapshotCopyRetentionPeriodKey(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifySnapshotCopyRetentionPeriod',
    '/#Action=ModifySnapshotCopyRetentionPeriod',
    keyArgs,
  ] as const
}

export function useGetActionModifySnapshotCopyRetentionPeriod<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
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
        ? getGetActionModifySnapshotCopyRetentionPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ModifySnapshotCopyRetentionPeriod'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifySnapshotCopyRetentionPeriod<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
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
        ? getGetActionModifySnapshotCopyRetentionPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ModifySnapshotCopyRetentionPeriod'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifySnapshotCopyRetentionPeriodKey() {
  return [
    '#Action=ModifySnapshotCopyRetentionPeriod',
    '/#Action=ModifySnapshotCopyRetentionPeriod',
    'POST',
  ] as const
}

export function usePostActionModifySnapshotCopyRetentionPeriod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifySnapshotCopyRetentionPeriodKey()
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
            (typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=ModifySnapshotCopyRetentionPeriod'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifySnapshotScheduleKey(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifySnapshotSchedule', '/#Action=ModifySnapshotSchedule', keyArgs] as const
}

export function useGetActionModifySnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
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
        ? getGetActionModifySnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifySnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifySnapshotSchedule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
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
        ? getGetActionModifySnapshotScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifySnapshotSchedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifySnapshotScheduleKey() {
  return ['#Action=ModifySnapshotSchedule', '/#Action=ModifySnapshotSchedule', 'POST'] as const
}

export function usePostActionModifySnapshotSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifySnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']> },
      ) => parseResponse(client['#Action=ModifySnapshotSchedule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyUsageLimitKey(
  args: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyUsageLimit', '/#Action=ModifyUsageLimit', keyArgs] as const
}

export function useGetActionModifyUsageLimit<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
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
        ? getGetActionModifyUsageLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyUsageLimit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyUsageLimit<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
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
        ? getGetActionModifyUsageLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyUsageLimit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyUsageLimitKey() {
  return ['#Action=ModifyUsageLimit', '/#Action=ModifyUsageLimit', 'POST'] as const
}

export function usePostActionModifyUsageLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyUsageLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$post']> },
      ) => parseResponse(client['#Action=ModifyUsageLimit'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPauseClusterKey(
  args: InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PauseCluster', '/#Action=PauseCluster', keyArgs] as const
}

export function useGetActionPauseCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>>
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
        ? getGetActionPauseClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PauseCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPauseCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>>
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
        ? getGetActionPauseClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PauseCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPauseClusterKey() {
  return ['#Action=PauseCluster', '/#Action=PauseCluster', 'POST'] as const
}

export function usePostActionPauseCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PauseCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPauseClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PauseCluster']['$post']> },
      ) => parseResponse(client['#Action=PauseCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPurchaseReservedNodeOfferingKey(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PurchaseReservedNodeOffering',
    '/#Action=PurchaseReservedNodeOffering',
    keyArgs,
  ] as const
}

export function useGetActionPurchaseReservedNodeOffering<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
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
        ? getGetActionPurchaseReservedNodeOfferingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PurchaseReservedNodeOffering'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPurchaseReservedNodeOffering<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
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
        ? getGetActionPurchaseReservedNodeOfferingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PurchaseReservedNodeOffering'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPurchaseReservedNodeOfferingKey() {
  return [
    '#Action=PurchaseReservedNodeOffering',
    '/#Action=PurchaseReservedNodeOffering',
    'POST',
  ] as const
}

export function usePostActionPurchaseReservedNodeOffering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPurchaseReservedNodeOfferingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>
        },
      ) => parseResponse(client['#Action=PurchaseReservedNodeOffering'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRebootClusterKey(
  args: InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebootCluster', '/#Action=RebootCluster', keyArgs] as const
}

export function useGetActionRebootCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>
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
        ? getGetActionRebootClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RebootCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRebootCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>
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
        ? getGetActionRebootClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RebootCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRebootClusterKey() {
  return ['#Action=RebootCluster', '/#Action=RebootCluster', 'POST'] as const
}

export function usePostActionRebootCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RebootCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRebootClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RebootCluster']['$post']> },
      ) => parseResponse(client['#Action=RebootCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRejectDataShareKey(
  args: InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RejectDataShare', '/#Action=RejectDataShare', keyArgs] as const
}

export function useGetActionRejectDataShare<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
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
        ? getGetActionRejectDataShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RejectDataShare'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRejectDataShare<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
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
        ? getGetActionRejectDataShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RejectDataShare'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRejectDataShareKey() {
  return ['#Action=RejectDataShare', '/#Action=RejectDataShare', 'POST'] as const
}

export function usePostActionRejectDataShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RejectDataShare']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRejectDataShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RejectDataShare']['$post']> },
      ) => parseResponse(client['#Action=RejectDataShare'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResetClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ResetClusterParameterGroup',
    '/#Action=ResetClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionResetClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
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
        ? getGetActionResetClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ResetClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResetClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
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
        ? getGetActionResetClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ResetClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResetClusterParameterGroupKey() {
  return [
    '#Action=ResetClusterParameterGroup',
    '/#Action=ResetClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionResetClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResetClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=ResetClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResizeClusterKey(
  args: InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResizeCluster', '/#Action=ResizeCluster', keyArgs] as const
}

export function useGetActionResizeCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>
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
        ? getGetActionResizeClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResizeCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResizeCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>
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
        ? getGetActionResizeClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResizeCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResizeClusterKey() {
  return ['#Action=ResizeCluster', '/#Action=ResizeCluster', 'POST'] as const
}

export function usePostActionResizeCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResizeCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResizeClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ResizeCluster']['$post']> },
      ) => parseResponse(client['#Action=ResizeCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreFromClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreFromClusterSnapshot',
    '/#Action=RestoreFromClusterSnapshot',
    keyArgs,
  ] as const
}

export function useGetActionRestoreFromClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
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
        ? getGetActionRestoreFromClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreFromClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreFromClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
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
        ? getGetActionRestoreFromClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreFromClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreFromClusterSnapshotKey() {
  return [
    '#Action=RestoreFromClusterSnapshot',
    '/#Action=RestoreFromClusterSnapshot',
    'POST',
  ] as const
}

export function usePostActionRestoreFromClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreFromClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>
        },
      ) => parseResponse(client['#Action=RestoreFromClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreTableFromClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreTableFromClusterSnapshot',
    '/#Action=RestoreTableFromClusterSnapshot',
    keyArgs,
  ] as const
}

export function useGetActionRestoreTableFromClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>>
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
        ? getGetActionRestoreTableFromClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreTableFromClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreTableFromClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>>
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
        ? getGetActionRestoreTableFromClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreTableFromClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreTableFromClusterSnapshotKey() {
  return [
    '#Action=RestoreTableFromClusterSnapshot',
    '/#Action=RestoreTableFromClusterSnapshot',
    'POST',
  ] as const
}

export function usePostActionRestoreTableFromClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreTableFromClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>
        },
      ) =>
        parseResponse(client['#Action=RestoreTableFromClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResumeClusterKey(
  args: InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResumeCluster', '/#Action=ResumeCluster', keyArgs] as const
}

export function useGetActionResumeCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>
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
        ? getGetActionResumeClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResumeCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResumeCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>
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
        ? getGetActionResumeClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResumeCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResumeClusterKey() {
  return ['#Action=ResumeCluster', '/#Action=ResumeCluster', 'POST'] as const
}

export function usePostActionResumeCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResumeCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResumeClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ResumeCluster']['$post']> },
      ) => parseResponse(client['#Action=ResumeCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRevokeClusterSecurityGroupIngressKey(
  args: InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RevokeClusterSecurityGroupIngress',
    '/#Action=RevokeClusterSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function useGetActionRevokeClusterSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
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
        ? getGetActionRevokeClusterSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RevokeClusterSecurityGroupIngress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRevokeClusterSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
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
        ? getGetActionRevokeClusterSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RevokeClusterSecurityGroupIngress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionRevokeClusterSecurityGroupIngressKey() {
  return [
    '#Action=RevokeClusterSecurityGroupIngress',
    '/#Action=RevokeClusterSecurityGroupIngress',
    'POST',
  ] as const
}

export function usePostActionRevokeClusterSecurityGroupIngress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRevokeClusterSecurityGroupIngressKey()
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
            (typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=RevokeClusterSecurityGroupIngress'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionRevokeEndpointAccessKey(
  args: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RevokeEndpointAccess', '/#Action=RevokeEndpointAccess', keyArgs] as const
}

export function useGetActionRevokeEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
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
        ? getGetActionRevokeEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RevokeEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRevokeEndpointAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
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
        ? getGetActionRevokeEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RevokeEndpointAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRevokeEndpointAccessKey() {
  return ['#Action=RevokeEndpointAccess', '/#Action=RevokeEndpointAccess', 'POST'] as const
}

export function usePostActionRevokeEndpointAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRevokeEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$post']> },
      ) => parseResponse(client['#Action=RevokeEndpointAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRevokeSnapshotAccessKey(
  args: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RevokeSnapshotAccess', '/#Action=RevokeSnapshotAccess', keyArgs] as const
}

export function useGetActionRevokeSnapshotAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
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
        ? getGetActionRevokeSnapshotAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RevokeSnapshotAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRevokeSnapshotAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
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
        ? getGetActionRevokeSnapshotAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RevokeSnapshotAccess'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRevokeSnapshotAccessKey() {
  return ['#Action=RevokeSnapshotAccess', '/#Action=RevokeSnapshotAccess', 'POST'] as const
}

export function usePostActionRevokeSnapshotAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRevokeSnapshotAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']> },
      ) => parseResponse(client['#Action=RevokeSnapshotAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRotateEncryptionKeyKey(
  args: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RotateEncryptionKey', '/#Action=RotateEncryptionKey', keyArgs] as const
}

export function useGetActionRotateEncryptionKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
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
        ? getGetActionRotateEncryptionKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RotateEncryptionKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRotateEncryptionKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
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
        ? getGetActionRotateEncryptionKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RotateEncryptionKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRotateEncryptionKeyKey() {
  return ['#Action=RotateEncryptionKey', '/#Action=RotateEncryptionKey', 'POST'] as const
}

export function usePostActionRotateEncryptionKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRotateEncryptionKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$post']> },
      ) => parseResponse(client['#Action=RotateEncryptionKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdatePartnerStatusKey(
  args: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdatePartnerStatus', '/#Action=UpdatePartnerStatus', keyArgs] as const
}

export function useGetActionUpdatePartnerStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
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
        ? getGetActionUpdatePartnerStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdatePartnerStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdatePartnerStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
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
        ? getGetActionUpdatePartnerStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdatePartnerStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdatePartnerStatusKey() {
  return ['#Action=UpdatePartnerStatus', '/#Action=UpdatePartnerStatus', 'POST'] as const
}

export function usePostActionUpdatePartnerStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdatePartnerStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$post']> },
      ) => parseResponse(client['#Action=UpdatePartnerStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
