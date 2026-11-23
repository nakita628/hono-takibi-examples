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

export function getActionAcceptReservedNodeExchangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AcceptReservedNodeExchange',
    '/#Action=AcceptReservedNodeExchange',
    keyArgs,
  ] as const
}

export function getActionAcceptReservedNodeExchangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAcceptReservedNodeExchangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AcceptReservedNodeExchange'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAcceptReservedNodeExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAcceptReservedNodeExchangeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAcceptReservedNodeExchangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAcceptReservedNodeExchangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AcceptReservedNodeExchange'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAcceptReservedNodeExchangeMutationKey() {
  return [
    '#Action=AcceptReservedNodeExchange',
    '/#Action=AcceptReservedNodeExchange',
    'POST',
  ] as const
}

export function getPostActionAcceptReservedNodeExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAcceptReservedNodeExchangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>,
    ) {
      return parseResponse(client['#Action=AcceptReservedNodeExchange'].$post(args, options))
    },
  })
}

export function usePostActionAcceptReservedNodeExchange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>,
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
  const mutationDefaults = getPostActionAcceptReservedNodeExchangeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAddPartnerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddPartner']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddPartner', '/#Action=AddPartner', keyArgs] as const
}

export function getActionAddPartnerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddPartner']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddPartnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddPartner'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddPartner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddPartner']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddPartnerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddPartnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddPartnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddPartner'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddPartnerMutationKey() {
  return ['#Action=AddPartner', '/#Action=AddPartner', 'POST'] as const
}

export function getPostActionAddPartnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddPartner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddPartnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AddPartner']['$post']>) {
      return parseResponse(client['#Action=AddPartner'].$post(args, options))
    },
  })
}

export function usePostActionAddPartner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddPartner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddPartner']['$post']>,
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
  const mutationDefaults = getPostActionAddPartnerMutationOptions<TError, TOnMutateResult>(
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

export function getActionAssociateDataShareConsumerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AssociateDataShareConsumer',
    '/#Action=AssociateDataShareConsumer',
    keyArgs,
  ] as const
}

export function getActionAssociateDataShareConsumerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAssociateDataShareConsumerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AssociateDataShareConsumer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAssociateDataShareConsumer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAssociateDataShareConsumerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAssociateDataShareConsumerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAssociateDataShareConsumerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AssociateDataShareConsumer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAssociateDataShareConsumerMutationKey() {
  return [
    '#Action=AssociateDataShareConsumer',
    '/#Action=AssociateDataShareConsumer',
    'POST',
  ] as const
}

export function getPostActionAssociateDataShareConsumerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAssociateDataShareConsumerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>,
    ) {
      return parseResponse(client['#Action=AssociateDataShareConsumer'].$post(args, options))
    },
  })
}

export function usePostActionAssociateDataShareConsumer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>,
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
  const mutationDefaults = getPostActionAssociateDataShareConsumerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAuthorizeClusterSecurityGroupIngressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AuthorizeClusterSecurityGroupIngress',
    '/#Action=AuthorizeClusterSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionAuthorizeClusterSecurityGroupIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAuthorizeClusterSecurityGroupIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AuthorizeClusterSecurityGroupIngress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAuthorizeClusterSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']
                  >
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
                  ReturnType<
                    (typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionAuthorizeClusterSecurityGroupIngressQueryKey>
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
          Awaited<
            ReturnType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAuthorizeClusterSecurityGroupIngressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAuthorizeClusterSecurityGroupIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AuthorizeClusterSecurityGroupIngress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAuthorizeClusterSecurityGroupIngressMutationKey() {
  return [
    '#Action=AuthorizeClusterSecurityGroupIngress',
    '/#Action=AuthorizeClusterSecurityGroupIngress',
    'POST',
  ] as const
}

export function getPostActionAuthorizeClusterSecurityGroupIngressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAuthorizeClusterSecurityGroupIngressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=AuthorizeClusterSecurityGroupIngress'].$post(args, options),
      )
    },
  })
}

export function usePostActionAuthorizeClusterSecurityGroupIngress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']
          >,
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
  const mutationDefaults = getPostActionAuthorizeClusterSecurityGroupIngressMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAuthorizeDataShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AuthorizeDataShare', '/#Action=AuthorizeDataShare', keyArgs] as const
}

export function getActionAuthorizeDataShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAuthorizeDataShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AuthorizeDataShare'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAuthorizeDataShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAuthorizeDataShareQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAuthorizeDataShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAuthorizeDataShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AuthorizeDataShare'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAuthorizeDataShareMutationKey() {
  return ['#Action=AuthorizeDataShare', '/#Action=AuthorizeDataShare', 'POST'] as const
}

export function getPostActionAuthorizeDataShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAuthorizeDataShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$post']>,
    ) {
      return parseResponse(client['#Action=AuthorizeDataShare'].$post(args, options))
    },
  })
}

export function usePostActionAuthorizeDataShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeDataShare']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$post']>,
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
  const mutationDefaults = getPostActionAuthorizeDataShareMutationOptions<TError, TOnMutateResult>(
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

export function getActionAuthorizeEndpointAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AuthorizeEndpointAccess', '/#Action=AuthorizeEndpointAccess', keyArgs] as const
}

export function getActionAuthorizeEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAuthorizeEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AuthorizeEndpointAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAuthorizeEndpointAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAuthorizeEndpointAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAuthorizeEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAuthorizeEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AuthorizeEndpointAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAuthorizeEndpointAccessMutationKey() {
  return ['#Action=AuthorizeEndpointAccess', '/#Action=AuthorizeEndpointAccess', 'POST'] as const
}

export function getPostActionAuthorizeEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAuthorizeEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=AuthorizeEndpointAccess'].$post(args, options))
    },
  })
}

export function usePostActionAuthorizeEndpointAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>,
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
  const mutationDefaults = getPostActionAuthorizeEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAuthorizeSnapshotAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AuthorizeSnapshotAccess', '/#Action=AuthorizeSnapshotAccess', keyArgs] as const
}

export function getActionAuthorizeSnapshotAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAuthorizeSnapshotAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AuthorizeSnapshotAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAuthorizeSnapshotAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAuthorizeSnapshotAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAuthorizeSnapshotAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAuthorizeSnapshotAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AuthorizeSnapshotAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAuthorizeSnapshotAccessMutationKey() {
  return ['#Action=AuthorizeSnapshotAccess', '/#Action=AuthorizeSnapshotAccess', 'POST'] as const
}

export function getPostActionAuthorizeSnapshotAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAuthorizeSnapshotAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=AuthorizeSnapshotAccess'].$post(args, options))
    },
  })
}

export function usePostActionAuthorizeSnapshotAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>,
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
  const mutationDefaults = getPostActionAuthorizeSnapshotAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionBatchDeleteClusterSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=BatchDeleteClusterSnapshots',
    '/#Action=BatchDeleteClusterSnapshots',
    keyArgs,
  ] as const
}

export function getActionBatchDeleteClusterSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchDeleteClusterSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchDeleteClusterSnapshots'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBatchDeleteClusterSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchDeleteClusterSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchDeleteClusterSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchDeleteClusterSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchDeleteClusterSnapshots'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionBatchDeleteClusterSnapshotsMutationKey() {
  return [
    '#Action=BatchDeleteClusterSnapshots',
    '/#Action=BatchDeleteClusterSnapshots',
    'POST',
  ] as const
}

export function getPostActionBatchDeleteClusterSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchDeleteClusterSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchDeleteClusterSnapshots'].$post(args, options))
    },
  })
}

export function usePostActionBatchDeleteClusterSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>,
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
  const mutationDefaults = getPostActionBatchDeleteClusterSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionBatchModifyClusterSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=BatchModifyClusterSnapshots',
    '/#Action=BatchModifyClusterSnapshots',
    keyArgs,
  ] as const
}

export function getActionBatchModifyClusterSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchModifyClusterSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchModifyClusterSnapshots'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBatchModifyClusterSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchModifyClusterSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchModifyClusterSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchModifyClusterSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchModifyClusterSnapshots'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionBatchModifyClusterSnapshotsMutationKey() {
  return [
    '#Action=BatchModifyClusterSnapshots',
    '/#Action=BatchModifyClusterSnapshots',
    'POST',
  ] as const
}

export function getPostActionBatchModifyClusterSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchModifyClusterSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchModifyClusterSnapshots'].$post(args, options))
    },
  })
}

export function usePostActionBatchModifyClusterSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>,
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
  const mutationDefaults = getPostActionBatchModifyClusterSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCancelResizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CancelResize']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CancelResize', '/#Action=CancelResize', keyArgs] as const
}

export function getActionCancelResizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CancelResize']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCancelResizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CancelResize'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCancelResize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CancelResize']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCancelResizeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCancelResizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCancelResizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CancelResize'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCancelResizeMutationKey() {
  return ['#Action=CancelResize', '/#Action=CancelResize', 'POST'] as const
}

export function getPostActionCancelResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CancelResize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCancelResizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CancelResize']['$post']>) {
      return parseResponse(client['#Action=CancelResize'].$post(args, options))
    },
  })
}

export function usePostActionCancelResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelResize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CancelResize']['$post']>,
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
  const mutationDefaults = getPostActionCancelResizeMutationOptions<TError, TOnMutateResult>(
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

export function getActionCopyClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CopyClusterSnapshot', '/#Action=CopyClusterSnapshot', keyArgs] as const
}

export function getActionCopyClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopyClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopyClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopyClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopyClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopyClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopyClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCopyClusterSnapshotMutationKey() {
  return ['#Action=CopyClusterSnapshot', '/#Action=CopyClusterSnapshot', 'POST'] as const
}

export function getPostActionCopyClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopyClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=CopyClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCopyClusterSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionCopyClusterSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateAuthenticationProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateAuthenticationProfile',
    '/#Action=CreateAuthenticationProfile',
    keyArgs,
  ] as const
}

export function getActionCreateAuthenticationProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateAuthenticationProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateAuthenticationProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateAuthenticationProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateAuthenticationProfileQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateAuthenticationProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateAuthenticationProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateAuthenticationProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateAuthenticationProfileMutationKey() {
  return [
    '#Action=CreateAuthenticationProfile',
    '/#Action=CreateAuthenticationProfile',
    'POST',
  ] as const
}

export function getPostActionCreateAuthenticationProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateAuthenticationProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateAuthenticationProfile'].$post(args, options))
    },
  })
}

export function usePostActionCreateAuthenticationProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>,
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
  const mutationDefaults = getPostActionCreateAuthenticationProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateCluster', '/#Action=CreateCluster', keyArgs] as const
}

export function getActionCreateClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateClusterMutationKey() {
  return ['#Action=CreateCluster', '/#Action=CreateCluster', 'POST'] as const
}

export function getPostActionCreateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateCluster']['$post']>) {
      return parseResponse(client['#Action=CreateCluster'].$post(args, options))
    },
  })
}

export function usePostActionCreateCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateCluster']['$post']>,
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
  const mutationDefaults = getPostActionCreateClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateClusterParameterGroup',
    '/#Action=CreateClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCreateClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateClusterParameterGroupMutationKey() {
  return [
    '#Action=CreateClusterParameterGroup',
    '/#Action=CreateClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionCreateClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateClusterParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateClusterParameterGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateClusterSecurityGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateClusterSecurityGroup',
    '/#Action=CreateClusterSecurityGroup',
    keyArgs,
  ] as const
}

export function getActionCreateClusterSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateClusterSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateClusterSecurityGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateClusterSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateClusterSecurityGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateClusterSecurityGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateClusterSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateClusterSecurityGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateClusterSecurityGroupMutationKey() {
  return [
    '#Action=CreateClusterSecurityGroup',
    '/#Action=CreateClusterSecurityGroup',
    'POST',
  ] as const
}

export function getPostActionCreateClusterSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateClusterSecurityGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateClusterSecurityGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateClusterSecurityGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateClusterSecurityGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateClusterSnapshot', '/#Action=CreateClusterSnapshot', keyArgs] as const
}

export function getActionCreateClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateClusterSnapshotMutationKey() {
  return ['#Action=CreateClusterSnapshot', '/#Action=CreateClusterSnapshot', 'POST'] as const
}

export function getPostActionCreateClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCreateClusterSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionCreateClusterSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateClusterSubnetGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateClusterSubnetGroup', '/#Action=CreateClusterSubnetGroup', keyArgs] as const
}

export function getActionCreateClusterSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateClusterSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateClusterSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateClusterSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateClusterSubnetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateClusterSubnetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateClusterSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateClusterSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateClusterSubnetGroupMutationKey() {
  return ['#Action=CreateClusterSubnetGroup', '/#Action=CreateClusterSubnetGroup', 'POST'] as const
}

export function getPostActionCreateClusterSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateClusterSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateClusterSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateClusterSubnetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateClusterSubnetGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateEndpointAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateEndpointAccess', '/#Action=CreateEndpointAccess', keyArgs] as const
}

export function getActionCreateEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateEndpointAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateEndpointAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateEndpointAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateEndpointAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateEndpointAccessMutationKey() {
  return ['#Action=CreateEndpointAccess', '/#Action=CreateEndpointAccess', 'POST'] as const
}

export function getPostActionCreateEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateEndpointAccess'].$post(args, options))
    },
  })
}

export function usePostActionCreateEndpointAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEndpointAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$post']>,
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
  const mutationDefaults = getPostActionCreateEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateEventSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', keyArgs] as const
}

export function getActionCreateEventSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateEventSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateEventSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateEventSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateEventSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateEventSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateEventSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateEventSubscriptionMutationKey() {
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', 'POST'] as const
}

export function getPostActionCreateEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateEventSubscription'].$post(args, options))
    },
  })
}

export function usePostActionCreateEventSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
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
  const mutationDefaults = getPostActionCreateEventSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateHsmClientCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateHsmClientCertificate',
    '/#Action=CreateHsmClientCertificate',
    keyArgs,
  ] as const
}

export function getActionCreateHsmClientCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateHsmClientCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateHsmClientCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateHsmClientCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateHsmClientCertificateQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateHsmClientCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateHsmClientCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateHsmClientCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateHsmClientCertificateMutationKey() {
  return [
    '#Action=CreateHsmClientCertificate',
    '/#Action=CreateHsmClientCertificate',
    'POST',
  ] as const
}

export function getPostActionCreateHsmClientCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateHsmClientCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateHsmClientCertificate'].$post(args, options))
    },
  })
}

export function usePostActionCreateHsmClientCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>,
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
  const mutationDefaults = getPostActionCreateHsmClientCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateHsmConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateHsmConfiguration', '/#Action=CreateHsmConfiguration', keyArgs] as const
}

export function getActionCreateHsmConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateHsmConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateHsmConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateHsmConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateHsmConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateHsmConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateHsmConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateHsmConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateHsmConfigurationMutationKey() {
  return ['#Action=CreateHsmConfiguration', '/#Action=CreateHsmConfiguration', 'POST'] as const
}

export function getPostActionCreateHsmConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateHsmConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateHsmConfiguration'].$post(args, options))
    },
  })
}

export function usePostActionCreateHsmConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>,
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
  const mutationDefaults = getPostActionCreateHsmConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateScheduledActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateScheduledAction', '/#Action=CreateScheduledAction', keyArgs] as const
}

export function getActionCreateScheduledActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateScheduledActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateScheduledAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateScheduledActionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateScheduledActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateScheduledActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateScheduledAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateScheduledActionMutationKey() {
  return ['#Action=CreateScheduledAction', '/#Action=CreateScheduledAction', 'POST'] as const
}

export function getPostActionCreateScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateScheduledAction'].$post(args, options))
    },
  })
}

export function usePostActionCreateScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateScheduledAction']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$post']>,
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
  const mutationDefaults = getPostActionCreateScheduledActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateSnapshotCopyGrantQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateSnapshotCopyGrant', '/#Action=CreateSnapshotCopyGrant', keyArgs] as const
}

export function getActionCreateSnapshotCopyGrantQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateSnapshotCopyGrantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateSnapshotCopyGrant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateSnapshotCopyGrant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateSnapshotCopyGrantQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateSnapshotCopyGrantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateSnapshotCopyGrantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateSnapshotCopyGrant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateSnapshotCopyGrantMutationKey() {
  return ['#Action=CreateSnapshotCopyGrant', '/#Action=CreateSnapshotCopyGrant', 'POST'] as const
}

export function getPostActionCreateSnapshotCopyGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateSnapshotCopyGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateSnapshotCopyGrant'].$post(args, options))
    },
  })
}

export function usePostActionCreateSnapshotCopyGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>,
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
  const mutationDefaults = getPostActionCreateSnapshotCopyGrantMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateSnapshotScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateSnapshotSchedule', '/#Action=CreateSnapshotSchedule', keyArgs] as const
}

export function getActionCreateSnapshotScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateSnapshotScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateSnapshotSchedule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateSnapshotSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateSnapshotScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateSnapshotScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateSnapshotScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateSnapshotSchedule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateSnapshotScheduleMutationKey() {
  return ['#Action=CreateSnapshotSchedule', '/#Action=CreateSnapshotSchedule', 'POST'] as const
}

export function getPostActionCreateSnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateSnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateSnapshotSchedule'].$post(args, options))
    },
  })
}

export function usePostActionCreateSnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>,
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
  const mutationDefaults = getPostActionCreateSnapshotScheduleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateTags', '/#Action=CreateTags', keyArgs] as const
}

export function getActionCreateTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateTagsMutationKey() {
  return ['#Action=CreateTags', '/#Action=CreateTags', 'POST'] as const
}

export function getPostActionCreateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateTags']['$post']>) {
      return parseResponse(client['#Action=CreateTags'].$post(args, options))
    },
  })
}

export function usePostActionCreateTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateTags']['$post']>,
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
  const mutationDefaults = getPostActionCreateTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateUsageLimitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateUsageLimit', '/#Action=CreateUsageLimit', keyArgs] as const
}

export function getActionCreateUsageLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateUsageLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateUsageLimit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateUsageLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateUsageLimitQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateUsageLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateUsageLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateUsageLimit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateUsageLimitMutationKey() {
  return ['#Action=CreateUsageLimit', '/#Action=CreateUsageLimit', 'POST'] as const
}

export function getPostActionCreateUsageLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateUsageLimitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$post']>) {
      return parseResponse(client['#Action=CreateUsageLimit'].$post(args, options))
    },
  })
}

export function usePostActionCreateUsageLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUsageLimit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$post']>,
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
  const mutationDefaults = getPostActionCreateUsageLimitMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeauthorizeDataShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeauthorizeDataShare', '/#Action=DeauthorizeDataShare', keyArgs] as const
}

export function getActionDeauthorizeDataShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeauthorizeDataShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeauthorizeDataShare'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeauthorizeDataShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeauthorizeDataShareQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeauthorizeDataShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeauthorizeDataShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeauthorizeDataShare'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeauthorizeDataShareMutationKey() {
  return ['#Action=DeauthorizeDataShare', '/#Action=DeauthorizeDataShare', 'POST'] as const
}

export function getPostActionDeauthorizeDataShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeauthorizeDataShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>,
    ) {
      return parseResponse(client['#Action=DeauthorizeDataShare'].$post(args, options))
    },
  })
}

export function usePostActionDeauthorizeDataShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>,
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
  const mutationDefaults = getPostActionDeauthorizeDataShareMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteAuthenticationProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteAuthenticationProfile',
    '/#Action=DeleteAuthenticationProfile',
    keyArgs,
  ] as const
}

export function getActionDeleteAuthenticationProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAuthenticationProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAuthenticationProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAuthenticationProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAuthenticationProfileQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAuthenticationProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAuthenticationProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAuthenticationProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteAuthenticationProfileMutationKey() {
  return [
    '#Action=DeleteAuthenticationProfile',
    '/#Action=DeleteAuthenticationProfile',
    'POST',
  ] as const
}

export function getPostActionDeleteAuthenticationProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAuthenticationProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteAuthenticationProfile'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAuthenticationProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>,
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
  const mutationDefaults = getPostActionDeleteAuthenticationProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteCluster', '/#Action=DeleteCluster', keyArgs] as const
}

export function getActionDeleteClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteClusterMutationKey() {
  return ['#Action=DeleteCluster', '/#Action=DeleteCluster', 'POST'] as const
}

export function getPostActionDeleteClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteCluster']['$post']>) {
      return parseResponse(client['#Action=DeleteCluster'].$post(args, options))
    },
  })
}

export function usePostActionDeleteCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteCluster']['$post']>,
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
  const mutationDefaults = getPostActionDeleteClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteClusterParameterGroup',
    '/#Action=DeleteClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteClusterParameterGroupMutationKey() {
  return [
    '#Action=DeleteClusterParameterGroup',
    '/#Action=DeleteClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionDeleteClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteClusterParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteClusterParameterGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteClusterSecurityGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteClusterSecurityGroup',
    '/#Action=DeleteClusterSecurityGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteClusterSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteClusterSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteClusterSecurityGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteClusterSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteClusterSecurityGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteClusterSecurityGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteClusterSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteClusterSecurityGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteClusterSecurityGroupMutationKey() {
  return [
    '#Action=DeleteClusterSecurityGroup',
    '/#Action=DeleteClusterSecurityGroup',
    'POST',
  ] as const
}

export function getPostActionDeleteClusterSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteClusterSecurityGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteClusterSecurityGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteClusterSecurityGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteClusterSecurityGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteClusterSnapshot', '/#Action=DeleteClusterSnapshot', keyArgs] as const
}

export function getActionDeleteClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteClusterSnapshotMutationKey() {
  return ['#Action=DeleteClusterSnapshot', '/#Action=DeleteClusterSnapshot', 'POST'] as const
}

export function getPostActionDeleteClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionDeleteClusterSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionDeleteClusterSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteClusterSubnetGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteClusterSubnetGroup', '/#Action=DeleteClusterSubnetGroup', keyArgs] as const
}

export function getActionDeleteClusterSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteClusterSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteClusterSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteClusterSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteClusterSubnetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteClusterSubnetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteClusterSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteClusterSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteClusterSubnetGroupMutationKey() {
  return ['#Action=DeleteClusterSubnetGroup', '/#Action=DeleteClusterSubnetGroup', 'POST'] as const
}

export function getPostActionDeleteClusterSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteClusterSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteClusterSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteClusterSubnetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteClusterSubnetGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteEndpointAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteEndpointAccess', '/#Action=DeleteEndpointAccess', keyArgs] as const
}

export function getActionDeleteEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteEndpointAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteEndpointAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteEndpointAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteEndpointAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteEndpointAccessMutationKey() {
  return ['#Action=DeleteEndpointAccess', '/#Action=DeleteEndpointAccess', 'POST'] as const
}

export function getPostActionDeleteEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteEndpointAccess'].$post(args, options))
    },
  })
}

export function usePostActionDeleteEndpointAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>,
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
  const mutationDefaults = getPostActionDeleteEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteEventSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', keyArgs] as const
}

export function getActionDeleteEventSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteEventSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteEventSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteEventSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteEventSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteEventSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteEventSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteEventSubscriptionMutationKey() {
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', 'POST'] as const
}

export function getPostActionDeleteEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteEventSubscription'].$post(args, options))
    },
  })
}

export function usePostActionDeleteEventSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
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
  const mutationDefaults = getPostActionDeleteEventSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteHsmClientCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteHsmClientCertificate',
    '/#Action=DeleteHsmClientCertificate',
    keyArgs,
  ] as const
}

export function getActionDeleteHsmClientCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteHsmClientCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteHsmClientCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteHsmClientCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteHsmClientCertificateQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteHsmClientCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteHsmClientCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteHsmClientCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteHsmClientCertificateMutationKey() {
  return [
    '#Action=DeleteHsmClientCertificate',
    '/#Action=DeleteHsmClientCertificate',
    'POST',
  ] as const
}

export function getPostActionDeleteHsmClientCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteHsmClientCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteHsmClientCertificate'].$post(args, options))
    },
  })
}

export function usePostActionDeleteHsmClientCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>,
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
  const mutationDefaults = getPostActionDeleteHsmClientCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteHsmConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteHsmConfiguration', '/#Action=DeleteHsmConfiguration', keyArgs] as const
}

export function getActionDeleteHsmConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteHsmConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteHsmConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteHsmConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteHsmConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteHsmConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteHsmConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteHsmConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteHsmConfigurationMutationKey() {
  return ['#Action=DeleteHsmConfiguration', '/#Action=DeleteHsmConfiguration', 'POST'] as const
}

export function getPostActionDeleteHsmConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteHsmConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteHsmConfiguration'].$post(args, options))
    },
  })
}

export function usePostActionDeleteHsmConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>,
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
  const mutationDefaults = getPostActionDeleteHsmConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeletePartnerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeletePartner', '/#Action=DeletePartner', keyArgs] as const
}

export function getActionDeletePartnerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeletePartnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeletePartner'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeletePartner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeletePartnerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePartnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeletePartnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeletePartner'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeletePartnerMutationKey() {
  return ['#Action=DeletePartner', '/#Action=DeletePartner', 'POST'] as const
}

export function getPostActionDeletePartnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeletePartner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeletePartnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeletePartner']['$post']>) {
      return parseResponse(client['#Action=DeletePartner'].$post(args, options))
    },
  })
}

export function usePostActionDeletePartner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePartner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeletePartner']['$post']>,
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
  const mutationDefaults = getPostActionDeletePartnerMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteScheduledActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', keyArgs] as const
}

export function getActionDeleteScheduledActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteScheduledActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteScheduledAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteScheduledActionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteScheduledActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteScheduledActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteScheduledAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteScheduledActionMutationKey() {
  return ['#Action=DeleteScheduledAction', '/#Action=DeleteScheduledAction', 'POST'] as const
}

export function getPostActionDeleteScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteScheduledAction'].$post(args, options))
    },
  })
}

export function usePostActionDeleteScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteScheduledAction']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
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
  const mutationDefaults = getPostActionDeleteScheduledActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteSnapshotCopyGrantQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSnapshotCopyGrant', '/#Action=DeleteSnapshotCopyGrant', keyArgs] as const
}

export function getActionDeleteSnapshotCopyGrantQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSnapshotCopyGrantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSnapshotCopyGrant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSnapshotCopyGrant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSnapshotCopyGrantQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSnapshotCopyGrantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSnapshotCopyGrantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSnapshotCopyGrant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteSnapshotCopyGrantMutationKey() {
  return ['#Action=DeleteSnapshotCopyGrant', '/#Action=DeleteSnapshotCopyGrant', 'POST'] as const
}

export function getPostActionDeleteSnapshotCopyGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSnapshotCopyGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteSnapshotCopyGrant'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSnapshotCopyGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>,
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
  const mutationDefaults = getPostActionDeleteSnapshotCopyGrantMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteSnapshotScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSnapshotSchedule', '/#Action=DeleteSnapshotSchedule', keyArgs] as const
}

export function getActionDeleteSnapshotScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSnapshotScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSnapshotSchedule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSnapshotSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSnapshotScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSnapshotScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSnapshotScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSnapshotSchedule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteSnapshotScheduleMutationKey() {
  return ['#Action=DeleteSnapshotSchedule', '/#Action=DeleteSnapshotSchedule', 'POST'] as const
}

export function getPostActionDeleteSnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteSnapshotSchedule'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>,
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
  const mutationDefaults = getPostActionDeleteSnapshotScheduleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteTags', '/#Action=DeleteTags', keyArgs] as const
}

export function getActionDeleteTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteTagsMutationKey() {
  return ['#Action=DeleteTags', '/#Action=DeleteTags', 'POST'] as const
}

export function getPostActionDeleteTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>) {
      return parseResponse(client['#Action=DeleteTags'].$post(args, options))
    },
  })
}

export function usePostActionDeleteTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
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
  const mutationDefaults = getPostActionDeleteTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteUsageLimitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteUsageLimit', '/#Action=DeleteUsageLimit', keyArgs] as const
}

export function getActionDeleteUsageLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteUsageLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteUsageLimit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteUsageLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteUsageLimitQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUsageLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteUsageLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteUsageLimit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteUsageLimitMutationKey() {
  return ['#Action=DeleteUsageLimit', '/#Action=DeleteUsageLimit', 'POST'] as const
}

export function getPostActionDeleteUsageLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteUsageLimitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$post']>) {
      return parseResponse(client['#Action=DeleteUsageLimit'].$post(args, options))
    },
  })
}

export function usePostActionDeleteUsageLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUsageLimit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$post']>,
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
  const mutationDefaults = getPostActionDeleteUsageLimitMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeAccountAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeAccountAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAccountAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAccountAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAccountAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAccountAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAccountAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAccountAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeAccountAttributesMutationKey() {
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeAccountAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAccountAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAccountAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAccountAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeAuthenticationProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAuthenticationProfiles',
    '/#Action=DescribeAuthenticationProfiles',
    keyArgs,
  ] as const
}

export function getActionDescribeAuthenticationProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAuthenticationProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAuthenticationProfiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAuthenticationProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeAuthenticationProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAuthenticationProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAuthenticationProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAuthenticationProfiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeAuthenticationProfilesMutationKey() {
  return [
    '#Action=DescribeAuthenticationProfiles',
    '/#Action=DescribeAuthenticationProfiles',
    'POST',
  ] as const
}

export function getPostActionDescribeAuthenticationProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAuthenticationProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAuthenticationProfiles'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAuthenticationProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAuthenticationProfilesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterDbRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeClusterDbRevisions',
    '/#Action=DescribeClusterDbRevisions',
    keyArgs,
  ] as const
}

export function getActionDescribeClusterDbRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterDbRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterDbRevisions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterDbRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterDbRevisionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterDbRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterDbRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterDbRevisions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterDbRevisionsMutationKey() {
  return [
    '#Action=DescribeClusterDbRevisions',
    '/#Action=DescribeClusterDbRevisions',
    'POST',
  ] as const
}

export function getPostActionDescribeClusterDbRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterDbRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterDbRevisions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterDbRevisions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterDbRevisionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterParameterGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeClusterParameterGroups',
    '/#Action=DescribeClusterParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeClusterParameterGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterParameterGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterParameterGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterParameterGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterParameterGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterParameterGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterParameterGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterParameterGroupsMutationKey() {
  return [
    '#Action=DescribeClusterParameterGroups',
    '/#Action=DescribeClusterParameterGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeClusterParameterGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterParameterGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterParameterGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterParameterGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterParameterGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeClusterParameters',
    '/#Action=DescribeClusterParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeClusterParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterParametersMutationKey() {
  return [
    '#Action=DescribeClusterParameters',
    '/#Action=DescribeClusterParameters',
    'POST',
  ] as const
}

export function getPostActionDescribeClusterParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterParameters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterParametersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterSecurityGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeClusterSecurityGroups',
    '/#Action=DescribeClusterSecurityGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeClusterSecurityGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterSecurityGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterSecurityGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterSecurityGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterSecurityGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterSecurityGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterSecurityGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterSecurityGroupsMutationKey() {
  return [
    '#Action=DescribeClusterSecurityGroups',
    '/#Action=DescribeClusterSecurityGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeClusterSecurityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterSecurityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterSecurityGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterSecurityGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterSecurityGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeClusterSnapshots', '/#Action=DescribeClusterSnapshots', keyArgs] as const
}

export function getActionDescribeClusterSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterSnapshots'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterSnapshots'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterSnapshotsMutationKey() {
  return ['#Action=DescribeClusterSnapshots', '/#Action=DescribeClusterSnapshots', 'POST'] as const
}

export function getPostActionDescribeClusterSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterSnapshots'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterSubnetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeClusterSubnetGroups',
    '/#Action=DescribeClusterSubnetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeClusterSubnetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterSubnetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterSubnetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterSubnetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterSubnetGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterSubnetGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterSubnetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterSubnetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterSubnetGroupsMutationKey() {
  return [
    '#Action=DescribeClusterSubnetGroups',
    '/#Action=DescribeClusterSubnetGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeClusterSubnetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterSubnetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterSubnetGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterSubnetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterSubnetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterTracksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeClusterTracks', '/#Action=DescribeClusterTracks', keyArgs] as const
}

export function getActionDescribeClusterTracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterTracks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterTracksQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterTracks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterTracksMutationKey() {
  return ['#Action=DescribeClusterTracks', '/#Action=DescribeClusterTracks', 'POST'] as const
}

export function getPostActionDescribeClusterTracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterTracksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterTracks'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterTracks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterTracks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterTracksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClusterVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeClusterVersions', '/#Action=DescribeClusterVersions', keyArgs] as const
}

export function getActionDescribeClusterVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClusterVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusterVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusterVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClusterVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClusterVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClusterVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusterVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClusterVersionsMutationKey() {
  return ['#Action=DescribeClusterVersions', '/#Action=DescribeClusterVersions', 'POST'] as const
}

export function getPostActionDescribeClusterVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClusterVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeClusterVersions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusterVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusterVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClusterVersionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeClusters', '/#Action=DescribeClusters', keyArgs] as const
}

export function getActionDescribeClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeClusters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeClustersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeClusters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeClustersMutationKey() {
  return ['#Action=DescribeClusters', '/#Action=DescribeClusters', 'POST'] as const
}

export function getPostActionDescribeClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeClustersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeClusters']['$post']>) {
      return parseResponse(client['#Action=DescribeClusters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeClusters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeClusters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeClustersMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDataSharesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDataShares', '/#Action=DescribeDataShares', keyArgs] as const
}

export function getActionDescribeDataSharesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDataSharesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDataShares'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDataShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDataSharesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDataSharesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDataSharesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDataShares'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDataSharesMutationKey() {
  return ['#Action=DescribeDataShares', '/#Action=DescribeDataShares', 'POST'] as const
}

export function getPostActionDescribeDataSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDataShares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDataSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDataShares'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDataShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDataShares']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDataShares']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDataSharesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDataSharesForConsumerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDataSharesForConsumer',
    '/#Action=DescribeDataSharesForConsumer',
    keyArgs,
  ] as const
}

export function getActionDescribeDataSharesForConsumerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDataSharesForConsumerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDataSharesForConsumer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDataSharesForConsumer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDataSharesForConsumerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDataSharesForConsumerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDataSharesForConsumerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDataSharesForConsumer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDataSharesForConsumerMutationKey() {
  return [
    '#Action=DescribeDataSharesForConsumer',
    '/#Action=DescribeDataSharesForConsumer',
    'POST',
  ] as const
}

export function getPostActionDescribeDataSharesForConsumerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDataSharesForConsumerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDataSharesForConsumer'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDataSharesForConsumer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDataSharesForConsumerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeDataSharesForProducerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDataSharesForProducer',
    '/#Action=DescribeDataSharesForProducer',
    keyArgs,
  ] as const
}

export function getActionDescribeDataSharesForProducerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDataSharesForProducerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDataSharesForProducer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDataSharesForProducer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDataSharesForProducerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDataSharesForProducerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDataSharesForProducerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDataSharesForProducer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDataSharesForProducerMutationKey() {
  return [
    '#Action=DescribeDataSharesForProducer',
    '/#Action=DescribeDataSharesForProducer',
    'POST',
  ] as const
}

export function getPostActionDescribeDataSharesForProducerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDataSharesForProducerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDataSharesForProducer'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDataSharesForProducer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDataSharesForProducerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeDefaultClusterParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDefaultClusterParameters',
    '/#Action=DescribeDefaultClusterParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeDefaultClusterParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDefaultClusterParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDefaultClusterParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDefaultClusterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDefaultClusterParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDefaultClusterParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDefaultClusterParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDefaultClusterParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDefaultClusterParametersMutationKey() {
  return [
    '#Action=DescribeDefaultClusterParameters',
    '/#Action=DescribeDefaultClusterParameters',
    'POST',
  ] as const
}

export function getPostActionDescribeDefaultClusterParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDefaultClusterParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDefaultClusterParameters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDefaultClusterParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDefaultClusterParametersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeEndpointAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEndpointAccess', '/#Action=DescribeEndpointAccess', keyArgs] as const
}

export function getActionDescribeEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEndpointAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEndpointAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEndpointAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEndpointAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEndpointAccessMutationKey() {
  return ['#Action=DescribeEndpointAccess', '/#Action=DescribeEndpointAccess', 'POST'] as const
}

export function getPostActionDescribeEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEndpointAccess'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEndpointAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeEndpointAuthorizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEndpointAuthorization',
    '/#Action=DescribeEndpointAuthorization',
    keyArgs,
  ] as const
}

export function getActionDescribeEndpointAuthorizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEndpointAuthorizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEndpointAuthorization'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEndpointAuthorization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeEndpointAuthorizationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEndpointAuthorizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEndpointAuthorizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEndpointAuthorization'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEndpointAuthorizationMutationKey() {
  return [
    '#Action=DescribeEndpointAuthorization',
    '/#Action=DescribeEndpointAuthorization',
    'POST',
  ] as const
}

export function getPostActionDescribeEndpointAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEndpointAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEndpointAuthorization'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEndpointAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEndpointAuthorizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeEventCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', keyArgs] as const
}

export function getActionDescribeEventCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEventCategories'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEventCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEventCategories'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEventCategoriesMutationKey() {
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', 'POST'] as const
}

export function getPostActionDescribeEventCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEventCategories'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEventCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEventCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeEventSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    keyArgs,
  ] as const
}

export function getActionDescribeEventSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEventSubscriptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEventSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEventSubscriptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEventSubscriptionsMutationKey() {
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    'POST',
  ] as const
}

export function getPostActionDescribeEventSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEventSubscriptions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEventSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEventSubscriptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function getActionDescribeEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEvents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEvents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEventsMutationKey() {
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', 'POST'] as const
}

export function getPostActionDescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>) {
      return parseResponse(client['#Action=DescribeEvents'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEventsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeHsmClientCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeHsmClientCertificates',
    '/#Action=DescribeHsmClientCertificates',
    keyArgs,
  ] as const
}

export function getActionDescribeHsmClientCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeHsmClientCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeHsmClientCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeHsmClientCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeHsmClientCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeHsmClientCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeHsmClientCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeHsmClientCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeHsmClientCertificatesMutationKey() {
  return [
    '#Action=DescribeHsmClientCertificates',
    '/#Action=DescribeHsmClientCertificates',
    'POST',
  ] as const
}

export function getPostActionDescribeHsmClientCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeHsmClientCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeHsmClientCertificates'].$post(args, options))
    },
  })
}

export function usePostActionDescribeHsmClientCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>,
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
  const mutationDefaults = getPostActionDescribeHsmClientCertificatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeHsmConfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeHsmConfigurations',
    '/#Action=DescribeHsmConfigurations',
    keyArgs,
  ] as const
}

export function getActionDescribeHsmConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeHsmConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeHsmConfigurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeHsmConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeHsmConfigurationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeHsmConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeHsmConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeHsmConfigurations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeHsmConfigurationsMutationKey() {
  return [
    '#Action=DescribeHsmConfigurations',
    '/#Action=DescribeHsmConfigurations',
    'POST',
  ] as const
}

export function getPostActionDescribeHsmConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeHsmConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeHsmConfigurations'].$post(args, options))
    },
  })
}

export function usePostActionDescribeHsmConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>,
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
  const mutationDefaults = getPostActionDescribeHsmConfigurationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeLoggingStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeLoggingStatus', '/#Action=DescribeLoggingStatus', keyArgs] as const
}

export function getActionDescribeLoggingStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoggingStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoggingStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoggingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoggingStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoggingStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoggingStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoggingStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeLoggingStatusMutationKey() {
  return ['#Action=DescribeLoggingStatus', '/#Action=DescribeLoggingStatus', 'POST'] as const
}

export function getPostActionDescribeLoggingStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoggingStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoggingStatus'].$post(args, options))
    },
  })
}

export function usePostActionDescribeLoggingStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>,
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
  const mutationDefaults = getPostActionDescribeLoggingStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeNodeConfigurationOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeNodeConfigurationOptions',
    '/#Action=DescribeNodeConfigurationOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeNodeConfigurationOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeNodeConfigurationOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeNodeConfigurationOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeNodeConfigurationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeNodeConfigurationOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeNodeConfigurationOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeNodeConfigurationOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeNodeConfigurationOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeNodeConfigurationOptionsMutationKey() {
  return [
    '#Action=DescribeNodeConfigurationOptions',
    '/#Action=DescribeNodeConfigurationOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeNodeConfigurationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeNodeConfigurationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeNodeConfigurationOptions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeNodeConfigurationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeNodeConfigurationOptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeOrderableClusterOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeOrderableClusterOptions',
    '/#Action=DescribeOrderableClusterOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeOrderableClusterOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeOrderableClusterOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeOrderableClusterOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeOrderableClusterOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeOrderableClusterOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeOrderableClusterOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeOrderableClusterOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeOrderableClusterOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeOrderableClusterOptionsMutationKey() {
  return [
    '#Action=DescribeOrderableClusterOptions',
    '/#Action=DescribeOrderableClusterOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeOrderableClusterOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeOrderableClusterOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeOrderableClusterOptions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeOrderableClusterOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeOrderableClusterOptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribePartnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribePartners', '/#Action=DescribePartners', keyArgs] as const
}

export function getActionDescribePartnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribePartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribePartners'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribePartners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribePartnersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribePartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribePartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribePartners'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribePartnersMutationKey() {
  return ['#Action=DescribePartners', '/#Action=DescribePartners', 'POST'] as const
}

export function getPostActionDescribePartnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribePartners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribePartnersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribePartners']['$post']>) {
      return parseResponse(client['#Action=DescribePartners'].$post(args, options))
    },
  })
}

export function usePostActionDescribePartners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePartners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribePartners']['$post']>,
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
  const mutationDefaults = getPostActionDescribePartnersMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeReservedNodeExchangeStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReservedNodeExchangeStatus',
    '/#Action=DescribeReservedNodeExchangeStatus',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedNodeExchangeStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedNodeExchangeStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedNodeExchangeStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReservedNodeExchangeStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedNodeExchangeStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedNodeExchangeStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedNodeExchangeStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedNodeExchangeStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedNodeExchangeStatusMutationKey() {
  return [
    '#Action=DescribeReservedNodeExchangeStatus',
    '/#Action=DescribeReservedNodeExchangeStatus',
    'POST',
  ] as const
}

export function getPostActionDescribeReservedNodeExchangeStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedNodeExchangeStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeReservedNodeExchangeStatus'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeReservedNodeExchangeStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']>,
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
  const mutationDefaults = getPostActionDescribeReservedNodeExchangeStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeReservedNodeOfferingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReservedNodeOfferings',
    '/#Action=DescribeReservedNodeOfferings',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedNodeOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedNodeOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedNodeOfferings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReservedNodeOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedNodeOfferingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedNodeOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedNodeOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedNodeOfferings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedNodeOfferingsMutationKey() {
  return [
    '#Action=DescribeReservedNodeOfferings',
    '/#Action=DescribeReservedNodeOfferings',
    'POST',
  ] as const
}

export function getPostActionDescribeReservedNodeOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedNodeOfferingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReservedNodeOfferings'].$post(args, options))
    },
  })
}

export function usePostActionDescribeReservedNodeOfferings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>,
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
  const mutationDefaults = getPostActionDescribeReservedNodeOfferingsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeReservedNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeReservedNodes', '/#Action=DescribeReservedNodes', keyArgs] as const
}

export function getActionDescribeReservedNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedNodes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReservedNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedNodesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedNodes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedNodesMutationKey() {
  return ['#Action=DescribeReservedNodes', '/#Action=DescribeReservedNodes', 'POST'] as const
}

export function getPostActionDescribeReservedNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReservedNodes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeReservedNodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedNodes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeReservedNodesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeResizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeResize', '/#Action=DescribeResize', keyArgs] as const
}

export function getActionDescribeResizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeResizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeResize'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeResize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeResizeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeResizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeResizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeResize'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeResizeMutationKey() {
  return ['#Action=DescribeResize', '/#Action=DescribeResize', 'POST'] as const
}

export function getPostActionDescribeResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeResize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeResizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeResize']['$post']>) {
      return parseResponse(client['#Action=DescribeResize'].$post(args, options))
    },
  })
}

export function usePostActionDescribeResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeResize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeResize']['$post']>,
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
  const mutationDefaults = getPostActionDescribeResizeMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeScheduledActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', keyArgs] as const
}

export function getActionDescribeScheduledActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeScheduledActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeScheduledActions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeScheduledActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeScheduledActionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeScheduledActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeScheduledActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeScheduledActions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeScheduledActionsMutationKey() {
  return ['#Action=DescribeScheduledActions', '/#Action=DescribeScheduledActions', 'POST'] as const
}

export function getPostActionDescribeScheduledActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeScheduledActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeScheduledActions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeScheduledActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScheduledActions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeScheduledActionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeSnapshotCopyGrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeSnapshotCopyGrants',
    '/#Action=DescribeSnapshotCopyGrants',
    keyArgs,
  ] as const
}

export function getActionDescribeSnapshotCopyGrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeSnapshotCopyGrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeSnapshotCopyGrants'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeSnapshotCopyGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeSnapshotCopyGrantsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSnapshotCopyGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeSnapshotCopyGrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeSnapshotCopyGrants'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeSnapshotCopyGrantsMutationKey() {
  return [
    '#Action=DescribeSnapshotCopyGrants',
    '/#Action=DescribeSnapshotCopyGrants',
    'POST',
  ] as const
}

export function getPostActionDescribeSnapshotCopyGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeSnapshotCopyGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeSnapshotCopyGrants'].$post(args, options))
    },
  })
}

export function usePostActionDescribeSnapshotCopyGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>,
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
  const mutationDefaults = getPostActionDescribeSnapshotCopyGrantsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeSnapshotSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeSnapshotSchedules',
    '/#Action=DescribeSnapshotSchedules',
    keyArgs,
  ] as const
}

export function getActionDescribeSnapshotSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeSnapshotSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeSnapshotSchedules'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeSnapshotSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeSnapshotSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSnapshotSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeSnapshotSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeSnapshotSchedules'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeSnapshotSchedulesMutationKey() {
  return [
    '#Action=DescribeSnapshotSchedules',
    '/#Action=DescribeSnapshotSchedules',
    'POST',
  ] as const
}

export function getPostActionDescribeSnapshotSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeSnapshotSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeSnapshotSchedules'].$post(args, options))
    },
  })
}

export function usePostActionDescribeSnapshotSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>,
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
  const mutationDefaults = getPostActionDescribeSnapshotSchedulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeStorageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeStorage', '/#Action=DescribeStorage', keyArgs] as const
}

export function getActionDescribeStorageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeStorage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeStorageQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeStorage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeStorageMutationKey() {
  return ['#Action=DescribeStorage', '/#Action=DescribeStorage', 'POST'] as const
}

export function getPostActionDescribeStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStorage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStorageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeStorage']['$post']>) {
      return parseResponse(client['#Action=DescribeStorage'].$post(args, options))
    },
  })
}

export function usePostActionDescribeStorage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeStorage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeStorage']['$post']>,
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
  const mutationDefaults = getPostActionDescribeStorageMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeTableRestoreStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeTableRestoreStatus',
    '/#Action=DescribeTableRestoreStatus',
    keyArgs,
  ] as const
}

export function getActionDescribeTableRestoreStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTableRestoreStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTableRestoreStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTableRestoreStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTableRestoreStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTableRestoreStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTableRestoreStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTableRestoreStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeTableRestoreStatusMutationKey() {
  return [
    '#Action=DescribeTableRestoreStatus',
    '/#Action=DescribeTableRestoreStatus',
    'POST',
  ] as const
}

export function getPostActionDescribeTableRestoreStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTableRestoreStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTableRestoreStatus'].$post(args, options))
    },
  })
}

export function usePostActionDescribeTableRestoreStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>,
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
  const mutationDefaults = getPostActionDescribeTableRestoreStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDescribeTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function getActionDescribeTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeTagsMutationKey() {
  return ['#Action=DescribeTags', '/#Action=DescribeTags', 'POST'] as const
}

export function getPostActionDescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>) {
      return parseResponse(client['#Action=DescribeTags'].$post(args, options))
    },
  })
}

export function usePostActionDescribeTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
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
  const mutationDefaults = getPostActionDescribeTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeUsageLimitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeUsageLimits', '/#Action=DescribeUsageLimits', keyArgs] as const
}

export function getActionDescribeUsageLimitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeUsageLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeUsageLimits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeUsageLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeUsageLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeUsageLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeUsageLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeUsageLimits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeUsageLimitsMutationKey() {
  return ['#Action=DescribeUsageLimits', '/#Action=DescribeUsageLimits', 'POST'] as const
}

export function getPostActionDescribeUsageLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeUsageLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeUsageLimits'].$post(args, options))
    },
  })
}

export function usePostActionDescribeUsageLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeUsageLimits']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$post']>,
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
  const mutationDefaults = getPostActionDescribeUsageLimitsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDisableLoggingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DisableLogging', '/#Action=DisableLogging', keyArgs] as const
}

export function getActionDisableLoggingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisableLoggingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisableLogging'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDisableLogging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDisableLoggingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableLoggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisableLoggingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisableLogging'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDisableLoggingMutationKey() {
  return ['#Action=DisableLogging', '/#Action=DisableLogging', 'POST'] as const
}

export function getPostActionDisableLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisableLogging']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisableLoggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DisableLogging']['$post']>) {
      return parseResponse(client['#Action=DisableLogging'].$post(args, options))
    },
  })
}

export function usePostActionDisableLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableLogging']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DisableLogging']['$post']>,
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
  const mutationDefaults = getPostActionDisableLoggingMutationOptions<TError, TOnMutateResult>(
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

export function getActionDisableSnapshotCopyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DisableSnapshotCopy', '/#Action=DisableSnapshotCopy', keyArgs] as const
}

export function getActionDisableSnapshotCopyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisableSnapshotCopyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisableSnapshotCopy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDisableSnapshotCopy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDisableSnapshotCopyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableSnapshotCopyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisableSnapshotCopyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisableSnapshotCopy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDisableSnapshotCopyMutationKey() {
  return ['#Action=DisableSnapshotCopy', '/#Action=DisableSnapshotCopy', 'POST'] as const
}

export function getPostActionDisableSnapshotCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisableSnapshotCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>,
    ) {
      return parseResponse(client['#Action=DisableSnapshotCopy'].$post(args, options))
    },
  })
}

export function usePostActionDisableSnapshotCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>,
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
  const mutationDefaults = getPostActionDisableSnapshotCopyMutationOptions<TError, TOnMutateResult>(
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

export function getActionDisassociateDataShareConsumerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DisassociateDataShareConsumer',
    '/#Action=DisassociateDataShareConsumer',
    keyArgs,
  ] as const
}

export function getActionDisassociateDataShareConsumerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisassociateDataShareConsumerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisassociateDataShareConsumer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDisassociateDataShareConsumer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>
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
                  ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDisassociateDataShareConsumerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisassociateDataShareConsumerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisassociateDataShareConsumerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisassociateDataShareConsumer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDisassociateDataShareConsumerMutationKey() {
  return [
    '#Action=DisassociateDataShareConsumer',
    '/#Action=DisassociateDataShareConsumer',
    'POST',
  ] as const
}

export function getPostActionDisassociateDataShareConsumerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisassociateDataShareConsumerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>,
    ) {
      return parseResponse(client['#Action=DisassociateDataShareConsumer'].$post(args, options))
    },
  })
}

export function usePostActionDisassociateDataShareConsumer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>,
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
  const mutationDefaults = getPostActionDisassociateDataShareConsumerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionEnableLoggingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=EnableLogging', '/#Action=EnableLogging', keyArgs] as const
}

export function getActionEnableLoggingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionEnableLoggingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=EnableLogging'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionEnableLogging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionEnableLoggingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableLoggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionEnableLoggingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=EnableLogging'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionEnableLoggingMutationKey() {
  return ['#Action=EnableLogging', '/#Action=EnableLogging', 'POST'] as const
}

export function getPostActionEnableLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnableLogging']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableLoggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=EnableLogging']['$post']>) {
      return parseResponse(client['#Action=EnableLogging'].$post(args, options))
    },
  })
}

export function usePostActionEnableLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableLogging']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=EnableLogging']['$post']>,
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
  const mutationDefaults = getPostActionEnableLoggingMutationOptions<TError, TOnMutateResult>(
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

export function getActionEnableSnapshotCopyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=EnableSnapshotCopy', '/#Action=EnableSnapshotCopy', keyArgs] as const
}

export function getActionEnableSnapshotCopyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionEnableSnapshotCopyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=EnableSnapshotCopy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionEnableSnapshotCopy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionEnableSnapshotCopyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableSnapshotCopyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionEnableSnapshotCopyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=EnableSnapshotCopy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionEnableSnapshotCopyMutationKey() {
  return ['#Action=EnableSnapshotCopy', '/#Action=EnableSnapshotCopy', 'POST'] as const
}

export function getPostActionEnableSnapshotCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableSnapshotCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>,
    ) {
      return parseResponse(client['#Action=EnableSnapshotCopy'].$post(args, options))
    },
  })
}

export function usePostActionEnableSnapshotCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>,
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
  const mutationDefaults = getPostActionEnableSnapshotCopyMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetClusterCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetClusterCredentials', '/#Action=GetClusterCredentials', keyArgs] as const
}

export function getActionGetClusterCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetClusterCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetClusterCredentials'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetClusterCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetClusterCredentialsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetClusterCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetClusterCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetClusterCredentials'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetClusterCredentialsMutationKey() {
  return ['#Action=GetClusterCredentials', '/#Action=GetClusterCredentials', 'POST'] as const
}

export function getPostActionGetClusterCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetClusterCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$post']>,
    ) {
      return parseResponse(client['#Action=GetClusterCredentials'].$post(args, options))
    },
  })
}

export function usePostActionGetClusterCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentials']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$post']>,
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
  const mutationDefaults = getPostActionGetClusterCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetClusterCredentialsWithIAMQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetClusterCredentialsWithIAM',
    '/#Action=GetClusterCredentialsWithIAM',
    keyArgs,
  ] as const
}

export function getActionGetClusterCredentialsWithIAMQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetClusterCredentialsWithIAMQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetClusterCredentialsWithIAM'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetClusterCredentialsWithIAM<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetClusterCredentialsWithIAMQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetClusterCredentialsWithIAMQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetClusterCredentialsWithIAMQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetClusterCredentialsWithIAM'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetClusterCredentialsWithIAMMutationKey() {
  return [
    '#Action=GetClusterCredentialsWithIAM',
    '/#Action=GetClusterCredentialsWithIAM',
    'POST',
  ] as const
}

export function getPostActionGetClusterCredentialsWithIAMMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetClusterCredentialsWithIAMMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>,
    ) {
      return parseResponse(client['#Action=GetClusterCredentialsWithIAM'].$post(args, options))
    },
  })
}

export function usePostActionGetClusterCredentialsWithIAM<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>,
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
  const mutationDefaults = getPostActionGetClusterCredentialsWithIAMMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetReservedNodeExchangeConfigurationOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetReservedNodeExchangeConfigurationOptions',
    '/#Action=GetReservedNodeExchangeConfigurationOptions',
    keyArgs,
  ] as const
}

export function getActionGetReservedNodeExchangeConfigurationOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetReservedNodeExchangeConfigurationOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetReservedNodeExchangeConfigurationOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetReservedNodeExchangeConfigurationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getActionGetReservedNodeExchangeConfigurationOptionsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetReservedNodeExchangeConfigurationOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetReservedNodeExchangeConfigurationOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetReservedNodeExchangeConfigurationOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetReservedNodeExchangeConfigurationOptionsMutationKey() {
  return [
    '#Action=GetReservedNodeExchangeConfigurationOptions',
    '/#Action=GetReservedNodeExchangeConfigurationOptions',
    'POST',
  ] as const
}

export function getPostActionGetReservedNodeExchangeConfigurationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetReservedNodeExchangeConfigurationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=GetReservedNodeExchangeConfigurationOptions'].$post(args, options),
      )
    },
  })
}

export function usePostActionGetReservedNodeExchangeConfigurationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
          >,
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
  const mutationDefaults = getPostActionGetReservedNodeExchangeConfigurationOptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetReservedNodeExchangeOfferingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetReservedNodeExchangeOfferings',
    '/#Action=GetReservedNodeExchangeOfferings',
    keyArgs,
  ] as const
}

export function getActionGetReservedNodeExchangeOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetReservedNodeExchangeOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetReservedNodeExchangeOfferings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetReservedNodeExchangeOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>
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
                  ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetReservedNodeExchangeOfferingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetReservedNodeExchangeOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetReservedNodeExchangeOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetReservedNodeExchangeOfferings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetReservedNodeExchangeOfferingsMutationKey() {
  return [
    '#Action=GetReservedNodeExchangeOfferings',
    '/#Action=GetReservedNodeExchangeOfferings',
    'POST',
  ] as const
}

export function getPostActionGetReservedNodeExchangeOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetReservedNodeExchangeOfferingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>,
    ) {
      return parseResponse(client['#Action=GetReservedNodeExchangeOfferings'].$post(args, options))
    },
  })
}

export function usePostActionGetReservedNodeExchangeOfferings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>,
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
  const mutationDefaults = getPostActionGetReservedNodeExchangeOfferingsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyAquaConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyAquaConfiguration', '/#Action=ModifyAquaConfiguration', keyArgs] as const
}

export function getActionModifyAquaConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyAquaConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyAquaConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyAquaConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyAquaConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyAquaConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyAquaConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyAquaConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyAquaConfigurationMutationKey() {
  return ['#Action=ModifyAquaConfiguration', '/#Action=ModifyAquaConfiguration', 'POST'] as const
}

export function getPostActionModifyAquaConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyAquaConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyAquaConfiguration'].$post(args, options))
    },
  })
}

export function usePostActionModifyAquaConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>,
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
  const mutationDefaults = getPostActionModifyAquaConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyAuthenticationProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyAuthenticationProfile',
    '/#Action=ModifyAuthenticationProfile',
    keyArgs,
  ] as const
}

export function getActionModifyAuthenticationProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyAuthenticationProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyAuthenticationProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyAuthenticationProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyAuthenticationProfileQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyAuthenticationProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyAuthenticationProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyAuthenticationProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyAuthenticationProfileMutationKey() {
  return [
    '#Action=ModifyAuthenticationProfile',
    '/#Action=ModifyAuthenticationProfile',
    'POST',
  ] as const
}

export function getPostActionModifyAuthenticationProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyAuthenticationProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyAuthenticationProfile'].$post(args, options))
    },
  })
}

export function usePostActionModifyAuthenticationProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>,
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
  const mutationDefaults = getPostActionModifyAuthenticationProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyCluster', '/#Action=ModifyCluster', keyArgs] as const
}

export function getActionModifyClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterMutationKey() {
  return ['#Action=ModifyCluster', '/#Action=ModifyCluster', 'POST'] as const
}

export function getPostActionModifyClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyCluster']['$post']>) {
      return parseResponse(client['#Action=ModifyCluster'].$post(args, options))
    },
  })
}

export function usePostActionModifyCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCluster']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyClusterDbRevisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyClusterDbRevision', '/#Action=ModifyClusterDbRevision', keyArgs] as const
}

export function getActionModifyClusterDbRevisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterDbRevisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterDbRevision'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterDbRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterDbRevisionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterDbRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterDbRevisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterDbRevision'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterDbRevisionMutationKey() {
  return ['#Action=ModifyClusterDbRevision', '/#Action=ModifyClusterDbRevision', 'POST'] as const
}

export function getPostActionModifyClusterDbRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterDbRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterDbRevision'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterDbRevision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterDbRevisionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterIamRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyClusterIamRoles', '/#Action=ModifyClusterIamRoles', keyArgs] as const
}

export function getActionModifyClusterIamRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterIamRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterIamRoles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterIamRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterIamRolesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterIamRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterIamRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterIamRoles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterIamRolesMutationKey() {
  return ['#Action=ModifyClusterIamRoles', '/#Action=ModifyClusterIamRoles', 'POST'] as const
}

export function getPostActionModifyClusterIamRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterIamRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterIamRoles'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterIamRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterIamRolesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterMaintenanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyClusterMaintenance', '/#Action=ModifyClusterMaintenance', keyArgs] as const
}

export function getActionModifyClusterMaintenanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterMaintenanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterMaintenance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterMaintenance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterMaintenanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterMaintenanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterMaintenanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterMaintenance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterMaintenanceMutationKey() {
  return ['#Action=ModifyClusterMaintenance', '/#Action=ModifyClusterMaintenance', 'POST'] as const
}

export function getPostActionModifyClusterMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterMaintenance'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterMaintenance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterMaintenanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyClusterParameterGroup',
    '/#Action=ModifyClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionModifyClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterParameterGroupMutationKey() {
  return [
    '#Action=ModifyClusterParameterGroup',
    '/#Action=ModifyClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionModifyClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterParameterGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyClusterSnapshot', '/#Action=ModifyClusterSnapshot', keyArgs] as const
}

export function getActionModifyClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterSnapshotMutationKey() {
  return ['#Action=ModifyClusterSnapshot', '/#Action=ModifyClusterSnapshot', 'POST'] as const
}

export function getPostActionModifyClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterSnapshotScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyClusterSnapshotSchedule',
    '/#Action=ModifyClusterSnapshotSchedule',
    keyArgs,
  ] as const
}

export function getActionModifyClusterSnapshotScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterSnapshotScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterSnapshotSchedule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterSnapshotSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>
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
                  ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterSnapshotScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterSnapshotScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterSnapshotScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterSnapshotSchedule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterSnapshotScheduleMutationKey() {
  return [
    '#Action=ModifyClusterSnapshotSchedule',
    '/#Action=ModifyClusterSnapshotSchedule',
    'POST',
  ] as const
}

export function getPostActionModifyClusterSnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterSnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterSnapshotSchedule'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterSnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterSnapshotScheduleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyClusterSubnetGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyClusterSubnetGroup', '/#Action=ModifyClusterSubnetGroup', keyArgs] as const
}

export function getActionModifyClusterSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyClusterSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyClusterSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyClusterSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyClusterSubnetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyClusterSubnetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyClusterSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyClusterSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyClusterSubnetGroupMutationKey() {
  return ['#Action=ModifyClusterSubnetGroup', '/#Action=ModifyClusterSubnetGroup', 'POST'] as const
}

export function getPostActionModifyClusterSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyClusterSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyClusterSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyClusterSubnetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyClusterSubnetGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyEndpointAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyEndpointAccess', '/#Action=ModifyEndpointAccess', keyArgs] as const
}

export function getActionModifyEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyEndpointAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyEndpointAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyEndpointAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyEndpointAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyEndpointAccessMutationKey() {
  return ['#Action=ModifyEndpointAccess', '/#Action=ModifyEndpointAccess', 'POST'] as const
}

export function getPostActionModifyEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyEndpointAccess'].$post(args, options))
    },
  })
}

export function usePostActionModifyEndpointAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>,
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
  const mutationDefaults = getPostActionModifyEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyEventSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', keyArgs] as const
}

export function getActionModifyEventSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyEventSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyEventSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyEventSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyEventSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyEventSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyEventSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyEventSubscriptionMutationKey() {
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', 'POST'] as const
}

export function getPostActionModifyEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyEventSubscription'].$post(args, options))
    },
  })
}

export function usePostActionModifyEventSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
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
  const mutationDefaults = getPostActionModifyEventSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyScheduledActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyScheduledAction', '/#Action=ModifyScheduledAction', keyArgs] as const
}

export function getActionModifyScheduledActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyScheduledActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyScheduledAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyScheduledAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyScheduledActionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyScheduledActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyScheduledActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyScheduledAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyScheduledActionMutationKey() {
  return ['#Action=ModifyScheduledAction', '/#Action=ModifyScheduledAction', 'POST'] as const
}

export function getPostActionModifyScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyScheduledAction'].$post(args, options))
    },
  })
}

export function usePostActionModifyScheduledAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyScheduledAction']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$post']>,
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
  const mutationDefaults = getPostActionModifyScheduledActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifySnapshotCopyRetentionPeriodQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifySnapshotCopyRetentionPeriod',
    '/#Action=ModifySnapshotCopyRetentionPeriod',
    keyArgs,
  ] as const
}

export function getActionModifySnapshotCopyRetentionPeriodQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifySnapshotCopyRetentionPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifySnapshotCopyRetentionPeriod'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifySnapshotCopyRetentionPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
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
                  ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionModifySnapshotCopyRetentionPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifySnapshotCopyRetentionPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifySnapshotCopyRetentionPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifySnapshotCopyRetentionPeriod'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifySnapshotCopyRetentionPeriodMutationKey() {
  return [
    '#Action=ModifySnapshotCopyRetentionPeriod',
    '/#Action=ModifySnapshotCopyRetentionPeriod',
    'POST',
  ] as const
}

export function getPostActionModifySnapshotCopyRetentionPeriodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifySnapshotCopyRetentionPeriodMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifySnapshotCopyRetentionPeriod'].$post(args, options))
    },
  })
}

export function usePostActionModifySnapshotCopyRetentionPeriod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>,
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
  const mutationDefaults = getPostActionModifySnapshotCopyRetentionPeriodMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifySnapshotScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifySnapshotSchedule', '/#Action=ModifySnapshotSchedule', keyArgs] as const
}

export function getActionModifySnapshotScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifySnapshotScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifySnapshotSchedule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifySnapshotSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifySnapshotScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifySnapshotScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifySnapshotScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifySnapshotSchedule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifySnapshotScheduleMutationKey() {
  return ['#Action=ModifySnapshotSchedule', '/#Action=ModifySnapshotSchedule', 'POST'] as const
}

export function getPostActionModifySnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifySnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifySnapshotSchedule'].$post(args, options))
    },
  })
}

export function usePostActionModifySnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>,
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
  const mutationDefaults = getPostActionModifySnapshotScheduleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionModifyUsageLimitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyUsageLimit', '/#Action=ModifyUsageLimit', keyArgs] as const
}

export function getActionModifyUsageLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyUsageLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyUsageLimit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyUsageLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyUsageLimitQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyUsageLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyUsageLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyUsageLimit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyUsageLimitMutationKey() {
  return ['#Action=ModifyUsageLimit', '/#Action=ModifyUsageLimit', 'POST'] as const
}

export function getPostActionModifyUsageLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyUsageLimitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$post']>) {
      return parseResponse(client['#Action=ModifyUsageLimit'].$post(args, options))
    },
  })
}

export function usePostActionModifyUsageLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyUsageLimit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$post']>,
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
  const mutationDefaults = getPostActionModifyUsageLimitMutationOptions<TError, TOnMutateResult>(
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

export function getActionPauseClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PauseCluster', '/#Action=PauseCluster', keyArgs] as const
}

export function getActionPauseClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPauseClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PauseCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPauseCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPauseClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPauseClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPauseClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PauseCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPauseClusterMutationKey() {
  return ['#Action=PauseCluster', '/#Action=PauseCluster', 'POST'] as const
}

export function getPostActionPauseClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PauseCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPauseClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PauseCluster']['$post']>) {
      return parseResponse(client['#Action=PauseCluster'].$post(args, options))
    },
  })
}

export function usePostActionPauseCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PauseCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PauseCluster']['$post']>,
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
  const mutationDefaults = getPostActionPauseClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionPurchaseReservedNodeOfferingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PurchaseReservedNodeOffering',
    '/#Action=PurchaseReservedNodeOffering',
    keyArgs,
  ] as const
}

export function getActionPurchaseReservedNodeOfferingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPurchaseReservedNodeOfferingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PurchaseReservedNodeOffering'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPurchaseReservedNodeOffering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPurchaseReservedNodeOfferingQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPurchaseReservedNodeOfferingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPurchaseReservedNodeOfferingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PurchaseReservedNodeOffering'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPurchaseReservedNodeOfferingMutationKey() {
  return [
    '#Action=PurchaseReservedNodeOffering',
    '/#Action=PurchaseReservedNodeOffering',
    'POST',
  ] as const
}

export function getPostActionPurchaseReservedNodeOfferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPurchaseReservedNodeOfferingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>,
    ) {
      return parseResponse(client['#Action=PurchaseReservedNodeOffering'].$post(args, options))
    },
  })
}

export function usePostActionPurchaseReservedNodeOffering<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>,
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
  const mutationDefaults = getPostActionPurchaseReservedNodeOfferingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRebootClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RebootCluster', '/#Action=RebootCluster', keyArgs] as const
}

export function getActionRebootClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRebootClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RebootCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRebootCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRebootClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRebootClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRebootClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RebootCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRebootClusterMutationKey() {
  return ['#Action=RebootCluster', '/#Action=RebootCluster', 'POST'] as const
}

export function getPostActionRebootClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RebootCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRebootClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RebootCluster']['$post']>) {
      return parseResponse(client['#Action=RebootCluster'].$post(args, options))
    },
  })
}

export function usePostActionRebootCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RebootCluster']['$post']>,
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
  const mutationDefaults = getPostActionRebootClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionRejectDataShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RejectDataShare', '/#Action=RejectDataShare', keyArgs] as const
}

export function getActionRejectDataShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRejectDataShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RejectDataShare'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRejectDataShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRejectDataShareQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRejectDataShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRejectDataShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RejectDataShare'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRejectDataShareMutationKey() {
  return ['#Action=RejectDataShare', '/#Action=RejectDataShare', 'POST'] as const
}

export function getPostActionRejectDataShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RejectDataShare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRejectDataShareMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RejectDataShare']['$post']>) {
      return parseResponse(client['#Action=RejectDataShare'].$post(args, options))
    },
  })
}

export function usePostActionRejectDataShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RejectDataShare']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RejectDataShare']['$post']>,
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
  const mutationDefaults = getPostActionRejectDataShareMutationOptions<TError, TOnMutateResult>(
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

export function getActionResetClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ResetClusterParameterGroup',
    '/#Action=ResetClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionResetClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResetClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResetClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResetClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResetClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResetClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResetClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResetClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResetClusterParameterGroupMutationKey() {
  return [
    '#Action=ResetClusterParameterGroup',
    '/#Action=ResetClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionResetClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResetClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ResetClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionResetClusterParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionResetClusterParameterGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionResizeClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ResizeCluster', '/#Action=ResizeCluster', keyArgs] as const
}

export function getActionResizeClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResizeClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResizeCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResizeCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResizeClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResizeClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResizeClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResizeCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResizeClusterMutationKey() {
  return ['#Action=ResizeCluster', '/#Action=ResizeCluster', 'POST'] as const
}

export function getPostActionResizeClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResizeCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResizeClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ResizeCluster']['$post']>) {
      return parseResponse(client['#Action=ResizeCluster'].$post(args, options))
    },
  })
}

export function usePostActionResizeCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResizeCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResizeCluster']['$post']>,
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
  const mutationDefaults = getPostActionResizeClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionRestoreFromClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RestoreFromClusterSnapshot',
    '/#Action=RestoreFromClusterSnapshot',
    keyArgs,
  ] as const
}

export function getActionRestoreFromClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreFromClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreFromClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreFromClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRestoreFromClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreFromClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreFromClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreFromClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreFromClusterSnapshotMutationKey() {
  return [
    '#Action=RestoreFromClusterSnapshot',
    '/#Action=RestoreFromClusterSnapshot',
    'POST',
  ] as const
}

export function getPostActionRestoreFromClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreFromClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreFromClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionRestoreFromClusterSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionRestoreFromClusterSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRestoreTableFromClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RestoreTableFromClusterSnapshot',
    '/#Action=RestoreTableFromClusterSnapshot',
    keyArgs,
  ] as const
}

export function getActionRestoreTableFromClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreTableFromClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreTableFromClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreTableFromClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>
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
                  ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRestoreTableFromClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreTableFromClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreTableFromClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreTableFromClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreTableFromClusterSnapshotMutationKey() {
  return [
    '#Action=RestoreTableFromClusterSnapshot',
    '/#Action=RestoreTableFromClusterSnapshot',
    'POST',
  ] as const
}

export function getPostActionRestoreTableFromClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreTableFromClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreTableFromClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionRestoreTableFromClusterSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionRestoreTableFromClusterSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionResumeClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ResumeCluster', '/#Action=ResumeCluster', keyArgs] as const
}

export function getActionResumeClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResumeClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResumeCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResumeCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResumeClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResumeClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResumeClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResumeCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResumeClusterMutationKey() {
  return ['#Action=ResumeCluster', '/#Action=ResumeCluster', 'POST'] as const
}

export function getPostActionResumeClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResumeCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResumeClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ResumeCluster']['$post']>) {
      return parseResponse(client['#Action=ResumeCluster'].$post(args, options))
    },
  })
}

export function usePostActionResumeCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResumeCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResumeCluster']['$post']>,
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
  const mutationDefaults = getPostActionResumeClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionRevokeClusterSecurityGroupIngressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RevokeClusterSecurityGroupIngress',
    '/#Action=RevokeClusterSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionRevokeClusterSecurityGroupIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRevokeClusterSecurityGroupIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RevokeClusterSecurityGroupIngress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRevokeClusterSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
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
                  ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRevokeClusterSecurityGroupIngressQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRevokeClusterSecurityGroupIngressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRevokeClusterSecurityGroupIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RevokeClusterSecurityGroupIngress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRevokeClusterSecurityGroupIngressMutationKey() {
  return [
    '#Action=RevokeClusterSecurityGroupIngress',
    '/#Action=RevokeClusterSecurityGroupIngress',
    'POST',
  ] as const
}

export function getPostActionRevokeClusterSecurityGroupIngressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRevokeClusterSecurityGroupIngressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>,
    ) {
      return parseResponse(client['#Action=RevokeClusterSecurityGroupIngress'].$post(args, options))
    },
  })
}

export function usePostActionRevokeClusterSecurityGroupIngress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>,
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
  const mutationDefaults = getPostActionRevokeClusterSecurityGroupIngressMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRevokeEndpointAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RevokeEndpointAccess', '/#Action=RevokeEndpointAccess', keyArgs] as const
}

export function getActionRevokeEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRevokeEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RevokeEndpointAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRevokeEndpointAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRevokeEndpointAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRevokeEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRevokeEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RevokeEndpointAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRevokeEndpointAccessMutationKey() {
  return ['#Action=RevokeEndpointAccess', '/#Action=RevokeEndpointAccess', 'POST'] as const
}

export function getPostActionRevokeEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRevokeEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=RevokeEndpointAccess'].$post(args, options))
    },
  })
}

export function usePostActionRevokeEndpointAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>,
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
  const mutationDefaults = getPostActionRevokeEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRevokeSnapshotAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RevokeSnapshotAccess', '/#Action=RevokeSnapshotAccess', keyArgs] as const
}

export function getActionRevokeSnapshotAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRevokeSnapshotAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RevokeSnapshotAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRevokeSnapshotAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRevokeSnapshotAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRevokeSnapshotAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRevokeSnapshotAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RevokeSnapshotAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRevokeSnapshotAccessMutationKey() {
  return ['#Action=RevokeSnapshotAccess', '/#Action=RevokeSnapshotAccess', 'POST'] as const
}

export function getPostActionRevokeSnapshotAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRevokeSnapshotAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=RevokeSnapshotAccess'].$post(args, options))
    },
  })
}

export function usePostActionRevokeSnapshotAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>,
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
  const mutationDefaults = getPostActionRevokeSnapshotAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRotateEncryptionKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RotateEncryptionKey', '/#Action=RotateEncryptionKey', keyArgs] as const
}

export function getActionRotateEncryptionKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRotateEncryptionKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RotateEncryptionKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRotateEncryptionKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRotateEncryptionKeyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRotateEncryptionKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRotateEncryptionKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RotateEncryptionKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRotateEncryptionKeyMutationKey() {
  return ['#Action=RotateEncryptionKey', '/#Action=RotateEncryptionKey', 'POST'] as const
}

export function getPostActionRotateEncryptionKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRotateEncryptionKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$post']>,
    ) {
      return parseResponse(client['#Action=RotateEncryptionKey'].$post(args, options))
    },
  })
}

export function usePostActionRotateEncryptionKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RotateEncryptionKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$post']>,
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
  const mutationDefaults = getPostActionRotateEncryptionKeyMutationOptions<TError, TOnMutateResult>(
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

export function getActionUpdatePartnerStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdatePartnerStatus', '/#Action=UpdatePartnerStatus', keyArgs] as const
}

export function getActionUpdatePartnerStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdatePartnerStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdatePartnerStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdatePartnerStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdatePartnerStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdatePartnerStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdatePartnerStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdatePartnerStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdatePartnerStatusMutationKey() {
  return ['#Action=UpdatePartnerStatus', '/#Action=UpdatePartnerStatus', 'POST'] as const
}

export function getPostActionUpdatePartnerStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdatePartnerStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdatePartnerStatus'].$post(args, options))
    },
  })
}

export function usePostActionUpdatePartnerStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>,
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
  const mutationDefaults = getPostActionUpdatePartnerStatusMutationOptions<TError, TOnMutateResult>(
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
