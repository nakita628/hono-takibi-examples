import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceAssociateFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCopyImageKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CopyImage'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateAppBlockKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateApplicationKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateApplication'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateEntitlementKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateImageBuilderKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateStackKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateStack'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateStreamingURLKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceCreateUserKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.CreateUser'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteAppBlockKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteApplicationKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteEntitlementKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteImageKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteImage'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteStackKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteStack'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDeleteUserKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DeleteUser'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeApplicationsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeFleetsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeImagesKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeImages'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeSessionsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeStacksKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDescribeUsersKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDisableUserKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DisableUser'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceDisassociateFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceEnableUserKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.EnableUser'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceExpireSessionKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.ExpireSession'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceListAssociatedStacksKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceStartFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.StartFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceStartImageBuilderKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceStopFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.StopFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceStopImageBuilderKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceTagResourceKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.TagResource'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUntagResourceKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UntagResource'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUpdateApplicationKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUpdateEntitlementKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUpdateFleetKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions'] as const
}

export function getXAmzTargetPhotonAdminProxyServiceUpdateStackKey() {
  return ['#X-Amz-Target=PhotonAdminProxyService.UpdateStack'] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.AssociateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.AssociateFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceAssociateFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceAssociateFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceAssociateFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack',
    '/#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack',
    '/#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCopyImageMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CopyImage',
    '/#X-Amz-Target=PhotonAdminProxyService.CopyImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCopyImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCopyImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CopyImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCopyImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCopyImageMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateAppBlockMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateAppBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateAppBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateAppBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCreateAppBlockMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateApplicationMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateApplication',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateApplication'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCreateApplicationMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateEntitlementMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateEntitlementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateEntitlementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateEntitlement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCreateEntitlementMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCreateFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateImageBuilder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateStackMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateStack',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateStack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateStack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCreateStackMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateStreamingURLMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateStreamingURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateStreamingURLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateStreamingURL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceCreateStreamingURLMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUserMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateUser',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.CreateUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceCreateUserMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteAppBlockMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteAppBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteAppBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteAppBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteAppBlockMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteApplicationMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteApplication',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteApplicationMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteEntitlementMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteEntitlementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteEntitlementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteEntitlement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteEntitlementMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImageMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteImage',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteImageMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteStackMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteStack',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteStack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteStack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteStackMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteUser',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DeleteUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDeleteUserMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeApplications',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeFleetsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeFleets',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeFleets',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeFleetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeFleetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeFleets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDescribeFleetsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeImageBuilders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImagesMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeImages',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeImages'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDescribeImagesMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeSessionsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeSessions',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDescribeSessionsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeStacksMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeStacks',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeStacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeStacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeStacks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDescribeStacksMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUsersMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeUsers',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDescribeUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDescribeUsersMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDisableUserMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisableUser',
    '/#X-Amz-Target=PhotonAdminProxyService.DisableUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisableUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDisableUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DisableUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisableUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDisableUserMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceDisassociateFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisassociateFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceDisassociateFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceEnableUserMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.EnableUser',
    '/#X-Amz-Target=PhotonAdminProxyService.EnableUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceEnableUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceEnableUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.EnableUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceEnableUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceEnableUserMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceExpireSessionMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ExpireSession',
    '/#X-Amz-Target=PhotonAdminProxyService.ExpireSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceExpireSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceExpireSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.ExpireSession'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceExpireSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceExpireSessionMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets',
    '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceListAssociatedFleets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceListAssociatedStacksMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks',
    '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceListAssociatedStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceListAssociatedStacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceListAssociatedStacks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceListAssociatedStacksMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications',
    '/#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceListEntitledApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource',
    '/#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceStartFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StartFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.StartFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceStartFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceStartFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.StartFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceStartFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceStartFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceStartImageBuilderMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceStartImageBuilderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceStartImageBuilderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceStartImageBuilder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceStartImageBuilderMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceStopFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StopFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.StopFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceStopFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceStopFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.StopFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceStopFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceStopFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceStopImageBuilderMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceStopImageBuilderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceStopImageBuilderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceStopImageBuilder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceStopImageBuilderMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.TagResource',
    '/#X-Amz-Target=PhotonAdminProxyService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UntagResource',
    '/#X-Amz-Target=PhotonAdminProxyService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateApplicationMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateApplication',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceUpdateApplicationMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateEntitlementMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateEntitlementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUpdateEntitlementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateEntitlement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceUpdateEntitlementMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateFleetMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUpdateFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceUpdateFleetMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsMutationOptions<
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

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateStackMutationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateStack',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPhotonAdminProxyServiceUpdateStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PhotonAdminProxyService.UpdateStack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateStack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetPhotonAdminProxyServiceUpdateStackMutationOptions<
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
